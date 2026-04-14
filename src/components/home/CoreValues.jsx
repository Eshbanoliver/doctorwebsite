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
    <section className="core-values-section highlight-bg">
      <div className="container">
        <SectionHeader 
          subtitle="Our Foundation"
          title="The Values We Live By"
          centered
        />

        <div className="core-values-grid">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="value-card glass-card group"
            >
              <div className={`value-icon-badge ${val.color} group-hover:rotate-12`}>
                <val.icon size={32} className="icon-white" />
              </div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">
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
