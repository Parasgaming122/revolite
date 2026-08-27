import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Stats.module.css';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const stats = [
    { value: 150, suffix: '+', label: 'Satisfied Clients' },
    { value: 300, suffix: '+', label: 'Projects Completed' },
    { value: 5, suffix: 'yr', label: 'Design Experience' },
    { value: 99, suffix: '%', label: 'Client Retention' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Simple counter animation
      const targets = document.querySelectorAll('.stat-number');
      targets.forEach(target => {
        const val = parseInt(target.getAttribute('data-value'));
        gsap.to(target, {
          innerText: val,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statItem} stat-item`}>
              <div className={styles.numberWrapper}>
                <span className={`${styles.number} stat-number`} data-value={stat.value}>0</span>
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '14px', opacity: 0.7 }}>Results from recent client projects</p>
      </div>
    </section>
  );
};

export default Stats;
