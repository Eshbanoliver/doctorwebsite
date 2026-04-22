import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Heart, Shield, Activity } from 'lucide-react';

const AboutPreview = () => {
  const highlights = [
    { title: 'Expert Physicians', desc: 'Board-certified specialists', icon: Award, color: '#0ea5e9' },
    { title: 'Empathetic care', desc: 'Patient-first philosophy', icon: Heart, color: '#f43f5e' },
    { title: 'Modern Safety', desc: 'Secure & safe environment', icon: Shield, color: '#10b981' },
    { title: 'Pulse monitor', desc: 'Real-time health tracking', icon: Activity, color: '#8b5cf6' }
  ];

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
                  src="/premium_modern_clinic_about.png" 
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
                title="Redefining Healthcare Excellence in Udaipur"
              />
              
              <p className="about-text-lead">
                Udaipur Health Clinic isn't just a hospital; it's a sanctuary of wellness. We blend 
                cutting-edge medical technology with deeply personal, compassionate care that treats the person, not just the ailment.
              </p>

              {/* Bento Feature Grid */}
              <div className="about-feature-bento">
                {highlights.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ translateY: -10 }}
                    className="bento-feature-card glass-card-v2"
                    style={{ '--accent-color': item.color }}
                  >
                    <div className="bento-icon-wrapper" style={{ '--accent-color': item.color }}>
                      <item.icon size={22} color={item.color} />
                    </div>
                    <div className="bento-card-info">
                      <h4 className="bento-title">{item.title}</h4>
                      <p className="bento-desc">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

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

