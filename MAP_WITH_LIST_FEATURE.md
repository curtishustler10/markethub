# 🗺️ MapWithList Component - Dynamic Map & List View

## ✨ New Feature

The MarketHub homepage now features a **dynamic map and list view** that automatically switches between showing markets and vendors based on the toggle selection.

## 🎯 What It Does

### **Toggle Between Views**
- **Map View**: Interactive map with market/vendor pins
- **List View**: Detailed cards showing all markets/vendors

### **Dynamic Content Based on Search Mode**
- **"Find Markets"**: Shows markets with location, amenities, events
- **"Find Vendors"**: Shows vendors with business details, categories

## 🔧 How It Works

### 1. **Toggle Buttons**
```tsx
<button onClick={() => setSearchMode('market')}>Find a Market</button>
<button onClick={() => setSearchMode('vendor')}>Find a Vendor</button>
```

### 2. **View Toggle**
```tsx
<Button variant={showMap ? "default" : "ghost"}>
  <MapPinIcon /> Map View
</Button>
<Button variant={!showMap ? "default" : "ghost"}>
  <Store /> List View
</Button>
```

### 3. **Dynamic API Calls**
- **Markets**: `/api/markets` endpoint
- **Vendors**: `/api/vendors` endpoint
- Automatically switches based on `searchMode`

## 📱 Features

### **Map View**
- Interactive map with market/vendor pins
- Quick stats showing count of items found
- Sort options (name, location, date)
- Responsive design

### **List View**
- **Market Cards**:
  - Name, location, description
  - Amenities badges (parking, power, etc.)
  - Next event date
  - View Details & Apply buttons

- **Vendor Cards**:
  - Business name, category, region
  - Products summary
  - Website link
  - View Profile button

### **Search & Filtering**
- Real-time search across all fields
- Sort by name, location, or date
- Dynamic filtering based on search query

## 🎨 UI Components Used

- `InteractiveMap` - Map component with pins
- `Card` - Market/vendor information cards
- `Badge` - Amenities and categories
- `Button` - Actions and navigation
- `Search` - Search functionality

## 🔄 State Management

```tsx
const [items, setItems] = useState<(Market | Vendor)[]>([])
const [filteredItems, setFilteredItems] = useState<(Market | Vendor)[]>([])
const [sortBy, setSortBy] = useState<'name' | 'location' | 'date'>('name')
const [showMap, setShowMap] = useState(true)
```

## 📊 Data Flow

1. **User toggles** between "Find Markets" or "Find Vendors"
2. **Component fetches** data from appropriate API endpoint
3. **Search query** filters results in real-time
4. **Sort options** organize the displayed items
5. **View toggle** switches between map and list display

## 🚀 Usage Example

```tsx
import MapWithList from '@/components/ui/map-with-list'

export default function HomePage() {
  const [searchMode, setSearchMode] = useState<'market' | 'vendor'>('market')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <MapWithList 
      searchMode={searchMode}
      searchQuery={searchQuery}
      className="w-full"
    />
  )
}
```

## 🎯 Benefits

### **For Users**
- **Seamless switching** between markets and vendors
- **Two viewing options** - map for location, list for details
- **Real-time search** across all data
- **Responsive design** works on all devices

### **For Developers**
- **Reusable component** for any map+list combination
- **Type-safe** with TypeScript interfaces
- **Easy to extend** with new features
- **Consistent UI** across the application

## 🔧 Customization

### **Adding New Fields**
```tsx
interface Market {
  // Add new fields here
  newField?: string
}
```

### **Custom Sorting**
```tsx
case 'newSort':
  // Add custom sorting logic
  return customSort(a, b)
```

### **Additional Views**
```tsx
const [viewMode, setViewMode] = useState<'map' | 'list' | 'grid'>('map')
```

## 🐛 Troubleshooting

### **No Data Showing**
1. Check if markets/vendors exist in database
2. Verify API endpoints are working
3. Check browser console for errors

### **Map Not Loading**
1. Verify Mapbox/MapTiler tokens
2. Check network requests
3. Ensure coordinates exist in data

### **Search Not Working**
1. Verify search query is being passed
2. Check API search parameters
3. Ensure data has searchable fields

## 🚀 Future Enhancements

- **Grid View**: Card-based grid layout
- **Advanced Filters**: Category, price range, ratings
- **Saved Searches**: User preferences
- **Export Options**: CSV, PDF reports
- **Real-time Updates**: Live data synchronization

## 📝 Files Modified

- `apps/web/components/ui/map-with-list.tsx` - New component
- `apps/web/app/(marketing)/page.tsx` - Updated homepage
- `apps/web/app/api/vendors/route.ts` - Enhanced vendor API
- `apps/web/app/globals.css` - Added line-clamp utility

## 🎉 Result

Users can now:
1. **Toggle** between finding markets or vendors
2. **Switch** between map and list views
3. **Search** across all data in real-time
4. **Sort** results by different criteria
5. **View** detailed information in organized cards

The homepage is now much more interactive and user-friendly! 🎯
