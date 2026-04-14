import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background with Gradient Overlay */}
      <div className="hero-bg">
        <img 
          src="/hero-bg.png" 
          alt="Medical Hero" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-badge-container">
              <Activity size={18} className="text-secondary" />
              <span className="text-sm font-bold text-primary">Your Health, Our Priority</span>
            </div>
            
            <h1 className="hero-title">
              Modern <span className="gradient-text">Healthcare</span> for Your Family
            </h1>
            
            <p className="hero-description">
              Experience premium medical care with our liquid glass approach. We combine advanced technology with compassionate service for a healthier future.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center space-x-3 hover:bg-primary-dark transition-all shadow-2xl hover:shadow-primary/40 hover:-translate-y-1">
                <span>Book Appointment</span>
                <ArrowRight size={22} />
              </Link>
              <Link to="/services" className="px-10 py-5 glass-card text-text-main rounded-2xl font-bold hover:bg-white transition-all hover:-translate-y-1">
                Explore Services
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <Shield size={28} className="text-secondary" />
                </div>
                <div className="stat-info">
                  <div className="label">100% Safe</div>
                  <div className="sub">Certified Care</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Users size={28} className="text-primary" />
                </div>
                <div className="stat-info">
                  <div className="label">24/7 Support</div>
                  <div className="sub">Ready to Help</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block hero-visuals"
          >
            <div className="main-hero-card">
               <div className="w-full aspect-square bg-grad-primary opacity-20 blur-3xl absolute -z-10 rounded-full"></div>
               <img 
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800"
                alt="Doctor" 
               />
            </div>
            
            {/* Floating Glass Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-card floating-card-accuracy"
            >
              <div className="icon-box icon-teal">
                <Activity size={24} />
              </div>
              <div>
                <div className="text-sm text-text-muted">Accuracy</div>
                <div className="font-bold text-2xl text-text-main">99.9%</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="floating-card floating-card-patients"
            >
              <div className="icon-box icon-blue">
                <Users size={24} />
              </div>
              <div>
                <div className="text-sm text-text-muted">Patients</div>
                <div className="font-bold text-2xl text-text-main">15k+</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
