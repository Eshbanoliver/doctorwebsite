import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Heart, Shield, Award, Smile } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      desc: 'Treating every patient with kindness and empathy.',
      color: 'bg-rose-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      desc: 'Upholding the highest ethical standards in medicine.',
      color: 'bg-indigo-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Striving for clinical excellence and innovation.',
      color: 'bg-teal-500'
    },
    {
      icon: Smile,
      title: 'Patient-First',
      desc: 'Patient comfort and satisfaction are our priorities.',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section className="section-padding bg-slate-50 relative">
      <div className="container">
        <SectionHeader 
          subtitle="Our Foundation"
          title="The Values We Live By"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-card bg-white text-center hover:shadow-2xl transition-all border-none group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${val.color} text-white flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                <val.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{val.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
