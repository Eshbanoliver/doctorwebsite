import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="fixed left-6 bottom-8 z-[100] flex flex-col space-y-4">
        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 bg-[#25D366] text-white rounded-2xl shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle size={24} fill="white" />
        </a>
        <a 
          href="tel:" 
          className="p-4 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <Phone size={24} fill="white" />
        </a>
      </div>

      {/* Right Side: Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed right-6 bottom-8 z-[100] p-4 glass-card bg-primary text-white border-none cursor-pointer flex items-center justify-center hover:bg-primary-dark transition-all"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActions;
