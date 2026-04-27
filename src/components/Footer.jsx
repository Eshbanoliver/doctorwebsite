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
              {['Home', 'About Us', 'Services', 'FAQ', 'Contact Us'].map((item) => {
                const pathMap = {
                  'Home': '/',
                  'About Us': '/about',
                  'Contact Us': '/contact',
                  'Services': '/services',
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
                <span>Udaipur, Rajasthan 313001</span>
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
