import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FeaturedProjects.module.css';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: 'CoreAI Visuals',
      tags: ['identity', 'banners'],
      desc: 'Developing an immersive visual identity for CoreAI, featuring retina-ready digital banners.',
      img: '/revolite/banners/banner-2.jpg',
      url: '/portfolio/banners'
    },
    {
      title: 'Skincare Identity',
      tags: ['product-design', 'packaging'],
      desc: 'Premium packaging and logo design for an organic skincare line, emphasizing purity and elegance.',
      img: '/revolite/Skincare Shops/Logo/21469e195662517.6613914008dd5.png',
      url: '/portfolio/Skincare Shops/Logo'
    },
    {
      title: 'Luxury Branding',
      tags: ['strategy', 'visuals'],
      desc: 'A comprehensive branding overhaul for a high-end luxury client, focusing on elite market positioning.',
      img: '/revolite/brand-assets/brand-2.jpg',
      url: '/portfolio/brand-assets'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Featured Case Studies</div>
          <h2 className={styles.title}>Defining <span className={styles.accent}>Industry Standards</span></h2>
          <p className={styles.subtitle}>Recent innovative projects from the REVO-LITE studio.</p>
        </div>

        <div className={styles.topShowcase}>
          <div className={styles.dashboard}>
            <div className={styles.stats}>
              <div className={styles.stat}>Brand Reach <span>+45%</span></div>
              <div className={styles.stat}>Conversion <span>+12%</span></div>
              <div className={styles.stat}>Engagement <span>8.4K</span></div>
              <div className={styles.stat}>Retention <span>94%</span></div>
            </div>
            <div className={styles.chart}>
              <svg viewBox="0 0 400 150">
                <path d="M0,140 Q100,130 150,100 T250,60 T400,10" fill="none" stroke="var(--accent)" strokeWidth="3" />
                <path d="M0,120 Q100,110 150,80 T250,40 T400,0" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
              </svg>
            </div>
          </div>
          <div className={styles.showcaseContent}>
            <h3>Multify Brand Expansion</h3>
            <div className={styles.tags}>
              <span>strategic branding</span>
              <span>retina-visuals</span>
            </div>
            <p>We partnered with Multify to redefine their visual presence across every digital touchpoint.</p>
            <button 
              className={styles.caseStudyBtn}
              onClick={() => navigate('/portfolio/banners')}
            >
              View Case Study ↗
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={p.img} alt={p.title} className={styles.cardImg} />
              </div>
              <div className={styles.cardInfo}>
                <h3>{p.title}</h3>
                <div className={styles.cardTags}>
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <p>{p.desc}</p>
                <button className={styles.miniBtn} onClick={() => navigate(p.url)}>
                  View Details ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
