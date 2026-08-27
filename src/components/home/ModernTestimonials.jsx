import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ModernTestimonials.module.css';

const ModernTestimonials = () => {
  const navigate = useNavigate();
  const reviews = [
    {
      name: 'Dylan Frost',
      role: 'E-commerce Store Owner',
      text: 'The team at REVO-LITE helped us increase website traffic and sales through targeted branding and social strategy. Their expertise and attention to detail were invaluable to our business.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      name: 'Ryan Warner',
      role: 'B2B Company Owner',
      text: 'As a B2B company, we were unsure of how to effectively use our visual assets. REVO-LITE developed a brand strategy that has generated leads and improved our visibility.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      name: 'Laura Glover',
      role: 'Beauty Brand Owner',
      text: "The REVO-LITE team's skills and creativity helped us build a visually stunning presence that has increased brand awareness and sales for our beauty brand.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>Client Success</div>
          <h2 className={styles.title}>Impact through Design</h2>
          <p className={styles.subtitle}>Our branding solutions drive real-world results.</p>
          <button className={styles.cta} onClick={() => navigate('/portfolio')}>
            View Portfolio ↗
          </button>

          <div className={styles.partners}>
            <h3>Trusted By Industry Leaders</h3>
            <div className={styles.logoGrid}>
              <div className={styles.partnerLogo}>Premium Retail</div>
              <div className={styles.partnerLogo}>Luxury Goods</div>
              <div className={styles.partnerLogo}>Tech Giants</div>
              <div className={styles.partnerLogo}>Apparel Hub</div>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.avatar}>
                  {r.icon}
                </div>
                <div className={styles.info}>
                  <div className={styles.header}>
                    <div>
                      <h3>{r.name}</h3>
                      <p>{r.role}</p>
                    </div>
                    <div className={styles.status}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className={styles.text}>{r.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
