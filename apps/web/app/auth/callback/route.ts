import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { createUserProfile } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  console.log('🔐 Auth callback hit:', { 
    hasCode: !!code, 
    next, 
    origin,
    fullUrl: request.url,
    timestamp: new Date().toISOString()
  })

  if (code) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    console.log('Code exchange result:', { user: !!data?.user, error: error?.message })
    
    if (!error && data.user) {
      // Check if profile exists, create if not
      const { data: existingProfile, error: profileFetchError } = await supabase
        .from('profiles')
        .select('id, role')
        .eq('id', data.user.id)
        .maybeSingle()
        
      console.log('🔍 Profile check:', { 
        exists: !!existingProfile, 
        role: existingProfile?.role, 
        profileId: existingProfile?.id,
        userId: data.user.id,
        error: profileFetchError?.message,
        errorCode: profileFetchError?.code
      })
        
      if (!existingProfile) {
        // Create profile from user metadata
        const metadata = data.user.user_metadata || {}
        console.log('👤 Creating profile with metadata:', { 
          name: metadata.name, 
          role: metadata.role,
          userId: data.user.id,
          userEmail: data.user.email,
          fullMetadata: metadata
        })
        
        try {
          await createUserProfile(
            data.user.id,
            data.user.email!,
            metadata.name || data.user.email!.split('@')[0],
            metadata.role || 'vendor'
          )
          
          // Fetch the newly created profile
          const { data: newProfile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', data.user.id)
            .maybeSingle()
            
          console.log('✅ Profile created with role:', {
            role: newProfile?.role,
            profileId: newProfile?.id || data.user.id,
            success: !!newProfile
          })
        } catch (createError) {
          console.error('Error creating profile:', createError)
          return NextResponse.redirect(`${origin}/auth/auth-code-error`)
        }
      }
      
      // Get the current profile for redirect logic
      const { data: profile, error: roleError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .maybeSingle()
        
      console.log('🎯 Final profile for redirect:', { 
        role: profile?.role, 
        profileExists: !!profile,
        error: roleError?.message,
        errorCode: roleError?.code,
        nextParam: next
      })
        
      if (profile) {
        let redirectPath = next
        
        if (next === '/' || next === '/auth/login') {
          redirectPath = profile.role === 'market_organizer' || profile.role === 'admin' 
            ? '/organizer/dashboard' 
            : '/vendor/browse'
        }
        
        console.log('🚀 Redirecting to:', {
          originalNext: next,
          calculatedPath: redirectPath,
          userRole: profile.role,
          fullRedirectUrl: `${origin}${redirectPath}`
        })
        return NextResponse.redirect(`${origin}${redirectPath}`)
      } else {
        console.error('No profile found after creation attempt')
      }
    } else {
      console.error('Auth exchange failed:', error?.message)
    }
  } else {
    console.log('No code provided in callback')
  }

  // Return the user to an error page with instructions
  console.log('Redirecting to error page')
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}