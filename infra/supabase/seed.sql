-- Seed data for MarketHub

-- Create sample users (these would normally be created via Supabase Auth)
-- Note: In production, profiles are created via triggers when users sign up through Auth

-- Sample admin profile
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    '11111111-1111-1111-1111-111111111111',
    'authenticated',
    'authenticated',
    'admin@markethub.com',
    crypt('admin123', gen_salt('bf')),
    NOW(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
);

-- Sample market organizer
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    '22222222-2222-2222-2222-222222222222',
    'authenticated',
    'authenticated',
    'organizer@example.com',
    crypt('organizer123', gen_salt('bf')),
    NOW(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
);

-- Sample vendor
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    '33333333-3333-3333-3333-333333333333',
    'authenticated',
    'authenticated',
    'vendor@example.com',
    crypt('vendor123', gen_salt('bf')),
    NOW(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
);

-- Create profiles
INSERT INTO profiles (id, role, name, email, phone) VALUES
    ('11111111-1111-1111-1111-111111111111', 'admin', 'Admin User', 'admin@markethub.com', '+61400000000'),
    ('22222222-2222-2222-2222-222222222222', 'market_organizer', 'Market Organizer', 'organizer@example.com', '+61400000001'),
    ('33333333-3333-3333-3333-333333333333', 'vendor', 'Sample Vendor', 'vendor@example.com', '+61400000002');

-- Create sample market
INSERT INTO markets (
    id,
    owner_id,
    name,
    slug,
    description,
    address,
    city,
    state,
    postcode,
    lat,
    lng,
    status,
    amenities,
    requirements,
    is_verified,
    verified_at,
    verified_by
) VALUES (
    '44444444-4444-4444-4444-444444444444',
    '22222222-2222-2222-2222-222222222222',
    'Melbourne Farmers Market',
    'melbourne-farmers-market',
    'A vibrant farmers market in the heart of Melbourne, showcasing the best local produce and artisanal goods.',
    '123 Collins Street',
    'Melbourne',
    'VIC',
    '3000',
    -37.8136,
    144.9631,
    'live',
    '{"electricity": true, "water": true, "parking": true, "toilets": true}',
    '{"required_docs": ["food_licence", "public_liability"], "minimum_insurance": 5000000}',
    true,
    NOW(),
    '22222222-2222-2222-2222-222222222222'
);

-- Insert sample imported market
INSERT INTO imported_markets (
    id,
    name,
    slug,
    description,
    address,
    city,
    state,
    postcode,
    country,
    lat,
    lng,
    amenities,
    requirements
) VALUES (
    '55555555-5555-5555-5555-555555555555',
    'Unclaimed Community Market',
    'unclaimed-community-market',
    'Sample imported market awaiting claim',
    '1 Sample St',
    'Sydney',
    'NSW',
    '2000',
    'Australia',
    -33.8688,
    151.2093,
    '{}',
    '{}'
);

-- Create sample market documents
INSERT INTO market_documents (
    market_id,
    type,
    storage_path,
    extracted_text,
    number,
    expiry_date,
    verification_status
) VALUES
    (
        '44444444-4444-4444-4444-444444444444',
        'license',
        'market-docs/44444444-4444-4444-4444-444444444444/license.pdf',
        'BUSINESS LICENSE\nLicense Number: BL123456\nBusiness Name: Melbourne Farmers Market\nExpiry Date: 31/12/2024\nIssued by: City of Melbourne',
        'BL123456',
        '2024-12-31',
        'valid'
    ),
    (
        '44444444-4444-4444-4444-444444444444',
        'insurance',
        'market-docs/44444444-4444-4444-4444-444444444444/insurance.pdf',
        'PUBLIC LIABILITY INSURANCE\nPolicy Number: PL789012\nInsured: Melbourne Farmers Market\nCoverage: $20,000,000\nExpiry Date: 30/06/2025',
        'PL789012',
        '2025-06-30',
        'valid'
    );

INSERT INTO imported_vendors (id, name, email, phone, source)
VALUES (
    '33333333-3333-3333-3333-333333333333',
    'Fresh Farm Produce',
    'vendor@example.com',
    '+61400000002',
    'seed'
);

INSERT INTO vendor_profiles (
    vendor_id,
    business_name,
    phone,
    address,
    suburb,
    postcode,
    region,
    category,
    vehicle_on_site,
    power_required,
    site_size,
    website,
    products_summary,
    preferred_start_date,
    heard_about,
    consent_email,
    consent_sms,
    claimed_profile_id,
    claimed_at,
    claimed_by,
    is_verified,
    verified_at,
    verified_by
) VALUES (
    '33333333-3333-3333-3333-333333333333',
    'Fresh Farm Produce',
    '+61400000002',
    '456 Farm Road',
    'Yarra Valley',
    '3777',
    'Victoria',
    'farmer',
    true,
    false,
    '6x3',
    'https://freshfarmproduce.com.au',
    'Seasonal vegetables, herbs, and free-range eggs from our family farm in the Yarra Valley.',
    '2024-03-01',
    'Google search',
    true,
    false,
    '33333333-3333-3333-3333-333333333333',
    NOW(),
    '33333333-3333-3333-3333-333333333333',
    true,
    NOW(),
    '33333333-3333-3333-3333-333333333333'
);

-- Create sample vendor documents
INSERT INTO vendor_documents (
    vendor_id,
    type,
    region,
    storage_path,
    extracted_text,
    number,
    expiry_date,
    verification_status
) VALUES
    (
        '33333333-3333-3333-3333-333333333333',
        'food_licence',
        'Victoria',
        'vendor-docs/33333333-3333-3333-3333-333333333333/food_licence.pdf',
        'FOOD BUSINESS LICENCE\nLicence Number: FB456789\nBusiness Name: Fresh Farm Produce\nAddress: 456 Farm Road, Yarra Valley VIC 3777\nExpiry Date: 15/08/2024',
        'FB456789',
        '2024-08-15',
        'expiring_soon'
    ),
    (
        '33333333-3333-3333-3333-333333333333',
        'public_liability',
        NULL,
        'vendor-docs/33333333-3333-3333-3333-333333333333/insurance.pdf',
        'PUBLIC LIABILITY INSURANCE\nPolicy Number: VP345678\nInsured: Fresh Farm Produce\nCoverage: $10,000,000\nExpiry Date: 31/12/2024',
        'VP345678',
        '2024-12-31',
        'valid'
    );

-- Create sample vendor application
INSERT INTO vendor_applications (
    market_id,
    vendor_id,
    status,
    message,
    additional_requirements
) VALUES (
    '44444444-4444-4444-4444-444444444444',
    '33333333-3333-3333-3333-333333333333',
    'submitted',
    'Hello! I would love to join your market with my fresh farm produce. I have been farming in the Yarra Valley for over 10 years and specialize in organic vegetables and free-range eggs.',
    '{"preferred_location": "near entrance", "special_requirements": "need access for van unloading"}'
);

-- Create sample events
INSERT INTO events (
    market_id,
    start_date,
    end_date,
    notes
) VALUES
    (
        '44444444-4444-4444-4444-444444444444',
        '2024-03-02',
        '2024-03-02',
        'Saturday market - regular weekly market'
    ),
    (
        '44444444-4444-4444-4444-444444444444',
        '2024-03-09',
        '2024-03-09',
        'Saturday market - regular weekly market'
    ),
    (
        '44444444-4444-4444-4444-444444444444',
        '2024-03-16',
        '2024-03-16',
        'Saturday market - Spring Festival special event'
    );

-- Sample email log entry
INSERT INTO emails_log (to_email, template, payload) VALUES
    (
        'organizer@example.com',
        'new-application',
        '{"vendor_name": "Fresh Farm Produce", "market_name": "Melbourne Farmers Market", "application_id": "' || (SELECT id FROM vendor_applications LIMIT 1) || '"}'
    );