import React from 'react';
import styles from './Ticker.module.css';

const Ticker = () => {
  const items = [
    'PREMIUM LOGOS', 'BRAND IDENTITY', 'WEB BANNERS', 'SOCIAL MEDIA DESIGN', 
    'STATIONERY DESIGN', 'UI/UX DESIGN', 'GRAPHIC DESIGN', 'MARKETING ASSETS'
  ];

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.dot}></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
