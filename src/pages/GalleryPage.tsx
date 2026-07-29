import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/pharmacyData';
import { GalleryItem } from '../types';
import { Maximize2, X, MessageSquare, ZoomIn, ZoomOut, Image as ImageIcon } from 'lucide-react';

interface GalleryPageProps {
  onOpenOrderModal: (title?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenOrderModal }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', 'Store Exterior', 'Medicine Shelves', 'Healthcare Products', 'Medical Equipment', 'Customer Care'];

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setZoomLevel(1);
  };

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          Visual Tour & Shelves Showcase
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Raj Pharma Store Gallery
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Take a look inside our clean, well-stocked medical shop in Purani Bazar, Paliganj.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 pt-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                activeTab === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: GalleryItem) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(item)}
            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
              <span className="absolute top-3 left-3 text-[10px] font-bold bg-emerald-600 text-white px-2.5 py-0.5 rounded-full shadow">
                {item.category}
              </span>
            </div>

            <div className="p-4 space-y-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl space-y-4 p-4 sm:p-6 text-white">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400">{selectedImage.category}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
                  title="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image display with zoom */}
            <div className="overflow-hidden rounded-2xl bg-black max-h-[60vh] flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[58vh] w-auto object-contain transition-transform duration-200"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption & WhatsApp Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base font-bold text-white">{selectedImage.title}</h3>
                <p className="text-xs text-slate-400 max-w-xl">{selectedImage.description}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedImage(null);
                  onOpenOrderModal(selectedImage.title);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0A8F6A] hover:bg-[#08795A] text-white font-bold text-xs flex items-center gap-2 shrink-0 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
