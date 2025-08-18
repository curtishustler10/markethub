# MarketHub

A free directory + workflow platform where market organizers register and manage vendor applications with pre-validated documents (license, insurance, PDF menu). Optional paid add-ons: vendor management, and payments.

## ✨ Features

- **Market Directory**: Public searchable directory of markets by location
- **Document Verification**: Automatic OCR parsing and validation of licenses, insurance, and compliance documents
- **Application Workflow**: Streamlined vendor application and approval process
- **Email Notifications**: Automated emails for applications, decisions, and document expiry
- **Role-based Access**: Separate dashboards for market organizers and vendors
- **Document Tracking**: Automatic expiry tracking with proactive notifications

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Postmark account (for emails)
- Mapbox account (for geocoding)
- Inngest account (for background jobs)

### 1. Clone and Install

```bash
git clone <repository-url>
cd markethub
npm install
```

### 2. Environment Setup

Copy the environment file and fill in your credentials:

```bash
cp apps/web/.env.example apps/web/.env.local
```

Required environment variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token

# Postmark
POSTMARK_SERVER_TOKEN=your_postmark_server_token

# Inngest
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### 3. Database Setup

Run the Supabase migrations:

```bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase project
cd infra/supabase
supabase init

# Link to your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push

# Seed with sample data (optional)
supabase db reset --with-seed
```

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
markethub/
├── apps/web/                 # Next.js application
│   ├── app/                  # App Router pages
│   │   ├── (marketing)/      # Public pages
│   │   ├── (dashboard)/      # Authenticated pages
│   │   │   ├── organizer/    # Market organizer dashboard
│   │   │   └── vendor/       # Vendor dashboard
│   │   ├── api/              # API routes
│   │   └── auth/             # Authentication pages
│   ├── components/           # React components
│   │   └── ui/               # Reusable UI components
│   ├── lib/                  # Utility functions
│   └── __tests__/            # Unit tests
├── packages/shared/          # Shared types and utilities
│   └── src/
│       ├── types.ts          # TypeScript type definitions
│       ├── schemas.ts        # Zod validation schemas
│       ├── email-templates.ts # Email template functions
│       └── utils.ts          # Shared utility functions
└── infra/supabase/          # Database migrations and policies
    ├── migrations/          # SQL migration files
    └── seed.sql            # Sample data
```

## 🔧 Development

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

### Database Management

```bash
# Create new migration
supabase migration new migration_name

# Apply migrations
supabase db push

# Reset database with seed data
supabase db reset --with-seed
```

### Background Jobs

MarketHub uses Inngest for background jobs. Start the Inngest dev server:

```bash
npx inngest-cli@latest dev
```

Key background jobs:
- Document parsing and OCR
- Email notifications
- Weekly document expiry checks

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Environment Variables for Production

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# ... other environment variables
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
```

### Supabase Production Setup

1. Create production Supabase project
2. Run migrations: `supabase db push`
3. Configure RLS policies
4. Set up storage buckets

### Inngest Production Setup

1. Deploy Inngest functions to Inngest Cloud
2. Configure webhook endpoints in production
3. Set up cron jobs for document expiry checks

## 🔒 Security

- Row Level Security (RLS) enforced on all database tables
- File upload restrictions (15MB, PDF/images only)
- Signed URLs for document storage
- Input validation with Zod schemas
- Rate limiting on sensitive endpoints

## 📊 Monitoring

- **Sentry**: Error tracking and performance monitoring
- **PostHog**: User analytics and feature flags
- **Supabase**: Database monitoring and auth logs
- **Inngest**: Background job monitoring

## 🔧 API Reference

### Public Endpoints

- `GET /api/markets` - List markets with filtering
- `GET /api/markets/[id]` - Get market details

### Authenticated Endpoints

#### Market Organizers
- `POST /api/markets` - Create market
- `PUT /api/markets/[id]` - Update market
- `POST /api/documents/upload` - Upload market documents
- `POST /api/vendor-apps/[id]/decision` - Approve/reject applications

#### Vendors
- `GET /api/vendor/profile` - Get vendor profile
- `PUT /api/vendor/profile` - Update vendor profile
- `POST /api/vendor/apply` - Apply to market
- `GET /api/vendor/applications` - Get my applications

## 🎯 User Flows

### Market Organizer Flow
1. Sign up as market organizer
2. Create market profile
3. Upload required documents (license, insurance)
4. Review and approve vendor applications
5. Manage vendor communications

### Vendor Flow
1. Sign up as vendor
2. Complete vendor profile
3. Upload documents (food license, insurance)
4. Browse and apply to markets
5. Track application status

## 🧪 Testing Strategy

- **Unit Tests**: Business logic and utilities
- **API Tests**: Route handlers and database interactions
- **E2E Tests**: Critical user journeys
- **Manual Testing**: Document upload and parsing flows

## 📝 Feature Flags

MarketHub includes feature flags for paid features:

- `plan.vendor_management`: Enhanced vendor management tools
- `plan.payments`: Stripe integration for booth payments

Configure via environment variable:
```env
FEATURE_FLAGS_OVERRIDE_JSON={"plan.payments": true}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make changes and add tests
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin feature/new-feature`
6. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- Create an issue for bug reports
- Check documentation for common questions
- Email: support@markethub.com

---

Built with ❤️ using Next.js, Supabase, and Inngest.