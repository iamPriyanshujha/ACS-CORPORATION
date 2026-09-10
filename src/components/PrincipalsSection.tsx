import React from 'react';
import { Award, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { oksLineupImage, kluberProductFamilyImage, festoLogoImage } from '../utils/productImages';

interface PrincipalsSectionProps {
  onSelectBrand: (brandName: string) => void;
  onOpenEnquiry?: () => void;
}

export const PrincipalsSection: React.FC<PrincipalsSectionProps> = ({
  onSelectBrand,
  onOpenEnquiry
}) => {
  return (
    <section id="principals-detail-section" className="bg-[#060F1E] text-white py-16 md:py-20 px-4 md:px-8 relative overflow-hidden border-b border-[#0284C7]/30">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0284C7]/15 border border-[#0284C7]/40 px-3.5 py-1 text-[#38BDF8] text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-3 rounded-xs">
            <Award className="w-3.5 h-3.5 text-[#F97316]" />
            <span>OFFICIAL STRATEGIC REPRESENTATION</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight uppercase">
            Representing Global <span className="text-[#38BDF8]">Industrial Authorities</span>
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Direct logistics lines to European and American supply channels ensure reliable chemical purity, original factory packaging, and technical documentation.
          </p>
        </div>

        {/* 6 Principals Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* OKS Spezialschmierstoffe */}
          <div className="bg-[#0A1E36] p-6 sm:p-8 border border-slate-800 hover:border-red-500/80 transition-all shadow-xl flex flex-col justify-between rounded-sm group">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-[#D81E05] px-4 py-2 shrink-0 shadow-md rounded-xs">
                  <span className="font-sans font-black text-white text-lg tracking-widest">OKS</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase text-white">OKS Spezialschmierstoffe</h3>
                  <span className="text-[10px] text-[#38BDF8] font-semibold tracking-widest uppercase mt-0.5 block">Maisach, Germany • Est. 1978</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Specialized chemical solutions engineered for plant maintenance, repair, and operational efficiency (MRO). High-precision assembly pastes, extreme-pressure greases, dry MoS2 lubricants, and eco-friendly industrial degreasers.
              </p>

              {/* Genuine OKS Product Lineup Showcase */}
              <div className="mb-4 h-40 w-full overflow-hidden rounded-xs border border-slate-800 relative bg-[#071324]">
                <img 
                  src={oksLineupImage} 
                  alt="OKS Spezialschmierstoffe Genuine Product Line" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2 bg-[#0B192C]/90 text-[9px] font-bold text-red-300 px-2 py-0.5 border border-red-500/40 rounded-xs shadow-sm">
                  Aerosols • Pastes • Pails • Coatings
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-red-400 font-bold block uppercase tracking-wider mb-1">Key Strengths</span>
                  <span className="text-slate-200 font-bold text-xs">NSF H1 Food-Grade & Assembly Pastes</span>
                </div>
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-red-400 font-bold block uppercase tracking-wider mb-1">Temperature Range</span>
                  <span className="text-slate-200 font-bold text-xs">-40 °C to +1,400 °C Extreme</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectBrand('OKS')}
                className="text-xs text-[#38BDF8] hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Filter OKS Products in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Klüber Lubrication */}
          <div className="bg-[#0A1E36] p-6 sm:p-8 border border-slate-800 hover:border-[#0284C7] transition-all shadow-xl flex flex-col justify-between rounded-sm group">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-gradient-to-r from-[#0284C7] to-[#0369A1] px-4 py-2 shrink-0 flex flex-col items-center leading-none text-white shadow-md rounded-xs">
                  <span className="font-sans font-black italic text-sm tracking-tighter">KLÜBER</span>
                  <span className="font-sans font-black text-[6px] tracking-wider mt-0.5 uppercase">LUBRICATION</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase text-white">Klüber Lubrication München</h3>
                  <span className="text-[10px] text-[#38BDF8] font-semibold tracking-widest uppercase mt-0.5 block">Munich, Germany • Est. 1929</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                The global gold standard in advanced synthetic tribology. Klüber formulates premium polyglycol gear oils, high-speed spindle bearing greases, and high-temperature chain oils that increase equipment lifespan up to 400%.
              </p>

              {/* Genuine Klüber Lubrication Product Lineup Showcase */}
              <div className="mb-4 h-40 w-full overflow-hidden rounded-xs border border-slate-800 relative bg-[#071324]">
                <img 
                  src={kluberProductFamilyImage} 
                  alt="Klüber Lubrication Genuine Product Family" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2 bg-[#0B192C]/90 text-[9px] font-bold text-sky-300 px-2 py-0.5 border border-sky-500/40 rounded-xs shadow-sm">
                  Drums • Pails • Jerrycans • Cartridges
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-[#38BDF8] font-bold block uppercase tracking-wider mb-1">Key Strengths</span>
                  <span className="text-slate-200 font-bold text-xs">Synthetic Gear Oils & Spindle Greases</span>
                </div>
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-[#F97316] font-bold block uppercase tracking-wider mb-1">Lifespan Metric</span>
                  <span className="text-slate-200 font-bold text-xs">Extends MRO Cycles up to 400%</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectBrand('KLÜBER LUBRICATION')}
                className="text-xs text-[#38BDF8] hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Filter Klüber Products in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 3M Industrial */}
          <div className="bg-[#0A1E36] p-6 sm:p-8 border border-slate-800 hover:border-rose-500/80 transition-all shadow-xl flex flex-col justify-between rounded-sm group">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-rose-600 px-4 py-2 shrink-0 shadow-md rounded-xs">
                  <span className="font-sans font-black text-white text-lg tracking-wider">3M</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase text-white">3M Industrial Solutions</h3>
                  <span className="text-[10px] text-rose-300 font-semibold tracking-widest uppercase mt-0.5 block">St. Paul, Minnesota, USA • Est. 1902</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Pioneering abrasives, structural adhesives, VHB joining tapes, and personal protective solutions designed for rigorous manufacturing and finishing assembly operations.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-rose-400 font-bold block uppercase tracking-wider mb-1">Key Strengths</span>
                  <span className="text-slate-200 font-bold text-xs">Precision Abrasives & Structural VHB Tapes</span>
                </div>
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-rose-400 font-bold block uppercase tracking-wider mb-1">Application</span>
                  <span className="text-slate-200 font-bold text-xs">Automotive, Metalworking & Electronics</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectBrand('3M')}
                className="text-xs text-rose-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Filter 3M Products in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Festo Automation */}
          <div className="bg-[#0A1E36] p-6 sm:p-8 border border-slate-800 hover:border-sky-500/80 transition-all shadow-xl flex flex-col justify-between rounded-sm group">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-sky-600 px-4 py-2 shrink-0 shadow-md rounded-xs">
                  <span className="font-sans font-black text-white text-lg tracking-widest">FESTO</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase text-white">Festo Factory Automation</h3>
                  <span className="text-[10px] text-sky-300 font-semibold tracking-widest uppercase mt-0.5 block">Esslingen, Germany • Est. 1925</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                World benchmark pneumatic drives, valve terminals, pneumatic tubing, and industrial automation robotics providing dependable precision motion control for manufacturing lines.
              </p>

              {/* Festo Genuine Brand Logo Showcase */}
              <div className="mb-4 h-36 w-full overflow-hidden rounded-xs border border-slate-800 relative bg-white flex items-center justify-center p-3">
                <img 
                  src={festoLogoImage} 
                  alt="Festo Factory Automation Official Brand" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2 bg-[#0B192C]/90 text-[9px] font-bold text-sky-300 px-2 py-0.5 border border-sky-500/40 rounded-xs shadow-sm">
                  Valves • Cylinders • Drives • Terminals
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-sky-400 font-bold block uppercase tracking-wider mb-1">Key Strengths</span>
                  <span className="text-slate-200 font-bold text-xs">Pneumatic Cylinders & Motion Control</span>
                </div>
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-sky-400 font-bold block uppercase tracking-wider mb-1">Reliability</span>
                  <span className="text-slate-200 font-bold text-xs">Millions of Flawless Actuation Cycles</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectBrand('FESTO')}
                className="text-xs text-sky-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Filter Festo Products in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Cortec VCI */}
          <div className="bg-[#0A1E36] p-6 sm:p-8 border border-slate-800 hover:border-emerald-500/80 transition-all shadow-xl flex flex-col justify-between rounded-sm group">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-emerald-600 px-4 py-2 shrink-0 shadow-md rounded-xs">
                  <span className="font-sans font-black text-white text-lg tracking-widest">CORTEC</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase text-white">Cortec VCI Corporation</h3>
                  <span className="text-[10px] text-emerald-300 font-semibold tracking-widest uppercase mt-0.5 block">St. Paul, Minnesota, USA • Est. 1977</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Environmentally safe Vapor Corrosion Inhibitor (VCI) packaging films, anti-corrosion emitters, and water-based protective coatings protecting valuable machinery and metal inventory during transit and storage.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-emerald-400 font-bold block uppercase tracking-wider mb-1">Key Strengths</span>
                  <span className="text-slate-200 font-bold text-xs">VpCI Packaging, Liquids & Emitters</span>
                </div>
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-emerald-400 font-bold block uppercase tracking-wider mb-1">Protection Window</span>
                  <span className="text-slate-200 font-bold text-xs">Up to 24 Months Multi-Metal Defense</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectBrand('CORTEC')}
                className="text-xs text-emerald-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Filter Cortec Products in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ACE Shock Absorbers */}
          <div className="bg-[#0A1E36] p-6 sm:p-8 border border-slate-800 hover:border-indigo-500/80 transition-all shadow-xl flex flex-col justify-between rounded-sm group">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-indigo-600 px-4 py-2 shrink-0 shadow-md rounded-xs">
                  <span className="font-sans font-black text-white text-lg tracking-widest">ACE</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase text-white">ACE Controls Deceleration</h3>
                  <span className="text-[10px] text-indigo-300 font-semibold tracking-widest uppercase mt-0.5 block">Farmington Hills, USA • Est. 1963</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Industrial damping technology, industrial shock absorbers, safety dampers, and gas springs engineered to softly decelerate moving machinery loads without destructive recoil.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-indigo-400 font-bold block uppercase tracking-wider mb-1">Key Strengths</span>
                  <span className="text-slate-200 font-bold text-xs">Precision Hydraulic Shock Absorbers</span>
                </div>
                <div className="bg-[#081528] p-3 border border-slate-800 rounded-xs">
                  <span className="text-[9px] text-indigo-400 font-bold block uppercase tracking-wider mb-1">Benefit</span>
                  <span className="text-slate-200 font-bold text-xs">Protects Tooling & Reduces Cycle Times</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectBrand('ACE')}
                className="text-xs text-indigo-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Filter ACE Products in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Trademark Notice */}
        <div className="mt-10 p-4 bg-[#081528] border border-slate-800 text-center rounded-xs">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-300">Disclaimer:</span> All product brand names, trademarks, logos, and emblems (including OKS, Klüber Lubrication, 3M, Festo, Cortec, and ACE) are the property of their respective manufacturers and corporate owners. Their reference on this website is strictly for identification, descriptive, and compatibility purposes. ACS Corporation operates as an independent sourcing specialist and channel partner.
          </p>
        </div>

      </div>
    </section>
  );
};
