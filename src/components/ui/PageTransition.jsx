import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './PageTransition.module.css';

const PageTransition = ({ isActive }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.to(overlayRef.current, {
        x: '0%',
        duration: 0.6,
        ease: 'power4.inOut'
      });
    } else {
      gsap.to(overlayRef.current, {
        x: '100%',
        duration: 0.6,
        ease: 'power4.inOut',
        delay: 0.1
      });
    }
  }, [isActive]);

  return (
    <div className={styles.transitionContainer}>
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
