import React, { useState } from 'react';
import manifest from '../../portfolio_manifest.json';
import styles from './PortfolioPage.module.css';

const DemoWebsites = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = manifest['Demo Website'] || [];

  const handleClose = () => setSelectedImage(null);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>Portfolio / Demo Websites</div>
          <h1 className={styles.title}>Demo Websites</h1>
          <p className={styles.description} style={{ color: '#888', marginTop: '10px' }}>
            Explore our collection of demo website designs and mockups.
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => setSelectedImage(`/revolite/Demo Website/${img}`)}
            >
              <img 
                src={`/revolite/Demo Website/${img}`} 
                alt={img}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span>View Full Size</span>
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
              <span>Demo Websites — REVO-LITE Retina Quality</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoWebsites;
