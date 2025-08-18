import * as Sentry from '@sentry/nextjs'

export function initSentry() {
  if (process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 0.1,
      integrations: [
        new Sentry.BrowserTracing({
          tracingOrigins: [process.env.NEXT_PUBLIC_SITE_URL || 'localhost'],
        }),
      ],
      environment: process.env.NODE_ENV,
      beforeSend(event) {
        // Filter out some noise
        if (event.exception) {
          const error = event.exception.values?.[0]
          if (error?.value?.includes('ResizeObserver loop limit exceeded')) {
            return null
          }
        }
        return event
      },
    })
  }
}

export { Sentry }