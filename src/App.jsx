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
const DemoWebsites = lazy(() => import('./components/portfolio/DemoWebsites'));
const AboutPage = lazy(() => import('./components/about/AboutPage'));

// Scroll to top and trigger transition on route change
const RouteManager = ({ setIsTransitioning }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Trigger the staggered blue transition
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // 800ms matches the 35% faster cinematic slide

    return () => clearTimeout(timer);
  }, [location.pathname, setIsTransitioning]);
  
  return null;
};

// Loading fallback component
const Loader = () => (
  <div style={{ 
    height: '100vh', 
    width: '100vw',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#1E3A8A', // Deep blue base
    color: 'white',
    fontFamily: 'var(--font-heading)',
    fontSize: '32px',
    fontWeight: '900',
    letterSpacing: '0.3em',
    zIndex: 20000,
    position: 'fixed',
    top: 0,
    left: 0
  }}>
    REVO-LITE
  </div>
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <FeaturedWork />
      <Services />
      <Benefits />
      <FeaturedProjects />
      <ModernTestimonials />
      <CTA />
    </>
  );
};

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <RouteManager setIsTransitioning={setIsTransitioning} />
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
              <Route path="/demo-websites" element={<DemoWebsites />} />
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
