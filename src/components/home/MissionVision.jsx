import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8">
              <div className="p-10 glass-card bg-primary/5 border-primary/10 rounded-3xl group hover:bg-white hover:shadow-2xl transition-all">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-primary rounded-2xl text-white">
                    <Target size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-text-muted leading-relaxed">
                      To provide accessible, high-quality healthcare using modern technology while maintaining the highest standards of medical ethics and patient compassion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 glass-card bg-teal-50 border-teal-100 rounded-3xl group hover:bg-white hover:shadow-2xl transition-all">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-secondary rounded-2xl text-white">
                    <Eye size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-text-muted leading-relaxed">
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
            className="order-1 lg:order-2"
          >
            <SectionHeader 
              subtitle="The Core Purpose"
              title="Driven by Excellence & Patient Care"
            />
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              We believe that healthcare should be proactive, not just reactive. Our mission and vision guide every decision we make, ensuring that our patients receive the best possible treatment at every touchpoint.
            </p>
            <div className="flex items-center space-x-4 p-6 glass-card bg-slate-50 border-none rounded-2xl">
               <Shield size={40} className="text-primary" />
               <div className="text-sm font-semibold text-text-muted italic">
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
