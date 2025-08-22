-- Import vendor data from CSV files into MarketHub database
-- FIXED VERSION: Uses imported_vendors table
-- Run setup_and_import_vendors_fixed.sql FIRST to create tables


INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'cc20a8b1-ff2c-4f72-aab8-bfc3a8d62a37',
    'Super Butcher Browns Plains',
    'super.butcher.browns.plains@imported-vendor.markethub.com',
    '0407 194 956',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'cc20a8b1-ff2c-4f72-aab8-bfc3a8d62a37',
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
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '8cd45727-359d-4321-9703-ef5f2a028d82',
    'Mega Meats',
    'mega.meats@imported-vendor.markethub.com',
    '(07) 3800 6342',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '8cd45727-359d-4321-9703-ef5f2a028d82',
    'Mega Meats',
    '(07) 3800 6342',
    '5-7 Enterprise Way, Browns Plains QLD 4118, Australia',
    'Browns Plains',
    '4118',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/Mega-Meats-Browns-Plains-1412615272352494/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '8fe2fa54-9799-4540-a54d-e277d73d81e9',
    'Amin''s Halal Butcher and Grill',
    'amin.s.halal.butcher.and.grill@imported-vendor.markethub.com',
    '(07) 3844 6618',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '8fe2fa54-9799-4540-a54d-e277d73d81e9',
    'Amin''s Halal Butcher and Grill',
    '(07) 3844 6618',
    '69 Vulture St, West End QLD 4101, Australia',
    'West End',
    '4101',
    'QLD',
    'gourmet_food',
    'http://www.aminsbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '786ce205-3b69-4796-ae88-148368c2adad',
    'Rock n Roll Butcher Greenslopes - Wholesale Bulk Meat Brisbane',
    'rock.n.roll.butcher.greenslopes.wholesale.bulk.meat.brisbane@imported-vendor.markethub.com',
    '(07) 3394 3365',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '786ce205-3b69-4796-ae88-148368c2adad',
    'Rock n Roll Butcher Greenslopes - Wholesale Bulk Meat Brisbane',
    '(07) 3394 3365',
    '500 Logan Rd, Greenslopes QLD 4120, Australia',
    'Greenslopes',
    '4120',
    'QLD',
    'gourmet_food',
    'http://www.rocknrollbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c689770e-096f-456f-96ab-0dbe31b29f36',
    'The Butcher Shoppe',
    'the.butcher.shoppe@imported-vendor.markethub.com',
    '(07) 3890 3751',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c689770e-096f-456f-96ab-0dbe31b29f36',
    'The Butcher Shoppe',
    '(07) 3890 3751',
    'Cannon Central Shopping Centre Shop 31, 1145 Wynnum Rd, Cannon Hill QLD 4170, Australia',
    'Cannon Hill',
    '4170',
    'QLD',
    'gourmet_food',
    'https://www.thebutchershoppe.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'd38d5b15-73bc-46ef-8dbd-17e654c199b7',
    'Mabrouk & Sons',
    'mabrouk.sons@imported-vendor.markethub.com',
    '(07) 3162 4616',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'd38d5b15-73bc-46ef-8dbd-17e654c199b7',
    'Mabrouk & Sons',
    '(07) 3162 4616',
    'Underwood Marketplace, 3215 Logan Rd, Underwood QLD 4119, Australia',
    'Underwood',
    '4119',
    'QLD',
    'gourmet_food',
    'http://mabrouksons.com/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '93eeaacd-535a-4e6e-9ccc-3466d4dd8005',
    'Super Butcher Eagle Farm',
    'super.butcher.eagle.farm@imported-vendor.markethub.com',
    '1300 002 493',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '93eeaacd-535a-4e6e-9ccc-3466d4dd8005',
    'Super Butcher Eagle Farm',
    '1300 002 493',
    '18 Eagleview Pl, Eagle Farm QLD 4009, Australia',
    'Eagle Farm',
    '4009',
    'QLD',
    'gourmet_food',
    'http://www.superbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '0d709261-7689-4927-b2f5-225384d47493',
    'The Butcher''s Block',
    'the.butcher.s.block@imported-vendor.markethub.com',
    '(07) 3376 8230',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '0d709261-7689-4927-b2f5-225384d47493',
    'The Butcher''s Block',
    '(07) 3376 8230',
    'shop 8/90 Horizon Dr, Middle Park QLD 4074, Australia',
    'Middle Park',
    '4074',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '130c8bc6-8c9a-4c62-b33f-a3a308191b84',
    'Meat Bank',
    'meat.bank@imported-vendor.markethub.com',
    '(07) 3345 5113',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '130c8bc6-8c9a-4c62-b33f-a3a308191b84',
    'Meat Bank',
    '(07) 3345 5113',
    '358 Mains Rd, Sunnybank QLD 4109, Australia',
    'Sunnybank',
    '4109',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b2ab8b5a-d5e9-4478-bc29-f1e9b3069f1c',
    'Adam''s Continental Smallgoods',
    'adam.s.continental.smallgoods@imported-vendor.markethub.com',
    '(07) 3271 3044',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b2ab8b5a-d5e9-4478-bc29-f1e9b3069f1c',
    'Adam''s Continental Smallgoods',
    '(07) 3271 3044',
    '206 Cobalt St, Carole Park QLD 4300, Australia',
    'Carole Park',
    '4300',
    'QLD',
    'gourmet_food',
    'http://adamssmallgoods.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '9420aeb9-69fb-494b-926a-0e75dced0664',
    'Sherwood Rd Organic Meats',
    'sherwood.rd.organic.meats@imported-vendor.markethub.com',
    '(07) 3379 3815',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '9420aeb9-69fb-494b-926a-0e75dced0664',
    'Sherwood Rd Organic Meats',
    '(07) 3379 3815',
    '385 Sherwood Rd, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'gourmet_food',
    'http://www.sherwoodrdorganics.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3910f151-fa83-4e71-b35b-85a524fb6f46',
    'Annerley Meats',
    'annerley.meats@imported-vendor.markethub.com',
    '(07) 3848 3336',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3910f151-fa83-4e71-b35b-85a524fb6f46',
    'Annerley Meats',
    '(07) 3848 3336',
    '502 Ipswich Rd, Annerley QLD 4103, Australia',
    'Annerley',
    '4103',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/Annerley-Meats-152298491572478',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '384b5d87-196b-4429-af2c-405ec44049e8',
    'Thomas meat Runcorn',
    'thomas.meat.runcorn@imported-vendor.markethub.com',
    '(07) 3423 1337',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '384b5d87-196b-4429-af2c-405ec44049e8',
    'Thomas meat Runcorn',
    '(07) 3423 1337',
    'plaza Shopping Center, 258 Warrigal Rd, Runcorn QLD 4113, Australia',
    'Runcorn',
    '4113',
    'QLD',
    'gourmet_food',
    'http://thomasmeat.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'df3171d8-61cd-411a-a938-e8e168ff159d',
    'Two Butchers',
    'two.butchers@imported-vendor.markethub.com',
    '(07) 3470 5305',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'df3171d8-61cd-411a-a938-e8e168ff159d',
    'Two Butchers',
    '(07) 3470 5305',
    'Shop 207A/1 Main St, Springfield Central QLD 4300, Australia',
    'Springfield Central',
    '4300',
    'QLD',
    'gourmet_food',
    'http://www.twobutchers.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '37eb4297-ba77-4051-b853-05ed4f8b0485',
    'Xiangbalao Butcher Shop 乡巴佬肉铺',
    'xiangbalao.butcher.shop.乡巴佬肉铺@imported-vendor.markethub.com',
    '0403 754 347',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '37eb4297-ba77-4051-b853-05ed4f8b0485',
    'Xiangbalao Butcher Shop 乡巴佬肉铺',
    '0403 754 347',
    '663 Beenleigh Rd, Sunnybank Hills QLD 4109, Australia',
    'Sunnybank Hills',
    '4109',
    'QLD',
    'gourmet_food',
    'http://sunnybank-hills.edan.io/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '169401fe-b8b0-4ce5-b65a-354986a0425e',
    'Hauff''s Butchery',
    'hauff.s.butchery@imported-vendor.markethub.com',
    '(07) 3344 4700',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '169401fe-b8b0-4ce5-b65a-354986a0425e',
    'Hauff''s Butchery',
    '(07) 3344 4700',
    'Market Square Shopping Centre, Mains Rd, Sunnybank QLD 4109, Australia',
    'Sunnybank',
    '4109',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/Hauffs-Butchery-584640414965726/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '916eda73-344f-489b-a6ef-da98b5e69b5f',
    'PA Halal Butcher & Grocer',
    'pa.halal.butcher.grocer@imported-vendor.markethub.com',
    '(07) 3393 1213',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '916eda73-344f-489b-a6ef-da98b5e69b5f',
    'PA Halal Butcher & Grocer',
    '(07) 3393 1213',
    '2/250 Ipswich Rd, Woolloongabba QLD 4102, Australia',
    'Woolloongabba',
    '4102',
    'QLD',
    'gourmet_food',
    'https://www.pahalalbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '39c30393-725c-4680-a2e4-97f3a0eb5574',
    'Big Gun Wholesale Meats',
    'big.gun.wholesale.meats@imported-vendor.markethub.com',
    '(07) 3341 2033',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '39c30393-725c-4680-a2e4-97f3a0eb5574',
    'Big Gun Wholesale Meats',
    '(07) 3341 2033',
    '2912 Logan Rd, Underwood QLD 4119, Australia',
    'Underwood',
    '4119',
    'QLD',
    'gourmet_food',
    'http://www.biggun.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3f64fecd-19ea-4de3-99be-51b2fc59a21e',
    'Courtney''s Quality Meat',
    'courtney.s.quality.meat@imported-vendor.markethub.com',
    '(07) 3379 7560',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3f64fecd-19ea-4de3-99be-51b2fc59a21e',
    'Courtney''s Quality Meat',
    '(07) 3379 7560',
    '158 Graceville Ave, Graceville QLD 4075, Australia',
    'Graceville',
    '4075',
    'QLD',
    'gourmet_food',
    'http://www.courtneysqualitymeat.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a986e866-aab9-40ec-b541-41a3e72c8b0b',
    'Moey''s Butcher',
    'moey.s.butcher@imported-vendor.markethub.com',
    '(07) 3418 9176',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a986e866-aab9-40ec-b541-41a3e72c8b0b',
    'Moey''s Butcher',
    '(07) 3418 9176',
    '17/31 Springfield Lakes Blvd, Springfield Lakes QLD 4300, Australia',
    'Springfield Lakes',
    '4300',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f6718e8b-afdc-444f-9487-3f6041a719cd',
    'Butcher Cuts & Co',
    'butcher.cuts.co@imported-vendor.markethub.com',
    '(07) 3133 2959',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f6718e8b-afdc-444f-9487-3f6041a719cd',
    'Butcher Cuts & Co',
    '(07) 3133 2959',
    'Springwood Mall, Shop 16 Fitzgerald Ave, Springwood QLD 4127, Australia',
    'Springwood',
    '4127',
    'QLD',
    'gourmet_food',
    'https://butchercutsandco.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f5d59ecb-3332-4e27-95f7-46579e41748f',
    'Meat At Billy''s - Rosalie',
    'meat.at.billy.s.rosalie@imported-vendor.markethub.com',
    '(07) 3366 2912',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f5d59ecb-3332-4e27-95f7-46579e41748f',
    'Meat At Billy''s - Rosalie',
    '(07) 3366 2912',
    '3/155 Baroona Rd, Paddington QLD 4064, Australia',
    'Paddington',
    '4064',
    'QLD',
    'gourmet_food',
    'https://meatatbillys.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '931836f8-73a7-4038-a471-13f01500bc93',
    'Hans Wacol Factory Outlet',
    'hans.wacol.factory.outlet@imported-vendor.markethub.com',
    '(07) 3423 5230',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '931836f8-73a7-4038-a471-13f01500bc93',
    'Hans Wacol Factory Outlet',
    '(07) 3423 5230',
    '79 Mcroyle St, Wacol QLD 4076, Australia',
    'Wacol',
    '4076',
    'QLD',
    'gourmet_food',
    'http://www.hans.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'ba780784-7d99-46ad-a763-81cfab07c817',
    'A & M Discount Quality Meats',
    'a.m.discount.quality.meats@imported-vendor.markethub.com',
    '(07) 3343 9118',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'ba780784-7d99-46ad-a763-81cfab07c817',
    'A & M Discount Quality Meats',
    '(07) 3343 9118',
    'Mount Gravatt Plaza, Shop 10/11 Creek Rd, Mount Gravatt QLD 4122, Australia',
    'Mount Gravatt',
    '4122',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'af5a2bc5-c329-42c4-bf0d-66fb5dc48173',
    'Fresha Meats Ltd',
    'fresha.meats.ltd@imported-vendor.markethub.com',
    '0435 764 169',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'af5a2bc5-c329-42c4-bf0d-66fb5dc48173',
    'Fresha Meats Ltd',
    '0435 764 169',
    '365 Mortimer Rd, Acacia Ridge QLD 4110, Australia',
    'Acacia Ridge',
    '4110',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '942eeecf-e700-41e0-8dcd-783de30225f0',
    'de Beer Meat Co.',
    'de.beer.meat.co@imported-vendor.markethub.com',
    '(07) 3245 3005',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '942eeecf-e700-41e0-8dcd-783de30225f0',
    'de Beer Meat Co.',
    '(07) 3245 3005',
    '7 Shoebury St, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'gourmet_food',
    'http://www.dbmc.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'ce54d878-036e-48d1-b009-ba6adaecccd7',
    'Mega Meats',
    'mega.meats@imported-vendor.markethub.com',
    '(07) 3143 0763',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'ce54d878-036e-48d1-b009-ba6adaecccd7',
    'Mega Meats',
    '(07) 3143 0763',
    '2/116-122 Brisbane Rd, Booval QLD 4304, Australia',
    'Booval',
    '4304',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'baea850a-87c1-4461-9a5d-d1f8d82cc308',
    'Rode Meats',
    'rode.meats@imported-vendor.markethub.com',
    '(07) 3359 7425',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'baea850a-87c1-4461-9a5d-d1f8d82cc308',
    'Rode Meats',
    '(07) 3359 7425',
    '269 Appleby Rd, Stafford Heights QLD 4053, Australia',
    'Stafford Heights',
    '4053',
    'QLD',
    'gourmet_food',
    'https://rodemeats.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '17c6f48f-bc61-417c-9876-0a912bfdc679',
    'The Meat-Ting Place Organics - Darra',
    'the.meat.ting.place.organics.darra@imported-vendor.markethub.com',
    '(07) 3162 4899',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '17c6f48f-bc61-417c-9876-0a912bfdc679',
    'The Meat-Ting Place Organics - Darra',
    '(07) 3162 4899',
    '1/235 Monier Rd, Darra QLD 4073, Australia',
    'Darra',
    '4073',
    'QLD',
    'gourmet_food',
    'http://tmpo.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '978a0128-f060-4082-b237-ba58a44e7e38',
    'G.E. Mallan Bulk Meats',
    'g.e.mallan.bulk.meats@imported-vendor.markethub.com',
    '(07) 3848 4708',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '978a0128-f060-4082-b237-ba58a44e7e38',
    'G.E. Mallan Bulk Meats',
    '(07) 3848 4708',
    '7 Byrnes St, Fairfield QLD 4103, Australia',
    'Fairfield',
    '4103',
    'QLD',
    'gourmet_food',
    'https://www.mallans.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '83808404-e3f9-4d9f-921c-cca6aab3dad8',
    'Super Butcher Albany Creek',
    'super.butcher.albany.creek@imported-vendor.markethub.com',
    '0478 007 841',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '83808404-e3f9-4d9f-921c-cca6aab3dad8',
    'Super Butcher Albany Creek',
    '0478 007 841',
    'Village, Shop number 2/700 Albany Creek Rd, Albany Creek QLD 4035, Australia',
    'Albany Creek',
    '4035',
    'QLD',
    'gourmet_food',
    'http://www.superbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'dd9a2e8a-06a1-433a-b2cd-5ea32635782b',
    'Meat At Billy''s - Ashgrove',
    'meat.at.billy.s.ashgrove@imported-vendor.markethub.com',
    '(07) 3366 2912',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'dd9a2e8a-06a1-433a-b2cd-5ea32635782b',
    'Meat At Billy''s - Ashgrove',
    '(07) 3366 2912',
    '241 Waterworks Rd, Ashgrove QLD 4060, Australia',
    'Ashgrove',
    '4060',
    'QLD',
    'gourmet_food',
    'https://meatatbillys.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '64e91dc9-aa82-4774-a7d7-bc07ae21ebd2',
    'Dinmore meat works',
    'dinmore.meat.works@imported-vendor.markethub.com',
    '(07) 3810 2100',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '64e91dc9-aa82-4774-a7d7-bc07ae21ebd2',
    'Dinmore meat works',
    '(07) 3810 2100',
    '2 Lock Way, Riverview QLD 4303, Australia',
    'Riverview',
    '4303',
    'QLD',
    'gourmet_food',
    'http://www.jbssa.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '8ed23048-a0e6-4a7a-ab91-096c5692d232',
    'Super Butcher Wynnum',
    'super.butcher.wynnum@imported-vendor.markethub.com',
    '0400 155 833',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '8ed23048-a0e6-4a7a-ab91-096c5692d232',
    'Super Butcher Wynnum',
    '0400 155 833',
    '2021 Wynnum Rd Shop B1/B2, Wynnum West QLD 4178, Australia',
    'Wynnum West',
    '4178',
    'QLD',
    'gourmet_food',
    'https://www.superbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '4393ee27-8cbd-4300-ae85-0ae448ed38e7',
    'Dhaka Halal Butcher And Grocery Shop',
    'dhaka.halal.butcher.and.grocery.shop@imported-vendor.markethub.com',
    '0470 201 479',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '4393ee27-8cbd-4300-ae85-0ae448ed38e7',
    'Dhaka Halal Butcher And Grocery Shop',
    '0470 201 479',
    '4/146 Scotts Rd, Darra QLD 4076, Australia',
    'Darra',
    '4076',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/dhaka4076',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '6a4e563d-8d10-4824-9091-65bcf4f64bce',
    'Butcher Sons & Co',
    'butcher.sons.co@imported-vendor.markethub.com',
    '0434 293 696',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '6a4e563d-8d10-4824-9091-65bcf4f64bce',
    'Butcher Sons & Co',
    '0434 293 696',
    '3/662 Compton Rd, Calamvale QLD 4109, Australia',
    'Calamvale',
    '4109',
    'QLD',
    'gourmet_food',
    'https://m.facebook.com/butchersonsandco/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '0e82e44d-ce63-40a7-a08e-0675df582221',
    'Gordon and Luxton Gourmet Butcher',
    'gordon.and.luxton.gourmet.butcher@imported-vendor.markethub.com',
    '(07) 3379 4280',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '0e82e44d-ce63-40a7-a08e-0675df582221',
    'Gordon and Luxton Gourmet Butcher',
    '(07) 3379 4280',
    '2/365 Honour Ave, Graceville QLD 4075, Australia',
    'Graceville',
    '4075',
    'QLD',
    'gourmet_food',
    'https://gordonluxtonbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '8da77652-7856-4c8e-ac37-be7531bb3eca',
    'Rayner''s Meats',
    'rayner.s.meats@imported-vendor.markethub.com',
    '(07) 3358 2445',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '8da77652-7856-4c8e-ac37-be7531bb3eca',
    'Rayner''s Meats',
    '(07) 3358 2445',
    'Merthyr Village, 11/85 Merthyr Rd, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c076d9bc-e728-4774-b189-7a5ebc4be0fc',
    'Zac''s Continental Butchery',
    'zac.s.continental.butchery@imported-vendor.markethub.com',
    '(07) 3800 9952',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c076d9bc-e728-4774-b189-7a5ebc4be0fc',
    'Zac''s Continental Butchery',
    '(07) 3800 9952',
    '8/3358-3374 Mount Lindesay Hwy, Regents Park QLD 4118, Australia',
    'Regents Park',
    '4118',
    'QLD',
    'gourmet_food',
    'http://www.zacscontinental.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'e52832bf-1e59-433a-be62-8a74e9e7e633',
    'Viti Fresh Halal Butcher',
    'viti.fresh.halal.butcher@imported-vendor.markethub.com',
    '(07) 3418 4161',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'e52832bf-1e59-433a-be62-8a74e9e7e633',
    'Viti Fresh Halal Butcher',
    '(07) 3418 4161',
    '23/183 Kruger Parade, Redbank Plains QLD 4301, Australia',
    'Redbank Plains',
    '4301',
    'QLD',
    'gourmet_food',
    'https://m.facebook.com/100063174733174/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '66cb00d0-766c-49b9-bc26-3ab226019a04',
    'Summerville Quality Meats',
    'summerville.quality.meats@imported-vendor.markethub.com',
    '(07) 3282 1778',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '66cb00d0-766c-49b9-bc26-3ab226019a04',
    'Summerville Quality Meats',
    '(07) 3282 1778',
    '43 Brisbane Rd, Ebbw Vale QLD 4304, Australia',
    'Ebbw Vale',
    '4304',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/pages/Summerville-Quality-Meats-Ebbwvale/903421766385930',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'd9becca4-95e7-40dc-b741-2626dbeebb52',
    'Hillman Meat Company',
    'hillman.meat.company@imported-vendor.markethub.com',
    '(07) 3279 0370',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'd9becca4-95e7-40dc-b741-2626dbeebb52',
    'Hillman Meat Company',
    '(07) 3279 0370',
    '97 Jijaws St, Sumner QLD 4074, Australia',
    'Sumner',
    '4074',
    'QLD',
    'gourmet_food',
    'http://www.hillmans.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '0df84dda-9391-42e7-8cce-20a81cd07927',
    'Hillman Meat Company',
    'hillman.meat.company@imported-vendor.markethub.com',
    '(07) 3871 1112',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '0df84dda-9391-42e7-8cce-20a81cd07927',
    'Hillman Meat Company',
    '(07) 3871 1112',
    '209 Moggill Rd, Taringa QLD 4068, Australia',
    'Taringa',
    '4068',
    'QLD',
    'gourmet_food',
    'http://www.hillmans.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'bbf4de0d-9d67-44d0-a07d-7547dea842f5',
    'The Banger Shack',
    'the.banger.shack@imported-vendor.markethub.com',
    '(07) 3349 4436',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'bbf4de0d-9d67-44d0-a07d-7547dea842f5',
    'The Banger Shack',
    '(07) 3349 4436',
    'Wishart Shopping Village, Shop 2/13 Shillington Pl, Wishart QLD 4122, Australia',
    'Wishart',
    '4122',
    'QLD',
    'gourmet_food',
    'http://www.thebangershack.com/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '217bdb84-10b2-489f-a36f-32d20d769402',
    'Clancy James Gourmet Butcher',
    'clancy.james.gourmet.butcher@imported-vendor.markethub.com',
    '(07) 3876 0633',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '217bdb84-10b2-489f-a36f-32d20d769402',
    'Clancy James Gourmet Butcher',
    '(07) 3876 0633',
    'Shop 10/144 Indooroopilly Rd, Taringa QLD 4068, Australia',
    'Taringa',
    '4068',
    'QLD',
    'gourmet_food',
    'https://www.clancyjames.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a7b55ccf-c3bd-45c7-999d-ac79b0b4435f',
    'Market Square Butcher',
    'market.square.butcher@imported-vendor.markethub.com',
    '0499 404 246',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a7b55ccf-c3bd-45c7-999d-ac79b0b4435f',
    'Market Square Butcher',
    '0499 404 246',
    'Shop 15/341 Mains Rd, Sunnybank QLD 4109, Australia',
    'Sunnybank',
    '4109',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3f760ede-2e1f-4b17-9c3b-ac659fe681fd',
    'Augusta Farms Meat Market',
    'augusta.farms.meat.market@imported-vendor.markethub.com',
    NULL,
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3f760ede-2e1f-4b17-9c3b-ac659fe681fd',
    'Augusta Farms Meat Market',
    NULL,
    'Shop 1/3242 Old Cleveland Rd, Chandler QLD 4155, Australia',
    'Chandler',
    '4155',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'e2d91df6-fe56-4b83-a05a-c5cbca3b9738',
    'TopCut Butchery',
    'topcut.butchery@imported-vendor.markethub.com',
    '(07) 3133 2570',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'e2d91df6-fe56-4b83-a05a-c5cbca3b9738',
    'TopCut Butchery',
    '(07) 3133 2570',
    '3 North Rd, Logan Central QLD 4114, Australia',
    'Logan Central',
    '4114',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '72c8e732-531b-47ef-9a34-c3ad88d37b17',
    'Cool Meat Direct',
    'cool.meat.direct@imported-vendor.markethub.com',
    '(07) 3379 4448',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '72c8e732-531b-47ef-9a34-c3ad88d37b17',
    'Cool Meat Direct',
    '(07) 3379 4448',
    '130 Oxley Station Rd, Oxley QLD 4075, Australia',
    'Oxley',
    '4075',
    'QLD',
    'gourmet_food',
    'http://www.coolmeatdirect.com/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '68aad7ac-bffe-4364-a688-7613564d6ab4',
    'Hunt & Co Quality Meats',
    'hunt.co.quality.meats@imported-vendor.markethub.com',
    '(07) 3202 6221',
    'csv_import_butcher',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '68aad7ac-bffe-4364-a688-7613564d6ab4',
    'Hunt & Co Quality Meats',
    '(07) 3202 6221',
    '3366 Moggill Rd, Moggill QLD 4070, Australia',
    'Moggill',
    '4070',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BUTCHER directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '728e5770-f574-490f-b7f2-406fd2c89055',
    'Montjoie Patisserie',
    'montjoie.patisserie@imported-vendor.markethub.com',
    '0421 643 310',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '728e5770-f574-490f-b7f2-406fd2c89055',
    'Montjoie Patisserie',
    '0421 643 310',
    '100 Melbourne St, South Brisbane QLD 4101, Australia',
    'South Brisbane',
    '4101',
    'QLD',
    'gourmet_food',
    'http://montjoiepatisserie.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '6a7e8830-6340-459c-934c-44ebd6a08952',
    'Cordelia Sourdough Bakehouse',
    'cordelia.sourdough.bakehouse@imported-vendor.markethub.com',
    '(07) 2104 2744',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '6a7e8830-6340-459c-934c-44ebd6a08952',
    'Cordelia Sourdough Bakehouse',
    '(07) 2104 2744',
    '47 Cordelia St, South Brisbane QLD 4101, Australia',
    'South Brisbane',
    '4101',
    'QLD',
    'gourmet_food',
    'http://www.cordeliasourdoughbakehouse.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'd0fee976-36c1-43bc-abc5-8b537dee460a',
    'Lena''s Bakehouse',
    'lena.s.bakehouse@imported-vendor.markethub.com',
    '0411 391 806',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'd0fee976-36c1-43bc-abc5-8b537dee460a',
    'Lena''s Bakehouse',
    '0411 391 806',
    'Post Office Square, Foodcourt/280 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'https://postofficesquare.com.au/tenant/lenas-bakehouse/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'e181b43f-9a18-4651-8de4-4306ad86aaa6',
    'C''est Du Gateau Bakery',
    'c.est.du.gateau.bakery@imported-vendor.markethub.com',
    '0429 077 193',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'e181b43f-9a18-4651-8de4-4306ad86aaa6',
    'C''est Du Gateau Bakery',
    '0429 077 193',
    '182 Grey St, South Brisbane QLD 4101, Australia',
    'South Brisbane',
    '4101',
    'QLD',
    'gourmet_food',
    'http://www.cestdugateau.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '80ed7796-f709-48e7-bd8c-2e4573bb21cd',
    'Le Bon Choix',
    'le.bon.choix@imported-vendor.markethub.com',
    '(07) 3229 9260',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '80ed7796-f709-48e7-bd8c-2e4573bb21cd',
    'Le Bon Choix',
    '(07) 3229 9260',
    '379 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'https://www.lebonchoixbakery.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'fdf0e597-3fab-4332-b00a-afc1b8f657fb',
    'Christian Jacques Bakery',
    'christian.jacques.bakery@imported-vendor.markethub.com',
    '0432 009 006',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'fdf0e597-3fab-4332-b00a-afc1b8f657fb',
    'Christian Jacques Bakery',
    '0432 009 006',
    '8 Baildon St, Kangaroo Point QLD 4169, Australia',
    'Kangaroo Point',
    '4169',
    'QLD',
    'gourmet_food',
    'http://christianjacquespastries.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '4a849e8c-636a-4543-a822-85c13418e5a1',
    'Lune Croissanterie South Brisbane',
    'lune.croissanterie.south.brisbane@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '4a849e8c-636a-4543-a822-85c13418e5a1',
    'Lune Croissanterie South Brisbane',
    NULL,
    '15 Manning St, South Brisbane QLD 4101, Australia',
    'South Brisbane',
    '4101',
    'QLD',
    'gourmet_food',
    'http://www.lunecroissanterie.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'afb2f97c-5f42-4b83-bf2b-4dfc7d79f36f',
    'Flour & Chocolate Patisserie Morningside',
    'flour.chocolate.patisserie.morningside@imported-vendor.markethub.com',
    '(07) 3161 6246',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'afb2f97c-5f42-4b83-bf2b-4dfc7d79f36f',
    'Flour & Chocolate Patisserie Morningside',
    '(07) 3161 6246',
    '4/621 Wynnum Rd, Morningside QLD 4170, Australia',
    'Morningside',
    '4170',
    'QLD',
    'gourmet_food',
    'http://www.flourandchocolate.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '912ed9c7-d381-4ff5-ac09-17f4660a2d90',
    'Madders Brothers Patisserie',
    'madders.brothers.patisserie@imported-vendor.markethub.com',
    '(07) 3376 1101',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '912ed9c7-d381-4ff5-ac09-17f4660a2d90',
    'Madders Brothers Patisserie',
    '(07) 3376 1101',
    '30 Guide St, Jamboree Heights QLD 4074, Australia',
    'Jamboree Heights',
    '4074',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/Madders-Brothers-Patisserie-159138457500356/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7f406559-da98-4d4e-a920-a9c04b9e46a5',
    'The Whisk Fine Patisserie',
    'the.whisk.fine.patisserie@imported-vendor.markethub.com',
    '0466 648 078',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7f406559-da98-4d4e-a920-a9c04b9e46a5',
    'The Whisk Fine Patisserie',
    '0466 648 078',
    '155 Charlotte St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'https://www.intersectionfd.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '9cd22d82-411e-40fe-878b-b83341489543',
    'Sprout Artisan Bakery',
    'sprout.artisan.bakery@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '9cd22d82-411e-40fe-878b-b83341489543',
    'Sprout Artisan Bakery',
    NULL,
    '76 James St, Fortitude Valley QLD 4006, Australia',
    'Fortitude Valley',
    '4006',
    'QLD',
    'gourmet_food',
    'http://sproutartisanbakery.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '56e26806-82c6-4512-8453-d08269567220',
    'Dello Mano Cake & Brownie Boutique',
    'dello.mano.cake.brownie.boutique@imported-vendor.markethub.com',
    '1300 033 467',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '56e26806-82c6-4512-8453-d08269567220',
    'Dello Mano Cake & Brownie Boutique',
    '1300 033 467',
    'Wintergarden Shop K7, Ground Level/171-209 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'http://www.dellomano.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '1f9ad32b-c6aa-4e99-9c6d-4d1544b55db8',
    'Danny''s Bread',
    'danny.s.bread@imported-vendor.markethub.com',
    '0423 747 741',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '1f9ad32b-c6aa-4e99-9c6d-4d1544b55db8',
    'Danny''s Bread',
    '0423 747 741',
    '5/113 Commercial Rd, Teneriffe QLD 4005, Australia',
    'Teneriffe',
    '4005',
    'QLD',
    'gourmet_food',
    'http://www.dannysbread.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '85e62df8-d2dc-4253-9a60-ea096579fbda',
    'Batch Cookie Bar x Lunar Pies',
    'batch.cookie.bar.x.lunar.pies@imported-vendor.markethub.com',
    '0449 698 823',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '85e62df8-d2dc-4253-9a60-ea096579fbda',
    'Batch Cookie Bar x Lunar Pies',
    '0449 698 823',
    'Uptown, Level E, Shop 078/91 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'https://www.batchcookiebar.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '087ce4d6-7b7d-4b1c-919b-71f189553b05',
    'Winston''s Bakeshop and Resto',
    'winston.s.bakeshop.and.resto@imported-vendor.markethub.com',
    '0428 357 008',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '087ce4d6-7b7d-4b1c-919b-71f189553b05',
    'Winston''s Bakeshop and Resto',
    '0428 357 008',
    'Shop1/84 Wembley Rd, Logan Central QLD 4114, Australia',
    'Logan Central',
    '4114',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/groups/941153832752660/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f038c948-62ac-4bd8-91ed-6135609f08ce',
    'BAKE-IT BAKERY AND CAFE',
    'bake.it.bakery.and.cafe@imported-vendor.markethub.com',
    '0490 607 278',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f038c948-62ac-4bd8-91ed-6135609f08ce',
    'BAKE-IT BAKERY AND CAFE',
    '0490 607 278',
    '199 Elizabeth St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'https://www.bakeitbakery.online/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'ba2eef9c-7839-4068-99af-4ba48b9af05e',
    'King of Cakes',
    'king.of.cakes@imported-vendor.markethub.com',
    '(07) 3870 3729',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'ba2eef9c-7839-4068-99af-4ba48b9af05e',
    'King of Cakes',
    '(07) 3870 3729',
    '144 Indooroopilly Rd, Taringa QLD 4068, Australia',
    'Taringa',
    '4068',
    'QLD',
    'gourmet_food',
    'http://www.kingofcakes.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f1fbef2f-a784-442f-ab96-caccfe77d799',
    'Bloom Patisserie',
    'bloom.patisserie@imported-vendor.markethub.com',
    '(07) 3706 7566',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f1fbef2f-a784-442f-ab96-caccfe77d799',
    'Bloom Patisserie',
    '(07) 3706 7566',
    'Shop 4, Level 2/341 Mains Rd, Sunnybank QLD 4109, Australia',
    'Sunnybank',
    '4109',
    'QLD',
    'gourmet_food',
    'https://bloompatisserie.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '1fddd631-1402-43f8-b1e1-e8cf7740d9ba',
    'Chouette Cake & Dessert',
    'chouette.cake.dessert@imported-vendor.markethub.com',
    '0411 522 518',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '1fddd631-1402-43f8-b1e1-e8cf7740d9ba',
    'Chouette Cake & Dessert',
    '0411 522 518',
    'Shop 34, 11/21 Kingston Rd, Underwood QLD 4119, Australia',
    'Underwood',
    '4119',
    'QLD',
    'gourmet_food',
    'https://instagram.com/chouettecake',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '83560ffb-0c99-4874-99ef-5ceff06b514c',
    'Petite Treats',
    'petite.treats@imported-vendor.markethub.com',
    '(07) 3832 0090',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '83560ffb-0c99-4874-99ef-5ceff06b514c',
    'Petite Treats',
    '(07) 3832 0090',
    '101 Wickham Ter, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'http://petitetreatsbrisbane.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'dc82346e-8805-4ba7-9dff-0bd3d0eb2f99',
    'BCC DESSERT & CAKE',
    'bcc.dessert.cake@imported-vendor.markethub.com',
    '0451 179 191',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'dc82346e-8805-4ba7-9dff-0bd3d0eb2f99',
    'BCC DESSERT & CAKE',
    '0451 179 191',
    '3/957 Beenleigh Rd, Runcorn QLD 4113, Australia',
    'Runcorn',
    '4113',
    'QLD',
    'gourmet_food',
    'http://www.bccdessertandcake.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3095f66f-2ce8-4f0e-baf3-74865f81529a',
    'Croix Croissant Hillcrest',
    'croix.croissant.hillcrest@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3095f66f-2ce8-4f0e-baf3-74865f81529a',
    'Croix Croissant Hillcrest',
    NULL,
    '85 Coronation Rd, Hillcrest QLD 4118, Australia',
    'Hillcrest',
    '4118',
    'QLD',
    'gourmet_food',
    'https://croixssant.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'fe28aeae-3c4e-4697-a74a-c90f83978123',
    'Reno Fine Patisserie',
    'reno.fine.patisserie@imported-vendor.markethub.com',
    '0452 183 880',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'fe28aeae-3c4e-4697-a74a-c90f83978123',
    'Reno Fine Patisserie',
    '0452 183 880',
    'Shop 4/261 Warrigal Rd, Eight Mile Plains QLD 4113, Australia',
    'Eight Mile Plains',
    '4113',
    'QLD',
    'gourmet_food',
    'https://www.instagram.com/reno_fine_patisserie/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '917d277b-4e8b-4640-90dc-b700f1b1ff7d',
    'La Casa Patisserie',
    'la.casa.patisserie@imported-vendor.markethub.com',
    '(07) 3452 8688',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '917d277b-4e8b-4640-90dc-b700f1b1ff7d',
    'La Casa Patisserie',
    '(07) 3452 8688',
    '12/258 Warrigal Rd, Runcorn QLD 4113, Australia',
    'Runcorn',
    '4113',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/La-Casa-Patisserie-301008687447960/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c647ccf5-9579-4957-85d3-2135b0a8382f',
    'Lune Croissanterie Brisbane CBD',
    'lune.croissanterie.brisbane.cbd@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c647ccf5-9579-4957-85d3-2135b0a8382f',
    'Lune Croissanterie Brisbane CBD',
    NULL,
    'Entrance on Burnett Lane, 79 Adelaide St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'https://www.lunecroissanterie.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '18582eb8-9397-4f9a-8152-b49847104403',
    'Sugar Puff Cafe',
    'sugar.puff.cafe@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '18582eb8-9397-4f9a-8152-b49847104403',
    'Sugar Puff Cafe',
    NULL,
    'K5, Market Square, 341 Mains Rd, Sunnybank QLD 4109, Australia',
    'Sunnybank',
    '4109',
    'QLD',
    'gourmet_food',
    'https://www.instagram.com/sugarpuffcafe/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b4725f21-1e7f-42d2-8400-fd407d6aa8bf',
    'Shibusawa Bakery',
    'shibusawa.bakery@imported-vendor.markethub.com',
    '(07) 3420 1674',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b4725f21-1e7f-42d2-8400-fd407d6aa8bf',
    'Shibusawa Bakery',
    '(07) 3420 1674',
    '127 Creek St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BAKERY directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '81538462-13f1-42fa-8ddc-3bab4dd91472',
    'Le Bon Choix',
    'le.bon.choix@imported-vendor.markethub.com',
    '(07) 3210 6010',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '81538462-13f1-42fa-8ddc-3bab4dd91472',
    'Le Bon Choix',
    '(07) 3210 6010',
    '104 Edward St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'http://www.lebonchoixbakery.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a6689490-68fc-43ea-a874-a1747489dea8',
    'Superthing',
    'superthing@imported-vendor.markethub.com',
    '(07) 3844 2013',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a6689490-68fc-43ea-a874-a1747489dea8',
    'Superthing',
    '(07) 3844 2013',
    '215 Montague Rd, West End QLD 4101, Australia',
    'West End',
    '4101',
    'QLD',
    'gourmet_food',
    'https://www.superthing.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '2cdb0f8c-d44c-41f3-8f73-fef8cbbc0b83',
    'Breadtop Uptown',
    'breadtop.uptown@imported-vendor.markethub.com',
    '(07) 3003 1507',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '2cdb0f8c-d44c-41f3-8f73-fef8cbbc0b83',
    'Breadtop Uptown',
    '(07) 3003 1507',
    'The Myer Centre, Level A, Shop 003/91 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'https://www.breadtop.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'ee209f74-f956-42ac-a9c6-3f14828cf439',
    'The Whisk',
    'the.whisk@imported-vendor.markethub.com',
    '(07) 3343 7543',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'ee209f74-f956-42ac-a9c6-3f14828cf439',
    'The Whisk',
    '(07) 3343 7543',
    '103/20 Sanders St, Upper Mount Gravatt QLD 4122, Australia',
    'Upper Mount Gravatt',
    '4122',
    'QLD',
    'gourmet_food',
    'http://www.thewhisk.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b7bdc7c4-6923-46bf-8153-0ce9c573b429',
    'Le Boulangerie Amour Fou',
    'le.boulangerie.amour.fou@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b7bdc7c4-6923-46bf-8153-0ce9c573b429',
    'Le Boulangerie Amour Fou',
    NULL,
    'Tenancy 88/91 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'http://www.amourfou.me/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7c4cf4ba-a159-4a69-87bc-636cfed1799b',
    'BAKED by Joseph & Ann',
    'baked.by.joseph.ann@imported-vendor.markethub.com',
    '0492 904 881',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7c4cf4ba-a159-4a69-87bc-636cfed1799b',
    'BAKED by Joseph & Ann',
    '0492 904 881',
    '173 Brisbane St, Ipswich QLD 4305, Australia',
    'Ipswich',
    '4305',
    'QLD',
    'gourmet_food',
    'http://www.josephandann.com/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'db18abce-5990-4084-b518-0b135bdde724',
    'Jocelyn''s Provisions',
    'jocelyn.s.provisions@imported-vendor.markethub.com',
    '(07) 3852 3799',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'db18abce-5990-4084-b518-0b135bdde724',
    'Jocelyn''s Provisions',
    '(07) 3852 3799',
    'RW12, 12/46 James St, Fortitude Valley QLD 4006, Australia',
    'Fortitude Valley',
    '4006',
    'QLD',
    'gourmet_food',
    'http://jocelynsprovisions.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'bdc6cde7-d85c-48e4-958a-417f8d7fc704',
    'Banneton Bakery',
    'banneton.bakery@imported-vendor.markethub.com',
    '(07) 3393 2111',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'bdc6cde7-d85c-48e4-958a-417f8d7fc704',
    'Banneton Bakery',
    '(07) 3393 2111',
    '25 Balaclava St, Woolloongabba QLD 4102, Australia',
    'Woolloongabba',
    '4102',
    'QLD',
    'gourmet_food',
    'http://www.banneton.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'bd0b39d4-5f6f-4a5e-9ce5-388fadc97c71',
    'Sweet Land Bakery',
    'sweet.land.bakery@imported-vendor.markethub.com',
    '0470 503 336',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'bd0b39d4-5f6f-4a5e-9ce5-388fadc97c71',
    'Sweet Land Bakery',
    '0470 503 336',
    '195-203 Moggill Rd, Taringa QLD 4068, Australia',
    'Taringa',
    '4068',
    'QLD',
    'gourmet_food',
    'http://sweet-land-bakery.edan.io/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3db358ef-c515-4dd2-8f8a-16c4692e6726',
    'Miettes Bakery',
    'miettes.bakery@imported-vendor.markethub.com',
    '(07) 2142 6666',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3db358ef-c515-4dd2-8f8a-16c4692e6726',
    'Miettes Bakery',
    '(07) 2142 6666',
    '8/158 Graceville Ave, Graceville QLD 4075, Australia',
    'Graceville',
    '4075',
    'QLD',
    'gourmet_food',
    'https://www.miettesbakery.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a9b12938-e395-4197-96bf-81b6d91d582e',
    'Small Cake Place',
    'small.cake.place@imported-vendor.markethub.com',
    '0451 500 257',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a9b12938-e395-4197-96bf-81b6d91d582e',
    'Small Cake Place',
    '0451 500 257',
    'Shop 3/83 Mango St, Runcorn QLD 4113, Australia',
    'Runcorn',
    '4113',
    'QLD',
    'gourmet_food',
    'http://www.smallcakeplace.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '934b51f5-7900-4e19-a8cd-b45073a631c6',
    'Baker D.Chirico Brisbane',
    'baker.d.chirico.brisbane@imported-vendor.markethub.com',
    '0455 319 385',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '934b51f5-7900-4e19-a8cd-b45073a631c6',
    'Baker D.Chirico Brisbane',
    '0455 319 385',
    '18 Longland St, Newstead QLD 4006, Australia',
    'Newstead',
    '4006',
    'QLD',
    'gourmet_food',
    'https://www.instagram.com/bakerdchirico?igsh=czF0aW5veGl3ZGt6',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c7a2b262-9b05-471c-bd81-e350504621eb',
    'Queen Amann Bakery',
    'queen.amann.bakery@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c7a2b262-9b05-471c-bd81-e350504621eb',
    'Queen Amann Bakery',
    NULL,
    '20 King St, Bowen Hills QLD 4006, Australia',
    'Bowen Hills',
    '4006',
    'QLD',
    'gourmet_food',
    'https://www.queenamann.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3c4cd69f-a365-4af3-b6d3-4bf5e55c483d',
    'THE FLOUR ROBERTSON',
    'the.flour.robertson@imported-vendor.markethub.com',
    '0491 655 045',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3c4cd69f-a365-4af3-b6d3-4bf5e55c483d',
    'THE FLOUR ROBERTSON',
    '0491 655 045',
    'SHOP 5/17 Barrett St, Robertson QLD 4109, Australia',
    'Robertson',
    '4109',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BAKERY directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '166153b1-735f-4dc4-9927-3a6ff8b61ab9',
    'Petit Choux Bakery',
    'petit.choux.bakery@imported-vendor.markethub.com',
    '0434 647 732',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '166153b1-735f-4dc4-9927-3a6ff8b61ab9',
    'Petit Choux Bakery',
    '0434 647 732',
    '30 Gladstone Rd, Highgate Hill QLD 4101, Australia',
    'Highgate Hill',
    '4101',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BAKERY directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a7b42667-fed1-45e5-9ad5-705778418c39',
    'Kabul Sweets Bakery',
    'kabul.sweets.bakery@imported-vendor.markethub.com',
    '(07) 3162 7444',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a7b42667-fed1-45e5-9ad5-705778418c39',
    'Kabul Sweets Bakery',
    '(07) 3162 7444',
    '1102 Beaudesert Rd, Acacia Ridge QLD 4110, Australia',
    'Acacia Ridge',
    '4110',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BAKERY directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '72b91aed-b86b-470f-a32b-be7db6fd081a',
    'Carby''s Bakehouse',
    'carby.s.bakehouse@imported-vendor.markethub.com',
    '(07) 3266 5522',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '72b91aed-b86b-470f-a32b-be7db6fd081a',
    'Carby''s Bakehouse',
    '(07) 3266 5522',
    '153 Hamilton Rd, Wavell Heights QLD 4012, Australia',
    'Wavell Heights',
    '4012',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/Carbys-Bakehouse-2023019284640175/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '6d79057c-b6b1-4e85-bc57-d93a4fafb4b0',
    'Brisbane Bakehouses',
    'brisbane.bakehouses@imported-vendor.markethub.com',
    '(07) 3844 9758',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '6d79057c-b6b1-4e85-bc57-d93a4fafb4b0',
    'Brisbane Bakehouses',
    '(07) 3844 9758',
    '167 Vulture St, South Brisbane QLD 4101, Australia',
    'South Brisbane',
    '4101',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BAKERY directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '2cbf6a1b-da3d-4d12-934b-d8b612ba536b',
    'Nomad Breads',
    'nomad.breads@imported-vendor.markethub.com',
    '(07) 2139 9000',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '2cbf6a1b-da3d-4d12-934b-d8b612ba536b',
    'Nomad Breads',
    '(07) 2139 9000',
    '45 Kiln St, Darra QLD 4076, Australia',
    'Darra',
    '4076',
    'QLD',
    'gourmet_food',
    'https://nomadbreads.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f41ce042-59c7-48d7-b078-a3674fc47703',
    'VANDOUGH Browns Plains',
    'vandough.browns.plains@imported-vendor.markethub.com',
    '0468 389 768',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f41ce042-59c7-48d7-b078-a3674fc47703',
    'VANDOUGH Browns Plains',
    '0468 389 768',
    'Grand Plaza, 27/49 Browns Plains Rd, Browns Plains QLD 4118, Australia',
    'Browns Plains',
    '4118',
    'QLD',
    'gourmet_food',
    'https://vandough.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f44e1840-f33f-4193-aa47-d66d8c093314',
    'KURIMU x Hokkaido Baked Cheese Tart Uptown Brisbane',
    'kurimu.x.hokkaido.baked.cheese.tart.uptown.brisbane@imported-vendor.markethub.com',
    '(07) 3191 4524',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f44e1840-f33f-4193-aa47-d66d8c093314',
    'KURIMU x Hokkaido Baked Cheese Tart Uptown Brisbane',
    '(07) 3191 4524',
    'Shop 006A (Level A), Uptown, 91 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'gourmet_food',
    'http://www.hbctaus.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '07883ebf-7d48-448c-9b9c-30889a24af36',
    'The Cake Of Greenery',
    'the.cake.of.greenery@imported-vendor.markethub.com',
    '0478 547 471',
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '07883ebf-7d48-448c-9b9c-30889a24af36',
    'The Cake Of Greenery',
    '0478 547 471',
    'Shop 1/57 Emerald Dr, Regents Park QLD 4118, Australia',
    'Regents Park',
    '4118',
    'QLD',
    'gourmet_food',
    'https://thecakeofgreenery.com.au/',
    NULL,
    'Imported from BAKERY directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b774edbe-51dc-4b1b-87e4-e2e6fb0bf25e',
    'Doolandella Bakehouse',
    'doolandella.bakehouse@imported-vendor.markethub.com',
    NULL,
    'csv_import_bakery',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b774edbe-51dc-4b1b-87e4-e2e6fb0bf25e',
    'Doolandella Bakehouse',
    NULL,
    '2/20 Brookside St, Doolandella QLD 4077, Australia',
    'Doolandella',
    '4077',
    'QLD',
    'gourmet_food',
    NULL,
    NULL,
    'Imported from BAKERY directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3c8a09ec-abc3-4694-b70c-302c4e17ad11',
    'Flowers by Jane',
    'flowers.by.jane@imported-vendor.markethub.com',
    '(07) 3229 7644',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3c8a09ec-abc3-4694-b70c-302c4e17ad11',
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
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '08bc7a42-083b-42ca-b39b-d43b885dea04',
    'Flowers Across Brisbane',
    'flowers.across.brisbane@imported-vendor.markethub.com',
    '(07) 4144 7505',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '08bc7a42-083b-42ca-b39b-d43b885dea04',
    'Flowers Across Brisbane',
    '(07) 4144 7505',
    '10/37 Mortimer Rd, Acacia Ridge QLD 4110, Australia',
    'Acacia Ridge',
    '4110',
    'QLD',
    'artisan',
    'https://www.flowersacrossbrisbane.com.au/?utm_source=google&utm_medium=gmb&utm_campaign=sitebutton',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7007f38c-036b-443f-b7c2-703919cfd3c1',
    'Poppy Rose - Flower Delivery Brisbane',
    'poppy.rose.flower.delivery.brisbane@imported-vendor.markethub.com',
    '(07) 3395 4273',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7007f38c-036b-443f-b7c2-703919cfd3c1',
    'Poppy Rose - Flower Delivery Brisbane',
    '(07) 3395 4273',
    'Shop 2-5/50 Hume St, Norman Park QLD 4170, Australia',
    'Norman Park',
    '4170',
    'QLD',
    'artisan',
    'https://poppyrose.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c0564b52-a8a1-4ff3-9ec6-a7af622b80e8',
    'Maison Fleur',
    'maison.fleur@imported-vendor.markethub.com',
    '(07) 3221 3540',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c0564b52-a8a1-4ff3-9ec6-a7af622b80e8',
    'Maison Fleur',
    '(07) 3221 3540',
    '260 Margaret St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'artisan',
    'http://www.maisonfleur.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '806305fd-6994-4dc1-9516-c2b935df60b4',
    'Brisbane Market Flowers',
    'brisbane.market.flowers@imported-vendor.markethub.com',
    '(07) 3278 0266',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '806305fd-6994-4dc1-9516-c2b935df60b4',
    'Brisbane Market Flowers',
    '(07) 3278 0266',
    'Unit 3, U Block/385 Sherwood Rd, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'artisan',
    'https://www.brisbanemarketflowers.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '1cf75a14-4967-4f3a-a6df-674e7541b2f3',
    'Poco Posy - Flower Delivery Brisbane',
    'poco.posy.flower.delivery.brisbane@imported-vendor.markethub.com',
    '1300 868 168',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '1cf75a14-4967-4f3a-a6df-674e7541b2f3',
    'Poco Posy - Flower Delivery Brisbane',
    '1300 868 168',
    'Unit 2/26 Navigator Pl, Hendra QLD 4011, Australia',
    'Hendra',
    '4011',
    'QLD',
    'artisan',
    'https://www.pocoposy.com.au/?utm_source=gbp-listing&utm_medium=organic&utm_campaign=brisbane',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '443d0637-3526-4686-a433-93b001c76190',
    'Flowerlovers',
    'flowerlovers@imported-vendor.markethub.com',
    '(07) 3278 0655',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '443d0637-3526-4686-a433-93b001c76190',
    'Flowerlovers',
    '(07) 3278 0655',
    'Unit 2, W/Block/385 Sherwood Rd, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'artisan',
    'https://www.flowerlovers.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '8c6811e3-01a2-4d90-bb49-306ec307aaa6',
    '7 Days Florist',
    '7.days.florist@imported-vendor.markethub.com',
    '(07) 3359 2088',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '8c6811e3-01a2-4d90-bb49-306ec307aaa6',
    '7 Days Florist',
    '(07) 3359 2088',
    '6/634 Gympie Rd, Chermside QLD 4032, Australia',
    'Chermside',
    '4032',
    'QLD',
    'artisan',
    'http://www.7daysfloristchermside.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '38e3d43d-66c2-45af-a18d-61a8bf24a04c',
    'Stones Corner Flower Shop',
    'stones.corner.flower.shop@imported-vendor.markethub.com',
    '0420 268 158',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '38e3d43d-66c2-45af-a18d-61a8bf24a04c',
    'Stones Corner Flower Shop',
    '0420 268 158',
    'Same day delivery Mon-Fri, NO WALK IN SALES, pre-ordered flowers only, 360 Logan Rd, Stones Corner QLD 4120, Australia',
    'Stones Corner',
    '4120',
    'QLD',
    'artisan',
    'http://www.stonescornerflowershop.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a42b9e33-61df-4c6c-86d6-54aca9cf2c7f',
    'Mister Botanical Floral Design',
    'mister.botanical.floral.design@imported-vendor.markethub.com',
    '(07) 3496 9334',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a42b9e33-61df-4c6c-86d6-54aca9cf2c7f',
    'Mister Botanical Floral Design',
    '(07) 3496 9334',
    'Shop 5B/215 Queen St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'artisan',
    'http://www.misterbotanical.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '79563125-3030-49bf-8e8d-dd452c02e3a6',
    'Brisbane Flowers',
    'brisbane.flowers@imported-vendor.markethub.com',
    '(07) 3350 6024',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '79563125-3030-49bf-8e8d-dd452c02e3a6',
    'Brisbane Flowers',
    '(07) 3350 6024',
    '6/634 Gympie Rd, Chermside QLD 4032, Australia',
    'Chermside',
    '4032',
    'QLD',
    'artisan',
    'http://brisbaneflowers.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f50c22f1-6e65-4cf3-94a4-386c6051044c',
    'BOUQUET Boutique',
    'bouquet.boutique@imported-vendor.markethub.com',
    '0487 708 767',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f50c22f1-6e65-4cf3-94a4-386c6051044c',
    'BOUQUET Boutique',
    '0487 708 767',
    'Merthyr Village Shopping Centre, 81 Merthyr Rd, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'artisan',
    'http://www.bouquetboutique.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a00753e4-1f29-4c99-bb0b-45d340f08e62',
    'Cute Things & Blooms (at the Uptown)',
    'cute.things.blooms.at.the.uptown@imported-vendor.markethub.com',
    '0401 361 484',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a00753e4-1f29-4c99-bb0b-45d340f08e62',
    'Cute Things & Blooms (at the Uptown)',
    '0401 361 484',
    'Corner of Queen St and, Uptown, Level A/91 Albert St, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'artisan',
    'https://www.cutethingsandblooms.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '01dd8482-0449-4040-b9e6-7112529c0fbe',
    'Maison Fleur',
    'maison.fleur@imported-vendor.markethub.com',
    '(07) 3210 0944',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '01dd8482-0449-4040-b9e6-7112529c0fbe',
    'Maison Fleur',
    '(07) 3210 0944',
    '90 - 112 Queen Street Queen Adelaide Building, Burnett Ln, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'artisan',
    'http://www.maisonfleur.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '017e362f-fde6-438e-8090-9460315f15af',
    'Brisbane Wholesale Flowers',
    'brisbane.wholesale.flowers@imported-vendor.markethub.com',
    '(07) 3392 7930',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '017e362f-fde6-438e-8090-9460315f15af',
    'Brisbane Wholesale Flowers',
    '(07) 3392 7930',
    '2/16 Sherwood Rd, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'artisan',
    'http://www.brisbanewholesaleflowers.com/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '6a53b21b-5033-40d8-9076-6809cb09a530',
    'Brisbane Flower Market',
    'brisbane.flower.market@imported-vendor.markethub.com',
    '(07) 3915 4200',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '6a53b21b-5033-40d8-9076-6809cb09a530',
    'Brisbane Flower Market',
    '(07) 3915 4200',
    '385 Sherwood Rd, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'artisan',
    'https://brisbanemarkets.com.au/brisbane-flower-market/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '776f2a2a-3611-4426-b1cc-76237076b8c7',
    'Northside Flower Market',
    'northside.flower.market@imported-vendor.markethub.com',
    '(07) 3856 4711',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '776f2a2a-3611-4426-b1cc-76237076b8c7',
    'Northside Flower Market',
    '(07) 3856 4711',
    'Unit 3/27 Windorah St, Stafford QLD 4053, Australia',
    'Stafford',
    '4053',
    'QLD',
    'artisan',
    'https://www.flowermarket.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7920738c-c5ea-4fbc-aa33-680f6097f996',
    'Perrotts Florist',
    'perrotts.florist@imported-vendor.markethub.com',
    '(07) 3211 2175',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7920738c-c5ea-4fbc-aa33-680f6097f996',
    'Perrotts Florist',
    '(07) 3211 2175',
    'Shop 1A 167 Queen Street Queen Street Mall, Brisbane City QLD 4000, Australia',
    'Brisbane City',
    '4000',
    'QLD',
    'artisan',
    'http://www.perrotts.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f1cb9ea0-0d5c-4cc6-a51c-7ebfcbf68dba',
    'Petals On The Plaza',
    'petals.on.the.plaza@imported-vendor.markethub.com',
    '(07) 3208 1800',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f1cb9ea0-0d5c-4cc6-a51c-7ebfcbf68dba',
    'Petals On The Plaza',
    '(07) 3208 1800',
    '17-27 Cinderella Drive, Arndale Shopping Centre, Springwood QLD 4127, Australia',
    'Springwood',
    '4127',
    'QLD',
    'artisan',
    'https://petalsontheplaza.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '329476f0-a3bb-4cd1-8d6d-3561fcad8f7b',
    'Flower Delivery Brisbane - Fig & Bloom',
    'flower.delivery.brisbane.fig.bloom@imported-vendor.markethub.com',
    '1300 447 934',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '329476f0-a3bb-4cd1-8d6d-3561fcad8f7b',
    'Flower Delivery Brisbane - Fig & Bloom',
    '1300 447 934',
    '31 Jeays St, Bowen Hills QLD 4006, Australia',
    'Bowen Hills',
    '4006',
    'QLD',
    'artisan',
    'https://figandbloom.com/pages/flower-delivery-brisbane',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'bacefa30-b638-4fd6-9584-ad8151456f03',
    'Perfect Petals',
    'perfect.petals@imported-vendor.markethub.com',
    '(07) 3399 9659',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'bacefa30-b638-4fd6-9584-ad8151456f03',
    'Perfect Petals',
    '(07) 3399 9659',
    '1053 Wynnum Rd, Cannon Hill QLD 4170, Australia',
    'Cannon Hill',
    '4170',
    'QLD',
    'artisan',
    'https://perfectpetals.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b003eab3-cd55-498f-b125-b8a35717e75a',
    'Spring Hill Florist',
    'spring.hill.florist@imported-vendor.markethub.com',
    '(07) 3839 4665',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b003eab3-cd55-498f-b125-b8a35717e75a',
    'Spring Hill Florist',
    '(07) 3839 4665',
    'Ground floor 3/445 Edward St, Spring Hill QLD 4000, Australia',
    'Spring Hill',
    '4000',
    'QLD',
    'artisan',
    'http://www.springhillflorist.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'db679fb4-0992-41b8-8435-47434cb1a95a',
    'Stalks and Stems',
    'stalks.and.stems@imported-vendor.markethub.com',
    '(07) 3391 5544',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'db679fb4-0992-41b8-8435-47434cb1a95a',
    'Stalks and Stems',
    '(07) 3391 5544',
    '28A Logan Rd, Woolloongabba QLD 4102, Australia',
    'Woolloongabba',
    '4102',
    'QLD',
    'artisan',
    'https://www.stalksandstems.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'e61bd076-f9c8-418e-a7e9-4292ac3b1b5d',
    'Chatswood Hills Florist at Springwood',
    'chatswood.hills.florist.at.springwood@imported-vendor.markethub.com',
    '(07) 3290 2287',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'e61bd076-f9c8-418e-a7e9-4292ac3b1b5d',
    'Chatswood Hills Florist at Springwood',
    '(07) 3290 2287',
    'Chatswood Central Shopping Centre 2, Shop 127/16 Magellan Rd, Springwood QLD 4127, Australia',
    'Springwood',
    '4127',
    'QLD',
    'artisan',
    'http://www.chatswoodhillsfloristatspringwood.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '46ab7347-1a31-4144-ba76-7c074de7c393',
    'Anytime Flowers',
    'anytime.flowers@imported-vendor.markethub.com',
    '0404 991 119',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '46ab7347-1a31-4144-ba76-7c074de7c393',
    'Anytime Flowers',
    '0404 991 119',
    '72 Vulture St, West End QLD 4101, Australia',
    'West End',
    '4101',
    'QLD',
    'artisan',
    'https://anytimeflowers.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '865b8dfe-fcc8-4279-9cd5-bfe43df97ead',
    'All''s Rosy Florist',
    'all.s.rosy.florist@imported-vendor.markethub.com',
    '(07) 3809 0606',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '865b8dfe-fcc8-4279-9cd5-bfe43df97ead',
    'All''s Rosy Florist',
    '(07) 3809 0606',
    'Westpoint Shopping Centre, 8-24 Browns Plains Rd, Browns Plains QLD 4118, Australia',
    'Browns Plains',
    '4118',
    'QLD',
    'artisan',
    'http://allsrosy.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '50a24951-f186-4663-93d7-26176a64ee27',
    'Hanasho',
    'hanasho@imported-vendor.markethub.com',
    '(07) 3844 2777',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '50a24951-f186-4663-93d7-26176a64ee27',
    'Hanasho',
    '(07) 3844 2777',
    '235 Boundary St, West End QLD 4101, Australia',
    'West End',
    '4101',
    'QLD',
    'artisan',
    'https://www.facebook.com/hanasho.flowerart',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3dc55e42-cd38-44e0-91cf-9a3b9a63fca5',
    'Flower HQ Brisbane',
    'flower.hq.brisbane@imported-vendor.markethub.com',
    '(07) 3379 4844',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3dc55e42-cd38-44e0-91cf-9a3b9a63fca5',
    'Flower HQ Brisbane',
    '(07) 3379 4844',
    '385 Sherwood Rd, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'artisan',
    'https://www.facebook.com/FlowerHQbrisbane/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '27123593-5a78-4719-8d31-ff42e8d63d8f',
    'The Flower Cart - Fresh Flowers, Your Way 🌸',
    'the.flower.cart.fresh.flowers.your.way@imported-vendor.markethub.com',
    '0489 286 068',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '27123593-5a78-4719-8d31-ff42e8d63d8f',
    'The Flower Cart - Fresh Flowers, Your Way 🌸',
    '0489 286 068',
    'Shop 34/661 Compton Rd, Sunnybank Hills QLD 4109, Australia',
    'Sunnybank Hills',
    '4109',
    'QLD',
    'artisan',
    NULL,
    NULL,
    'Imported from FLORIST directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '84c96cff-8b92-4c01-82ec-d8cb384007d1',
    'The Flower Man',
    'the.flower.man@imported-vendor.markethub.com',
    '(07) 3868 4774',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '84c96cff-8b92-4c01-82ec-d8cb384007d1',
    'The Flower Man',
    '(07) 3868 4774',
    '127 Lancaster Rd, Ascot QLD 4007, Australia',
    'Ascot',
    '4007',
    'QLD',
    'artisan',
    'http://www.theflowerman.co/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3f497df2-94e9-42bc-9378-b225629f7945',
    'Flowers by Hebe - Milton Florist, Bardon Florist, Paddington Florist, Auchenflower Florist, Wesley Hospital Florist',
    'flowers.by.hebe.milton.florist.bardon.florist.paddington.florist.auchenflower.florist.wesley.hospital.florist@imported-vendor.markethub.com',
    '0477 226 856',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3f497df2-94e9-42bc-9378-b225629f7945',
    'Flowers by Hebe - Milton Florist, Bardon Florist, Paddington Florist, Auchenflower Florist, Wesley Hospital Florist',
    '0477 226 856',
    '32 Park Rd, Milton QLD 4064, Australia',
    'Milton',
    '4064',
    'QLD',
    'artisan',
    'http://www.flowersbyhebe.com/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '804d5012-f360-4933-b384-aed0ca261301',
    'Willow Blue Flora - Flowers of the World',
    'willow.blue.flora.flowers.of.the.world@imported-vendor.markethub.com',
    '(07) 3367 1950',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '804d5012-f360-4933-b384-aed0ca261301',
    'Willow Blue Flora - Flowers of the World',
    '(07) 3367 1950',
    '137 Latrobe Ter, Paddington QLD 4064, Australia',
    'Paddington',
    '4064',
    'QLD',
    'artisan',
    'https://willowblueflora.com/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '5054f941-ec87-48cb-981a-a4b0d17c87c6',
    'Hacienda Flowers & Furnishings',
    'hacienda.flowers.furnishings@imported-vendor.markethub.com',
    '(07) 3868 3346',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '5054f941-ec87-48cb-981a-a4b0d17c87c6',
    'Hacienda Flowers & Furnishings',
    '(07) 3868 3346',
    '15 Pedder St, Albion QLD 4010, Australia',
    'Albion',
    '4010',
    'QLD',
    'artisan',
    'http://www.haciendaflowers.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'dd35add0-a152-484d-832b-f2213d789d71',
    'Donelle''s Gift Garden & Florist',
    'donelle.s.gift.garden.florist@imported-vendor.markethub.com',
    '(07) 3278 8540',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'dd35add0-a152-484d-832b-f2213d789d71',
    'Donelle''s Gift Garden & Florist',
    '(07) 3278 8540',
    '37 Crossacres St, Doolandella QLD 4077, Australia',
    'Doolandella',
    '4077',
    'QLD',
    'artisan',
    'https://www.doolandellaflorist.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b15f41c4-1db6-4222-bc59-e248b2aa3a87',
    'KD Flower Design',
    'kd.flower.design@imported-vendor.markethub.com',
    '0418 726 971',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b15f41c4-1db6-4222-bc59-e248b2aa3a87',
    'KD Flower Design',
    '0418 726 971',
    '32 Sherwood Rd, Rocklea QLD 4106, Australia',
    'Rocklea',
    '4106',
    'QLD',
    'artisan',
    'http://www.kdflowerdesign.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3da9064c-46e1-4164-83e7-5de7062cdba9',
    'Saro Bloom Florist - Online Flower Shop',
    'saro.bloom.florist.online.flower.shop@imported-vendor.markethub.com',
    '0406 163 855',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3da9064c-46e1-4164-83e7-5de7062cdba9',
    'Saro Bloom Florist - Online Flower Shop',
    '0406 163 855',
    'Malvern Pl, Forest Lake QLD 4078, Australia',
    'Forest Lake',
    '4078',
    'QLD',
    'artisan',
    'https://www.sarobloomflorist.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '41c2ad65-025c-4eba-88f5-b6556807ce9e',
    'Kenmore Village Florist',
    'kenmore.village.florist@imported-vendor.markethub.com',
    '(07) 3378 5266',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '41c2ad65-025c-4eba-88f5-b6556807ce9e',
    'Kenmore Village Florist',
    '(07) 3378 5266',
    '9 Brookfield Rd, Kenmore QLD 4069, Australia',
    'Kenmore',
    '4069',
    'QLD',
    'artisan',
    'http://www.kenmorevillageflorist.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f2f4bd7a-1044-40fc-808e-ac82f0f72808',
    'Joy Florist Sunnybank Hills',
    'joy.florist.sunnybank.hills@imported-vendor.markethub.com',
    '0413 230 830',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f2f4bd7a-1044-40fc-808e-ac82f0f72808',
    'Joy Florist Sunnybank Hills',
    '0413 230 830',
    'Cherimoya Pl, Sunnybank Hills QLD 4109, Australia',
    'Sunnybank Hills',
    '4109',
    'QLD',
    'artisan',
    NULL,
    NULL,
    'Imported from FLORIST directory. Activity score: 4',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '8e341d9c-77aa-4aae-b5c6-ef128fa39fde',
    'The Lush Lily',
    'the.lush.lily@imported-vendor.markethub.com',
    '0429 364 829',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '8e341d9c-77aa-4aae-b5c6-ef128fa39fde',
    'The Lush Lily',
    '0429 364 829',
    '1151 Creek Rd, Carindale QLD 4152, Australia',
    'Carindale',
    '4152',
    'QLD',
    'artisan',
    'http://www.thelushlily.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '2fe1313e-0681-4919-a314-58dcfaedc296',
    'James St Florist',
    'james.st.florist@imported-vendor.markethub.com',
    '(07) 3257 7962',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '2fe1313e-0681-4919-a314-58dcfaedc296',
    'James St Florist',
    '(07) 3257 7962',
    'James St Market, c2/22 James St, Fortitude Valley QLD 4006, Australia',
    'Fortitude Valley',
    '4006',
    'QLD',
    'artisan',
    'http://www.jamesstflorist.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7be54c9c-0b1f-4a5b-9ffd-4b8e98340a1f',
    'Roses Only',
    'roses.only@imported-vendor.markethub.com',
    '1300 767 376',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7be54c9c-0b1f-4a5b-9ffd-4b8e98340a1f',
    'Roses Only',
    '1300 767 376',
    '44 Millway St, Kedron QLD 4031, Australia',
    'Kedron',
    '4031',
    'QLD',
    'artisan',
    'https://www.rosesonly.com.au/flower-delivery-brisbane',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a1fd017e-ed15-4456-96fa-39c3652362ea',
    'Daisy''s Florists',
    'daisy.s.florists@imported-vendor.markethub.com',
    '(07) 3371 5467',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a1fd017e-ed15-4456-96fa-39c3652362ea',
    'Daisy''s Florists',
    '(07) 3371 5467',
    'ga59/9 Sherwood Rd, Toowong QLD 4066, Australia',
    'Toowong',
    '4066',
    'QLD',
    'artisan',
    'http://www.daisys.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b98335b8-683b-464c-8a3c-4ae1a53da6d6',
    'White Grove House',
    'white.grove.house@imported-vendor.markethub.com',
    '(07) 3062 0506',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b98335b8-683b-464c-8a3c-4ae1a53da6d6',
    'White Grove House',
    '(07) 3062 0506',
    '812 Sandgate Rd, Clayfield QLD 4011, Australia',
    'Clayfield',
    '4011',
    'QLD',
    'artisan',
    'http://www.whitegrovehouse.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '4f3b5eb5-3323-4e70-a3c3-18ec010f7564',
    'Garden Graffiti',
    'garden.graffiti@imported-vendor.markethub.com',
    NULL,
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '4f3b5eb5-3323-4e70-a3c3-18ec010f7564',
    'Garden Graffiti',
    NULL,
    '12/44-46 Douglas St, Milton QLD 4064, Australia',
    'Milton',
    '4064',
    'QLD',
    'artisan',
    'http://www.gardengraffiti.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '95dcc052-f682-4ea6-99cd-35f3ec83cd07',
    'Unveiling Poppy',
    'unveiling.poppy@imported-vendor.markethub.com',
    '0444 529 503',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '95dcc052-f682-4ea6-99cd-35f3ec83cd07',
    'Unveiling Poppy',
    '0444 529 503',
    '3 Cupania St, Daisy Hill QLD 4127, Australia',
    'Daisy Hill',
    '4127',
    'QLD',
    'artisan',
    'https://www.unveilingpoppy.com/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c3eef6db-3551-4100-8854-5a063f781a9a',
    'Lillipollen - New Farm Flowers',
    'lillipollen.new.farm.flowers@imported-vendor.markethub.com',
    '(07) 3358 4656',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c3eef6db-3551-4100-8854-5a063f781a9a',
    'Lillipollen - New Farm Flowers',
    '(07) 3358 4656',
    '4/158 Moray St, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'artisan',
    'http://www.lillipollen.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '34e6a049-b49b-449b-9210-a6bf20f53253',
    'STEM DESIGN: Event, Corporate, and Wedding Florist in Brisbane',
    'stem.design.event.corporate.and.wedding.florist.in.brisbane@imported-vendor.markethub.com',
    '0404 634 205',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '34e6a049-b49b-449b-9210-a6bf20f53253',
    'STEM DESIGN: Event, Corporate, and Wedding Florist in Brisbane',
    '0404 634 205',
    '168a Barry Parade, Fortitude Valley QLD 4006, Australia',
    'Fortitude Valley',
    '4006',
    'QLD',
    'artisan',
    'https://stemdesign.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '63eb5e6d-6b37-4b46-afd1-398a0fa1d955',
    'Rosita Flowers Mt Gravatt',
    'rosita.flowers.mt.gravatt@imported-vendor.markethub.com',
    '0478 032 883',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '63eb5e6d-6b37-4b46-afd1-398a0fa1d955',
    'Rosita Flowers Mt Gravatt',
    '0478 032 883',
    'Logan Rd, Upper Mount Gravatt QLD 4122, Australia',
    'Upper Mount Gravatt',
    '4122',
    'QLD',
    'artisan',
    'http://www.rositaflowers.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '6d75646c-5eb8-40fe-aeb3-0109c394d094',
    'Perrotts Florist',
    'perrotts.florist@imported-vendor.markethub.com',
    '(07) 3252 7877',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '6d75646c-5eb8-40fe-aeb3-0109c394d094',
    'Perrotts Florist',
    '(07) 3252 7877',
    'Royal Brisbane Hospital Main Entrance Ned Hanlon Building, Bowen Bridge Rd, Herston QLD 4006, Australia',
    'Herston',
    '4006',
    'QLD',
    'artisan',
    'http://www.perrotts.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '4cefab41-9de1-4c40-8d31-91cdad498950',
    'Sunny Flower Florist',
    'sunny.flower.florist@imported-vendor.markethub.com',
    '(07) 3345 2323',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '4cefab41-9de1-4c40-8d31-91cdad498950',
    'Sunny Flower Florist',
    '(07) 3345 2323',
    'Sunnybank Plaza, Shop/2a McCullough St, Sunnybank QLD 4109, Australia',
    'Sunnybank',
    '4109',
    'QLD',
    'artisan',
    NULL,
    NULL,
    'Imported from FLORIST directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '78db1ebd-e219-488a-82f1-fce54d45c847',
    'Farmcraft Beenleigh',
    'farmcraft.beenleigh@imported-vendor.markethub.com',
    '(07) 3287 2796',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '78db1ebd-e219-488a-82f1-fce54d45c847',
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
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '61911a61-8f36-4530-a802-4f5c357faad5',
    'Scenic Rim Farm Shop',
    'scenic.rim.farm.shop@imported-vendor.markethub.com',
    '0493 437 220',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '61911a61-8f36-4530-a802-4f5c357faad5',
    'Scenic Rim Farm Shop',
    '0493 437 220',
    '541 Kents Lagoon Rd, Kents Lagoon QLD 4309, Australia',
    'Kents Lagoon',
    '4309',
    'QLD',
    'farmer',
    'http://www.scenicrimfarmshop.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f4c2c0ac-dfdb-4561-a6a5-effc9275fab9',
    'Farmcraft Brisbane – Coopers Plains',
    'farmcraft.brisbane.coopers.plains@imported-vendor.markethub.com',
    '(07) 3345 6823',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f4c2c0ac-dfdb-4561-a6a5-effc9275fab9',
    'Farmcraft Brisbane – Coopers Plains',
    '(07) 3345 6823',
    '65 Selhurst St, Coopers Plains QLD 4108, Australia',
    'Coopers Plains',
    '4108',
    'QLD',
    'farmer',
    'http://www.farmcraft.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'af96cbec-cf2e-40cb-9a17-a385f10971cf',
    'Harris Farm Markets West End',
    'harris.farm.markets.west.end@imported-vendor.markethub.com',
    '(07) 2112 1220',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'af96cbec-cf2e-40cb-9a17-a385f10971cf',
    'Harris Farm Markets West End',
    '(07) 2112 1220',
    '97 Boundary St, West End QLD 4101, Australia',
    'West End',
    '4101',
    'QLD',
    'farmer',
    'https://www.harrisfarm.com.au/?utm_source=Google&utm_medium=GMB&utm_campaign=WestEnd_listing',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '0d8a04e9-72ce-4ac6-ae59-cb82a194f7c3',
    'Harris Farm Markets Clayfield',
    'harris.farm.markets.clayfield@imported-vendor.markethub.com',
    '(07) 2112 1200',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '0d8a04e9-72ce-4ac6-ae59-cb82a194f7c3',
    'Harris Farm Markets Clayfield',
    '(07) 2112 1200',
    '823 Sandgate Rd, Clayfield QLD 4011, Australia',
    'Clayfield',
    '4011',
    'QLD',
    'farmer',
    'http://www.harrisfarm.com.au/collections?utm_source=Google&utm_medium=GMB&utm_campaign=Local_listing',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '46d0912c-922a-480e-b85f-ee985c6ad46b',
    'Brookies Capalaba (Capalaba Produce)',
    'brookies.capalaba.capalaba.produce@imported-vendor.markethub.com',
    '(07) 3390 1433',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '46d0912c-922a-480e-b85f-ee985c6ad46b',
    'Brookies Capalaba (Capalaba Produce)',
    '(07) 3390 1433',
    '3247 Old Cleveland Rd, Chandler QLD 4155, Australia',
    'Chandler',
    '4155',
    'QLD',
    'farmer',
    'http://www.capalabaproduce.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '96bfc02e-b266-411b-8301-ccc3f00cb774',
    'Farmhouse, Kedron Cafe',
    'farmhouse.kedron.cafe@imported-vendor.markethub.com',
    '(07) 3861 1956',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '96bfc02e-b266-411b-8301-ccc3f00cb774',
    'Farmhouse, Kedron Cafe',
    '(07) 3861 1956',
    '9 Somerset Rd, Kedron QLD 4031, Australia',
    'Kedron',
    '4031',
    'QLD',
    'farmer',
    'https://www.farmhousekedron.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f2502aec-8209-4d6e-ba0a-8be66fe68a21',
    'Jan Powers Farmers Markets Powerhouse',
    'jan.powers.farmers.markets.powerhouse@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f2502aec-8209-4d6e-ba0a-8be66fe68a21',
    'Jan Powers Farmers Markets Powerhouse',
    NULL,
    'The Brisbane Powerhouse, 119 Lamington St, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'farmer',
    'http://www.janpowersfarmersmarkets.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'e44c0a11-5f29-4313-a70b-bf1bcae6d1f7',
    'Northey Street Organic Farmers Market',
    'northey.street.organic.farmers.market@imported-vendor.markethub.com',
    '(07) 3857 8775',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'e44c0a11-5f29-4313-a70b-bf1bcae6d1f7',
    'Northey Street Organic Farmers Market',
    '(07) 3857 8775',
    '16 Victoria St, Windsor QLD 4030, Australia',
    'Windsor',
    '4030',
    'QLD',
    'farmer',
    'https://www.nscf.org.au/organic-farmers-market/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c8a179c7-1cd7-4fb1-bf7a-b77370fb1993',
    'City Farm Nursery',
    'city.farm.nursery@imported-vendor.markethub.com',
    '(07) 3857 8774',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c8a179c7-1cd7-4fb1-bf7a-b77370fb1993',
    'City Farm Nursery',
    '(07) 3857 8774',
    '16 Victoria St, Windsor QLD 4030, Australia',
    'Windsor',
    '4030',
    'QLD',
    'farmer',
    'https://www.nscf.org.au/nursery/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '72962290-ee4f-4187-8ca0-482baa0a0f8d',
    'Neighbourhood Farm',
    'neighbourhood.farm@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '72962290-ee4f-4187-8ca0-482baa0a0f8d',
    'Neighbourhood Farm',
    NULL,
    '165 Blackheath Rd, Corinda QLD 4075, Australia',
    'Corinda',
    '4075',
    'QLD',
    'farmer',
    'https://www.neighbourhoodfarm.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '9cbd6e4b-c8f0-44ac-8e74-3baf23717348',
    'Chambers Flat Strawberry Farm',
    'chambers.flat.strawberry.farm@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '9cbd6e4b-c8f0-44ac-8e74-3baf23717348',
    'Chambers Flat Strawberry Farm',
    NULL,
    '912 Chambers Flat Rd, Chambers Flat QLD 4133, Australia',
    'Chambers Flat',
    '4133',
    'QLD',
    'farmer',
    'https://chambersflatstrawberryfarm.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '1567e0d0-290e-49e6-af83-92d174ff51d9',
    'Beelarong Community Farm',
    'beelarong.community.farm@imported-vendor.markethub.com',
    '0401 168 657',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '1567e0d0-290e-49e6-af83-92d174ff51d9',
    'Beelarong Community Farm',
    '0401 168 657',
    'Beverley St & York St, Morningside QLD 4170, Australia',
    'Morningside',
    '4170',
    'QLD',
    'farmer',
    'http://www.beelarong.org.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f6f7db59-7ccb-4cf0-99ea-6f3f6482d7c1',
    'Brookies Rural Traders',
    'brookies.rural.traders@imported-vendor.markethub.com',
    '(07) 3374 1648',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f6f7db59-7ccb-4cf0-99ea-6f3f6482d7c1',
    'Brookies Rural Traders',
    '(07) 3374 1648',
    '612 Brookfield Rd, Brookfield QLD 4069, Australia',
    'Brookfield',
    '4069',
    'QLD',
    'farmer',
    'http://brookiesruraltraders.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'ec982589-f24e-4993-ab7f-216bb7b9f981',
    'New Farm Deli',
    'new.farm.deli@imported-vendor.markethub.com',
    '(07) 3358 2634',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'ec982589-f24e-4993-ab7f-216bb7b9f981',
    'New Farm Deli',
    '(07) 3358 2634',
    'Shop 5, 6, 7 & 8, 900 Brunswick St, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'farmer',
    'http://www.newfarmdeli.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'd4f0d153-cd57-4c83-b6e9-afebf42b10f7',
    'Brisbane Northside Produce',
    'brisbane.northside.produce@imported-vendor.markethub.com',
    '(07) 3264 5100',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'd4f0d153-cd57-4c83-b6e9-afebf42b10f7',
    'Brisbane Northside Produce',
    '(07) 3264 5100',
    '563 Albany Creek Rd, Bridgeman Downs QLD 4035, Australia',
    'Bridgeman Downs',
    '4035',
    'QLD',
    'farmer',
    'https://www.facebook.com/BrisbaneNorthsideProduce/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7b62b32a-8623-4817-9b27-b179961560ff',
    'Goodna Produce',
    'goodna.produce@imported-vendor.markethub.com',
    '(07) 3288 2336',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7b62b32a-8623-4817-9b27-b179961560ff',
    'Goodna Produce',
    '(07) 3288 2336',
    '440 Brisbane Terrace, Redbank QLD 4301, Australia',
    'Redbank',
    '4301',
    'QLD',
    'farmer',
    'http://www.goodnaproduce.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '80fd23dc-471c-4da4-a77c-0380f6c569ba',
    'Heritage Poultry',
    'heritage.poultry@imported-vendor.markethub.com',
    '0412 725 994',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '80fd23dc-471c-4da4-a77c-0380f6c569ba',
    'Heritage Poultry',
    '0412 725 994',
    '175A Hawkesbury Rd, Moggill QLD 4070, Australia',
    'Moggill',
    '4070',
    'QLD',
    'farmer',
    'http://www.heritagehatchingandhens.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '17185c21-5b17-4781-b27e-7277fdadf187',
    'Elderflower Farm',
    'elderflower.farm@imported-vendor.markethub.com',
    '0427 345 528',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '17185c21-5b17-4781-b27e-7277fdadf187',
    'Elderflower Farm',
    '0427 345 528',
    '541 Kents Lagoon Rd, Kents Lagoon QLD 4310, Australia',
    'Kents Lagoon',
    '4310',
    'QLD',
    'artisan',
    'https://www.elderflowerfarm.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'db20e954-8f83-44bc-aaea-0b62337d384b',
    'The Soul Pantry Collective',
    'the.soul.pantry.collective@imported-vendor.markethub.com',
    '(07) 3352 7777',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'db20e954-8f83-44bc-aaea-0b62337d384b',
    'The Soul Pantry Collective',
    '(07) 3352 7777',
    '31 Wolverhampton St, Stafford QLD 4053, Australia',
    'Stafford',
    '4053',
    'QLD',
    'artisan',
    'http://www.thesoulpantry.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'bc5af09c-e8a3-4dbb-8ee7-a9f023ee7afa',
    'EWE-Nique Hobby Farm Haigslea',
    'ewe.nique.hobby.farm.haigslea@imported-vendor.markethub.com',
    '0410 487 263',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'bc5af09c-e8a3-4dbb-8ee7-a9f023ee7afa',
    'EWE-Nique Hobby Farm Haigslea',
    '0410 487 263',
    '187 Missigs Rd, Haigslea QLD 4306, Australia',
    'Haigslea',
    '4306',
    'QLD',
    'farmer',
    'https://www.eweniquehobbyfarm.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '64d25617-cc4a-4282-b43a-3cea801e2f60',
    'White Ridge Farm',
    'white.ridge.farm@imported-vendor.markethub.com',
    '0417 774 559',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '64d25617-cc4a-4282-b43a-3cea801e2f60',
    'White Ridge Farm',
    '0417 774 559',
    '130 Hamilton Rd, Elimbah QLD 4516, Australia',
    'Elimbah',
    '4516',
    'QLD',
    'farmer',
    'http://www.whiteridgefarm.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c02e409b-e075-4d56-97bd-cac4f17f3e55',
    'Trevena Glen Farm',
    'trevena.glen.farm@imported-vendor.markethub.com',
    '(07) 3289 4257',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c02e409b-e075-4d56-97bd-cac4f17f3e55',
    'Trevena Glen Farm',
    '(07) 3289 4257',
    '1100 Winn Rd, Mount Samson QLD 4520, Australia',
    'Mount Samson',
    '4520',
    'QLD',
    'farmer',
    'https://www.trevenaglen.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '67bd1a11-ffb6-45fe-83a2-6c3111d540d8',
    'Rolin Farms (Strawberry Farm)',
    'rolin.farms.strawberry.farm@imported-vendor.markethub.com',
    '0447 743 057',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '67bd1a11-ffb6-45fe-83a2-6c3111d540d8',
    'Rolin Farms (Strawberry Farm)',
    '0447 743 057',
    '124-190 Rutters Rd, Elimbah QLD 4516, Australia',
    'Elimbah',
    '4516',
    'QLD',
    'farmer',
    'https://www.rolinfarms.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c4a881b6-c217-4624-8394-c04705d6129f',
    'Joedy''s Cafe - New Farm',
    'joedy.s.cafe.new.farm@imported-vendor.markethub.com',
    '0422 649 082',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c4a881b6-c217-4624-8394-c04705d6129f',
    'Joedy''s Cafe - New Farm',
    '0422 649 082',
    '2/938 Brunswick St, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'farmer',
    'http://www.joedyscafe.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'c699b8a0-86c0-42f7-85c7-b55998092796',
    'The Longan Farm',
    'the.longan.farm@imported-vendor.markethub.com',
    '0482 978 053',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'c699b8a0-86c0-42f7-85c7-b55998092796',
    'The Longan Farm',
    '0482 978 053',
    '359 Raynbird Rd, Narangba QLD 4504, Australia',
    'Narangba',
    '4504',
    'QLD',
    'farmer',
    'https://www.facebook.com/share/1A9Dyd7WGA/',
    NULL,
    'Imported from FARM directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '1ef121f1-b0ad-46e3-965d-a5c61ecab73b',
    'Farmgate Flowers Direct',
    'farmgate.flowers.direct@imported-vendor.markethub.com',
    '0419 719 350',
    'csv_import_florist',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '1ef121f1-b0ad-46e3-965d-a5c61ecab73b',
    'Farmgate Flowers Direct',
    '0419 719 350',
    'Powerhouse Park Off - Leash Doggy Playground, Powerhouse Park, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'artisan',
    'http://www.farmgateflowersdirect.com.au/',
    NULL,
    'Imported from FLORIST directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '664d58b1-af07-4d44-ac36-032409d34f99',
    'La Family Farm',
    'la.family.farm@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '664d58b1-af07-4d44-ac36-032409d34f99',
    'La Family Farm',
    NULL,
    '197 Learoyd Rd, Acacia Ridge QLD 4110, Australia',
    'Acacia Ridge',
    '4110',
    'QLD',
    'farmer',
    'http://www.instagram.com/lafamilyfarm',
    NULL,
    'Imported from FARM directory. Activity score: 3',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7b206ca5-2c36-41b0-978a-8781908febe4',
    'Blunder Road Country Markets',
    'blunder.road.country.markets@imported-vendor.markethub.com',
    '(07) 3879 7552',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7b206ca5-2c36-41b0-978a-8781908febe4',
    'Blunder Road Country Markets',
    '(07) 3879 7552',
    '3/150 Blunder Rd, Oxley QLD 4075, Australia',
    'Oxley',
    '4075',
    'QLD',
    'farmer',
    'https://facebook.com/blunderroadcountrymarkets/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '267a90bd-5d30-45db-b2ca-f31b462693e0',
    'The Plant Bunker',
    'the.plant.bunker@imported-vendor.markethub.com',
    '0448 888 748',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '267a90bd-5d30-45db-b2ca-f31b462693e0',
    'The Plant Bunker',
    '0448 888 748',
    '126 Days Rd, Grange QLD 4051, Australia',
    'Grange',
    '4051',
    'QLD',
    'farmer',
    'https://theplantbunker.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '36bb0176-80de-48ea-bc01-7336428bfca5',
    'Double Shot New Farm',
    'double.shot.new.farm@imported-vendor.markethub.com',
    '(07) 3358 6556',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '36bb0176-80de-48ea-bc01-7336428bfca5',
    'Double Shot New Farm',
    '(07) 3358 6556',
    '2/125 Oxlade Dr, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'farmer',
    'https://m.facebook.com/doubleshotnewfarm/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '025967bb-bcd9-400b-9c7f-43a890be934a',
    'Yuen''s Farmers Market',
    'yuen.s.farmers.market@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '025967bb-bcd9-400b-9c7f-43a890be934a',
    'Yuen''s Farmers Market',
    NULL,
    'Shop 11, 11/21 Kingston Rd, Underwood QLD 4119, Australia',
    'Underwood',
    '4119',
    'QLD',
    'farmer',
    'http://www.yuensfarmersmarket.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f3d8c085-d417-464f-9563-f78c8b5c56a9',
    'Merthyr Village Shopping Centre',
    'merthyr.village.shopping.centre@imported-vendor.markethub.com',
    '0499 163 953',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f3d8c085-d417-464f-9563-f78c8b5c56a9',
    'Merthyr Village Shopping Centre',
    '0499 163 953',
    '85 Merthyr Rd, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'farmer',
    'http://www.merthyrvillage.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7274b58f-ddf2-4c1c-997f-3ff3dfda9356',
    'Buckhams General Produce',
    'buckhams.general.produce@imported-vendor.markethub.com',
    '(07) 3802 1955',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7274b58f-ddf2-4c1c-997f-3ff3dfda9356',
    'Buckhams General Produce',
    '(07) 3802 1955',
    '4656-4664 Mount Lindesay Hwy, North MacLean QLD 4280, Australia',
    'North MacLean',
    '4280',
    'QLD',
    'farmer',
    'https://buckhamsgeneralproduce.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '1acbb9eb-a228-448f-8695-b781f72da7eb',
    'Green Thumb Farm Tours',
    'green.thumb.farm.tours@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '1acbb9eb-a228-448f-8695-b781f72da7eb',
    'Green Thumb Farm Tours',
    NULL,
    '2204 Mount Samson Rd, Samford Valley QLD 4520, Australia',
    'Samford Valley',
    '4520',
    'QLD',
    'farmer',
    'http://greenthumbfarm.org.au/',
    NULL,
    'Imported from FARM directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f8d00a82-d5ff-4633-b2ac-bfd7a2cf2782',
    'The Llama Farm',
    'the.llama.farm@imported-vendor.markethub.com',
    '0403 284 665',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f8d00a82-d5ff-4633-b2ac-bfd7a2cf2782',
    'The Llama Farm',
    '0403 284 665',
    '563 Riverside Dr, Pine Mountain QLD 4306, Australia',
    'Pine Mountain',
    '4306',
    'QLD',
    'farmer',
    'http://www.thellamafarm.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'aef67cd6-3887-44f7-b144-3b920b103b1c',
    'Rosalie Gourmet Market',
    'rosalie.gourmet.market@imported-vendor.markethub.com',
    '(07) 3876 6222',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'aef67cd6-3887-44f7-b144-3b920b103b1c',
    'Rosalie Gourmet Market',
    '(07) 3876 6222',
    '164 Baroona Rd, Paddington QLD 4064, Australia',
    'Paddington',
    '4064',
    'QLD',
    'farmer',
    'http://www.rosaliegourmet.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'b9c0e503-3818-4528-9640-cd37be12bfeb',
    'Jan Powers Farmers Markets Manly',
    'jan.powers.farmers.markets.manly@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'b9c0e503-3818-4528-9640-cd37be12bfeb',
    'Jan Powers Farmers Markets Manly',
    NULL,
    'Royal Esplanade, Manly QLD 4179, Australia',
    'Manly',
    '4179',
    'QLD',
    'farmer',
    'http://www.janpowersfarmersmarkets.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a6a66c9d-9f9b-4f48-ba7f-c9fcd63baf05',
    'New Farm Editions',
    'new.farm.editions@imported-vendor.markethub.com',
    '(07) 3254 2122',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a6a66c9d-9f9b-4f48-ba7f-c9fcd63baf05',
    'New Farm Editions',
    '(07) 3254 2122',
    'Shop 4, Merthyr Village Shopping Centre, 85 Merthyr Rd, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'farmer',
    'https://newfarmeditions.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '0535bbfc-39dc-48c6-8968-7eeab45ad6f1',
    'Baroona Farm',
    'baroona.farm@imported-vendor.markethub.com',
    NULL,
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '0535bbfc-39dc-48c6-8968-7eeab45ad6f1',
    'Baroona Farm',
    NULL,
    '233 Milton Rd, Milton QLD 4064, Australia',
    'Milton',
    '4064',
    'QLD',
    'farmer',
    'http://baroonafarm.org/',
    NULL,
    'Imported from FARM directory. Activity score: 3',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '55f5ff41-34cc-4058-b666-4794eb65876b',
    'Farm Supplies Machinery & Equipment',
    'farm.supplies.machinery.equipment@imported-vendor.markethub.com',
    '(07) 3277 5388',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '55f5ff41-34cc-4058-b666-4794eb65876b',
    'Farm Supplies Machinery & Equipment',
    '(07) 3277 5388',
    '54 Annie St, Coopers Plains QLD 4108, Australia',
    'Coopers Plains',
    '4108',
    'QLD',
    'farmer',
    'https://farmsuppliesmachineryandequipment.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '0388da19-528f-407b-9279-21e9c3973ff4',
    'Park Ridge Produce',
    'park.ridge.produce@imported-vendor.markethub.com',
    '(07) 3297 1155',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '0388da19-528f-407b-9279-21e9c3973ff4',
    'Park Ridge Produce',
    '(07) 3297 1155',
    '3688 Mount Lindesay Hwy, Park Ridge QLD 4125, Australia',
    'Park Ridge',
    '4125',
    'QLD',
    'farmer',
    'https://www.facebook.com/parkridgeproduce/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'f58d9230-a4da-4747-8c68-5fc897f25e13',
    'Free Range Pasture-Raised Egg Farm - Parcero Farm',
    'free.range.pasture.raised.egg.farm.parcero.farm@imported-vendor.markethub.com',
    '0415 072 353',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'f58d9230-a4da-4747-8c68-5fc897f25e13',
    'Free Range Pasture-Raised Egg Farm - Parcero Farm',
    '0415 072 353',
    '74-82 Moody Rd, Greenbank QLD 4124, Australia',
    'Greenbank',
    '4124',
    'QLD',
    'farmer',
    'https://pasturedeggs.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'db13018e-6842-45f1-b565-cf9984208fe2',
    'The Farm Shop Toowoomba',
    'the.farm.shop.toowoomba@imported-vendor.markethub.com',
    '0481 172 134',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'db13018e-6842-45f1-b565-cf9984208fe2',
    'The Farm Shop Toowoomba',
    '0481 172 134',
    '4 Rowbotham Rd, Westbrook QLD 4350, Australia',
    'Westbrook',
    '4350',
    'QLD',
    'farmer',
    'https://thefarmshop.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'a0f97c0e-4c7d-44ec-a6b2-4642f4a6004d',
    'Hey Mr. New Farm',
    'hey.mr.new.farm@imported-vendor.markethub.com',
    '0415 134 739',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'a0f97c0e-4c7d-44ec-a6b2-4642f4a6004d',
    'Hey Mr. New Farm',
    '0415 134 739',
    '76 Moray St, New Farm QLD 4005, Australia',
    'New Farm',
    '4005',
    'QLD',
    'farmer',
    NULL,
    NULL,
    'Imported from FARM directory. Activity score: 5',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '3ef915fe-e740-4373-8409-1eea411e78db',
    'Towri Sheep Cheeses',
    'towri.sheep.cheeses@imported-vendor.markethub.com',
    '0413 430 471',
    'csv_import_cheese',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '3ef915fe-e740-4373-8409-1eea411e78db',
    'Towri Sheep Cheeses',
    '0413 430 471',
    '206 Saville Rd, Allenview QLD 4285, Australia',
    'Allenview',
    '4285',
    'QLD',
    'specialist',
    'https://towrisheepcheeses.com.au/',
    NULL,
    'Imported from CHEESE directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'cbd7c6bb-2292-4613-9278-cb2ae0de2ca6',
    'Naughty Little Kids',
    'naughty.little.kids@imported-vendor.markethub.com',
    '(07) 5467 2752',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'cbd7c6bb-2292-4613-9278-cb2ae0de2ca6',
    'Naughty Little Kids',
    '(07) 5467 2752',
    '1531 Ipswich Boonah Rd, Peak Crossing QLD 4306, Australia',
    'Peak Crossing',
    '4306',
    'QLD',
    'farmer',
    'http://www.naughtylittlekids.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '4450a1f5-a4e9-41c1-a871-7e6d62462c00',
    'The Carseldine Farmers & Artisan Markets',
    'the.carseldine.farmers.artisan.markets@imported-vendor.markethub.com',
    '0490 493 760',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '4450a1f5-a4e9-41c1-a871-7e6d62462c00',
    'The Carseldine Farmers & Artisan Markets',
    '0490 493 760',
    '133 Dorville Rd, Carseldine QLD 4034, Australia',
    'Carseldine',
    '4034',
    'QLD',
    'farmer',
    'http://www.carseldinemarkets.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '218bbfbc-493f-4d11-90ff-10ecf682d3d2',
    'Doug''s Urban Farm',
    'doug.s.urban.farm@imported-vendor.markethub.com',
    '0411 480 266',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '218bbfbc-493f-4d11-90ff-10ecf682d3d2',
    'Doug''s Urban Farm',
    '0411 480 266',
    '5 Woodlands Ave, Camira QLD 4300, Australia',
    'Camira',
    '4300',
    'QLD',
    'farmer',
    NULL,
    NULL,
    'Imported from FARM directory. Activity score: 2',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '97f80eb8-5c1a-4826-88f5-8497526b30c3',
    'Forest Dragon Fruit Farm',
    'forest.dragon.fruit.farm@imported-vendor.markethub.com',
    '0426 501 978',
    'csv_import_farm',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '97f80eb8-5c1a-4826-88f5-8497526b30c3',
    'Forest Dragon Fruit Farm',
    '0426 501 978',
    '151 Dickman Rd, Forestdale QLD 4118, Australia',
    'Forestdale',
    '4118',
    'QLD',
    'farmer',
    NULL,
    NULL,
    'Imported from FARM directory. Activity score: 2',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

-- Import Summary
-- Total vendors imported: 200
-- gourmet_food: 100 vendors
-- artisan: 53 vendors
-- farmer: 46 vendors
-- specialist: 1 vendors

-- Verify import
SELECT 
    vp.category,
    COUNT(*) as count
FROM vendor_profiles vp
JOIN imported_vendors iv ON iv.id = vp.vendor_id
GROUP BY vp.category
ORDER BY count DESC;

-- Show total imported vendors
SELECT COUNT(*) as total_imported_vendors
FROM imported_vendors
WHERE source LIKE 'csv_import_%';