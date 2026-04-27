import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Calendar, User, MessageSquare } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Mouse parallax effect for hero visual
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. We will get back to you shortly.');
  };

  const contactInfos = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: 'Udaipur, Rajasthan 313001',
      theme: 'theme-blue'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 (Primary Line)',
      theme: 'theme-teal'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'contact@drquresh.com',
      theme: 'theme-rose'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      {/* Creative Hero Section */}
      <section className="contact-hero-section" onMouseMove={handleMouseMove}>
        <div className="contact-hero-mesh">
          <div className="c-blob blob-1"></div>
          <div className="c-blob blob-2"></div>
        </div>

        <div className="container">
          <div className="contact-hero-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-hero-text"
            >
              <span className="contact-kicker">Get in Touch</span>
              <h1 className="contact-hero-title">
                We're Here To <br />
                <span className="gradient-text">Listen & Heal</span>
              </h1>
              <p className="contact-hero-desc">
                Whether you have a medical query, need an appointment, or want 
                to share feedback—our team is ready to assist you 24/7.
              </p>

              <div className="contact-quick-actions">
                <div className="quick-action-pill">
                  <div className="pill-icon-box-v2 blue">
                    <Phone size={18} />
                  </div>
                  <div className="pill-text-v2">
                    <small>Urgent Care</small>
                    <span>+91 XXXXX XXXXX</span>
                  </div>
                </div>
                <div className="quick-action-pill">
                  <div className="pill-icon-box-v2 emerald">
                    <Mail size={18} />
                  </div>
                  <div className="pill-text-v2">
                    <small>Email Us</small>
                    <span>contact@drquresh.com</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="contact-hero-visual">
              <motion.div 
                style={{ 
                  rotateX: -mousePos.y / 2, 
                  rotateY: mousePos.x / 2,
                  perspective: 1000 
                }}
                className="contact-visual-canvas"
              >
                <div className="contact-glass-visual">
                   <div className="visual-map-overlay">
                      <MapPin size={64} className="map-pin-glow" />
                   </div>
                   <div className="visual-stats">
                      <div className="v-stat">
                         <strong>10k+</strong>
                         <span>Patients</span>
                      </div>
                      <div className="v-stat">
                         <strong>15+</strong>
                         <span>Specialists</span>
                      </div>
                   </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="floating-contact-element e-1"
                >
                  <MessageSquare size={20} />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="floating-contact-element e-2"
                >
                  <Calendar size={20} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="contact-main-section-v2">
        <div className="contact-main-bg-mesh">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
          <div className="bg-blob blob-3"></div>
        </div>
        <div className="container">
          <div className="contact-info-grid-v2">
            {contactInfos.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`contact-info-card-v2 ${info.theme}`}
              >
                <div className={`info-icon-v2 ${info.theme}`}>
                  <info.icon size={24} />
                </div>
                <div className="info-content-v2">
                  <h4>{info.title}</h4>
                  <p>{info.details}</p>
                </div>
                <div className="card-v2-bg-design">
                  <div className="v2-shape"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="contact-layout-split-v2">
             <div className="contact-hours-column">
                <div className="contact-map-mini" style={{ padding: 0, overflow: 'hidden' }}>
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.1753123126036!2d73.71926297536315!3d24.61764187808859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e749f44c5091%3A0xe623658ce6799970!2sPIMS%20City%20HOSPITAL%3A%20DR.QURESH%20BAMBORA!5e0!3m2!1sen!2sin!4v1777266526040!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, minHeight: '250px', borderRadius: '16px' }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Clinic Location"
                   ></iframe>
                </div>

                <div className="hours-card-v2">
                   <h3 className="hours-title-v2">Appointment Hours</h3>
                   <div className="hours-rows-v2">
                      <div className="h-row">
                         <span>Mon - Sat</span>
                         <strong>9:00 AM - 8:00 PM</strong>
                      </div>
                      <div className="h-row">
                         <span>Sunday</span>
                         <strong className="closed">Closed</strong>
                      </div>
                      <div className="h-row emergency">
                         <span>Emergency</span>
                         <strong>24/7 Available</strong>
                      </div>
                   </div>
                </div>
             </div>

             <div className="contact-form-column">
                <div className="form-glass-card">
                  <div className="form-v2-header">
                     <h3>Book Your Visit</h3>
                     <p>confirm your slot within 30 minutes.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="v2-form">
                     <div className="v2-form-row">
                        <div className="v2-input-group">
                           <label><User size={14} /> Name</label>
                           <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="v2-input-group">
                           <label><Mail size={14} /> Email</label>
                           <input type="email" placeholder="john@email.com" required />
                        </div>
                     </div>
                     <div className="v2-form-row">
                        <div className="v2-input-group">
                           <label><Phone size={14} /> Phone</label>
                           <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                        </div>
                        <div className="v2-input-group">
                           <label><Calendar size={14} /> Service</label>
                           <select>
                              <option>General Consultation</option>
                              <option>Health Checkup</option>
                              <option>Diagnostics</option>
                              <option>Emergency Care</option>
                           </select>
                        </div>
                     </div>
                     <div className="v2-input-group">
                        <label><MessageSquare size={14} /> Message</label>
                        <textarea rows="4" placeholder="Briefly describe your concern..."></textarea>
                     </div>
                     <button type="submit" className="btn-v2-submit">
                        <Send size={20} />
                        <span>Send Request</span>
                     </button>
                  </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Contact;
