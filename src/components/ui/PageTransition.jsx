import React, { useEffect, useState } from 'react';
import styles from './PageTransition.module.css';

const PageTransition = ({ isActive }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
    } else {
      // Small delay before unmounting to let the exit animation finish
      const timer = setTimeout(() => setShouldRender(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!shouldRender && !isActive) return null;

  return (
    <div className={styles.container}>
      <div className={`${styles.panel} ${styles.panel1} ${isActive ? styles.active : styles.exit}`}></div>
      <div className={`${styles.panel} ${styles.panel2} ${isActive ? styles.active : styles.exit}`}></div>
      <div className={`${styles.panel} ${styles.panel3} ${isActive ? styles.active : styles.exit}`}>
        <div className={styles.content}>
          <div className={styles.logo}>REVO-LITE</div>
          <div className={styles.loader}></div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
