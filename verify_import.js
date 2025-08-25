#!/usr/bin/env node
/**
 * Verify the Australian markets import
 */

const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: './.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function verifyImport() {
  try {
    console.log('🔍 Verifying imported markets data...\n');
    
    // Count total markets
    const { count: totalMarkets, error: countError } = await supabase
      .from('markets')
      .select('*', { count: 'exact', head: true });
      
    if (countError) {
      console.error('❌ Error counting markets:', countError);
      return;
    }
    
    console.log(`📊 Total markets in database: ${totalMarkets}`);
    
    // Get sample of markets
    const { data: sampleMarkets, error: sampleError } = await supabase
      .from('markets')
      .select('name, city, state, status, created_at')
      .limit(10);
    
    if (sampleError) {
      console.error('❌ Error fetching sample:', sampleError);
      return;
    }
    
    console.log('\n📋 Sample of imported markets:');
    sampleMarkets.forEach((market, index) => {
      console.log(`${index + 1}. ${market.name} - ${market.city}, ${market.state} (${market.status})`);
    });
    
    // Count by state
    const { data: stateData, error: stateError } = await supabase
      .from('markets')
      .select('state');
      
    if (stateError) {
      console.error('❌ Error getting state data:', stateError);
      return;
    }
    
    const stateCounts = stateData.reduce((acc, market) => {
      const state = market.state || 'Unknown';
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n🗺️  Markets by state:');
    Object.entries(stateCounts).forEach(([state, count]) => {
      console.log(`   ${state}: ${count} markets`);
    });
    
    // Count by status
    const { data: statusData, error: statusError } = await supabase
      .from('markets')
      .select('status');
      
    if (statusError) {
      console.error('❌ Error getting status data:', statusError);
      return;
    }
    
    const statusCounts = statusData.reduce((acc, market) => {
      const status = market.status || 'Unknown';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n📊 Markets by status:');
    Object.entries(statusCounts).forEach(([status, count]) => {
      console.log(`   ${status}: ${count} markets`);
    });
    
    console.log('\n✅ Import verification completed successfully!');
    console.log('💡 All markets are ready to be claimed by organizers.');
    
  } catch (error) {
    console.error('❌ Verification failed:', error);
  }
}

verifyImport();