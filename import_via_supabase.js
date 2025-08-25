#!/usr/bin/env node
/**
 * Import Australian markets via Supabase client library
 * This avoids direct SQL import and uses the API
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: './.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// System user ID (consistent with our SQL)
const SYSTEM_USER_ID = '00000000-0000-0000-0000-000000000000';

async function getOrCreateSystemUser() {
  console.log('📝 Checking for existing users...');
  
  // Let's just find any existing user to use as owner
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('id')
    .limit(1);
  
  if (error) {
    console.error('❌ Error fetching profiles:', error);
    return null;
  }
  
  if (profiles && profiles.length > 0) {
    console.log('✅ Found existing user to use as system owner:', profiles[0].id);
    return profiles[0].id;
  }
  
  console.log('⚠️  No existing users found. You need to create a user first through the app.');
  return null;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function importMarketsFromCSV(ownerId) {
  const csvPath = path.join(__dirname, 'all_australian_markets.csv');
  
  if (!fs.existsSync(csvPath)) {
    console.error('❌ CSV file not found:', csvPath);
    return;
  }

  console.log('📄 Reading CSV file...');
  const csvContent = fs.readFileSync(csvPath, 'utf8');
  const lines = csvContent.split('\n');
  const header = lines[0].split(',').map(h => h.replace(/"/g, ''));
  
  const markets = [];
  const processedSlugs = new Set();
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values = line.split(',').map(v => v.replace(/"/g, ''));
    const market = {};
    
    header.forEach((key, index) => {
      market[key] = values[index] || '';
    });
    
    if (!market.name) continue;
    
    // Create unique slug
    let baseSlug = slugify(market.name);
    let slug = baseSlug;
    let counter = 1;
    
    while (processedSlugs.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    processedSlugs.add(slug);
    
    markets.push({
      owner_id: ownerId,
      name: market.name,
      slug: slug,
      description: (market.description || '').substring(0, 500),
      address: market.address || '',
      city: market.suburb || market.city || '',
      state: market.state || '',
      postcode: market.postcode || '',
      country: market.country || 'Australia',
      lat: market.lat ? parseFloat(market.lat) : null,
      lng: market.lng ? parseFloat(market.lng) : null,
      amenities: {},
      requirements: {},
      status: 'draft' // Unclaimed markets start as draft
    });
  }
  
  console.log(`📊 Prepared ${markets.length} markets for import`);
  
  // Import in batches
  const batchSize = 10;
  let imported = 0;
  let errors = 0;
  
  for (let i = 0; i < markets.length; i += batchSize) {
    const batch = markets.slice(i, i + batchSize);
    
    console.log(`📦 Importing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(markets.length/batchSize)}...`);
    
    const { data, error } = await supabase
      .from('markets')
      .upsert(batch, { onConflict: 'slug' });
    
    if (error) {
      console.error(`❌ Error importing batch:`, error);
      errors += batch.length;
    } else {
      imported += batch.length;
      console.log(`✅ Imported ${batch.length} markets in this batch`);
    }
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n📊 Import Summary:`);
  console.log(`✅ Successfully imported: ${imported} markets`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`💡 All markets are in 'draft' status and can be claimed by organizers`);
}

async function main() {
  try {
    console.log('🚀 Starting Australian Markets Import...');
    
    // Find an existing user to use as owner
    const systemUserId = await getOrCreateSystemUser();
    if (!systemUserId) {
      console.error('❌ No user available to own the markets. Please create a user first.');
      process.exit(1);
    }
    
    // Then import markets
    await importMarketsFromCSV(systemUserId);
    
    console.log('🎉 Import process completed!');
    
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

main();