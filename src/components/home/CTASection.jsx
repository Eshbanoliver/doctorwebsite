import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-main-section">
      {/* Background Gradient & Animated Blobs */}
      <div className="cta-full-bg"></div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="cta-blob blob-top"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="cta-blob blob-bottom"
      ></motion.div>

      <div className="container relative z-10">
        <div className="cta-white-glass-card">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content-inner"
          >
            <h2 className="cta-hero-title">
              Ready to Prioritize Your Health?
            </h2>
            <p className="cta-hero-sub">
              Book an appointment today and experience the future of healthcare. Our team is ready to provide you with the personalized care you deserve.
            </p>
            
            <div className="cta-btns-group">
              <Link to="/contact" className="btn-cta-primary">
                <Calendar size={24} />
                <span>Book Appointment</span>
              </Link>
              <Link to="/contact" className="btn-cta-glass">
                <Phone size={24} />
                <span>Contact Us Now</span>
              </Link>
            </div>

            <div className="cta-footer-info-grid">
               <div className="cta-footer-item">
                 <div className="cta-footer-icon-box">
                   <Phone size={24} />
                 </div>
                 <div className="cta-footer-label">Call Us</div>
                 <div className="cta-footer-value">+91 (Leave Blank)</div>
               </div>
               <div className="cta-footer-item">
                 <div className="cta-footer-icon-box">
                   <Mail size={24} />
                 </div>
                 <div className="cta-footer-label">Email Us</div>
                 <div className="cta-footer-value">contact@drquresh.com</div>
               </div>
               <div className="cta-footer-item">
                 <div className="cta-footer-icon-box">
                   <ArrowRight size={24} />
                 </div>
                 <div className="cta-footer-label">Visit Us</div>
                 <div className="cta-footer-value">Udaipur, Rajasthan</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
