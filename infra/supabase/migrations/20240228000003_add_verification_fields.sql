-- Add verification fields to markets and vendor-related tables
ALTER TABLE markets
  ADD COLUMN is_verified BOOLEAN DEFAULT FALSE,
  ADD COLUMN verified_at TIMESTAMPTZ,
  ADD COLUMN verified_by UUID REFERENCES profiles(id);

ALTER TABLE vendor_profiles
  ADD COLUMN is_verified BOOLEAN DEFAULT FALSE,
  ADD COLUMN verified_at TIMESTAMPTZ,
  ADD COLUMN verified_by UUID REFERENCES profiles(id);

ALTER TABLE imported_vendors
  ADD COLUMN is_verified BOOLEAN DEFAULT FALSE,
  ADD COLUMN verified_at TIMESTAMPTZ,
  ADD COLUMN verified_by UUID REFERENCES profiles(id);
