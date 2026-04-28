import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="footer-top-accent"></div>
      
      {/* Visual Accents */}
      <div className="footer-glow glow-1"></div>
      <div className="footer-glow glow-2"></div>
      
      <div className="container relative z-10">
        <div className="footer-layout-grid">
          {/* Brand & Info */}
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-icon-badge">
                <img src={logo} alt="Dr. Quresh Logo" className="footer-brand-logo-img" />
              </div>
              <span className="footer-brand-name">Dr. Quresh</span>
            </Link>
            <p className="footer-brand-desc">
              Providing premium healthcare services with a focus on liquid glass aesthetics and modern medical care.
            </p>
            <div className="footer-social-links">
                <a href="https://in.linkedin.com/in/drquresh-bambora-8578a055" target="_blank" rel="noreferrer" className="footer-social-icon-box glass-card">
                  <Globe size={20} />
                </a>
                <a href="https://www.instagram.com/drquresh/" target="_blank" rel="noreferrer" className="footer-social-icon-box glass-card">
                  <Share2 size={20} />
                </a>
                <a href="mailto:contact@drquresh.com" className="footer-social-icon-box glass-card">
                  <Mail size={20} />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {['Home', 'About Us', 'Treatments', 'FAQ', 'Contact Us'].map((item) => {
                const pathMap = {
                  'Home': '/',
                  'About Us': '/about',
                  'Contact Us': '/contact',
                  'Treatments': '/treatments',
                  'FAQ': '/faq'
                };
                return (
                  <li key={item} className="footer-link-item">
                    <Link to={pathMap[item]} className="footer-nav-link">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-column">
            <h4 className="footer-col-title">Contact Info</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={20} className="footer-contact-icon" />
                <span>PIMS City Hospital, Transport Nagar, Bedwas, Udaipur</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={20} className="footer-contact-icon" />
                <span>contact@drquresh.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom-bar">
          <p>© Copyright 2026 | Dr. Quresh Bambora | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
