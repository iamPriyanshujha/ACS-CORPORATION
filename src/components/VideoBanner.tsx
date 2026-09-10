import React, { useRef } from 'react';
import { Shield, Activity, ArrowRight } from 'lucide-react';
import bannerImg from '../assets/images/Banner.jpg';

const DEFAULT_POSTER_IMAGE = bannerImg;

interface VideoBannerProps {
  customVideoUrl?: string;
  customPosterUrl?: string;
  onExploreProducts?: () => void;
  onOpenEnquiry?: () => void;
  onNavigateToAbout?: () => void;
}

export const VideoBanner: React.FC<VideoBannerProps> = ({
  customVideoUrl,
  customPosterUrl = DEFAULT_POSTER_IMAGE,
  onExploreProducts,
  onOpenEnquiry,
  onNavigateToAbout
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleBannerClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Don't intercept when user explicitly clicks an interactive button or link
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    if (onNavigateToAbout) {
      onNavigateToAbout();
    }
  };

  const tickerItems = [
    "AUTHORISED STRATEGIC CHANNEL PARTNER",
    "HIGH-PERFORMANCE GERMAN FORMULATIONS WITH COA",
    "OKS SPECIALTY LUBRICANTS",
    "KLÜBER LUBRICATION MÜNCHEN",
    "NSF H1 FOOD-GRADE GREASES & PASTES",
    "SYNTHETIC HIGH-TEMP GEAR & CHAIN OILS",
    "EXPRESS REGIONAL WAREHOUSE DISPATCH",
    "24/7 TECHNICAL TRIBOLOGY DESK"
  ];

  return (
    <section 
      id="video-hero-banner" 
      aria-label="Industrial Video Overview"
      onClick={handleBannerClick}
      className="relative w-full bg-[#071322] overflow-hidden border-b border-sky-500/20 shadow-2xl cursor-pointer"
      title="Click anywhere on the banner to learn more about ACS Corporation"
    >
      {/* Widescreen container with natural min-height so content never clips or overlaps on mobile */}
      <div className="relative min-h-[480px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[520px] w-full flex items-center justify-center overflow-hidden py-8 sm:py-10 md:py-14">
        
        {/* Background Image / Video Player */}
        {customVideoUrl ? (
          <video
            ref={videoRef}
            src={customVideoUrl}
            poster={customPosterUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-85 contrast-110 scale-102 transition-transform duration-1000 pointer-events-none"
          />
        ) : (
          <img
            src={customPosterUrl}
            alt="ACS Corporation Banner"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-85 contrast-110 scale-102 pointer-events-none"
          />
        )}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#0B1E36]/80 to-[#071322]/90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(7,19,34,0.85)_100%)] pointer-events-none"></div>

        {/* Technical Blueprint Grid Watermark */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 select-none">
          
          {/* Left Hero Message */}
          <div className="space-y-3.5 sm:space-y-4 text-center md:text-left max-w-2xl">
            
            {/* Live Indicator Badge */}
            <div 
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToAbout?.();
              }}
              className="inline-flex items-center gap-2 bg-[#132A4A] hover:bg-[#1A375E] border border-sky-400/50 px-3 py-1 sm:px-3.5 sm:py-1 text-sky-300 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-md rounded-xs cursor-pointer transition-colors"
              title="Learn more about ACS Corporation"
            >
              <Activity className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>POWERING INDUSTRIAL EXCELLENCE</span>
            </div>

            {/* Headline / Title Name with Redirect to About */}
            <div>
              <h1 
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToAbout?.();
                }}
                id="hero-banner-title"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white uppercase tracking-tight leading-tight sm:leading-[1.08] drop-shadow-sm cursor-pointer hover:text-sky-300 transition-colors group/title inline-block"
                title="Click to learn more about ACS Corporation"
              >
                ACS <span className="text-sky-400 group-hover/title:text-sky-300 transition-colors">CORPORATION</span>
              </h1>
            </div>

            <div 
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToAbout?.();
              }}
              className="inline-block bg-orange-500/20 hover:bg-orange-500/30 border-l-4 border-orange-500 px-3 py-1 sm:px-3.5 text-xs sm:text-sm md:text-base font-bold text-orange-300 tracking-wider sm:tracking-widest uppercase rounded-r-xs cursor-pointer transition-colors"
              title="Learn more about our core values"
            >
              TRUST • QUALITY • GROWTH
            </div>

            {/* Team 30+ Years Experience Highlight Badge */}
            <div 
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToAbout?.();
              }}
              className="flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-amber-500/20 via-sky-500/15 to-transparent border border-amber-400/40 hover:border-amber-400/70 p-2.5 sm:px-3.5 sm:py-2 rounded-xs cursor-pointer transition-colors text-left"
              title="Click to read about our 30+ years engineering team"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xs bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center font-mono shrink-0 shadow-sm">
                30+
              </div>
              <div className="text-left text-[11px] sm:text-xs text-slate-100 leading-snug">
                <strong className="font-bold text-amber-300">Team with 30+ Years Industry Experience</strong> — Supported by the best technical & application engineers for plant lubrication and wear prevention.
              </div>
            </div>

            <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed drop-shadow-md">
              ACS Corporation is a Delhi NCR–based industrial supplier providing genuine products at competitive wholesale prices, with reliable sourcing, all-over India delivery, and expert technical support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              {onExploreProducts && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onExploreProducts();
                  }}
                  className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-black px-6 py-3 text-xs uppercase tracking-widest transition-all shadow-[0_4px_18px_rgba(2,132,199,0.5)] flex items-center gap-2 border border-sky-300/40 active:scale-95 rounded-xs cursor-pointer"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-300" />
                </button>
              )}
              {onOpenEnquiry && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquiry();
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 text-xs uppercase tracking-widest transition-all shadow-[0_4px_18px_rgba(249,115,22,0.4)] active:scale-95 rounded-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>Request Consultation</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Trust Shield */}
          <div className="flex flex-col items-center md:items-end gap-3.5 shrink-0">
            {/* Quality Plaque */}
            <div 
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToAbout?.();
              }}
              className="hidden lg:flex items-center gap-3 bg-[#0E2545]/90 hover:bg-[#0E2545] border border-sky-400/40 hover:border-sky-400 p-3.5 shadow-xl rounded-xs cursor-pointer transition-all hover:scale-102"
              title="Click to learn more about ACS Corporation"
            >
              <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-400 shadow-inner">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-sky-300 font-bold uppercase tracking-widest">Quality Assurance</p>
                <p className="text-xs font-black text-white uppercase">Direct Sourced Industrial Supplies</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Continuous Ticker Strip */}
      <div className="bg-[#050D18] border-t border-sky-500/25 py-2.5 px-4 overflow-hidden relative shadow-inner">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black tracking-widest uppercase text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};