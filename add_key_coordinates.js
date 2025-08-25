#!/usr/bin/env node
/**
 * Add coordinates to key markets for production deployment
 */

const { createClient } = require('@supabase/supabase-js');

require('dotenv').config({ path: './.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Key Australian city coordinates
const cityCoordinates = {
  'Sydney': { lat: -33.8688, lng: 151.2093 },
  'Melbourne': { lat: -37.8136, lng: 144.9631 },
  'Brisbane': { lat: -27.4698, lng: 153.0251 },
  'Perth': { lat: -31.9505, lng: 115.8605 },
  'Adelaide': { lat: -34.9285, lng: 138.6007 },
  'Canberra': { lat: -35.2809, lng: 149.1300 },
  'Darwin': { lat: -12.4634, lng: 130.8456 },
  'Hobart': { lat: -42.8821, lng: 147.3272 },
  'Gold Coast': { lat: -28.0167, lng: 153.4000 },
  'Newcastle': { lat: -32.9283, lng: 151.7817 },
  'Wollongong': { lat: -34.4278, lng: 150.8931 },
  'Geelong': { lat: -38.1499, lng: 144.3617 },
  'Townsville': { lat: -19.2590, lng: 146.8169 },
  'Cairns': { lat: -16.9186, lng: 145.7781 }
};

// State-based fallback coordinates
const stateCoordinates = {
  'NSW': { lat: -33.8688, lng: 151.2093 }, // Sydney
  'VIC': { lat: -37.8136, lng: 144.9631 }, // Melbourne
  'QLD': { lat: -27.4698, lng: 153.0251 }, // Brisbane
  'WA': { lat: -31.9505, lng: 115.8605 },  // Perth
  'SA': { lat: -34.9285, lng: 138.6007 },  // Adelaide
  'ACT': { lat: -35.2809, lng: 149.1300 }, // Canberra
  'NT': { lat: -12.4634, lng: 130.8456 },  // Darwin
  'TAS': { lat: -42.8821, lng: 147.3272 }  // Hobart
};

async function addKeyCoordinates() {
  console.log('📍 ADDING KEY COORDINATES FOR PRODUCTION');
  console.log('========================================\n');

  try {
    // Get all markets without coordinates
    const { data: marketsWithoutCoords } = await supabase
      .from('markets')
      .select('id, name, city, state, address')
      .or('lat.is.null,lng.is.null');

    console.log(`📊 Found ${marketsWithoutCoords.length} markets without coordinates`);

    let updated = 0;
    let skipped = 0;

    for (const market of marketsWithoutCoords) {
      let coords = null;
      
      // Try to match by city name
      const cityName = market.city?.trim();
      if (cityName && cityCoordinates[cityName]) {
        coords = cityCoordinates[cityName];
        console.log(`✅ ${market.name} → ${cityName}: ${coords.lat}, ${coords.lng}`);
      }
      // Try to match by state
      else if (market.state && stateCoordinates[market.state]) {
        coords = stateCoordinates[market.state];
        console.log(`🗺️  ${market.name} → ${market.state} (state): ${coords.lat}, ${coords.lng}`);
      }
      // Try to extract city from address
      else if (market.address) {
        const addressLower = market.address.toLowerCase();
        const matchedCity = Object.keys(cityCoordinates).find(city => 
          addressLower.includes(city.toLowerCase())
        );
        
        if (matchedCity) {
          coords = cityCoordinates[matchedCity];
          console.log(`📍 ${market.name} → ${matchedCity} (from address): ${coords.lat}, ${coords.lng}`);
        }
      }

      if (coords) {
        // Update market with coordinates
        const { error: updateError } = await supabase
          .from('markets')
          .update({ 
            lat: coords.lat, 
            lng: coords.lng 
          })
          .eq('id', market.id);

        if (updateError) {
          console.error(`❌ Failed to update ${market.name}:`, updateError.message);
        } else {
          updated++;
        }
      } else {
        skipped++;
        if (skipped <= 5) { // Only show first 5 skipped
          console.log(`⚠️  Skipped: ${market.name} (${market.city || 'No city'}, ${market.state || 'No state'})`);
        }
      }
    }

    console.log(`\n📊 COORDINATE UPDATE RESULTS:`);
    console.log(`✅ Successfully updated: ${updated} markets`);
    console.log(`⚠️  Skipped: ${skipped} markets`);
    
    // Final verification
    const { data: finalCheck } = await supabase
      .from('markets')
      .select('id')
      .not('lat', 'is', null)
      .not('lng', 'is', null);

    console.log(`📍 Total markets with coordinates: ${finalCheck.length}/152`);
    
    if (finalCheck.length >= 50) {
      console.log('✅ Sufficient coordinates for map functionality');
    } else {
      console.log('⚠️  Limited coordinates - map may appear sparse');
    }

    return updated > 0;

  } catch (error) {
    console.error('❌ Error adding coordinates:', error);
    return false;
  }
}

addKeyCoordinates();