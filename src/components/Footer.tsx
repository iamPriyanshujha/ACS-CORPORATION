import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare, 
  ExternalLink,
  Award,
  FileText,
  Lock
} from 'lucide-react';
import { ACSLogo } from './ACSLogo';

interface FooterProps {
  onNavigate: (section: string) => void;
  onSelectBrand: (brand: string) => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectBrand,
  onOpenTerms,
  onOpenPrivacy
}) => {
  return (
    <footer className="bg-[#040A14] text-gray-300 pt-16 pb-12 px-4 md:px-8 border-t-2 border-sky-500/40 relative overflow-hidden">
      {/* Background blueprint grid watermark */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* ============================================================ */}
        {/* --- SEPARATE DEDICATED CONTACT DETAILS HERO CARD --- */}
        {/* ============================================================ */}
        <section 
          aria-label="Direct Industrial Contact Details" 
          className="bg-gradient-to-br from-[#08182E] via-[#0B213F] to-[#08182E] border-2 border-sky-500/40 p-6 sm:p-8 md:p-10 shadow-2xl rounded-xs"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-sky-500/20">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-sky-300 text-[10px] md:text-xs font-black uppercase tracking-[0.22em] mb-2 rounded-xs">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>CENTRAL PROCUREMENT & LOGISTICS DESK</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
                Connect Directly with <span className="text-sky-400">ACS Corporation</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Immediate pricing, stock confirmation, and logistics routing from our central Sector 62 warehouse.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/917827976806"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>Request Formal RFQ</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Clean Dedicated Contact Metric Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
            
            {/* Block 1: Address */}
            <div className="bg-[#050E1A]/80 p-4 border border-sky-500/25 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-orange-400 text-[11px] font-black uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Central Warehouse & Office</span>
                </div>
                <p className="text-white font-bold leading-relaxed">
                  ACS Corporation
                </p>
                <p className="text-slate-300 mt-1 text-[11px] leading-relaxed">
                  D-53, Sec 08, Sangam Park, Khora, Ghaziabad, UP, India
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-sky-400 font-bold uppercase">
                Office: Supplying All Over India
              </div>
            </div>

            {/* Block 2: Telephones */}
            <div className="bg-[#050E1A]/80 p-4 border border-sky-500/25 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-400 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Direct Procurement Lines</span>
                </div>
                <div className="space-y-1.5">
                  <div>
                    <span className="text-[10px] text-slate-400 block">General Office Desk:</span>
                    <a href="tel:01171571463" className="text-white hover:text-sky-300 font-mono font-bold text-xs tracking-wider">
                      011 7157 1463
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Mobile & Technical Helpline:</span>
                    <a href="tel:07827976806" className="text-white hover:text-sky-300 font-mono font-bold text-xs tracking-wider">
                      +91 7827976806
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-bold uppercase">
                Direct Hotline • Fast Response
              </div>
            </div>

            {/* Block 3: Email Desk */}
            <div className="bg-[#050E1A]/80 p-4 border border-sky-500/25 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Commercial & RFQ Email</span>
                </div>
                <div className="space-y-1.5">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Direct Inquiries & Quotes:</span>
                    <a href="mailto:acscorporation.in@gmail.com" className="text-white hover:text-emerald-300 font-mono text-xs font-bold truncate block">
                      acscorporation.in@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-medium">
                Average RFQ Quote: &lt; 2 Hours
              </div>
            </div>

            {/* Block 4: Hours & Compliance */}
            <div className="bg-[#050E1A]/80 p-4 border border-sky-500/25 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Operating Hours & GST</span>
                </div>
                <p className="text-white font-semibold text-xs leading-relaxed">
                  Monday – Saturday
                </p>
                <p className="text-slate-300 text-[11px]">
                  09:30 AM – 06:30 PM IST
                </p>
                <div className="mt-2 text-[10px] text-slate-400">
                  GST Verified Industrial Supplier • B2B Billing & Formal Invoicing
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-orange-400 font-bold uppercase">
                Emergency Breakdown Dispatch Ready
              </div>
            </div>

          </div>
        </section>


        {/* ============================================================ */}
        {/* --- MAIN NAVIGATION & BRAND REPRESENTATION COLUMNS --- */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pt-4">
          
          {/* Col 1: ACS Identity & Slogan (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <ACSLogo />
            
            <div className="inline-block bg-orange-500/20 border-l-4 border-orange-500 px-3 py-0.5 text-[11px] font-bold text-orange-300 tracking-widest uppercase">
              TRUST • QUALITY • GROWTH
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              ACS Corporation is Delhi NCR’s industrial supply house for specialty tribology and engineering MRO. We supply factory-sealed specialty lubricants and components sourced from trusted channels including OKS Spezialschmierstoffe, Klüber Lubrication, 3M, Festo, Cortec, and ACE.
            </p>

            <div className="pt-2 text-[10px] text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-orange-400" />
              <span>Industrial Channel Partner • Certificate of Analysis on Demand</span>
            </div>
          </div>

          {/* Col 2: Represented Principals (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-black text-sky-400 uppercase tracking-widest border-l-2 border-sky-500 pl-3">
              Represented Principals
            </h4>
            <ul className="text-xs space-y-2 font-medium tracking-wide text-slate-300">
              <li>
                <button 
                  onClick={() => onSelectBrand('OKS')} 
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer flex items-center justify-between w-full group"
                >
                  <span>OKS Spezialschmierstoffe</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-sky-400">Germany</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBrand('KLÜBER LUBRICATION')} 
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer flex items-center justify-between w-full group"
                >
                  <span>Klüber Lubrication München</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-sky-400">Germany</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBrand('3M')} 
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer flex items-center justify-between w-full group"
                >
                  <span>3M Industrial Abrasives & Tapes</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-sky-400">USA</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBrand('FESTO')} 
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer flex items-center justify-between w-full group"
                >
                  <span>Festo Factory Pneumatics</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-sky-400">Germany</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBrand('CORTEC')} 
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer flex items-center justify-between w-full group"
                >
                  <span>Cortec VCI Corrosion Care</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-sky-400">USA</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBrand('ACE')} 
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer flex items-center justify-between w-full group"
                >
                  <span>ACE Industrial Shock Absorbers</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-sky-400">Germany</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-sans font-black text-sky-400 uppercase tracking-widest border-l-2 border-sky-500 pl-3">
              Navigation
            </h4>
            <ul className="text-xs space-y-2 font-medium tracking-wide text-slate-300">
              <li><button onClick={() => onNavigate('home')} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Home Overview</button></li>
              <li><button onClick={() => onNavigate('why-us')} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Why Choose ACS</button></li>
              <li><button onClick={() => onNavigate('brands')} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Brand Directory</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Products Catalog</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Company Profile</button></li>
              <li><button onClick={() => onNavigate('founder')} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Meet Our Founder</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Contact & RFQ</button></li>
            </ul>
          </div>

          {/* Col 4: Sourcing Standards & Certifications (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-black text-emerald-400 uppercase tracking-widest border-l-2 border-emerald-500 pl-3">
              Supply Integrity
            </h4>
            <ul className="text-[11px] space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Direct Sourced Quality:</strong> Original batch-sealed chemical drums and containers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>COA & MSDS Provided:</strong> Technical parameters and safety compliance data for every consignment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>NSF H1 Food-Grade Available:</strong> Compliant food-grade, Halal, and Kosher certified greases.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Express NCR & PAN India:</strong> Rapid logistics from central facility at D-53, Sec 08, Sangam Park, Khora, Ghaziabad, UP — supplying all over India.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ============================================================ */}
        {/* --- BOTTOM LEGAL, TERMS & STATUTORY BAR --- */}
        {/* ============================================================ */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          
          <div className="space-y-1 text-center md:text-left">
            <div>
              © {new Date().getFullYear()} <strong className="text-slate-200">ACS Corporation</strong>. All Rights Reserved.
            </div>
            <div className="text-[10px] text-slate-500 max-w-2xl leading-relaxed">
              Disclaimer: All product brand names, trademarks, logos, and emblems are the property of their respective manufacturers. Their use is strictly for identification and compatibility purposes. ACS Corporation is an independent sourcing specialist and channel partner.
            </div>
          </div>

          {/* Clickable Privacy & Terms Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <button
              onClick={onOpenTerms}
              id="footer-link-terms"
              className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>Terms & Conditions</span>
            </button>

            <span className="text-slate-700">•</span>

            <button
              onClick={onOpenPrivacy}
              id="footer-link-privacy"
              className="text-slate-300 hover:text-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-sky-400" />
              <span>Privacy Policy</span>
            </button>

            <span className="text-slate-700">•</span>

            <button
              onClick={() => onNavigate('contact')}
              className="text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Statutory & GST Compliance
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
