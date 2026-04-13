import React, { useState } from 'react';
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
    <div className="pt-32 pb-20 min-height-screen bg-slate-50">
      <section className="section-padding relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="container">
          <SectionHeader 
            subtitle="Help Center"
            title="Everything You Need To Know"
            centered
          />
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-20 relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search for questions (e.g. Appointment, Insurance)..."
              className="w-full pl-16 pr-8 py-5 rounded-2xl glass-card bg-white border-none shadow-lg outline-none focus:ring-2 focus:ring-primary/20 text-lg transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx} 
                  className={`glass-card border-none transition-all duration-500 rounded-3xl overflow-hidden ${activeIndex === idx ? 'bg-primary text-white shadow-2xl' : 'bg-white hover:shadow-xl'}`}
                >
                  <button 
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full px-8 py-8 flex items-center justify-between text-left"
                  >
                    <div className="flex flex-col">
                      <span className={`text-xs uppercase tracking-widest font-bold mb-2 opacity-60 ${activeIndex === idx ? 'text-white' : 'text-primary'}`}>
                        {faq.category}
                      </span>
                      <span className="text-xl font-bold">{faq.question}</span>
                    </div>
                    <div className={`p-2 rounded-full transition-all ${activeIndex === idx ? 'bg-white/20' : 'bg-primary/5'}`}>
                      {activeIndex === idx ? <Minus size={24} /> : <Plus size={24} className="text-primary" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-10 pt-0 opacity-90 text-lg leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 glass-card bg-white rounded-3xl">
                <p className="text-xl text-text-muted">No questions found matching your search. Try different keywords.</p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-20 max-w-4xl mx-auto text-center p-12 glass-card bg-grad-primary text-white rounded-[40px] shadow-2xl">
             <h3 className="text-3xl font-bold mb-6">Still have questions?</h3>
             <p className="text-lg opacity-90 mb-10">
               If you couldn't find the answer you were looking for, feel free to reach out to us directly.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-xl">
                   <MessageCircle size={24} />
                   <span>Chat with Us</span>
                </button>
                <button className="px-10 py-5 glass-card bg-white/20 border-white/30 rounded-2xl font-bold">
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
