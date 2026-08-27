import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>Our Philosophy</div>
          <h1 className={styles.title}>The Standard We Hold <span className={styles.accent}>Every Project To</span></h1>
          <p className={styles.description}>
            REVO-LITE is a branding studio built on one rule: nothing ships until it's sharp, considered, and unmistakably yours.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Precision, Not Just Polish</h2>
              <p>
                In a saturated market, "good enough" gets scrolled past. Every identity we build — logo, banners, full brand system — is designed to hold up at any size, on any screen, from a business card to a billboard.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statNum}>100%</div>
                  <div className={styles.statLabel}>Custom Design</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>5+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
              </div>
            </div>
            <div className={styles.visual}>
              <img src="/revolite/brand-assets/brand-1.jpg" alt="Studio Precision" />
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
                REVO-LITE was built to close a gap: growing retail and lifestyle brands need agency-quality design without agency-size budgets or timelines. We work as an extension of your team — logos, banners, and full brand systems — with the speed and attention usually reserved for much bigger clients.
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
              <p>Every asset is refined for flawless execution across screen and print — from a logo at favicon size to a banner at billboard scale.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
