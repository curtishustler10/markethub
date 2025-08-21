# UI Import Map: static-website-good → MarketHub

## Source Project Analysis

**Project**: static-website-good  
**Framework**: Next.js 15.2.4 with App Router  
**UI Library**: Shadcn/UI with Radix primitives  
**Styling**: Tailwind CSS v4.1.9  
**Key Dependencies**: Geist font, Lucide icons, React Hook Form, Zod  

## Pages Inventory

### Source Pages → Target Location

| Source Path | Target Path | Status | Notes |
|-------------|-------------|---------|--------|
| `/app/page.tsx` | `/apps/web/app/(marketing)/page.tsx` | Replace | Enhanced homepage with better design |
| `/app/markets/page.tsx` | `/apps/web/app/(marketing)/markets/page.tsx` | Replace | Market discovery page with map integration |
| `/app/login/page.tsx` | `/apps/web/app/auth/login/page.tsx` | Merge | Already exists, keep routing consistency |
| `/app/register/page.tsx` | `/apps/web/app/auth/register/page.tsx` | Merge | Already exists, improve UI components |
| `/app/vendor-dashboard/page.tsx` | `/apps/web/app/vendor/dashboard/page.tsx` | New | Vendor dashboard with applications tracking |
| `/app/organizer-dashboard/page.tsx` | `/apps/web/app/organizer/dashboard/page.tsx` | New | Organizer management interface |
| `/app/market-management/page.tsx` | `/apps/web/app/organizer/market/page.tsx` | New | Market creation and management |
| `/app/applications/page.tsx` | `/apps/web/app/vendor/applications/page.tsx` | New | Vendor applications management |
| `/app/my-markets/page.tsx` | `/apps/web/app/vendor/markets/page.tsx` | New | Vendor's approved markets |
| `/app/organizer-messagerie/page.tsx` | `/apps/web/app/organizer/messages/page.tsx` | New | Communication system |

## Components Inventory

### UI Components

#### From Source → Target Location

| Source Component | Target Location | Action | Priority |
|------------------|------------------|---------|----------|
| `components/ui/accordion.tsx` | `apps/web/components/ui/accordion.tsx` | Add | Low |
| `components/ui/alert-dialog.tsx` | `apps/web/components/ui/alert-dialog.tsx` | Add | Medium |
| `components/ui/avatar.tsx` | `apps/web/components/ui/avatar.tsx` | Add | Medium |
| `components/ui/badge.tsx` | `apps/web/components/ui/badge.tsx` | **Conflict** | High |
| `components/ui/button.tsx` | `apps/web/components/ui/button.tsx` | **Conflict** | High |
| `components/ui/card.tsx` | `apps/web/components/ui/card.tsx` | **Conflict** | High |
| `components/ui/checkbox.tsx` | `apps/web/components/ui/checkbox.tsx` | Add | Medium |
| `components/ui/dialog.tsx` | `apps/web/components/ui/dialog.tsx` | Add | Medium |
| `components/ui/dropdown-menu.tsx` | `apps/web/components/ui/dropdown-menu.tsx` | Add | Medium |
| `components/ui/form.tsx` | `apps/web/components/ui/form.tsx` | **Conflict** | High |
| `components/ui/input.tsx` | `apps/web/components/ui/input.tsx` | **Conflict** | High |
| `components/ui/label.tsx` | `apps/web/components/ui/label.tsx` | **Conflict** | High |
| `components/ui/select.tsx` | `apps/web/components/ui/select.tsx` | Add | Medium |
| `components/ui/separator.tsx` | `apps/web/components/ui/separator.tsx` | Add | Low |
| `components/ui/skeleton.tsx` | `apps/web/components/ui/skeleton.tsx` | Add | High |
| `components/ui/table.tsx` | `apps/web/components/ui/table.tsx` | Add | High |
| `components/ui/tabs.tsx` | `apps/web/components/ui/tabs.tsx` | **Conflict** | Medium |
| `components/ui/textarea.tsx` | `apps/web/components/ui/textarea.tsx` | Add | Medium |
| `components/ui/toast.tsx` | `apps/web/components/ui/toast.tsx` | **Conflict** | High |

### Business Components Needed

Based on the source pages, we need to create these business components:

| Component | Purpose | Location | Source Reference |
|-----------|---------|----------|------------------|
| `MarketCard` | Display market information in listings | `apps/web/components/market-card.tsx` | markets/page.tsx |
| `ApplicationCard` | Show application status and details | `apps/web/components/application-card.tsx` | vendor-dashboard/page.tsx |
| `DocumentUploadCard` | Document upload interface | `apps/web/components/document-upload-card.tsx` | Multiple pages |
| `StatusBadge` | Application/document status indicator | `apps/web/components/status-badge.tsx` | Multiple pages |
| `QuickStats` | Dashboard statistics cards | `apps/web/components/quick-stats.tsx` | Both dashboards |
| `MarketSearch` | Market filtering and search | `apps/web/components/market-search.tsx` | markets/page.tsx |
| `Navigation` | Role-based navigation | `apps/web/components/navigation.tsx` | All pages |

## Layout System Analysis

### Current Differences

**Source Layout**: 
- Basic layout with Geist font
- No navigation system
- Each page has own header/footer
- Inconsistent styling

**Target Layout**:
- Inter font family
- Toaster component
- No unified navigation

### Unification Plan

1. **Header**: Extract common header pattern and create unified component
2. **Navigation**: Role-based navigation (Public, Vendor, Organizer, Admin)
3. **Footer**: Single footer component for marketing pages
4. **Font**: Migrate from Geist to Inter (already in target)

## Design Token Conflicts

### Color Scheme
- **Source**: Green-600 primary color (matches MarketHub branding)
- **Target**: Need to verify existing color scheme
- **Action**: Standardize on green-600 primary

### Typography
- **Source**: Geist Sans/Mono
- **Target**: Inter
- **Action**: Migrate to Inter, update font weights

### Component Variants
- **Buttons**: Source has more variants (rounded-full)
- **Cards**: Source has better shadow/border styling
- **Badges**: Source has color-coded status system

## Assets Transfer

### Images/Icons
- `public/placeholder-logo.png/svg` → Keep as fallbacks
- `public/placeholder-user.jpg` → Use for demo data
- `public/placeholder.jpg/svg` → Market placeholder images

### Styling
- `app/globals.css` → Merge with existing globals.css
- Font loading → Update to use Inter instead of Geist

## Dependencies Reconciliation

### New Dependencies Needed
- `@radix-ui/react-accordion`
- `@radix-ui/react-alert-dialog`
- `@radix-ui/react-avatar`
- `@radix-ui/react-checkbox`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-select`
- `@radix-ui/react-separator`
- `cmdk` (for command palette)
- `input-otp`
- `react-day-picker`
- `recharts`
- `vaul` (drawer component)

### Version Conflicts
- Source uses React 19, target uses React 18
- Source uses Next.js 15.2.4, target uses 14.2.0
- Need to downgrade source components to be compatible

## Risk Assessment

### High Risk
- Font migration (Geist → Inter)
- React version compatibility
- Component prop interface changes
- Route path conflicts

### Medium Risk
- Color token standardization
- Component variant consolidation
- Asset path updates

### Low Risk
- CSS class migration
- Icon library (both use Lucide)
- Build configuration updates

## Migration Strategy

1. **Phase 1**: Add missing UI components without conflicts
2. **Phase 2**: Resolve component conflicts by merging features
3. **Phase 3**: Migrate pages with route preservation
4. **Phase 4**: Unify layout and navigation system
5. **Phase 5**: Wire to existing APIs and add proper states

## Next Steps

1. Create feature branch: `feat/ui-merge-static-website-good`
2. Install missing dependencies
3. Migrate non-conflicting UI components
4. Resolve component conflicts
5. Update layout system
6. Migrate pages with proper routing
7. Wire to existing APIs
8. Add loading/error/empty states
9. Test and document changes