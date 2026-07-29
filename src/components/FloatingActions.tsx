import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          title="Back to top"
          className="pointer-events-auto p-3 rounded-full bg-slate-900/90 dark:bg-slate-100 dark:text-slate-900 text-white shadow-lg hover:scale-110 transition-all duration-200 border border-slate-700/50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        id="floating-call-btn"
        title="Call Raj Pharma"
        className="pointer-events-auto w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white dark:border-slate-800"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenOrderModal}
        id="floating-whatsapp-btn"
        title="Order via WhatsApp"
        className="pointer-events-auto flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full bg-[#0A8F6A] hover:bg-[#08795A] text-white shadow-xl hover:scale-105 transition-all duration-200 border-2 border-white dark:border-slate-800 group"
      >
        <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        <span className="text-xs font-bold tracking-wide">WhatsApp Order</span>
      </button>

    </div>
  );
};
