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
      img: '/revolite/Gift Shops/Logo/03c9c0232711565.68da37e77ff84.png'
    },
    'Home Decor': {
      subs: ['Logo', 'Banner'],
      img: '/revolite/Home Decor/Logo/07b2b1232357981.689af13b9841f.jpg'
    },
    'Jewelry Bussinesses': {
      subs: ['Brand Logo', 'Banners', 'Product Demonstration Posts'],
      img: '/revolite/Jewelry Bussinesses/Brand Logo/0762b4208659471.66f299344b8f8.jpg'
    },
    'Marketing Agencies': {
      subs: ['Logo', 'Banner'],
      img: '/revolite/Marketing Agencies/Logo/176a64248607937.69f5197278628.jpg'
    },
    'Skincare Shops': {
      subs: ['Logo', 'Packaging & Design', 'Social Media Post', 'Website Banner'],
      img: '/revolite/Skincare Shops/Logo/1eea15248522079.69f32767e9bbf.png'
    },
    'Generic Assets': {
      subs: ['logos', 'banners', 'brand-assets'],
      img: '/revolite/logos/logo-1.jpg'
    }
  };

  const subcategoryImages = {
    'Brand Logo': '/revolite/Apparel & Clothing/Brand Logo/08a601243667647.6986107b3152b.jpg',
    'Hand Tags': '/revolite/Apparel & Clothing/Hand Tags/56b873152063955.6317650b8cbcf.jpg',
    'Social Media Posts': '/revolite/Apparel & Clothing/Social Media Posts/5dc863247031677.69d212c279d7a.jpeg',
    'Website Banner': '/revolite/Apparel & Clothing/Website Banner/07f687243600111.6984b4f31512c.jpg',
    'Logos': '/revolite/Food & Drink/Logos/0bc884222079259.67dfdd7551732.jpg',
    'Branding Assets': '/revolite/Food & Drink/Branding Assets/042811209829107.67066d704f556.webp',
    'Logo': '/revolite/Skincare Shops/Logo/1eea15248522079.69f32767e9bbf.png',
    'Banners': '/revolite/Jewelry Bussinesses/Banners/1469f5190735525.65bff8fa8aea2.jpg',
    'Banner': '/revolite/Home Decor/Banner/23f91f177810003.64ddb6ef35f66.png',
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
