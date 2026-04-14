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
    <section className="faq-preview-section bg-white">
      <div className="container">
        <div className="faq-preview-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="faq-preview-text-side"
          >
            <SectionHeader 
              subtitle="Common Inquiries"
              title="Frequently Asked Questions"
            />
            <p className="faq-preview-intro">
              Find quick answers to your questions about our services, appointments, and medical care. If you need more information, feel free to visit our full FAQ page.
            </p>
            <Link to="/faq" className="faq-preview-more-link group">
              <span>Visit Full FAQ Page</span>
              <ChevronRight size={24} className="chevron-icon" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="faq-accordion-stack"
          >
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-preview-item glass-card ${activeIndex === idx ? 'faq-item-active' : ''}`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  className="faq-preview-btn"
                >
                  <span className="faq-preview-question">{faq.question}</span>
                  {activeIndex === idx ? <Minus size={24} /> : <Plus size={24} className="faq-plus-icon" />}
                </button>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-preview-answer-container"
                    >
                      <div className="faq-preview-answer-text">
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
