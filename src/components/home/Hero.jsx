import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-height-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="/hero-bg.png" 
          alt="Medical Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full mb-6">
              <Activity size={18} className="text-secondary" />
              <span className="text-sm font-semibold text-primary">Your Health, Our Priority</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-text-main mb-8 leading-tight">
              Modern <span className="gradient-text">Healthcare</span> for Your Family
            </h1>
            
            <p className="text-xl text-text-muted mb-10 max-w-lg">
              Experience premium medical care with our liquid glass approach. We combine advanced technology with compassionate service.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center space-x-2 hover:bg-primary-dark transition-all shadow-xl hover:shadow-primary/30">
                <span>Book Appointment</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="px-8 py-4 glass-card text-text-main rounded-2xl font-bold hover:bg-white transition-all">
                Explore Services
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <ShieldCircle size={28} />
                </div>
                <div>
                  <div className="font-bold text-lg">100% Safe</div>
                  <div className="text-xs text-text-muted">Certified Care</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={28} />
                </div>
                <div>
                  <div className="font-bold text-lg">24/7 Support</div>
                  <div className="text-xs text-text-muted">Ready to Help</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-4 glass-card rounded-[40px] overflow-hidden">
               {/* This is a placeholder for a more complex 3D element or a high-quality image */}
               <div className="w-full aspect-square bg-grad-primary opacity-10 blur-3xl absolute -z-10 rounded-full"></div>
               <img 
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800"
                alt="Doctor" 
                className="w-full h-full object-cover rounded-[32px] shadow-2xl"
               />
            </div>
            
            {/* Floating Glass Badges */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-6 glass-card rounded-3xl z-20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-secondary rounded-xl text-white">
                  <Activity size={24} />
                </div>
                <div>
                  <div className="text-sm text-text-muted">Accuracy</div>
                  <div className="font-bold text-xl text-text-main">99.9%</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 p-6 glass-card rounded-3xl z-20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary rounded-xl text-white">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-sm text-text-muted">Patients</div>
                  <div className="font-bold text-xl text-text-main">15k+</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
