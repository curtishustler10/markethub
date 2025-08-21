# Design Token Normalization

## Font Migration

### Source → Target
- **From**: Geist Sans/Mono (source project)
- **To**: Inter (existing MarketHub font)
- **Action**: Keep Inter, update component references

### Font Stack
```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

## Color System

### Primary Branding
Both projects use green-600 as primary color, maintaining consistency:
- **Primary**: Green-600 (#16a34a)
- **Primary Hover**: Green-700 (#15803d)
- **Primary Light**: Green-50 (#f0fdf4)

### Status Colors
Standardizing on these semantic colors across both projects:

| Status | Color | Usage |
|--------|-------|--------|
| Success | Green-100/800 | Approved applications, valid documents |
| Warning | Yellow-100/800 | Expiring documents, pending review |
| Error | Red-100/800 | Rejected applications, invalid documents |
| Info | Blue-100/800 | Neutral information, setup required |
| Neutral | Gray-100/800 | Default states |

### Badge Color Mapping
```tsx
// Standardized badge colors
const statusColors = {
  approved: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800", 
  rejected: "bg-red-100 text-red-800",
  expired: "bg-red-100 text-red-800",
  valid: "bg-green-100 text-green-800",
  expiring: "bg-yellow-100 text-yellow-800"
}
```

## Component Variants

### Button Enhancements
Source project has better button variants. Merging into target:

**New variants to add:**
- `rounded-full` support for hero CTAs
- Better focus states with ring-3 
- Icon sizing improvements
- Shadow variants (shadow-xs)

### Card Improvements  
Source has better card styling:
- **Border radius**: `rounded-xl` instead of `rounded-lg`
- **Padding**: Better spacing with `py-6`
- **Shadows**: More subtle `shadow-sm`
- **New component**: `CardAction` for header actions

### Badge Consistency
Both projects use similar badge structure, keeping:
- **Border radius**: `rounded-full` 
- **Padding**: `px-2.5 py-0.5`
- **Font**: `text-xs font-semibold`

## Typography Scale

### Heading Hierarchy
```css
h1: text-4xl font-bold      /* 36px - Page titles */
h2: text-3xl font-bold      /* 30px - Section headers */  
h3: text-2xl font-semibold  /* 24px - Subsections */
h4: text-xl font-semibold   /* 20px - Card titles */
h5: text-lg font-semibold   /* 18px - Small headers */
h6: text-base font-semibold /* 16px - Labels */
```

### Text Sizes
```css
text-xs: 12px    /* Small labels, badges */
text-sm: 14px    /* Secondary text, descriptions */
text-base: 16px  /* Body text */
text-lg: 18px    /* Emphasized text */
text-xl: 20px    /* Large text */
```

## Spacing System

### Consistent 4px Grid
```css
0.5: 2px    /* Fine adjustments */
1: 4px      /* Minimal spacing */
2: 8px      /* Small gaps */
3: 12px     /* Medium spacing */
4: 16px     /* Standard spacing */
6: 24px     /* Large spacing */
8: 32px     /* Section spacing */
12: 48px    /* Page spacing */
16: 64px    /* Large sections */
```

### Component Padding Standards
```css
Card: p-6 (24px)
Button: px-4 py-2 (16px/8px)
Badge: px-2.5 py-0.5 (10px/2px)
Input: px-3 py-2 (12px/8px)
```

## Border Radius

### Component Radius Scale
```css
rounded-sm: 2px     /* Small elements */
rounded-md: 6px     /* Buttons, inputs */
rounded-lg: 8px     /* Cards (existing) */
rounded-xl: 12px    /* Cards (improved) */
rounded-full: 9999px /* Badges, avatars */
```

## Shadow System

### Elevation Levels
```css
shadow-xs: 0 1px 2px rgba(0,0,0,0.05)      /* Subtle elevation */
shadow-sm: 0 1px 3px rgba(0,0,0,0.1)       /* Card elevation */
shadow-md: 0 4px 6px rgba(0,0,0,0.1)       /* Modal elevation */
shadow-lg: 0 10px 15px rgba(0,0,0,0.1)     /* Dropdown elevation */
```

## Implementation Plan

### Phase 1: Update Base Components
1. Enhance Button with rounded-full variant
2. Update Card with CardAction and better styling
3. Standardize Badge color system

### Phase 2: Typography Normalization
1. Create heading component system
2. Standardize text size usage
3. Update all pages to use consistent hierarchy

### Phase 3: Color Token Application
1. Apply status color system to all status indicators
2. Update badge implementations
3. Ensure consistent hover states

### Phase 4: Spacing & Layout
1. Apply consistent padding/margin system
2. Update component spacing
3. Normalize border radius usage

## Breaking Changes

### Font Loading
- Remove Geist font loading from imported pages
- Update font-family references to Inter
- Remove custom font CSS variables

### Color References
- Replace hardcoded colors with semantic tokens
- Update any custom green shades to standard green-600/700
- Normalize gray color usage (gray-50, gray-100, etc.)

### Component Props
- Button: Add rounded-full support
- Card: Add CardAction component
- Badge: Standardize color prop options

## Design System Benefits

After normalization:
1. **Consistency**: Single font family and color system
2. **Maintainability**: Centralized design tokens
3. **Performance**: No duplicate font loading
4. **User Experience**: Consistent visual hierarchy
5. **Developer Experience**: Clear component API