import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass-card flex items-center justify-between px-10 py-4 mx-auto max-w-7xl transition-all duration-300 ${scrolled ? 'bg-opacity-90' : ''}`}>
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary rounded-xl text-white group-hover:rotate-12 transition-transform">
              <Stethoscope size={28} />
            </div>
            <span className="text-2xl font-bold gradient-text">Doctor</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  location.pathname === link.path ? 'text-primary' : 'text-text-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="ml-4 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap flex-shrink-0">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-text-main" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 p-8 glass-card md:hidden flex flex-col space-y-6 shadow-2xl z-[100]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-bold transition-all ${
                  location.pathname === link.path ? 'text-primary' : 'text-text-main'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="w-full text-center py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
