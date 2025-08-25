#!/usr/bin/env node
/**
 * Quick coordinate fix for production - add state-based coordinates
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

async function quickCoordinateFix() {
  console.log('⚡ QUICK COORDINATE FIX FOR PRODUCTION');
  console.log('=====================================\n');

  try {
    // First, let's get state distribution
    const { data: allMarkets } = await supabase
      .from('markets')
      .select('id, name, state, lat, lng');

    const stateGroups = allMarkets.reduce((acc, market) => {
      let state = 'Unknown';
      
      // Extract state from various state formats
      if (market.state) {
        if (market.state.includes('NSW')) state = 'NSW';
        else if (market.state.includes('VIC')) state = 'VIC';
        else if (market.state.includes('QLD')) state = 'QLD';
        else if (market.state.includes('WA')) state = 'WA';
        else if (market.state.includes('SA')) state = 'SA';
        else if (market.state.includes('ACT')) state = 'ACT';
        else if (market.state.includes('NT')) state = 'NT';
        else if (market.state.includes('TAS')) state = 'TAS';
        else state = market.state.substring(0, 10); // Truncate long states
      }
      
      if (!acc[state]) acc[state] = [];
      acc[state].push(market);
      return acc;
    }, {});

    console.log('📊 Markets by state:');
    Object.entries(stateGroups).forEach(([state, markets]) => {
      const withCoords = markets.filter(m => m.lat && m.lng).length;
      console.log(`   ${state}: ${markets.length} markets (${withCoords} with coordinates)`);
    });

    // State coordinates (capital cities)
    const stateCoords = {
      'NSW': { lat: -33.8688, lng: 151.2093 },
      'VIC': { lat: -37.8136, lng: 144.9631 },
      'QLD': { lat: -27.4698, lng: 153.0251 },
      'WA': { lat: -31.9505, lng: 115.8605 },
      'SA': { lat: -34.9285, lng: 138.6007 },
      'ACT': { lat: -35.2809, lng: 149.1300 },
      'NT': { lat: -12.4634, lng: 130.8456 },
      'TAS': { lat: -42.8821, lng: 147.3272 }
    };

    // Add slight randomization to spread markets around state capitals
    function addRandomOffset(lat, lng, maxOffset = 0.5) {
      return {
        lat: lat + (Math.random() - 0.5) * maxOffset,
        lng: lng + (Math.random() - 0.5) * maxOffset
      };
    }

    let totalUpdated = 0;

    for (const [state, markets] of Object.entries(stateGroups)) {
      if (stateCoords[state]) {
        const marketsToUpdate = markets.filter(m => !m.lat || !m.lng);
        
        if (marketsToUpdate.length > 0) {
          console.log(`\n📍 Updating ${marketsToUpdate.length} markets in ${state}...`);
          
          for (const market of marketsToUpdate) {
            const coords = addRandomOffset(stateCoords[state].lat, stateCoords[state].lng);
            
            const { error } = await supabase
              .from('markets')
              .update({ lat: coords.lat, lng: coords.lng })
              .eq('id', market.id);

            if (error) {
              console.error(`❌ Failed to update ${market.name}:`, error.message);
            } else {
              totalUpdated++;
            }
          }
          
          console.log(`✅ Updated ${marketsToUpdate.length} markets in ${state}`);
        }
      }
    }

    // Final verification
    console.log(`\n📊 FINAL RESULTS:`);
    console.log(`✅ Total markets updated: ${totalUpdated}`);
    
    const { data: finalMarkets } = await supabase
      .from('markets')
      .select('id')
      .not('lat', 'is', null)
      .not('lng', 'is', null);

    console.log(`📍 Total markets with coordinates: ${finalMarkets.length}/152`);
    
    if (finalMarkets.length > 100) {
      console.log('🎉 Excellent! Map will display most markets');
    } else if (finalMarkets.length > 50) {
      console.log('✅ Good! Map will have decent coverage');
    } else {
      console.log('⚠️  Limited coverage - consider adding more coordinates later');
    }

    return totalUpdated > 0;

  } catch (error) {
    console.error('❌ Error in quick coordinate fix:', error);
    return false;
  }
}

quickCoordinateFix();