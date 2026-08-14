Plan: Transform Existing React Website into REVO-LITE Premium Branding Studio

1. Brand Foundation and Design System

Update CSS custom properties in tailwind.css to match REVO-LITE's exact color scheme: dark blue (#1a2332 or similar), light blue accent, red (#e63946), near-black backgrounds (#080808, #0d0d0d, #111), and white text
Replace Google Font import: remove "Manrope" and add "Cormorant Garamond" (serif, luxury) and "DM Sans" (clean, modern) from Google Fonts API
Update Tailwind config to include new font family custom properties for Cormorant Garamond and DM Sans
Add new CSS custom properties for shadow effects, backdrop blur, and animation timing functions for luxury feel
Define CSS variables for component spacing, border radius (more rounded for modern luxury aesthetic), and transition durations
2. Navigation Bar Section Redesign

Replace "Soziely" text logo with ./RETINA PNG LOGO GOOGLE SIZE.png image (height 36px, maintain aspect ratio)
Update navigation items to: Logos | Banners | Branding | About Us
Replace search bar with a single red "Get In Touch" button with white text (height and padding adjusted)
Remove "Blog" link from nav
Implement scroll-triggered class: add frosted-glass backdrop-filter effect (blur + dark tint) when scrolled past hero
Add active link indicator: red bottom border on current page link
Update mobile hamburger menu to animate to X and show full-screen overlay with staggered link reveals using GSAP (if GSAP is available) or CSS transitions
Implement smooth scroll anchoring for all nav links (no page reloads, SPA behavior)
3. Hero Section Redesign

Replace hero title and body copy with REVO-LITE messaging:
Eyebrow: "Premium Branding Studio"
Line 1: "Where Brands"
Line 2 (italic, red): "Come to Life"
Description paragraph: "We craft premium logos, web banners, and brand identities for businesses ready to stand out. Built for small businesses. Designed for impact."
Replace buttons: "View Our Work" (red filled) and "About Us" (outlined)
Add REVO-LITE logo watermark behind title text at very low opacity (3%) as background element
Replace stats section values:
150+ Projects Delivered
4 Countries Served
98% Client Satisfaction
3 Core Services (remove and show as 3 items or adjust layout)
Update stat icons to be more minimal/luxury (or use geometric SVG shapes instead of emoji-style images)
Add scroll indicator with animated arrow pointing down and "Scroll" text
4. Add Animated Canvas Particle Background

Create new HTML5 canvas element in hero section covering full viewport height
Implement vanilla JavaScript canvas animation:
200+ particles with red (#e63946) accent color
Connecting lines between particles within proximity threshold
Mouse repulsion effect (particles move away from cursor)
Slow drift movement with Perlin noise or simple sine-based animation
requestAnimationFrame for 60fps smooth performance
Initialize canvas on component mount and handle window resize
5. Add Ticker Strip Between Hero and Featured Work

Create full-width section with red (#e63946) background
Implement CSS @keyframes infinite horizontal scroll-left animation
Text content: "Professional Logo Design ◆ Web Banner Design ◆ Brand Identity Packages ◆ Small Business Branding ◆ Visual Identity Systems ◆ USA · UK · CA · AU ◆" (repeat 3x for seamless loop)
Use DM Sans font, white text, small caps styling
Add --gap CSS variable for animation spacing
6. Refactor Services Section ("What We Do")

Replace title: "Elevate Your Online Presence..." with "What We Do"
Update service cards (keep 3 instead of 6):
Professional Logo Design
Web Banner Design
Brand Identity Packages
Replace background colors: use luxury dark tones (#111 or #0d0d0d) instead of pastel light colors
Add hover effects: lift 8px, red glow border, background subtle shift
Add number badges (01, 02, 03) in top-right corner with Cormorant Garamond ultra-thin font
Implement accordion click-to-expand functionality: "What's Included" list with staggered item reveals
Create SVG icons that animate/draw themselves on hover using stroke-dasharray and stroke-dashoffset CSS
Add cursor-reactive particle burst effect: spawn small red particles at cursor position during mousemove within each card (canvas-based or CSS animated particles)
7. Add Featured Work Sliders Section

Create new section between hero/ticker and services (or after services)

Build two separate carousel sliders with horizontal scroll:

Slider 1 — Logo Designs:

8 square (1:1 aspect ratio) cards: ./logos/logo-1.jpg through ./logos/logo-8.jpg
Auto-scrolls slowly, pauses on hover
Left/right navigation arrows on sides
Card hover effects: red gradient border, 3D tilt on mouse move (CSS perspective and rotateY/rotateX), glassmorphism overlay with "View Project" text
Image onerror fallback: styled dark placeholder card with subtle geometric pattern SVG background
Slider 2 — Banner Designs:

First card: built-in REVO-LITE promotional banner (see section 8)
Remaining 6 cards: ./banners/banner-2.jpg through ./banners/banner-7.jpg (landscape 16:9 ratio)
Same hover effects and navigation as Logo slider
Same image error fallback
Use Swiper.js library (if available in project) or build custom carousel with transform/scroll JavaScript

8. Create Built-in REVO-LITE Promotional Banner (Slider Card 1)

Fully designed HTML/CSS component (not an image)
Background: #080808 with subtle noise texture
Split layout: left text, right animated geometric shapes
Left side:
"REVO-LITE" in Cormorant Garamond ultra-thin italic, large size
"EST. 2024 · REVO-LITE STUDIO" in DM Sans small caps, tiny letter-spaced
Right side:
Animated concentric expanding circles/rings in red (#e63946)
Continuous CSS @keyframes pulsing animation
Bottom left: "USA · UK · Canada · Australia" in muted small text
Landscape 16:9 aspect ratio (or responsive to fit slider container)
Animated red particle drift overlay (simple canvas or CSS)
9. Stats Section Redesign

Update stats data:
150+ Projects Delivered
4 Countries Served
98% Client Satisfaction
3 Core Services
Dark background section
Thin red vertical dividers between stats
Implement count-up animation triggered on scroll-into-view using JavaScript (vanilla counter or GSAP if available)
Use Cormorant Garamond for stat numbers, DM Sans for labels
10. Replace Case Studies with Portfolio Pages

Create three separate portfolio page sections (navigable via nav):

Portfolio Page 1 — Logos:

16 square (1:1) cards: ./logos/logo-1.jpg through ./logos/logo-16.jpg
Masonry staggered CSS grid layout
Portfolio Page 2 — Banners:

16 landscape (16:9) cards: ./banners/banner-1.jpg through ./banners/banner-16.jpg
Staggered landscape grid layout
Portfolio Page 3 — Branding:

16 mixed aspect ratio cards: ./brand-assets/brand-1.jpg through ./brand-assets/brand-16.jpg
Editorial masonry mix layout
All portfolio cards must have:

3D perspective tilt on mouse move (JS)
Animated rotating gradient border on hover (CSS)
Glassmorphism overlay on hover with category tag and "View Full" arrow
Scroll-triggered scale + blur entrance animation
Category badge top-left corner
Subtle noise texture overlay on card background
Image onerror fallback: dark geometric placeholder (never broken icon)
Click to open lightbox: full-screen dark overlay with smooth scale animation, click outside to close
Implement SPA-style page navigation: hide/show sections via CSS and JavaScript (no full page reloads)

11. Testimonials Section Redesign

Update section title: "Trusted by Businesses That Mean Business"
Replace existing testimonials with REVO-LITE client testimonials (4 cards):
Sarah K. — Apparel Brand Owner, USA
James T. — E-commerce Founder, UK
Mia L. — Skincare Brand, Canada
Omar R. — Marketing Agency, Australia
Auto-rotating carousel: 4-second intervals, smooth GSAP fade transitions (or CSS)
Drag/swipe support for manual navigation
Show 5-star ratings on each card
Display navigation dots below carousel
12. Redesign About Us Page

Convert to SPA section (hidden/shown via nav)
Add REVO-LITE logo image at section header
Portfolio disclaimer card:
Animated red border that draws itself via CSS stroke-dashoffset on scroll-trigger
Confidentiality disclaimer text block
"Our Story" editorial copy: "REVO-LITE was built on one belief — that every business, regardless of size, deserves world-class design..."
Built-in About Us banner:
Full-width 420px tall HTML/CSS banner
Dark #0d0d0d background with subtle noise texture overlay
Split layout: left text, right animated motion graphic
Left: "Where Identity Meets Design" in Cormorant Garamond italic + "EST. 2024 · REVO-LITE STUDIO" in DM Sans small caps
Right: animated concentric expanding red circles (CSS @keyframes)
Bottom left: location text
Affiliations section: scroll-triggered staggered entrance, hover lift effect
Contact section:
Instagram icon (placeholder: @revolite)
Email icon (placeholder: hello@revolite.com)
Contact form: Name, Email, Message, Send with dark inputs and red focus glow
13. Footer Section Redesign

Add thin red top border
Logo image: ./RETINA PNG LOGO GOOGLE SIZE.png (height 48px) with tagline below
Three-column layout:
Services: Logo Design | Web Banners | Brand Identity
Company: About Us | Contact
Contact: Instagram @revolite | Email hello@revolite.com
Copyright: "© 2026 REVO-LITE. All rights reserved."
Dark background matching hero section
14. Global Animations and Interactive Effects

Implement custom cursor (if GSAP available):
Small red dot tracking cursor exactly
Larger hollow circle trailing behind with magnetic lag effect
Magnetic snap when hovering buttons/links
Add GSAP page-load timeline: stagger-reveal all hero elements on DOM load
Page transition overlay: dark full-screen fade in/out when nav section links are clicked
Smooth scroll behavior for all page navigation
Parallax on hero title text (0.3x scroll speed) and description (0.5x scroll speed)
Scroll-triggered section reveals with GSAP ScrollTrigger: staggered children animations
Glassmorphic effects: backdrop-filter: blur() on navbar scroll, overlay cards
Floating geometric shape animations in CTA section (rotation, scale pulse, opacity breathing)
15. Responsive Design and Performance

Ensure all sections are mobile-first responsive (breakpoints: 640px, 768px, 1024px, 1280px)
All animations use only transform and opacity for GPU acceleration
Canvas animations use requestAnimationFrame with delta-time for smooth 60fps
Add will-change: transform to animated elements
Lazy load portfolio images with loading="lazy" attribute
Hide custom cursor on touch devices via @media (hover: none)
Optimize Canvas particle count for mobile (reduce to 100-150 particles on small screens)
16. Tooling and Dependencies

Keep existing Vite build process, React, TypeScript, Tailwind CSS setup
Install GSAP for premium animations if not already present (check dependencies)
Consider adding Swiper.js for carousel sliders if custom carousel is too complex
Ensure all image paths use relative paths matching the folder structure: ./logos/, ./banners/, ./brand-assets/
Summary

This plan transforms the existing React/Vite website structure into a complete REVO-LITE premium branding studio website by refactoring each section component, adding new sections (Featured Work Sliders, Portfolio Pages, Built-in Promotional Banners), implementing luxury animations and interactive effects, updating all copy/messaging, and restructuring to support a true SPA with multiple portfolio pages. The design emphasizes dark elegance, Cormorant Garamond serif typography, red accent animations, and sophisticated motion graphics using GSAP. All portfolio images fall back to styled dark placeholders on load failure, never showing broken image icons.

To implement this plan, please exit "Plan" mode by clicking the Plan button to toggle it off, which will switch you to "Build" mode where you can start making the actual code changes.