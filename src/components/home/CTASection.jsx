import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient & Animated Blobs */}
      <div className="absolute inset-0 bg-grad-primary -z-10"></div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 blur-[100px] rounded-full"
      ></motion.div>

      <div className="container relative z-10">
        <div className="glass-card bg-white/10 border-white/20 p-12 md:p-20 text-center text-white rounded-[40px] shadow-2xl backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Prioritize Your Health?
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Book an appointment today and experience the future of healthcare. Our team is ready to provide you with the personalized care you deserve.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full md:w-auto px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-slate-100 transition-all shadow-xl">
                <Calendar size={24} />
                <span>Book Appointment</span>
              </Link>
              <Link to="/contact" className="w-full md:w-auto px-10 py-5 glass-card bg-white/20 border-white/30 text-white rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-white/30 transition-all">
                <Phone size={24} />
                <span>Contact Us Now</span>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                   <Phone size={24} />
                 </div>
                 <div className="text-sm opacity-70 uppercase tracking-widest mb-1">Call Us</div>
                 <div className="font-bold text-lg">+91 (Leave Blank)</div>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                   <Mail size={24} />
                 </div>
                 <div className="text-sm opacity-70 uppercase tracking-widest mb-1">Email Us</div>
                 <div className="font-bold text-lg">info@doctor.com</div>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                   <ArrowRight size={24} />
                 </div>
                 <div className="text-sm opacity-70 uppercase tracking-widest mb-1">Visit Us</div>
                 <div className="font-bold text-lg">Udaipur, Rajasthan</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
