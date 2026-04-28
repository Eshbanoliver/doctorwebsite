import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'A Grateful Patient',
      role: 'Cancer Survivor',
      text: 'The level of care and expertise provided during my cancer treatment was outstanding. I felt supported every step of the way.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Family Member',
      role: 'Patient Relative',
      text: 'We were terrified when we heard the diagnosis, but the precise surgical approach and compassionate guidance gave us hope and a clear path to recovery.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Anonymous',
      role: 'Recovering Patient',
      text: 'Highly recommended for premium oncology care. The minimally invasive surgery allowed me to recover much faster than I ever expected.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'P. M.',
      role: 'Oncology Patient',
      text: 'The comprehensive approach to my treatment made all the difference. The entire team was incredibly attentive and professional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Former Patient',
      role: 'Cancer Survivor',
      text: 'Very satisfied with the surgical treatment. The recovery process was explained clearly and the follow-up care was excellent.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Patient S.',
      role: 'Patient',
      text: 'A modern, clean facility with a welcoming atmosphere. I felt comfortable and well-cared for from the moment I walked in.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'V. A.',
      role: 'Patient',
      text: 'State-of-the-art surgical technology. I am so grateful for the expert hands that guided me through a very complex procedure.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Anonymous',
      role: 'Patient Relative',
      text: 'A truly patient-centric approach to cancer care. They listened to our concerns and provided personalized, empathetic care.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
    }
  ];

  // Double the array for seamless infinite scroll
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section highlight-bg overflow-hidden">
      <div className="testimonials-bg-blur"></div>
      
      <div className="container">
        <SectionHeader 
          subtitle="Patient Feedback"
          title="What Our Patients Say"
          centered
        />
      </div>

      <div className="testimonial-track-container">
        <motion.div 
          className="testimonial-track"
          animate={{
            x: [0, -1 * (testimonials.length * 432)] // Calculate total width
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {scrollingTestimonials.map((testi, idx) => (
            <div key={idx} className="testimonial-card-v2 glass-card">
              <Quote className="quote-watermark-v2" size={80} />
              
              <div className="star-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              <p className="testimonial-text-v2">
                "{testi.text}"
              </p>

              <div className="testimonial-user-profile-v2">
                <div className="user-avatar-wrapper-v2">
                  <div className="user-avatar-initials">
                    {testi.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="user-info-text-v2">
                  <h4 className="user-name-v2">{testi.name}</h4>
                  <div className="user-role-v2">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
