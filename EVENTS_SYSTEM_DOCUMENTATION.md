# Events Management System Documentation

## Overview

A comprehensive events management system has been implemented for MarketHub organizers, providing full CRUD functionality, calendar views, and timezone handling for Australian markets.

## Features Implemented

### ✅ Core Events Management
- **Create Events**: Full event creation with title, description, dates, location, and tags
- **Edit Events**: Comprehensive editing of existing events
- **Delete Events**: Safe event deletion with confirmation
- **View Events**: Multiple calendar views (Month, Week, Day)
- **Event Details**: Rich event information display

### ✅ Calendar Interface
- **Month View**: Traditional calendar grid with event previews
- **Week View**: 7-day timeline with hourly slots
- **Day View**: Single day detailed timeline
- **Interactive Navigation**: Easy date navigation and view switching

### ✅ Timezone Handling
- **Australia/Brisbane Timezone**: Proper timezone handling for Australian markets
- **Date-fns-tz Integration**: Accurate timezone conversion and display
- **Local Time Display**: Events shown in local Australian time

### ✅ User Experience
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Events update immediately after changes
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Proper loading indicators during operations

### ✅ Security & Authentication
- **Authentication Guards**: All endpoints require authentication
- **Authorization**: Users can only manage their own market events
- **Input Validation**: Comprehensive validation on both client and server
- **XSS Protection**: Proper input sanitization

### ✅ Database Integration
- **Enhanced Events Table**: Upgraded with all necessary fields
- **Profile System**: Fixed profile management with database integration
- **Migrations**: Proper database migrations for events table upgrade

## Files Created/Modified

### New Files
1. **Database Migration**
   - `infra/supabase/migrations/20240122000001_upgrade_events_table.sql`
   - Comprehensive events table with all required fields

2. **Events Page**
   - `app/organizer/markets/[id]/events/page.tsx`
   - Main events management interface with calendar views

3. **API Endpoints**
   - `app/api/markets/[id]/events/route.ts` - Events CRUD operations
   - `app/api/markets/[id]/events/[eventId]/route.ts` - Single event operations
   - `app/api/organizer/profile/route.ts` - Profile management

4. **UI Components**
   - `components/events/events-calendar.tsx` - Calendar component with multiple views
   - `components/events/event-drawer.tsx` - Event creation/editing modal
   - `components/ui/sheet.tsx` - Sheet component for modals

### Modified Files
1. **Profile Page**
   - `app/organizer/profile/page.tsx` - Connected to database with full functionality

2. **Package Dependencies**
   - Added `date-fns-tz` for timezone handling
   - Added `react-hook-form` for form management

## API Endpoints

### Events Management
- `GET /api/markets/[id]/events` - Fetch events for a market
- `POST /api/markets/[id]/events` - Create new event
- `GET /api/markets/[id]/events/[eventId]` - Get single event
- `PUT /api/markets/[id]/events/[eventId]` - Update event
- `DELETE /api/markets/[id]/events/[eventId]` - Delete event

### Profile Management
- `GET /api/organizer/profile` - Get organizer profile
- `PUT /api/organizer/profile` - Update organizer profile

## Database Schema

### Events Table
```sql
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ NOT NULL,
    all_day BOOLEAN DEFAULT false,
    location TEXT,
    tags TEXT[],
    visibility TEXT CHECK (visibility IN ('public', 'private')) DEFAULT 'public',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Usage Instructions

### For Organizers
1. Navigate to your market's events page: `/organizer/markets/[id]/events`
2. Switch between Month, Week, and Day views using the tabs
3. Click on any date to create a new event
4. Click on existing events to view/edit details
5. Use the navigation buttons to move between time periods

### Event Creation
1. Click the "Add Event" button or click on a date
2. Fill in required fields (Title, Start Time, End Time)
3. Optionally add description, location, and tags
4. Set visibility (Public/Private)
5. Save the event

### Event Management
- **Edit**: Click on an event to open the editing drawer
- **Delete**: Use the delete button in the event drawer
- **View**: Events display with time, location, and other details

## Technical Implementation

### Timezone Handling
```javascript
import { toZonedTime, fromZonedTime, formatInTimeZone } from 'date-fns-tz'

const TIMEZONE = 'Australia/Brisbane'

// Convert UTC to local time for display
const localTime = toZonedTime(utcDate, TIMEZONE)

// Convert local time to UTC for storage
const utcTime = fromZonedTime(localDate, TIMEZONE)
```

### Authentication Flow
1. All API endpoints verify user authentication via Supabase
2. Market ownership is verified before allowing event operations
3. Profile data is linked to authenticated user ID

### Error Handling
- Client-side validation prevents invalid submissions
- Server-side validation ensures data integrity
- User-friendly error messages for all failure cases
- Loading states provide feedback during operations

## Testing Status

### ✅ Build Testing
- Next.js build completes successfully
- TypeScript compilation passes (with expected warnings)
- All new components render without errors

### ✅ Functionality Testing
- Event CRUD operations work correctly
- Calendar views display properly
- Timezone handling functions as expected
- Authentication guards protect endpoints
- Profile management saves to database

## Future Enhancements

### Potential Improvements
1. **Recurring Events**: Support for repeating events
2. **Event Categories**: Color-coded event categories
3. **Notifications**: Email/SMS reminders for events
4. **Export/Import**: Calendar integration (iCal, Google Calendar)
5. **Bulk Operations**: Mass event management tools
6. **Analytics**: Event attendance and engagement metrics

### Performance Optimizations
1. **Event Caching**: Cache frequently accessed events
2. **Lazy Loading**: Load events on-demand for large date ranges
3. **Pagination**: Paginate event lists for better performance
4. **Image Upload**: Support for event images and attachments

## Conclusion

The Events Management System is now fully functional and ready for production use. It provides a comprehensive solution for Australian market organizers to manage their events with proper timezone handling, security, and user experience considerations.

All code has been tested, documented, and follows best practices for React, Next.js, and Supabase integration. The system is scalable and can be extended with additional features as needed.
