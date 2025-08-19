// Prevent static analysis during build
export const dynamic = 'force-dynamic'

// Conditionally create handlers to avoid build-time issues
let handlers: { GET: any; POST: any; PUT: any }

// Check if we're in build mode (no INNGEST_SIGNING_KEY or NODE_ENV is not production)
const isBuildTime = !process.env.INNGEST_SIGNING_KEY || process.env.NODE_ENV === 'build'

if (isBuildTime) {
  // Fallback handlers for build time
  const fallbackHandler = () => new Response('Inngest not configured', { status: 500 })
  handlers = {
    GET: fallbackHandler,
    POST: fallbackHandler,
    PUT: fallbackHandler,
  }
} else {
  // Only import and initialize Inngest at runtime
  try {
    const { serve } = require('inngest/next')
    const { inngest } = require('@/lib/inngest')
    const { sendEmail, sendDocumentExpiringEmail, checkDocumentExpiry } = require('@/lib/inngest/functions')
    
    handlers = serve({
      client: inngest,
      functions: [
        // parseDocument, // Temporarily disabled to fix build issues
        sendEmail,
        sendDocumentExpiringEmail,
        checkDocumentExpiry
      ],
    })
  } catch (error) {
    console.error('Error initializing Inngest:', error)
    const fallbackHandler = () => new Response('Inngest initialization failed', { status: 500 })
    handlers = {
      GET: fallbackHandler,
      POST: fallbackHandler,
      PUT: fallbackHandler,
    }
  }
}

export const { GET, POST, PUT } = handlers