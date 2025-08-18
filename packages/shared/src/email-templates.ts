export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface NewApplicationEmailData {
  vendor_name: string;
  market_name: string;
  application_id: string;
  vendor_business_name?: string;
  vendor_category?: string;
  message?: string;
}

export interface ApplicationDecisionEmailData {
  vendor_name: string;
  market_name: string;
  status: 'accepted' | 'refused' | 'not_now';
  message?: string;
  market_contact_email?: string;
}

export interface DocumentExpiringEmailData {
  recipient_name: string;
  document_type: string;
  expiry_date: string;
  days_until_expiry: number;
  is_market_organizer: boolean;
  market_name?: string;
  business_name?: string;
}

export const emailTemplates = {
  'new-application': (data: NewApplicationEmailData): EmailTemplate => ({
    subject: `New Vendor Application - ${data.market_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #059669; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MarketHub</h1>
          <p style="margin: 10px 0 0 0;">New Vendor Application</p>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: #059669; margin-bottom: 20px;">New Application Received</h2>
          
          <p>Hello,</p>
          
          <p>You have received a new vendor application for <strong>${data.market_name}</strong>.</p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Application Details</h3>
            <p><strong>Vendor:</strong> ${data.vendor_name}</p>
            ${data.vendor_business_name ? `<p><strong>Business:</strong> ${data.vendor_business_name}</p>` : ''}
            ${data.vendor_category ? `<p><strong>Category:</strong> ${data.vendor_category.replace('_', ' ')}</p>` : ''}
            ${data.message ? `<p><strong>Message:</strong><br>${data.message}</p>` : ''}
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/organizer/applications" 
               style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Review Application
            </a>
          </div>
          
          <p>Best regards,<br>The MarketHub Team</p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            This email was sent because you have a market registered on MarketHub.
          </p>
        </div>
      </div>
    `,
    text: `
New Vendor Application - ${data.market_name}

Hello,

You have received a new vendor application for ${data.market_name}.

Application Details:
- Vendor: ${data.vendor_name}
${data.vendor_business_name ? `- Business: ${data.vendor_business_name}` : ''}
${data.vendor_category ? `- Category: ${data.vendor_category.replace('_', ' ')}` : ''}
${data.message ? `- Message: ${data.message}` : ''}

Review the application at: ${process.env.NEXT_PUBLIC_SITE_URL}/organizer/applications

Best regards,
The MarketHub Team
    `,
  }),

  'application-decision': (data: ApplicationDecisionEmailData): EmailTemplate => ({
    subject: `Application ${data.status === 'accepted' ? 'Accepted' : data.status === 'refused' ? 'Declined' : 'Updated'} - ${data.market_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: ${data.status === 'accepted' ? '#059669' : data.status === 'refused' ? '#dc2626' : '#f59e0b'}; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MarketHub</h1>
          <p style="margin: 10px 0 0 0;">Application ${data.status === 'accepted' ? 'Accepted' : data.status === 'refused' ? 'Declined' : 'Updated'}</p>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: ${data.status === 'accepted' ? '#059669' : data.status === 'refused' ? '#dc2626' : '#f59e0b'}; margin-bottom: 20px;">
            Application ${data.status === 'accepted' ? 'Accepted!' : data.status === 'refused' ? 'Declined' : 'Update'}
          </h2>
          
          <p>Hello ${data.vendor_name},</p>
          
          <p>Your application to <strong>${data.market_name}</strong> has been 
             <strong>${data.status === 'accepted' ? 'accepted' : data.status === 'refused' ? 'declined' : 'updated'}</strong>.</p>
          
          ${data.status === 'accepted' ? `
            <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #059669;">
              <p style="margin: 0; color: #065f46;"><strong>Congratulations!</strong> Welcome to ${data.market_name}!</p>
            </div>
          ` : data.status === 'refused' ? `
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
              <p style="margin: 0; color: #991b1b;">Unfortunately, your application was not successful at this time.</p>
            </div>
          ` : `
            <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;">Your application status has been updated to: Not Now</p>
            </div>
          `}
          
          ${data.message ? `
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Message from Market Organizer</h3>
              <p style="margin-bottom: 0;">${data.message}</p>
            </div>
          ` : ''}
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/vendor/applications" 
               style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              View All Applications
            </a>
          </div>
          
          ${data.market_contact_email ? `
            <p>If you have any questions, please contact the market organizer at: 
               <a href="mailto:${data.market_contact_email}">${data.market_contact_email}</a></p>
          ` : ''}
          
          <p>Best regards,<br>The MarketHub Team</p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            This email was sent because you applied to a market on MarketHub.
          </p>
        </div>
      </div>
    `,
    text: `
Application ${data.status === 'accepted' ? 'Accepted' : data.status === 'refused' ? 'Declined' : 'Updated'} - ${data.market_name}

Hello ${data.vendor_name},

Your application to ${data.market_name} has been ${data.status === 'accepted' ? 'accepted' : data.status === 'refused' ? 'declined' : 'updated'}.

${data.status === 'accepted' ? 'Congratulations! Welcome to ' + data.market_name + '!' : 
  data.status === 'refused' ? 'Unfortunately, your application was not successful at this time.' : 
  'Your application status has been updated to: Not Now'}

${data.message ? `Message from Market Organizer: ${data.message}` : ''}

View all your applications at: ${process.env.NEXT_PUBLIC_SITE_URL}/vendor/applications

${data.market_contact_email ? `If you have any questions, please contact: ${data.market_contact_email}` : ''}

Best regards,
The MarketHub Team
    `,
  }),

  'document-expiring': (data: DocumentExpiringEmailData): EmailTemplate => ({
    subject: `Document Expiring Soon - ${data.document_type}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #f59e0b; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MarketHub</h1>
          <p style="margin: 10px 0 0 0;">Document Expiring Soon</p>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: #f59e0b; margin-bottom: 20px;">Document Renewal Required</h2>
          
          <p>Hello ${data.recipient_name},</p>
          
          <p>This is a reminder that ${data.is_market_organizer ? 'your market' : 'your vendor'} document is expiring soon.</p>
          
          <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <h3 style="margin-top: 0; color: #92400e;">Document Details</h3>
            <p><strong>Document Type:</strong> ${data.document_type.replace('_', ' ').toUpperCase()}</p>
            <p><strong>Expiry Date:</strong> ${data.expiry_date}</p>
            <p><strong>Days Until Expiry:</strong> ${data.days_until_expiry}</p>
            ${data.is_market_organizer && data.market_name ? `<p><strong>Market:</strong> ${data.market_name}</p>` : ''}
            ${!data.is_market_organizer && data.business_name ? `<p><strong>Business:</strong> ${data.business_name}</p>` : ''}
          </div>
          
          <p><strong>Action Required:</strong> Please upload a renewed document as soon as possible to avoid any disruption to your ${data.is_market_organizer ? 'market operations' : 'vendor applications'}.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/${data.is_market_organizer ? 'organizer/documents' : 'vendor/profile'}" 
               style="background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Upload Renewed Document
            </a>
          </div>
          
          <p>Best regards,<br>The MarketHub Team</p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            This email was sent to remind you about expiring documents on MarketHub.
          </p>
        </div>
      </div>
    `,
    text: `
Document Expiring Soon - ${data.document_type}

Hello ${data.recipient_name},

This is a reminder that your ${data.is_market_organizer ? 'market' : 'vendor'} document is expiring soon.

Document Details:
- Document Type: ${data.document_type.replace('_', ' ').toUpperCase()}
- Expiry Date: ${data.expiry_date}
- Days Until Expiry: ${data.days_until_expiry}
${data.is_market_organizer && data.market_name ? `- Market: ${data.market_name}` : ''}
${!data.is_market_organizer && data.business_name ? `- Business: ${data.business_name}` : ''}

Action Required: Please upload a renewed document as soon as possible to avoid any disruption.

Upload renewed document at: ${process.env.NEXT_PUBLIC_SITE_URL}/${data.is_market_organizer ? 'organizer/documents' : 'vendor/profile'}

Best regards,
The MarketHub Team
    `,
  }),
};