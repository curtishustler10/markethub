# MarketHub - Setup and Deployment Commands

## 🚀 Local Development Setup

### 1. Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd markethub

# Install dependencies
npm install

# Copy environment file
cp apps/web/.env.example apps/web/.env.local
```

### 2. Environment Configuration
Edit `apps/web/.env.local` with your credentials:
```bash
# Required for local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key
POSTMARK_SERVER_TOKEN=your_postmark_token
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### 3. Database Setup
```bash
# Install Supabase CLI
npm install -g supabase

# Initialize and link project
cd infra/supabase
supabase login
supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
supabase db push

# Seed with sample data
supabase db reset --with-seed
```

### 4. Start Development
```bash
# Start Next.js dev server
npm run dev

# In another terminal, start Inngest dev server
npx inngest-cli@latest dev
```

Visit `http://localhost:3000` to see the application.

## 🧪 Testing Commands

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm test -- --watch

# Run E2E tests (requires dev server running)
npm run test:e2e

# Run type checking
npm run type-check

# Run linting
npm run lint

# Run all checks
npm run test && npm run type-check && npm run lint
```

## 📊 Database Commands

```bash
# Create new migration
cd infra/supabase
supabase migration new migration_name

# Apply migrations to local
supabase db reset

# Apply migrations to remote
supabase db push

# Generate types from database
supabase gen types typescript --local > types/supabase.ts

# View database in browser
supabase dashboard
```

## 🚀 Production Deployment

### 1. Supabase Production Setup
```bash
# Create and link production project
supabase projects create markethub-prod
supabase link --project-ref YOUR_PROD_PROJECT_REF

# Push migrations to production
supabase db push

# Configure auth settings in dashboard
# - Email templates
# - Redirect URLs
# - SMTP settings
```

### 2. Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# Set production environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
# ... add all other environment variables

# Deploy to production
vercel --prod
```

### 3. Inngest Production Setup
```bash
# Install Inngest CLI
npm install -g inngest-cli

# Login and deploy functions
inngest login
inngest deploy --url https://your-domain.com/api/inngest
```

### 4. Postmark Setup
```bash
# Configure in Postmark dashboard:
# 1. Verify sending domain
# 2. Create server token
# 3. Set up message streams
# 4. Configure DKIM
```

## 🔧 Build Commands

```bash
# Build for production
npm run build

# Start production server locally
npm run start

# Build and analyze bundle
npm run build && npx @next/bundle-analyzer
```

## 📝 Maintenance Commands

### Database Backup
```bash
# Export database schema
supabase db dump --schema-only > schema.sql

# Export data only
supabase db dump --data-only > data.sql

# Full backup
supabase db dump > backup.sql
```

### Log Management
```bash
# View Vercel logs
vercel logs

# View Supabase logs
supabase logs --tail

# View Inngest function logs in dashboard
```

### Health Checks
```bash
# Check API health
curl https://your-domain.com/api/health

# Test document upload endpoint
curl -X POST https://your-domain.com/api/documents/upload \
  -H "Authorization: Bearer your_token" \
  -H "Content-Type: application/json" \
  -d '{"type": "license"}'

# Test background job trigger
curl -X POST https://your-domain.com/api/cron/expiry-check \
  -H "Authorization: Bearer your_cron_secret"
```

## 🐛 Debugging Commands

### Database Issues
```bash
# Check database connection
supabase status

# View recent queries
supabase logs --type database

# Test RLS policies
supabase test db
```

### API Issues
```bash
# Test API endpoints locally
curl http://localhost:3000/api/markets
curl http://localhost:3000/api/health

# Check Next.js build
npm run build 2>&1 | tee build.log
```

### Background Jobs
```bash
# Test Inngest webhook locally
curl -X POST http://localhost:3000/api/inngest \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'

# Check Inngest function status
inngest status
```

## 🔄 Update Commands

### Dependencies
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Update Supabase CLI
npm install -g supabase@latest

# Update Inngest CLI
npm install -g inngest-cli@latest
```

### Database Schema Changes
```bash
# Generate new migration
supabase migration new add_new_feature

# Edit migration file
# apps/web/infra/supabase/migrations/timestamp_add_new_feature.sql

# Test migration locally
supabase db reset

# Apply to production
supabase db push
```

## 📦 Package Management

```bash
# Add new dependency
npm install package-name

# Add dev dependency
npm install -D package-name

# Add to specific workspace
npm install package-name -w apps/web

# Remove dependency
npm uninstall package-name

# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 🔧 Environment-Specific Commands

### Development
```bash
NODE_ENV=development npm run dev
```

### Staging
```bash
NODE_ENV=staging npm run build
vercel --env staging
```

### Production
```bash
NODE_ENV=production npm run build
vercel --prod
```

## 📊 Performance Commands

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Performance monitoring
npm run build && npm run start
```

---

## 🆘 Quick Reference

### Most Used Commands
```bash
npm run dev          # Start development
npm test             # Run tests
npm run build        # Build for production
supabase db push     # Deploy database changes
vercel --prod        # Deploy to production
```

### Emergency Commands
```bash
# Rollback database
supabase db reset --db-url "your-connection-string"

# Revert Vercel deployment
vercel rollback

# Force rebuild
vercel --force --prod
```

Save this file and refer to it during development and deployment!