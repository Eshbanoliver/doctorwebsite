import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingActions.css';

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Side: WhatsApp & Call */}
      <div className="floating-actions-container floating-left">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="https://wa.me/919999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="action-btn whatsapp-btn"
          data-tooltip="WhatsApp Us"
        >
          <MessageCircle size={28} />
        </motion.a>
        
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          href="tel:+919999999999" 
          className="action-btn phone-btn"
          data-tooltip="Call Us"
        >
          <Phone size={24} />
        </motion.a>
      </div>

      {/* Right Side: Scroll to Top */}
      <div className="floating-actions-container floating-right">
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              className="action-btn scroll-btn"
              data-tooltip="Scroll to Top"
            >
              <ArrowUp size={28} strokeWidth={3} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingActions;

