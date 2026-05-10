# REVO-LITE | High-End Branding Studio

REVO-LITE is an elite, professional-grade branding studio website designed for high-end visual identities and retina-quality design services. Built with a focus on premium aesthetics, smooth interactions, and visual-first navigation.

## 🚀 Key Features

- **Retina-Quality Display**: Optimized for high-resolution screens with advanced image handling.
- **Visual Portfolio Hub**: Image-driven industry and subcategory navigation.
- **Professional Lightbox**: Sophisticated fullscreen viewer for high-fidelity assets.
- **Dynamic Routing**: Full browser history support with deep-linking (React Router).
- **Studio-Grade UI**: Built with a custom "Arctic Night Blue" design system.
- **Dual-Mode Experience**: Full Light/Dark mode support with local persistence.
- **Performance Optimized**: Component lazy-loading and asset pre-fetching.

## 🏗 Architecture & File Breakdown

### Core Structure
- `src/App.jsx`: Main orchestrator with routing and lazy-loading logic.
- `src/components/portfolio/`: High-impact gallery and overview systems.
- `src/components/home/`: Individual homepage sections (Hero, Services, Case Studies).
- `src/components/layout/`: Global elements like Navbar and Footer.
- `src/index.css`: Global design tokens and theme variable definitions.

### Asset Management
- `public/revolite/`: The source of truth for all branding masterpieces.
- `generate_manifest.cjs`: Automated script to sync the UI with the file system.
- `src/portfolio_manifest.json`: Auto-generated mapping of all visual assets.

## 🛠 Tech Stack

- **Framework**: React 19 (Vite)
- **Routing**: React Router Dom
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: Vanilla CSS Modules (Theme-Aware)
- **Audit**: Custom Antigravity Kit Master Checklist

## 📦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Sync Assets**:
   If you add new images to the `public/revolite` folder, run:
   ```bash
   node generate_manifest.cjs
   ```

3. **Run Locally**:
   ```bash
   npm run dev
   ```

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Vercel will automatically detect the Vite config and deploy.

### Netlify
1. Connect your GitHub repository.
2. Use `npm run build` as the build command.
3. Set `dist` as the publish directory.

## 📝 Disclaimer

All images displayed across our portfolio are samples. Due to strict client confidentiality agreements, original client assets are not uploaded. These samples demonstrate the high level of quality and creativity provided by the REVO-LITE studio.

---

© 2026 REVO-LITE. All rights reserved.
