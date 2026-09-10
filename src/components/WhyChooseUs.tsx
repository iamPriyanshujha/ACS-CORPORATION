import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Headphones,
  Zap
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnquiry: () => void;
  onExploreProducts: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenEnquiry,
  onExploreProducts
}) => {
  const advantages = [
    {
      icon: Zap,
      badge: 'CONVENIENCE & EASE',
      title: 'Easy & Smooth Process',
      description: 'Effortless procurement designed around your convenience. No complicated paperwork, delays, or red tape—simply send your part number or specs and enjoy a fast, smooth process from quotation to delivery.',
      accentColor: 'text-sky-600 border-sky-200 bg-sky-50',
      tagColor: 'text-sky-700 bg-sky-50 border-sky-200',
      highlight: 'Convenient & Hassle-Free'
    },
    {
      icon: Headphones,
      badge: '24X7 SUPPORT',
      title: '24x7 Dedicated Contact Support',
      description: 'Round-the-clock availability for critical maintenance needs and urgent production plant emergencies. Connect immediately via WhatsApp (+91 7827976806), direct call, or email (acscorporation.in@gmail.com).',
      accentColor: 'text-emerald-600 border-emerald-200 bg-emerald-50',
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      highlight: 'Always Accessible & Responsive'
    },
    {
      icon: ShieldCheck,
      badge: 'BEST QUALITY',
      title: 'Best Quality Formulations',
      description: 'Superior, high-grade specialty lubricants, synthetic greases, and engineering sprays sourced from globally recognized leaders (OKS, Klüber, 3M, Festo, Cortec, ACE). Batch COA available on request.',
      accentColor: 'text-blue-600 border-blue-200 bg-blue-50',
      tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
      highlight: 'Reliable Sourcing Standards'
    },
    {
      icon: TrendingUp,
      badge: 'BEST RATES',
      title: 'Best Rates & Maximum Value',
      description: 'Premium industrial quality at the most competitive rates in the market. Direct supply efficiency eliminates unnecessary broker markups, giving your plant transparent wholesale pricing and GST compliance.',
      accentColor: 'text-amber-600 border-amber-200 bg-amber-50',
      tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
      highlight: 'Transparent Wholesale Rates'
    },
    {
      icon: Truck,
      badge: 'PAN-INDIA SUPPLY',
      title: 'All-Over India Supply & Rapid Logistics',
      description: 'Quotes delivered within 2 hours with fast, reliable dispatch across all industrial hubs and manufacturing clusters nationwide. From our central facility in Ghaziabad (NCR), we guarantee seamless door-to-plant delivery all over India.',
      accentColor: 'text-orange-600 border-orange-200 bg-orange-50',
      tagColor: 'text-orange-700 bg-orange-50 border-orange-200',
      highlight: 'Supplying Across All of India'
    },
    {
      icon: Award,
      badge: 'TECHNICAL ADVISORY',
      title: 'Accurate Product & Grade Matching',
      description: 'Get the exact formulation the first time. Our technical advisory team helps cross-reference part numbers, analyze operating temperatures, and select the optimal grease or oil grade for your equipment.',
      accentColor: 'text-indigo-600 border-indigo-200 bg-indigo-50',
      tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      highlight: 'Expert Technical Assistance'
    }
  ];

  return (
    <section id="why-choose-acs-section" className="bg-slate-50 py-16 md:py-20 px-4 md:px-8 relative overflow-hidden border-y border-slate-200">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Punchy Promotion */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-300 px-3.5 py-1 text-sky-800 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-3 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
            <span>THE ACS ADVANTAGE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight text-slate-900 uppercase">
            Why Leading Plants <span className="text-sky-600">Choose ACS Corporation</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Convenience, speed, and dependable quality. We combine an easy and smooth process, 24x7 contact support, best quality industrial formulations, and best wholesale rates for uninterrupted operations.
          </p>
        </div>

        {/* 6 High-Impact Promotional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-sky-500 p-6 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1 relative flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 border rounded-sm flex items-center justify-center ${item.accentColor} shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 border rounded-xs ${item.tagColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comprehensive Portfolio Announcement Box */}
        <div className="mb-10 bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30 border-2 border-sky-400/40 p-6 md:p-8 rounded-sm shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-sky-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-xs">
                <span>COMPLETE LUBRICATION PORTFOLIO</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                All Types & Purposes of Industrial Oils and Greases Are Readily Available
              </h3>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Whether your plant requires high-temperature synthetic bearing greases, high-speed spindle oils, heavy-duty industrial gear oils, NSF H1 food-grade lubricants, anti-corrosion protective coatings, or high-pressure assembly pastes — we stock and supply solutions for every tribological purpose and severe operating condition. Whatever your machinery requirement or pack size, all grades are available. <strong className="text-sky-900 font-semibold">Please feel free to connect with our technical team for instant grade matching and competitive pricing.</strong>
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-slate-600">
                <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-xs font-mono text-sky-800 font-bold">✓ Synthetic & Mineral Gear Oils</span>
                <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-xs font-mono text-sky-800 font-bold">✓ High-Load Rolling Bearing Greases</span>
                <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-xs font-mono text-sky-800 font-bold">✓ NSF H1 Food-Grade Formulations</span>
                <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-xs font-mono text-sky-800 font-bold">✓ Anti-Seize Pastes & Sprays</span>
                <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-xs font-mono text-emerald-800 font-bold">✓ All Pack Sizes Available</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto lg:w-56 bg-sky-600 hover:bg-sky-700 text-white font-black text-xs uppercase tracking-wider py-3.5 px-5 text-center transition-colors shadow-sm rounded-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/917827976806?text=Hello%20ACS%20Corporation,%20I%20need%20pricing%20and%20availability%20for%20industrial%20oils%20and%20greases"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto lg:w-56 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-5 text-center transition-colors shadow-sm rounded-xs flex items-center justify-center gap-2"
              >
                <span>WhatsApp: +91 7827976806</span>
              </a>
            </div>
          </div>
        </div>

        {/* Action Banner / Quick Quote Callout */}
        <div className="bg-gradient-to-r from-[#0B192C] via-[#132A4A] to-[#0B192C] border border-sky-500/40 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl rounded-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sky-400 text-xs font-black uppercase tracking-wider">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>Pan-India Supply & 24x7 Support Desk</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-white">
              Need an Urgent Lubrication Recommendation or Price Quote?
            </h4>
            <p className="text-xs text-slate-300">
              Direct Helpline: <strong className="text-white font-mono">011 7157 1463 / +91 7827976806</strong> • Email: <a href="mailto:acscorporation.in@gmail.com" className="text-sky-400 font-mono hover:underline font-bold">acscorporation.in@gmail.com</a>
            </p>
            <p className="text-[11px] text-slate-400">
              <strong className="text-sky-300">Office:</strong> D-53, Sector 08, Sangam Park, Khora, Ghaziabad, UP • <strong className="text-emerald-400">Supplying All Over India</strong>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenEnquiry}
              className="flex-1 md:flex-none bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs uppercase tracking-widest px-6 py-3.5 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 rounded-xs cursor-pointer"
            >
              <span>Request Fast RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onExploreProducts}
              className="flex-1 md:flex-none bg-[#132A4A] hover:bg-[#1C3B66] border border-sky-400/40 hover:border-sky-400 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 transition-all text-center rounded-xs cursor-pointer"
            >
              Browse Catalog
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
