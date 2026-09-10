export type ServiceCategory =
  | 'Hosting & Technical Services'
  | 'SaaS Development Services'
  | 'Digital Marketing Services'
  | 'Content & Creative Services'
  | 'Social Media Management Services'
  | 'Social Media Growth Services'
  | 'Web Development Services'
  | 'App Development Services'
  | 'AI Solutions & Services'
  | 'Web & App Dev'
  | 'SMM Management'
  | 'SMM Growth'
  | 'AI Content & Creation'
  | 'Business Automation';

export interface FeatureGridItem {
  icon: string; // Lucide icon name or identifier
  headline: string;
  text: string;
}

export interface RateMatrixItem {
  id: string;
  name: string;
  quantity?: string;
  rateLabel: string;
  priceINR: number | null; // null represents "Added Soon!"
  isComingSoon?: boolean;
  featureBadge?: string;
  description?: string;
  altOption?: {
    name: string;
    quantity?: string;
    rateLabel: string;
    priceINR: number;
    featureBadge?: string;
  };
}

export interface Service {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  featuresGrid: FeatureGridItem[];
  fullDeepContent: string;
  basePrice: number;
  featured?: boolean;
  deliveryTime?: string;
  rateMatrix?: RateMatrixItem[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  viewRatesUnlocked: boolean;
  createdAt: string;
  role?: 'user' | 'admin';
}

export interface Lead {
  id: string;
  clientName: string;
  clientEmail: string;
  selectedService: string;
  message: string;
  timestamp: string;
  status: 'New' | 'In Contact' | 'Closed';
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  avatarUrl?: string;
  serviceCategory: ServiceCategory | string;
  rating: number;
  quote: string;
  metricImpact: string;
  verified: boolean;
}
