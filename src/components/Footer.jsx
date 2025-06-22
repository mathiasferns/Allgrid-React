import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// It's better to use SVG for logos for scalability and clarity
import logo from '../assets/logo.png'; 
// Assuming you have specific thumbnail images for the posts
import postThumb1 from '../assets/tower.svg';
import postThumb2 from '../assets/tower.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* === LEFT COLUMN === */}
        <div className="footer-column footer-info">
          <a href="/" className="footer-logo-link">
            <img src={logo} alt="Allgrid Logo" className="footer-logo" />
          </a>
          <div className="footer-links-wrapper">
            <div className="footer-links-col">
              <a href="/">Home</a>
              <a href="/about">About us</a>
              <a href="/contact">Contact us</a>
            </div>
            <div className="footer-links-col">
              <a href="/refund-policy">Refund Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="footer-column footer-newsletter">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter email address" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-subtext">
            Get the best of Allgrid in your inbox.
          </p>
          <div className="recent-posts">
            <div className="post-item">
              <img src={postThumb1} alt="Recent post thumbnail" />
              <p>Lorem ipsum dolor sit amet consectetur. Pulvinar nibh vestibulum et consequat.</p>
            </div>
            <div className="post-item">
              <img src={postThumb2} alt="Recent post thumbnail" />
              <p>Lorem ipsum dolor sit amet consectetur. Felis in quam porttitor urna.</p>
            </div>
          </div>
        </div>
      </div>

      {/* === BOTTOM BAR === */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
          <div className="copyright-text">
            <p>© 2024 Allgrid. All rights reserved.</p>
          </div>
          <div className="powered-by-text">
            <p>Powered by Kilowott</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;