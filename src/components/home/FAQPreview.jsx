import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What are your clinic working hours?',
      answer: 'Our clinic is open Monday to Saturday from 9:00 AM to 8:00 PM. We also offer emergency services 24/7.'
    },
    {
      question: 'Do you offer online medical consultations?',
      answer: 'Yes, we provide high-quality video consultations with our specialists. You can book an online appointment through our website or call us.'
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment by clicking the "Book Appointment" button on our homepage, via WhatsApp, or by calling our helpdesk.'
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major medical insurance plans. Please contact our reception with your insurance details for verification.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              subtitle="Common Inquiries"
              title="Frequently Asked Questions"
            />
            <p className="text-lg text-text-muted mb-10 leading-relaxed">
              Find quick answers to your questions about our services, appointments, and medical care. If you need more information, feel free to visit our full FAQ page.
            </p>
            <Link to="/faq" className="group flex items-center space-x-3 text-primary font-bold text-lg hover:space-x-4 transition-all">
              <span>Visit Full FAQ Page</span>
              <ChevronRight size={24} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`glass-card border-none transition-all ${activeIndex === idx ? 'bg-primary text-white' : 'bg-slate-50 hover:bg-white hover:shadow-lg'}`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  {activeIndex === idx ? <Minus size={24} /> : <Plus size={24} className={activeIndex === idx ? 'text-white' : 'text-primary'} />}
                </button>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 opacity-90 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
