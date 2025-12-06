# Mansaka Heritage Website - Quick Start Guide

## 🚀 Getting Started

### Option 1: Direct Browser Opening (Easiest)
1. Navigate to the folder: `C:\Users\User\Desktop\IECWebsite`
2. Double-click on `index.html`
3. The website will open in your default browser

### Option 2: Using a Local Server (Recommended)

**Using Python (if installed):**
```bash
# Navigate to the folder
cd C:\Users\User\Desktop\IECWebsite

# Start server
python -m http.server 8000

# Open browser to http://localhost:8000
```

**Using Node.js (if installed):**
```bash
# Navigate to the folder
cd C:\Users\User\Desktop\IECWebsite

# Start server
npx http-server

# Open browser to http://localhost:8000
```

## 📖 Website Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | index.html | Introduction and highlights |
| About | about.html | History and background |
| Traditions | culture.html | Cultural practices |
| Language | language.html | Mansaka language |
| Gallery | gallery.html | Image gallery |
| Contact | contact.html | Contact form & info |

## 🎨 Color Scheme

- **Primary Brown**: #8b4513 (Headers, text)
- **Gold/Secondary**: #b8860b (Highlights, buttons)
- **Green**: #2e7d32 (Accents)
- **Cream**: #f5f1e8 (Light backgrounds)
- **Gray**: #f0f0f0 (Sections)

## 📱 Features by Device

### Desktop (1200px+)
- Full navigation menu
- Multi-column layouts
- Hover effects
- Full gallery display

### Tablet (768px - 1199px)
- Adjusted typography
- Modified grid layouts
- Optimized spacing

### Mobile (< 768px)
- Hamburger menu
- Single-column layouts
- Touch-friendly buttons
- Optimized font sizes

## 🔧 Customization Tips

### Change Colors
Edit `css/style.css` - Look for `:root` section at the top

### Update Text Content
Open any HTML file and edit the text directly

### Replace Placeholders
- Image placeholders: Replace the colored boxes with real images
- Video section: Replace with actual video embeds
- Contact info: Update email and phone numbers

### Add New Sections
1. Copy an existing section HTML
2. Modify the content
3. Add corresponding CSS if needed

## ✨ Key Interactive Features

- ✅ Responsive navigation menu
- ✅ Mobile hamburger menu
- ✅ Gallery image filtering
- ✅ FAQ accordion
- ✅ Contact form
- ✅ Smooth scrolling
- ✅ Scroll-to-top button
- ✅ Hover animations

## 📂 File Organization

```
css/
├── style.css          → Main styles & design
└── responsive.css     → Mobile & tablet styles

js/
└── script.js         → Interactivity & animations

HTML Pages (in root):
├── index.html        → Home page
├── about.html        → About page
├── culture.html      → Traditions page
├── language.html     → Language page
├── gallery.html      → Gallery page
└── contact.html      → Contact page
```

## 🖼️ Adding Real Content

### Step 1: Prepare Images
- Size images appropriately (use web-optimized formats)
- Replace placeholders with actual images

### Step 2: Update Text
- Edit HTML files with actual content
- Maintain the structure and layout

### Step 3: Add Links
- Update internal links if needed
- Add external resource links

### Step 4: Test
- Test on mobile devices
- Test on different browsers
- Check all interactive features

## 📞 Contact Information to Update

In `contact.html`, update:
- Email addresses
- Phone numbers
- Physical address
- Office hours
- Social media links

## 🔍 Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu toggles properly
- [ ] Gallery filters work
- [ ] FAQ accordion opens/closes
- [ ] Contact form submits
- [ ] Links navigate correctly
- [ ] Responsive on mobile (test with browser dev tools)
- [ ] All images display
- [ ] No console errors

## 🌐 Browser Testing

1. **Chrome/Edge**: Ctrl + Shift + J (DevTools)
2. **Firefox**: F12 (DevTools)
3. **Safari**: Cmd + Option + I (DevTools)

Use DevTools to test:
- Mobile responsiveness (Ctrl + Shift + M)
- Performance (Lighthouse)
- Accessibility (Lighthouse)
- Console errors

## 📊 Performance Optimization

The website is already optimized for:
- Fast loading (no heavy frameworks)
- Mobile-first design
- Clean, minimal CSS
- Vanilla JavaScript (no jQuery needed)
- SEO-friendly structure

## 🆘 Common Issues & Solutions

**Images not showing:**
- Check image file paths
- Ensure images are in correct folders
- Use relative paths (not absolute)

**Menu not working on mobile:**
- Check if JavaScript is enabled
- Clear browser cache (Ctrl + Shift + Delete)
- Test in different browser

**Form not submitting:**
- Check browser console for errors
- Ensure all required fields are filled
- In real deployment, add server-side handler

**Styling looks off:**
- Clear browser cache
- Check if responsive.css is loaded
- Test in different screen sizes

## 💡 Tips for Enhancement

1. Add Google Analytics for tracking
2. Implement contact form backend
3. Add video embeds (YouTube, Vimeo)
4. Create blog/news section
5. Add testimonials section
6. Implement search functionality
7. Add multi-language support
8. Create member login system

## 📚 Resources

- **MDN Web Docs**: https://developer.mozilla.org
- **CSS-Tricks**: https://css-tricks.com
- **W3Schools**: https://www.w3schools.com
- **Font Awesome Icons**: https://fontawesome.com

## 🎯 Next Steps

1. ✅ Open website and test all pages
2. ✅ Replace placeholder images
3. ✅ Update contact information
4. ✅ Customize colors if needed
5. ✅ Add real content
6. ✅ Deploy to web hosting

## 📝 Deployment Notes

When ready to go live:
1. Get web hosting (shared hosting or cloud)
2. Upload all files to hosting server
3. Ensure proper file permissions
4. Set up email for contact form
5. Test all features on live server
6. Set up SSL certificate (HTTPS)
7. Add to search engines (Google, Bing)
8. Monitor analytics

---

**Need Help?** 
Check the README.md file for more detailed information about the website structure and features.

**Enjoy exploring and customizing your Mansaka Heritage Website!** 🌍✨
