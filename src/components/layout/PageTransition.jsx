import React from 'react';
import styles from './PageTransition.module.css';

const PageTransition = ({ isActive }) => {
  return (
    <div className={`${styles.overlay} ${isActive ? styles.active : ''}`}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PageTransition;
