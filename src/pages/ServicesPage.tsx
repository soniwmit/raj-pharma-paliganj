import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/pharmacyData';
import { ServiceItem } from '../types';
import { 
  Pill, 
  FileSignature, 
  Cross, 
  Baby, 
  Sparkles, 
  Activity, 
  Heart, 
  Bandage, 
  Syringe, 
  Shield, 
  Thermometer, 
  Home,
  CheckCircle2,
  MessageSquare,
  Search
} from 'lucide-react';

interface ServicesPageProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenOrderModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSignature': return <FileSignature className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Cross': return <Cross className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Baby': return <Baby className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Bandage': return <Bandage className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Thermometer': return <Thermometer className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Home': return <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter(srv => 
    srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    srv.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    srv.fullDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          Complete Pharmacy Portfolio
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pharmacy & Healthcare Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Dedicated, specialized healthcare services available at Raj Pharma Paliganj. Sourced from authorized suppliers and dispensed with professional pharmacist care.
        </p>

        {/* Search Bar */}
        <div className="pt-2 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search service (e.g. Diabetic, Baby Care, Surgical)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
          />
        </div>
      </div>

      {/* Grid of Dedicated Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                {service.badge && (
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Service Key Features:
                </span>
                <ul className="grid grid-cols-1 gap-1">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Products */}
              {service.popularProducts && service.popularProducts.length > 0 && (
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Popular Items Stocked:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {service.popularProducts.map((prod, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onOpenOrderModal(service.title)}
              id={`service-card-order-${service.id}`}
              className="w-full py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#08795A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire / Order via WhatsApp</span>
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
