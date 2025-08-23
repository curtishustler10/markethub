-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE imported_vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE emails_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE feature_flags ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Anyone can create profile on signup" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Markets policies
CREATE POLICY "Anyone can view live markets" ON markets
    FOR SELECT USING (status = 'live');

CREATE POLICY "Market owners can view own markets" ON markets
    FOR SELECT USING (owner_id = auth.uid());

CREATE POLICY "Market owners can create markets" ON markets
    FOR INSERT WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Market owners can update own markets" ON markets
    FOR UPDATE USING (owner_id = auth.uid());

CREATE POLICY "Admins can manage all markets" ON markets
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Market documents policies
CREATE POLICY "Market owners can manage own market documents" ON market_documents
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = market_documents.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can view market documents for application" ON market_documents
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = market_documents.market_id 
            AND markets.status = 'live'
        )
    );

CREATE POLICY "Admins can manage all market documents" ON market_documents
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Vendor profiles policies
CREATE POLICY "Vendors can manage own profile" ON vendor_profiles
    FOR ALL USING (
        vendor_id = auth.uid() OR claimed_profile_id = auth.uid()
    );

-- Imported vendors policies
CREATE POLICY "Service role can manage imported vendors" ON imported_vendors
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Market owners can view vendor profiles for applications" ON vendor_profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM vendor_applications va
            JOIN markets m ON m.id = va.market_id
            WHERE va.vendor_id = vendor_profiles.claimed_profile_id
            AND m.owner_id = auth.uid()
        )
    );

CREATE POLICY "Admins can view all vendor profiles" ON vendor_profiles
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Vendor documents policies
CREATE POLICY "Vendors can manage own documents" ON vendor_documents
    FOR ALL USING (vendor_id = auth.uid());

CREATE POLICY "Market owners can view vendor documents for applications" ON vendor_documents
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM vendor_applications va
            JOIN markets m ON m.id = va.market_id
            WHERE va.vendor_id = vendor_documents.vendor_id
            AND m.owner_id = auth.uid()
        )
    );

CREATE POLICY "Admins can manage all vendor documents" ON vendor_documents
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Vendor applications policies
CREATE POLICY "Vendors can view own applications" ON vendor_applications
    FOR SELECT USING (vendor_id = auth.uid());

CREATE POLICY "Vendors can create applications" ON vendor_applications
    FOR INSERT WITH CHECK (vendor_id = auth.uid());

CREATE POLICY "Vendors can update own applications" ON vendor_applications
    FOR UPDATE USING (vendor_id = auth.uid());

CREATE POLICY "Market owners can view applications to their markets" ON vendor_applications
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = vendor_applications.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

CREATE POLICY "Market owners can update applications to their markets" ON vendor_applications
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = vendor_applications.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

CREATE POLICY "Admins can manage all applications" ON vendor_applications
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Events policies
CREATE POLICY "Market owners can manage own market events" ON events
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = events.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

CREATE POLICY "Anyone can view events for live markets" ON events
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = events.market_id 
            AND markets.status = 'live'
        )
    );

CREATE POLICY "Admins can manage all events" ON events
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Emails log policies (admin only)
CREATE POLICY "Only admins can access emails log" ON emails_log
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Feature flags policies
CREATE POLICY "Anyone can read feature flags" ON feature_flags
    FOR SELECT TO authenticated;

CREATE POLICY "Only admins can manage feature flags" ON feature_flags
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );