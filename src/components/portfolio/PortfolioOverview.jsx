import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PortfolioOverview.module.css';

const PortfolioOverview = () => {
  const navigate = useNavigate();
  // Navigation State (local UI state only)
  const [view, setView] = useState('industries'); // 'industries' | 'subcategories'
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const portfolioStructure = {
    'Apparel & Clothing': {
      subs: ['Brand Logo', 'Hand Tags', 'Social Media Posts', 'Website Banner'],
      img: '/revolite/Apparel & Clothing/Brand Logo/08a601243667647.6986107b3152b.jpg'
    },
    'Food & Drink': {
      subs: ['Logos', 'Banners', 'Branding Assets'],
      img: '/revolite/Food & Drink/Branding Assets/042811209829107.67066d704f556.webp'
    },
    'Gift Shops': {
      subs: ['Logo', 'Packaging & Tags'],
      img: '/revolite/Gift Shops/Logo/logo-1.jpg'
    },
    'Home Decor': {
      subs: ['Logo', 'Banner'],
      img: '/revolite/Home Decor/Logo/d165f0247821583.69e3846b5640c.jpg'
    },
    'Jewelry Bussinesses': {
      subs: ['Brand Logo', 'Banners', 'Product Demonstration Posts'],
      img: '/revolite/Jewelry Bussinesses/Banners/304a86247041693.69d25c37500b8.jpg'
    },
    'Marketing Agencies': {
      subs: ['Logo', 'Banner'],
      img: '/revolite/Marketing Agencies/Banner/19b5be241433401.69580008dae1c.png'
    },
    'Skincare Shops': {
      subs: ['Logo', 'Packaging & Design', 'Social Media Post', 'Website Banner'],
      img: '/revolite/Skincare Shops/Logo/21469e195662517.6613914008dd5.png'
    },
    'Generic Assets': {
      subs: ['logos', 'banners', 'brand-assets'],
      img: '/revolite/banners/banner-2.jpg'
    }
  };

  const subcategoryImages = {
    'Brand Logo': '/revolite/Apparel & Clothing/Brand Logo/08a601243667647.6986107b3152b.jpg',
    'Hand Tags': '/revolite/Apparel & Clothing/Hand Tags/021e1a218839439.67a8421a7888c.jpg',
    'Logos': '/revolite/Food & Drink/Logos/logo-1.jpg',
    'Branding Assets': '/revolite/Food & Drink/Branding Assets/042811209829107.67066d704f556.webp',
    'Logo': '/revolite/Skincare Shops/Logo/21469e195662517.6613914008dd5.png',
    'Banners': '/revolite/Jewelry Bussinesses/Banners/304a86247041693.69d25c37500b8.jpg',
    'Banner': '/revolite/Home Decor/Logo/d165f0247821583.69e3846b5640c.jpg',
    'logos': '/revolite/logos/logo-1.jpg',
    'banners': '/revolite/banners/banner-1.jpg',
    'brand-assets': '/revolite/brand-assets/brand-1.jpg'
  };

  const industries = Object.keys(portfolioStructure);

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
    setView('subcategories');
  };

  const handleSubcategoryClick = (sub) => {
    if (selectedIndustry === 'Generic Assets') {
      navigate(`/portfolio/${sub}`);
    } else {
      navigate(`/portfolio/${selectedIndustry}/${sub}`);
    }
  };

  if (view === 'subcategories') {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <button className={styles.backBtn} onClick={() => setView('industries')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="20">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Hub
          </button>
          <div className={styles.header}>
            <h1 className={styles.title}>{selectedIndustry}</h1>
            <p className={styles.description}>Select a specialized category to view the work.</p>
          </div>
          
          <div className={styles.grid}>
            {portfolioStructure[selectedIndustry].subs.map((sub) => (
              <div key={sub} className={styles.subCard} onClick={() => handleSubcategoryClick(sub)}>
                <div className={styles.subImage}>
                  <img 
                    src={subcategoryImages[sub] || portfolioStructure[selectedIndustry].img} 
                    alt={sub} 
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onError={(e) => { e.target.src = '/revolite/logos/logo-1.jpg'; }}
                  />
                </div>
                <div className={styles.subContent}>
                  <h3>{sub}</h3>
                  <span className={styles.arrow}>Explore ↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>The <span className={styles.accent}>Portfolio Hub</span></h1>
          <p className={styles.description}>
            Browse our complete visual archive by industry and specialization.
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.industryGrid}>
          {industries.map((ind) => (
            <div key={ind} className={styles.industryCard} onClick={() => handleIndustryClick(ind)}>
              <div className={styles.cardImage}>
                <img 
                  src={portfolioStructure[ind].img} 
                  alt={ind} 
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                  onError={(e) => { e.target.src = '/revolite/logos/logo-1.jpg'; }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{ind}</h3>
                <span className={styles.count}>{portfolioStructure[ind].subs.length} Categories</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
