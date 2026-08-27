import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: '01',
      title: 'Premium Logo Design',
      desc: 'Iconic visual anchors crafted for maximum impact and brand recall.',
      icon: '✦'
    },
    {
      id: '02',
      title: 'Web Banners & Ads',
      desc: 'High-conversion digital assets optimized for all platforms.',
      icon: '✦'
    },
    {
      id: '03',
      title: 'Brand Identity',
      desc: 'Complete visual systems from color palettes to typography.',
      icon: '✦'
    },
    {
      id: '04',
      title: 'Apparel Design',
      desc: 'Professional apparel and merchandise branding for client projects.',
      icon: '✦'
    },
    {
      id: '05',
      title: 'Marketing Strategy',
      desc: 'Strategic insights to grow your business presence online.',
      icon: '✦'
    },
    {
      id: '06',
      title: 'UI/UX Design',
      desc: 'User-centric interfaces designed for seamless interaction.',
      icon: '✦'
    }
  ];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Our Services</div>
          <h2 className={styles.title}>Visual Solutions for <span className={styles.accentText}>Modern Brands</span></h2>
          <div className={styles.ctaHeader}>
            <p>Explore our full range of branding categories.</p>
            <button className={styles.headerBtn} onClick={() => navigate('/portfolio')}>
              View Portfolio Hub ↗
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.id} className={styles.card}>
              <div className={styles.numberBox}>
                <span>{s.id}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <button className={styles.learnMore} onClick={() => navigate('/portfolio')}>
                  Learn More ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
