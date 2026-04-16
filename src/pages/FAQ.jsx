import React, { useState } from 'react';
import './FAQ.css';
import SectionHeader from '../components/ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'General',
      question: 'What are your clinic working hours?',
      answer: 'Our clinic is open Monday to Saturday from 9:00 AM to 8:00 PM. We also offer emergency services 24/7 on call for established patients.'
    },
    {
      category: 'Appointments',
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment by clicking the "Book Appointment" button on our homepage, via WhatsApp at +91 00000 00000, or by calling our helpdesk.'
    },
    {
      category: 'Services',
      question: 'Do you offer online medical consultations?',
      answer: 'Yes, we provide high-quality video consultations with our specialists. You can book an online appointment through our website. After booking, you will receive a secure video link via SMS/Email.'
    },
    {
      category: 'Insurance',
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major medical insurance plans including Star Health, HDFC Ergo, and government schemes like Bhamashah/Ayushman Bharat. Please contact our reception for a full list.'
    },
    {
      category: 'General',
      question: 'Is parking available at the clinic?',
      answer: 'Yes, we have dedicated free parking for patients and their families right in front of the clinic premises in Udaipur.'
    },
    {
      category: 'Services',
      question: 'Do you provide home sample collection for lab tests?',
      answer: 'Yes, we offer home sample collection services within a 10km radius of Udaipur city. You can book this service at least 12 hours in advance.'
    },
    {
      category: 'General',
      question: 'What should I bring for my first visit?',
      answer: 'Please bring a valid ID card, any previous medical records or prescriptions, and your insurance card if applicable.'
    },
    {
      category: 'Emergency',
      question: 'What should I do in case of a medical emergency at night?',
      answer: 'Call our emergency helpline immediately. Our trauma team will guide you on the next steps or dispatch an ambulance if required.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-page-wrapper">
      {/* Creative FAQ Hero */}
      <section className="faq-hero-section">
        <div className="faq-hero-mesh">
          <div className="f-blob f-blob-1"></div>
          <div className="f-blob f-blob-2"></div>
        </div>

        <div className="container">
          <div className="faq-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="faq-kicker">Help Center</span>
              <h1 className="faq-hero-title">
                Everything You <br />
                <span className="gradient-text">Need To Know</span>
              </h1>
              <p className="faq-hero-desc">
                Find answers to common questions about our medical services, 
                appointments, and patient care standards.
              </p>

              {/* Enhanced Search Experience */}
              <div className="faq-hero-search-wrapper">
                <div className="search-pill-container">
                  <Search className="search-pill-icon" />
                  <input 
                    type="text" 
                    placeholder="Search for questions (e.g. Appointment, Insurance)..."
                    className="search-pill-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="search-shortcut">
                    <span>⌘K</span>
                  </div>
                </div>

                <div className="quick-tags">
                  <span className="tags-label">Quick Search:</span>
                  {['General', 'Emergency', 'Insurance', 'Reports'].map((tag) => (
                    <button 
                      key={tag} 
                      className="tag-btn"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="faq-list-section">
        <div className="container">
          {/* Categories / Filter maybe? */}

          <div className="faq-accordion-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx} 
                  className={`faq-accordion-item ${activeIndex === idx ? 'expanded' : ''}`}
                >
                  <button 
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="faq-trigger-btn"
                  >
                    <div className="faq-trigger-content">
                      <span className="faq-item-category">
                        {faq.category}
                      </span>
                      <span className="faq-item-question">{faq.question}</span>
                    </div>
                    <div className={`faq-icon-badge ${activeIndex === idx ? 'badge-active' : ''}`}>
                      {activeIndex === idx ? <Minus size={24} /> : <Plus size={24} className="text-primary" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer-container"
                      >
                        <div className="faq-answer-text">
                           {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="faq-no-results">
                <p className="no-results-text">No questions found matching your search. Try different keywords.</p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="faq-contact-cta">
             <h3 className="cta-main-title">Still have questions?</h3>
             <p className="cta-sub-title">
               If you couldn't find the answer you were looking for, feel free to reach out to us directly.
             </p>
             <div className="cta-action-group">
                <button className="btn-chat-action">
                   <MessageCircle size={24} />
                   <span>Chat with Us</span>
                </button>
                <button className="btn-call-action-glass">
                   Call Support
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
