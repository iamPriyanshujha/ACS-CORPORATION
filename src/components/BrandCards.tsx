import React from 'react';
import { BRANDS } from '../data';
import { ShieldCheck, ChevronRight } from 'lucide-react';

interface BrandCardsProps {
  onSelectBrand: (brandName: string) => void;
}

export const BrandCards: React.FC<BrandCardsProps> = ({ onSelectBrand }) => {
  return (
    <section id="brand-representation-directory" className="relative z-20 bg-slate-100 py-8 px-4 md:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-5 sm:p-7 border border-slate-200 shadow-sm rounded-sm">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
                Authorized Principal Representation Directory
              </span>
              <p className="text-[11px] text-slate-500 font-medium">Direct factory-sourced channel partnership</p>
            </div>
          </div>
          <span className="text-[10px] text-blue-700 font-bold tracking-wider uppercase bg-blue-50 px-2.5 py-1 rounded-xs border border-blue-100">
            Click Any Principal to Filter Catalog (6 Major Brands)
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {BRANDS.map((brand) => {
            let badgeAccent = 'border-sky-200 text-sky-700 bg-sky-50';
            let badgeText = 'EUROPEAN';

            if (brand.name === 'KLÜBER LUBRICATION') {
              badgeAccent = 'border-blue-200 text-blue-800 bg-blue-50';
              badgeText = 'MUNICH GERMANY';
            } else if (brand.name === 'OKS') {
              badgeAccent = 'border-red-200 text-red-700 bg-red-50';
              badgeText = 'MAISACH GERMANY';
            } else if (brand.name === '3M') {
              badgeAccent = 'border-rose-200 text-rose-700 bg-rose-50';
              badgeText = 'USA ABRASIVES';
            } else if (brand.name === 'CORTEC') {
              badgeAccent = 'border-emerald-200 text-emerald-700 bg-emerald-50';
              badgeText = 'VCI CORROSION';
            } else if (brand.name === 'ACE') {
              badgeAccent = 'border-indigo-200 text-indigo-700 bg-indigo-50';
              badgeText = 'SHOCK ABSORBERS';
            } else if (brand.name === 'FESTO') {
              badgeAccent = 'border-sky-200 text-sky-700 bg-sky-50';
              badgeText = 'GERMAN AUTOMATION';
            }

            return (
              <div
                key={brand.name}
                onClick={() => onSelectBrand(brand.name)}
                id={`brand-card-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-slate-50 hover:bg-white p-4 border border-slate-200/90 hover:border-sky-500 hover:shadow-md cursor-pointer text-center group transition-all duration-200 flex flex-col justify-between items-center min-h-[140px] relative rounded-sm"
              >
                {/* Top Mini Brand Tag */}
                <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 border ${badgeAccent} mb-2 w-full text-center truncate rounded-xs`}>
                  {badgeText}
                </span>

                {/* Brand Visual Display */}
                <div className="my-auto flex items-center justify-center w-full py-1">
                  {brand.name === 'KLÜBER LUBRICATION' ? (
                    <div className="flex flex-col items-center leading-none">
                      <span className="font-sans font-black italic text-base text-[#0066CC] tracking-tighter">
                        KLÜBER
                      </span>
                      <span className="font-sans font-extrabold text-[8px] text-slate-700 tracking-[0.22em] mt-0.5">
                        LUBRICATION
                      </span>
                    </div>
                  ) : brand.name === 'OKS' ? (
                    <div className="bg-[#D81E05] px-4 py-1 text-white font-black tracking-widest text-sm rounded-xs shadow-xs">
                      OKS
                    </div>
                  ) : brand.name === 'FESTO' ? (
                    <span className="font-sans font-black text-[#0091DC] text-xl tracking-wider">
                      FESTO
                    </span>
                  ) : brand.name === '3M' ? (
                    <span className="font-sans font-black text-[#FF0000] text-3xl tracking-tighter">
                      3M
                    </span>
                  ) : brand.name === 'CORTEC' ? (
                    <div className="flex items-center gap-0.5">
                      <span className="font-sans font-black text-emerald-600 text-sm tracking-wider">
                        CORTEC
                      </span>
                      <span className="text-[6px] text-emerald-600 font-bold align-super">®</span>
                    </div>
                  ) : (
                    <span className="font-sans font-black text-blue-700 text-lg tracking-widest border-y-2 border-blue-700 px-2 py-0.5">
                      ACE
                    </span>
                  )}
                </div>

                {/* Micro Action link */}
                <div className="w-full pt-2 border-t border-slate-200/80 flex items-center justify-center gap-1 text-[10px] text-slate-500 group-hover:text-sky-600 transition-colors font-bold uppercase tracking-wider">
                  <span>Filter Products</span>
                  <ChevronRight className="w-3 h-3 text-orange-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        </div>
      </div>
    </section>
  );
};
