-- Fix RLS policy infinite recursion issues
-- Run this in Supabase SQL Editor BEFORE running the updated apply_schema.sql

-- Drop the problematic admin policies that cause infinite recursion (only if they exist)
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Admins can manage all markets" ON markets;
DROP POLICY IF EXISTS "Admins can manage all market documents" ON market_documents;
DROP POLICY IF EXISTS "Admins can view all vendor profiles" ON vendor_profiles;
DROP POLICY IF EXISTS "Admins can manage all vendor documents" ON vendor_documents;
DROP POLICY IF EXISTS "Admins can manage all applications" ON vendor_applications;
DROP POLICY IF EXISTS "Admins can manage all events" ON events;
DROP POLICY IF EXISTS "Only admins can access emails log" ON emails_log;
DROP POLICY IF EXISTS "Only admins can manage feature flags" ON feature_flags;

-- Admin operations will use the service role key in application code instead of RLS policies