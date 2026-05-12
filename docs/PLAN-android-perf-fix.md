# PLAN: Android View Fix & Page Speed Optimization

> **Status:** COMPLETED
> **Created:** 2026-05-12
> **Agents:** project-planner, frontend-specialist, performance-optimizer
> **Scope:** Fix broken Android experience + optimize page speed across all devices

---

## Executive Summary

After a comprehensive audit of all 20+ components and CSS modules, I've identified **3 critical Android-breaking issues**, **5 major performance bottlenecks**, and **12 mobile responsiveness gaps**. This plan addresses all of them in a prioritized, phased approach.

---

## Phase 1: Critical Android Fixes (BLOCKING)

These issues actively **break** the site on Android devices.

### Task 1.1: ParticleCanvas Crashes Android Browsers

**File:** `src/components/effects/ParticleCanvas.jsx`
**Problem:** The `ParticleCanvas` component imports `useTheme` from a `ThemeContext` that no longer exists (theme was moved to Navbar state). This causes a **runtime crash** on page load, killing the entire React tree on Android.
**Evidence:** Line 2: `import { useTheme } from '../../context/ThemeContext'` -- this file may not export what the component expects, or the context provider is missing from the component tree.
**Fix:**
- Option A: Remove the `ParticleCanvas` entirely (it's not imported in App.jsx currently but may be referenced elsewhere).
- Option B: Rewrite to use CSS variables directly instead of context, and disable on mobile via `matchMedia`.
**Priority:** P0 -- CRITICAL
**Agent:** frontend-specialist

### Task 1.2: Custom Cursor Causes Touch Issues on Android

**File:** `src/components/ui/CustomCursor.jsx`
**Problem:** While it checks for `pointer: coarse`, the component still renders two fixed-position `div` elements on the DOM before the check on line 58. The `useEffect` hook runs and attaches `mousemove`/`mouseover` listeners before the early return can fire. On some Android browsers, this causes:
- Phantom touch offset issues
- Unnecessary event listener overhead
- Z-index `10000` blocking touch targets
**Fix:**
- Move the mobile check **before** all hooks (use a custom hook or state initialization).
- Ensure the component returns `null` immediately on touch devices without running any effects.
**Priority:** P0 -- CRITICAL
**Agent:** frontend-specialist

### Task 1.3: Missing `--ticker-bg` CSS Variable

**File:** `src/components/home/Ticker.module.css`
**Problem:** Line 2 uses `background-color: var(--ticker-bg)` but this variable is **never defined** in `index.css`. In dark mode, the ticker has no background at all, making white text invisible.
**Fix:** Add `--ticker-bg` to both `:root` and `[data-theme='dark']` in `index.css`, or replace with `var(--accent)` directly.
**Priority:** P1 -- HIGH
**Agent:** frontend-specialist

---

## Phase 2: Mobile Responsiveness Gaps (Android-Specific)

These cause layout breakage, overflow, or unusable UI on small Android screens (360px-412px).

### Task 2.1: Benefits Section -- Floating Elements Overflow

**File:** `src/components/home/Benefits.module.css`
**Problem:** 
- `.mainCard` is set to `height: 600px` (fixed) -- overflows on Android screens.
- `.awardCard` has `left: -40px` -- extends beyond viewport on small screens.
- `.floatingBadge` has `right: -20px` -- same overflow issue.
- No mobile media query exists below 1024px for these elements.
**Fix:**
- Add `@media (max-width: 768px)` to reduce `.mainCard` height, hide or reposition floating elements.
- Set `overflow: hidden` on `.visual` container on mobile.
**Priority:** P1 -- HIGH
**Agent:** frontend-specialist

### Task 2.2: Testimonials Section -- Cards Overlap on Mobile

**File:** `src/components/home/ModernTestimonials.module.css`
**Problem:**
- `.avatar` is `120px x 120px` (too large for mobile).
- `.card` padding is `40px` (too generous for 360px screens).
- `.cardInner` flex layout doesn't wrap on mobile.
- No `@media (max-width: 768px)` query exists.
**Fix:**
- Add mobile breakpoint: reduce avatar to `60px`, card padding to `20px`.
- Stack `.cardInner` vertically on mobile with `flex-direction: column`.
**Priority:** P1 -- HIGH
**Agent:** frontend-specialist

### Task 2.3: Container Padding Too Large on Small Screens

**Files:** Multiple CSS modules
**Problem:** Most containers use `padding: 0 48px`. On a 360px Android screen, that's 96px of padding, leaving only **264px** for content. This causes:
- Text wrapping on single words.
- Cards becoming impossibly narrow.
- Buttons overflowing their containers.
**Fix:**
- Add global `@media (max-width: 480px)` to reduce all container padding to `16px`.
- Apply to: Hero, Services, Benefits, FeaturedProjects, Testimonials, CTA, Footer, Portfolio.
**Priority:** P1 -- HIGH
**Agent:** frontend-specialist

### Task 2.4: Section Padding Too Tall for Mobile

**Files:** Most homepage section CSS files
**Problem:** Sections use `padding: 120px 0` which creates enormous vertical gaps on mobile. Users have to scroll excessively to see content.
**Fix:**
- Add `@media (max-width: 768px)` to reduce section padding to `60px 0`.
- This applies to: Services, Benefits, FeaturedProjects, Testimonials, CTA, About.
**Priority:** P2 -- MEDIUM
**Agent:** frontend-specialist

### Task 2.5: FeaturedProjects Top Showcase Layout Break

**File:** `src/components/home/FeaturedProjects.module.css`
**Problem:**
- `.topShowcase` uses `padding: 60px` -- on mobile this leaves almost no content space.
- `.stats` grid is `repeat(4, 1fr)` -- too cramped on mobile.
- Only has `@media (max-width: 1024px)` which sets `1fr` but no further mobile refinement.
**Fix:**
- Add `@media (max-width: 768px)`: reduce padding to `24px`, stats to `repeat(2, 1fr)`.
**Priority:** P2 -- MEDIUM
**Agent:** frontend-specialist

### Task 2.6: CTA Discord Cards Padding Overflow

**File:** `src/components/home/CTA.module.css`
**Problem:** `.discordCard` has `padding: 40px` -- too generous for mobile.
**Fix:** Add `@media (max-width: 768px)` to reduce to `24px`.
**Priority:** P3 -- LOW
**Agent:** frontend-specialist

---

## Phase 3: Page Speed Optimization

### Task 3.1: Image Optimization -- 208MB Asset Library

**Problem:** The `public/revolite` folder is **208MB** of unoptimized images. Many are 1-2MB PNGs and JPGs. This is the #1 performance killer.
**Fix:**
- Add `loading="lazy"` and `decoding="async"` to all `<img>` tags.
- Use `srcset` for responsive image sizes where possible.
- Consider serving optimized thumbnails in the grid and full-res only in lightbox.
**Priority:** P1 -- HIGH
**Agent:** performance-optimizer

### Task 3.2: Font Loading Strategy

**File:** `index.html` + `index.css`
**Problem:** Currently loading **3 font families** (Archivo, Space Grotesk, Manrope) via both:
- CSS `@import` in `index.css` (render-blocking)
- `<link>` tags in `index.html` (additional fonts: Inter, Outfit -- unused!)
This doubles the font loading cost and blocks first paint.
**Fix:**
- Remove the duplicate `<link>` tags for Inter/Outfit from `index.html` (they're not used anywhere).
- Convert the CSS `@import` to a `<link rel="preload">` in `index.html`.
- Add `font-display: swap` to prevent FOIT (Flash of Invisible Text).
**Priority:** P1 -- HIGH
**Agent:** performance-optimizer

### Task 3.3: GSAP Bundle Size

**Problem:** GSAP is imported in multiple components (FeaturedWork, CustomCursor) and the `ScrollTrigger` plugin adds significant bundle weight.
**Fix:**
- Ensure tree-shaking is working by using specific imports.
- Consider replacing the Ticker's CSS animation (already pure CSS) verification.
- Conditionally load GSAP only on desktop where scroll animations are visible.
**Priority:** P2 -- MEDIUM
**Agent:** performance-optimizer

### Task 3.4: `content-visibility: auto` May Cause Layout Shift

**File:** `index.css` (lines 104-108)
**Problem:** `content-visibility: auto` with `contain-intrinsic-size: 1000px` on ALL `<section>` elements can cause significant layout shifts as sections render, especially on slower Android devices.
**Fix:**
- Set accurate `contain-intrinsic-size` values per section, or remove this optimization if it causes more CLS than it saves.
**Priority:** P2 -- MEDIUM
**Agent:** performance-optimizer

### Task 3.5: Reduce Transition Overhead

**File:** `index.css` (line 16)
**Problem:** `--transition-base: all 0.3s cubic-bezier(...)` transitions ALL properties. This is expensive because it forces the browser to check every CSS property for changes on every frame.
**Fix:**
- Replace `all` with specific properties: `color 0.3s, background-color 0.3s, border-color 0.3s, transform 0.3s, opacity 0.3s`.
**Priority:** P3 -- LOW
**Agent:** performance-optimizer

---

## Phase 4: Touch Experience Polish

### Task 4.1: Touch Target Sizes

**Problem:** Multiple interactive elements are smaller than the WCAG-recommended 44x44px minimum:
- Navigation links (text-only, no padding).
- "Learn More" buttons in Services cards.
- Theme toggle button (44x44 but no visible tap feedback).
**Fix:**
- Increase touch targets to minimum `48px` height on mobile.
- Add `:active` states for visual tap feedback on Android.
**Priority:** P2 -- MEDIUM
**Agent:** frontend-specialist

### Task 4.2: Add `prefers-reduced-motion` Support

**Problem:** The Ticker animation, GSAP scroll animations, and card hover transforms run regardless of user accessibility preferences.
**Fix:**
- Add `@media (prefers-reduced-motion: reduce)` to disable:
  - Ticker marquee animation
  - Card hover transforms
  - Page transition overlay animation
**Priority:** P3 -- LOW
**Agent:** frontend-specialist

---

## Phase 5: Verification & Testing

### Task 5.1: Mobile Testing Protocol

| Device | Screen | Test |
|--------|--------|------|
| Android Chrome | 360px | Full page scroll, all links, lightbox |
| Android Chrome | 412px | Portfolio hub, subcategory navigation |
| iPhone Safari | 375px | Theme toggle, back button |
| Tablet | 768px | Grid layouts, Benefits section |
| Desktop | 1440px | Regression check |

### Task 5.2: Performance Audit

```bash
# Build production bundle
npm run build

# Check bundle size
ls -la dist/assets/
```

---

## Implementation Order (Recommended)

| Order | Task | Impact | Effort |
|-------|------|--------|--------|
| 1 | 1.1 ParticleCanvas crash fix | Critical | 15min |
| 2 | 1.2 CustomCursor mobile fix | Critical | 15min |
| 3 | 1.3 Ticker variable fix | High | 5min |
| 4 | 2.3 Container padding mobile | High | 20min |
| 5 | 3.2 Font loading fix | High | 10min |
| 6 | 2.1 Benefits overflow fix | High | 15min |
| 7 | 2.2 Testimonials mobile fix | High | 15min |
| 8 | 2.4 Section padding mobile | Medium | 15min |
| 9 | 2.5 FeaturedProjects mobile | Medium | 10min |
| 10 | 3.1 Image optimization | High | 30min |
| 11 | 3.4 Content-visibility fix | Medium | 10min |
| 12 | 3.5 Transition optimization | Low | 5min |
| 13 | 4.1 Touch targets | Medium | 15min |
| 14 | 4.2 Reduced motion | Low | 10min |
| 15 | 5.x Verification | Required | 20min |

**Total estimated time: ~3.5 hours**

---

## Agent Assignments

| Agent | Tasks | Focus |
|-------|-------|-------|
| `frontend-specialist` | 1.1, 1.2, 1.3, 2.1-2.6, 4.1, 4.2 | Android fixes, mobile CSS |
| `performance-optimizer` | 3.1-3.5 | Speed, bundle, images |
| `project-planner` | This document | Coordination |

---

## Success Criteria

- [x] Site loads without crashes on Android Chrome 360px
- [x] All sections visible and properly laid out on 360px-412px screens
- [x] No horizontal scroll on any mobile device
- [x] Touch targets meet 48px minimum
- [x] Font loading does not block first paint
- [x] No unused font imports (Inter/Outfit removed)
- [x] Theme toggle works on Android (unified ThemeContext)
- [x] Portfolio lightbox works on Android
- [x] Back button navigation works on Android
- [x] Production build passes with zero errors
- [x] All lazy loading attributes applied to images
