import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted Experts',
      desc: 'Our doctors are highly qualified with years of specialized experience.',
      colorClass: 'reason-blue'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      desc: 'We are always here for you, ensuring healthcare is accessible anytime.',
      colorClass: 'reason-teal'
    },
    {
      icon: Award,
      title: 'Modern Technology',
      desc: 'We use the latest diagnostic and treatment tools for better outcomes.',
      colorClass: 'reason-amber'
    },
    {
      icon: Star,
      title: 'Patient Satisfaction',
      desc: 'We pride ourselves on our consistent high rating from our patients.',
      colorClass: 'reason-rose'
    }
  ];

  return (
    <section className="why-choose-section bg-white">
      <div className="container">
        <div className="why-choose-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="why-choose-content"
          >
            <SectionHeader 
              subtitle="The MS Infinix Advantage"
              title="Why Choose Our Clinic For Your Care?"
            />
            <p className="why-choose-desc">
              We understand that choosing a healthcare provider is a significant decision. Here's why thousands of patients trust us with their health Every year.
            </p>
            
            <div className="reasons-stack">
              {reasons.map((reason, idx) => (
                <div key={idx} className={`reason-item-card ${reason.colorClass}`}>
                  <div className="reason-icon-box">
                    <reason.icon size={28} />
                  </div>
                  <div className="reason-text-box">
                    <h4 className="reason-title">{reason.title}</h4>
                    <p className="reason-subtext">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="why-choose-visual"
          >
            <div className="why-choose-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor with Patient" 
                className="why-choose-img"
              />
            </div>
            
            {/* Animated Glow */}
            <div className="why-choose-glow"></div>
            
            {/* Stats Overlay */}
            <div className="why-choose-rating-card glass-card">
              <div className="rating-row">
                <Star fill="currentColor" className="star-icon" size={20} />
                <span className="rating-value">4.9 / 5.0</span>
              </div>
              <div className="rating-label">Patient Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
