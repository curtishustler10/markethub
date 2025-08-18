import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { createUserProfile } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error && data.user) {
      // Check if profile exists, create if not
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', data.user.id)
        .single()
        
      if (!existingProfile) {
        // Create profile from user metadata
        const metadata = data.user.user_metadata || {}
        try {
          await createUserProfile(
            data.user.id,
            data.user.email!,
            metadata.name || data.user.email!.split('@')[0],
            metadata.role || 'vendor'
          )
        } catch (createError) {
          console.error('Error creating profile:', createError)
        }
      }
      
      // Determine redirect based on user role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single()
        
      if (profile) {
        let redirectPath = next
        
        if (next === '/' || next === '/auth/login') {
          redirectPath = profile.role === 'market_organizer' || profile.role === 'admin' 
            ? '/organizer/dashboard' 
            : '/vendor/browse'
        }
        
        return NextResponse.redirect(`${origin}${redirectPath}`)
      }
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}