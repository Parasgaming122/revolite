import React from 'react';
import styles from './FeaturedWork.module.css';

const FeaturedWork = () => {
  const logos = [
    '/revolite/logos/logo-1.jpg',
    '/revolite/logos/logo-2.jpg',
    '/revolite/logos/logo-3.jpg',
    '/revolite/logos/logo-4.jpg',
    '/revolite/logos/logo-5.jpg',
    '/revolite/logos/logo-6.jpg',
  ];
  
  const branding = [
    '/revolite/brand-assets/brand-1.jpg',
    '/revolite/brand-assets/brand-2.jpg',
    '/revolite/brand-assets/brand-3.jpg',
    '/revolite/brand-assets/brand-4.jpg',
    '/revolite/brand-assets/brand-5.jpg',
    '/revolite/brand-assets/brand-6.jpg',
  ];

  const renderCard = (src, type, index) => (
    <div className={`${styles.card} ${styles[type]}`} key={`${src}-${index}`}>
      <img 
        src={src} 
        alt="Featured Work" 
        loading="lazy"
        decoding="async"
      />
      <div className={styles.overlay}>
        <div className={styles.category}>{type}</div>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Studio Selection</div>
        <h2 className={styles.title}>Featured <span className={styles.accent}>Work</span></h2>
        <p className={styles.subtitle}>A curated stream of our most recent branding masterpieces.</p>
      </div>

      <div className={styles.sliderContainer}>
        {/* Track 1: Left to Right Loop */}
        <div className={styles.trackWrapper}>
          <div className={`${styles.track} ${styles.trackLeft}`}>
            {logos.concat(logos, logos).map((src, i) => renderCard(src, 'logo', i))}
          </div>
        </div>

        {/* Track 2: Right to Left Loop */}
        <div className={styles.trackWrapper}>
          <div className={`${styles.track} ${styles.trackRight}`}>
            {branding.concat(branding, branding).map((src, i) => renderCard(src, 'branding', i))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
