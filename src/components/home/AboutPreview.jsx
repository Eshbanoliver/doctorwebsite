import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutPreview = () => {
  const highlights = [
    'Expert Medical Professionals',
    'State-of-the-Art Facilities',
    'Compassionate Patient Care',
    'Advanced Diagnostic Tools'
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Medical Facility" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 p-8 glass-card border-none bg-primary text-white rounded-3xl z-20 shadow-2xl">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-90">Years of<br/>Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              subtitle="About Our Practice"
              title="We Are Committed To Your Health & Wellbeing"
            />
            
            <p className="text-text-muted mb-8 text-lg">
              Our clinic brings a new level of healthcare to Udaipur. With over 15 years of experience, we provide a holistic approach to medicine, combining modern techniques with timeless care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 size={24} className="text-secondary" />
                  <span className="font-semibold text-text-main">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="px-10 py-4 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all inline-block">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
