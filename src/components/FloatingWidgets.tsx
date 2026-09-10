import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Package } from 'lucide-react';

interface FloatingWidgetsProps {
  onOpenGeneralEnquiry: () => void;
  rfqCount?: number;
  onOpenRfqDrawer?: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ 
  onOpenGeneralEnquiry,
  rfqCount = 0,
  onOpenRfqDrawer
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 400;
          setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Support and Quick Contact" 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:right-10 z-40 flex flex-col gap-2 md:gap-3 items-end select-none pointer-events-none"
    >
      {/* Floating RFQ Basket Pill (Prominent on desktop; on mobile RFQ is already anchored in sticky header) */}
      {rfqCount > 0 && onOpenRfqDrawer && (
        <button
          type="button"
          onClick={onOpenRfqDrawer}
          id="btn-floating-rfq-basket"
          className="pointer-events-auto hidden md:flex bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs px-3.5 py-2.5 rounded-full shadow-[0_8px_25px_rgba(249,115,22,0.5)] items-center gap-2 border-2 border-white transition-all transform hover:scale-105 active:scale-95 animate-bounce"
          title="Open RFQ List & Submit Multi-Item Quotation"
        >
          <Package className="w-4 h-4 text-white shrink-0" />
          <span className="uppercase tracking-wider">RFQ Basket</span>
          <span className="bg-slate-950 text-amber-400 font-mono font-black text-[11px] px-2 py-0.5 rounded-full">
            {rfqCount}
          </span>
        </button>
      )}

      {/* WhatsApp Floating Consultation Link */}
      <div className="relative pointer-events-auto">
        <a
          href="https://wa.me/917827976806"
          target="_blank"
          rel="noopener noreferrer"
          id="btn-whatsapp-floating"
          className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all group relative border-2 border-white"
          title="Chat with Tribology Desk on WhatsApp (+91 7827976806)"
        >
          {/* Pulsing ring only on desktop so it never obscures mobile card text */}
          <span className="hidden md:block absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping group-hover:opacity-0 transition-opacity"></span>
          
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.977 14.12 1.053 11.5 1.053c-5.438 0-9.864 4.372-9.868 9.8c-.001 1.77.487 3.5 1.412 4.994L2.029 20.31l4.618-1.156zm12.186-5.04c-.33-.165-1.951-.963-2.251-1.072-.3-.109-.518-.165-.736.165-.218.329-.846 1.072-1.037 1.29-.19.219-.382.247-.712.082-1.474-.738-2.512-1.282-3.528-3.023-.267-.46-.017-.708.248-.971.238-.238.33-.383.495-.548.165-.165.22-.275.33-.495.11-.22.055-.412-.028-.577-.082-.165-.736-1.771-.91-2.186-.17-.412-.34-.356-.495-.356-.165 0-.356-.006-.548-.006-.192 0-.507.072-.77.356-.264.285-1.007.985-1.007 2.4 0 1.416 1.03 2.784 1.172 2.976.14.193 2.025 3.092 4.908 4.337.685.297 1.22.474 1.637.606.69.219 1.317.188 1.812.114.553-.082 1.68-.687 1.914-1.35.235-.662.235-1.23.165-1.35-.07-.119-.26-.193-.59-.358z"/>
          </svg>
        </a>
      </div>

      {/* Hotline Support Button (Shown on desktop; on mobile hotline is 1-tap in the header & mobile menu) */}
      <div className="group relative pointer-events-auto hidden md:block">
        <div className="hidden md:flex absolute right-16 top-2 bg-[#0A1E36] text-white text-[11px] font-bold px-3.5 py-2 rounded-none shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap items-center gap-2 border border-[#0284C7]/50">
          <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Call Hotline: 01171571463 / 07827976806</span>
        </div>
        <button
          onClick={onOpenGeneralEnquiry}
          id="btn-phone-floating"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#FB923C] hover:to-[#F97316] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-95 transition-all border-2 border-white"
          title="Request Consultation"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          id="btn-scroll-top"
          className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#0A1E36] hover:bg-[#102747] text-[#38BDF8] flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all border border-[#0284C7]/40"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5 text-[#38BDF8]" />
        </button>
      )}

    </aside>
  );
};
