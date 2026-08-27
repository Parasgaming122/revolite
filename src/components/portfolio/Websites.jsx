import React, { useState } from 'react';
import manifest from '../../portfolio_manifest.json';
import styles from './Websites.module.css';

const Websites = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const websites = manifest['Demo Website'] || [];
  
  const websiteNames = {
    'allbirds.jpg': 'Allbirds',
    'babocush.jpg': 'Babocush',
    'mnml.jpg': 'MNML',
    'oishii.jpg': 'Oishii',
    'sokoglam.jpg': 'Soko Glam',
    'supernaturalkitchen.jpg': 'Supernatural Kitchen',
    'westbourne.jpg': 'Westbourne'
  };

  const websiteUrls = {
    'allbirds.jpg': 'https://www.allbirds.com/',
    'babocush.jpg': 'https://www.babocush.com/',
    'mnml.jpg': 'https://mnml.la/',
    'oishii.jpg': 'https://oishii.com/',
    'sokoglam.jpg': 'https://sokoglam.com/',
    'supernaturalkitchen.jpg': 'https://www.supernaturalkitchen.com/contact-us',
    'westbourne.jpg': 'https://westbourne.com/'
  };

  const handleClose = () => setSelectedImage(null);

  if (websites.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No websites found</h2>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>Portfolio / Websites</div>
          <h1 className={styles.title}>Websites</h1>
          <p className={styles.description}>
            Explore our collection of website design showcases and demonstrations.
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.grid}>
          {websites.map((img, index) => {
            const url = websiteUrls[img];
            return (
              <a 
                key={index} 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
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
                  <span className={styles.viewFull}>Visit Website ↗</span>
                </div>
              </a>
            );
          })}
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
              <span>Websites — REVO-LITE Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Websites;
