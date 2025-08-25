-- Import Australian Markets from scraped data
-- Generated on 2025-08-24 18:38:54

-- Create market organizer profile for scraped markets
INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES ('074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa', 'market_organizer', 'Australian Markets Scraped Data', 'scraped.markets@markethub.com.au', '+61400000000', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert scraped markets data
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1c3b3af1-a0b6-4c0c-bc19-6a6ed307e12d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'CAPITAL REGION FARMERS MARKET',
    'capital-region-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3a7fe2fa-2755-4489-a677-0df8c216fd88',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'HARTLEY HALL MARKETS',
    'hartley-hall-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Hall ACT 2618',
    'Hall',
    'ACT',
    '2618',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b54147be-d178-4b45-a6fb-06ac9ed8326c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'GUNGAHLIN COMMUNITY MARKET',
    'gungahlin-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'CASEY ACT 2913',
    'CASEY',
    'ACT',
    '2913',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '222a09ec-365b-448d-aaae-dd306d3320d0',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Canberra City Walk Markets',
    'canberra-city-walk-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2612',
    '',
    'ACT',
    '2612',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b4662925-cc05-4e8a-a7f8-65a0c99ef60c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ANU MARKET DAYS',
    'anu-market-days',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8e986b71-610a-400e-a019-b041bcf3387d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Canberra Fashion Market',
    'canberra-fashion-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Mitchell ACT 2911',
    'Mitchell',
    'ACT',
    '2911',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6cb2a694-6f4d-4649-8f0f-66613c8abcf8',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'SOUTHSIDE FARMERS MARKET',
    'southside-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2606',
    '',
    'ACT',
    '2606',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd7ac1385-c062-44dc-b791-eba794915b13',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'SUMMER SUNSET MARKETS',
    'summer-sunset-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2620',
    '',
    'ACT',
    '2620',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1444d2bb-77ba-4d3c-91ea-c9f21d750ae6',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BOULEVARD MARKET',
    'boulevard-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'f790fdc7-b353-4fa9-bda4-46e0b7d3e396',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'CANBERRA NIGHT MARKETS',
    'canberra-night-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a840edf5-5bb6-446e-9ef1-762f70ed9451',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'OLD BUS DEPOT MARKET',
    'old-bus-depot-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2604',
    '',
    'ACT',
    '2604',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9f31dd7a-6d4d-4fb8-9672-6a156ae4d1bb',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BELCONNEN TRASH & TREASURE MARKET',
    'belconnen-trash-treasure-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2614',
    '',
    'ACT',
    '2614',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9fabd055-1c15-4b93-8347-af92288ee251',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Canberra Kids Market',
    'canberra-kids-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Mitchell ACT 2911',
    'Mitchell',
    'ACT',
    '2911',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'ae446a39-ed78-474b-a456-170efb05a61b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BALMAIN MARKET',
    'balmain-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Balmain NSW 2041',
    'Balmain',
    'NSW',
    '2041',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '74e050c4-385e-4970-9134-083bb55c7dc6',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Lugarno Lions Community Fair 21st September 2025 (Previously Spring Festival)',
    'lugarno-lions-community-fair-21st-september-2025-previously-spring-festival',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Riverwood Park, Coleridge St, RIVERWOOD NSW 2210',
    'RIVERWOOD',
    'NSW',
    '2210',
    'Australia',
    -33.9496260993,
    151.0474542492,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2881273b-25e4-4a7c-9949-c4f2e212ed4a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BONDI BEACH COMMUNITY MARKET',
    'bondi-beach-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Roscoe St Mall, Campbell Parade, Bondi Beach NSW 2026',
    'Bondi Beach',
    'NSW',
    '2026',
    'Australia',
    -33.8903388766,
    151.2745195164,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '98b2419e-05f3-4183-9c77-16098f2f14e8',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ADAMSTOWN MARKET',
    'adamstown-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Adamstown NSW 2289',
    'Adamstown',
    'NSW',
    '2289',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3b08dd0a-0fc1-467c-8d6c-37d617a58af3',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Italian Forum Twilight Market',
    'italian-forum-twilight-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'The Italian Forum Piazza, 23 Norton Street, Leichhardt NSW 2040',
    'Leichhardt',
    'NSW',
    '2040',
    'Australia',
    -33.8867929155,
    151.1581019943,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5f9fc385-4bd0-432b-918e-a3033d52cc6a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BALLINA MARKET - returning on 19th July 2020',
    'ballina-market-returning-on-19th-july-2020',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Ballina NSW 2478',
    'Ballina',
    'NSW',
    '2478',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e8a295ff-8c4f-4faa-aa85-43faedb98e6a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Penrith Trash and Treasure Market',
    'penrith-trash-and-treasure-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Penrith Paceway, Ransley Street, Penrith NSW 2750',
    'Penrith',
    'NSW',
    '2750',
    'Australia',
    -33.7567311371,
    150.6869773453,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8bd26a87-5748-4b0e-b88a-fbdd4c12611b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BANGALOW VILLAGE MARKET',
    'bangalow-village-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NSW 2479',
    '',
    'NSW',
    '2479',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'fd63d3ee-6d03-4f99-87ba-83cd7e8a67cf',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BANKSTOWN SUNDAY MARKETS & BARGAIN BAZAAR',
    'bankstown-sunday-markets-bargain-bazaar',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Condell Park NSW 2200',
    'Condell Park',
    'NSW',
    '2200',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '44eedc33-4612-49d9-aed4-9f3ec95f6c25',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Sydney City Night Market',
    'sydney-city-night-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Belmore Park, Hay Street, Haymarket NSW 2000',
    'Haymarket',
    'NSW',
    '2000',
    'Australia',
    -33.8809679018,
    151.2075833862,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7a3d93e6-f049-4608-889d-117893c15d63',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Arcadia Market',
    'arcadia-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Arcadia NSW 2159',
    'Arcadia',
    'NSW',
    '2159',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cc9b0fc7-f33e-43b2-a62b-6cee23204782',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Wednesday Pickers Bazaar',
    'wednesday-pickers-bazaar',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Fairfield Showground, 447 Smithfield Road, Prairiewood NSW 2171',
    'Prairiewood',
    'NSW',
    '2171',
    'Australia',
    -33.8669114146,
    150.9059743469,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c56926c4-6fb3-41d7-956b-e319e41832d4',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ASHBY MARKET',
    'ashby-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NSW 2463',
    '',
    'NSW',
    '2463',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2d0634cd-d228-451d-b407-a64730b5bb06',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BANGALOW FARMERS MARKET',
    'bangalow-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NSW 2479',
    '',
    'NSW',
    '2479',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd9be0e01-a126-4dc6-81aa-3d73d315942c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ART ON THE LEVEE - WAGGA',
    'art-on-the-levee-wagga',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Wagga Wagga NSW 2650',
    'Wagga Wagga',
    'NSW',
    '2650',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '929b69b4-455d-4170-b50c-2bcb067eb65a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'The Concourse Artisan Market',
    'the-concourse-artisan-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'The Concourse Chatswood, 409 Victoria Avenue, Chatswood NSW 2067',
    'Chatswood',
    'NSW',
    '2067',
    'Australia',
    -33.7956772,
    151.1843034,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '537e6824-75b1-4a8b-8c42-d0201ec90111',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BERRY RESERVE MARKET',
    'berry-reserve-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Berry Reserve, 1417 Pittwater Road, Narrabeen NSW 2101',
    'Narrabeen',
    'NSW',
    '1417',
    'Australia',
    -33.7138262119,
    151.2966244024,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4288a51d-9978-4a08-8dc8-176e09710d1c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'AVOCA BEACHSIDE MARKETS',
    'avoca-beachside-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Avoca Beach NSW 2251',
    'Avoca Beach',
    'NSW',
    '2251',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0c68f031-91a2-488b-9b49-3511ac75b863',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ARMIDALE MARKET',
    'armidale-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Armidale NSW 2350',
    'Armidale',
    'NSW',
    '2350',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b7b1d083-5038-4ebf-84b0-727f98dee800',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    '@The HUB Markets',
    'the-hub-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Lalor Park NSW 2147',
    'Lalor Park',
    'NSW',
    '2147',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '14c0199a-1836-4259-8cfb-38173716bd87',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BERRY SPRINGS COMMUNITY MARKET',
    'berry-springs-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0838',
    '',
    'NT',
    '0838',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cbd246bd-13f7-4363-9283-46cb4a7f7ab8',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Adelaide River Market',
    'adelaide-river-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0846',
    '',
    'NT',
    '0846',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2cc32768-a1f1-4d88-98a9-3ea5f0510d58',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'HEAVITREE GAP COMMUNITY MARKETS',
    'heavitree-gap-community-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0873',
    '',
    'NT',
    '0873',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b7d92324-248c-485f-bef2-45b88190e3c5',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Malak Marketplace',
    'malak-marketplace',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0812',
    '',
    'NT',
    '0812',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3e65fb9e-8a3e-4353-bcd7-d59bace1cd93',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'PARAP VILLAGE MARKET',
    'parap-village-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0804',
    '',
    'NT',
    '0804',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6869b9c9-32d9-4cb6-b2be-ff27af5d2a63',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Darwin Trailer Boat Club''s Car Boot Sale',
    'darwin-trailer-boat-clubs-car-boot-sale',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0820',
    '',
    'NT',
    '0820',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e731601c-e443-44bc-aa19-f1a15db75d38',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BATCHELOR MARKET',
    'batchelor-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0845',
    '',
    'NT',
    '0845',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9fd79661-d6cc-41c5-9a0b-e9a735fcc782',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'PALMERSTON and RURAL MARKETS',
    'palmerston-and-rural-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0830',
    '',
    'NT',
    '0830',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'aba5f3e6-5c6f-424c-8620-caf313070a2d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'MINDIL BEACH SUNSET MARKET',
    'mindil-beach-sunset-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'The Gardens NT 0820',
    'The Gardens',
    'NT',
    '0820',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1dc05dee-11ad-493d-841c-26e33f99f89e',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'KATHERINE COMMUNITY MARKET',
    'katherine-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0850',
    '',
    'NT',
    '0850',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2803fc31-36ed-4b2e-9d56-25d0ef5e69e9',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'NIGHTCLIFF MARKET',
    'nightcliff-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0810',
    '',
    'NT',
    '0810',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '94879f15-a2be-40c6-a294-d02715af721d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'THE FREDS PASS RURAL MARKET',
    'the-freds-pass-rural-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Bees Creek NT 0822',
    'Bees Creek',
    'NT',
    '0822',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '68c0c6d6-85c7-428b-b666-d489eea38272',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ALICE SPRINGS TOWN COUNCIL NIGHT MARKETS',
    'alice-springs-town-council-night-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0870',
    '',
    'NT',
    '0870',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c5b8c6e6-34bd-4691-ac4e-bea555437333',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'MUMMY MARKET NT',
    'mummy-market-nt',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0831',
    '',
    'NT',
    '0831',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cbfb8157-3d98-4c60-86b4-0627f4aa9633',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'RAPID CREEK MARKET',
    'rapid-creek-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0810',
    '',
    'NT',
    '0810',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '13153867-8bc5-4970-9f1f-7b26ab86dd21',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'TODD MALL MARKET ALICE SPRINGS',
    'todd-mall-market-alice-springs',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0870',
    '',
    'NT',
    '0870',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6d34f6e3-8aa0-4866-a9ba-ac8181b6ee26',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Airlie Beach - The Handmade Expo Market',
    'airlie-beach-the-handmade-expo-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Cannonvale QLD 4802',
    'Cannonvale',
    'QLD',
    '4802',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '51c251dd-36be-4e07-a23b-3e9aa8ed052d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Boundary Street Markets',
    'boundary-street-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4101',
    '',
    'QLD',
    '4101',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '84deee3a-1554-42ec-8336-0a457334d4ef',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BAM MARKETS - BEACH, ARTS, MUSIC',
    'bam-markets-beach-arts-music',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4680',
    '',
    'QLD',
    '4680',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '00b25a11-7afd-41dd-a724-0c3518879ce3',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ARCADE CAR PARK MARKET ROCKHAMPTON',
    'arcade-car-park-market-rockhampton',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Rockhampton City QLD 4700',
    'Rockhampton City',
    'QLD',
    '4700',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '582a78cd-3056-4e5c-8927-7e93ec0005b5',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Goodna Jacaranda Festival',
    'goodna-jacaranda-festival',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Evan Marginson Park, 49 Woogaroo Street, Goodna QLD 4300',
    'Goodna',
    'QLD',
    '4300',
    'Australia',
    -27.6066346,
    152.9006111,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7c71c65c-71a4-40f4-b50b-580e70b598b5',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BEENLEIGH EARLY BIRD MARKETS',
    'beenleigh-early-bird-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4207',
    '',
    'QLD',
    '4207',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '195e2806-dae3-46c0-8ffe-bb784da9f7ca',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BARDON COMMUNITY MARKET',
    'bardon-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4065',
    '',
    'QLD',
    '4065',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e7005f6c-4ac0-4bd2-b27c-12828b6eddd6',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BRISBANE NIGHT MARKET',
    'brisbane-night-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Rocklea QLD 4106',
    'Rocklea',
    'QLD',
    '4106',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'fcdabeff-308b-48bd-b2d9-64a1cd5dce45',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BOWENS LIONS MARKET',
    'bowens-lions-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4805',
    '',
    'QLD',
    '4805',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b7a8ff0f-1a59-45bb-998f-8d316876aaab',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'AIRLIE BEACH MARKETS',
    'airlie-beach-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4802',
    '',
    'QLD',
    '4802',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'aa6c94ad-0ed4-430f-ae66-6ff11ba130ba',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Apollonian Hotel Markets',
    'apollonian-hotel-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4565',
    '',
    'QLD',
    '4565',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e480d14c-430b-4f37-929a-c1c89329ae8a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ATHERTON MARKET',
    'atherton-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Atherton QLD 4883',
    'Atherton',
    'QLD',
    '4883',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '21715b92-c92b-47d3-9750-39a4c24ea634',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Bazaar Racecourse Market',
    'bazaar-racecourse-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4551',
    '',
    'QLD',
    '4551',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2e2466ef-3b92-4fe5-b1b2-a4aaf46e736a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BRISBANE MARKETPLACE: Sunday Discovery Market',
    'brisbane-marketplace-sunday-discovery-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4106',
    '',
    'QLD',
    '4106',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0d01ae0b-354d-4229-a77e-099853eb8243',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Billycart Markets - Sandgate',
    'billycart-markets-sandgate',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4017',
    '',
    'QLD',
    '4017',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '64e4537f-cb10-498b-b781-e25437782485',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BEENLEIGH SHOWGROUND MARKET',
    'beenleigh-showground-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4207',
    '',
    'QLD',
    '4207',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4ad15db5-8a1d-46cc-9e1b-e718acc8977b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    '4207 Indoor Markets',
    '4207-indoor-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Beenleigh QLD 4207',
    'Beenleigh',
    'QLD',
    '4207',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9cb66866-b78e-4705-b8c5-fa6b1d404189',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Brisbane MarketPlace: Saturday Fresh Market',
    'brisbane-marketplace-saturday-fresh-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Rocklea QLD 4106',
    'Rocklea',
    'QLD',
    '4106',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cd2402b9-97ea-4349-a399-9a957f4d26f9',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BELL PARK MARKETS',
    'bell-park-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4710',
    '',
    'QLD',
    '4710',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '49127a3c-2547-4873-b8eb-038a7cd93f84',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BOONAH COUNTRY MARKETS',
    'boonah-country-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4310',
    '',
    'QLD',
    '4310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7d53e930-ff29-40fc-a775-e62dea3ce45b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BARMERA MAIN STREET MARKET',
    'barmera-main-street-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5345',
    '',
    'SA',
    '5345',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8d8a9ab8-cdb4-4eef-a553-968f0bea77e8',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ADELAIDE CENTRAL MARKET',
    'adelaide-central-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5000',
    '',
    'SA',
    '5000',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cade6edb-08d2-4a6a-aac9-10072501059d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BLACKWOOD ART & CRAFT MARKET',
    'blackwood-art-craft-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5051',
    '',
    'SA',
    '5051',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '73c97a83-12a5-4312-aad7-294a144c521c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Green Light Organic Market Willunga',
    'green-light-organic-market-willunga',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Willunga SA 5172',
    'Willunga',
    'SA',
    '5172',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e686791c-cc6e-4b61-83d1-c0c40d36e858',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Adelaide Hills Farmers Market',
    'adelaide-hills-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Mount Barker SA 5251',
    '',
    'SA',
    '5251',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '88562c1c-7b45-4943-bd46-0f456c9ab24b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ANGASTON MARKET',
    'angaston-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Angaston SA 5353',
    'Angaston',
    'SA',
    '5353',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9c0ba5b5-e09e-427d-a697-cb019a7f9062',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ADELAIDE NIGHT MARKET',
    'adelaide-night-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5000',
    '',
    'SA',
    '5000',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9a1f8922-002b-488b-bb65-e303c7754646',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'GAWLER LIONS STATION MARKET',
    'gawler-lions-station-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5118',
    '',
    'SA',
    '5118',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '482cd942-a8fa-47fd-b888-1dafa11db4a9',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ADELAIDE SHOWGROUND FARMERS MARKET',
    'adelaide-showground-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5034',
    '',
    'SA',
    '5034',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '160b929f-140d-4ec0-8007-ff7881b7102f',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Community Market - Kangaroo Island',
    'community-market-kangaroo-island',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5220',
    '',
    'SA',
    '5220',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '462fb456-487d-4072-ab8b-36940a79848c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'FISHERMAN''S WHARF MARKET',
    'fishermans-wharf-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Port Adelaide SA 5015',
    'Port Adelaide',
    'SA',
    '5015',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '93189e36-e119-4ca2-9f01-3c30ccb9587f',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BEACHFRONT TWILIGHT MARKETS AT SEACLIFF',
    'beachfront-twilight-markets-at-seacliff',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    '3/1741 Pittwater Road',
    '',
    'SA',
    '1741',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'f404646f-7d6c-4e6d-96f6-ef169c10badd',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Farmers Markets - Kangaroo Island',
    'farmers-markets-kangaroo-island',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5220',
    '',
    'SA',
    '5220',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd46bfb69-7e21-4c91-98c3-538804b0c10f',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'GILLES STREET MARKET',
    'gilles-street-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5086',
    '',
    'SA',
    '5086',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '88cee7ee-6566-4b8d-a55f-46296a8a640a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'FULLARTON MARKET',
    'fullarton-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5063',
    '',
    'SA',
    '5063',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '07878709-7206-4aba-ac5e-75a47c84c4a6',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Barker Market',
    'barker-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5255',
    '',
    'SA',
    '5255',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2284c293-3c52-473f-abb7-8cc97df8c9d2',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'GOOLWA WHARF MARKET',
    'goolwa-wharf-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5214',
    '',
    'SA',
    '5214',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9ad26b63-85c7-4706-98ee-5855b1e3f982',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Elizabeth Grove Community Market',
    'elizabeth-grove-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5112',
    '',
    'SA',
    '5112',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '62376150-2812-4359-af7d-cb8c8e6bcb0b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'FARM PRODUCE MARKET',
    'farm-produce-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5211',
    '',
    'SA',
    '5211',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7d21039c-6524-4f79-be28-75fb42174723',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'GEPPS CROSS SUNDAY TREASURE MARKET',
    'gepps-cross-sunday-treasure-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5094',
    '',
    'SA',
    '5094',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '59b41d45-e0c9-4a5c-b551-5fbfe60305db',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BUMPS BUBS & BEYOND MARKETS',
    'bumps-bubs-beyond-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7307',
    '',
    'TAS',
    '7307',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '36ee2102-7e89-41cd-b408-da96b38053ad',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BREAM CREEK FARMERS MARKET',
    'bream-creek-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Bream Creek TAS 7175',
    'Bream Creek',
    'TAS',
    '7175',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '54b07611-5ad7-4808-82fc-d02f96e8f076',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Brookfield Twilight Market',
    'brookfield-twilight-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7054',
    '',
    'TAS',
    '7054',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'eee47254-c8f8-4804-b2a3-174c812802ca',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'All Saints Market',
    'all-saints-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'South Hobart TAS 7004',
    'South Hobart',
    'TAS',
    '7004',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2e5f17ad-964e-40f4-a332-a1e26f4787c2',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'AVALON MARKET',
    'avalon-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7250',
    '',
    'TAS',
    '7250',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0f410bc1-d604-4a9c-8597-5ab6e58d934e',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'DEVONPORT FARMERS MARKET',
    'devonport-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7310',
    '',
    'TAS',
    '7310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd362f1e5-c488-4640-ab40-5b8de6589e0d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BRIGHTON MARKET',
    'brighton-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Pontville TAS 7030',
    '',
    'TAS',
    '7030',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '189cc8e6-272b-44f4-98c9-cb90424fb7a0',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BUSHY PARK COMMUNITY MARKET',
    'bushy-park-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7140',
    '',
    'TAS',
    '7140',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '63f0f4c5-7484-41fb-9ac2-4dd15481ba46',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Deloraine Market',
    'deloraine-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7304',
    '',
    'TAS',
    '7304',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '772037d6-3c3c-4d02-a88c-428b0db3bf60',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'CLAUDE RD MARKET',
    'claude-rd-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7306',
    '',
    'TAS',
    '7306',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd43aa9f4-dc45-41fa-b69b-ca6b9ed74f7b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'DELORIANE MARKET',
    'deloriane-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7304',
    '',
    'TAS',
    '7304',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd7d3970a-b37f-4caa-b8f8-ee492374fe30',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BURNIE FARMERS MARKETS',
    'burnie-farmers-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7320',
    '',
    'TAS',
    '7320',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '57681ee7-ef81-45b8-95ea-f5f3d410d519',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BURNIE FARMERS MARKET & COUNTRY',
    'burnie-farmers-market-country',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7320',
    '',
    'TAS',
    '7320',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '49a3a483-24a0-4cf9-947a-f24ebba5b89d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Cradle Coast Farmers Market',
    'cradle-coast-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7315',
    '',
    'TAS',
    '7315',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b9b88547-b647-4cfb-947d-769b84b9310d',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'CWA MARKET',
    'cwa-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Bridport TAS 7262',
    'Bridport',
    'TAS',
    '7262',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b8d7a82b-36ed-47be-8654-e9d5c3e92065',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'DELORANIE MARKET',
    'deloranie-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7304',
    '',
    'TAS',
    '7304',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c5611638-5da5-495d-ac2b-b3de5d3fc67c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Devonport Farmers'' Market',
    'devonport-farmers-market-1',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7310',
    '',
    'TAS',
    '7310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e34c1e1a-3789-4f6f-bc51-786e8d803a23',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'AXEMANS MAKERS MARKET',
    'axemans-makers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7307',
    '',
    'TAS',
    '7307',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4f7127ec-d195-4911-a8e7-6d3d4faec1d4',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'CAMPBELL TOWN MARKET',
    'campbell-town-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7210',
    '',
    'TAS',
    '7210',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5572c139-c683-4615-a821-4f5a0fa42683',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'DON VILLAGE MARKET',
    'don-village-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7310',
    '',
    'TAS',
    '7310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c12aadf7-af03-4329-aa29-591a56e0c726',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ARARAT TRASH & TREASURE FARMERS MARKET',
    'ararat-trash-treasure-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3377',
    '',
    'VIC',
    '3377',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '476691da-154a-4e80-8711-a0045749106a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'A PLUS MARKET',
    'a-plus-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3058',
    '',
    'VIC',
    '3058',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '917e6ee0-620c-447b-92f6-6d53fa04aeda',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ALTONA BEACH MARKET',
    'altona-beach-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Altona VIC 3018',
    'Altona',
    'VIC',
    '3018',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '265f6f1a-e557-4657-a65d-2e311283e345',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ALEXANDRA MARKET',
    'alexandra-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3714',
    '',
    'VIC',
    '3714',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '234e6f8c-8fcf-4e2a-a93e-e767d535ffc7',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'AIREY''S INLET MARKET',
    'aireys-inlet-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3231',
    '',
    'VIC',
    '3231',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '65a8005e-49bd-48d7-93c2-a2d48ed7dfb3',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'AKOONAH PARK MARKET',
    'akoonah-park-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Berwick VIC 3806',
    'Berwick',
    'VIC',
    '3806',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a2034c15-37ee-4cc9-9b81-a041722f03c3',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Ballan Farmers Market',
    'ballan-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3342',
    '',
    'VIC',
    '3342',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '15a812d3-cf46-4b04-bfa5-2e34ae82eece',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Abbotsford Convent Farmers Market',
    'abbotsford-convent-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Abbotsford VIC 3067',
    'Abbotsford',
    'VIC',
    '3067',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '83f57ffc-70e7-4129-91d7-485a96337a46',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Bairnsdale Makers Market',
    'bairnsdale-makers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3875',
    '',
    'VIC',
    '3875',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8492d4fb-0968-40da-8f2d-135ace91a788',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Pipeworks Market',
    'pipeworks-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Pipeworks Market, 5 Dunstans Court, Thomastown VIC 3074',
    'Thomastown',
    'VIC',
    '3074',
    'Australia',
    -37.6928106,
    145.0164046,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'fd3774ef-3a7b-41e0-bbee-e8740757270b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Alphington Farmers Market',
    'alphington-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Alphington VIC 3078',
    'Alphington',
    'VIC',
    '3078',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '77a8ca21-1493-4d53-80e1-17c3c0d379c5',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ARARAT SEASONAL FARMERS MARKET',
    'ararat-seasonal-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3377',
    '',
    'VIC',
    '3377',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '43b9f1db-c829-47c5-a81f-d9b3f20da18a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'APOLLO BAY MARKET',
    'apollo-bay-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3233',
    '',
    'VIC',
    '3233',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8ba704b7-ef43-4ce2-81bf-fef260fd646c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Ballan Lions Market',
    'ballan-lions-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3342',
    '',
    'VIC',
    '3342',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '328805db-f78b-465c-b6e2-0d495039ff1b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ARTS CENTRE MELBOURNE SUNDAY MARKET',
    'arts-centre-melbourne-sunday-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Southbank VIC 3006',
    'Southbank',
    'VIC',
    '3006',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1094f57c-5661-41a0-8ce2-c7f25e738f50',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ARARAT TRASH AND TREASURE AND FARMERS MARKET (COMBINED)',
    'ararat-trash-and-treasure-and-farmers-market-combined',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Ararat VIC 3377',
    'Ararat',
    'VIC',
    '3377',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '50bbc0c5-b9fb-4f69-baad-dfe4dae7ec91',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ASHWOOD FARMERS'' MARKET',
    'ashwood-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3147',
    '',
    'VIC',
    '3147',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2b4ad499-56a3-4030-95c9-dec26e0108df',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BALLARAT BRIDGE MALL FARMERS MARKET',
    'ballarat-bridge-mall-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3350',
    '',
    'VIC',
    '3350',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b80276c7-84e7-47fa-b0f6-97d7fd4a0ab4',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'APOLLO BAY FARMERS MARKET',
    'apollo-bay-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Apollo Bay VIC 3233',
    'Apollo Bay',
    'VIC',
    '3233',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c77d0214-643c-4aa0-953a-6f90fc16a0e3',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Amber Lane Makers Market',
    'amber-lane-makers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3342',
    '',
    'VIC',
    '3342',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '40a58362-b391-4cc4-8dcb-4d9443cd1969',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BODDINGTON COMMUNITY MARKETS',
    'boddington-community-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6390',
    '',
    'WA',
    '6390',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e1ad373f-bd0b-4eff-a0a9-ab9dc3392954',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'CARNARVON COURTYARD CRAFT MARKETS',
    'carnarvon-courtyard-craft-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6701',
    '',
    'WA',
    '6701',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'db65c818-e50c-497d-aa53-7475f32834be',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'CANNING VALE MARKETS',
    'canning-vale-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6155',
    '',
    'WA',
    '6155',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '049626ca-a841-4fca-a7a3-1050d544553c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BOYANUP & DISTRICTS FARMERS',
    'boyanup-districts-farmers',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6237',
    '',
    'WA',
    '6237',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b1bf64a1-9432-436b-b4bf-9319d0463bb4',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'FREMANTLE MARKETS - rE-Reopens Friday 10th July',
    'fremantle-markets-re-reopens-friday-10th-july',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Fremantle WA 6160',
    '',
    'WA',
    '6160',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'f7f2c595-8109-4b59-abaf-7bd6fe7f3252',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BROOME COURTHOUSE MARKET',
    'broome-courthouse-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Broome WA 6725',
    'Broome',
    'WA',
    '6725',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c3ed8974-b122-43ab-ba0a-226675388b3b',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Bridgetown River Markets',
    'bridgetown-river-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 0625',
    '',
    'WA',
    '0625',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '13c53549-fca7-463d-9951-57def2008300',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Chidlow Hall Market Day',
    'chidlow-hall-market-day',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'CHIDLOW WA 6556',
    'CHIDLOW',
    'WA',
    '6556',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'fcf6c608-55c2-4bcc-babd-9e104440705c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'ALBANY FARMERS MARKET',
    'albany-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6330',
    '',
    'WA',
    '6330',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e725bdbf-c1e6-4483-a54a-3eff24720696',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'DONGARA MARKETS',
    'dongara-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6525',
    '',
    'WA',
    '6525',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'f3fac4a2-446d-405e-a78b-f54cc6299ea0',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'E-SHED MARKET FREMANTLE',
    'e-shed-market-fremantle',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6160',
    '',
    'WA',
    '6160',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'df385f5c-9cb0-460d-bfa9-bd77112e9bf1',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Brighton Moonlight Markets',
    'brighton-moonlight-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6036',
    '',
    'WA',
    '6036',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7884ffc6-0312-4ca5-a555-563b5d7f7ca2',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BROOM STAIRCASE TO THE MOON NIGHT MARKETS',
    'broom-staircase-to-the-moon-night-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Broome WA 6725',
    'Broome',
    'WA',
    '6725',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '80a50325-dc97-490f-9f6c-38ee0e7ed50a',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Cannington Antique & Collectors Fair',
    'cannington-antique-collectors-fair',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6107',
    '',
    'WA',
    '6107',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '35065f2f-0067-4930-bcae-8c9f4f26c97c',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Dampier Beachside Markets',
    'dampier-beachside-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6713',
    '',
    'WA',
    '6713',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2991f9f6-0dda-4656-b145-0b2f76c34083',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BUSSELTON RAILWAY MARKETS',
    'busselton-railway-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6280',
    '',
    'WA',
    '6280',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cfee3567-efaa-4c01-bc6f-e85b44a61133',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Bathers Beach Sunset Market',
    'bathers-beach-sunset-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6160',
    '',
    'WA',
    '6160',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6f17e7fa-4e1e-4327-92c6-830befe5b0bc',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'DENMARK ART and CRAFT MARKET',
    'denmark-art-and-craft-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6333',
    '',
    'WA',
    '6333',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a4cba5d3-0396-4dbe-8aef-cafc7de047ad',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'BELMONT WA ROTAMART Weekend Market',
    'belmont-wa-rotamart-weekend-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Cloverdale WA 6105',
    'Cloverdale',
    'WA',
    '6105',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2aa92f3d-2551-4975-b8f3-18cedfb8c1cf',
    '074639b4-5ebb-4f4e-8f7c-7b4c95cbbcaa',
    'Central Park Farmers'' Market',
    'central-park-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6000',
    '',
    'WA',
    '6000',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'live',
    NOW(),
    NOW()
);