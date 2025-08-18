import { serve } from 'inngest/next'
import { inngest } from '@/lib/inngest'
import { 
  parseDocument, 
  sendEmail, 
  sendDocumentExpiringEmail,
  checkDocumentExpiry 
} from '@/lib/inngest/functions'

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    parseDocument,
    sendEmail,
    sendDocumentExpiringEmail,
    checkDocumentExpiry
  ],
})