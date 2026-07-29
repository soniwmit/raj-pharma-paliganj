import React from 'react';
import { NavPage } from '../types';
import { BUSINESS_INFO, HERO_IMAGE_URL } from '../data/pharmacyData';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  HeartHandshake, 
  Clock, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  Calendar
} from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: NavPage) => void;
  onOpenOrderModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  setCurrentPage,
  onOpenOrderModal
}) => {
  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          Our Heritage & Promise
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About Raj Pharma Paliganj
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Your Trusted Medical Store for Genuine Medicines & Healthcare Needs on Chandhos Road, Purani Bazar, Paliganj, Bihar.
        </p>
      </div>

      {/* Business Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Our Local Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Serving Paliganj Families with Authenticity & Pure Care
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Raj Pharma was established in Purani Bazar, Paliganj, with a clear single-minded goal: to eliminate fake or low-quality medicines in local markets and provide every household with 100% genuine pharmaceutical care.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Over the years, we have built an enduring reputation for maintaining proper temperature storage for sensitive vaccines and insulin, offering honest pharmacist guidance, and keeping chronic prescription supplies readily available.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenOrderModal}
              className="px-5 py-3 rounded-xl bg-[#0A8F6A] text-white font-bold text-xs sm:text-sm hover:bg-[#08795A] transition-colors shadow"
            >
              Order via WhatsApp
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Visit Our Store
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative">
            <img
              src={HERO_IMAGE_URL}
              alt="Raj Pharma Paliganj Interior"
              className="w-full h-[360px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card text-slate-900 dark:text-white">
              <span className="text-xs font-bold block">Raj Pharma Paliganj Store Interior</span>
              <span className="text-[11px] text-slate-600 dark:text-slate-300">Chandhos Rd, Purani Bazar, Paliganj, Bihar 801110</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            To deliver 100% genuine, unadulterated medicines and healthcare essentials at fair prices, making quality healthcare accessible for everyone in Paliganj.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            To remain the most trusted local healthcare destination, known for modern retail service, fast digital WhatsApp ordering, and unconditional community care.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Core Values</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Integrity in sourcing, accuracy in dosage, compassionate patient counseling, and absolute transparency in every customer interaction.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-slate-50 dark:bg-slate-900/60 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Store Milestones & Journey
          </h2>
          <p className="text-xs text-slate-500">
            How Raj Pharma grew alongside the Paliganj community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { year: "Phase 1", title: "Store Foundation", desc: "Opened main retail store at Purani Bazar Chandhos Road." },
            { year: "Phase 2", title: "Cold Chain Setup", desc: "Installed dedicated refrigeration for insulins & vaccines." },
            { year: "Phase 3", title: "Expanded Categories", desc: "Added baby care, diabetic glucometers, & surgical goods." },
            { year: "Phase 4", title: "Digital WhatsApp Orders", desc: "Launched fast WhatsApp prescription fulfillment & search." }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 relative">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
                {item.year}
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white pt-2">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Owner / Pharmacist Message */}
      <div className="p-8 rounded-3xl bg-emerald-900 text-white space-y-4 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider bg-emerald-800/80 px-3 py-1 rounded-full">
            Pharmacist Note
          </span>
          <h2 className="text-2xl font-bold">
            Message from Raj Pharma Management
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed italic">
            "Your health and safety are our highest priority. At Raj Pharma Paliganj, we verify every tablet strip, check expiration dates rigorously, and ensure that doctor prescriptions are filled with exact scientific precision. When you walk into our store on Chandhos Road or message us on WhatsApp, you receive honest care, genuine guidance, and 100% authentic medicines."
          </p>
          <div className="pt-2 text-xs">
            <strong className="block text-white font-bold text-sm">Managing Pharmacist</strong>
            <span className="text-emerald-300">Raj Pharma Medical Store • Paliganj</span>
          </div>
        </div>
      </div>

    </div>
  );
};
