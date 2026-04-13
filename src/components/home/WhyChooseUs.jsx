import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Trusted Experts',
      desc: 'Our doctors are highly qualified with years of specialized experience.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      desc: 'We are always here for you, ensuring healthcare is accessible anytime.'
    },
    {
      icon: Award,
      title: 'Modern Technology',
      desc: 'We use the latest diagnostic and treatment tools for better outcomes.'
    },
    {
      icon: Star,
      title: 'Patient Satisfaction',
      desc: 'We pride ourselves on our consistent high rating from our patients.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              subtitle="The Doctor Advantage"
              title="Why Choose Our Clinic For Your Care?"
            />
            <p className="text-lg text-text-muted mb-10 leading-relaxed">
              We understand that choosing a healthcare provider is a significant decision. Here's why thousands of patients trust us with their health Every year.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center space-x-6 p-6 glass-card bg-slate-50 border-none rounded-3xl hover:bg-white hover:shadow-xl transition-all cursor-default">
                  <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                    <reason.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-main mb-1">{reason.title}</h4>
                    <p className="text-sm text-text-muted">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor with Patient" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Animated Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
            
            {/* Stats Overlay */}
            <div className="absolute -top-10 -right-10 p-8 glass-card bg-white rounded-3xl z-20 shadow-2xl border-none">
              <div className="flex items-center space-x-3 mb-2">
                <Star fill="currentColor" className="text-amber-400" size={20} />
                <span className="font-bold text-lg">4.9 / 5.0</span>
              </div>
              <div className="text-xs text-text-muted font-medium uppercase tracking-wider">Patient Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
