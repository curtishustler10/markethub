import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // Skip middleware for auth callback routes to avoid interference
  if (request.nextUrl.pathname === '/auth/callback') {
    console.log('Middleware: Skipping auth callback route')
    return NextResponse.next()
  }

  // Log middleware execution for debugging
  console.log('Middleware running for:', request.nextUrl.pathname)

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protected routes
  const protectedRoutes = ['/organizer', '/vendor']
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // Redirect unauthenticated users to login
  if (isProtectedRoute && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    url.searchParams.set('next', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Role-based routing
  if (user && isProtectedRoute) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile) {
      const isOrganizerRoute = request.nextUrl.pathname.startsWith('/organizer')
      const isVendorRoute = request.nextUrl.pathname.startsWith('/vendor')

      // Redirect if user is accessing wrong role dashboard
      if (isOrganizerRoute && profile.role !== 'market_organizer' && profile.role !== 'admin') {
        const url = request.nextUrl.clone()
        url.pathname = '/vendor/browse'
        return NextResponse.redirect(url)
      }

      if (isVendorRoute && profile.role !== 'vendor' && profile.role !== 'admin') {
        const url = request.nextUrl.clone()
        url.pathname = '/organizer/dashboard'
        return NextResponse.redirect(url)
      }
    }
  }

  return response
}