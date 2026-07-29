export type NavPage = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact';

export interface BusinessInfo {
  name: string;
  legalName: string;
  category: string;
  tagline: string;
  location: string;
  fullAddress: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string;
  email: string;
  workingHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
  googleMapEmbedUrl: string;
  mapDirectionsUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  popularProducts: string[];
  badge?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  itemCount: string;
  image: string;
  popularItems: string[];
}

export interface MedicineItem {
  id: string;
  name: string;
  category: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream' | 'Baby Product' | 'Surgical';
  dosageForm?: string;
  manufacturer?: string;
  uses: string;
  inStock: boolean;
  prescriptionRequired: boolean;
  discountBadge?: string;
  mrpRange?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatarText: string;
  verifiedCustomer: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Medicines' | 'Orders & Delivery' | 'Prescriptions';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Exterior' | 'Medicine Shelves' | 'Healthcare Products' | 'Medical Equipment' | 'Customer Care';
  image: string;
  description: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: 'Immediate' | 'Morning (9 AM - 12 PM)' | 'Afternoon (12 PM - 4 PM)' | 'Evening (4 PM - 8 PM)';
}
