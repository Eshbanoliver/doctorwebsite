import React, { useState } from 'react';
import './Contact.css';
import SectionHeader from '../components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Calendar, Clock, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. We will get back to you shortly.');
  };

  const contactInfos = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: 'Udaipur, Rajasthan 313001',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 (Leave Blank)',
      color: 'bg-teal-500'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'contact@doctor.com',
      color: 'bg-rose-500'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      <section className="contact-hero-section">
        {/* Decorative Background */}
        <div className="contact-bg-decoration"></div>
        
        <div className="container">
          <SectionHeader 
            subtitle="Connect With Us"
            title="We're Here To Listen & Heal"
            centered
          />

          <div className="contact-info-grid">
            {contactInfos.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="contact-info-card group"
              >
                <div className={`info-icon-container ${info.color}`}>
                  <info.icon size={30} className="icon-white" />
                </div>
                <h4 className="info-card-title">{info.title}</h4>
                <p className="info-card-details">{info.details}</p>
              </motion.div>
            ))}
          </div>

          <div className="contact-main-layout">
             {/* Map Placeholder */}
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="contact-side-info"
             >
                <div className="contact-map-card">
                   <div className="map-placeholder-box">
                      <MapPin size={60} className="map-icon-bg" />
                      <span className="map-text-sub">Google Map Placeholder</span>
                   </div>
                </div>

                <div className="contact-hours-card">
                   <h3 className="hours-title">Appointment Hours</h3>
                   <div className="hours-list">
                      <div className="hours-row">
                         <span className="day-text">Monday - Saturday</span>
                         <span className="time-text">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="hours-row">
                         <span className="day-text">Sunday</span>
                         <span className="time-text text-closed">Closed</span>
                      </div>
                      <div className="hours-row no-border">
                         <span className="day-text">Emergency</span>
                         <span className="time-text text-emergency">24/7 Service</span>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Contact/Appointment Form */}
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="contact-form-container glass-card"
             >
                <div className="form-header">
                   <h3 className="form-main-title">Book Your Visit</h3>
                   <p className="form-sub-text">Fill in the details below and we will confirm your slot within 30 minutes.</p>
                </div>

                <form onSubmit={handleSubmit} className="appointment-form">
                   <div className="form-row-grid">
                      <div className="form-input-group">
                         <label className="form-input-label">
                            <User size={16} className="label-icon" />
                            <span>Full Name</span>
                         </label>
                         <input 
                           type="text" 
                           placeholder="John Doe"
                           required
                           className="form-control-input"
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                         />
                      </div>
                      <div className="form-input-group">
                         <label className="form-input-label">
                            <Mail size={16} className="label-icon" />
                            <span>Email Address</span>
                         </label>
                         <input 
                           type="email" 
                           placeholder="john@example.com"
                           required
                           className="form-control-input"
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                         />
                      </div>
                   </div>

                   <div className="form-row-grid">
                      <div className="form-input-group">
                         <label className="form-input-label">
                            <Phone size={16} className="label-icon" />
                            <span>Phone Number</span>
                         </label>
                         <input 
                           type="tel" 
                           placeholder="+91 XXXXX XXXXX"
                           required
                           className="form-control-input"
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                         />
                      </div>
                      <div className="form-input-group">
                         <label className="form-input-label">
                            <Calendar size={16} className="label-icon" />
                            <span>Select Service</span>
                         </label>
                         <select 
                           className="form-control-input select-styled"
                           onChange={(e) => setFormData({...formData, service: e.target.value})}
                         >
                            <option value="">General Consultation</option>
                            <option value="">Health Checkup</option>
                            <option value="">Diagnostics</option>
                            <option value="">Emergency Care</option>
                            <option value="">Specialist Consultation</option>
                         </select>
                      </div>
                   </div>

                   <div className="form-input-group">
                      <label className="form-input-label">
                         <MessageSquare size={16} className="label-icon" />
                         <span>Message / Symptoms (Optional)</span>
                      </label>
                      <textarea 
                        rows="4"
                        placeholder="Tell us briefly about your concern..."
                        className="form-control-input textarea-styled"
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     className="btn-submit-appointment"
                   >
                      <Send size={24} />
                      <span>Request Appointment</span>
                   </button>
                </form>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
