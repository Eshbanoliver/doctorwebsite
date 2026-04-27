import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Business Owner',
      text: 'The best medical experience I have ever had. The glass UI on their reports is so modern and easy to read.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Anjali Gupta',
      role: 'Teacher',
      text: 'I was impressed by the quick response and the cleanliness of the clinic. The online consultation is great!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Vikram Singh',
      role: 'IT Professional',
      text: 'Highly recommended for premium care. The diagnostic reports were accurate and delivered within hours.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Priya Mehta',
      role: 'Software Engineer',
      text: 'The care I received was exceptional. The staff was attentive and the facility was top-notch.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Retired Officer',
      text: 'Very satisfied with the treatment. Recovery process was explained clearly and follow-ups helpful.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Sneha Patel',
      role: 'Designer',
      text: 'Modern clinic with a welcoming atmosphere. I felt comfortable and well-cared for from start to finish.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Amit Varma',
      role: 'Analyst',
      text: 'State-of-the-art technology. I got my results quickly and the doctors were very knowledgeable.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Meera Reddy',
      role: 'Artist',
      text: 'A truly patient-centric approach. They listen to your concerns and provide personalized care.',
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
