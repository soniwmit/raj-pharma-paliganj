import { BusinessInfo, ServiceItem, CategoryItem, MedicineItem, Testimonial, FAQItem, GalleryItem } from '../types';
import heroImage from '../assets/images/raj_pharma_hero_1785313667059.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Raj Pharma Paliganj",
  legalName: "Raj Pharma Medical Store",
  category: "Pharmacy | Medical Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  location: "Purani Bazar, Paliganj",
  fullAddress: "Chandhos Rd, Purani Bazar, Paliganj, Bihar 801110",
  landmark: "Near Main Market, Chandhos Road",
  city: "Paliganj",
  state: "Bihar",
  pincode: "801110",
  phone: "9608285053",
  formattedPhone: "+91 9608285053",
  whatsappNumber: "919608285053",
  email: "rajpharmapaliganj@gmail.com",
  workingHours: {
    weekdays: "Monday - Saturday: 7:30 AM - 10:00 PM",
    sunday: "Sunday: 8:00 AM - 9:00 PM",
    emergency: "24x7 Emergency Call Support Available"
  },
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14421.328409028!2d84.8021!3d25.3524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d363db8122327%3A0x8cf25e215bc23a31!2sPaliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectionsUrl: "https://maps.google.com/?q=Raj+Pharma+Chandhos+Rd+Purani+Bazar+Paliganj+Bihar+801110"
};

export const HERO_IMAGE_URL = heroImage;

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "100% Genuine Medicines",
    desc: "Sourced directly from authorized pharmaceutical distributors & top manufacturers.",
    iconName: "ShieldCheck"
  },
  {
    title: "Experienced Staff",
    desc: "Qualified, knowledgeable pharmacists providing friendly, reliable guidance.",
    iconName: "UserCheck"
  },
  {
    title: "Affordable Prices",
    desc: "Transparent pricing with genuine discounts on daily healthcare essentials.",
    iconName: "Tag"
  },
  {
    title: "Fast Service",
    desc: "Quick medicine pickup at store and rapid response for local orders.",
    iconName: "Zap"
  },
  {
    title: "Prescription Medicines",
    desc: "Complete stock of life-saving, cardiac, diabetic, and specialty prescription drugs.",
    iconName: "FileText"
  },
  {
    title: "Healthcare Products",
    desc: "Personal care, baby care, wellness supplements, and daily hygiene products.",
    iconName: "HeartPulse"
  },
  {
    title: "Trusted Local Pharmacy",
    desc: "Proudly serving Paliganj families for years with utmost integrity.",
    iconName: "MapPin"
  },
  {
    title: "Easy WhatsApp Support",
    desc: "Order medicines & submit prescriptions in seconds via WhatsApp.",
    iconName: "MessageCircle"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "medicine-sales",
    title: "Medicine Sales",
    shortDesc: "Comprehensive range of genuine retail pharmaceutical products.",
    fullDesc: "We stock a vast array of high-quality branded and ethical generic medicines covering all major therapeutic categories. From daily pain relief to chronic disease management.",
    iconName: "Pill",
    badge: "Popular",
    features: ["Authorized Company Sourced", "Complete Temperature Maintained Stock", "Batch & Expiry Verified", "Affordable Rates"],
    popularProducts: ["Antibiotics", "Pain Relief", "Antacids", "Fever & Cold Remedies"]
  },
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    shortDesc: "Authentic, doctor-prescribed life-saving medications.",
    fullDesc: "Drop off or send your prescription via WhatsApp to get exact doctor-prescribed medications with accurate dosages verified by our qualified pharmacists.",
    iconName: "FileSignature",
    badge: "Essential",
    features: ["Doctor Prescription Review", "Complete Brand Options", "Chronic Care Refill Alerts", "Clear Dosage Instructions"],
    popularProducts: ["Cardiac Medicines", "Diabetic Drugs", "Hypertension Pills", "Specialty Injections"]
  },
  {
    id: "otc-medicines",
    title: "OTC Medicines",
    shortDesc: "Over-the-counter remedies for immediate relief.",
    fullDesc: "Quick relief medications for headaches, digestive discomfort, seasonal allergies, colds, coughs, and minor ailments without delay.",
    iconName: "Cross",
    features: ["Instant Store Pickup", "Symptom Guidance", "Safe OTC Remedies", "Top Pharma Brands"],
    popularProducts: ["Cough Syrups", "Pain Relievers", "Antacids & Digestion", "Allergy Tablets"]
  },
  {
    id: "baby-care-products",
    title: "Baby Care Products",
    shortDesc: "Dermatologically safe products for infants and toddlers.",
    fullDesc: "Nurture your little ones with safe, gentle, doctor-recommended baby care products including baby milk powder, diapers, wipes, and skincare items.",
    iconName: "Baby",
    badge: "Special Care",
    features: ["Hygienic & Safe", "Top Brands (Himalaya, Lactogen, Johnson's)", "Hypoallergenic Formulations", "Baby Nutrition"],
    popularProducts: ["Infant Formula", "Baby Diapers & Wipes", "Baby Lotions & Soaps", "Teething Gel"]
  },
  {
    id: "personal-care-products",
    title: "Personal Care Products",
    shortDesc: "Daily hygiene, skincare, and grooming essentials.",
    fullDesc: "Maintain optimal personal hygiene with our curated collection of dermatological creams, antiseptic soaps, hair care remedies, and personal hygiene products.",
    iconName: "Sparkles",
    features: ["Dermatologist Tested", "Quality Skincare Range", "Daily Hygiene Solutions", "Natural & Organic Choices"],
    popularProducts: ["Antiseptic Lotions", "Moisturizers", "Hair Oils & Shampoos", "Oral Hygiene Items"]
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care",
    shortDesc: "End-to-end diabetes management supplies & monitoring.",
    fullDesc: "Stay on top of your blood glucose levels with our complete diabetes care portfolio, including glucometers, test strips, lancets, and insulin formulations.",
    iconName: "Activity",
    badge: "Health Special",
    features: ["Glucometers & Strips", "Insulin Syringes & Pens", "Sugar-Free Products", "Neuropathy Creams"],
    popularProducts: ["Blood Sugar Meters", "Test Strips", "Sugar-Free Supplements", "Diabetic Foot Care"]
  },
  {
    id: "blood-pressure-monitor",
    title: "Blood Pressure Monitors",
    shortDesc: "Reliable digital BP monitors and cardiovascular health devices.",
    fullDesc: "Accurate, easy-to-use digital blood pressure monitors from trusted brands like Omron and Dr. Trust for precise home monitoring.",
    iconName: "Heart",
    features: ["Clinically Validated", "Automatic Digital Operation", "Memory Storage Models", "1-Year Warranty Support"],
    popularProducts: ["Automatic Upper Arm BP Monitors", "Digital Pulse Oximeters", "Stethoscopes"]
  },
  {
    id: "first-aid-supplies",
    title: "First Aid Supplies",
    shortDesc: "Emergency wound care dressings, bandages, and antiseptics.",
    fullDesc: "Be prepared for home or workplace emergencies with certified first aid kits, sterile gauzes, cotton, medical tapes, and antiseptic solutions.",
    iconName: "Bandage",
    features: ["Sterile Packaging", "Complete First Aid Kits", "Burn Treatment Gels", "Wound Dressings"],
    popularProducts: ["Dettol / Savlon", "Bandages & Cotton Roll", "Medical Adhesive Tapes", "Burnol"]
  },
  {
    id: "surgical-items",
    title: "Surgical Items",
    shortDesc: "Hospital-grade surgical disposables & dressings.",
    fullDesc: "Supplying local clinics, doctors, and patients with high-quality surgical gloves, IV sets, catheters, syringes, and surgical dressings.",
    iconName: "Syringe",
    features: ["Gamma Sterilized", "Hospital Grade Quality", "Single-Use Disposables", "Clinic Bulk Rates"],
    popularProducts: ["Disposable Syringes", "Surgical Gloves", "IV Cannulas", "Sterile Surgical Pads"]
  },
  {
    id: "health-supplements",
    title: "Health Supplements",
    shortDesc: "Multivitamins, protein powders, and immunity boosters.",
    fullDesc: "Boost your vitality, immunity, and athletic performance with certified nutritional supplements, calcium tablets, omega-3, and protein formulas.",
    iconName: "Shield",
    features: ["FSSAI Approved", "Top Nutrition Brands", "Multivitamins & Minerals", "Immunity Boosters"],
    popularProducts: ["Protein Powders", "Multivitamin Capsules", "Calcium & Vitamin D3", "Omega-3 Fish Oil"]
  },
  {
    id: "medical-devices",
    title: "Medical Devices",
    shortDesc: "Essential medical & diagnostic equipment for home care.",
    fullDesc: "Quality diagnostic devices including nebulizers, digital thermometers, weighing scales, heating pads, and oxygen concentrator accessories.",
    iconName: "Thermometer",
    features: ["Accurate Readings", "Easy Home Operation", "Brand Guarantee", "Usage Demonstration"],
    popularProducts: ["Nebulizers", "Digital Thermometers", "Steam Inhalers", "Heating Pads"]
  },
  {
    id: "home-care-products",
    title: "Home Care Products",
    shortDesc: "Supportive gear for elderly and post-surgery care.",
    fullDesc: "Comfort and safety equipment for senior citizens and recovering patients, including wheelchairs, walkers, adult diapers, and bed protection pads.",
    iconName: "Home",
    features: ["Ergonomic & Sturdy", "Adult Incontinence Care", "Mobility Assistance", "Patient Comfort Gear"],
    popularProducts: ["Adult Diapers", "Underpads", "Folding Walkers", "Commode Chairs"]
  }
];

export const FEATURED_CATEGORIES: CategoryItem[] = [
  {
    id: "tablets",
    name: "Tablets",
    iconName: "Pill",
    description: "Daily healthcare, analgesics, antibiotics, & vitamins.",
    itemCount: "500+ Items",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Paracetamol 650mg", "Amoxicillin 500mg", "Pantoprazole 40mg", "Cetirizine 10mg"]
  },
  {
    id: "capsules",
    name: "Capsules",
    iconName: "PillBottle",
    description: "Gastro-care, multivitamin, & antibiotic softgels.",
    itemCount: "350+ Items",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Rabeprazole + DSR", "Omeprazole 20mg", "B-Complex + Z", "Lycopene Softgels"]
  },
  {
    id: "syrups",
    name: "Syrups",
    iconName: "FlaskConical",
    description: "Cough syrups, antacids, digestive enzymes, & pediatric syrups.",
    itemCount: "200+ Items",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Benadryl Syrup", "Ascoril LS", "Gelusil Liquid", "Multivitamin Syrup"]
  },
  {
    id: "injection",
    name: "Injections",
    iconName: "Syringe",
    description: "Sterile medical ampoules, vials, & IV fluids.",
    itemCount: "150+ Items",
    image: "https://images.unsplash.com/photo-1579165466541-71e22a308350?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Ceftriaxone Injection", "Diclofenac Ampoule", "Insulin Vials", "Neurobion Forte"]
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    iconName: "Stethoscope",
    description: "BP monitors, nebulizers, pulse oximeters, & glucometers.",
    itemCount: "80+ Items",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Omron BP Monitor", "Mesh Nebulizer", "Dr. Trust Oximeter", "Accu-Chek Instant"]
  },
  {
    id: "protein-supplements",
    name: "Protein & Nutrition",
    iconName: "Dumbbell",
    description: "Health drinks, whey protein, nutritional powders.",
    itemCount: "60+ Items",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Protinex Powder", "Ensure Diabetes Care", "Threptin Biscuits", "Horlicks Mother's"]
  },
  {
    id: "vitamins",
    name: "Vitamins & Calcium",
    iconName: "Sun",
    description: "Immunity support, bone health, zinc, & Vitamin C.",
    itemCount: "120+ Items",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Shelcal 500", "Limcee 500", "Zincovit", "Becosules Capsule"]
  },
  {
    id: "skin-care",
    name: "Skin Care & Derma",
    iconName: "Sparkles",
    description: "Medicated soaps, anti-fungal creams, moisturizing lotions.",
    itemCount: "180+ Items",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Candid Dusting Powder", "Ketoconazole Soap", "Moiz Cream", "Betnovate Cream"]
  },
  {
    id: "baby-products",
    name: "Baby Care",
    iconName: "Baby",
    description: "Infant formula, gentle baby lotion, diapers, & wipes.",
    itemCount: "140+ Items",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Himalaya Baby Lotion", "Lactogen 1/2", "Pampers Baby Wipes", "Gripe Water"]
  },
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    iconName: "Shield",
    description: "Hand sanitizers, masks, antiseptic liquids, & intimate wash.",
    itemCount: "110+ Items",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Dettol Antiseptic", "Savlon Handwash", "N95 Respirator Masks", "V-Wash"]
  },
  {
    id: "orthopedic-support",
    name: "Orthopedic Support",
    iconName: "Activity",
    description: "Knee caps, lumbar belts, crepe bandages, & neck collars.",
    itemCount: "70+ Items",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Lumbosacral Belt", "Flamingo Knee Cap", "Ankle Binder", "Cervical Collar"]
  },
  {
    id: "diabetic-care",
    name: "Diabetic Essentials",
    iconName: "HeartPulse",
    description: "Insulin syringes, glucometer strips, sugar-free drops.",
    itemCount: "90+ Items",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80",
    popularItems: ["Accu-Chek Active Strips", "OneTouch Verio", "SugarFree Gold", "BD Ultra-Fine Needles"]
  }
];

export const WORKING_PROCESS_STEPS = [
  {
    step: "01",
    title: "Visit Store or Contact Us",
    desc: "Walk in to our shop at Purani Bazar Paliganj or reach out directly on WhatsApp / Phone (9608285053).",
    iconName: "MapPin"
  },
  {
    step: "02",
    title: "Share Prescription",
    desc: "Hand over your prescription or take a clear photo and send it via our online WhatsApp order form.",
    iconName: "FileCheck"
  },
  {
    step: "03",
    title: "Get Genuine Medicines",
    desc: "Our pharmacist inspects the dosage, packs 100% genuine medicines, and provides dosage instructions.",
    iconName: "PackageCheck"
  },
  {
    step: "04",
    title: "Easy Payment & Pickup",
    desc: "Pay via Cash, UPI, GPay, PhonePe, or PayTM with instant printed receipt & enjoy fast service.",
    iconName: "CreditCard"
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "1",
    name: "Manoj Kumar Singh",
    location: "Purani Bazar, Paliganj",
    rating: 5,
    comment: "Raj Pharma is the most reliable medical store in Paliganj. I regularly buy my father's diabetes and blood pressure medicines from here. Always 100% genuine and fresh batch medicines with polite service.",
    date: "July 2026",
    avatarText: "MS",
    verifiedCustomer: true
  },
  {
    id: "2",
    name: "Dr. Anjali Verma",
    location: "Chandhos Road, Paliganj",
    rating: 5,
    comment: "As a healthcare professional, I appreciate Raj Pharma's commitment to quality. They maintain proper storage for temperature-sensitive drugs and always stock exact prescription brands.",
    date: "June 2026",
    avatarText: "AV",
    verifiedCustomer: true
  },
  {
    id: "3",
    name: "Rameshwar Prasad",
    location: "Akhtiyarpur, Paliganj",
    rating: 5,
    comment: "Very fast service! I sent my doctor's prescription photo on WhatsApp, and my order was packed and ready by the time I reached the market. Saves a lot of time.",
    date: "July 2026",
    avatarText: "RP",
    verifiedCustomer: true
  },
  {
    id: "4",
    name: "Sunita Devi",
    location: "Paliganj Bazar",
    rating: 5,
    comment: "Best store for baby care products and baby milk powder in our area. The shopkeeper explains the medicine timings very clearly. Highly recommended for all families.",
    date: "May 2026",
    avatarText: "SD",
    verifiedCustomer: true
  },
  {
    id: "5",
    name: "Sanjay Kumar",
    location: "Korpana, Bihar",
    rating: 5,
    comment: "Very reasonable prices compared to other medical shops. They also stock medical equipment like digital BP apparatus and nebulizers. Truly a one-stop pharmacy.",
    date: "June 2026",
    avatarText: "SK",
    verifiedCustomer: true
  },
  {
    id: "6",
    name: "Pankaj Sharma",
    location: "Dhirpur, Paliganj",
    rating: 5,
    comment: "Whenever there is an emergency at night, Raj Pharma staff is extremely helpful on call. Genuine medicine, genuine guidance, and trustworthy behavior.",
    date: "July 2026",
    avatarText: "PS",
    verifiedCustomer: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is Raj Pharma located in Paliganj?",
    answer: "Raj Pharma is conveniently located at Chandhos Rd, Purani Bazar, Paliganj, Bihar 801110. You can easily spot us near the main market hub.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What are the store opening and closing hours?",
    answer: "We are open Monday to Saturday from 7:30 AM to 10:00 PM, and on Sundays from 8:00 AM to 9:00 PM. Emergency telephone support is available 24/7 at +91 9608285053.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "How can I order medicines via WhatsApp?",
    answer: "Simply click the 'WhatsApp Order' button on our website, fill in your name, required medicines or attach a photo of your doctor's prescription, and click 'Send via WhatsApp'. Our staff will confirm your order immediately.",
    category: "Orders & Delivery"
  },
  {
    id: "faq-4",
    question: "Are all medicines sold at Raj Pharma 100% genuine?",
    answer: "Yes, 100%. We source all our pharmaceutical items directly from company-authorized C&F agents and genuine pharma distributors. Every item is batch-checked for quality and long shelf life.",
    category: "Medicines"
  },
  {
    id: "faq-5",
    question: "Do I need a prescription to buy prescription medicines?",
    answer: "Yes, for Schedule H & X drugs, antibiotics, and specialty prescription drugs, a valid doctor's prescription is legally required for safety. You can easily present or upload it to us.",
    category: "Prescriptions"
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer: "We accept all major digital payment modes including UPI (GPay, PhonePe, Paytm, BHIM), Net Banking, QR code scan, as well as Cash.",
    category: "Orders & Delivery"
  },
  {
    id: "faq-7",
    question: "Do you stock medical equipment like BP monitors and Nebulizers?",
    answer: "Yes, we keep a comprehensive range of digital BP monitors, pulse oximeters, blood glucose meters, nebulizers, steam inhalers, and orthopedic supports.",
    category: "Medicines"
  },
  {
    id: "faq-8",
    question: "Can I get baby care products and nutritional supplements here?",
    answer: "Absolutely! We stock a wide selection of baby food, diapers, baby skincare, protein powders, multivitamins, and daily wellness products.",
    category: "Medicines"
  },
  {
    id: "faq-9",
    question: "What should I do if a required medicine is temporarily out of stock?",
    answer: "If a rare or specialty drug is not immediately on our shelf, our team will source it for you within 24 hours from central distributor hubs upon request.",
    category: "Orders & Delivery"
  },
  {
    id: "faq-10",
    question: "How can I contact Raj Pharma Paliganj for emergency assistance?",
    answer: "For emergency medicine needs or urgent queries, you can directly call or WhatsApp us anytime at +91 9608285053.",
    category: "General"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Raj Pharma Store Front & Entrance",
    category: "Store Exterior",
    image: HERO_IMAGE_URL,
    description: "Welcome to Raj Pharma at Chandhos Rd, Purani Bazar Paliganj."
  },
  {
    id: "gal-2",
    title: "Organized Medicine Shelves",
    category: "Medicine Shelves",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800&auto=format&fit=crop&q=80",
    description: "Systematic, temperature-controlled drug storage for maximum potency."
  },
  {
    id: "gal-3",
    title: "Health & Wellness Products Counter",
    category: "Healthcare Products",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    description: "Wide assortment of personal hygiene, skin care, and health supplements."
  },
  {
    id: "gal-4",
    title: "Diagnostic & Medical Devices Section",
    category: "Medical Equipment",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    description: "Digital BP monitors, pulse oximeters, glucometers, and nebulizers."
  },
  {
    id: "gal-5",
    title: "Baby Care & Infant Nutrition Display",
    category: "Healthcare Products",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80",
    description: "Top baby food brands, hypoallergenic baby skincare, diapers, and wipes."
  },
  {
    id: "gal-6",
    title: "Pharmacist Prescription Counseling",
    category: "Customer Care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    description: "Friendly, qualified guidance on correct medicine dosage and timing."
  }
];

export const MEDICINE_INVENTORY: MedicineItem[] = [
  {
    id: "med-1",
    name: "Paracetamol 650mg (Dolo / Calpol)",
    category: "Analgesic / Antipyretic",
    type: "Tablet",
    dosageForm: "Strip of 15 Tablets",
    manufacturer: "Micro Labs / GSK",
    uses: "Effective relief for fever, headache, body pain, and flu symptoms.",
    inStock: true,
    prescriptionRequired: false,
    discountBadge: "Best Seller",
    mrpRange: "₹30 - ₹34 / strip"
  },
  {
    id: "med-2",
    name: "Amoxicillin & Clavulanate 625mg (Moxikind-CV)",
    category: "Antibiotics",
    type: "Tablet",
    dosageForm: "Strip of 10 Tablets",
    manufacturer: "Mankind Pharma",
    uses: "Doctor prescribed treatment for bacterial chest, throat, ear, and skin infections.",
    inStock: true,
    prescriptionRequired: true,
    discountBadge: "Prescription",
    mrpRange: "₹180 - ₹200 / strip"
  },
  {
    id: "med-3",
    name: "Pantoprazole 40mg (Pan 40)",
    category: "Gastrointestinal",
    type: "Tablet",
    dosageForm: "Strip of 15 Tablets",
    manufacturer: "Alkem Laboratories",
    uses: "Relief from acid reflux, heartburn, acidity, and stomach ulcer prevention.",
    inStock: true,
    prescriptionRequired: false,
    discountBadge: "Popular",
    mrpRange: "₹130 - ₹155 / strip"
  },
  {
    id: "med-4",
    name: "Rabeprazole + Domperidone DSR (Rabeloc DSR)",
    category: "Gastrointestinal",
    type: "Capsule",
    dosageForm: "Strip of 10 Capsules",
    manufacturer: "Cadila Healthcare",
    uses: "Effective for severe acidity, gas, bloating, and nausea.",
    inStock: true,
    prescriptionRequired: false,
    discountBadge: "Fast Relief",
    mrpRange: "₹120 - ₹145 / strip"
  },
  {
    id: "med-5",
    name: "Cetirizine 10mg (Okacet / Cetzine)",
    category: "Anti-Allergic",
    type: "Tablet",
    dosageForm: "Strip of 10 Tablets",
    manufacturer: "Cipla",
    uses: "Relief from runny nose, sneezing, skin allergies, and watery eyes.",
    inStock: true,
    prescriptionRequired: false,
    mrpRange: "₹18 - ₹25 / strip"
  },
  {
    id: "med-6",
    name: "Azithromycin 500mg (Azee 500)",
    category: "Antibiotics",
    type: "Tablet",
    dosageForm: "Strip of 5 Tablets",
    manufacturer: "Cipla Ltd",
    uses: "Prescription antibiotic for respiratory tract, throat, and sinus infections.",
    inStock: true,
    prescriptionRequired: true,
    discountBadge: "Prescription",
    mrpRange: "₹115 - ₹130 / strip"
  },
  {
    id: "med-7",
    name: "Accu-Chek Instant Blood Glucose Meter",
    category: "Diabetic Care",
    type: "Equipment",
    manufacturer: "Roche Diabetes",
    uses: "Easy, accurate home blood sugar monitoring kit with test strips.",
    inStock: true,
    prescriptionRequired: false,
    discountBadge: "Special Offer",
    mrpRange: "₹1299 - ₹1499"
  },
  {
    id: "med-8",
    name: "Omron Automatic Digital BP Monitor (HEM-7120)",
    category: "Medical Devices",
    type: "Equipment",
    manufacturer: "Omron Healthcare",
    uses: "One-touch accurate blood pressure measurement at home with 3-year warranty.",
    inStock: true,
    prescriptionRequired: false,
    discountBadge: "Top Brand",
    mrpRange: "₹2199 - ₹2499"
  },
  {
    id: "med-9",
    name: "Ascoril LS Cough Syrup",
    category: "Respiratory",
    type: "Syrup",
    dosageForm: "100ml Bottle",
    manufacturer: "Glenmark Pharma",
    uses: "Expectorant syrup for wet cough, chest congestion, and mucus relief.",
    inStock: true,
    prescriptionRequired: false,
    mrpRange: "₹110 - ₹130"
  },
  {
    id: "med-10",
    name: "Shelcal 500 (Calcium + Vitamin D3)",
    category: "Supplements",
    type: "Tablet",
    dosageForm: "Strip of 15 Tablets",
    manufacturer: "Torrent Pharmaceuticals",
    uses: "Bone health supplement, joint strength, and calcium deficiency prevention.",
    inStock: true,
    prescriptionRequired: false,
    discountBadge: "Daily Health",
    mrpRange: "₹110 - ₹130 / strip"
  },
  {
    id: "med-11",
    name: "Protinex Nutritional Protein Powder (Vanilla/Chocolate)",
    category: "Nutrition",
    type: "Supplement",
    dosageForm: "400g Tin",
    manufacturer: "Danone Nutricia",
    uses: "High protein drink mix for muscle strength, energy, and overall health.",
    inStock: true,
    prescriptionRequired: false,
    mrpRange: "₹590 - ₹650"
  },
  {
    id: "med-12",
    name: "Himalaya Baby Lotion & Massage Oil Kit",
    category: "Baby Care",
    type: "Baby Product",
    dosageForm: "200ml Bottle",
    manufacturer: "Himalaya Wellness",
    uses: "Gentle nourish skincare formula enriched with Olive Oil & Almond.",
    inStock: true,
    prescriptionRequired: false,
    mrpRange: "₹180 - ₹220"
  }
];
