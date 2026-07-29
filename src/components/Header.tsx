import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  HeartHandshake,
  MessageSquare,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenOrderModal: () => void;
  onOpenSearchModal: () => void;
  onOpenPrescriptionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  isDarkMode,
  setIsDarkMode,
  onOpenOrderModal,
  onOpenSearchModal,
  onOpenPrescriptionModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: NavPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-800 dark:bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              id="header-top-phone"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>
            <span className="hidden sm:inline text-emerald-500">•</span>
            <div className="flex items-center gap-1.5 text-emerald-100">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              <span>7:30 AM - 10:00 PM</span>
            </div>
            <span className="hidden md:inline text-emerald-500">•</span>
            <div className="hidden md:flex items-center gap-1.5 text-emerald-100">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>Chandhos Rd, Purani Bazar, Paliganj</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={onOpenPrescriptionModal}
              id="header-prescription-quick-btn"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-full font-medium transition-all flex items-center gap-1 shadow-sm"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Upload Prescription</span>
            </button>
            <span className="bg-emerald-700/80 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide">
              100% Genuine Medicines
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'glass-header shadow-md py-3 dark:bg-slate-900/95 dark:border-b dark:border-slate-800' 
          : 'bg-white/95 dark:bg-slate-900/95 py-4 border-b border-gray-100 dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            id="brand-logo-button"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Raj Pharma
              </span>
              <span className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                Paliganj • Bihar
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearchModal}
              id="header-search-btn"
              title="Search Medicines"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-sm"
            >
              <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden xl:inline text-xs font-medium text-slate-500">Search Medicines</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              id="header-theme-toggle"
              title="Toggle Dark Mode"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Call Now */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="header-call-btn"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-emerald-600/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 font-medium text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            {/* WhatsApp Order Button */}
            <button
              onClick={onOpenOrderModal}
              id="header-whatsapp-order-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A8F6A] hover:bg-[#08795A] text-white font-medium text-xs sm:text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Menu & Search Icon Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onOpenSearchModal}
              id="mobile-search-btn"
              className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <Search className="w-5 h-5 text-emerald-600" />
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              id="mobile-dark-btn"
              className="p-2 text-slate-700 dark:text-slate-300 rounded-lg"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-xl z-50 p-5 space-y-4 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-3 rounded-lg text-left text-sm font-medium flex items-center justify-between ${
                    active
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <ArrowRight className="w-4 h-4 text-emerald-600" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              id="mobile-drawer-whatsapp-btn"
              className="w-full py-3 px-4 rounded-xl bg-[#0A8F6A] text-white font-medium text-sm flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="mobile-drawer-call-btn"
              className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now ({BUSINESS_INFO.formattedPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
