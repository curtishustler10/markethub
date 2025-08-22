# MarketHub Static Website

A fully functional static website version of MarketHub, demonstrating the complete user interface and user experience without backend dependencies.

## 🌟 Features

This static website includes:

### Pages
- **Home Page** (`index.html`) - Landing page with features and call-to-actions
- **Markets Directory** (`markets.html`) - Browse and search local markets
- **Login** (`login.html`) - Authentication page with password and magic link options
- **Registration** (`register.html`) - Sign up for market organizers and vendors
- **Vendor Dashboard** (`vendor-dashboard.html`) - Vendor management interface
- **Organizer Dashboard** (`organizer-dashboard.html`) - Market organizer interface

### Functionality
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Interactive Search** - Real-time market filtering and search
- **Mock Authentication** - Simulated login/registration flows
- **Dynamic Content** - JavaScript-powered interactivity
- **Form Validation** - Client-side form validation
- **Toast Notifications** - User feedback system
- **Role-based Navigation** - Different experiences for vendors vs organizers

### Design System
- **CSS Variables** - Consistent color scheme and theming
- **Component-based Styles** - Reusable UI components (buttons, cards, forms)
- **Tailwind-inspired Classes** - Utility-first CSS approach
- **Accessibility** - Semantic HTML and keyboard navigation
- **Modern UI** - Clean, professional design with green color scheme

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, but recommended for full functionality)

### Installation

1. **Direct File Access** (Basic)
   ```bash
   # Navigate to the static-website directory
   cd markethub/static-website
   
   # Open index.html in your browser
   open index.html
   ```

2. **Local Web Server** (Recommended)
   ```bash
   # Using Python (Python 3)
   cd markethub/static-website
   python -m http.server 8000
   
   # Using Node.js (with npx)
   cd markethub/static-website
   npx serve .
   
   # Using PHP
   cd markethub/static-website
   php -S localhost:8000
   ```

3. **Access the Website**
   - Direct file: Open `index.html` in your browser
   - Local server: Visit `http://localhost:8000`

## 📁 File Structure

```
static-website/
├── index.html              # Home page
├── markets.html            # Markets directory
├── login.html              # Login page
├── register.html           # Registration page
├── vendor-dashboard.html   # Vendor dashboard
├── organizer-dashboard.html # Organizer dashboard
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── app.js              # JavaScript functionality
├── assets/                 # Images and other assets (empty for now)
└── README.md              # This file
```

## 🎨 Design System

### Colors
- **Primary Green**: `#059669` (hsl(142 76% 36%))
- **Background**: White and light gray tones
- **Text**: Dark gray (`#111827`) for primary text
- **Muted**: Medium gray (`#6b7280`) for secondary text

### Components
- **Buttons**: Primary, secondary, outline variants
- **Cards**: Consistent shadow and border radius
- **Forms**: Styled inputs with focus states
- **Badges**: Status indicators and tags
- **Navigation**: Responsive header with mobile menu

### Typography
- **Font**: System font stack (San Francisco, Segoe UI, etc.)
- **Scale**: Consistent sizing from text-sm to text-5xl
- **Weights**: Regular (400), medium (500), semibold (600), bold (700)

## ⚡ JavaScript Features

### Mock Data
- **Markets**: 3 sample markets with realistic data
- **Applications**: Sample vendor applications with different statuses
- **Statistics**: Mock performance metrics and analytics

### Interactive Features
- **Search and Filter**: Real-time market filtering
- **Form Validation**: Email, password, and required field validation
- **Authentication Flow**: Simulated login/registration with role detection
- **Dashboard Updates**: Dynamic content loading
- **Toast Notifications**: Success and error messages
- **Mobile Menu**: Responsive navigation toggle

### Page-specific Functionality
- **Markets Page**: Search, filter, and application submission
- **Login Page**: Password visibility toggle, magic link option
- **Registration Page**: Role selection with dynamic form fields
- **Dashboards**: Role-specific content and statistics

## 📱 Responsive Design

The website is fully responsive and tested on:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adapted layout)
- **Mobile**: 320px - 767px (stacked layout, mobile menu)

### Breakpoints
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+

## 🧪 Demo Features

### Test Credentials
For the demo login page, you can use:
- **Email**: Any valid email format (e.g., `demo@example.com`)
- **Password**: Any password with 8+ characters (e.g., `password123`)

### Sample Data
- **3 Markets**: Downtown Farmers Market, Artisan Craft Fair, Riverside Food Truck Festival
- **2 Vendor Applications**: Fresh Valley Produce, Handmade Pottery Co
- **Mock Statistics**: Realistic performance metrics and analytics

## 🎯 Use Cases

This static website is perfect for:

1. **Demonstrations**: Showcasing the MarketHub concept to stakeholders
2. **User Testing**: Gathering feedback on UI/UX without backend complexity
3. **Design Review**: Evaluating the visual design and user flows
4. **Frontend Development**: Reference implementation for the full application
5. **Marketing**: Sales presentations and marketing materials
6. **Prototyping**: Rapid iteration on user interface concepts

## 🔧 Customization

### Styling
- Modify `css/styles.css` to change colors, fonts, or layout
- CSS variables at the top of the file control the color scheme
- Component classes can be easily customized

### Content
- Update mock data in `js/app.js` to change sample markets and applications
- Modify HTML content directly in the page files
- Add new pages by creating additional HTML files and updating navigation

### Functionality
- Extend JavaScript functionality in `js/app.js`
- Add new page handlers by following the existing pattern
- Implement additional interactive features as needed

## 🌐 Browser Compatibility

Tested and compatible with:
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

### Features Used
- CSS Grid and Flexbox
- CSS Variables
- ES6+ JavaScript
- Fetch API (for future enhancements)
- Local Storage (for future enhancements)

## 📄 License

This static website is part of the MarketHub project. See the main project README for licensing information.

## 🤝 Contributing

To contribute to the static website:

1. Make changes to the HTML, CSS, or JavaScript files
2. Test across different browsers and screen sizes
3. Ensure all interactive features work properly
4. Follow the existing code style and structure
5. Update this README if you add new features

## 📞 Support

For questions about this static website implementation, please refer to the main MarketHub project documentation or create an issue in the project repository.
