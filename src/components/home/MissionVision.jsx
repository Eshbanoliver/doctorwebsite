import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="mission-vision-section bg-white">
      <div className="container">
        <div className="mission-vision-layout">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mission-visual-side"
          >
            <div className="mission-cards-stack">
              <div className="purpose-card card-primary group">
                <div className="purpose-card-body">
                  <div className="purpose-icon-box bg-blue">
                    <Target size={32} className="icon-white" />
                  </div>
                  <div className="purpose-text-box">
                    <h3 className="purpose-title">Our Mission</h3>
                    <p className="purpose-desc">
                      To provide accessible, high-quality healthcare using modern technology while maintaining the highest standards of medical ethics and patient compassion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="purpose-card card-teal group">
                <div className="purpose-card-body">
                  <div className="purpose-icon-box bg-secondary">
                    <Eye size={32} className="icon-white" />
                  </div>
                  <div className="purpose-text-box">
                    <h3 className="purpose-title">Our Vision</h3>
                    <p className="purpose-desc">
                      To be the leading medical practice in the region, recognized for excellence in patient outcomes, innovation in healthcare, and community wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mission-content-side"
          >
            <SectionHeader 
              subtitle="The Core Purpose"
              title="Driven by Excellence & Patient Care"
            />
            <p className="mission-long-desc">
              We believe that healthcare should be proactive, not just reactive. Our mission and vision guide every decision we make, ensuring that our patients receive the best possible treatment at every touchpoint.
            </p>
            <div className="mission-quote-card glass-card">
               <Shield size={40} className="quote-icon" />
               <div className="quote-text">
                 "Our goal is to make Udaipur the healthiest city in the state through dedicated medical service."
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
