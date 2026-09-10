import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle2 } from 'lucide-react';

interface LegalModalsProps {
  isOpen: boolean;
  initialTab?: 'terms' | 'privacy';
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  isOpen,
  initialTab = 'terms',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="bg-[#0A192F] text-slate-100 max-w-3xl w-full border border-sky-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] rounded-xs animate-scaleUp">
        
        {/* Header with Tabs */}
        <div className="bg-[#050D1A] border-b border-sky-500/30 p-4 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab('terms')}
              className={`text-xs sm:text-sm font-black uppercase tracking-widest px-3 sm:px-4 py-2 transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
                activeTab === 'terms'
                  ? 'border-orange-500 text-orange-400 bg-orange-500/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Terms & Conditions</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`text-xs sm:text-sm font-black uppercase tracking-widest px-3 sm:px-4 py-2 transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
                activeTab === 'privacy'
                  ? 'border-sky-400 text-sky-300 bg-sky-500/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Privacy Policy</span>
            </button>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          {activeTab === 'terms' ? (
            /* TERMS AND CONDITIONS */
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-1 border border-orange-500/30 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ACS Corporation • Commercial Supply Terms</span>
                </div>
                <h3 id="legal-modal-title" className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Standard Terms of Sale & Quotation
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  Effective Date: January 2024 • Applicable to all RFQs, Invoices, and Deliveries by ACS Corporation.
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  1. Authenticity & Sourcing Standards
                </h4>
                <p>
                  ACS Corporation supplies quality industrial lubricants, greases, pastes, sprays, pneumatics, and abrasives sourced from dependable manufacturers and authorized distribution networks. Technical data sheets (TDS) and manufacturer Certificates of Analysis (COA) can be provided upon written request for quality assurance.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  2. Quotations, Pricing & Validity
                </h4>
                <p>
                  All commercial quotations issued via web portal, email, or formal proforma invoice are valid for 30 calendar days from the date of issuance unless explicitly stated otherwise. Prices are quoted in INR (Indian Rupee), exclusive of applicable GST (Goods and Services Tax), which is charged in accordance with statutory government rates. Freight charges and transit insurance will be specified in the formal quotation.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  3. Order Confirmation & Purchase Orders
                </h4>
                <p>
                  Orders become binding upon receipt of an authorized commercial Purchase Order (PO) or advance payment as per agreed payment terms (LC, PDC, NEFT/RTGS, or corporate credit). Custom or non-standard imported drum quantities are non-cancellable once the export consignment is dispatched from the European bonded facility.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  4. Dispatch, Warehousing & Transit Risk
                </h4>
                <p>
                  Standard stocked SKUs are dispatched from our central facility at D-53, Sector 08, Sangam Park, Khora, Ghaziabad, UP within 24–48 working hours, supplying all over India. In-transit damages must be noted on the carrier consignment note (LR) and reported to our dispatch desk within 48 hours of physical receipt at the customer site.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  5. Returns & Product Integrity Policy
                </h4>
                <p>
                  Due to the critical chemical purity requirements of tribology products and NSF H1 food-grade standards, containers with broken tamper-evident factory seals, unsealed tins, or compromised chemical packaging cannot be accepted for return or restocking.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  6. Technical Advisory & Application Guidance
                </h4>
                <p>
                  Product recommendations provided by ACS Corporation engineers are based on manufacturer data sheets and operational parameters provided by the client. The buyer is responsible for verifying chemical compatibility, elastomer tolerance, and load conditions for their specific industrial machinery.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  7. Governing Law & Jurisdiction
                </h4>
                <p>
                  All commercial agreements and disputes arising from supply contracts are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Ghaziabad, Uttar Pradesh.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  8. Trademarks & Brand Property Rights
                </h4>
                <p>
                  All third-party brand names, company names, trademarks, logos, and emblems referenced throughout this website (including but not limited to OKS, Klüber Lubrication, 3M, Festo, Cortec, and ACE) are the registered property of their respective owners. Their mention is strictly for product identification, descriptive specifications, and equipment compatibility purposes. ACS Corporation operates as an independent sourcing specialist and channel partner.
                </p>
              </section>
            </div>
          ) : (
            /* PRIVACY POLICY */
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-1 border border-sky-500/30 mb-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>ACS Corporation • Customer Privacy Safeguard</span>
                </div>
                <h3 id="legal-modal-title" className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Corporate Privacy & Data Protection Policy
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  Last Updated: January 2025 • High-level privacy assurance for B2B industrial procurement clients.
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  1. Information We Collect
                </h4>
                <p>
                  When you request an RFQ, download technical data sheets (TDS), or contact our procurement desk, we collect business contact details such as company name, procurement officer name, industrial email address, phone/WhatsApp number, delivery pin code/address, and product specifications.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  2. Purpose & Use of Data
                </h4>
                <p>
                  We strictly use your commercial information to:
                </p>
                <ul className="space-y-1.5 pl-3 list-disc text-slate-400 text-xs">
                  <li>Generate and deliver accurate price quotations and availability estimates</li>
                  <li>Provide manufacturer Certificate of Analysis (COA) and safety data sheets (MSDS)</li>
                  <li>Coordinate logistics and delivery tracking for order consignments</li>
                  <li>Communicate scheduled plant maintenance cycle reminders when requested</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  3. Zero Third-Party Monetization
                </h4>
                <p>
                  ACS Corporation maintains strict B2B confidentiality. We never sell, rent, trade, or distribute your company’s procurement data, project specifications, or contact records to external marketing agencies or third-party advertisers.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  4. Secure Data Storage & Authentication
                </h4>
                <p>
                  Customer inquiries and portal logins are encrypted in transit via Transport Layer Security (TLS/SSL). Authentication is handled via verified Google Identity Services ensuring zero password exposure.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider">
                  5. Contact Data Officer
                </h4>
                <p>
                  If you wish to update your company’s billing/shipping details or request data deletion from our CRM system, please email our team at <strong className="text-white">acscorporation.in@gmail.com</strong> or call <strong className="text-white">+91 11 7157 1463</strong>.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#050D1A] border-t border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>ACS Corporation • Certified Industrial Channel Partner</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-xs transition-all cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
