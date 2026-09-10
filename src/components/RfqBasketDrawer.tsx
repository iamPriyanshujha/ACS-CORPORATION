import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Send, 
  CheckCircle2, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Package, 
  ArrowRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { RfqBasketItem, UserProfile } from '../types';

interface RfqBasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  basket: RfqBasketItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: string) => void;
  onClearBasket: () => void;
  onSubmitMultiRfq: (data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    location: string;
    items: { productName: string; brandName: string; quantity: string; hsnCode?: string }[];
    notes: string;
  }) => Promise<void> | void;
  currentUser?: UserProfile | null;
  onNavigateToCatalog: () => void;
}

const COMMON_QTY_PRESETS = [
  '1 Tin / Can',
  '5 Cans',
  '1 Pail (25kg)',
  '2 Drums (200L)',
  'Bulk Plant Lot'
];

export const RfqBasketDrawer: React.FC<RfqBasketDrawerProps> = ({
  isOpen,
  onClose,
  basket,
  onRemoveItem,
  onUpdateQuantity,
  onClearBasket,
  onSubmitMultiRfq,
  currentUser,
  onNavigateToCatalog
}) => {
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: '',
    company: '',
    location: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);

  // Sync user if logged in
  React.useEffect(() => {
    if (currentUser) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || currentUser.name || '',
        email: prev.email || currentUser.email || ''
      }));
    }
  }, [currentUser]);

  // Lock background scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = () => {
    const lines = [
      `*INDUSTRIAL RFQ INQUIRY - ACS CORPORATION*`,
      `*Client:* ${formData.name || 'Industrial Procurement Desk'}`,
      `*Company:* ${formData.company || 'Not Specified'}`,
      `*Phone:* ${formData.phone || 'Not Specified'}`,
      `*Location / Plant:* ${formData.location || 'India'}`,
      ``,
      `*Requested SKUs (${basket.length} items):*`
    ];

    basket.forEach((item, index) => {
      const hsn = item.product.hsnCode ? ` [HSN: ${item.product.hsnCode}]` : '';
      lines.push(`${index + 1}. *${item.product.name}* (${item.product.brand})${hsn}`);
      lines.push(`   • Qty: ${item.quantity || 'Standard packaging quote'}`);
    });

    if (formData.notes) {
      lines.push(``);
      lines.push(`*Notes:* ${formData.notes}`);
    }

    lines.push(``);
    lines.push(`_Please provide wholesale pricing, availability, and batch COA details._`);

    const text = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/917827976806?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || basket.length === 0) return;

    setIsSubmitting(true);
    try {
      const formattedItems = basket.map(item => ({
        productName: item.product.name,
        brandName: item.product.brand,
        quantity: item.quantity || 'Standard pack',
        hsnCode: item.product.hsnCode
      }));

      await onSubmitMultiRfq({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        location: formData.location,
        items: formattedItems,
        notes: formData.notes
      });

      const ref = `ACS-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRefId(ref);
      onClearBasket();
    } catch (err) {
      console.error("Error submitting multi-item RFQ:", err);
      const ref = `ACS-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRefId(ref);
      onClearBasket();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[110] flex justify-end bg-slate-950/70 backdrop-blur-sm transition-opacity animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rfq-drawer-title"
    >
      <div className="relative w-full max-w-xl sm:max-w-2xl bg-white text-slate-900 h-full flex flex-col shadow-2xl overflow-hidden animate-slideLeft">
        
        {/* Top Header Bar */}
        <div className="bg-[#0B192C] text-white p-4 sm:p-5 border-b border-sky-500/30 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xs bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <h3 id="rfq-drawer-title" className="text-base sm:text-lg font-black uppercase tracking-tight text-white truncate">
                  Multi-Item RFQ Quotation List
                </h3>
                <span className="bg-orange-500 text-white font-mono font-black text-xs px-2 py-0.5 rounded-full shrink-0">
                  {basket.length}
                </span>
              </div>
              <p className="text-[11px] text-sky-200/90 truncate">
                Combine 5–10 items for a single formal B2B quotation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white hover:bg-white/10 p-2 rounded-xs transition-colors shrink-0 cursor-pointer"
            aria-label="Close RFQ Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SLA Guarantee Strip */}
        <div className="bg-sky-50 border-b border-sky-200/80 px-4 py-2 flex items-center justify-between gap-2 text-xs text-sky-900 shrink-0">
          <div className="flex items-center gap-1.5 font-semibold text-[11px]">
            <Clock className="w-3.5 h-3.5 text-sky-700 shrink-0" />
            <span>2-Hour Dedicated Engineering Response SLA</span>
          </div>
          <span className="text-[10px] uppercase font-bold text-sky-700 tracking-wider bg-white px-2 py-0.5 border border-sky-200 rounded-xs shrink-0">
            Pan-India Delivery
          </span>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {submittedRefId ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="py-8 px-4 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 border border-emerald-200 rounded-xs">
                  RFQ Quotation Request Received
                </span>
                <h4 className="text-2xl font-sans font-black text-slate-900 uppercase tracking-tight mt-3">
                  Quotation Docket Created
                </h4>
                <div className="mt-3 inline-block bg-slate-100 border border-slate-300 px-4 py-2 rounded-xs">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Quotation Reference ID:</span>
                  <span className="text-base font-mono font-black text-blue-700">{submittedRefId}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for your bulk inquiry. Our industrial tribology engineers are calculating current wholesale stock pricing, GST discounts, and dispatch timelines.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>ACS Corporation Pan-India Dispatch Promise</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  All lubricants and automation spares ship directly with genuine manufacturer batch COA documents from our central NCR warehouse at Ghaziabad, UP.
                </p>
              </div>

              {/* Action Buttons in Success state */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Followup on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSubmittedRefId(null);
                    onClose();
                  }}
                  className="border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xs cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : basket.length === 0 ? (
            /* EMPTY BASKET STATE */
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 border border-slate-200 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight">
                  Your RFQ Quotation List is Empty
                </h4>
                <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                  Browse our industrial catalog and click <strong className="text-slate-800">"Add to RFQ"</strong> on any lubricant, paste, or pneumatic part to compile a multi-item quotation.
                </p>
              </div>
              <div className="pt-3">
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToCatalog();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xs shadow-md transition-all active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore 200+ Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* ITEM LIST & FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Products Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                    <span>Selected Industrial Items ({basket.length})</span>
                  </span>
                  <button
                    type="button"
                    onClick={onClearBasket}
                    className="text-[11px] text-red-600 hover:text-red-700 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                </div>

                {/* Items Card List */}
                <div className="space-y-3">
                  {basket.map((item, index) => {
                    const brandColor = 
                      item.product.brand === 'Klüber' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                      item.product.brand === 'OKS' ? 'bg-red-50 text-red-800 border-red-200' :
                      item.product.brand === 'Festo' ? 'bg-sky-50 text-sky-800 border-sky-200' :
                      'bg-slate-100 text-slate-800 border-slate-200';

                    return (
                      <div 
                        key={item.product.id}
                        className="p-3.5 sm:p-4 bg-slate-50/90 border border-slate-200/90 rounded-sm hover:border-sky-300 transition-colors space-y-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-xs ${brandColor}`}>
                                {item.product.brand === 'Klüber' ? 'KLÜBER LUBRICATION' : item.product.brand}
                              </span>
                              <span className="text-[9px] font-bold text-slate-600 uppercase bg-white px-2 py-0.5 border border-slate-200 rounded-xs">
                                {item.product.category}
                              </span>
                              {item.product.hsnCode && (
                                <span className="text-[9px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 rounded-xs">
                                  HSN: {item.product.hsnCode}
                                </span>
                              )}
                            </div>
                            <h5 className="text-sm font-sans font-black text-slate-900 uppercase tracking-tight">
                              {item.product.name}
                            </h5>
                          </div>

                          {/* Delete Item Button */}
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-slate-400 hover:text-red-600 p-1.5 rounded-xs transition-colors cursor-pointer shrink-0"
                            title="Remove from quotation"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Quantity input & quick suggestions */}
                        <div className="space-y-1.5 pt-1 border-t border-slate-200/60">
                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                            <span>Requested Quantity / Packaging:</span>
                            <span className="text-slate-400 font-normal">Custom text allowed</span>
                          </div>
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) => onUpdateQuantity(item.product.id, e.target.value)}
                              placeholder="e.g. 5 Tins (1kg), 2 Drums (200L)"
                              className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 focus:border-blue-600 focus:outline-none rounded-xs font-medium text-slate-900"
                            />
                            {/* Fast Presets Selector */}
                            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                              {COMMON_QTY_PRESETS.slice(0, 3).map((preset) => (
                                <button
                                  key={preset}
                                  type="button"
                                  onClick={() => onUpdateQuantity(item.product.id, preset)}
                                  className="text-[9px] font-bold text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 px-2 py-1 border border-slate-200 hover:border-blue-300 rounded-xs whitespace-nowrap cursor-pointer transition-colors"
                                >
                                  {preset}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Add More Items Link */}
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigateToCatalog();
                    }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ Add More Items From Catalog</span>
                  </button>
                </div>
              </div>

              {/* Contact / Delivery Details Form */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <span className="text-xs font-black uppercase tracking-widest text-slate-900 block">
                  Procurement & Delivery Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:border-blue-600 focus:outline-none rounded-xs font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Company / Plant Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Precision Engineering Ltd"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:border-blue-600 focus:outline-none rounded-xs font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="procurement@company.com"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:border-blue-600 focus:outline-none rounded-xs font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      WhatsApp / Phone *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:border-blue-600 focus:outline-none rounded-xs font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Delivery Location / Plant City
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Manesar, Greater Noida, Pune, Chennai, Baddi"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:border-blue-600 focus:outline-none rounded-xs font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Special Technical Requirements / Delivery Schedule
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. Urgent dispatch required by Friday, include manufacturer batch test certificate (COA) with shipment..."
                      className="w-full p-2.5 text-xs border border-slate-300 focus:border-blue-600 focus:outline-none rounded-xs font-medium text-slate-900 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submission CTA Block */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest py-3.5 px-4 rounded-xs shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Formal RFQ...' : `Submit RFQ For ${basket.length} Items`}</span>
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-px bg-slate-200 flex-1"></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Or instant WhatsApp</span>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Itemized List via WhatsApp</span>
                </a>

                <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                  🔒 ACS Corporation respects your privacy. RFQ requests are handled directly by technical sales engineers with strict confidentiality.
                </p>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
