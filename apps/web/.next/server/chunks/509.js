"use strict";exports.id=509,exports.ids=[509],exports.modules={53244:(e,a,t)=>{t.d(a,{e:()=>n,m:()=>s});var r=t(76994),i=t(9362);function n(){let e=(0,i.cookies)();return(0,r.lx)(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,{cookies:{get:a=>e.get(a)?.value,set(a,t,r){e.set({name:a,value:t,...r})},remove(a,t){e.set({name:a,value:"",...t})}}})}function s(){return(0,r.lx)(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY,{cookies:{get(){},set(){},remove(){}}})}},66456:(e,a,t)=>{t.d(a,{Qk:()=>g,ZX:()=>$,Bw:()=>p,zD:()=>_,Bh:()=>c,$U:()=>b,vl:()=>x,GD:()=>Z,MK:()=>w,og:()=>f,oV:()=>u,P5:()=>m});var r=t(79763);let i=r.Km(["market_organizer","vendor","admin"]),n=r.Km(["draft","live","paused"]),s=r.Km(["license","insurance","menu_pdf","food_licence","public_liability","other"]);r.Km(["valid","expiring_soon","expired","needs_review"]);let o=r.Km(["submitted","accepted","refused","not_now"]),d=r.Km(["farmer","gourmet_food","ready_to_eat","artisan","specialist","charity"]),l=r.Km(["3x3","6x3","9x3"]);r.Ry({id:r.Z_().uuid(),role:i,name:r.Z_().nullable(),email:r.Z_().email().nullable(),phone:r.Z_().nullable(),created_at:r.Z_(),updated_at:r.Z_()}),r.Ry({id:r.Z_().uuid(),owner_id:r.Z_().uuid(),name:r.Z_().min(1),slug:r.Z_().min(1),description:r.Z_().nullable(),address:r.Z_().nullable(),city:r.Z_().nullable(),state:r.Z_().nullable(),postcode:r.Z_().nullable(),country:r.Z_().default("Australia"),lat:r.Rx().nullable(),lng:r.Rx().nullable(),amenities:r.IM(r.Yj()).default({}),requirements:r.IM(r.Yj()).default({}),status:n.default("draft"),created_at:r.Z_(),updated_at:r.Z_()});let p=r.Ry({name:r.Z_().min(1,"Market name is required"),description:r.Z_().optional(),address:r.Z_().min(1,"Address is required"),city:r.Z_().min(1,"City is required"),state:r.Z_().min(1,"State is required"),postcode:r.Z_().min(1,"Postcode is required"),country:r.Z_().default("Australia"),lat:r.Rx().optional(),lng:r.Rx().optional(),amenities:r.IM(r.Yj()).default({}),requirements:r.IM(r.Yj()).default({})}),u=p.partial();r.Ry({vendor_id:r.Z_().uuid(),business_name:r.Z_().nullable(),phone:r.Z_().nullable(),address:r.Z_().nullable(),suburb:r.Z_().nullable(),postcode:r.Z_().nullable(),region:r.Z_().nullable(),category:d.nullable(),vehicle_on_site:r.O7().default(!1),power_required:r.O7().default(!1),site_size:l.default("3x3"),website:r.Z_().url().nullable(),facebook:r.Z_().nullable(),instagram:r.Z_().nullable(),products_summary:r.Z_().nullable(),preferred_start_date:r.Z_().nullable(),heard_about:r.Z_().nullable(),consent_email:r.O7().default(!1),consent_sms:r.O7().default(!1),created_at:r.Z_(),updated_at:r.Z_()});let c=r.Ry({business_name:r.Z_().min(1,"Business name is required"),phone:r.Z_().min(1,"Phone is required"),address:r.Z_().min(1,"Address is required"),suburb:r.Z_().min(1,"Suburb is required"),postcode:r.Z_().min(1,"Postcode is required"),region:r.Z_().min(1,"Region is required"),category:d,vehicle_on_site:r.O7().default(!1),power_required:r.O7().default(!1),site_size:l.default("3x3"),website:r.Z_().url().optional().or(r.i0("")),facebook:r.Z_().optional(),instagram:r.Z_().optional(),products_summary:r.Z_().min(1,"Products summary is required"),preferred_start_date:r.Z_().optional(),heard_about:r.Z_().optional(),consent_email:r.O7().default(!1),consent_sms:r.O7().default(!1)}),m=c.partial();r.Ry({id:r.Z_().uuid(),market_id:r.Z_().uuid(),vendor_id:r.Z_().uuid(),status:o.default("submitted"),message:r.Z_().nullable(),additional_requirements:r.IM(r.Yj()).default({}),decided_at:r.Z_().nullable(),decided_by:r.Z_().uuid().nullable(),created_at:r.Z_(),updated_at:r.Z_()});let _=r.Ry({market_id:r.Z_().uuid(),message:r.Z_().optional(),additional_requirements:r.IM(r.Yj()).default({})}),g=r.Ry({status:r.Km(["accepted","refused","not_now"]),message:r.Z_().optional()}),b=r.Ry({type:s,region:r.Z_().optional()}),y=r.Ry({lat:r.Rx().optional(),lng:r.Rx().optional(),radius:r.Rx().min(1).max(500).default(50).optional(),state:r.Z_().optional(),city:r.Z_().optional()}),f=r.Ry({page:r.Rx().min(1).default(1),limit:r.Rx().min(1).max(100).default(20),search:r.Z_().optional()}).merge(y);r.Ry({code:r.Z_(),next:r.Z_().optional()}),r.Ry({email:r.Z_().email("Please enter a valid email address")}),r.Ry({email:r.Z_().email("Please enter a valid email address"),password:r.Z_().min(6,"Password must be at least 6 characters")}),r.Ry({email:r.Z_().email("Please enter a valid email address"),password:r.Z_().min(6,"Password must be at least 6 characters"),name:r.Z_().min(1,"Name is required"),role:i});let x={"new-application":e=>({subject:`New Vendor Application - ${e.market_name}`,html:`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #059669; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MarketHub</h1>
          <p style="margin: 10px 0 0 0;">New Vendor Application</p>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: #059669; margin-bottom: 20px;">New Application Received</h2>
          
          <p>Hello,</p>
          
          <p>You have received a new vendor application for <strong>${e.market_name}</strong>.</p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Application Details</h3>
            <p><strong>Vendor:</strong> ${e.vendor_name}</p>
            ${e.vendor_business_name?`<p><strong>Business:</strong> ${e.vendor_business_name}</p>`:""}
            ${e.vendor_category?`<p><strong>Category:</strong> ${e.vendor_category.replace("_"," ")}</p>`:""}
            ${e.message?`<p><strong>Message:</strong><br>${e.message}</p>`:""}
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
    `,text:`
New Vendor Application - ${e.market_name}

Hello,

You have received a new vendor application for ${e.market_name}.

Application Details:
- Vendor: ${e.vendor_name}
${e.vendor_business_name?`- Business: ${e.vendor_business_name}`:""}
${e.vendor_category?`- Category: ${e.vendor_category.replace("_"," ")}`:""}
${e.message?`- Message: ${e.message}`:""}

Review the application at: ${process.env.NEXT_PUBLIC_SITE_URL}/organizer/applications

Best regards,
The MarketHub Team
    `}),"application-decision":e=>({subject:`Application ${"accepted"===e.status?"Accepted":"refused"===e.status?"Declined":"Updated"} - ${e.market_name}`,html:`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: ${"accepted"===e.status?"#059669":"refused"===e.status?"#dc2626":"#f59e0b"}; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MarketHub</h1>
          <p style="margin: 10px 0 0 0;">Application ${"accepted"===e.status?"Accepted":"refused"===e.status?"Declined":"Updated"}</p>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: ${"accepted"===e.status?"#059669":"refused"===e.status?"#dc2626":"#f59e0b"}; margin-bottom: 20px;">
            Application ${"accepted"===e.status?"Accepted!":"refused"===e.status?"Declined":"Update"}
          </h2>
          
          <p>Hello ${e.vendor_name},</p>
          
          <p>Your application to <strong>${e.market_name}</strong> has been 
             <strong>${"accepted"===e.status?"accepted":"refused"===e.status?"declined":"updated"}</strong>.</p>
          
          ${"accepted"===e.status?`
            <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #059669;">
              <p style="margin: 0; color: #065f46;"><strong>Congratulations!</strong> Welcome to ${e.market_name}!</p>
            </div>
          `:"refused"===e.status?`
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
              <p style="margin: 0; color: #991b1b;">Unfortunately, your application was not successful at this time.</p>
            </div>
          `:`
            <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;">Your application status has been updated to: Not Now</p>
            </div>
          `}
          
          ${e.message?`
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Message from Market Organizer</h3>
              <p style="margin-bottom: 0;">${e.message}</p>
            </div>
          `:""}
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/vendor/applications" 
               style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              View All Applications
            </a>
          </div>
          
          ${e.market_contact_email?`
            <p>If you have any questions, please contact the market organizer at: 
               <a href="mailto:${e.market_contact_email}">${e.market_contact_email}</a></p>
          `:""}
          
          <p>Best regards,<br>The MarketHub Team</p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            This email was sent because you applied to a market on MarketHub.
          </p>
        </div>
      </div>
    `,text:`
Application ${"accepted"===e.status?"Accepted":"refused"===e.status?"Declined":"Updated"} - ${e.market_name}

Hello ${e.vendor_name},

Your application to ${e.market_name} has been ${"accepted"===e.status?"accepted":"refused"===e.status?"declined":"updated"}.

${"accepted"===e.status?"Congratulations! Welcome to "+e.market_name+"!":"refused"===e.status?"Unfortunately, your application was not successful at this time.":"Your application status has been updated to: Not Now"}

${e.message?`Message from Market Organizer: ${e.message}`:""}

View all your applications at: ${process.env.NEXT_PUBLIC_SITE_URL}/vendor/applications

${e.market_contact_email?`If you have any questions, please contact: ${e.market_contact_email}`:""}

Best regards,
The MarketHub Team
    `}),"document-expiring":e=>({subject:`Document Expiring Soon - ${e.document_type}`,html:`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #f59e0b; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MarketHub</h1>
          <p style="margin: 10px 0 0 0;">Document Expiring Soon</p>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: #f59e0b; margin-bottom: 20px;">Document Renewal Required</h2>
          
          <p>Hello ${e.recipient_name},</p>
          
          <p>This is a reminder that ${e.is_market_organizer?"your market":"your vendor"} document is expiring soon.</p>
          
          <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <h3 style="margin-top: 0; color: #92400e;">Document Details</h3>
            <p><strong>Document Type:</strong> ${e.document_type.replace("_"," ").toUpperCase()}</p>
            <p><strong>Expiry Date:</strong> ${e.expiry_date}</p>
            <p><strong>Days Until Expiry:</strong> ${e.days_until_expiry}</p>
            ${e.is_market_organizer&&e.market_name?`<p><strong>Market:</strong> ${e.market_name}</p>`:""}
            ${!e.is_market_organizer&&e.business_name?`<p><strong>Business:</strong> ${e.business_name}</p>`:""}
          </div>
          
          <p><strong>Action Required:</strong> Please upload a renewed document as soon as possible to avoid any disruption to your ${e.is_market_organizer?"market operations":"vendor applications"}.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/${e.is_market_organizer?"organizer/documents":"vendor/profile"}" 
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
    `,text:`
Document Expiring Soon - ${e.document_type}

Hello ${e.recipient_name},

This is a reminder that your ${e.is_market_organizer?"market":"vendor"} document is expiring soon.

Document Details:
- Document Type: ${e.document_type.replace("_"," ").toUpperCase()}
- Expiry Date: ${e.expiry_date}
- Days Until Expiry: ${e.days_until_expiry}
${e.is_market_organizer&&e.market_name?`- Market: ${e.market_name}`:""}
${!e.is_market_organizer&&e.business_name?`- Business: ${e.business_name}`:""}

Action Required: Please upload a renewed document as soon as possible to avoid any disruption.

Upload renewed document at: ${process.env.NEXT_PUBLIC_SITE_URL}/${e.is_market_organizer?"organizer/documents":"vendor/profile"}

Best regards,
The MarketHub Team
    `})};var v=t(62049),h=t(47050),k=t(61850);function Z(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}function $(e){if(!e)return"needs_review";try{let a=(0,v.D)(e),t=new Date,r=(0,h.E)(t,30);if((0,k.R)(a,t))return"expired";if((0,k.R)(a,r))return"expiring_soon";return"valid"}catch{return"needs_review"}}function w(e,a,t,r){let i=R(t-e),n=R(r-a),s=Math.sin(i/2)*Math.sin(i/2)+Math.cos(R(e))*Math.cos(R(t))*Math.sin(n/2)*Math.sin(n/2);return 2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))*6371}function R(e){return Math.PI/180*e}}};