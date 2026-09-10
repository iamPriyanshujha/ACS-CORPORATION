import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Package, 
  Check, 
  Plus, 
  ExternalLink, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { Product, RfqBasketItem } from '../types';
import { PRODUCTS } from '../data';
import { getProductImageUrl, CLEAN_FALLBACK_IMAGE } from '../utils/productImages';

interface FeaturedProductSliderProps {
  onNavigate: (section: string) => void;
  onSelectBrand?: (brand: string) => void;
  onOpenQuote?: (initialData?: { brand?: string; product?: string }) => void;
  rfqBasket?: RfqBasketItem[];
  onToggleRfq?: (product: Product) => void;
}

export const FeaturedProductSlider: React.FC<FeaturedProductSliderProps> = ({
  onNavigate,
  onSelectBrand,
  onOpenQuote,
  rfqBasket = [],
  onToggleRfq
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Main 10 best products: curated mix of OKS, Klüber Lubrication, and 1-2 Festo
  const featured10Products: Product[] = React.useMemo(() => {
    const targetIds = [
      'oks-476',                          // 1. OKS (Grease NSF H1)
      'kluberplex-bem-41-132',            // 2. Klüber (Heavy-Duty Bearing Grease)
      'festo-pneumatics',                 // 3. Festo (ISO Pneumatics & Cylinders)
      'oks-250',                          // 4. OKS (White High-Temp Assembly Paste)
      'klubersynth-gh-6',                 // 5. Klüber (Synthetic High-Temp Gear Oil)
      'oks-370',                          // 6. OKS (Universal Food Grade Oil Spray)
      'kluberpaste-uh1-96-402',           // 7. Klüber (High-Temp Food/Pharma Paste)
      'festo-festo-vuvb-solenoid-valve',  // 8. Festo (Compact Solenoid Valve)
      'oks-601',                          // 9. OKS (High-Capillary Rust Penetrant)
      'klubersynth-uh1-14-151'            // 10. Klüber (Synthetic Cleanroom Grease)
    ];

    const result: Product[] = [];
    targetIds.forEach(id => {
      const found = PRODUCTS.find(p => p.id === id);
      if (found) result.push(found);
    });

    // Fallback if any ID changed
    if (result.length < 10) {
      PRODUCTS.forEach(p => {
        if (result.length < 10 && !result.some(r => r.id === p.id)) {
          result.push(p);
        }
      });
    }

    return result.slice(0, 10);
  }, []);

  const totalProducts = featured10Products.length;

  // Scroll to slide
  const scrollToSlide = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 320;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  }, []);

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + totalProducts) % totalProducts;
    scrollToSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % totalProducts;
    scrollToSlide(nextIdx);
  };

  // Sync activeIndex on manual scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 320;
    const calculatedIndex = Math.round(container.scrollLeft / cardWidth);
    if (calculatedIndex !== activeIndex && calculatedIndex >= 0 && calculatedIndex < totalProducts) {
      setActiveIndex(calculatedIndex);
    }
  };

  // Auto-play slider with hover pause
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        const nextIdx = (prev + 1) % totalProducts;
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 320;
          container.scrollTo({
            left: nextIdx * cardWidth,
            behavior: 'smooth'
          });
        }
        return nextIdx;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, totalProducts]);

  const isInBasket = (productId: string) => {
    return rfqBasket.some(item => item.product.id === productId);
  };

  return (
    <section 
      aria-label="Flagship Industrial Products Carousel" 
      className="bg-[#050D1A] py-14 sm:py-18 px-4 md:px-8 border-b border-sky-500/30 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Section Header with "Explore More" Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-sky-500/20">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-sky-300 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-3 rounded-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>FLAGSHIP 10 BEST INDUSTRIAL PRODUCTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Featured <span className="text-sky-400">High-Demand SKUs</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Fast-moving specialty lubricants, synthetic food-grade greases, heavy-duty gear oils, and pneumatic control components from OKS, Klüber Lubrication, and Festo.
            </p>
          </div>

          {/* Controls & Explore More Redirect Button */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Carousel Previous / Next Arrows */}
            <div className="flex items-center gap-1.5 bg-[#08182E] border border-sky-500/30 p-1 rounded-xs">
              <button
                type="button"
                onClick={handlePrev}
                id="btn-featured-slider-prev"
                className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500/20 rounded-xs transition-colors cursor-pointer"
                title="Previous Product"
                aria-label="Previous Product"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono font-bold text-sky-300 px-2 select-none">
                {String(activeIndex + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(totalProducts).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handleNext}
                id="btn-featured-slider-next"
                className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500/20 rounded-xs transition-colors cursor-pointer"
                title="Next Product"
                aria-label="Next Product"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Primary "Explore More" Button redirecting to Products Section */}
            <button
              type="button"
              onClick={() => onNavigate('products')}
              id="btn-featured-slider-explore-more-top"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xs flex items-center gap-2 shadow-lg hover:shadow-orange-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* --- INTERACTIVE PRODUCTS SLIDER CAROUSEL --- */}
        {/* ======================================================== */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollbarWidth: 'none' }}
        >
          {featured10Products.map((product, idx) => {
            const inBasket = isInBasket(product.id);
            const isOks = product.brand === 'OKS';
            const isKluber = product.brand === 'Klüber';
            const isFesto = product.brand === 'Festo';

            return (
              <article
                key={product.id}
                id={`featured-slide-${product.id}`}
                className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[360px] bg-gradient-to-b from-[#0A1E36] to-[#071629] border border-sky-500/30 hover:border-sky-400 p-5 rounded-xs flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(2,132,199,0.2)] group"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span 
                      className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs border ${
                        isOks 
                          ? 'bg-red-500/15 text-red-400 border-red-500/30' 
                          : isKluber 
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
                          : 'bg-sky-500/15 text-sky-400 border-sky-500/30'
                      }`}
                    >
                      {isKluber ? 'KLÜBER LUBRICATION' : product.brand}
                    </span>

                    <span className="text-[9px] font-mono uppercase font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 border border-slate-800 rounded-xs">
                      {product.category}
                    </span>
                  </div>

                  {/* Visual Product Representation Frame */}
                  <div className="h-44 sm:h-48 w-full bg-slate-950/70 border border-slate-800 relative overflow-hidden rounded-xs flex items-center justify-center p-3 mb-4 group-hover:border-sky-500/50 transition-colors">
                    <img
                      src={getProductImageUrl(product)}
                      alt={`${product.name} - ACS Corporation Industrial Supply`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = CLEAN_FALLBACK_IMAGE;
                      }}
                      className={`w-full h-full ${isFesto ? 'object-contain p-2' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                    />

                    {/* Rank Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/90 border border-sky-400/40 text-amber-400 font-mono font-black text-[10px] px-2 py-0.5 rounded-xs">
                      #{idx + 1}
                    </div>

                    {/* Authentic Origin Watermark */}
                    <div className="absolute bottom-2 right-2 bg-slate-950/90 text-slate-300 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs border border-slate-800">
                      Genuine Factory Sealed
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 
                    onClick={() => onNavigate('products')}
                    className="text-base sm:text-lg font-black text-white uppercase tracking-tight group-hover:text-sky-300 transition-colors cursor-pointer line-clamp-1 mb-1"
                    title={product.name}
                  >
                    {product.name}
                  </h3>

                  {/* Short Engineering Summary */}
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Highlight Specs Pill */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.specifications?.['Service Temp'] && (
                      <span className="text-[10px] font-mono text-sky-300 bg-sky-950/50 border border-sky-800/50 px-2 py-0.5 rounded-xs">
                        Temp: {product.specifications['Service Temp']}
                      </span>
                    )}
                    {product.specifications?.['Base Oil'] && (
                      <span className="text-[10px] font-mono text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-xs truncate max-w-[180px]">
                        Base: {product.specifications['Base Oil']}
                      </span>
                    )}
                    {product.hsnCode && (
                      <span className="text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded-xs">
                        HSN: {product.hsnCode}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Actions: RFQ Toggle & Instant Enquire */}
                <div className="pt-3 border-t border-sky-500/20 flex items-center gap-2">
                  {/* Multi-Item RFQ Toggle Button */}
                  {onToggleRfq && (
                    <button
                      type="button"
                      id={`btn-rfq-toggle-${product.id}`}
                      onClick={() => onToggleRfq(product)}
                      className={`flex-1 py-2.5 px-3 text-xs font-black uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        inBasket
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                          : 'bg-[#08182E] hover:bg-sky-500/20 text-sky-300 border border-sky-400/40 hover:border-sky-300'
                      }`}
                      title={inBasket ? 'Remove from multi-item RFQ basket' : 'Add to multi-item RFQ quotation basket'}
                    >
                      {inBasket ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                          <span>In RFQ</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-sky-400 stroke-[3]" />
                          <span>+ Quote</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* Details / Enquire Action */}
                  <button
                    type="button"
                    id={`btn-enquire-${product.id}`}
                    onClick={() => {
                      if (onOpenQuote) {
                        onOpenQuote({ brand: product.brand, product: product.name });
                      } else {
                        onNavigate('products');
                      }
                    }}
                    className="flex-1 py-2.5 px-3 text-xs font-black uppercase tracking-wider rounded-xs bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {featured10Products.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToSlide(dotIdx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === dotIdx 
                  ? 'w-8 h-2 bg-gradient-to-r from-orange-400 to-amber-400' 
                  : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* ======================================================== */}
        {/* --- BOTTOM CTA: EXPLORE MORE & BRAND REDIRECT BAR --- */}
        {/* ======================================================== */}
        <div className="bg-gradient-to-r from-[#0C223E] via-[#0E2A4F] to-[#0C223E] border-2 border-sky-400/40 p-5 sm:p-6 rounded-xs flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-sky-500/20 border border-sky-400/40 rounded-xs flex items-center justify-center text-sky-400 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-black text-sm sm:text-base uppercase tracking-tight">
                Looking for a specific grade, viscosity, or packaging size?
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Browse our complete catalog featuring 200+ authentic industrial lubricants, aerosols, pastes, and automation components.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
            {/* Quick Brand Filter Shortcuts that redirect to product section */}
            {onSelectBrand && (
              <div className="hidden lg:flex items-center gap-1.5 mr-2">
                <button
                  type="button"
                  onClick={() => onSelectBrand('OKS')}
                  className="text-[11px] font-bold uppercase tracking-wider text-red-300 hover:text-white bg-red-950/40 border border-red-800/50 px-2.5 py-1.5 rounded-xs transition-colors cursor-pointer"
                >
                  OKS (70+ SKUs)
                </button>
                <button
                  type="button"
                  onClick={() => onSelectBrand('Klüber')}
                  className="text-[11px] font-bold uppercase tracking-wider text-amber-300 hover:text-white bg-amber-950/40 border border-amber-800/50 px-2.5 py-1.5 rounded-xs transition-colors cursor-pointer"
                >
                  Klüber (60+ SKUs)
                </button>
                <button
                  type="button"
                  onClick={() => onSelectBrand('Festo')}
                  className="text-[11px] font-bold uppercase tracking-wider text-sky-300 hover:text-white bg-sky-950/40 border border-sky-800/50 px-2.5 py-1.5 rounded-xs transition-colors cursor-pointer"
                >
                  Festo
                </button>
              </div>
            )}

            {/* Prominent "Explore More" Button */}
            <button
              type="button"
              onClick={() => onNavigate('products')}
              id="btn-featured-slider-explore-more-bottom"
              className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <span>Explore More in Products Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
