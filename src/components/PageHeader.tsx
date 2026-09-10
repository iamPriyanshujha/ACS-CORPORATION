import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  highlightWord?: string;
  subtitle: string;
  category: string;
  badge?: string;
  onNavigateHome: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  highlightWord,
  subtitle,
  category,
  badge,
  onNavigateHome
}) => {
  return (
    <div className="bg-[#08182E] border-b border-sky-500/25 text-white py-10 md:py-14 px-4 md:px-8 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-sky-400 transition-colors font-medium cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-sky-300 font-semibold uppercase tracking-wider text-[11px]">{category}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 mb-3 rounded-xs">
                {badge}
              </span>
            )}
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight uppercase text-white leading-tight">
              {title}{' '}
              {highlightWord && (
                <span className="text-sky-400">{highlightWord}</span>
              )}
            </h1>
            
            <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
