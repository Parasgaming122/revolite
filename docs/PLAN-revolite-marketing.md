# PLAN: REVO-LITE Marketing Website — Blue Theme, Dark + Light Mode

## Architecture Decision

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Framework** | Vite + React | Static marketing site, no SSR needed. GSAP animations are 100% client-side. Vite = fastest DX. |
| **Language** | JavaScript (JSX) | Matches project scope. No backend types to sync. |
| **Styling** | Vanilla CSS + CSS Custom Properties | Maximum control over theming. No Tailwind dependency. |
| **Animations** | GSAP 3.12 (npm) | Required by spec. ScrollTrigger for scroll effects. |
| **Routing** | SPA (state-based) | Pages shown/hidden via React state. No React Router needed for this scale. |
| **Theme** | CSS custom properties + React Context | `data-theme` attribute on `<html>`, persisted to localStorage |
| **Deployment** | Static build (`vite build`) | Deploy anywhere (Vercel, Netlify, etc.) |

## Color System

### Dark Mode (Arctic Night)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#050A15` | Page background |
| `--bg-surface` | `#0A1628` | Cards, elevated surfaces |
| `--bg-surface-hover` | `#0F1D36` | Card hover states |
| `--text` | `#F0F4FA` | Primary text |
| `--text-secondary` | `#94A3B8` | Muted/secondary text |
| `--accent` | `#2D7CF6` | Primary blue accent |
| `--accent-dark` | `#1D4ED8` | Hover/pressed states |
| `--accent-light` | `#7DD3FC` | Light blue highlights |
| `--accent-glow` | `rgba(45,124,246,0.15)` | Glow effects |
| `--border` | `rgba(45,124,246,0.10)` | Subtle borders |
| `--ticker-bg` | `#1D4ED8` | Ticker strip |

### Light Mode (Clean Blue)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FFFFFF` | Page background |
| `--bg-surface` | `#F1F5F9` | Cards, surfaces |
| `--bg-surface-hover` | `#E2E8F0` | Card hover |
| `--text` | `#0F172A` | Primary text |
| `--text-secondary` | `#475569` | Muted text |
| `--accent` | `#2563EB` | Primary blue |
| `--accent-dark` | `#1D4ED8` | Hover |
| `--accent-light` | `#3B82F6` | Highlights |
| `--accent-glow` | `rgba(37,99,235,0.12)` | Glow effects |
| `--border` | `rgba(15,23,42,0.08)` | Borders |
| `--ticker-bg` | `#2563EB` | Ticker strip |

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, ThemeToggle, PageTransition
│   ├── home/           # Hero, Ticker, FeaturedWork, Services, Stats, Testimonials, CTA
│   ├── about/          # AboutPage, Disclaimer, AboutBanner, Affiliations, ContactForm
│   ├── portfolio/      # PortfolioPage, MasonryGrid, PortfolioCard, Lightbox
│   ├── ui/             # Button, CustomCursor, ScrollIndicator, SliderTrack
│   └── effects/        # ParticleCanvas, RippleRings, FloatingShapes
├── hooks/              # useTheme, useScrollAnimation, useCarousel
├── styles/             # Per-component CSS modules + global theme
├── data/               # Static data (services, testimonials, nav items)
├── context/            # ThemeContext
├── App.jsx
└── main.jsx
public/
├── logos/              # logo-1.jpg ... logo-10.png
├── banners/            # banner-1.jpg ... banner-8.jpg
├── brand-assets/       # brand-1.jpg ... brand-16.jpg
└── images/             # logo placeholder
```

## Implementation Phases

### Phase 1: Foundation (scaffold + theme + layout)
- [x] Scaffold Vite + React
- [ ] Install GSAP
- [ ] Create CSS design system (theme.css)
- [ ] ThemeContext + useTheme hook
- [ ] Navbar + ThemeToggle
- [ ] Footer
- [ ] PageTransition
- [ ] CustomCursor

### Phase 2: Home Page Sections
- [ ] ParticleCanvas (blue particles)
- [ ] Hero section
- [ ] Ticker strip
- [ ] FeaturedWork sliders (Logo + Banner)
- [ ] Services section (3 cards with accordion)
- [ ] Stats counter section
- [ ] Testimonials carousel
- [ ] CTA section

### Phase 3: Portfolio + About Pages
- [ ] PortfolioPage (reusable for Logos/Banners/Branding)
- [ ] MasonryGrid + PortfolioCard
- [ ] Lightbox
- [ ] About page (Disclaimer, Story, Banner, Affiliations, Contact)

### Phase 4: Polish
- [ ] GSAP ScrollTrigger animations
- [ ] Text scramble effect
- [ ] 3D card tilt
- [ ] Image error fallbacks
- [ ] Mobile responsive
- [ ] Performance optimization
