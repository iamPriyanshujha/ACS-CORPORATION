import React, { useState } from 'react';
import { FounderSection } from './FounderSection';
import { 
  ShieldCheck, 
  Award, 
  Factory, 
  Truck, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Clock, 
  Phone, 
  Scale, 
  ExternalLink,
  Lock,
  User,
  Quote,
  Handshake,
  TrendingUp,
  Target,
  Sparkles,
  ArrowRight,
  MapPin
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate?: (section: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'compliance' | 'network' | 'pledge'>('vision');

  return (
    <section id="about-acs-section" className="bg-[#F8FAFC] text-slate-900 py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
        
        {/* ============================================================ */}
        {/* TOP HIGHLIGHT: VETERAN TEAM WITH 30+ YEARS EXPERIENCE */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-[#0B192C] via-[#132A4A] to-[#0B192C] text-white p-4 sm:p-7 md:p-10 rounded-sm shadow-xl border-2 border-sky-400/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[9px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.25em] px-3 py-1 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>EXPERIENCED TRIBOLOGY & APPLICATION DESK</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-sans font-black tracking-tight uppercase leading-snug sm:leading-tight text-white">
                Powered by a Team with <span className="text-amber-400">30+ Years Experience</span> & the Industry's Best Technical & Application Engineers
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                At ACS Corporation, our core differentiator is our deep engineering foundation. Our senior advisory desk brings together over <strong className="text-white">30+ years of hands-on industrial lubrication and mechanical engineering experience</strong>. Supported by India’s finest technical and tribological application engineers, we specialize in high-temperature friction mitigation, critical speed-factor bearing greases, food-grade NSF H1 compliance, and long-life gear lubrication. We actively partner with maintenance directors to troubleshoot complex mechanical wear, eliminate unplanned downtime, and supply factory-sealed genuine formulations all over India.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-[10px] sm:text-[11px] text-sky-200">
                <span className="bg-white/10 px-2 sm:px-2.5 py-1 rounded-xs border border-white/15">✓ 30+ Years Proven Field Experience</span>
                <span className="bg-white/10 px-2 sm:px-2.5 py-1 rounded-xs border border-white/15">✓ Certified Tribology & Application Engineers</span>
                <span className="bg-white/10 px-2 sm:px-2.5 py-1 rounded-xs border border-white/15">✓ All Types & Pack Sizes of Oils & Greases</span>
                <span className="bg-white/10 px-2 sm:px-2.5 py-1 rounded-xs border border-white/15">✓ Pan-India Supply from Ghaziabad Central Desk</span>
              </div>
            </div>

            <div className="shrink-0 bg-white/10 backdrop-blur-xs border border-sky-400/30 p-4 sm:p-6 rounded-sm text-center min-w-0 sm:min-w-[220px] w-full lg:w-auto shadow-inner">
              <div className="text-3xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight">30+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">Years Field Experience</div>
              <div className="text-[11px] text-sky-300 font-medium mt-1">Best Technical & Application Engineers</div>
              <div className="mt-3 pt-3 border-t border-white/15 text-[10px] text-slate-300 font-mono">
                Serving Plants Across All India
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. HERO PHILOSOPHY & INTRODUCTORY CARD */}
        {/* ============================================================ */}
        <div className="bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 md:p-12 rounded-sm relative overflow-hidden">
          
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-100/50 via-blue-50/20 to-transparent pointer-events-none rounded-full blur-3xl"></div>

          <div className="max-w-4xl relative z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1 text-blue-800 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] mb-4 rounded-xs">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>ABOUT ACS CORPORATION</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-black tracking-tight text-slate-900 uppercase leading-[1.15]">
              Building Business on <span className="text-blue-600">Trust</span>. <br className="hidden sm:inline" />
              Delivering with <span className="text-orange-500">Purpose</span>.
            </h2>
            
            <div className="mt-6 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                <strong className="text-slate-900 font-semibold">ACS Corporation</strong> is a Delhi NCR–based industrial supply business focused on providing quality products, competitive pricing, reliable sourcing, and timely delivery to our customers across India.
              </p>
              
              <p>
                We believe that a successful business is built on more than just selling products. It is built on <strong className="text-blue-700 font-semibold">trust, transparency, consistency, and long-term relationships</strong>.
              </p>

              <p>
                Our approach is simple — <span className="text-slate-900 font-medium">understand what our customers need</span>, source the right products from reliable suppliers, and ensure a smooth, seamless experience from requirement to final on-site delivery.
              </p>

              <p className="text-slate-600 text-sm">
                As we grow, our mission is to establish ACS into the most dependable business partner for plants, maintenance engineers, and manufacturing organizations across Delhi NCR, Haryana, Uttar Pradesh, and nearby industrial corridors.
              </p>
            </div>

            {/* Quick Slogan Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
              <span className="text-blue-600 font-black">ACS CORPORATION</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-700">TRUST</span>
              <span className="text-orange-500">•</span>
              <span className="text-slate-700">QUALITY</span>
              <span className="text-orange-500">•</span>
              <span className="text-slate-700">GROWTH</span>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. WHAT WE STAND FOR (THE 4 FOUNDATIONAL PILLARS) */}
        {/* ============================================================ */}
        <div className="space-y-6">
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE PRINCIPLES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans font-black text-slate-900 uppercase tracking-tight">
              What We Stand For
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              The non-negotiable standards that govern every interaction, quote, and delivery at ACS Corporation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Pillar 1: Trust */}
            <div className="bg-white border-2 border-slate-200/90 hover:border-blue-500 p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xs bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Handshake className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 mb-1">
                  PILLAR 01
                </div>
                <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight mb-2">
                  Trust
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Honest communication, complete billing transparency, and dependable business relationships that stand the test of time.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-blue-600">
                Relationship First
              </div>
            </div>

            {/* Pillar 2: Quality */}
            <div className="bg-white border-2 border-slate-200/90 hover:border-blue-500 p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xs bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-700 mb-1">
                  PILLAR 02
                </div>
                <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight mb-2">
                  Quality
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Products and sourcing standards we can stand firmly behind. Focused on high-performance formulations from dependable suppliers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-600">
                Reliable Sourcing Standards
              </div>
            </div>

            {/* Pillar 3: Reliability */}
            <div className="bg-white border-2 border-slate-200/90 hover:border-blue-500 p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 mb-1">
                  PILLAR 03
                </div>
                <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight mb-2">
                  Reliability
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consistent service, proactive stock planning, and timely fulfillment from our central office at D-53, Sector 08, Sangam Park, Khora, Ghaziabad, UP, supplying all over India.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600">
                Pan-India On-Time Dispatch
              </div>
            </div>

            {/* Pillar 4: Growth */}
            <div className="bg-white border-2 border-slate-200/90 hover:border-blue-500 p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xs bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-700 mb-1">
                  PILLAR 04
                </div>
                <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight mb-2">
                  Growth
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Building long-term mutual value for our customer factories, principal manufacturers, and industrial partners as one team.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-orange-600">
                Sustainable Value
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. MEET THE FOUNDER SECTION (EXECUTIVE PROFILE) */}
        {/* ============================================================ */}
        <FounderSection onNavigate={onNavigate} />

        {/* ============================================================ */}
        {/* 4. OUR STRATEGIC VISION */}
        {/* ============================================================ */}
        <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-sm shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
              <Target className="w-3.5 h-3.5" />
              <span>LONG-TERM ROADMAP</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-black text-slate-900 uppercase tracking-tight mb-3">
              Our Vision
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              To build <strong className="text-slate-900">ACS Corporation</strong> into a trusted, professional, and technology-driven industrial business known across India for <span className="text-blue-700 font-bold">uncompromising reliability, genuine product quality, and long-term customer relationships</span>.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. INTERACTIVE TECHNICAL & OPERATIONAL DETAILS TABS */}
        {/* ============================================================ */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h4 className="text-lg font-sans font-black text-slate-900 uppercase tracking-tight">
                Operational Infrastructure & Standards
              </h4>
              <p className="text-xs text-slate-500">
                Explore our warehousing, certifications, regional distribution network, and supply pledges.
              </p>
            </div>

            {/* Tab selector */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-xs cursor-pointer ${
                  activeTab === 'vision' 
                    ? 'bg-blue-600 text-white font-extrabold shadow-xs' 
                    : 'text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200'
                }`}
              >
                <Factory className="w-3.5 h-3.5" />
                <span>Mission & Approach</span>
              </button>

              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-xs cursor-pointer ${
                  activeTab === 'compliance' 
                    ? 'bg-blue-600 text-white font-extrabold shadow-xs' 
                    : 'text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compliance & Certifications</span>
              </button>

              <button
                onClick={() => setActiveTab('network')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-xs cursor-pointer ${
                  activeTab === 'network' 
                    ? 'bg-blue-600 text-white font-extrabold shadow-xs' 
                    : 'text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Dispatch Corridors</span>
              </button>

              <button
                onClick={() => setActiveTab('pledge')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-xs cursor-pointer ${
                  activeTab === 'pledge' 
                    ? 'bg-blue-600 text-white font-extrabold shadow-xs' 
                    : 'text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Quality Commitment</span>
              </button>
            </div>
          </div>

          {/* Tab Content Panels */}
          <div className="pt-2">
            
            {activeTab === 'vision' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs">
                  <h5 className="text-sm font-bold text-blue-700 uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Customer-Centric Sourcing</span>
                  </h5>
                  <p>
                    Rather than pushing single-brand quotas, we evaluate operational duty cycles (extreme temperatures, bearing speeds, chemical exposures, washdown environments) and source the exact formulation that lowers machine failure rates.
                  </p>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs">
                  <h5 className="text-sm font-bold text-blue-700 uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Technology-Driven Fulfillment</span>
                  </h5>
                  <p>
                    Leveraging digital inventory systems, direct WhatsApp procurement lines, and central dispatch logistics from D-53, Sector 08, Sangam Park, Khora, Ghaziabad, UP to ensure fast quotation turnaround (&lt; 2 hours) and prompt delivery across all India.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h5 className="font-bold text-blue-700 uppercase text-xs mb-1">ISO 9001 & 14001 Standards</h5>
                  <p className="text-slate-600">Strict batch verification and certified quality management ensuring factory chemical purity.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h5 className="font-bold text-blue-700 uppercase text-xs mb-1">NSF H1, Halal & Kosher</h5>
                  <p className="text-slate-600">Authorized food-contact lubricants engineered for pharmaceutical, dairy, and food production plants.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h5 className="font-bold text-blue-700 uppercase text-xs mb-1">REACH & RoHS Compliant</h5>
                  <p className="text-slate-600">Zero hazardous heavy metals, ozone-safe aerosols, and full MSDS sheets provided with every dispatch.</p>
                </div>
              </div>
            )}

            {activeTab === 'network' && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 text-xs">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-[9px] text-blue-700 font-bold uppercase block mb-1">Central Office & Hub</span>
                  <h5 className="text-slate-900 font-bold text-xs">D-53, Sec 08, Sangam Park, Khora, Ghaziabad</h5>
                  <p className="text-slate-600 mt-1 text-[11px]">Central regional facility with ready SKUs for rapid pan-India order dispatch.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-[9px] text-blue-700 font-bold uppercase block mb-1">Pan-India Supply</span>
                  <h5 className="text-slate-900 font-bold text-xs">All Over India Network</h5>
                  <p className="text-slate-600 mt-1 text-[11px]">Reliable express logistics across all industrial zones and production belts nationwide.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-[9px] text-blue-700 font-bold uppercase block mb-1">Automotive Cluster</span>
                  <h5 className="text-slate-900 font-bold text-xs">Gurugram, Manesar & NCR</h5>
                  <p className="text-slate-600 mt-1 text-[11px]">Direct logistics route supporting high-speed automotive lines and precision component makers.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-[9px] text-blue-700 font-bold uppercase block mb-1">Heavy Engineering</span>
                  <h5 className="text-slate-900 font-bold text-xs">Delhi NCR & Industrial Hubs</h5>
                  <p className="text-slate-600 mt-1 text-[11px]">Reliable bulk drum and pail deliveries for heavy machinery, steel fabrication, and electronics.</p>
                </div>
              </div>
            )}

            {activeTab === 'pledge' && (
              <div className="p-5 bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 rounded-xs">
                <div className="flex items-center gap-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Quality Commitment & Sourcing Policy</span>
                </div>
                <p>
                  "ACS Corporation is committed to supplying genuine industrial products, competitive pricing, reliable sourcing, and timely delivery. We work with verified supply channels and provide manufacturer batch technical documentation and Certificates of Analysis (COA) upon requirement."
                </p>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 italic">
                  * Notice: All brand names, trademarks, and logos referenced on this platform are the property of their respective manufacturers and are used strictly for identification and compatibility purposes.
                </div>
              </div>
            )}

          </div>

        </div>

        {/* ============================================================ */}
        {/* 6. CALL TO ACTION & DIRECT CONTACT */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-[#0B192C] via-[#0E2545] to-[#0B192C] text-white p-8 md:p-10 border border-sky-500/30 rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-sans font-black uppercase tracking-tight">
              Ready to Partner with ACS Corporation?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect directly with our technical team at D-53, Sec 08, Sangam Park, Khora, Ghaziabad, UP for genuine product inquiries, volume pricing, and technical advice. Supplying all over India.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/917827976806"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xs transition-transform active:scale-95 shadow-md flex items-center gap-2"
            >
              <span>WhatsApp Desk</span>
            </a>

            {onNavigate && (
              <button
                onClick={() => onNavigate('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xs transition-transform active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
