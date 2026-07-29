import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { useTracker } from './hooks/useTracker';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';
import { PrescriptionUploadModal } from './components/PrescriptionUploadModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  
  // Initialize global visitor tracking
  useTracker(currentPage);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('raj_pharma_theme') === 'dark';
  });

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  // Handle dark mode DOM toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('raj_pharma_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('raj_pharma_theme', 'light');
    }
  }, [isDarkMode]);

  const handleOpenOrderModal = (medicineName: string = '') => {
    setPrefilledMedicine(medicineName);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* SEO & Schema Injector */}
      <SEO currentPage={currentPage} />

      {/* Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenOrderModal={() => handleOpenOrderModal('')}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
      />

      {/* Main Page View Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
            onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={() => handleOpenOrderModal('')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentPage === 'testimonials' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
            onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
          />
        )}

        {currentPage === 'faq' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
            onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenOrderModal={() => handleOpenOrderModal('')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenOrderModal={() => handleOpenOrderModal('')}
        onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
      />

      {/* Floating Call, WhatsApp & Back To Top */}
      <FloatingActions
        onOpenOrderModal={() => handleOpenOrderModal('')}
      />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Medicine Live Search Catalog Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectMedicineForOrder={(medName) => handleOpenOrderModal(medName)}
      />

      {/* Prescription Upload Quick Modal */}
      <PrescriptionUploadModal
        isOpen={isPrescriptionModalOpen}
        onClose={() => setIsPrescriptionModalOpen(false)}
      />

    </div>
  );
}
