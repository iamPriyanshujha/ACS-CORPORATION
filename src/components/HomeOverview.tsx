import React from 'react';
import { ArrowRight, ShieldCheck, Award, Layers, Building2, PhoneCall, CheckCircle2, ChevronRight } from 'lucide-react';

interface HomeOverviewProps {
  onNavigate: (section: string) => void;
  onSelectBrand: (brand: string) => void;
  onOpenQuote?: () => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  onNavigate,
  onSelectBrand,
  onOpenQuote
}) => {
  return (
    <div className="bg-[#08182E] text-white py-16 px-4 md:px-8 border-b border-sky-500/25">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-sky-500/15 border border-sky-500/30 text-sky-400 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] px-3.5 py-1 mb-3 rounded-xs">
            INDUSTRIAL SUPPLY SPECIALIST
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight uppercase">
            Everything For Your Plant’s <span className="text-sky-400">Tribology & MRO</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Direct channel access to global engineering leaders, expedited stock dispatch from our central office in Ghaziabad (NCR), supplying manufacturing plants all over India.
          </p>
        </div>

        {/* 30+ Years Experience & Application Engineers Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#0C2444] via-[#12335E] to-[#0C2444] border-2 border-sky-400/40 p-6 md:p-8 rounded-sm shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left">
            <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 font-black text-2xl flex flex-col items-center justify-center font-mono shrink-0 shadow-lg border border-amber-300">
              <span>30+</span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider -mt-1 text-slate-900">Years</span>
            </div>
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-black uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-400" />
                <span>EXPERIENCED ENGINEERING FOUNDATION</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                The Team with <span className="text-amber-400">30+ Years Experience</span>, Partnered with the Best Technical & Application Engineers
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Industrial tribology demands proven experience. Our senior engineering team brings 30+ years of plant tribology and mechanical maintenance expertise, working hand-in-hand with top technical and application engineers. <span className="text-sky-300 font-semibold">All types and purposes of oils and greases are readily available</span> — connect with us for instant technical guidance, grade matching, and competitive quotes.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row lg:flex-col gap-2.5">
            <button
              onClick={() => onNavigate('about')}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-5 transition-all shadow-md rounded-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Learn About Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('why-us')}
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 transition-all rounded-xs text-center cursor-pointer"
            >
              Explore Why ACS
            </button>
          </div>
        </div>

        {/* 4 Gateway Cards to Dedicated Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* 1. WHY ACS */}
          <div 
            onClick={() => onNavigate('why-us')}
            className="bg-[#0A1E36] hover:bg-[#0E2746] border border-slate-800 hover:border-sky-500/60 p-6 flex flex-col justify-between rounded-sm cursor-pointer transition-all duration-200 group shadow-lg"
          >
            <div>
              <div className="w-10 h-10 rounded-sm bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block mb-1">Pillars of Trust</span>
              <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                Why ACS Corporation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Experience an easy and smooth process, fast turnaround, 24x7 contact support, best quality industrial formulations, and best wholesale rates.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-white">
              <span>View Core Advantages</span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 2. BRANDS */}
          <div 
            onClick={() => onNavigate('brands')}
            className="bg-[#0A1E36] hover:bg-[#0E2746] border border-slate-800 hover:border-sky-500/60 p-6 flex flex-col justify-between rounded-sm cursor-pointer transition-all duration-200 group shadow-lg"
          >
            <div>
              <div className="w-10 h-10 rounded-sm bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block mb-1">Authorized Channel</span>
              <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                Represented Principals
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Official representation for 6 global manufacturers: OKS Spezialschmierstoffe, Klüber Lubrication, 3M, Festo, Cortec, and ACE.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-white">
              <span>Explore Principals</span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 3. PRODUCTS */}
          <div 
            onClick={() => onNavigate('products')}
            className="bg-[#0A1E36] hover:bg-[#0E2746] border border-slate-800 hover:border-sky-500/60 p-6 flex flex-col justify-between rounded-sm cursor-pointer transition-all duration-200 group shadow-lg"
          >
            <div>
              <div className="w-10 h-10 rounded-sm bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block mb-1">Complete Catalog</span>
              <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                Specialty Products
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Search over 200+ specialty greases, high-temp gear oils, NSF H1 food-grade pastes, and aerosol sprays with direct quote requests.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-white">
              <span>Browse Catalog</span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 4. ABOUT & CONTACT */}
          <div 
            onClick={() => onOpenQuote ? onOpenQuote() : onNavigate('contact')}
            className="bg-[#0A1E36] hover:bg-[#0E2746] border border-slate-800 hover:border-sky-500/60 p-6 flex flex-col justify-between rounded-sm cursor-pointer transition-all duration-200 group shadow-lg"
          >
            <div>
              <div className="w-10 h-10 rounded-sm bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block mb-1">Procurement Desk</span>
              <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                RFQ & Consultation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct quotation response within 2 hours. Speak with our tribology desk or submit batch requirements for quick dispatch.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-white">
              <span>Request Quote Now</span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* Quick Brands Bar */}
        <div className="mt-12 p-5 bg-[#060F1E] border border-slate-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-300">
              Authorized Principals:
            </span>
            <span className="text-[11px] text-sky-400 font-bold">
              OKS • Klüber • 3M • Festo • Cortec • ACE
            </span>
          </div>
          <button
            onClick={() => onNavigate('brands')}
            className="text-xs text-sky-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All Authorized Brands</span>
            <ChevronRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>

      </div>
    </div>
  );
};
