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
    <div className="contact-page bg-slate-50 pb-20">
      <section className="section-padding relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-grad-primary/5 -skew-x-12 translate-x-1/4 -z-10"></div>
        
        <div className="container">
          <SectionHeader 
            subtitle="Connect With Us"
            title="We're Here To Listen & Heal"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 mt-12">
            {contactInfos.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="info-card group"
              >
                <div className={`info-icon-box ${info.color}`}>
                  <info.icon size={30} />
                </div>
                <h4 className="text-xl font-bold text-text-main mb-2">{info.title}</h4>
                <p className="text-text-muted font-medium">{info.details}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             {/* Map Placeholder */}
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                <div className="map-card">
                   <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-text-muted">
                      <MapPin size={60} className="mb-4 opacity-20" />
                      <span className="font-bold text-lg opacity-40 italic">Google Map Placeholder</span>
                   </div>
                </div>

                <div className="hours-card">
                   <h3 className="text-2xl font-bold mb-6">Appointment Hours</h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                         <span className="font-medium opacity-80">Monday - Saturday</span>
                         <span className="font-bold uppercase tracking-wider">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                         <span className="font-medium opacity-80">Sunday</span>
                         <span className="font-bold uppercase tracking-wider text-rose-300">Closed</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="font-medium opacity-80">Emergency</span>
                         <span className="font-bold uppercase tracking-wider text-emerald-300">24/7 Service</span>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Contact/Appointment Form */}
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="contact-form-card"
             >
                <div className="mb-10">
                   <h3 className="text-3xl font-bold text-text-main mb-4">Book Your Visit</h3>
                   <p className="text-text-muted">Fill in the details below and we will confirm your slot within 30 minutes.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="form-group">
                         <label className="form-label">
                            <User size={16} className="text-primary" />
                            <span>Full Name</span>
                         </label>
                         <input 
                           type="text" 
                           placeholder="John Doe"
                           required
                           className="form-input"
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                         />
                      </div>
                      <div className="form-group">
                         <label className="form-label">
                            <Mail size={16} className="text-primary" />
                            <span>Email Address</span>
                         </label>
                         <input 
                           type="email" 
                           placeholder="john@example.com"
                           required
                           className="form-input"
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="form-group">
                         <label className="form-label">
                            <Phone size={16} className="text-primary" />
                            <span>Phone Number</span>
                         </label>
                         <input 
                           type="tel" 
                           placeholder="+91 XXXXX XXXXX"
                           required
                           className="form-input"
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                         />
                      </div>
                      <div className="form-group">
                         <label className="form-label">
                            <Calendar size={16} className="text-primary" />
                            <span>Select Service</span>
                         </label>
                         <select 
                           className="form-input appearance-none"
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

                   <div className="form-group">
                      <label className="form-label">
                         <MessageSquare size={16} className="text-primary" />
                         <span>Message / Symptoms (Optional)</span>
                      </label>
                      <textarea 
                        rows="4"
                        placeholder="Tell us briefly about your concern..."
                        className="form-input resize-none"
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-primary-dark transition-all shadow-xl hover:shadow-primary/30"
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
