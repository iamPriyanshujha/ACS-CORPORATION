export interface Product {
  id: string;
  name: string;
  brand: 'OKS' | 'Klüber' | '3M' | 'Festo' | 'Cortec' | 'ACE';
  category: 'Greases' | 'Pastes' | 'Oils' | 'Sprays' | 'Specialty';
  description: string;
  image: string;
  features: string[];
  applications: string[];
  specifications?: Record<string, string>;
  hsnCode?: string;
  officialUrl?: string;
}

export interface Brand {
  name: string;
  logoText: string;
  logoColor: string;
  borderColor: string;
  description: string;
  established: string;
  origin: string;
  specialty: string;
}

export interface CarouselSlide {
  title: string;
  highlightText: string;
  subtitle: string;
  description: string;
  bgGradient: string;
  imageAccent: string;
}

export interface RfqBasketItem {
  product: Product;
  quantity: string;
  notes?: string;
  addedAt?: number;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  productName?: string;
  brandName?: string;
  message: string;
  timestamp: string;
  status: 'Pending' | 'Contacted';
  notes?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  picture?: string;
  role: 'admin' | 'customer';
  company?: string;
  phone?: string;
  loginProvider: 'google';
  savedProductIds?: string[];
}

export const ADMIN_EMAILS = [
  'acscorporation.in@gmail.com'
];

export const isAdminEmail = (email?: string | null): boolean => {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return ADMIN_EMAILS.some(admin => admin.toLowerCase() === normalized);
};

