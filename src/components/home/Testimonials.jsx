import React, { useRef } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Bloom Florals',
      content: 'REVO-LITE transformed our brand identity. The logo they designed perfectly captures our elegance and has significantly increased our customer engagement.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Founder, TechPulse',
      content: 'The web banners designed for our launch were incredible. High-quality work, fast turnaround, and excellent communication throughout the process.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director, Vibe Studio',
      content: 'Professional, creative, and reliable. REVO-LITE is our go-to studio for all our branding needs. They truly understand modern design trends.',
      rating: 5
    },
    {
      name: 'Michael Smith',
      role: 'Small Business Owner',
      content: 'I was hesitant at first, but the results speak for themselves. My new brand identity has given me the confidence to compete with larger agencies.',
      rating: 5
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Testimonials</div>
            <h2 className={styles.title}>What our <span className={styles.accent}>Clients say</span></h2>
          </div>
          <div className={styles.controls}>
            <button onClick={() => scroll('left')} aria-label="Previous">←</button>
            <button onClick={() => scroll('right')} aria-label="Next">→</button>
          </div>
        </div>

        <div className={styles.carousel} ref={scrollRef}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(item.rating)}
              </div>
              <p className={styles.content}>"{item.content}"</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>{item.name[0]}</div>
                <div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.role}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
