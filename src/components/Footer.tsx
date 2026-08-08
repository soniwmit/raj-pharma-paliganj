import React, { useState } from 'react';
import { NavPage } from '../types';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { 
  HeartHandshake, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  X
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: NavPage) => void;
  onOpenOrderModal: () => void;
  onOpenPrescriptionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  onOpenOrderModal,
  onOpenPrescriptionModal
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNav = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">Raj Pharma</span>
                <span className="block text-xs font-semibold text-emerald-400 uppercase tracking-widest">Paliganj, Bihar</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Serving Purani Bazar and greater Paliganj with authentic medicines, healthcare items, and warm pharmacist care.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={onOpenOrderModal}
                id="footer-order-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A8F6A] hover:bg-[#08795A] text-white text-xs font-semibold transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </button>

              <button
                onClick={onOpenPrescriptionModal}
                id="footer-upload-prescription-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-medium border border-slate-700 transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Upload Prescription</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Quick Navigation</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Store' },
                { id: 'services', label: 'Pharmacy Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'testimonials', label: 'Customer Reviews' },
                { id: 'faq', label: 'FAQ & Help' },
                { id: 'contact', label: 'Contact & Map' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id as NavPage)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group text-slate-400 text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 opacity-70 group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Store Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Core Services</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">• Prescription Fulfillment</li>
              <li className="flex items-center gap-2">• Retail OTC Medicine Sales</li>
              <li className="flex items-center gap-2">• Baby Food & Hygiene Care</li>
              <li className="flex items-center gap-2">• Diabetic Care & Glucometers</li>
              <li className="flex items-center gap-2">• Digital BP Monitors</li>
              <li className="flex items-center gap-2">• Health & Protein Supplements</li>
              <li className="flex items-center gap-2">• Surgical Dressings & Disposables</li>
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Store Info</span>
            </h3>

            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-emerald-400 font-medium">
                {BUSINESS_INFO.formattedPhone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{BUSINESS_INFO.email}</span>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-slate-400 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Store Hours</span>
              </div>
              <p>{BUSINESS_INFO.workingHours.weekdays}</p>
              <p>{BUSINESS_INFO.workingHours.sunday}</p>
            </div>

            <div className="pt-1">
              <a 
                href={BUSINESS_INFO.mapDirectionsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">{BUSINESS_INFO.name}</span>. All rights reserved. <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => setActiveLegalModal('privacy')}
              id="privacy-policy-btn"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => setActiveLegalModal('terms')}
              id="terms-conditions-btn"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button 
              onClick={() => setActiveLegalModal('disclaimer')}
              id="disclaimer-btn"
              className="hover:text-emerald-400 transition-colors"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-slate-200 rounded-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto shadow-2xl">
            <button 
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacy' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Raj Pharma Paliganj respects customer privacy. Any personal information provided through our WhatsApp order form (such as your name, contact phone number, address, or prescription image) is strictly used for order processing, dosage verification, and medicine delivery coordination. We do not sell or distribute customer data to third parties.
                </p>
              </div>
            )}

            {activeLegalModal === 'terms' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Terms & Conditions</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  1. All Schedule H & X prescription medicines require a valid doctor's prescription prior to dispensing.<br/>
                  2. Product availability is subject to local pharmacy stock.<br/>
                  3. Prices displayed or quoted are based on standard Maximum Retail Price (MRP) with eligible local store discounts.<br/>
                  4. For urgent emergency needs, customers are advised to contact nearest medical emergency centers in parallel.
                </p>
              </div>
            )}

            {activeLegalModal === 'disclaimer' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Medical Disclaimer</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The information provided on this website is for general informational and retail ordering purposes only and does not constitute formal medical diagnosis or treatment advice. Always consult a qualified registered medical practitioner regarding any medical condition or prescription dosage.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
