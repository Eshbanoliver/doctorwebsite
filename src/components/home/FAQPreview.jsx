import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronRight, Shield } from 'lucide-react';
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
    <section className="faq-preview-section-v2 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="faq-v2-bg-glow glow-1"></div>
      <div className="faq-v2-bg-glow glow-2"></div>

      <div className="container relative z-10">
        <div className="faq-v2-layout">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="faq-v2-header-side"
          >
            <SectionHeader 
              subtitle="Common Inquiries"
              title="Frequently Asked Questions"
            />
            <p className="faq-v2-intro">
              Find quick answers to your questions about our services, appointments, and medical care.
            </p>
            
            <div className="faq-v2-support-card">
              <div className="support-icon-v2">
                <Shield size={32} />
              </div>
              <div className="support-text-v2">
                <h4>Need more help?</h4>
                <p>Visit our dedicated support center for detailed guides.</p>
              </div>
            </div>

            <Link to="/faq" className="faq-v2-main-link group">
              <span>Visit Full FAQ Page</span>
              <div className="link-circle-v2">
                <ChevronRight size={20} />
              </div>
            </Link>
          </motion.div>

          <div className="faq-v2-grid-side">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                className={`faq-v2-card ${activeIndex === idx ? 'faq-v2-active' : ''}`}
              >
                <div className="faq-v2-card-head">
                   <span className="faq-v2-q-text">{faq.question}</span>
                   <div className="faq-v2-toggle-icon">
                     {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                   </div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-v2-answer-box"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
