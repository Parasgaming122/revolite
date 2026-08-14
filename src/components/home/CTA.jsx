import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>Get in Touch</div>
          <p>Connect with us:</p>
          <ul className={styles.contactList}>
            <li>
              <a href="https://pk.linkedin.com/company/revo-lite?trk=public_jobs_topcard_logo" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="tel:+18178560456">+1 817 856 0456</a>
            </li>
            <li>
              <a href="https://wa.me/923030912358" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/revolite.works" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CTA;
