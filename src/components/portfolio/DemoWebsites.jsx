import React, { useState } from 'react';
import manifest from '../../portfolio_manifest.json';
import styles from './DemoWebsites.module.css';

const DemoWebsites = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const demoWebsites = manifest['Demo Website'] || [];
  
  const websiteNames = {
    'allbirds.jpg': 'Allbirds',
    'babocush.jpg': 'Babocush',
    'mnml.jpg': 'MNML',
    'oishii.jpg': 'Oishii',
    'sokoglam.jpg': 'Soko Glam',
    'supernaturalkitchen.jpg': 'Supernatural Kitchen',
    'westbourne.jpg': 'Westbourne'
  };

  const handleClose = () => setSelectedImage(null);

  if (demoWebsites.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No demo websites found</h2>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>Portfolio / Demo Websites</div>
          <h1 className={styles.title}>Demo Websites</h1>
          <p className={styles.description}>
            Explore our collection of website design showcases and demonstrations.
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.grid}>
          {demoWebsites.map((img, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => setSelectedImage(`/revolite/Demo Website/${img}`)}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={`/revolite/Demo Website/${img}`} 
                  alt={websiteNames[img] || img}
                  loading="lazy"
                />
              </div>
              <div className={styles.overlay}>
                <span>{websiteNames[img] || img.replace('.jpg', '').replace('.png', '')}</span>
                <span className={styles.viewFull}>View Full Size ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={handleClose}>
          <div className={styles.lightboxBackdrop}></div>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.imageWrapper}>
              <img src={selectedImage} alt="Fullscreen View" className={styles.fullImage} />
            </div>
            <button className={styles.close} onClick={handleClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className={styles.imageMeta}>
              <span>Demo Websites — REVO-LITE Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoWebsites;
