export type UserRole = 'market_organizer' | 'vendor' | 'admin';
export type MarketStatus = 'draft' | 'live' | 'paused';
export type DocumentType = 'license' | 'insurance' | 'menu_pdf' | 'food_licence' | 'public_liability' | 'other';
export type VerificationStatus = 'valid' | 'expiring_soon' | 'expired' | 'needs_review';
export type ApplicationStatus = 'submitted' | 'accepted' | 'refused' | 'not_now';
export type VendorCategory = 'farmer' | 'gourmet_food' | 'ready_to_eat' | 'artisan' | 'specialist' | 'charity';
export type SiteSize = '3x3' | '6x3' | '9x3';

export interface Profile {
  id: string;
  role: UserRole;
  name: string | null;
  email: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export interface Market {
  id: string;
  owner_id: string;
  name: string;
  slug: string;
  description: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  postcode: string | null;
  country: string;
  lat: number | null;
  lng: number | null;
  amenities: Record<string, any>;
  requirements: Record<string, any>;
  status: MarketStatus;
  created_at: string;
  updated_at: string;
  owner?: Profile;
  events?: Event[];
}

export interface MarketDocument {
  id: string;
  market_id: string;
  type: DocumentType;
  storage_path: string;
  extracted_text: string | null;
  number: string | null;
  expiry_date: string | null;
  verification_status: VerificationStatus;
  last_checked_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface VendorProfile {
  vendor_id: string;
  business_name: string | null;
  phone: string | null;
  address: string | null;
  suburb: string | null;
  postcode: string | null;
  region: string | null;
  category: VendorCategory | null;
  vehicle_on_site: boolean;
  power_required: boolean;
  site_size: SiteSize;
  website: string | null;
  facebook: string | null;
  instagram: string | null;
  products_summary: string | null;
  preferred_start_date: string | null;
  heard_about: string | null;
  consent_email: boolean;
  consent_sms: boolean;
  claimed_profile_id: string | null;
  claimed_at: string | null;
  claimed_by: string | null;
  created_at: string;
  updated_at: string;
  vendor?: Profile;
  documents?: VendorDocument[];
}

export interface VendorDocument {
  id: string;
  vendor_id: string;
  type: DocumentType;
  region: string | null;
  storage_path: string;
  extracted_text: string | null;
  number: string | null;
  expiry_date: string | null;
  verification_status: VerificationStatus;
  last_checked_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface VendorApplication {
  id: string;
  market_id: string;
  vendor_id: string;
  status: ApplicationStatus;
  message: string | null;
  additional_requirements: Record<string, any>;
  decided_at: string | null;
  decided_by: string | null;
  created_at: string;
  updated_at: string;
  market?: Market;
  vendor?: Profile;
  vendor_profile?: VendorProfile;
  decided_by_profile?: Profile;
}

export interface Event {
  id: string;
  market_id: string;
  start_date: string;
  end_date: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface EmailLog {
  id: string;
  to_email: string;
  template: string;
  payload: Record<string, any>;
  sent_at: string;
}

export interface FeatureFlag {
  key: string;
  enabled: boolean;
  audience: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface LocationFilter {
  lat?: number;
  lng?: number;
  radius?: number;
  state?: string;
  city?: string;
}

export interface MarketSearchResult {
  markets: Market[];
  total: number;
  page: number;
  limit: number;
}

export interface DocumentUploadResponse {
  signed_url: string;
  storage_path: string;
}

export interface DocumentParseResult {
  extracted_text: string;
  number: string | null;
  expiry_date: string | null;
  verification_status: VerificationStatus;
}