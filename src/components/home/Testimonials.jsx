import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Business Owner',
      text: 'The best medical experience I have ever had. The glass UI on their reports is so modern and easy to read. Doctors are very professional.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Anjali Gupta',
      role: 'Teacher',
      text: 'I was impressed by the quick response and the cleanliness of the clinic. The online consultation feature saved me so much time!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Vikram Singh',
      role: 'IT Professional',
      text: 'Highly recommended for anyone looking for premium care. The diagnostic reports were accurate and delivered within hours.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <section className="testimonials-section highlight-bg">
      {/* Decorative Blur */}
      <div className="testimonials-bg-blur"></div>
      
      <div className="container">
        <SectionHeader 
          subtitle="Patient Feedback"
          title="What Our Patients Say"
          centered
        />

        <div className="testimonials-grid">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card glass-card group"
            >
              <Quote className="quote-watermark" size={60} />
              
              <div className="star-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="star-icon-filled" />
                ))}
              </div>

              <p className="testimonial-text">
                "{testi.text}"
              </p>

              <div className="testimonial-user-profile">
                <div className="user-avatar-wrapper">
                  <img src={testi.image} alt={testi.name} className="user-avatar-img" />
                </div>
                <div className="user-info-text">
                  <h4 className="user-name">{testi.name}</h4>
                  <div className="user-role">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
