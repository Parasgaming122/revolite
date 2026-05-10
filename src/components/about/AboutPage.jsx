import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>Our Philosophy</div>
          <h1 className={styles.title}>The <span className={styles.accent}>Retina Quality</span> Standard</h1>
          <p className={styles.description}>
            REVO-LITE is an elite branding studio dedicated to crafting visual identities that don't just exist—they dominate.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Precision in Every Pixel</h2>
              <p>
                In an era of digital saturation, average isn't enough. We believe every brand deserves a "Retina Quality" presence—identities that remain sharp, professional, and impactful across every possible resolution and touchpoint.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statNum}>100%</div>
                  <div className={styles.statLabel}>Custom Design</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>8K+</div>
                  <div className={styles.statLabel}>Pixel Perfect</div>
                </div>
              </div>
            </div>
            <div className={styles.visual}>
              <img 
                src="/revolite/brand-assets/brand-1.jpg" 
                alt="Studio Precision" 
                loading="lazy"
                decoding="async"
                width="888"
                height="560"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.storyBody}>
              <p>
                From our early days designing emotes and stream packs, we've grown into a full-service creative studio covering everything from character artwork to professional video editing. Our team combines technical skill with artistic vision to deliver work that doesn't just look good — it performs.
              </p>
              <p className={styles.plainText}>
                Disclaimer: All images displayed across our portfolio are samples. Due to strict client confidentiality agreements, we cannot upload original client assets. These samples serve to demonstrate the high level of quality, style, and creativity we bring to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2 className={styles.centeredTitle}>The Studio Process</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <h3>Discovery</h3>
              <p>We deep-dive into your industry, competitors, and core values to find your unique visual edge.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <h3>Crafting</h3>
              <p>Our lead designers iterate on multiple high-fidelity concepts until we reach the elite standard.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <h3>Polishing</h3>
              <p>Every asset is optimized for retina displays, ensuring flawless execution from logos to banners.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
