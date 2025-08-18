import { inngest } from '@/lib/inngest'
import { createServiceClient } from '@/lib/supabase/server'
import { DocumentParser } from '@/lib/document-parser'
import { emailTemplates, type EmailTemplate } from 'shared'
import { Client as PostmarkClient } from 'postmark'
import { differenceInDays, parseISO } from 'date-fns'

const postmark = new PostmarkClient(process.env.POSTMARK_SERVER_TOKEN!)

// Document parsing function
export const parseDocument = inngest.createFunction(
  { id: 'parse-document' },
  { event: 'document/parse' },
  async ({ event }) => {
    const { storage_path, document_id, is_market_document } = event.data
    
    try {
      const supabase = createServiceClient()
      
      // Download the file from Supabase Storage
      const { data: fileData, error: downloadError } = await supabase.storage
        .from('documents')
        .download(storage_path)
      
      if (downloadError) {
        throw downloadError
      }

      // Convert blob to buffer
      const buffer = Buffer.from(await fileData.arrayBuffer())
      const mimeType = fileData.type
      
      // Parse the document
      const parseResult = await DocumentParser.parseDocument(buffer, mimeType)
      
      // Update the document record
      const tableName = is_market_document ? 'market_documents' : 'vendor_documents'
      
      const { error: updateError } = await supabase
        .from(tableName)
        .update({
          extracted_text: parseResult.extracted_text,
          number: parseResult.number,
          expiry_date: parseResult.expiry_date,
          verification_status: parseResult.verification_status,
          last_checked_at: new Date().toISOString()
        })
        .eq('id', document_id)
      
      if (updateError) {
        throw updateError
      }

      // If document is expiring or expired, trigger notification
      if (parseResult.verification_status === 'expiring_soon' || parseResult.verification_status === 'expired') {
        await inngest.send({
          name: 'email/document-expiring',
          data: {
            document_id,
            is_market_document,
            verification_status: parseResult.verification_status,
            expiry_date: parseResult.expiry_date
          }
        })
      }

      return { success: true, parseResult }
    } catch (error) {
      console.error('Error parsing document:', error)
      
      // Update document with error status
      const supabase = createServiceClient()
      const tableName = is_market_document ? 'market_documents' : 'vendor_documents'
      
      await supabase
        .from(tableName)
        .update({
          verification_status: 'needs_review',
          last_checked_at: new Date().toISOString()
        })
        .eq('id', document_id)
      
      throw error
    }
  }
)

// Email sending function
export const sendEmail = inngest.createFunction(
  { id: 'send-email' },
  { event: 'email/send' },
  async ({ event }) => {
    const { template, to_email, data } = event.data
    
    try {
      const supabase = createServiceClient()
      
      // Resolve email if it's a user ID
      let recipientEmail = to_email
      if (to_email.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('email')
          .eq('id', to_email)
          .single()
        
        if (profile?.email) {
          recipientEmail = profile.email
        } else {
          throw new Error(`No email found for user ID: ${to_email}`)
        }
      }

      // Get email template
      const templateFunc = emailTemplates[template as keyof typeof emailTemplates]
      if (!templateFunc) {
        throw new Error(`Unknown email template: ${template}`)
      }

      const emailContent = templateFunc(data as any) as EmailTemplate
      
      // Send email via Postmark
      const result = await postmark.sendEmail({
        From: 'noreply@markethub.com',
        To: recipientEmail,
        Subject: emailContent.subject,
        HtmlBody: emailContent.html,
        TextBody: emailContent.text,
        MessageStream: 'outbound'
      })

      // Log the email
      await supabase
        .from('emails_log')
        .insert({
          to_email: recipientEmail,
          template,
          payload: data
        })

      return { success: true, messageId: result.MessageID }
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }
)

// Document expiring notification
export const sendDocumentExpiringEmail = inngest.createFunction(
  { id: 'send-document-expiring-email' },
  { event: 'email/document-expiring' },
  async ({ event }) => {
    const { document_id, is_market_document, verification_status, expiry_date } = event.data
    
    try {
      const supabase = createServiceClient()
      
      let recipientData
      let documentType
      
      if (is_market_document) {
        const { data } = await supabase
          .from('market_documents')
          .select(`
            type,
            market:markets!market_id (
              name,
              owner:profiles!owner_id (
                id,
                name,
                email
              )
            )
          `)
          .eq('id', document_id)
          .single()
        
        if (data?.market?.owner) {
          recipientData = {
            ...data.market.owner,
            market_name: data.market.name,
            is_market_organizer: true
          }
          documentType = data.type
        }
      } else {
        const { data } = await supabase
          .from('vendor_documents')
          .select(`
            type,
            vendor:profiles!vendor_id (
              id,
              name,
              email
            ),
            vendor_profile:vendor_profiles!vendor_id (
              business_name
            )
          `)
          .eq('id', document_id)
          .single()
        
        if (data?.vendor) {
          recipientData = {
            ...data.vendor,
            business_name: data.vendor_profile?.business_name,
            is_market_organizer: false
          }
          documentType = data.type
        }
      }
      
      if (!recipientData || !recipientData.email) {
        throw new Error('Recipient not found')
      }
      
      const daysUntilExpiry = expiry_date ? differenceInDays(parseISO(expiry_date), new Date()) : 0
      
      await inngest.send({
        name: 'email/send',
        data: {
          template: 'document-expiring',
          to_email: recipientData.email,
          data: {
            recipient_name: recipientData.name || 'User',
            document_type: documentType,
            expiry_date: expiry_date,
            days_until_expiry: Math.max(0, daysUntilExpiry),
            is_market_organizer: recipientData.is_market_organizer,
            market_name: recipientData.market_name,
            business_name: recipientData.business_name
          }
        }
      })
      
      return { success: true }
    } catch (error) {
      console.error('Error sending document expiring email:', error)
      throw error
    }
  }
)

// Weekly expiry check
export const checkDocumentExpiry = inngest.createFunction(
  { id: 'check-document-expiry' },
  { event: 'cron/weekly-expiry-check' },
  async ({ event }) => {
    const supabase = createServiceClient()
    
    try {
      // Check market documents
      const { data: marketDocs } = await supabase
        .from('market_documents')
        .select('id, expiry_date, verification_status')
        .not('expiry_date', 'is', null)
        .in('verification_status', ['valid', 'expiring_soon'])
      
      // Check vendor documents  
      const { data: vendorDocs } = await supabase
        .from('vendor_documents')
        .select('id, expiry_date, verification_status')
        .not('expiry_date', 'is', null)
        .in('verification_status', ['valid', 'expiring_soon'])
      
      const allDocs = [
        ...(marketDocs || []).map(doc => ({ ...doc, is_market_document: true })),
        ...(vendorDocs || []).map(doc => ({ ...doc, is_market_document: false }))
      ]
      
      let updatedCount = 0
      let notificationsCount = 0
      
      for (const doc of allDocs) {
        if (doc.expiry_date) {
          const newStatus = calculateVerificationStatus(doc.expiry_date)
          
          if (newStatus !== doc.verification_status) {
            // Update document status
            const tableName = doc.is_market_document ? 'market_documents' : 'vendor_documents'
            await supabase
              .from(tableName)
              .update({ 
                verification_status: newStatus,
                last_checked_at: new Date().toISOString()
              })
              .eq('id', doc.id)
            
            updatedCount++
            
            // Send notification if expiring or expired
            if (newStatus === 'expiring_soon' || newStatus === 'expired') {
              await inngest.send({
                name: 'email/document-expiring',
                data: {
                  document_id: doc.id,
                  is_market_document: doc.is_market_document,
                  verification_status: newStatus,
                  expiry_date: doc.expiry_date
                }
              })
              notificationsCount++
            }
          }
        }
      }
      
      return { 
        success: true, 
        checked: allDocs.length,
        updated: updatedCount,
        notifications_sent: notificationsCount
      }
    } catch (error) {
      console.error('Error checking document expiry:', error)
      throw error
    }
  }
)