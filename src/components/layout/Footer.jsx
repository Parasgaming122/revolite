import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/">
              <img src="/RETINA PNG GOOGLE SIZE.png" alt="REVO-LITE" className={styles.logo} />
            </Link>
            <p className={styles.tagline}>
              Premium Branding Studio. <br />
              Crafting visual excellence for ambitious businesses worldwide.
            </p>
          </div>

          <div className={styles.links}>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio Hub</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>Expertise</h3>
            <ul>
              <li><Link to="/portfolio/logos">Logo Design</Link></li>
              <li><Link to="/portfolio/banners">Web Banners</Link></li>
              <li><Link to="/portfolio/brand-assets">Brand Identity</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Direct Reach</h3>
            <p>Connect on Discord:</p>
            <ul className={styles.discordList}>
              <li>alexajones24</li>
              <li>emilysmith18</li>
              <li>valerieatelier</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} REVO-LITE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
