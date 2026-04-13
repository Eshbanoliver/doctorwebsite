import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Globe, Share2, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-white pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-grad-primary"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-16 space-y-12 md:space-y-0">
          {/* Brand & Info */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary rounded-xl text-white">
                <Stethoscope size={24} />
              </div>
              <span className="text-xl font-bold gradient-text">Doctor</span>
            </Link>
            <p className="text-text-muted mb-6">
              Providing premium healthcare services with a focus on liquid glass aesthetics and modern medical care.
            </p>
            <div className="flex space-x-4">
              {[Globe, Share2, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 glass-card hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-text-muted hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4 text-text-muted">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary" />
                <span>Udaipur, Rajasthan 313001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <span>contact@doctor.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-text-muted mb-4 text-sm">Subscribe to get medical updates and wellness tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-6 py-4 glass-card border-none outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="absolute right-2 top-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-100 pt-8 text-center text-text-muted text-sm px-6">
          <p>©️ Copyright 2026 | MS Infinix | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
