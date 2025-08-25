"use strict";exports.id=6509,exports.ids=[6509],exports.modules={53244:(e,a,t)=>{t.d(a,{e:()=>n,m:()=>s});var i=t(76994),r=t(9362);function n(){let e=(0,r.cookies)();return(0,i.lx)("https://wpawqkvfcwbocliwbcaq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwYXdxa3ZmY3dib2NsaXdiY2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MjE5NTcsImV4cCI6MjA3MTA5Nzk1N30.RNhc1X4blqoXbgUpeJV-A_hVgWYQIVa0wTk40j-FDgo",{cookies:{get:a=>e.get(a)?.value,set(a,t,i){e.set({name:a,value:t,...i})},remove(a,t){e.set({name:a,value:"",...t})}}})}function s(){return(0,i.lx)("https://wpawqkvfcwbocliwbcaq.supabase.co",process.env.SUPABASE_SERVICE_ROLE_KEY,{cookies:{get(){},set(){},remove(){}}})}},66456:(e,a,t)=>{t.d(a,{Qk:()=>g,ZX:()=>$,Bw:()=>p,zD:()=>_,Bh:()=>c,$U:()=>b,vl:()=>x,GD:()=>k,MK:()=>w,og:()=>y,oV:()=>u,P5:()=>m});var i=t(79763);let r=i.Km(["market_organizer","vendor","admin"]),n=i.Km(["draft","live","paused"]),s=i.Km(["license","insurance","menu_pdf","food_licence","public_liability","other"]);i.Km(["valid","expiring_soon","expired","needs_review"]);let o=i.Km(["submitted","accepted","refused","not_now"]),d=i.Km(["farmer","gourmet_food","ready_to_eat","artisan","specialist","charity"]),l=i.Km(["3x3","6x3","9x3"]);i.Ry({id:i.Z_().uuid(),role:r,name:i.Z_().nullable(),email:i.Z_().email().nullable(),phone:i.Z_().nullable(),created_at:i.Z_(),updated_at:i.Z_()}),i.Ry({id:i.Z_().uuid(),owner_id:i.Z_().uuid(),name:i.Z_().min(1),slug:i.Z_().min(1),description:i.Z_().nullable(),address:i.Z_().nullable(),city:i.Z_().nullable(),state:i.Z_().nullable(),postcode:i.Z_().nullable(),country:i.Z_().default("Australia"),lat:i.Rx().nullable(),lng:i.Rx().nullable(),amenities:i.IM(i.Yj()).default({}),requirements:i.IM(i.Yj()).default({}),is_verified:i.O7().default(!1),verified_at:i.Z_().nullable(),verified_by:i.Z_().uuid().nullable(),status:n.default("draft"),created_at:i.Z_(),updated_at:i.Z_()});let p=i.Ry({name:i.Z_().min(1,"Market name is required"),description:i.Z_().optional(),address:i.Z_().min(1,"Address is required"),city:i.Z_().min(1,"City is required"),state:i.Z_().min(1,"State is required"),postcode:i.Z_().min(1,"Postcode is required"),country:i.Z_().default("Australia"),lat:i.Rx().optional(),lng:i.Rx().optional(),amenities:i.IM(i.Yj()).default({}),requirements:i.IM(i.Yj()).default({})}),u=p.partial();i.Ry({vendor_id:i.Z_().uuid(),business_name:i.Z_().nullable(),phone:i.Z_().nullable(),address:i.Z_().nullable(),suburb:i.Z_().nullable(),postcode:i.Z_().nullable(),region:i.Z_().nullable(),category:d.nullable(),vehicle_on_site:i.O7().default(!1),power_required:i.O7().default(!1),site_size:l.default("3x3"),website:i.Z_().url().nullable(),facebook:i.Z_().nullable(),instagram:i.Z_().nullable(),products_summary:i.Z_().nullable(),preferred_start_date:i.Z_().nullable(),heard_about:i.Z_().nullable(),consent_email:i.O7().default(!1),consent_sms:i.O7().default(!1),is_verified:i.O7().default(!1),verified_at:i.Z_().nullable(),verified_by:i.Z_().uuid().nullable(),created_at:i.Z_(),updated_at:i.Z_()});let c=i.Ry({business_name:i.Z_().min(1,"Business name is required"),phone:i.Z_().min(1,"Phone is required"),address:i.Z_().min(1,"Address is required"),suburb:i.Z_().min(1,"Suburb is required"),postcode:i.Z_().min(1,"Postcode is required"),region:i.Z_().min(1,"Region is required"),category:d,vehicle_on_site:i.O7().default(!1),power_required:i.O7().default(!1),site_size:l.default("3x3"),website:i.Z_().url().optional().or(i.i0("")),facebook:i.Z_().optional(),instagram:i.Z_().optional(),products_summary:i.Z_().min(1,"Products summary is required"),preferred_start_date:i.Z_().optional(),heard_about:i.Z_().optional(),consent_email:i.O7().default(!1),consent_sms:i.O7().default(!1)}),m=c.partial();i.Ry({id:i.Z_().uuid(),market_id:i.Z_().uuid(),vendor_id:i.Z_().uuid(),status:o.default("submitted"),message:i.Z_().nullable(),additional_requirements:i.IM(i.Yj()).default({}),decided_at:i.Z_().nullable(),decided_by:i.Z_().uuid().nullable(),created_at:i.Z_(),updated_at:i.Z_()});let _=i.Ry({market_id:i.Z_().uuid(),message:i.Z_().optional(),additional_requirements:i.IM(i.Yj()).default({})}),g=i.Ry({status:i.Km(["accepted","refused","not_now"]),message:i.Z_().optional()}),b=i.Ry({type:s,region:i.Z_().optional()}),f=i.Ry({lat:i.Rx().optional(),lng:i.Rx().optional(),radius:i.Rx().min(1).max(500).default(50).optional(),state:i.Z_().optional(),city:i.Z_().optional()}),y=i.Ry({page:i.Rx().min(1).default(1),limit:i.Rx().min(1).max(100).default(20),search:i.Z_().optional()}).merge(f);i.Ry({code:i.Z_(),next:i.Z_().optional()}),i.Ry({email:i.Z_().email("Please enter a valid email address")}),i.Ry({email:i.Z_().email("Please enter a valid email address"),password:i.Z_().min(6,"Password must be at least 6 characters")}),i.Ry({email:i.Z_().email("Please enter a valid email address"),password:i.Z_().min(6,"Password must be at least 6 characters"),name:i.Z_().min(1,"Name is required"),role:r});let x={"new-application":e=>({subject:`New Vendor Application - ${e.market_name}`,html:`
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
            <a href="http://localhost:3000/organizer/applications" 
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

Review the application at: http://localhost:3000/organizer/applications

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
            <a href="http://localhost:3000/vendor/applications" 
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

View all your applications at: http://localhost:3000/vendor/applications

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
            <a href="http://localhost:3000/${e.is_market_organizer?"organizer/documents":"vendor/profile"}" 
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

Upload renewed document at: http://localhost:3000/${e.is_market_organizer?"organizer/documents":"vendor/profile"}

Best regards,
The MarketHub Team
    `})};var v=t(62049),h=t(47050),Z=t(61850);function k(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}function $(e){if(!e)return"needs_review";try{let a=(0,v.D)(e),t=new Date,i=(0,h.E)(t,30);if((0,Z.R)(a,t))return"expired";if((0,Z.R)(a,i))return"expiring_soon";return"valid"}catch{return"needs_review"}}function w(e,a,t,i){let r=M(t-e),n=M(i-a),s=Math.sin(r/2)*Math.sin(r/2)+Math.cos(M(e))*Math.cos(M(t))*Math.sin(n/2)*Math.sin(n/2);return 2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))*6371}function M(e){return Math.PI/180*e}}};