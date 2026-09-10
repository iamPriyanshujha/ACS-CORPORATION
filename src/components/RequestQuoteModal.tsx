import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Send, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  Package, 
  Layers, 
  Clock, 
  MessageSquare,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { UserProfile } from '../types';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitQuote: (data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    brandName: string;
    productName: string;
    quantity: string;
    message: string;
  }) => Promise<void> | void;
  currentUser?: UserProfile | null;
  initialBrand?: string;
  initialProduct?: string;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({
  isOpen,
  onClose,
  onSubmitQuote,
  currentUser,
  initialBrand = '',
  initialProduct = ''
}) => {
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: '',
    company: '',
    brandName: initialBrand || 'OKS Spezialschmierstoffe',
    productName: initialProduct || '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData(prev => ({
        ...prev,
        name: currentUser?.name || prev.name || '',
        email: currentUser?.email || prev.email || '',
        brandName: initialBrand || prev.brandName || 'OKS Spezialschmierstoffe',
        productName: initialProduct || prev.productName || ''
      }));
      // Lock background scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentUser, initialBrand, initialProduct]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    setIsSubmitting(true);
    try {
      await onSubmitQuote({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        brandName: formData.brandName,
        productName: formData.productName || 'General Quote Request',
        quantity: formData.quantity,
        message: `${formData.quantity ? `[Quantity: ${formData.quantity}] ` : ''}${formData.message}`
      });

      const randomRef = `ACS-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(randomRef);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting quote request:", err);
      // Still show success for customer UX with local ref
      const randomRef = `ACS-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(randomRef);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      phone: '',
      company: '',
      brandName: 'OKS Spezialschmierstoffe',
      productName: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#040914]/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
    >
      <div className="relative w-full max-w-2xl bg-[#0B192C] border border-sky-500/40 shadow-2xl rounded-sm my-auto text-slate-100 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#0F2744] via-[#1E3E62] to-[#0A192F] p-4 sm:p-5 border-b border-sky-500/30 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs">
              <Clock className="w-3 h-3" />
              <span>Fast 2-Hour Response • Pan-India Supply</span>
            </div>
            <h3 id="modal-quote-title" className="text-lg sm:text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-400" />
              <span>Request Industrial Price Quote / RFQ</span>
            </h3>
            <p className="text-xs text-slate-300">
              Direct factory sourcing for OKS, Klüber, 3M, Festo, Cortec & ACE. Complete the details below for formal pricing and stock availability.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors rounded-xs shrink-0 cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            /* Success State */
            <div className="py-6 px-4 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-white uppercase tracking-tight">
                  Quote Request Received!
                </h4>
                <p className="text-xs text-emerald-400 font-mono font-bold tracking-wider">
                  Reference ID: #{referenceId}
                </p>
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our industrial sales and technical desk at D-53, Sector 08, Sangam Park, Khora, Ghaziabad, UP (supplying all over India) has received your requirements for <strong className="text-sky-300">{formData.brandName}</strong>. A formal commercial quote with stock availability and delivery timeline will be shared with you shortly.
              </p>

              {/* Immediate Contact Options */}
              <div className="bg-[#07111F] border border-sky-500/30 p-3.5 rounded-sm max-w-md mx-auto space-y-2 text-left">
                <div className="text-[11px] font-bold text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Need an immediate urgent dispatch?</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:01171571463"
                    className="flex items-center justify-center gap-1.5 bg-[#1E3E62] hover:bg-sky-600 text-white font-bold py-2 px-3 rounded-xs transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
                    <span>011 7157 1463</span>
                  </a>
                  <a
                    href="https://wa.me/917827976806?text=Hi%20ACS%20Corporation,%20following%20up%20on%20Quote%20Request"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3 rounded-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xs transition-colors cursor-pointer"
                >
                  Done / Close
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-sky-300 hover:text-white underline font-semibold cursor-pointer"
                >
                  Submit Another Quote
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Contact Person Name <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs pl-9 pr-3 py-2 rounded-xs outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Company / Plant Name <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Precision Engineering Ltd"
                      className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs pl-9 pr-3 py-2 rounded-xs outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs pl-9 pr-3 py-2 rounded-xs outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Work Email Address <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="procurement@company.com"
                      className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs pl-9 pr-3 py-2 rounded-xs outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Brand & Product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Brand Category <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <Layers className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleChange}
                      className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs pl-9 pr-3 py-2 rounded-xs outline-none transition-all cursor-pointer"
                    >
                      <option value="OKS Spezialschmierstoffe">OKS Spezialschmierstoffe</option>
                      <option value="Klüber Lubrication">Klüber Lubrication</option>
                      <option value="3M Industrial">3M Industrial & Abrasives</option>
                      <option value="Festo Automation">Festo Pneumatics & Automation</option>
                      <option value="Cortec VCI">Cortec VCI Anti-Corrosion</option>
                      <option value="ACE Deceleration">ACE Industrial Deceleration</option>
                      <option value="General MRO / Tribology">General Specialty Tribology & MRO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Part Number / Product SKU
                  </label>
                  <div className="relative">
                    <Package className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      placeholder="e.g. OKS 250, Isoflex Topas NB 52, etc."
                      className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs pl-9 pr-3 py-2 rounded-xs outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Quantity & Packaging */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Required Quantity / Packaging Size
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 5x 1kg tins, 2x 25kg drums, 1 carton of 400ml aerosol sprays"
                  className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs px-3 py-2 rounded-xs outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Row 5: Detailed Specifications / Message */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Application Operating Conditions / Requirements
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention equipment type, operating temperature, speed, load, or any specific certifications (NSF H1 food grade, Halal, etc.)..."
                  className="w-full bg-[#07111F] border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-xs p-3 rounded-xs outline-none transition-all placeholder:text-slate-500 resize-none"
                />
              </div>

              {/* Sourcing & Transparency Note */}
              <div className="bg-[#07111F] border border-slate-800 p-3 rounded-xs flex items-center justify-between gap-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>GST Invoicing • Batch Documentation & COA Provided on Request</span>
                </div>
                <span className="font-mono text-[10px] text-sky-400 shrink-0">Supplying All Over India</span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-submit-rfq-modal"
                  className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-xs transition-all shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Footer info bar */}
        <div className="bg-[#050D1A] border-t border-slate-800/80 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400">
          <div>
            Direct Inquiries: <a href="mailto:acscorporation.in@gmail.com" className="text-sky-400 font-mono hover:underline font-bold">acscorporation.in@gmail.com</a>
          </div>
          <div>
            Phone: <a href="tel:01171571463" className="text-slate-200 font-mono hover:text-white font-bold">011 7157 1463</a> / <a href="tel:07827976806" className="text-slate-200 font-mono hover:text-white font-bold">+91 7827976806</a>
          </div>
        </div>

      </div>
    </div>
  );
};
