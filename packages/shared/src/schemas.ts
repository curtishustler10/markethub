import { z } from 'zod';

export const userRoleSchema = z.enum(['market_organizer', 'vendor', 'admin']);
export const marketStatusSchema = z.enum(['draft', 'live', 'paused']);
export const documentTypeSchema = z.enum(['license', 'insurance', 'menu_pdf', 'food_licence', 'public_liability', 'other']);
export const verificationStatusSchema = z.enum(['valid', 'expiring_soon', 'expired', 'needs_review']);
export const applicationStatusSchema = z.enum(['submitted', 'accepted', 'refused', 'not_now']);
export const vendorCategorySchema = z.enum(['farmer', 'gourmet_food', 'ready_to_eat', 'artisan', 'specialist', 'charity']);
export const siteSizeSchema = z.enum(['3x3', '6x3', '9x3']);

export const profileSchema = z.object({
  id: z.string().uuid(),
  role: userRoleSchema,
  name: z.string().nullable(),
  email: z.string().email().nullable(),
  phone: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const marketSchema = z.object({
  id: z.string().uuid(),
  owner_id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  postcode: z.string().nullable(),
  country: z.string().default('Australia'),
  lat: z.number().nullable(),
  lng: z.number().nullable(),
  amenities: z.record(z.any()).default({}),
  requirements: z.record(z.any()).default({}),
  status: marketStatusSchema.default('draft'),
  created_at: z.string(),
  updated_at: z.string(),
});

export const createMarketSchema = z.object({
  name: z.string().min(1, 'Market name is required'),
  description: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postcode: z.string().min(1, 'Postcode is required'),
  country: z.string().default('Australia'),
  lat: z.number().optional(),
  lng: z.number().optional(),
  amenities: z.record(z.any()).default({}),
  requirements: z.record(z.any()).default({}),
});

export const updateMarketSchema = createMarketSchema.partial();

export const vendorProfileSchema = z.object({
  vendor_id: z.string().uuid(),
  business_name: z.string().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  suburb: z.string().nullable(),
  postcode: z.string().nullable(),
  region: z.string().nullable(),
  category: vendorCategorySchema.nullable(),
  vehicle_on_site: z.boolean().default(false),
  power_required: z.boolean().default(false),
  site_size: siteSizeSchema.default('3x3'),
  website: z.string().url().nullable(),
  facebook: z.string().nullable(),
  instagram: z.string().nullable(),
  products_summary: z.string().nullable(),
  preferred_start_date: z.string().nullable(),
  heard_about: z.string().nullable(),
  consent_email: z.boolean().default(false),
  consent_sms: z.boolean().default(false),
  created_at: z.string(),
  updated_at: z.string(),
});

export const createVendorProfileSchema = z.object({
  business_name: z.string().min(1, 'Business name is required'),
  phone: z.string().min(1, 'Phone is required'),
  address: z.string().min(1, 'Address is required'),
  suburb: z.string().min(1, 'Suburb is required'),
  postcode: z.string().min(1, 'Postcode is required'),
  region: z.string().min(1, 'Region is required'),
  category: vendorCategorySchema,
  vehicle_on_site: z.boolean().default(false),
  power_required: z.boolean().default(false),
  site_size: siteSizeSchema.default('3x3'),
  website: z.string().url().optional().or(z.literal('')),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  products_summary: z.string().min(1, 'Products summary is required'),
  preferred_start_date: z.string().optional(),
  heard_about: z.string().optional(),
  consent_email: z.boolean().default(false),
  consent_sms: z.boolean().default(false),
});

export const updateVendorProfileSchema = createVendorProfileSchema.partial();

export const vendorApplicationSchema = z.object({
  id: z.string().uuid(),
  market_id: z.string().uuid(),
  vendor_id: z.string().uuid(),
  status: applicationStatusSchema.default('submitted'),
  message: z.string().nullable(),
  additional_requirements: z.record(z.any()).default({}),
  decided_at: z.string().nullable(),
  decided_by: z.string().uuid().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const createVendorApplicationSchema = z.object({
  market_id: z.string().uuid(),
  message: z.string().optional(),
  additional_requirements: z.record(z.any()).default({}),
});

export const applicationDecisionSchema = z.object({
  status: z.enum(['accepted', 'refused', 'not_now']),
  message: z.string().optional(),
});

export const documentUploadSchema = z.object({
  type: documentTypeSchema,
  region: z.string().optional(),
});

export const locationFilterSchema = z.object({
  lat: z.number().optional(),
  lng: z.number().optional(),
  radius: z.number().min(1).max(500).default(50).optional(),
  state: z.string().optional(),
  city: z.string().optional(),
});

export const marketSearchSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  search: z.string().optional(),
}).merge(locationFilterSchema);

export const authCallbackSchema = z.object({
  code: z.string(),
  next: z.string().optional(),
});

export const magicLinkSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const signUpSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().min(1, 'Name is required'),
  role: userRoleSchema,
});