import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="mission-vision-section">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="mission-bg-blob blob-left" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="mission-bg-blob blob-right" 
      />

      <div className="container">
        <div className="mission-vision-layout">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mission-visual-side"
          >
            <div className="mission-cards-stack">
              <motion.div variants={cardVariants} className="purpose-card card-primary group">
                <div className="purpose-card-body">
                  <div className="purpose-icon-box">
                    <Target size={36} className="icon-white" />
                  </div>
                  <div className="purpose-text-box">
                    <h3 className="purpose-title">Our Mission</h3>
                    <p className="purpose-desc">
                      To provide accessible, high-quality healthcare using modern technology while maintaining the highest standards of medical ethics and patient compassion.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="purpose-card card-teal group">
                <div className="purpose-card-body">
                  <div className="purpose-icon-box">
                    <Eye size={36} className="icon-white" />
                  </div>
                  <div className="purpose-text-box">
                    <h3 className="purpose-title">Our Vision</h3>
                    <p className="purpose-desc">
                      To be the leading medical practice in the region, recognized for excellence in patient outcomes, innovation in healthcare, and community wellness.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mission-content-side"
          >
            <SectionHeader 
              subtitle="The Core Purpose"
              title="Driven by Excellence & Patient Care"
            />
            <p className="mission-long-desc">
              We believe that healthcare should be proactive, not just reactive. Our mission and vision guide every decision we make, ensuring that our patients receive the best possible treatment at every touchpoint.
            </p>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="mission-quote-card"
            >
               <Shield size={48} className="quote-icon" />
               <div className="quote-text">
                 "Our goal is to make Udaipur the healthiest city in the state through dedicated medical service."
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
