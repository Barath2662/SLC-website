export interface VehicleCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  passengerCapacity: string;
  luggageCapacity: string;
  idealFor: string[];
  features: string[];
  heroImage: string;
  overview: string;
  highlights: string[];
  faqs: FAQItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
  recommendedVehicles: string[];
  faqs: FAQItem[];
}

export interface DestinationItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: 'Hill Station' | 'Pilgrimage' | 'City / Outstation' | 'Leisure & Theme Park';
  distanceFromCoimbatore: string;
  travelTime: string;
  bestTimeToVisit: string;
  overview: string;
  attractions: string[];
  travelTips: string[];
  recommendedVehicles: string[];
  faqs: FAQItem[];
  heroImage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  tripType: string;
  date?: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  vehicleCategory?: string;
  passengerCount?: string;
  tripType?: string;
  message?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string[];
}
