'use client'

import { useEffect } from 'react'
import { initPostHog, posthog } from '@/lib/posthog'
import { usePathname } from 'next/navigation'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    initPostHog()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture('$pageview')
    }
  }, [pathname])

  return <>{children}</>
}