# MarketHub HTML Files for html.to.design Figma Extension

## 🎯 What This Package Contains

This package contains all the static HTML files for MarketHub, a platform that connects local markets with quality vendors. All files are properly structured and CSS-linked for seamless import into Figma via the html.to.design extension.

## 📁 File Structure

```
html-to-design-package/
├── index.html              # Main landing page
├── login.html              # Sign-in page
├── register.html           # Registration page
├── markets.html            # Market directory page
├── organizer-dashboard.html # Market organizer dashboard
├── vendor-dashboard.html   # Vendor dashboard
├── css/
│   └── styles.css         # Complete CSS stylesheet
├── js/
│   └── app.js            # JavaScript functionality
├── assets/                # Images and other assets
└── pages/                 # Additional page templates
```

## 🚀 How to Use with html.to.design

### 1. Install the Extension
- Install the "html.to.design" extension from the Figma Community
- Or visit: https://www.figma.com/community/plugin/1011589317340552610/html-to-design

### 2. Import Your Files
- Open Figma and create a new design file
- Go to Plugins → html.to.design
- Click "Import HTML" and select any of the HTML files from this package

### 3. CSS Integration
- The extension will automatically detect and import the linked CSS
- All styles are defined in `css/styles.css` with CSS custom properties
- The extension should preserve all styling, layout, and visual hierarchy

## 🎨 Design System Features

### Color Palette
- **Primary**: Green (#059669) - Used for buttons, links, and accents
- **Secondary**: Gray variations for text and backgrounds
- **Semantic**: Success, warning, and error states

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, Roboto)
- **Scale**: Consistent heading hierarchy (h1-h6)
- **Line Heights**: Optimized for readability

### Components
- **Cards**: Consistent spacing and shadows
- **Buttons**: Primary, secondary, and outline variants
- **Forms**: Input fields, labels, and validation states
- **Navigation**: Header with responsive mobile menu

## 📱 Responsive Design

All pages are built with responsive design principles:
- Mobile-first approach
- Flexible grid systems
- Touch-friendly interactions
- Optimized for various screen sizes

## 🔧 Technical Details

### CSS Architecture
- CSS Custom Properties (variables) for consistent theming
- Utility classes for spacing and layout
- Component-based styling approach
- No external dependencies

### JavaScript Features
- Form validation and submission
- Mobile menu toggle
- Password visibility toggle
- Dynamic content loading

## 📋 Import Checklist

Before importing to Figma, ensure:
- [ ] All HTML files are in the same directory as the CSS folder
- [ ] CSS file path is `css/styles.css` (relative path)
- [ ] JavaScript file path is `js/app.js` (relative path)
- [ ] All assets are in the `assets/` folder

## 🎯 Recommended Import Order

1. **Start with `index.html`** - Main landing page with full design system
2. **Import `login.html`** - Clean, focused form design
3. **Add `register.html`** - Multi-step registration flow
4. **Include `markets.html`** - Content-heavy listing page
5. **Finish with dashboards** - Complex layout examples

## 🚨 Troubleshooting

### CSS Not Loading
- Verify file paths are relative (`css/styles.css`)
- Check that CSS file is in the same directory structure
- Ensure no absolute paths are used

### Missing Styles
- The extension should automatically import linked CSS
- If styles are missing, manually copy CSS content into Figma
- Use the CSS variables for consistent theming

### Layout Issues
- Some complex CSS properties may not translate perfectly
- Use Figma's layout tools to refine positioning
- Maintain the visual hierarchy from the original design

## 📞 Support

If you encounter issues with the html.to.design extension:
- Check the extension's documentation
- Ensure all files are in the correct directory structure
- Verify that CSS paths are relative, not absolute

## 🎉 Success Tips

- Import one page at a time to avoid overwhelming the extension
- Use the CSS variables for consistent color application
- Leverage Figma's component system to recreate reusable elements
- Test the imported designs across different frame sizes

---

**Happy designing! 🎨✨**
