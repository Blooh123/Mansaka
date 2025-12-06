# Mansaka Heritage Website

A comprehensive, responsive, and visually appealing website dedicated to the Mansaka Indigenous Group of the Philippines.

## Overview

This website is designed to educate students, researchers, and Filipino citizens about the rich cultural heritage of the Mansaka people. It showcases their traditions, language, history, and contemporary cultural practices while promoting awareness and cultural preservation.

## Features

### 📄 Pages Included

1. **Home Page (index.html)**
   - Hero banner with blur background
   - Introduction to the Mansaka people
   - Cultural highlights slider
   - Video section placeholder
   - Quick facts section
   - Call-to-action buttons

2. **About Page (about.html)**
   - Historical background
   - Etymology of "Mansaka"
   - Geographical distribution
   - Key cultural values
   - Timeline of Mansaka through the ages

3. **Traditions & Culture Page (culture.html)**
   - Traditional clothing and ornaments
   - Native crafts and handiwork
   - Music, instruments, and dances
   - Livelihood information
   - Celebrations and festivals
   - Spiritual beliefs and practices

4. **Language Page (language.html)**
   - Mansaka language overview
   - Basic words and phrases
   - Common expressions
   - Language preservation efforts
   - Learning resources

5. **Gallery Page (gallery.html)**
   - Filterable image gallery
   - Multiple categories (Clothing, Crafts, Landscapes, Celebrations, Arts)
   - Photo submission section
   - Image placeholders for future content

6. **Contact Page (contact.html)**
   - Contact form
   - Location information
   - FAQ section
   - Inquiry categories
   - Academic sources and references

### 🎨 Design Features

- **Color Scheme**: Traditional indigenous colors
  - Primary Brown: #8b4513
  - Gold/Secondary: #b8860b
  - Green: #2e7d32
  - Cream background: #f5f1e8

- **Modern UI Elements**
  - Rounded buttons with hover effects
  - Smooth animations and transitions
  - Card-based layouts
  - Hover effects on interactive elements
  - Clean typography

- **Responsive Design**
  - Mobile-first approach
  - Breakpoints for tablets (768px) and mobile (480px)
  - Hamburger menu for mobile navigation
  - Flexible grid layouts

### 📱 Responsive Features

- Mobile-optimized navigation with hamburger menu
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and interactive elements
- Optimized typography for readability
- Responsive images and placeholders
- Print-friendly styles

### 🔧 Interactive Elements

- **Navigation Menu**: Sticky header with active page highlighting
- **Gallery Filter**: Filter images by category
- **FAQ Accordion**: Expandable/collapsible FAQ items
- **Contact Form**: Fully functional form with validation
- **Smooth Scrolling**: Smooth navigation between sections
- **Scroll-to-Top Button**: Appears when scrolling down
- **Mobile Menu Toggle**: Hamburger menu for mobile devices

## File Structure

```
IECWebsite/
├── index.html                 # Home page
├── about.html                # About page
├── culture.html              # Traditions & Culture page
├── language.html             # Language page
├── gallery.html              # Gallery page
├── contact.html              # Contact page
├── css/
│   ├── style.css            # Main stylesheet
│   └── responsive.css       # Responsive/mobile styles
├── js/
│   └── script.js            # JavaScript functionality
└── README.md                # This file
```

## Installation & Usage

### To View the Website:

1. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or navigate to the directory and double-click `index.html`

2. **Use a Local Server (Recommended)**
   - Using Python: `python -m http.server 8000`
   - Using Node.js: `npx http-server`
   - Then navigate to `http://localhost:8000`

### Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding Content

1. **Images**: Replace image placeholders with actual images
2. **Text**: Edit HTML files to update content
3. **Colors**: Modify CSS variables in `style.css` root section
4. **Fonts**: Change font-family in body selector

### Modifying Colors

In `css/style.css`, update the CSS variables:

```css
:root {
    --primary-brown: #8b4513;
    --gold: #b8860b;
    --green: #2e7d32;
    /* ... more colors ... */
}
```

### Adding New Pages

1. Create new HTML file with same structure as existing pages
2. Copy navigation and footer from existing page
3. Add link to navigation menu
4. Create CSS classes as needed

## Content Sections Explained

### Educational Value

- **Historical Context**: Understanding Mansaka origins and evolution
- **Cultural Preservation**: Documentation of traditions and practices
- **Language Resources**: Basic vocabulary and language learning
- **Contemporary Issues**: Preservation efforts and challenges

### Research Support

- Comprehensive information for students and researchers
- Cited sources and references
- Academic approach to indigenous studies
- Contact opportunities for collaborators

### Community Engagement

- Information about community involvement
- Support for cultural initiatives
- Links to related organizations
- Feedback and inquiry channels

## Technical Details

### CSS Architecture

- **Semantic HTML5** for better structure
- **CSS Custom Properties (Variables)** for easy theming
- **Flexbox and Grid** for responsive layouts
- **Mobile-first** responsive design approach

### JavaScript Features

- Vanilla JavaScript (no frameworks required)
- Event delegation for efficient DOM handling
- Intersection Observer for scroll animations
- Local storage support for preferences
- Form validation and handling

### Performance Optimization

- Minimal external dependencies (only Font Awesome icons)
- Lightweight CSS and JavaScript
- Optimized image placeholders
- Fast loading times
- Print-friendly styles

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA labels where appropriate
- High contrast color scheme
- Readable font sizes

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |
| IE 11   | N/A     | ❌ Not |

## SEO Optimization

- Semantic HTML5 tags
- Meta descriptions on each page
- Heading structure optimization
- Internal linking strategy
- Mobile responsiveness
- Fast page load times

## Future Enhancements

Potential improvements for future versions:

- [ ] Video content integration
- [ ] Interactive map of Mansaka territory
- [ ] Photo gallery backend
- [ ] Blog/News section
- [ ] Community forum
- [ ] Multilingual support
- [ ] Advanced search functionality
- [ ] Analytics integration
- [ ] Social media integration
- [ ] PDF downloads of resources

## Maintenance

### Regular Updates

- Update contact information as needed
- Add new cultural documentation
- Expand language resources
- Update gallery images
- Maintain FAQ section

### Backup

- Regular backups of HTML and CSS files
- Version control (recommended using Git)
- Documented changes and updates

## Credits & Attribution

This website is dedicated to preserving and promoting the cultural heritage of the Mansaka Indigenous Group of the Philippines.

### Sources Referenced

- National Commission on Indigenous Peoples (NCIP)
- Philippine Indigenous Peoples Organizations
- Ethnologue Language Database
- Academic research on Lumad cultures
- Local Mansaka communities and organizations

## Contact & Support

For inquiries, collaborations, or contributions:

- **Email**: info@mansakaheritage.org
- **Research Inquiries**: research@mansakaheritage.org
- **Phone**: +63 (087) XXX-XXXX
- **Location**: Davao de Oro, Philippines

## Disclaimer

This website is for educational purposes. Information is compiled from academic sources and community knowledge. We strive for accuracy and cultural respect in all content.

## License

This website is dedicated to cultural preservation and education. Content may be used for educational purposes with proper attribution.

---

**Last Updated**: December 2024
**Version**: 1.0
**Status**: Complete and Responsive

**Made with dedication to Mansaka Heritage and Indigenous Cultural Preservation** 🌍
