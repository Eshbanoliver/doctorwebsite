import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Heart, Shield, Activity } from 'lucide-react';

const AboutPreview = () => {


  return (
    <section className="about-section highlight-v3">
      {/* Dynamic Background Elements */}
      <div className="about-glass-glow"></div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="liquid-blob blob-1"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="liquid-blob blob-2"
      ></motion.div>
      
      <div className="container about-container-v2">
        <div className="about-modern-grid">
          
          {/* Left Side: Cinematic Visual Composition */}
          <div className="about-visual-v3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-image-stack"
            >
              {/* Main Image Frame with Parallax-ready feel */}
              <div className="main-image-frame glass-border">
                <img 
                  src="/doctor_clinic_modern.png" 
                  alt="Medical Excellence" 
                  className="about-img-main"
                />
                <div className="img-gloss-overlay"></div>
              </div>

              {/* Floating Statistic Plate */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="about-floating-plate glass-card-v2"
              >
                <div className="plate-icon-box">
                  <Activity className="text-primary animate-pulse" />
                </div>
                <div className="plate-text">
                  <span className="plate-count">15+</span>
                  <span className="plate-label">Years of Trust</span>
                </div>
              </motion.div>

              {/* Decorative Frame */}
              <div className="decorative-outline"></div>
            </motion.div>
          </div>

          {/* Right Side: High-Impact Content */}
          <div className="about-content-v3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader 
                subtitle="Who We Are"
                title="Leading Surgical Oncology Care at PIMS City Hospital"
              />
              
              <p className="about-text-lead">
                Led by Dr. Quresh Bambora, PIMS City Hospital is Udaipur's premier destination for advanced surgical oncology. We specialize in comprehensive cancer care, combining world-class surgical expertise with the compassionate, personalized treatment every patient deserves.
              </p>



              <div className="about-cta-stack">
                <Link to="/about" className="btn-modern-primary">
                  <span>Our Journey</span>
                  <div className="btn-glow"></div>
                </Link>
                <Link to="/contact" className="btn-modern-text">
                  Meet the Team →
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

