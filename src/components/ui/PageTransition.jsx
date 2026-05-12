import React, { useEffect, useRef } from 'react';
import styles from './PageTransition.module.css';

const PageTransition = ({ isActive }) => {
  const overlayRef = useRef(null);

  // We use a CSS-driven opacity + scale transition for a more "premium" feel
  // and to avoid the "blue flash" associated with the sliding panel.
  
  return (
    <div className={`${styles.transitionContainer} ${isActive ? styles.active : ''}`}>
      <div className={styles.overlay} ref={overlayRef}>
        <div className={styles.content}>
          <div className={styles.logo}>REVO-LITE</div>
          <div className={styles.loader}>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
