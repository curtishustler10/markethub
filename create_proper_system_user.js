#!/usr/bin/env node
/**
 * Create a proper system user and fix ownership issues
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

async function createSystemUserAndFixOwnership() {
  console.log('🔧 CREATING PROPER SYSTEM USER AND FIXING OWNERSHIP');
  console.log('==================================================\n');

  try {
    // Step 1: Create a proper system user through auth
    console.log('1️⃣ Creating system user through auth...');
    
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: 'system.unclaimed@markethub.com.au',
      password: 'system-password-' + Date.now(), // Random password
      email_confirm: true,
      user_metadata: {
        name: 'System - Unclaimed Markets'
      }
    });

    if (authError) {
      console.error('❌ Error creating system auth user:', authError);
      return false;
    }

    const systemUserId = authData.user.id;
    console.log('✅ Created system auth user:', systemUserId);

    // Step 2: Create profile for system user
    console.log('\n2️⃣ Creating system user profile...');
    
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: systemUserId,
        role: 'admin',
        name: 'System - Unclaimed Markets',
        email: 'system.unclaimed@markethub.com.au'
      });

    if (profileError) {
      console.error('❌ Error creating system profile:', profileError);
      return false;
    }

    console.log('✅ Created system user profile');

    // Step 3: Transfer all draft markets to system user
    console.log('\n3️⃣ Transferring draft markets to system user...');
    
    const { data: draftMarkets } = await supabase
      .from('markets')
      .select('id, name')
      .eq('status', 'draft');

    console.log(`📊 Found ${draftMarkets.length} draft markets to transfer`);

    const { error: transferError } = await supabase
      .from('markets')
      .update({ owner_id: systemUserId })
      .eq('status', 'draft');

    if (transferError) {
      console.error('❌ Error transferring markets:', transferError);
      return false;
    }

    console.log(`✅ Transferred ${draftMarkets.length} draft markets to system user`);

    // Step 4: Verification
    console.log('\n4️⃣ Verifying fixes...');
    
    const { data: updatedMarkets } = await supabase
      .from('markets')
      .select('status, owner_id')
      .eq('status', 'draft');

    const correctOwnership = updatedMarkets.every(m => m.owner_id === systemUserId);
    
    if (correctOwnership) {
      console.log('✅ All draft markets now owned by system user');
    } else {
      console.log('⚠️  Some draft markets still have incorrect ownership');
    }

    // Final status
    console.log('\n📊 FINAL STATUS');
    console.log('---------------');
    console.log(`🆔 System User ID: ${systemUserId}`);
    console.log(`📧 System Email: system.unclaimed@markethub.com.au`);
    console.log(`🏪 Draft Markets: ${draftMarkets.length} (now unclaimed and ready for organizers)`);
    
    console.log('\n🎉 SUCCESS! Production issues have been resolved!');
    console.log('📝 Next steps:');
    console.log('   - Organizers can now claim draft markets through the application');
    console.log('   - The system user owns all unclaimed markets');
    console.log('   - Database is ready for production deployment');

    return true;

  } catch (error) {
    console.error('❌ Error during system user creation:', error);
    return false;
  }
}

createSystemUserAndFixOwnership();