export interface VehicleCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  passengerCapacity: string | number;
  luggageCapacity: string;
  idealUseCases: string[];
  idealTravelExperiences?: string[];
  idealFor?: string[];
  features: string[];
  imageUrl: string;
  heroImage?: string;
  overview: string;
  faqs?: FAQItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  tagline?: string;
  iconName?: string;
  icon?: string;
  imageUrl: string;
  recommendedVehicles: string[];
  keyBenefits: string[];
  faqs?: FAQItem[];
}

export interface DestinationItem {
  id: string;
  name: string;
  slug: string;
  category: 'Hill Station' | 'Pilgrimage' | 'City / Outstation' | 'Leisure & Theme Park';
  distanceFromCoimbatore: string;
  travelTime: string;
  bestTimeToVisit: string;
  heroImage: string;
  tagline: string;
  overview: string;
  attractions: string[];
  travelTips: string[];
  recommendedVehicles: string[];
  faqs?: FAQItem[];
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
  tripType: string;
  review?: string;
  comment?: string;
  date: string;
  verified?: boolean;
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
  keywords: string[];
  canonicalUrl?: string;
}
