import React, { useState } from 'react';
import { Phone, Menu, X, FileText, User, LogIn, LogOut, ShieldCheck, ChevronDown, Package } from 'lucide-react';
import { ACSLogo } from './ACSLogo';
import { UserAvatar } from './UserAvatar';
import { UserProfile } from '../types';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  onOpenGeneralEnquiry: () => void;
  currentUser: UserProfile | null;
  onOpenLogin: () => void;
  onOpenCustomerPortal: () => void;
  onOpenAdminPanel?: () => void;
  onLogout: () => void;
  isAdmin: boolean;
  leadsCount?: number;
  rfqCount?: number;
  onOpenRfqDrawer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNavigate, 
  activeSection, 
  onOpenGeneralEnquiry,
  currentUser,
  onOpenLogin,
  onOpenCustomerPortal,
  onOpenAdminPanel,
  onLogout,
  isAdmin,
  leadsCount = 0,
  rfqCount = 0,
  onOpenRfqDrawer
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home', mobileLabel: 'HOME' },
    { label: 'WHY ACS', id: 'why-us', mobileLabel: 'WHY CHOOSE ACS' },
    { label: 'BRANDS', id: 'brands', mobileLabel: 'AUTHORIZED BRANDS' },
    { label: 'PRODUCTS', id: 'products', mobileLabel: 'PRODUCTS CATALOG' },
    { label: 'ABOUT', id: 'about', mobileLabel: 'ABOUT ACS' },
    { label: 'FOUNDER', id: 'founder', mobileLabel: 'MEET OUR FOUNDER' },
    { label: 'CONTACT', id: 'contact', mobileLabel: 'CONTACT US' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#0B192C]/95 backdrop-blur-md border-b border-sky-500/25 text-white shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
      {/* Sleek single-row compact navbar */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 xl:px-6 h-16 flex items-center justify-between gap-2 lg:gap-3">
        
        {/* Left: Brand Logo */}
        <div 
          className="flex items-center cursor-pointer select-none py-1 shrink-0"
          onClick={() => handleNavClick('home')}
          id="logo-acs-container"
        >
          <ACSLogo variant="header" size="sm" />
        </div>

        {/* Center / Left-Center: Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              id={`nav-desktop-${item.id}`}
              className={`font-bold text-[10px] xl:text-[11px] uppercase tracking-[0.06em] xl:tracking-[0.1em] relative py-1.5 px-1 xl:px-1.5 transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeSection === item.id 
                  ? 'text-sky-400 font-black' 
                  : 'text-slate-200 hover:text-sky-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-sky-400 via-sky-500 to-orange-500 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Right: Quick Hotline, Google Login & High-Contrast RFQ CTA (Strictly lg: and above) */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
          
          {/* Direct Hotline - reserved for extra-wide displays so laptop widths stay spacious */}
          <a 
            href="tel:01171571463" 
            className="hidden 2xl:flex items-center gap-1.5 text-xs text-slate-200 hover:text-sky-400 transition-colors font-bold tracking-wider px-2 py-1 shrink-0"
            title="Call ACS Hotline: 01171571463"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span className="text-slate-300 font-normal text-[11px]">Hotline:</span>
            <span className="text-white font-mono text-[11px]">01171571463</span>
          </a>

          {/* Unified Customer / Admin Login Button */}
          {!currentUser ? (
            <button
              onClick={onOpenLogin}
              id="btn-customer-login"
              className="flex items-center gap-1.5 bg-[#1E3E62]/70 hover:bg-[#1E3E62] text-white hover:text-sky-300 border border-sky-400/40 px-2 xl:px-2.5 py-1.5 text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 rounded-sm cursor-pointer shrink-0 whitespace-nowrap"
              title="Sign in with Google"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.15C3.25 21.3 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.27C.46 8.2.01 10.05.01 12s.45 3.8 1.26 5.41l4.01-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.59l4.01 3.15c.95-2.84 3.6-4.99 6.72-4.99z"/>
                </svg>
              </div>
              <span><span className="hidden xl:inline">Customer </span>Login</span>
            </button>
          ) : (
            <div className="relative shrink-0">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                id="btn-user-profile-menu"
                className={`flex items-center gap-1.5 px-2 xl:px-2.5 py-1.5 text-[10px] xl:text-[11px] font-bold tracking-wider transition-all border rounded-sm cursor-pointer shrink-0 ${
                  isAdmin 
                    ? 'bg-[#132A4A] border-sky-400 text-white' 
                    : 'bg-[#1E3E62]/80 border-sky-400/40 text-slate-100'
                }`}
              >
                <UserAvatar 
                  name={currentUser.name} 
                  email={currentUser.email} 
                  picture={currentUser.picture} 
                  size="sm" 
                />
                <span className="max-w-[65px] xl:max-w-[95px] truncate text-white">{currentUser.name}</span>
                {isAdmin && (
                  <span className="bg-red-600 text-white text-[8px] font-black uppercase px-1 py-0.5 rounded-xs shrink-0">
                    Admin
                  </span>
                )}
                <ChevronDown className="w-3 h-3 text-slate-300 shrink-0" />
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-60 bg-[#0B192C] border border-sky-500/40 shadow-2xl z-50 py-1 text-xs rounded-sm animate-fadeIn">
                  <div className="px-3.5 py-2.5 border-b border-slate-700/60 bg-[#07111F]">
                    <div className="font-bold text-white truncate">{currentUser.name}</div>
                    <div className="text-[10px] text-sky-300/80 truncate">{currentUser.email}</div>
                  </div>

                  {/* If Admin: Show exclusive Admin CRM button */}
                  {isAdmin && onOpenAdminPanel && (
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        onOpenAdminPanel();
                      }}
                      className="w-full text-left px-3.5 py-2.5 text-sky-400 hover:bg-[#1E3E62] font-bold flex items-center justify-between border-b border-slate-700/60 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-orange-400" />
                        <span>Admin CRM Control</span>
                      </div>
                      <span className="bg-sky-600 text-white text-[9px] font-mono px-1.5 py-0.5 rounded-xs">
                        {leadsCount}
                      </span>
                    </button>
                  )}

                  {/* Customer Portal option (both customer and admin can access) */}
                  <button
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      onOpenCustomerPortal();
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-slate-200 hover:bg-[#1E3E62] hover:text-sky-300 font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <User className="w-4 h-4 text-sky-400" />
                    <span>My Customer Portal & RFQs</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      onLogout();
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-red-400 hover:bg-[#1E3E62] hover:text-red-300 font-semibold flex items-center gap-2 border-t border-slate-700/60 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Multi-Item RFQ Basket Trigger (Desktop) */}
          {onOpenRfqDrawer && (
            <button 
              type="button"
              onClick={onOpenRfqDrawer}
              id="btn-top-rfq-list"
              className={`font-black px-2.5 xl:px-3.5 py-1.5 text-[10px] xl:text-[11px] uppercase tracking-wider transition-all rounded-xs cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1.5 active:scale-95 ${
                rfqCount > 0
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-md'
                  : 'bg-[#1E3E62] hover:bg-[#254c78] text-sky-200 border border-sky-400/40'
              }`}
              title="View Multi-Item RFQ Quotation List"
            >
              <Package className="w-3.5 h-3.5 shrink-0" />
              <span>RFQ<span className="hidden xl:inline"> List</span></span>
              {rfqCount > 0 && (
                <span className="bg-slate-950 text-amber-400 font-mono font-black text-[10px] px-1.5 py-0.5 rounded-full">
                  {rfqCount}
                </span>
              )}
            </button>
          )}

          {/* Executive RFQ Button */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onOpenGeneralEnquiry();
            }}
            id="btn-top-make-enquiry"
            className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-black px-3 xl:px-3.5 py-1.5 text-[10px] xl:text-[11px] uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 active:scale-95 rounded-xs cursor-pointer shrink-0 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-white shrink-0" />
            <span><span className="hidden xl:inline">Request </span>Quote</span>
          </button>
        </div>

        {/* Mobile Header Controls (Strictly lg:hidden) - Engineered to never overflow */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          
          {/* RFQ Basket Quick Pill: Prominent if items > 0, subtle if 0 */}
          {onOpenRfqDrawer && (
            <button 
              type="button"
              onClick={onOpenRfqDrawer}
              id="btn-mobile-rfq-button"
              className={`text-[10px] sm:text-xs font-black px-2 sm:px-2.5 py-1.5 uppercase tracking-wider rounded-xs cursor-pointer flex items-center gap-1 shrink-0 transition-all ${
                rfqCount > 0
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'bg-[#132A4A] text-sky-300 border border-sky-400/40 hover:bg-[#1E3E62]'
              }`}
              title="Open Multi-Item RFQ Basket"
            >
              <Package className="w-3.5 h-3.5 shrink-0" />
              {rfqCount > 0 ? (
                <span className="bg-slate-950 text-amber-400 font-mono font-black text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full">
                  {rfqCount}
                </span>
              ) : (
                <span className="text-[10px]">RFQ</span>
              )}
            </button>
          )}

          {/* Quick Quote Button */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onOpenGeneralEnquiry();
            }}
            id="btn-mobile-quote-button"
            className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-[10px] sm:text-xs font-black px-2.5 py-1.5 uppercase tracking-wider rounded-xs cursor-pointer flex items-center gap-1 shrink-0 shadow-sm"
            title="Request Instant Consultation / Quote"
          >
            <FileText className="w-3.5 h-3.5 text-white shrink-0" />
            <span>Quote</span>
          </button>

          {/* User Avatar on mobile (Compact circular badge - details inside mobile drawer!) */}
          {currentUser ? (
            <button 
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              id="btn-mobile-user-avatar"
              className="relative p-0.5 rounded-full border-2 border-sky-400 bg-[#132A4A] shrink-0 cursor-pointer"
              title={`${currentUser.name} (${isAdmin ? 'Admin' : 'Customer'}) - Open Menu`}
            >
              <UserAvatar 
                name={currentUser.name} 
                email={currentUser.email} 
                picture={currentUser.picture} 
                size="sm" 
              />
              {isAdmin && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 border-2 border-[#0B192C] rounded-full" title="ACS Admin"></span>
              )}
            </button>
          ) : (
            <button 
              type="button"
              onClick={onOpenLogin}
              id="btn-mobile-quick-login"
              className="hidden sm:flex items-center gap-1 bg-[#132A4A] text-sky-300 border border-sky-400/40 text-[10px] font-black px-2 py-1.5 uppercase tracking-wider rounded-xs cursor-pointer shrink-0"
              title="Customer Login"
            >
              <LogIn className="w-3 h-3" />
              <span>Login</span>
            </button>
          )}

          {/* High-Visibility Responsive Hamburger Menu Button (Always 100% visible on the right edge) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="btn-mobile-menu"
            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border transition-all rounded-xs cursor-pointer shrink-0 ${
              isMobileMenuOpen 
                ? 'bg-orange-500/20 border-orange-500 text-orange-400' 
                : 'bg-[#132A4A] hover:bg-[#1E3E62] border-sky-400/50 text-white shadow-sm'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-orange-400 stroke-[2.5]" />
            ) : (
              <Menu className="w-5 h-5 text-white stroke-[2.5]" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation Sheet (Clean, Modern, Full-Featured) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#071426] border-t-2 border-sky-500/40 shadow-2xl divide-y divide-slate-800 animate-fadeIn max-h-[85vh] overflow-y-auto">
          
          {/* User Account / Admin Status Header inside Mobile Menu */}
          <div className="p-4 bg-gradient-to-r from-[#0B1E36] to-[#08172A]">
            {!currentUser ? (
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Customer Account
                  </span>
                  <span className="text-[10px] text-sky-400 font-mono">PAN-INDIA SUPPLY</span>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  id="btn-mobile-drawer-login"
                  className="w-full bg-[#1E3E62] hover:bg-[#254d7a] text-white border border-sky-400/50 font-bold py-2.5 px-3 text-xs uppercase flex items-center justify-center gap-2 rounded-xs shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.15C3.25 21.3 7.31 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.27C.46 8.2.01 10.05.01 12s.45 3.8 1.26 5.41l4.01-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.59l4.01 3.15c.95-2.84 3.6-4.99 6.72-4.99z"/>
                    </svg>
                  </div>
                  <span>Sign In with Google (Track RFQs & Orders)</span>
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <UserAvatar 
                      name={currentUser.name} 
                      email={currentUser.email} 
                      picture={currentUser.picture} 
                      size="md" 
                    />
                    <div className="min-w-0">
                      <div className="font-black text-white text-sm truncate">{currentUser.name}</div>
                      <div className="text-[11px] text-sky-300 truncate">{currentUser.email}</div>
                    </div>
                  </div>

                  {isAdmin && (
                    <span className="bg-red-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-xs shrink-0 tracking-wider shadow-xs">
                      ADMIN
                    </span>
                  )}
                </div>

                {/* Role specific quick action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {isAdmin && onOpenAdminPanel && (
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onOpenAdminPanel();
                      }}
                      id="btn-mobile-drawer-admin"
                      className="w-full bg-[#132A4A] hover:bg-[#1A375E] text-sky-300 border border-sky-400 font-bold py-2 px-3 text-xs uppercase flex items-center justify-between rounded-xs cursor-pointer shadow-xs"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-orange-400" />
                        <span>Admin CRM Panel</span>
                      </div>
                      <span className="bg-sky-600 text-white text-[10px] font-mono px-1.5 py-0.2 rounded-xs">
                        {leadsCount}
                      </span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenCustomerPortal();
                    }}
                    id="btn-mobile-drawer-portal"
                    className="w-full bg-[#1E3E62] hover:bg-[#254d7a] text-white border border-sky-400/40 font-bold py-2 px-3 text-xs uppercase flex items-center justify-between rounded-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-sky-400" />
                      <span>Customer Portal & RFQs</span>
                    </div>
                  </button>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onLogout();
                    }}
                    className="text-red-400 hover:text-red-300 text-xs font-bold flex items-center gap-1.5 py-1 px-2 rounded-xs hover:bg-red-500/10 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RFQ Basket Status Banner in Mobile Drawer */}
          {onOpenRfqDrawer && (
            <div className="p-3 bg-[#0A1A2E] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Package className="w-4 h-4 text-amber-400 shrink-0" />
                <span>RFQ Quotation Basket:</span>
                <span className="font-mono font-bold text-amber-400">
                  {rfqCount} {rfqCount === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenRfqDrawer();
                }}
                className={`text-xs font-black uppercase px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                  rfqCount > 0
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xs'
                    : 'bg-[#1E3E62] text-sky-200 border border-sky-400/40'
                }`}
              >
                View RFQ List →
              </button>
            </div>
          )}

          {/* Primary Navigation Links */}
          <div className="py-2 px-3 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-mobile-${item.id}`}
                  className={`w-full text-left font-bold text-xs tracking-wider py-3 px-3.5 rounded-xs transition-all uppercase flex items-center justify-between cursor-pointer ${
                    isActive 
                      ? 'bg-sky-500/20 border-l-4 border-sky-400 text-sky-300 font-black shadow-xs' 
                      : 'text-slate-200 hover:bg-[#1E3E62]/70 hover:text-white'
                  }`}
                >
                  <span>{item.mobileLabel || item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-sky-400"></span>}
                </button>
              );
            })}
          </div>

          {/* Direct Communication & CTAs inside Drawer */}
          <div className="p-4 bg-[#050E1A] space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenGeneralEnquiry();
              }}
              id="btn-mobile-drawer-quote"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black py-3 px-4 text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xs shadow-lg transition-transform active:scale-98 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Request Official Quotation</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a 
                href="tel:01171571463"
                className="flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#132A4A] hover:bg-[#1A375E] py-2.5 px-2 border border-sky-400/40 rounded-xs transition-colors"
                title="Call ACS Hotline"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="truncate">01171571463</span>
              </a>

              <a 
                href="https://wa.me/917827976806"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-emerald-700/80 hover:bg-emerald-600 py-2.5 px-2 border border-emerald-500/40 rounded-xs transition-colors"
                title="Chat on WhatsApp"
              >
                <span className="text-emerald-300 font-black text-sm">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
