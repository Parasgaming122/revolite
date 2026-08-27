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
              Crafting visual excellence for growing retail businesses worldwide.
            </p>
          </div>

          <div className={styles.links}>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/websites">Websites</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>Expertise</h3>
            <ul>
              <li><Link to="/portfolio/logos">Logos</Link></li>
              <li><Link to="/portfolio/banners">Banners</Link></li>
              <li><Link to="/portfolio/brand-assets">Branding Assets</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Get in Touch</h3>
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

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} REVO-LITE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
