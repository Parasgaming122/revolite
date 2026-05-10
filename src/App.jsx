import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import PageTransition from './components/ui/PageTransition';

// Lazy load non-critical pages for performance
const Hero = lazy(() => import('./components/home/Hero'));
const Ticker = lazy(() => import('./components/home/Ticker'));
const FeaturedWork = lazy(() => import('./components/home/FeaturedWork'));
const Services = lazy(() => import('./components/home/Services'));
const Benefits = lazy(() => import('./components/home/Benefits'));
const FeaturedProjects = lazy(() => import('./components/home/FeaturedProjects'));
const ModernTestimonials = lazy(() => import('./components/home/ModernTestimonials'));
const CTA = lazy(() => import('./components/home/CTA'));
const PortfolioPage = lazy(() => import('./components/portfolio/PortfolioPage'));
const PortfolioOverview = lazy(() => import('./components/portfolio/PortfolioOverview'));
const AboutPage = lazy(() => import('./components/about/AboutPage'));

// Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading fallback component
const Loader = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'var(--bg)', 
    color: 'var(--accent)',
    fontFamily: 'var(--font-heading)',
    fontSize: '24px',
    fontWeight: '800'
  }}>
    REVO-LITE
  </div>
);

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <Ticker />
      <FeaturedWork />
      <Services />
      <Benefits />
      <FeaturedProjects />
      <ModernTestimonials />
      <CTA />
    </Suspense>
  );
};

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
    };
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <CustomCursor />
        <PageTransition isActive={isTransitioning} />
        <Navbar />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioOverview />} />
              <Route path="/portfolio/:industry/:subcategory" element={<PortfolioPage />} />
              <Route path="/portfolio/:subcategory" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
