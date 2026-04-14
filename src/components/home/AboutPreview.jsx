import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutPreview = () => {
  const highlights = [
    'Expert Medical Professionals',
    'State-of-the-Art Facilities',
    'Compassionate Patient Care',
    'Advanced Diagnostic Tools'
  ];

  return (
    <section className="about-section highlight-bg">
      <div className="bg-blob blob-top-right"></div>
      <div className="bg-blob blob-bottom-left"></div>
      
      <div className="container about-container">
        <div className="about-grid">
          
          {/* Left Side: Visual Composition */}
          <div className="about-visual">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="about-image-composition"
            >
              <div className="about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                  alt="Medical Excellence" 
                  className="about-main-image"
                />
                <div className="about-image-overlay"></div>
              </div>

              {/* Floating Statistic Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="about-stat-card glass-card"
              >
                <div className="stat-label">Trusted By</div>
                <div className="stat-value">10k+</div>
                <div className="stat-sub">Happy Patients</div>
              </motion.div>
            </motion.div>

            <div className="about-decoration-frame"></div>
          </div>

          {/* Right Side: Content Overlay */}
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="about-content-card"
            >
              <SectionHeader 
                subtitle="Why Choose Our Practice"
                title="Pioneering Health & Wellness with a Human Touch"
              />
              
              <p className="about-description">
                Our clinic brings a new level of healthcare to Udaipur. With over 15 years of experience, we provide a holistic approach to medicine, combining modern techniques with timeless care.
              </p>

              <div className="about-highlights-list">
                {highlights.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="about-highlight-item"
                  >
                    <div className="highlight-icon-box">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="highlight-text">
                      <span className="highlight-title">{item}</span>
                      <span className="highlight-desc">Standard of excellence in every touch.</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="about-actions">
                <Link to="/about" className="btn-primary btn-large">
                  <span>Explore Our History</span>
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    →
                  </motion.span>
                </Link>
                <Link to="/contact" className="btn-outline btn-large">
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
