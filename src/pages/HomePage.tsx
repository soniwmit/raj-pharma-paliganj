import React, { useState } from 'react';
import { NavPage } from '../types';
import { 
  BUSINESS_INFO, 
  WHY_CHOOSE_US_ITEMS, 
  SERVICES_LIST, 
  FEATURED_CATEGORIES, 
  WORKING_PROCESS_STEPS, 
  TESTIMONIALS_LIST, 
  FAQ_LIST,
  HERO_IMAGE_URL 
} from '../data/pharmacyData';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  UserCheck, 
  Tag, 
  Zap, 
  FileText, 
  HeartPulse, 
  Pill, 
  PillBottle, 
  FlaskConical, 
  Syringe, 
  Stethoscope, 
  Dumbbell, 
  Sun, 
  Sparkles, 
  Baby, 
  Shield, 
  Activity, 
  Heart, 
  CheckCircle2, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ArrowRight,
  Clock,
  Star,
  FileSignature,
  Cross,
  Bandage,
  Thermometer,
  Home
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: NavPage) => void;
  onOpenOrderModal: (medicineName?: string) => void;
  onOpenSearchModal: () => void;
  onOpenPrescriptionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onOpenOrderModal,
  onOpenSearchModal,
  onOpenPrescriptionModal
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<string>('All');

  // Map icon string to Lucide component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Tag': return <Tag className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'MessageCircle': return <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'PillBottle': return <PillBottle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sun': return <Sun className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Baby': return <Baby className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FileSignature': return <FileSignature className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Cross': return <Cross className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Bandage': return <Bandage className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Thermometer': return <Thermometer className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Home': return <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const filteredFaqs = FAQ_LIST.filter(faq => {
    if (faqCategory === 'All') return true;
    return faq.category === faqCategory;
  });

  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chandhos Rd, Purani Bazar, Paliganj</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Medical Shop | <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Your Trusted Pharmacy</span> in Paliganj
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onOpenOrderModal()}
                  id="hero-whatsapp-order-btn"
                  className="px-6 py-3.5 rounded-xl bg-[#0A8F6A] hover:bg-[#08795A] text-white font-bold text-sm shadow-lg shadow-emerald-700/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  id="hero-call-now-btn"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition-all flex items-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Call Now ({BUSINESS_INFO.phone})</span>
                </a>

                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-get-directions-btn"
                  className="px-5 py-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Live Search Quick Trigger Bar */}
              <div 
                onClick={onOpenSearchModal}
                className="mt-6 p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-emerald-200 dark:border-slate-700 shadow-md flex items-center justify-between gap-3 cursor-pointer hover:border-emerald-500 transition-all max-w-xl mx-auto lg:mx-0 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Search className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                      Search Stock Inventory in Paliganj
                    </span>
                    <span className="block text-[11px] text-slate-400">
                      e.g., Paracetamol, BP Monitor, Baby Powder, Diabetes Strips...
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800 shrink-0">
                  Search Now
                </span>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-center border-t border-slate-200/60 dark:border-slate-800">
                <div>
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">100%</span>
                  <span className="text-xs text-slate-500">Genuine Medicines</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">7:30 AM</span>
                  <span className="text-xs text-slate-500">To 10:00 PM Open</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">Quick</span>
                  <span className="text-xs text-slate-500">WhatsApp Service</span>
                </div>
              </div>

            </div>

            {/* Right Column: Featured Store Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Raj Pharma Paliganj Medical Store Front"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Floating Store Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-card border border-white/20 text-slate-900 dark:text-white shadow-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Raj Pharma Paliganj
                    </span>
                    <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">
                      VERIFIED STORE
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Chandhos Rd, Purani Bazar, Paliganj, Bihar 801110
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            Our Quality Guarantee
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Why Choose Raj Pharma Paliganj
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Dedicated to providing transparent, authentic medical care for every household in Paliganj.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 space-y-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIconComponent(item.iconName)}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SERVICES OVERVIEW */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
                Full-Service Pharmacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Our Core Services
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                From chronic prescription management to emergency surgical supplies and daily baby care items.
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('services')}
              id="view-all-services-btn"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
            >
              <span>Explore All 12 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      {getIconComponent(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold bg-emerald-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  id={`home-service-inquire-${service.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 dark:bg-slate-700 dark:hover:bg-emerald-600 dark:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3.5 py-1 rounded-full">
            Inventory Specialties
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Featured Medicine Categories
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Easily find tablets, syrups, injections, baby care, and surgical supplies stocked at Raj Pharma.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onOpenSearchModal()}
              id={`cat-card-${cat.id}`}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="h-32 sm:h-36 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <span className="absolute top-3 right-3 text-[10px] font-bold bg-white/90 text-slate-900 px-2 py-0.5 rounded-full shadow">
                  {cat.itemCount}
                </span>
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>{cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CUSTOMERS TRUST US */}
      <section className="bg-emerald-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-800/80 px-3.5 py-1 rounded-full border border-emerald-700">
                Community Trust
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Why Customers Trust Raj Pharma Paliganj
              </h2>
              <p className="text-sm text-emerald-100/80 leading-relaxed">
                For years, families across Purani Bazar and neighboring villages in Bihar have relied on our store for exact dosage verification, genuine medicines, and fair prices.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenPrescriptionModal}
                  id="trust-section-upload-rx-btn"
                  className="px-5 py-3 rounded-xl bg-white text-emerald-900 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow"
                >
                  Submit Prescription for Verification
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { title: "Experienced Pharmacy", desc: "Qualified staff checking exact dosage" },
                { title: "Quality Medicines", desc: "Direct company-authorized sourcing" },
                { title: "Quick Service", desc: "No long waiting queues" },
                { title: "Friendly Staff", desc: "Polite, supportive patient counseling" },
                { title: "Reasonable Pricing", desc: "Fair rates with genuine discounts" },
                { title: "Convenient Location", desc: "Chandhos Rd, Purani Bazar hub" }
              ].map((trust, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-emerald-800/60 border border-emerald-700/60 space-y-1.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <h3 className="text-xs sm:text-sm font-bold text-white">{trust.title}</h3>
                  <p className="text-[11px] text-emerald-200/70">{trust.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3.5 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Simple 4-Step Working Process
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Getting your authentic medicines in Paliganj is fast, smooth, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKING_PROCESS_STEPS.map((proc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-4 relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                  {proc.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                  {getIconComponent(proc.iconName)}
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {proc.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 rounded-full">
              Google & Local Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Verified reviews from local residents and families in Paliganj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS_LIST.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      Verified Buyer
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {rev.avatarText}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {rev.location} • {rev.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3.5 py-1 rounded-full">
            Help Center
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Top 10 common questions about Raj Pharma Paliganj store timings, WhatsApp orders, and prescriptions.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex justify-center flex-wrap gap-2 text-xs">
          {['All', 'General', 'Medicines', 'Orders & Delivery', 'Prescriptions'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFaqCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-colors ${
                faqCategory === cat
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  id={`faq-toggle-${faq.id}`}
                  className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                Store Location & Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Visit Raj Pharma in Paliganj
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are situated right in the heart of Purani Bazar on Chandhos Road. Easily accessible from all parts of Paliganj with parking space available.
              </p>

              <div className="space-y-3 text-xs sm:text-sm pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Full Address:</strong>
                    <span className="text-slate-300">{BUSINESS_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-white">Store Phone:</strong>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-300 font-bold hover:underline">
                      {BUSINESS_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Working Hours:</strong>
                    <span className="text-slate-300 block">{BUSINESS_INFO.workingHours.weekdays}</span>
                    <span className="text-slate-300 block">{BUSINESS_INFO.workingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="map-section-directions-btn"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px]">
            <iframe
              title="Raj Pharma Paliganj Google Map Location"
              src={BUSINESS_INFO.googleMapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 10. CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need Urgent Medicines in Paliganj?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Call us directly or send your order on WhatsApp. Our pharmacists are ready to pack your medicines with complete care.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenOrderModal()}
                id="cta-whatsapp-btn"
                className="px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-extrabold text-sm hover:bg-emerald-50 shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#0A8F6A]" />
                <span>WhatsApp Order Now</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="cta-call-btn"
                className="px-6 py-3.5 rounded-xl bg-emerald-950/60 text-white font-bold text-sm hover:bg-emerald-950 border border-emerald-400/40 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call ({BUSINESS_INFO.formattedPhone})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
