import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>High-End Branding Studio</span>
          <h1 className={styles.title}>
            Crafting <br />
            Identities That <br />
            <span className={styles.highlight}>Convert</span>
          </h1>
          <p className={styles.description}>
            We design logos, banners, and brand systems for growing retail businesses — built to look premium without the premium agency price tag.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn} onClick={() => navigate('/portfolio')}>
              Explore Portfolio
            </button>
            <button className={styles.secondaryBtn} onClick={() => navigate('/contact')}>
              <div className={styles.playIcon}>✦</div>
              Contact Us
            </button>
          </div>
        </div>

        <div className={styles.visualGrid}>
          <div className={`${styles.card} ${styles.card1}`}>
            <img 
              src="/revolite/Home Decor/Banner/23f91f177810003.64ddb6ef35f66.png" 
              alt="Elite Home Decor Branding" 
              className={styles.cardImg}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <img 
              src="/revolite/Apparel & Clothing/Social Media Posts/6be67d238033331.690c810ba9320.jpg" 
              alt="Premium Apparel Social Media" 
              className={styles.cardImg}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
