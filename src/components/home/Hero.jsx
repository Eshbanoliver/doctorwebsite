import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import doctorHeroImg from '../../assets/dr_quresh_enhanced.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-accent"></div>
      
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-content"
          >
            <div className="hero-alert-badge">
              <Activity size={18} className="icon-pulse" />
              <span className="badge-text">Your Health, Our Priority</span>
            </div>
            
            <h1 className="hero-title">
              Advanced <span className="gradient-text">Cancer Care</span> & Recovery
            </h1>
            
            <p className="hero-description">
              Experience exceptional surgical oncology and personalized cancer care at PIMS City Hospital. We combine advanced technology with compassionate service for a healthier future.
            </p>
            
            <div className="hero-button-group">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-wrapper">
                <Link to="/contact" className="btn-primary hero-btn">
                  <span>Book Appointment</span>
                  <ArrowRight size={22} className="arrow-icon" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-wrapper">
                <Link to="/services" className="btn-outline hero-btn glass-card">
                  <span>Explore Services</span>
                </Link>
              </motion.div>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-visual-wrapper"
          >
            <div className="hero-main-image-container">
               <div className="hero-image-blur-bg"></div>
               <img 
                src={doctorHeroImg}
                alt="Dr. Quresh Bambora" 
                className="hero-main-img"
               />
            </div>
            
            {/* Floating Glass Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="float-card accuracy-card glass-card"
            >
              <div className="float-icon-box bg-teal">
                <Activity size={24} />
              </div>
              <div className="float-info">
                <span className="float-label">Accuracy</span>
                <span className="float-value">99.9%</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="float-card patient-card glass-card"
            >
              <div className="float-icon-box bg-blue">
                <Users size={24} />
              </div>
              <div className="float-info">
                <span className="float-label">Patients</span>
                <span className="float-value">15k+</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
