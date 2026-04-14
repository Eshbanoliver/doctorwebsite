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
      accent: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
      number: '01'
    },
    {
      icon: Shield,
      title: 'Integrity',
      desc: 'Upholding the highest ethical standards in medicine.',
      accent: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
      number: '02'
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Striving for clinical excellence and innovation.',
      accent: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
      number: '03'
    },
    {
      icon: Smile,
      title: 'Patient-First',
      desc: 'Patient comfort and satisfaction are our priorities.',
      accent: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      number: '04'
    }
  ];

  return (
    <section className="core-values-section relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-teal-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeader 
          subtitle="Our Foundation"
          title="The Values We Live By"
          centered
        />

        <div className="core-values-grid-v2">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`value-card-v2 card-v2-${idx + 1}`}
            >
              {/* Decorative Number */}
              <span className="value-number-bg">{val.number}</span>
              
              <div 
                className="value-icon-v2"
                style={{ background: val.accent }}
              >
                <val.icon size={28} className="icon-white" />
              </div>

              <div className="value-content-v2">
                <h3 className="value-title-v2">{val.title}</h3>
                <p className="value-desc-v2">
                  {val.desc}
                </p>
              </div>

              <div className="card-line-v2" style={{ background: val.accent }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
