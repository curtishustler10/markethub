c-- Import a sample of vendor data for testing
-- Run this first to test the import process before importing all 200 vendors

-- Test with 5 vendors (one from each category)

INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES (
    'test-001-super-butcher',
    'vendor',
    'Super Butcher Browns Plains',
    'super.butcher.test@imported-vendor.markethub.com',
    '0407 194 956',
    NOW(),
    NOW()
);

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'test-001-super-butcher',
    'Super Butcher Browns Plains',
    '0407 194 956',
    '18 Eastern Rd, Browns Plains QLD 4118, Australia',
    'Browns Plains',
    '4118',
    'QLD',
    'gourmet_food',
    'http://www.superbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
);

INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES (
    'test-002-farmcraft',
    'vendor',
    'Farmcraft Beenleigh',
    'farmcraft.test@imported-vendor.markethub.com',
    '(07) 3287 2796',
    NOW(),
    NOW()
);

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'test-002-farmcraft',
    'Farmcraft Beenleigh',
    '(07) 3287 2796',
    '101 Logan River Rd, Beenleigh QLD 4207, Australia',
    'Beenleigh',
    '4207',
    'QLD',
    'farmer',
    'https://www.farmcraft.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
);

INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES (
    'test-003-flowers-jane',
    'vendor',
    'Flowers by Jane',
    'flowers.jane.test@imported-vendor.markethub.com',
    '(07) 3229 7644',
    NOW(),
    NOW()
);

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'test-003-flowers-jane',
    'Flowers by Jane',
    '(07) 3229 7644',
    '200 Adelaide St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'artisan',
    'https://www.flowersbyjane.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
);

-- Verify the test import
SELECT 
    vp.category,
    COUNT(*) as count,
    STRING_AGG(vp.business_name, ', ') as businesses
FROM vendor_profiles vp
JOIN profiles p ON p.id = vp.vendor_id
WHERE p.email LIKE '%.test@imported-vendor.markethub.com'
GROUP BY vp.category
ORDER BY count DESC;

-- Show all test vendors
SELECT 
    p.name,
    p.email,
    vp.category,
    vp.suburb,
    vp.website
FROM profiles p
JOIN vendor_profiles vp ON vp.vendor_id = p.id
WHERE p.email LIKE '%.test@imported-vendor.markethub.com'
ORDER BY vp.category, p.name;