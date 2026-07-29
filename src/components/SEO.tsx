import React, { useEffect } from 'react';
import { NavPage } from '../types';
import { BUSINESS_INFO, FAQ_LIST } from '../data/pharmacyData';

interface SEOProps {
  currentPage: NavPage;
  customTitle?: string;
}

export const SEO: React.FC<SEOProps> = ({ currentPage, customTitle }) => {
  useEffect(() => {
    // Dynamic Page Titles
    const titles: Record<NavPage, string> = {
      home: `Raj Pharma Paliganj | Trusted Medical Store & Genuine Medicines in Bihar`,
      about: `About Raj Pharma Paliganj | Our Story, Mission & Certified Pharmacy`,
      services: `Pharmacy Services | Prescription, Baby Care, Medical Equipment | Raj Pharma Paliganj`,
      gallery: `Store Gallery & Medical Stock | Raj Pharma Paliganj`,
      testimonials: `Customer Reviews & Trust | Raj Pharma Paliganj`,
      faq: `Frequently Asked Questions | Raj Pharma Paliganj Pharmacy`,
      contact: `Contact Us & Store Location | Raj Pharma Paliganj (Ph: 9608285053)`
    };

    const descriptions: Record<NavPage, string> = {
      home: `Raj Pharma Paliganj on Chandhos Rd, Purani Bazar, Bihar 801110. Genuine prescription medicines, baby care, diabetic supplies & fast WhatsApp orders. Call 9608285053.`,
      about: `Learn about Raj Pharma Paliganj, our commitment to 100% genuine medicines, experienced pharmacists, and serving local families with care in Bihar.`,
      services: `Explore retail medicine sales, doctor prescription fulfillment, surgical items, BP monitors, glucometers, and healthcare supplies at Raj Pharma.`,
      gallery: `Browse photos of our clean pharmacy store, organized medicine shelves, baby care counter, and medical devices in Paliganj.`,
      testimonials: `Read genuine feedback and 5-star Google reviews from local customers in Paliganj who trust Raj Pharma for authentic healthcare needs.`,
      faq: `Find answers to top pharmacy questions regarding store timings, WhatsApp medicine orders, prescription guidelines, and payment options in Paliganj.`,
      contact: `Visit Raj Pharma at Chandhos Rd, Purani Bazar, Paliganj, Bihar 801110. Call or WhatsApp 9608285053 for quick medicine inquiry and directions.`
    };

    const pageTitle = customTitle || titles[currentPage] || titles.home;
    const pageDesc = descriptions[currentPage] || descriptions.home;

    document.title = pageTitle;

    // Helper to set meta tag
    const updateMetaTag = (nameAttr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = window.location.href;
    canonical.setAttribute('href', currentUrl);

    // Standard Meta Tags
    updateMetaTag('name', 'description', pageDesc);
    updateMetaTag('name', 'keywords', 'Raj pharma paliganj, medical store paliganj, pharmacy in paliganj, genuine medicines bihar, prescription medicines paliganj, purani bazar paliganj pharmacy, baby care products bihar, whatsapp medicine order');
    updateMetaTag('name', 'author', BUSINESS_INFO.name);

    // Open Graph
    updateMetaTag('property', 'og:title', pageTitle);
    updateMetaTag('property', 'og:description', pageDesc);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:site_name', BUSINESS_INFO.name);
    updateMetaTag('property', 'og:locale', 'en_IN');

    // Twitter Card
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', pageTitle);
    updateMetaTag('name', 'twitter:description', pageDesc);

    // Inject JSON-LD Schema
    const schemaId = 'raj-pharma-jsonld-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // LocalBusiness / Pharmacy JSON-LD
    const pharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "@id": "https://rajpharmapaliganj.com/#pharmacy",
      "name": BUSINESS_INFO.name,
      "legalName": BUSINESS_INFO.legalName,
      "description": BUSINESS_INFO.tagline,
      "url": currentUrl,
      "telephone": BUSINESS_INFO.formattedPhone,
      "email": BUSINESS_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chandhos Rd, Purani Bazar",
        "addressLocality": "Paliganj",
        "addressRegion": "Bihar",
        "postalCode": "801110",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.3524,
        "longitude": 84.8021
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:30",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "21:00"
        }
      ],
      "priceRange": "₹",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "GPay", "PhonePe"],
      "currenciesAccepted": "INR",
      "areaServed": "Paliganj and surrounding Bihar districts"
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_LIST.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": currentUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": currentPage.toUpperCase(),
          "item": `${currentUrl}#${currentPage}`
        }
      ]
    };

    scriptTag.text = JSON.stringify([pharmacySchema, faqSchema, breadcrumbSchema]);

  }, [currentPage, customTitle]);

  return null;
};
