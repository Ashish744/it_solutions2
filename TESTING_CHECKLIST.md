# TESTING CHECKLIST - IT Solutions Website
**Version:** 1.0  
**Date:** April 27, 2026  
**Status:** Ready for QA Testing ✅

---

## DESKTOP TESTING (1200px+)

### Navigation & Header
- [ ] Logo displays correctly and links to home
- [ ] All navigation links work (Home, About, Services, Blog, Contact)
- [ ] Login button has gradient styling and glow animation
- [ ] Dark mode toggle visible and functional
- [ ] Hover effects on nav links show red underline
- [ ] No overflow or layout issues

### Hero Section
- [ ] Type animation runs smoothly on page load
- [ ] "Transforming Ideas into Technology" text displays correctly
- [ ] Hero description text readable
- [ ] "Visit Us To Know More" button visible and clickable
- [ ] Background image displays properly
- [ ] Text is centered and properly positioned

### Competencies Section
- [ ] Section header "Our Core Competencies" displays
- [ ] 6 cards in a row grid layout
- [ ] Each card shows icon, title, and description
- [ ] Hover effect: cards lift up and change color
- [ ] All icons from Font Awesome display correctly

### Why Choose Us Section (NEW)
- [ ] Section header with orange "Choose Us" text
- [ ] 4 stat cards with animated counters
- [ ] Counters animate when section comes into view
- [ ] Icons appear in circles with gradient background
- [ ] 4 feature cards below stats
- [ ] Hover effects on cards (lift up, shadow change)
- [ ] All icons display correctly

### Topographical Section
- [ ] Two-column layout (text left, image right)
- [ ] "Topographical" heading visible
- [ ] All paragraph text readable
- [ ] Image displays properly with rounded corners
- [ ] Hover effects work smoothly

### Footer
- [ ] 4 columns visible (Stackly, Quick Links, Contact, Follow Us)
- [ ] All footer links work correctly
- [ ] Social icons display
- [ ] Copyright text at bottom

### Dark Mode
- [ ] Toggle button changes from 🌙 to ☀️
- [ ] Page background turns dark
- [ ] Text changes to white/light colors
- [ ] All sections properly styled in dark mode
- [ ] Dark mode persists on refresh

---

## TABLET TESTING (768px - 992px)

### Navigation
- [ ] Logo scales down appropriately
- [ ] Navigation links visible
- [ ] Dark mode toggle works

### Hero Section
- [ ] Text remains readable
- [ ] Font sizes scale down appropriately
- [ ] No text overflow

### Competencies Section
- [ ] Cards change to 3 per row
- [ ] Grid spacing looks good
- [ ] Cards remain clickable

### Why Choose Us Section
- [ ] Stats cards change to 2x2 grid
- [ ] Feature cards change to 2 per row
- [ ] Counter animations work
- [ ] No layout breaking

### Topographical Section
- [ ] Switches to stacked layout (text above image)
- [ ] Image scales appropriately
- [ ] Text remains centered

### Footer
- [ ] Remains 4 columns or adjusts as needed
- [ ] Text readable

---

## MOBILE TESTING (320px - 480px) ⚠️ CRITICAL

### Navigation & Header
- [ ] Hamburger menu (☰) appears
- [ ] Menu opens on click
- [ ] Close button (✕) visible
- [ ] Menu closes on click
- [ ] Menu width 200px from right
- [ ] All nav items visible in menu
- [ ] Dark mode toggle in menu works
- [ ] Logo size appropriate

### Hero Section ⚠️ CRITICAL
- [ ] Text properly centered
- [ ] h1 font size 24px (readable, not too large)
- [ ] Description text 13px (readable)
- [ ] Button properly scaled
- [ ] No horizontal scrolling
- [ ] Text doesn't overlap
- [ ] Background image visible

### Competencies Section
- [ ] Cards stack to 1 column
- [ ] Card padding appropriate
- [ ] Icon sizes scale down
- [ ] Text readable
- [ ] No overflow

### Why Choose Us Section
- [ ] 4 stat cards stack vertically
- [ ] Counters animate correctly
- [ ] Icons visible
- [ ] Numbers readable
- [ ] Feature cards stack vertically
- [ ] All 4 feature items visible

### Topographical Section
- [ ] Text stacks above image
- [ ] Image full width
- [ ] No overflow
- [ ] Text centered

### Footer
- [ ] All 4 columns stack vertically
- [ ] Links clickable (44px+ tap targets)
- [ ] Text readable

---

## LANDSCAPE TESTING (600px - 800px)

### Navigation
- [ ] Hamburger menu visible
- [ ] Menu opens/closes properly

### Hero Section
- [ ] Text remains centered
- [ ] Font sizes appropriate for landscape

### All Sections
- [ ] No horizontal scrolling
- [ ] All content visible
- [ ] Touch targets adequate

---

## BROWSER COMPATIBILITY TESTING

### Chrome (Latest)
- [ ] [ ] All features work
- [ ] [ ] No console errors
- [ ] [ ] Animations smooth

### Firefox (Latest)
- [ ] [ ] All features work
- [ ] [ ] No console errors
- [ ] [ ] Animations smooth

### Safari (Latest)
- [ ] [ ] All features work
- [ ] [ ] No console errors
- [ ] [ ] Animations smooth
- [ ] [ ] Gradient styling works

### Edge (Latest)
- [ ] [ ] All features work
- [ ] [ ] No console errors

---

## MOBILE DEVICE TESTING (Real Devices)

### iPhone 12/13/14 (390px width)
- [ ] [ ] All layouts correct
- [ ] [ ] Touch interactions responsive
- [ ] [ ] No white space on right

### iPhone SE (375px width)
- [ ] [ ] Hero text readable
- [ ] [ ] All sections accessible
- [ ] [ ] Menu works properly

### Android (Samsung, Google Pixel)
- [ ] [ ] 360px width handling correct
- [ ] [ ] 480px width handling correct
- [ ] [ ] Touch interactions responsive

### iPad (768px)
- [ ] [ ] Layout correct
- [ ] [ ] All features work

---

## PERFORMANCE TESTING

### Page Load
- [ ] [ ] Page loads in < 3 seconds (3G)
- [ ] [ ] Images optimize properly
- [ ] [ ] No layout shift (CLS < 0.1)

### Animations
- [ ] [ ] Type effect smooth and continuous
- [ ] [ ] Counter animations smooth
- [ ] [ ] Hover effects responsive
- [ ] [ ] No stuttering
- [ ] [ ] Scroll animations trigger correctly

### Interactions
- [ ] [ ] Menu opens/closes instantly
- [ ] [ ] Dark mode toggle instant
- [ ] [ ] No lag on click events

---

## ACCESSIBILITY TESTING

### Images
- [ ] [ ] All images have alt text
- [ ] [ ] Alt text is descriptive
- [ ] [ ] Logo alt: "Stackly IT Solutions Logo" ✅
- [ ] [ ] Topo image alt: "Topographical presence map..." ✅

### Keyboard Navigation
- [ ] [ ] Tab through all links
- [ ] [ ] Enter to activate buttons
- [ ] [ ] Focus indicators visible
- [ ] [ ] Can access all interactive elements

### Screen Reader (NVDA/JAWS)
- [ ] [ ] Read alt text correctly
- [ ] [ ] Headings identified properly
- [ ] [ ] Lists announced correctly
- [ ] [ ] Links identifiable

### Color Contrast
- [ ] [ ] Text readable on backgrounds
- [ ] [ ] Links distinguishable from text
- [ ] [ ] Buttons easily clickable

---

## LINKS & NAVIGATION TESTING

### Internal Links
- [ ] [ ] Home → All pages work
- [ ] [ ] About Us → about.html loads
- [ ] [ ] Services → services.html loads
- [ ] [ ] Blog → blog.html loads
- [ ] [ ] Contact → contact.html loads
- [ ] [ ] Login → login.html loads

### External Links
- [ ] [ ] All social icons work (if linked)
- [ ] [ ] External resources load correctly

---

## FORM TESTING (Contact Page)

### Form Fields
- [ ] [ ] All form inputs visible
- [ ] [ ] Form responsive on mobile
- [ ] [ ] Submit button works
- [ ] [ ] Form validation works

### Map Embed
- [ ] [ ] Google Map loads correctly
- [ ] [ ] Map responsive
- [ ] [ ] Map interactive (zoom, pan)

---

## DARK MODE TESTING

### Visual
- [ ] [ ] Background dark (#121212 or similar)
- [ ] [ ] Text white/light colors
- [ ] [ ] Stat cards dark background
- [ ] [ ] Feature cards dark background
- [ ] [ ] Footers styled for dark mode

### Persistence
- [ ] [ ] Dark mode persists after refresh
- [ ] [ ] Dark mode persists after closing tab
- [ ] [ ] Can toggle back to light mode
- [ ] [ ] Preference saved in localStorage

---

## BUG REPORT TEMPLATE

If bugs are found, use this format:

```
BUG #: [Number]
TITLE: [Brief description]
SEVERITY: [Critical/High/Medium/Low]
BROWSER: [Chrome/Firefox/Safari/Edge]
DEVICE: [Mobile/Tablet/Desktop]
RESOLUTION: [e.g., 1920x1080]
STEPS TO REPRODUCE:
1. 
2. 
3. 

EXPECTED RESULT:

ACTUAL RESULT:

SCREENSHOT:

NOTES:
```

---

## SIGN-OFF

- QA Lead: _________________ Date: _______
- Test Completion Date: _______
- Total Issues Found: _______
- Issues Fixed: _______
- Final Status: [ ] PASS [ ] FAIL [ ] PASS WITH NOTES

