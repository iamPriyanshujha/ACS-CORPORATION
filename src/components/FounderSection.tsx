import React from 'react';
import founderPhoto from '../assets/images/founder_priyanshu_jha_1788608737650.jpg';
import { 
  ShieldCheck, 
  User, 
  Target, 
  Quote, 
  MessageSquare, 
  FileText,
  Phone,
  Mail,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface FounderSectionProps {
  onNavigate?: (section: string) => void;
  onOpenQuote?: () => void;
  showDirectConnect?: boolean;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ 
  onNavigate, 
  onOpenQuote,
  showDirectConnect = false 
}) => {
  return (
    <div className="space-y-6">
      {/* Exact Founder Profile Block */}
      <div id="meet-founder-section" className="bg-[#0B192C] text-white border-2 border-sky-500/40 rounded-sm shadow-2xl p-4 sm:p-8 md:p-12 relative overflow-hidden">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Founder Profile Card (Left: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center text-center bg-[#071322] border border-sky-500/30 p-4 sm:p-7 md:p-8 rounded-sm shadow-xl">
            
            {/* Executive Founder Portrait */}
            <div className="relative mb-5 group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-blue-600 to-indigo-600 shadow-2xl flex items-center justify-center">
                <img
                  src={founderPhoto}
                  alt="Priyanshu Jha - Founder & Leader, ACS Corporation"
                  className="w-full h-full object-cover object-top rounded-full border-2 border-[#0B192C] shadow-inner"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 border-2 border-[#071322] text-white p-1.5 rounded-full shadow-md" title="Verified Founder & Authorized Channel Partner">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Name and Designation */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-sky-500/15 border border-sky-400/30 text-sky-300 text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-xs mb-1">
                <User className="w-3 h-3" />
                <span>LEADERSHIP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-white uppercase tracking-tight">
                Priyanshu Jha
              </h3>
              <p className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                Founder — ACS Corporation
              </p>
              <p className="text-[11px] text-slate-400">
                Delhi NCR, India
              </p>
            </div>

            {/* Verification Credentials Pills */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 w-full flex flex-col gap-2 text-[11px] text-slate-300">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Direct Founder Oversight on Every Order</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-sky-300 font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Pan-India Plant Logistics Desk</span>
              </div>
            </div>

          </div>

          {/* Founder Story & Vision (Right: 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest mb-2">
                <Target className="w-4 h-4 text-orange-400" />
                <span>MEET THE FOUNDER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white uppercase tracking-tight">
                Driving Industrial Sourcing with Integrity & Reliability
              </h3>
            </div>

            <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong className="text-white font-semibold">ACS Corporation</strong> was founded with a simple belief: <strong className="text-sky-300 font-semibold">build a business where trust is earned through every product, every commitment, and every relationship.</strong>
              </p>

              <p>
                With a forward-thinking, customer-first approach and a deep commitment to operational excellence, Priyanshu brings fresh energy and precision to building ACS Corporation.
              </p>

              <p>
                As the founder, he is directly involved in developing the business, forging solid relationships with European & OEM suppliers, understanding complex customer tribology requirements, and architecting systems that help ACS fulfill orders with speed and accuracy.
              </p>

              <p>
                His vision for ACS is to create a modern industrial supply house that combines <span className="text-white font-medium">professionalism, technology, reliable sourcing, and customer-first service</span> to build lasting, multi-decade business relationships.
              </p>
            </div>

            {/* Founder Direct Quote Callout */}
            <div className="bg-[#050F1D] border-l-4 border-orange-500 p-4 sm:p-5 rounded-r-sm shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xs bg-orange-500/10 border border-orange-500/20 shrink-0 text-orange-400">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-relaxed">
                    “Our goal is not simply to make a sale. It is to earn your trust, deliver on our promises, and build relationships that last.”
                  </p>
                  <div className="text-xs font-black text-orange-400 uppercase tracking-wider">
                    — Priyanshu Jha <span className="text-slate-400 font-normal">| Founder, ACS Corporation</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Optional Direct Connect Bar when viewed in standalone founder view */}
      {showDirectConnect && (
        <div className="bg-white border-2 border-slate-200/90 p-6 sm:p-8 rounded-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight">
              Have a Direct Inquiry or Partnership Opportunity?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Connect directly with our founder desk for corporate accounts, annual supply contracts, factory tribology audits, and pan-India distribution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/917827976806?text=Hello%20Priyanshu,%20I%20would%20like%20to%20connect%20regarding%20ACS%20Corporation"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-founder-direct-whatsapp"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-black uppercase tracking-wider px-4 py-3 rounded-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>WhatsApp Founder Desk</span>
            </a>

            {onOpenQuote && (
              <button
                type="button"
                onClick={onOpenQuote}
                id="btn-founder-direct-quote"
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider px-4 py-3 rounded-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Request Price Quote</span>
              </button>
            )}

            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                id="btn-founder-direct-contact"
                className="bg-[#0B192C] hover:bg-[#1E3E62] text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Full Contact Desk</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
