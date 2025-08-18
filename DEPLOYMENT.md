# MarketHub Deployment Guide

This guide covers deploying MarketHub to production using Vercel, Supabase, and Inngest.

## 🚀 Production Architecture

- **Frontend & API**: Vercel (Next.js)
- **Database & Auth**: Supabase (Postgres + Auth)
- **Background Jobs**: Inngest Cloud
- **Email**: Postmark
- **Storage**: Supabase Storage
- **Monitoring**: Sentry + PostHog

## 📋 Pre-Deployment Checklist

### 1. Third-Party Services Setup

#### Supabase Production Project
1. Create new Supabase project for production
2. Note down project URL and anon key
3. Generate service role key
4. Enable email auth settings

#### Postmark Account
1. Create Postmark account
2. Verify sending domain
3. Get server token
4. Set up message streams

#### Mapbox Account
1. Create Mapbox account
2. Generate access token
3. Configure for production domain

#### Inngest Cloud
1. Create Inngest Cloud account
2. Create new environment
3. Generate signing key and event key

#### Optional: Monitoring
1. **Sentry**: Create project, get DSN
2. **PostHog**: Create project, get API key
3. **Stripe**: Get keys for payment features (feature flagged)

## 🔧 Environment Configuration

### Production Environment Variables

Create these environment variables in Vercel:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Supabase Production
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token

# Email (Postmark)
POSTMARK_SERVER_TOKEN=your_postmark_server_token

# Background Jobs (Inngest)
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key

# Monitoring
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Cron Jobs
CRON_SECRET=generate_random_string_for_security

# Optional: Payments (feature flagged)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Feature Flags (optional overrides)
FEATURE_FLAGS_OVERRIDE_JSON={"plan.vendor_management": true}
```

## 📊 Database Deployment

### 1. Supabase Setup

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to production project
cd infra/supabase
supabase link --project-ref your-production-project-ref

# Push migrations to production
supabase db push

# Optional: Seed with initial data
psql "postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres" -f seed.sql
```

### 2. Storage Configuration

Set up storage buckets in Supabase dashboard:

1. Create `documents` bucket
2. Set bucket to private
3. Configure RLS policies for document access

### 3. Auth Configuration

In Supabase Auth settings:
1. Configure email templates
2. Set redirect URLs: `https://your-domain.com/auth/callback`
3. Enable email confirmations
4. Configure SMTP (optional, or use built-in)

## 🚀 Vercel Deployment

### 1. Connect Repository

1. Go to Vercel dashboard
2. Import your GitHub repository
3. Select `apps/web` as root directory
4. Configure build settings:
   - Framework: Next.js
   - Root Directory: `apps/web`
   - Build Command: `npm run build`
   - Install Command: `npm install`

### 2. Environment Variables

Add all production environment variables in Vercel dashboard under Settings → Environment Variables.

### 3. Domain Configuration

1. Add your custom domain in Vercel
2. Configure DNS settings
3. Enable SSL (automatic with Vercel)

## ⚙️ Inngest Deployment

### 1. Deploy Functions

```bash
# Install Inngest CLI
npm install -g inngest-cli

# Login to Inngest
inngest login

# Deploy functions
inngest deploy --url https://your-domain.com/api/inngest
```

### 2. Configure Webhooks

In Inngest dashboard:
1. Set webhook URL: `https://your-domain.com/api/inngest`
2. Configure signing key (matches your environment variable)
3. Enable function execution

### 3. Setup Cron Jobs

Configure weekly document expiry check:
1. Use Vercel Cron or external cron service
2. POST to `https://your-domain.com/api/cron/expiry-check`
3. Include Authorization header: `Bearer ${CRON_SECRET}`

Example cron configuration for Vercel:

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/expiry-check",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

## 🔒 Security Configuration

### 1. Database Security
- All tables have RLS policies enabled
- Service role key secured in environment variables
- Regular security updates via Supabase

### 2. File Upload Security
- 15MB file size limit
- Restricted MIME types (PDF, JPEG, PNG)
- Signed URLs for secure access
- Private storage buckets

### 3. API Security
- Input validation with Zod schemas
- Rate limiting on sensitive endpoints
- CORS configured for production domain

## 📊 Monitoring Setup

### 1. Sentry Configuration
- Error tracking enabled via instrumentation
- Performance monitoring configured
- Release tracking with deployment

### 2. PostHog Analytics
- User event tracking
- Feature flag management
- A/B testing capabilities

### 3. Application Monitoring
- Vercel analytics for performance
- Supabase dashboard for database metrics
- Inngest dashboard for job monitoring

## 🧪 Production Testing

### 1. Smoke Tests

Run these tests after deployment:

```bash
# Health check
curl https://your-domain.com/api/health

# Public markets endpoint
curl https://your-domain.com/api/markets

# Test authentication flow
# (Manual testing via browser)
```

### 2. Critical User Journeys

Test these flows in production:
1. User registration (both organizer and vendor)
2. Market creation and document upload
3. Vendor application submission
4. Application approval workflow
5. Email notifications delivery

### 3. Document Processing

Test document upload and parsing:
1. Upload PDF license document
2. Verify OCR processing via Inngest
3. Check extracted data in database
4. Confirm email notifications

## 🚨 Troubleshooting

### Common Issues

#### Database Connection Issues
- Verify Supabase project URL and keys
- Check RLS policies are applied
- Confirm migrations are pushed

#### Email Not Sending
- Verify Postmark server token
- Check domain verification status
- Review message stream configuration

#### Background Jobs Not Running
- Confirm Inngest webhook URL is accessible
- Verify signing key matches environment
- Check function deployment status

#### File Upload Issues
- Verify storage bucket exists and is configured
- Check CORS settings for your domain
- Confirm file size and type restrictions

### Debug Commands

```bash
# Check database connection
supabase status

# Test Inngest webhook
curl -X POST https://your-domain.com/api/inngest \
  -H "Content-Type: application/json" \
  -H "X-Inngest-Signature: test" \
  -d '{"test": true}'

# Check Vercel logs
vercel logs your-deployment-url
```

## 🔄 Post-Deployment

### 1. Monitor Initial Usage
- Watch error rates in Sentry
- Monitor database performance in Supabase
- Check background job execution in Inngest

### 2. Performance Optimization
- Enable Vercel Analytics
- Monitor Core Web Vitals
- Optimize images and assets

### 3. Backup Strategy
- Supabase automatic backups (included)
- Export critical data regularly
- Document restoration procedures

## 📈 Scaling Considerations

### Database Scaling
- Monitor connection limits
- Consider read replicas for high traffic
- Optimize queries and indexes

### Function Scaling
- Vercel automatically scales functions
- Monitor cold start times
- Consider upgrading Vercel plan for higher limits

### Background Job Scaling
- Inngest handles scaling automatically
- Monitor job execution times
- Consider job batching for large volumes

---

## 🆘 Support

If you encounter issues during deployment:

1. Check the troubleshooting section above
2. Review service provider documentation
3. Check application logs in respective dashboards
4. Create an issue with deployment details

Remember to never commit sensitive environment variables to version control!