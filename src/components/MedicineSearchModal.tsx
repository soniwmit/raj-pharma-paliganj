import React, { useState } from 'react';
import { MEDICINE_INVENTORY, BUSINESS_INFO } from '../data/pharmacyData';
import { MedicineItem } from '../types';
import { Search, X, Pill, CheckCircle2, AlertCircle, MessageSquare, Tag, Filter } from 'lucide-react';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineForOrder: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicineForOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Analgesic / Antipyretic', 'Antibiotics', 'Gastrointestinal', 'Diabetic Care', 'Medical Devices', 'Respiratory', 'Supplements', 'Nutrition', 'Baby Care'];

  const filteredMedicines = MEDICINE_INVENTORY.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.uses.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-5 sm:p-6 relative shadow-2xl my-6 max-h-[85vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Medicine & Product Catalog Search
              </h2>
              <p className="text-xs text-slate-500">
                Raj Pharma Paliganj Live Inventory Quick Search
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            id="medicine-search-close-btn"
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="py-4 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              autoFocus
              placeholder="Search medicine name, usage (e.g., fever, acidity, BP monitor)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredMedicines.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                No exact match found for "{searchTerm}"
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We keep 1000+ brands in our Paliganj store shelf! Send us a custom query on WhatsApp and our pharmacist will check instant stock for you.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onSelectMedicineForOrder(searchTerm);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A8F6A] text-white text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask Pharmacist on WhatsApp</span>
              </button>
            </div>
          ) : (
            filteredMedicines.map((med: MedicineItem) => (
              <div
                key={med.id}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-emerald-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {med.name}
                    </span>
                    {med.discountBadge && (
                      <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        {med.discountBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {med.uses}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span>Category: <strong className="text-slate-600 dark:text-slate-300">{med.category}</strong></span>
                    {med.mrpRange && (
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <Tag className="w-3 h-3" />
                        {med.mrpRange}
                      </span>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 pt-2 sm:pt-0">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectMedicineForOrder(med.name);
                    }}
                    id={`order-med-btn-${med.id}`}
                    className="px-3 py-1.5 rounded-lg bg-[#0A8F6A] hover:bg-[#08795A] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer note */}
        <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-center text-[11px] text-slate-400">
          Showing verified pharmaceutical stock items • Phone Support: {BUSINESS_INFO.formattedPhone}
        </div>

      </div>
    </div>
  );
};
