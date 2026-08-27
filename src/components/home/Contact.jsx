import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Get in Touch</span>
          <h1 className={styles.title}>Let's Build Your Brand</h1>
          <p className={styles.description}>
            Ready to elevate your brand with premium design? We're here to help you create logos, banners, and brand systems that convert.
          </p>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <a href="tel:+18178560456">+1 817 856 0456</a>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/923030912358" target="_blank" rel="noopener noreferrer">+92 303 0912358</a>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <a href="https://pk.linkedin.com/company/revo-lite" target="_blank" rel="noopener noreferrer">Connect with us</a>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/revolite.works" target="_blank" rel="noopener noreferrer">@revolite.works</a>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <h2>Ready to Start Your Project?</h2>
            <p>Send us a message and we'll get back to you within 24 hours.</p>
            <a href="mailto:contact@revolite.works" className={styles.emailButton}>
              contact@revolite.works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
