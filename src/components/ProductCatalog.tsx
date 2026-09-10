import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data';
import { REGISTRY_PRODUCTS } from '../productsRegistryData';
import { Product, RfqBasketItem } from '../types';
import { Search, SlidersHorizontal, Info, Send, CheckCircle2, Shield, Settings, Globe, ChevronLeft, ChevronRight, Layers, X, Filter, Plus, Check, Package, Sparkles } from 'lucide-react';
import { getProductOfficialUrl } from '../utils/productUrls';
import { getProductImageUrl, CLEAN_FALLBACK_IMAGE } from '../utils/productImages';

interface ProductCatalogProps {
  selectedBrandFilter: string;
  setSelectedBrandFilter: (brand: string) => void;
  onSubmitEnquiry: (enquiry: { name: string; email: string; phone: string; company: string; productName: string; brandName: string; message: string }) => void;
  rfqBasket?: RfqBasketItem[];
  onToggleRfq?: (product: Product) => void;
  onOpenRfqDrawer?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedBrandFilter,
  setSelectedBrandFilter,
  onSubmitEnquiry,
  rfqBasket = [],
  onToggleRfq,
  onOpenRfqDrawer
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);
  const [activeProductTab, setActiveProductTab] = useState<'catalog' | 'slider'>('catalog');
  const [sliderIndex, setSliderIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(24);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Reset pagination on filter changes
  useEffect(() => {
    setVisibleCount(24);
  }, [searchQuery, selectedCategory, selectedBrandFilter]);

  // Combine custom featured products and complete product registry with strict deduplication
  const ALL_PRODUCTS = useMemo(() => {
    const featuredWithHsn = PRODUCTS.map(p => {
      let hsn = p.hsnCode;
      if (!hsn) {
        if (p.id === 'oks-476') hsn = '27101990';
        else if (p.id === 'oks-250') hsn = '34039900';
        else if (p.id === 'oks-1110') hsn = '34039900';
        else if (p.id === 'oks-2611') hsn = '38140020';
        else if (p.id === 'oks-370') hsn = '34039100';
        else if (p.id === 'oks-601') hsn = '34031900';
        else if (p.id === 'oks-511') hsn = '34039900';
        else if (p.id.includes('kluberplex')) hsn = '34039900';
        else if (p.id.includes('klubersynth')) hsn = '34039900';
        else if (p.id.includes('kluberpaste')) hsn = '34039900';
        else if (p.id === 'festo-pneumatics') hsn = '84123100';
        else if (p.id === '3m-abrasives') hsn = '68052000';
        else hsn = '34039900';
      }
      return { ...p, hsnCode: hsn };
    });

    const combined = [...featuredWithHsn, ...REGISTRY_PRODUCTS];
    const seenNames = new Set<string>();
    const deduplicated: Product[] = [];

    for (const item of combined) {
      // Normalize product name to eliminate size variants and case differences
      const normalizedKey = item.name
        .replace(/\s*\[.*?\]\s*/g, ' ')
        .replace(/\s*\(.*?\b(?:kg|g|l|lt|litre|liter|ml)\b.*?\)/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();

      if (!seenNames.has(normalizedKey)) {
        seenNames.add(normalizedKey);
        deduplicated.push(item);
      }
    }

    return deduplicated;
  }, []);

  // Form states for the product-specific modal enquiry
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const categories = ['All', 'Greases', 'Pastes', 'Oils', 'Sprays', 'Specialty'];
  const brandsList = ['All', 'KLÜBER LUBRICATION', 'OKS', 'FESTO', '3M', 'CORTEC', 'ACE'];

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Filter by Brand
      const matchBrand =
        selectedBrandFilter === 'All' ||
        product.brand.toLowerCase() === selectedBrandFilter.toLowerCase() ||
        (selectedBrandFilter === 'KLÜBER LUBRICATION' && product.brand === 'Klüber');

      // Filter by Category
      const matchCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      // Filter by Search Query
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.hsnCode && product.hsnCode.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchBrand && matchCategory && matchSearch;
    });
  }, [ALL_PRODUCTS, selectedBrandFilter, selectedCategory, searchQuery]);

  const sliderProducts = useMemo(() => {
    const idsToFeature = [
      'oks-476',
      'oks-250',
      'klüber-isoflex-nbu-15',
      'oks-oks-1035-1',
      'oks-1110',
      'kluberplex-bem-41-132',
      'festo-pneumatics',
      '3m-abrasives'
    ];
    const filtered = ALL_PRODUCTS.filter(p => idsToFeature.includes(p.id));
    return filtered.length > 0 ? filtered : ALL_PRODUCTS.slice(0, 8);
  }, [ALL_PRODUCTS]);

  const handleOpenDetails = (product: Product) => {
    setSelectedProductDetails(product);
    setIsSubmittedSuccessfully(false);
    setEnquiryForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleCloseDetails = () => {
    setSelectedProductDetails(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductDetails) return;

    onSubmitEnquiry({
      name: enquiryForm.name,
      email: enquiryForm.email,
      phone: enquiryForm.phone,
      company: enquiryForm.company,
      productName: selectedProductDetails.name,
      brandName: selectedProductDetails.brand,
      message: enquiryForm.message
    });

    setIsSubmittedSuccessfully(true);
    setTimeout(() => {
      handleCloseDetails();
      setIsSubmittedSuccessfully(false);
    }, 2800);
  };

  const isInBasket = (productId: string) => (rfqBasket || []).some(item => item.product.id === productId);
  const activeFilterCount = 
    (selectedBrandFilter !== 'All' ? 1 : 0) + 
    (selectedCategory !== 'All' ? 1 : 0) + 
    (searchQuery.trim() ? 1 : 0);

  return (
    <section id="products-catalog-section" className="bg-[#F8FAFC] text-slate-900 py-16 md:py-20 px-4 md:px-8 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1 text-blue-800 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-3 rounded-full">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>TECHNICAL SPECIFICATION DIRECTORY</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-slate-900 uppercase">
            Specialty <span className="text-blue-600">Tribology Catalog</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-xs md:text-sm font-normal leading-relaxed">
            Search and filter our comprehensive catalog of authentic, high-performance OKS greases, specialty pastes, maintenance sprays, and Klüber industrial gear oils.
          </p>
        </div>

        {/* Workspace Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white p-1.5 border border-slate-300 shadow-xs rounded-sm">
            <button
              onClick={() => setActiveProductTab('catalog')}
              className={`text-xs uppercase font-extrabold tracking-widest px-6 py-2.5 transition-all flex items-center gap-2 rounded-xs cursor-pointer ${
                activeProductTab === 'catalog'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Complete Grid Catalog</span>
            </button>
            <button
              onClick={() => setActiveProductTab('slider')}
              className={`text-xs uppercase font-extrabold tracking-widest px-6 py-2.5 transition-all flex items-center gap-2 rounded-xs cursor-pointer ${
                activeProductTab === 'slider'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Spotlight Product Slider</span>
            </button>
          </div>
        </div>

        {activeProductTab === 'slider' ? (
          /* 1. INTERACTIVE SPOTLIGHT PRODUCT SLIDER VIEW */
          <div className="relative bg-white border border-slate-200/90 p-6 md:p-10 mb-12 shadow-xl rounded-sm">
            {/* Top corner watermark decoration */}
            <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-sky-700 bg-sky-50 px-2.5 py-1 border border-sky-100 uppercase rounded-xs">
              Spotlight Showcase • Slide {sliderIndex + 1} of {sliderProducts.length}
            </div>

            {(() => {
              const currentProduct = sliderProducts[sliderIndex];
              if (!currentProduct) return null;
              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-h-[420px] pt-4">
                  {/* Left Column: Interactive Product Image */}
                  <div className="lg:col-span-5 relative group overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center min-h-[260px] lg:min-h-full rounded-sm">
                    <img
                      src={getProductImageUrl(currentProduct)}
                      alt={currentProduct.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = CLEAN_FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Brand banner on image */}
                    <span className="absolute top-4 left-4 bg-[#0B192C] text-sky-300 border border-sky-400/40 text-[9px] font-black tracking-[0.2em] px-3.5 py-1.5 uppercase shadow-md rounded-xs">
                      {currentProduct.brand === 'Klüber' ? 'KLÜBER LUBRICATION' : currentProduct.brand}
                    </span>
                    
                    {/* Category Watermark */}
                    <span className="absolute bottom-4 left-4 bg-orange-500 text-white text-[9px] font-black tracking-widest px-3 py-1.5 uppercase shadow-sm rounded-xs">
                      {currentProduct.category}
                    </span>
                  </div>

                  {/* Right Column: Key Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Brand & HSN Line */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest bg-sky-50 px-2.5 py-1 border border-sky-200 rounded-xs">
                          {currentProduct.brand === 'Klüber' ? 'Klüber Lubrication' : currentProduct.brand}
                        </span>
                        {currentProduct.hsnCode && (
                          <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 border border-slate-200 rounded-xs">
                            HSN Code: {currentProduct.hsnCode}
                          </span>
                        )}
                      </div>

                      {/* Name */}
                      <h4 className="text-3xl md:text-4xl font-sans font-black text-slate-900 uppercase tracking-tight leading-tight mb-3">
                        {currentProduct.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">
                        {currentProduct.description}
                      </p>

                      {/* Spec Grid / Table */}
                      {currentProduct.specifications && (
                        <div className="mb-6">
                          <span className="text-[10px] font-bold tracking-widest text-sky-800 uppercase block mb-2">Key Technical Parameters</span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {Object.entries(currentProduct.specifications).slice(0, 4).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                                <span className="font-bold text-slate-600 text-[10px] uppercase tracking-wider">{key}</span>
                                <span className="font-mono font-bold text-sky-700 text-[11px]">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Performance Highlights Checklists */}
                      {currentProduct.features && (
                        <div className="mb-8">
                          <span className="text-[10px] font-bold tracking-widest text-sky-800 uppercase block mb-2">Performance Advantages</span>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-700">
                            {currentProduct.features.slice(0, 4).map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-orange-500 font-extrabold">✓</span>
                                <span className="font-medium line-clamp-1">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Action buttons + Slide navigators */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-6 mt-4">
                      <div className="flex gap-3 w-full sm:w-auto">
                        <button
                          onClick={() => handleOpenDetails(currentProduct)}
                          className="flex-1 sm:flex-none text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs px-8 py-3.5 uppercase tracking-widest transition-all shadow-md active:scale-98 rounded-xs cursor-pointer"
                        >
                          Request Instant Quote
                        </button>
                        <a
                          href={getProductOfficialUrl(currentProduct)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs px-5 py-3.5 uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 rounded-xs"
                        >
                          <Globe className="w-4 h-4 text-sky-600" />
                          Official Specs
                        </a>
                      </div>

                      {/* Custom Navigation buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setSliderIndex((prev) => (prev - 1 + sliderProducts.length) % sliderProducts.length)}
                          className="w-10 h-10 border border-slate-300 text-slate-700 bg-white hover:bg-sky-50 hover:text-sky-600 hover:border-sky-400 flex items-center justify-center transition-colors rounded-xs cursor-pointer shadow-xs"
                          title="Previous product"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-xs font-mono font-bold text-slate-700 px-2">
                          {sliderIndex + 1} / {sliderProducts.length}
                        </span>
                        <button
                          onClick={() => setSliderIndex((prev) => (prev + 1) % sliderProducts.length)}
                          className="w-10 h-10 border border-slate-300 text-slate-700 bg-white hover:bg-sky-50 hover:text-sky-600 hover:border-sky-400 flex items-center justify-center transition-colors rounded-xs cursor-pointer shadow-xs"
                          title="Next product"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Slider Dots indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {sliderProducts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSliderIndex(idx)}
                  className={`h-2 transition-all rounded-xs cursor-pointer ${
                    idx === sliderIndex ? 'w-8 bg-orange-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* 2. FULL GRID PRODUCT CATALOG VIEW WITH RESPONSIVE FILTER ARCHITECTURE */
          <>
            {/* --- MOBILE COMPACT FILTER TOOLBAR (< lg screens) --- */}
            <div className="lg:hidden bg-white p-3.5 border border-slate-200/90 mb-5 space-y-3 shadow-xs rounded-xs">
              
              {/* Row 1: Search & Slide-over Drawer Trigger & RFQ Quick Button */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="text"
                    placeholder="Search series, HSN, grades..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-7 py-2 border border-slate-300 focus:outline-none focus:border-blue-600 text-xs font-medium text-slate-900 placeholder-slate-400 bg-white rounded-xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Open Slide-over Filter Drawer Button */}
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(true)}
                  id="btn-mobile-catalog-filter"
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider border rounded-xs transition-colors shrink-0 cursor-pointer ${
                    activeFilterCount > 0
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Filters</span>
                  {activeFilterCount > 0 && (
                    <span className="bg-orange-500 text-white font-mono text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                {/* RFQ Quick Access Button on Mobile Toolbar */}
                {rfqBasket.length > 0 && (
                  <button
                    type="button"
                    onClick={onOpenRfqDrawer}
                    id="btn-mobile-toolbar-rfq"
                    className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-xs font-black px-2.5 py-2 uppercase tracking-wider rounded-xs flex items-center gap-1 shrink-0 shadow-xs cursor-pointer"
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>{rfqBasket.length}</span>
                  </button>
                )}
              </div>

              {/* Row 2: 1-Tap Quick Horizontal Scroll Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-bold uppercase tracking-wider scrollbar-none">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBrandFilter('All');
                    setSelectedCategory('All');
                  }}
                  className={`px-3 py-1.5 rounded-xs border whitespace-nowrap cursor-pointer transition-colors ${
                    selectedBrandFilter === 'All' && selectedCategory === 'All'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  All Products
                </button>
                {['OKS', 'Klüber', 'Festo', '3M'].map(brand => {
                  const isActive = selectedBrandFilter.toLowerCase() === brand.toLowerCase() ||
                    (brand === 'Klüber' && selectedBrandFilter.includes('Klüber'));
                  return (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrandFilter(isActive ? 'All' : brand)}
                      className={`px-3 py-1.5 rounded-xs border whitespace-nowrap cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {brand}
                    </button>
                  );
                })}
                {['Greases', 'Pastes', 'Oils', 'Sprays', 'Specialty'].map(cat => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(isActive ? 'All' : cat)}
                      className={`px-3 py-1.5 rounded-xs border whitespace-nowrap cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-sky-700 text-white border-sky-700'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Row 3: Active Filters Summary Tag Strip */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-[10px]">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">Filtered by:</span>
                  {selectedBrandFilter !== 'All' && (
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-xs font-bold uppercase">
                      Brand: {selectedBrandFilter}
                      <button onClick={() => setSelectedBrandFilter('All')} className="hover:text-red-600 cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedCategory !== 'All' && (
                    <span className="inline-flex items-center gap-1 bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 rounded-xs font-bold uppercase">
                      Category: {selectedCategory}
                      <button onClick={() => setSelectedCategory('All')} className="hover:text-red-600 cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded-xs font-bold">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="hover:text-red-600 cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedBrandFilter('All');
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="text-red-600 hover:text-red-800 underline font-bold uppercase ml-auto cursor-pointer"
                  >
                    Reset All
                  </button>
                </div>
              )}
            </div>

            {/* --- SLIDE-OVER FILTER DRAWER FOR SMALL SCREENS --- */}
            {isMobileFilterOpen && (
              <div 
                className="fixed inset-0 z-[100] flex justify-end bg-slate-950/70 backdrop-blur-xs transition-opacity lg:hidden"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setIsMobileFilterOpen(false);
                }}
                role="dialog"
                aria-modal="true"
              >
                <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full flex flex-col shadow-2xl overflow-hidden animate-slideLeft">
                  
                  {/* Drawer Header */}
                  <div className="bg-[#0B192C] text-white p-4 flex items-center justify-between border-b border-sky-500/30 shrink-0">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-sky-400" />
                      <h4 className="font-sans font-black text-sm uppercase tracking-tight text-white">
                        Filter Catalog
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      {activeFilterCount > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedBrandFilter('All');
                            setSelectedCategory('All');
                            setSearchQuery('');
                          }}
                          className="text-[11px] text-sky-300 hover:text-white underline font-bold uppercase cursor-pointer"
                        >
                          Reset
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="text-slate-400 hover:text-white p-1 rounded-xs cursor-pointer"
                        aria-label="Close filters drawer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Drawer Scrollable Body */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    
                    {/* Filter Section 1: Search Keyword */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Search Keywords / Series / HSN
                      </label>
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="e.g. 476, Isoflex, BEM, solenoid..."
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xs focus:border-blue-600 focus:outline-none font-medium text-slate-900"
                        />
                      </div>
                    </div>

                    {/* Filter Section 2: Principal Manufacturer */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Principal Manufacturer
                        </label>
                        <span className="text-[10px] text-slate-400 font-medium">{brandsList.length} options</span>
                      </div>
                      <div className="space-y-1.5">
                        {brandsList.map((brand) => {
                          const isSelected =
                            (brand === 'All' && selectedBrandFilter === 'All') ||
                            (brand === 'KLÜBER LUBRICATION' && selectedBrandFilter === 'Klüber') ||
                            selectedBrandFilter.toLowerCase() === brand.toLowerCase();
                          return (
                            <button
                              key={brand}
                              type="button"
                              onClick={() => setSelectedBrandFilter(brand === 'KLÜBER LUBRICATION' ? 'Klüber' : brand)}
                              className={`w-full text-left px-3.5 py-2.5 text-xs font-bold rounded-xs border transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <span>{brand}</span>
                              {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Filter Section 3: Product Category */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Product Category
                        </label>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((category) => {
                          const isSelected = selectedCategory === category;
                          return (
                            <button
                              key={category}
                              type="button"
                              onClick={() => setSelectedCategory(category)}
                              className={`px-3 py-2.5 text-xs font-bold rounded-xs border transition-colors text-center cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-600 text-white shadow-xs font-black'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              {category}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Drawer Sticky Footer with Active Count */}
                  <div className="p-4 bg-slate-50 border-t border-slate-200 shrink-0 space-y-2">
                    <button
                      type="button"
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xs shadow-md transition-all cursor-pointer"
                    >
                      Show {filteredProducts.length} Matching Products
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- DESKTOP FILTER CONTROLS BAR (Strictly lg:flex) --- */}
            <div className="hidden lg:flex bg-white p-5 md:p-6 border border-slate-200/90 mb-8 flex-col lg:flex-row gap-5 items-center justify-between shadow-sm rounded-sm">
              
              {/* Search bar */}
              <div className="relative w-full lg:max-w-sm">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search series, HSN, application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 focus:outline-none focus:border-blue-500 text-xs font-medium text-slate-900 placeholder-slate-400 bg-white rounded-xs"
                />
              </div>

              {/* Brand quick filter */}
              <div className="flex flex-wrap gap-1.5 justify-center w-full lg:w-auto">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 mr-2 uppercase font-black tracking-widest">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />
                  <span>Principal:</span>
                </div>
                {brandsList.map((brand) => {
                  const isActive = selectedBrandFilter.toLowerCase() === brand.toLowerCase() || 
                    (brand === 'KLÜBER LUBRICATION' && selectedBrandFilter === 'Klüber') ||
                    (brand === 'All' && selectedBrandFilter === 'All');
                  return (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrandFilter(brand === 'KLÜBER LUBRICATION' ? 'Klüber' : brand)}
                      className={`text-xs px-3.5 py-1.5 font-bold uppercase tracking-wider transition-all border rounded-xs cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                      }`}
                    >
                      {brand === 'KLÜBER LUBRICATION' ? 'KLÜBER' : brand}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Desktop Category Filters */}
            <div className="hidden lg:flex flex-wrap gap-2 justify-center mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs uppercase tracking-widest px-5 py-2.5 font-bold border transition-all rounded-xs cursor-pointer ${
                    selectedCategory === category
                      ? 'border-blue-600 bg-blue-600 text-white font-extrabold shadow-sm'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* --- MULTI-ITEM RFQ ACTIVE BASKET BAR --- */}
            {rfqBasket.length > 0 && (
              <div className="mb-6 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white p-3.5 sm:p-4 rounded-xs shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-white/20 flex items-center justify-center font-black text-white shrink-0">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase tracking-tight text-white">
                      Multi-Item RFQ Quotation List: <span className="underline">{rfqBasket.length} Item{rfqBasket.length > 1 ? 's' : ''} Selected</span>
                    </h5>
                    <p className="text-[11px] text-orange-100 font-medium">
                      Submit 1 unified inquiry for volume discounting and batch COA documents
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenRfqDrawer}
                  className="bg-white text-orange-600 hover:bg-orange-50 active:bg-orange-100 font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xs shadow-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Review & Submit RFQ →
                </button>
              </div>
            )}

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
                  <span>
                    Showing <strong className="text-slate-800">{Math.min(visibleCount, filteredProducts.length)}</strong> of <strong className="text-slate-800">{filteredProducts.length}</strong> Industrial SKUs
                  </span>
                  <span className="text-[10px] uppercase font-bold text-sky-700 bg-sky-50 px-2 py-0.5 border border-sky-200">
                    ACS Authorized Catalog
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.slice(0, visibleCount).map((product) => (
                    <article
                      key={product.id}
                      id={`product-card-${product.id}`}
                      itemScope
                      itemType="https://schema.org/Product"
                      className="cv-auto bg-white overflow-hidden border border-slate-200/90 hover:border-sky-500 transition-all duration-300 flex flex-col h-full group shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-sm"
                    >
                      <meta itemProp="name" content={product.name} />
                      <meta itemProp="description" content={product.description} />
                      <meta itemProp="brand" content={product.brand === 'Klüber' ? 'Klüber Lubrication' : product.brand} />
                      {product.hsnCode && <meta itemProp="mpn" content={product.hsnCode} />}

                      {/* Product Image representation container */}
                      <div className={`h-48 relative overflow-hidden ${product.brand === 'Festo' ? 'bg-white p-3' : 'bg-slate-100'} flex items-center justify-center group/img border-b border-slate-100`}>
                        <img
                          src={getProductImageUrl(product)}
                          alt={`${product.name} - ACS Corporation Authorized Supply`}
                          loading="lazy"
                          itemProp="image"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = CLEAN_FALLBACK_IMAGE;
                          }}
                          className={`w-full h-full ${product.brand === 'Festo' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                        />
                        
                        {/* Brand tag watermark */}
                        <span className="absolute top-3 left-3 bg-[#0B192C]/90 text-[9px] font-black tracking-widest px-2.5 py-1 text-sky-300 z-10 shadow-sm rounded-xs">
                          {product.brand === 'Klüber' ? 'KLÜBER' : product.brand}
                        </span>

                        {/* Icon badge layered on top */}
                        <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 border border-slate-200 flex items-center justify-center z-10 shadow-sm rounded-xs">
                          {product.category === 'Sprays' ? (
                            <span className="text-xs">💨</span>
                          ) : product.category === 'Greases' ? (
                            <span className="text-xs">🍯</span>
                          ) : product.category === 'Oils' ? (
                            <span className="text-xs">🛢️</span>
                          ) : (
                            <span className="text-xs">🧪</span>
                          )}
                        </div>

                        <span className="absolute bottom-3 left-3 right-3 text-xs font-bold tracking-tight bg-white/95 px-2.5 py-1.5 text-center border border-slate-200 uppercase z-10 text-slate-800 truncate group-hover:text-sky-600 group-hover:border-sky-300 transition-colors duration-300 shadow-sm rounded-xs">
                          {product.name}
                        </span>
                      </div>

                      {/* Product Info content */}
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[9px] font-bold text-sky-700 uppercase tracking-widest bg-sky-50 px-2 py-0.5 border border-sky-200 rounded-xs">
                            {product.category}
                          </span>
                          {product.specifications?.['Service Temp'] && (
                            <span className="text-[10px] text-slate-500 font-mono">
                              🌡️ {product.specifications['Service Temp']}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-sans font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors leading-tight tracking-tight uppercase">
                          {product.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">
                          {product.brand === 'Klüber' ? 'Klüber Lubrication' : product.brand}
                        </p>
                        
                        {product.hsnCode && (
                          <div className="mb-3 flex items-center">
                            <span className="text-[9px] font-mono font-semibold text-slate-600 tracking-wider bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-xs">
                              HSN: {product.hsnCode}
                            </span>
                          </div>
                        )}
                        
                        <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="mt-auto space-y-3">
                          {/* Micro Features list */}
                          {product.features && (
                            <ul className="text-[10px] text-slate-600 space-y-1 mb-4 border-t border-slate-100 pt-3">
                              {product.features.slice(0, 2).map((feat, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <span className="text-orange-500 font-bold">✓</span>
                                  <span className="line-clamp-1">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Packaging / Availability Indicator */}
                          <div className="flex items-center justify-between text-[10px] bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xs">
                            <span className="font-bold text-emerald-700 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                              All Sizes Available
                            </span>
                            <span className="text-[9px] text-slate-500 font-mono">Tins • Pails • Drums</span>
                          </div>

                          {/* Actions button: Specs & Add to RFQ Quotation List */}
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => handleOpenDetails(product)}
                              id={`btn-tech-details-${product.id}`}
                              className="border border-slate-300 hover:border-sky-500 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-bold text-[10px] py-2 px-2 text-center transition-colors flex items-center justify-center gap-1 uppercase tracking-wider rounded-xs cursor-pointer"
                            >
                              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                              <span>Specs</span>
                            </button>
                            <button
                              onClick={() => {
                                if (onToggleRfq) {
                                  onToggleRfq(product);
                                } else {
                                  handleOpenDetails(product);
                                }
                              }}
                              id={`btn-rfq-${product.id}`}
                              className={`font-black text-[10px] py-2 px-2 text-center transition-all uppercase tracking-wider shadow-xs active:scale-95 rounded-xs cursor-pointer flex items-center justify-center gap-1 ${
                                isInBasket(product.id)
                                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                  : 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white'
                              }`}
                              title={isInBasket(product.id) ? 'In your RFQ List (Click to remove)' : 'Add to Multi-Item RFQ List'}
                            >
                              {isInBasket(product.id) ? (
                                <>
                                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-white" />
                                  <span>In RFQ</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5 shrink-0 text-white" />
                                  <span>+ Quote</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                    </article>
                  ))}
                </div>

                {/* Load More Pagination Bar */}
                {filteredProducts.length > visibleCount && (
                  <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 py-6 border-t border-slate-200">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 24)}
                      className="bg-[#0B192C] hover:bg-[#132A4A] text-white font-black text-xs uppercase tracking-widest px-8 py-3.5 border border-sky-500/40 shadow-md transition-all active:scale-98 cursor-pointer rounded-xs"
                    >
                      Load More Products (+24 SKUs)
                    </button>
                    <button
                      onClick={() => setVisibleCount(filteredProducts.length)}
                      className="text-slate-600 hover:text-sky-600 font-bold text-xs uppercase tracking-wider underline cursor-pointer"
                    >
                      Show All ({filteredProducts.length} items)
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm rounded-sm">
                <span className="text-4xl block mb-3">🔍</span>
                <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight">No Lubricants Match</h4>
                <p className="text-xs text-slate-500 mb-6 mt-2 leading-relaxed">
                  We couldn't find any products matching your selected filter parameters or search term.
                </p>
                <button
                  onClick={() => {
                    setSelectedBrandFilter('All');
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="bg-sky-600 text-white text-xs font-black px-6 py-3 hover:bg-sky-700 uppercase tracking-widest transition-colors rounded-xs cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </>
        )}

      </div>

      {/* --- PRODUCT DETAILS & ENQUIRY MODAL --- */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row border border-slate-200 rounded-sm">
            
            {/* Left/Top Content: Tech specifications */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto max-h-[45vh] md:max-h-full border-b md:border-b-0 md:border-r border-slate-200 animate-fadeIn">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[9px] font-bold text-sky-700 tracking-widest uppercase bg-sky-50 px-2.5 py-1 border border-sky-200 rounded-xs">
                      {selectedProductDetails.brand === 'Klüber' ? 'KLÜBER LUBRICATION' : selectedProductDetails.brand}
                    </span>
                    {selectedProductDetails.hsnCode && (
                      <span className="text-[9px] font-mono font-bold text-slate-700 tracking-widest uppercase bg-slate-100 px-2.5 py-1 border border-slate-200 rounded-xs">
                        HSN Code: {selectedProductDetails.hsnCode}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-sans font-black text-slate-900 uppercase tracking-tight mt-3">
                    {selectedProductDetails.name}
                  </h3>
                </div>
                <button
                  onClick={handleCloseDetails}
                  className="text-slate-400 hover:text-slate-700 p-1 md:hidden text-lg font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Product Header Banner Image inside Modal */}
              <div className={`h-48 w-full relative overflow-hidden ${selectedProductDetails.brand === 'Festo' ? 'bg-white p-4' : 'bg-slate-100'} border border-slate-200 mb-6 group/modalimg rounded-xs flex items-center justify-center`}>
                <img
                  src={getProductImageUrl(selectedProductDetails)}
                  alt={selectedProductDetails.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = CLEAN_FALLBACK_IMAGE;
                  }}
                  className={`w-full h-full ${selectedProductDetails.brand === 'Festo' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover/modalimg:scale-102`}
                />
                {selectedProductDetails.brand !== 'Festo' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                )}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[9px] font-black tracking-widest bg-orange-500 text-white px-2.5 py-0.5 uppercase rounded-xs">
                    {selectedProductDetails.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                {selectedProductDetails.description}
              </p>

              {/* Packaging & Volume Availability Banner */}
              <div className="mb-5 p-3 bg-emerald-50 border border-emerald-200 rounded-xs flex items-center gap-2.5">
                <span className="text-base shrink-0">📦</span>
                <div className="text-[11px] text-emerald-900 leading-snug">
                  <strong className="font-bold text-emerald-950">All Industrial Pack Sizes Available: </strong>
                  Supplied in all standard manufacturer volumes (tubes, aerosols, 1L bottles, 5L/5kg pails, 25kg buckets, and 180kg/208L drums). Custom quantity dispatches available upon request.
                </div>
              </div>

              {/* Detailed Specs Table */}
              {selectedProductDetails.specifications && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5 text-sky-600" />
                    <span>Technical Laboratory Specifications</span>
                  </h4>
                  <div className="bg-slate-50 border border-slate-200 divide-y divide-slate-200 text-xs rounded-xs">
                    {Object.entries(selectedProductDetails.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 px-3">
                        <span className="text-slate-600 font-bold uppercase text-[10px]">{key}</span>
                        <span className="text-slate-900 font-mono font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Distinct Features List */}
              {selectedProductDetails.features && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-sky-600" />
                    <span>Industrial Engineering Advantages</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedProductDetails.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right/Bottom Content: Instant Enquiry Form */}
            <div className="p-6 md:p-8 bg-slate-50 w-full md:w-[360px] shrink-0 flex flex-col justify-center relative">
              
              {/* Close Button on Desktop */}
              <button
                onClick={handleCloseDetails}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 hidden md:block text-lg font-bold cursor-pointer"
              >
                ✕
              </button>

              {isSubmittedSuccessfully ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300 rounded-full">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-base font-sans font-black text-slate-900 uppercase tracking-tight mb-1">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your request for {selectedProductDetails.name} has been processed. Our tribology engineer will contact you shortly with catalog quotes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-sm font-sans font-bold text-slate-900 uppercase tracking-tight">Instant Product Inquiry</h4>
                    <p className="text-[10px] text-sky-700 font-semibold uppercase tracking-wider mt-1">
                      Request custom bulk pricing & stocks.
                    </p>
                  </div>

                  {/* Multi-Item RFQ Quick Toggle inside Modal */}
                  {onToggleRfq && (
                    <button
                      type="button"
                      onClick={() => onToggleRfq(selectedProductDetails)}
                      className={`w-full py-2.5 px-3 text-xs font-black uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                        isInBasket(selectedProductDetails.id)
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {isInBasket(selectedProductDetails.id) ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>✓ In Multi-Item RFQ List (Click to Remove)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-blue-600" />
                          <span>+ Add to Multi-Item RFQ List ({rfqBasket.length} currently)</span>
                        </>
                      )}
                    </button>
                  )}

                  <div className="space-y-2.5">
                    <div>
                      <label className="block text-[9px] font-bold text-slate-700 uppercase tracking-wider">Contact Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={enquiryForm.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full text-xs px-3 py-2 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[9px] font-bold text-slate-700 uppercase tracking-wider">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={enquiryForm.email}
                          onChange={handleInputChange}
                          placeholder="Enter email address"
                          className="w-full text-xs px-2.5 py-2 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-slate-700 uppercase tracking-wider">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={enquiryForm.phone}
                          onChange={handleInputChange}
                          placeholder="Enter contact number"
                          className="w-full text-xs px-2.5 py-2 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-slate-700 uppercase tracking-wider">Company *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={enquiryForm.company}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        className="w-full text-xs px-3 py-2 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-slate-700 uppercase tracking-wider">Your Requirements</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={enquiryForm.message}
                        onChange={handleInputChange}
                        placeholder="Specify required quantity, application, or delivery timeline..."
                        className="w-full text-xs px-3 py-2 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs py-3 px-4 transition-all flex items-center justify-center gap-1.5 uppercase tracking-widest shadow-md active:scale-98 rounded-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    SUBMIT INQUIRY
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
