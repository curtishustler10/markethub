import { Inngest } from 'inngest'

export const inngest = new Inngest({
  id: 'markethub',
  name: 'MarketHub',
  // Provide a default signing key for build time to prevent errors
  signingKey: process.env.INNGEST_SIGNING_KEY || 'build-time-dummy-key',
})