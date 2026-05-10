import React from 'react';
import styles from './Benefits.module.css';

const Benefits = () => {
  const points = [
    {
      title: 'Iconic Brand Identity',
      desc: 'We craft timeless logos and visual systems that define industry leaders in luxury and retail.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Retina-Quality Design',
      desc: 'Every pixel is polished for high-density displays, ensuring your brand looks stunning on any screen.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'Strategic Positioning',
      desc: 'We don’t just design; we position your brand to dominate its market through deep research and analysis.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.mainCard}>
            <div className={styles.innerBox}>
              <img src="/revolite/banners/banner-1.jpg" alt="Luxury Branding" />
            </div>
            <div className={styles.floatingBadge}>
              <span className={styles.badgeIcon}>✦</span>
              <span className={styles.notif}>12</span>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.medalIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h4>Premier Studio</h4>
                <p>Global Design Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.eyebrow}>Why REVO-LITE</div>
          <h2 className={styles.title}>Elevating Brands to <span className={styles.accent}>Elite Standards</span></h2>
          
          <div className={styles.points}>
            {points.map((p, i) => (
              <div key={i} className={styles.point}>
                <div className={styles.iconBox}>{p.icon}</div>
                <div className={styles.pointText}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
