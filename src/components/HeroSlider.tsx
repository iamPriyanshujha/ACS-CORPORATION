import React, { useState, useEffect } from 'react';
import { CAROUSEL_SLIDES } from '../data';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { oksLineupImage, kluberProductFamilyImage } from '../utils/productImages';

interface HeroSliderProps {
  onExploreProducts: () => void;
  onOpenEnquiry: () => void;
  onNavigateToAbout?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onExploreProducts, onOpenEnquiry, onNavigateToAbout }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  return (
    <section className="relative min-h-[520px] md:min-h-[580px] w-full overflow-hidden text-white bg-[#0B192C] border-b border-sky-500/25 flex items-center">
      
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>
      
      {/* Ambient Blue & Orange Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Slide Container */}
      <div className="relative w-full h-full py-12 md:py-16">
        {CAROUSEL_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.title}
              className={`w-full transition-all duration-500 ease-in-out ${
                isActive ? 'opacity-100 block' : 'opacity-0 hidden pointer-events-none'
              }`}
            >
              
              {/* Slider Content */}
              <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Hero Copy */}
                  <div className="lg:col-span-8 space-y-5">
                    {/* Badge Pill */}
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 px-3.5 py-1.5 rounded-full text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      <span>{slide.subtitle}</span>
                    </div>
                    
                    <h2 
                      onClick={() => onNavigateToAbout?.()}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-[1.05] tracking-tight uppercase text-white cursor-pointer hover:text-sky-300 transition-colors"
                      title="Click to view About ACS Corporation"
                    >
                      {slide.title.includes('ACS') ? (
                        <>
                          ACS <span className="text-blue-400">CORPORATION</span>
                        </>
                      ) : slide.title.includes('OKS') ? (
                        <>
                          OKS <span className="text-red-400">SPECIALTY LUBRICANTS</span>
                        </>
                      ) : (
                        <>
                          KLÜBER <span className="text-blue-400">LUBRICATION</span>
                        </>
                      )}
                    </h2>
                    
                    <p className="text-base sm:text-lg md:text-xl font-bold text-orange-400 tracking-wide font-sans">
                      {slide.highlightText}
                    </p>
                    
                    <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl leading-relaxed font-normal">
                      {slide.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        onClick={onExploreProducts}
                        id={`btn-explore-${index}`}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xs transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(37,99,235,0.4)] active:scale-98 border border-blue-400/50 cursor-pointer"
                      >
                        <span>EXPLORE PRODUCT CATALOG</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={onOpenEnquiry}
                        id={`btn-quote-${index}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xs transition-all text-xs uppercase tracking-widest shadow-[0_4px_18px_rgba(249,115,22,0.35)] cursor-pointer"
                      >
                        REQUEST CONSULTATION
                      </button>
                    </div>

                    {/* Micro Credibility Highlights */}
                    <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-700/60 text-[11px] text-slate-200 font-semibold tracking-wider">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                        <span>Verified Sourcing (COA Available)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                        <span>High-Temperature & NSF H1 Food Grade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Direct NCR & Regional Warehouse Dispatch</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Authority Crest / Brand Showcase */}
                  <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 justify-center">
                    {slide.title.includes('OKS') ? (
                      <div className="bg-[#132A4A]/90 backdrop-blur-md p-4 border border-red-500/50 shadow-2xl relative overflow-hidden rounded-xs">
                        <div className="h-48 w-full overflow-hidden rounded-xs border border-red-500/30 mb-3 bg-[#071324] relative group">
                          <img
                            src={oksLineupImage}
                            alt="Genuine OKS Specialty Lubricants Product Family"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2 bg-[#D81E05] px-2.5 py-1 text-white font-black text-[10px] tracking-widest rounded-xs shadow-md">
                            OKS FACTORY SEALED
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 bg-[#0B192C]/90 text-[9px] font-bold text-slate-200 px-2 py-1 rounded-xs border border-slate-700 flex justify-between">
                            <span className="text-red-400">Sprays • Pastes • Pails</span>
                            <span className="text-slate-400">COA Certified</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          Supplying authentic OKS specialty greases, assembly pastes, and technical aerosols directly to industrial manufacturing plants.
                        </p>
                      </div>
                    ) : slide.title.includes('KLÜBER') ? (
                      <div className="bg-[#132A4A]/90 backdrop-blur-md p-4 border border-sky-500/50 shadow-2xl relative overflow-hidden rounded-xs">
                        <div className="h-48 w-full overflow-hidden rounded-xs border border-sky-500/30 mb-3 bg-[#071324] relative group">
                          <img
                            src={kluberProductFamilyImage}
                            alt="Genuine Klüber Lubrication Product Family"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2 bg-[#0284C7] px-2.5 py-1 text-white font-black text-[10px] tracking-widest rounded-xs shadow-md">
                            KLÜBER SEALED
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 bg-[#0B192C]/90 text-[9px] font-bold text-slate-200 px-2 py-1 rounded-xs border border-slate-700 flex justify-between">
                            <span className="text-[#38BDF8]">Drums • Pails • Cartridges</span>
                            <span className="text-slate-400">Batch Tested</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          Advanced synthetic tribology: polyglycol gear oils, high-speed Isoflex greases, and high-temperature chain lubricants.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#132A4A]/90 backdrop-blur-md p-6 border border-sky-400/40 shadow-2xl relative overflow-hidden rounded-xs">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-400">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-[10px] text-sky-300 font-bold uppercase tracking-widest">Enterprise Trust</p>
                            <p className="text-sm font-black text-white uppercase">Direct Sourced Supplies</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          Supplying verified German MRO formulations directly to automotive, steel, packaging, and engineering manufacturing plants.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#0E223D] p-4 border border-sky-500/30 hover:border-sky-400 transition-colors rounded-xs">
                        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">MRO Support</p>
                        <p className="text-2xl font-black text-sky-400 mt-0.5">24 / 7</p>
                        <span className="text-[9px] text-slate-400">Direct Engineer Desk</span>
                      </div>
                      <div className="bg-[#0E223D] p-4 border border-orange-500/30 hover:border-orange-400 transition-colors rounded-xs">
                        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Quality Level</p>
                        <p className="text-2xl font-black text-orange-400 mt-0.5">OEM</p>
                        <span className="text-[9px] text-slate-400">Grade Formulations</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 flex items-center gap-2">
        <button
          onClick={handlePrev}
          id="btn-slider-prev"
          aria-label="Previous Slide"
          className="p-2.5 bg-[#132A4A] hover:bg-sky-600 text-white border border-sky-400/40 hover:border-sky-300 transition-all rounded-xs cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-1.5 px-2">
          {CAROUSEL_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              id={`btn-slide-dot-${i}`}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 transition-all rounded-xs cursor-pointer ${
                currentSlide === i ? 'w-8 bg-orange-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          id="btn-slider-next"
          aria-label="Next Slide"
          className="p-2.5 bg-[#132A4A] hover:bg-sky-600 text-white border border-sky-400/40 hover:border-sky-300 transition-all rounded-xs cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};
