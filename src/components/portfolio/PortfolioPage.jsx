import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import manifest from '../../portfolio_manifest.json';
import styles from './PortfolioPage.module.css';

const PortfolioPage = () => {
  const { industry, subcategory } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  // Determine manifest path from URL params
  // If industry exists, path is "industry/subcategory"
  // If only subcategory exists (Generic Assets), path is just "subcategory"
  const manifestPath = industry ? `${industry}/${subcategory}` : subcategory;

  useEffect(() => {
    const folderImages = manifest[manifestPath] || [];
    setImages(folderImages);
  }, [manifestPath]);

  const handleClose = () => setSelectedImage(null);

  if (images.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No items found in {subcategory || industry}</h2>
        <p>Category: {industry || 'Generic Assets'} / {subcategory || ''}</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>Portfolio / {industry || 'Generic'}</div>
          <h1 className={styles.title}>{subcategory || industry}</h1>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => setSelectedImage(`/revolite/${manifestPath}/${img}`)}
            >
              <img 
                src={`/revolite/${manifestPath}/${img}`} 
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
              <span>{subcategory} — REVO-LITE Retina Quality</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
