# PLAN: REVO-LITE V2 Polish & Overhaul

## 🎯 Objectives
Finalize the REVO-LITE SPA with a focus on "Elite Standard" aesthetics, removing all non-professional elements (emojis), and optimizing the user flow for both desktop and mobile.

---

## 🛠 Phase 1: Global Aesthetic & UI Cleanup
- [ ] **Emoji Purge**: Scan all components (`Benefits`, `ModernTestimonials`, `Hero`) and replace emojis with professional SVG icons or themed symbols.
- [ ] **Logo Enlargement**: Increase logo size in the `Navbar` to the next level of prominence (targeting ~80px height).
- [ ] **Header Navigation**: Remove "Skincare" and "Apparel" from the top-level `Navbar` as they are now nested within the Portfolio Hub.
- [ ] **Space Audit**: 
    - Reduce `padding-top` in `Hero.module.css`.
    - Tighten margins between the `FeaturedWork` scrolling track and adjacent sections.

---

## 🏗 Phase 2: Feature & Content Optimization
- [ ] **Upward Graph**: Update the SVG path in `FeaturedProjects.jsx` to show a clear, sharp upward growth trend (Success Metric visualization).
- [ ] **Home Slider (FeaturedWork)**:
    - Improve looping logic to eliminate gaps.
    - Add subtle "tilt" or "hover-stop" behavior for better interactivity.
- [ ] **Get in Touch (Contact)**:
    - Replace the About/Contact placeholder with a dedicated "Get in Touch" section.
    - Implement the 3 Discord IDs (`alexajones24`, `emilysmith18`, `valerieatelier`) with "Click to Copy" or direct link functionality.

---

## 📱 Phase 3: UX & Performance (Mobile Focus)
- [ ] **App Movement**: Smooth out GSAP transitions between pages.
- [ ] **Mobile UX**:
    - Optimize the `PortfolioGrid` for 1-column layouts on small screens.
    - Ensure the mobile menu has clear focus states and zero-latency triggers.
    - Fix any "long spaces" caused by height calculations on mobile viewports.

---

## 📁 Phase 4: Portfolio Integrity
- [ ] **Featured Images**: Update the `featuredWork` array in `PortfolioOverview.jsx` to use the most high-impact banners (`banner-1`, `banner-2`) with correct aspect ratios.
- [ ] **Missing Images**: Final sweep of all categories to ensure every card has a valid fallback or hide logic.

---

## ✅ Verification Checklist
- [ ] Run `npm run dev` and verify emoji-free UI.
- [ ] Test mobile menu on 375px/414px breakpoints.
- [ ] Verify "Upward Graph" visual logic.
- [ ] Test all 3 Discord links.
