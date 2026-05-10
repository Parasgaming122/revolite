import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FeaturedWork.module.css';

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const containerRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth continuous scrolling animation
      gsap.to(track1Ref.current, {
        x: '-20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to(track2Ref.current, {
        x: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    '/revolite/logos/logo-1.jpg',
    '/revolite/logos/logo-2.jpg',
    '/revolite/logos/logo-3.jpg',
    '/revolite/logos/logo-4.jpg',
    '/revolite/logos/logo-5.jpg',
    '/revolite/logos/logo-6.jpg',
  ];
  
  const branding = [
    '/revolite/brand-assets/brand-1.jpg',
    '/revolite/brand-assets/brand-2.jpg',
    '/revolite/brand-assets/brand-3.jpg',
    '/revolite/brand-assets/brand-4.jpg',
    '/revolite/brand-assets/brand-5.jpg',
    '/revolite/brand-assets/brand-6.jpg',
  ];

  const renderCard = (src, type, index) => (
    <div className={`${styles.card} ${styles[type]}`} key={`${src}-${index}`}>
      <img 
        src={src} 
        alt="Featured Work" 
        loading="lazy"
        width={type === 'logo' ? 300 : 500}
        height={type === 'logo' ? 300 : 280}
        decoding="async"
      />
      <div className={styles.overlay}>
        <div className={styles.category}>{type}</div>
      </div>
    </div>
  );

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Studio Selection</div>
        <h2 className={styles.title}>Featured <span className={styles.accent}>Work</span></h2>
        <p className={styles.subtitle}>A curated stream of our most recent branding masterpieces.</p>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.track} ref={track1Ref}>
          {logos.concat(logos).map((src, i) => renderCard(src, 'logo', i))}
        </div>

        <div className={styles.track} ref={track2Ref} style={{ marginLeft: '-40%' }}>
          {branding.concat(branding).map((src, i) => renderCard(src, 'branding', i))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
