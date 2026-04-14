import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Globe, Share2, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="footer-top-accent"></div>
      
      <div className="container">
        <div className="footer-layout-grid">
          {/* Brand & Info */}
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-icon-badge">
                <Stethoscope size={24} />
              </div>
              <span className="footer-brand-name gradient-text">Doctor</span>
            </Link>
            <p className="footer-brand-desc">
              Providing premium healthcare services with a focus on liquid glass aesthetics and modern medical care.
            </p>
            <div className="footer-social-links">
              {[Globe, Share2, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="footer-social-icon-box glass-card">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {['Home', 'About Us', 'Services', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item} className="footer-link-item">
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="footer-nav-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-column">
            <h4 className="footer-col-title">Contact Info</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={20} className="footer-contact-icon" />
                <span>Udaipur, Rajasthan 313001</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={20} className="footer-contact-icon" />
                <span>contact@doctor.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter-section">
            <h4 className="footer-col-title">Newsletter</h4>
            <p className="newsletter-sub-text">Subscribe to get medical updates and wellness tips.</p>
            <div className="newsletter-form-container">
              <input 
                type="email" 
                placeholder="Your email" 
                className="newsletter-input glass-card"
              />
              <button className="btn-newsletter-send">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom-bar">
          <p>© Copyright 2026 | MS Infinix | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
