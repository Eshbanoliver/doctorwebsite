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
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-[-100px] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
      
      <div className="container">
        <SectionHeader 
          subtitle="Patient Feedback"
          title="What Our Patients Say"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card bg-white p-10 relative group hover:-translate-y-2 transition-all border-none shadow-sm hover:shadow-2xl"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={60} />
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-amber-400" />
                ))}
              </div>

              <p className="text-text-muted italic mb-8 relative z-10 leading-relaxed">
                "{testi.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">{testi.name}</h4>
                  <div className="text-xs text-text-muted font-medium uppercase tracking-wider">{testi.role}</div>
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
