import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import SectionHeader from '../components/ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Activity, 
  PlusCircle, 
  Zap, 
  Microscope, 
  ShieldCheck, 
  Video, 
  X, 
  PhoneCall, 
  CheckSquare 
} from 'lucide-react';
import CTASection from '../components/home/CTASection';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  // Mouse parallax effect for hero visual
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const services = [
    {
      icon: Activity,
      title: 'Medical & Radiation Oncology',
      desc: 'Comprehensive cancer therapies including chemotherapy, hormone therapy, and precise radiation treatments.',
      detailed_desc: 'Our medical and radiation oncology departments provide a full spectrum of treatments. We specialize in systemic cancer therapy, hormone therapy (including breast cancer), and state-of-the-art radiation treatments to maximize efficacy while minimizing side effects.',
      color: 'theme-teal',
      bg: 'theme-teal',
      benefits: ['Medical Oncology', 'Radiation Oncology', 'Breast Cancer Treatment (including Hormone Therapy)', 'Cancer Therapy & Rehabilitation']
    },
    {
      icon: Stethoscope,
      title: 'Advanced Surgical Oncology',
      desc: 'Expert surgical management utilizing cutting-edge techniques for complex oncological procedures.',
      detailed_desc: 'We utilize cutting-edge surgical techniques, including minimally invasive and laparoscopic surgeries, to treat various types of cancers. Our expertise ensures precise tumor removal, faster recovery times, and improved patient outcomes.',
      color: 'theme-blue',
      bg: 'theme-blue',
      benefits: ['Surgical Oncology', 'Minimally Invasive Cancer Surgery', 'Laparoscopic Cancer Surgery', 'Head & Neck Cancer Treatment']
    },
    {
      icon: Microscope,
      title: 'Organ-Specific Cancer Care',
      desc: 'Specialized care and advanced treatment plans for specific organs and localized cancers.',
      detailed_desc: 'Our specialists are dedicated to organ-specific care, providing tailored treatment plans for a wide range of cancers. We use an interdisciplinary approach to ensure the most effective treatment for complex cases.',
      color: 'theme-indigo',
      bg: 'theme-indigo',
      benefits: ['Gastrointestinal & Colorectal Cancer Treatment', 'Thoracic Cancer Treatment', 'Pancreatic Cancer Treatment', 'Kidney & Bladder Cancer Treatment', 'Uterus & Gynecologic Oncology']
    },
    {
      icon: ShieldCheck,
      title: 'Specialized Oncology',
      desc: 'Dedicated oncology services for specialized conditions and specific demographics.',
      detailed_desc: 'We offer specialized oncology care that requires specific expertise. Whether it is treating children, addressing neurological tumors, or managing orthopedic cancers, our specialists are equipped to handle unique oncology needs.',
      color: 'theme-emerald',
      bg: 'theme-emerald',
      benefits: ['Pediatric Oncology', 'Urologic Oncology', 'Orthopedic Oncology', 'Neuro Oncology', 'Skin Oncology']
    },
    {
      icon: Video,
      title: 'Diagnostics & Support',
      desc: 'Accurate diagnosis, online consultations, and compassionate support throughout your journey.',
      detailed_desc: 'From early detection to post-treatment care, we provide comprehensive support. We offer advanced screening, virtual consultations for convenience, and psycho-oncology support to address the emotional aspects of a cancer diagnosis.',
      color: 'theme-amber',
      bg: 'theme-amber',
      benefits: ['Cancer Diagnosis & Screening', 'Online Oncology Consultation', 'Psycho-Oncology Support']
    }
  ];

  return (
    <div className="services-page-container">
      {/* Creative Hero Section */}
      <section className="services-hero-section" onMouseMove={handleMouseMove}>
        <div className="services-hero-mesh">
          <div className="s-blob blob-1"></div>
          <div className="s-blob blob-2"></div>
        </div>

        <div className="container">
          <div className="services-hero-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="services-hero-text-side"
            >
              <span className="services-hero-kicker">Precision in Practice</span>
              <h1 className="services-hero-title">
                Comprehensive <br />
                <span className="gradient-text">Medical Solutions</span>
              </h1>
              <p className="services-hero-desc">
                We provide a wide range of specialized medical services designed to meet 
                the unique needs of every patient. Our approach is defined by precision 
                medicine and the pursuit of long-term wellness.
              </p>
              
              <div className="services-hero-badges">
                <div className="hero-badge iso">
                  <div className="badge-icon-box blue">
                    <ShieldCheck size={20} />
                  </div>
                  <span>ISO Certified</span>
                </div>
                <div className="hero-badge response">
                  <div className="badge-icon-box emerald">
                    <Activity size={20} />
                  </div>
                  <span>24/7 Response</span>
                </div>
              </div>
            </motion.div>

            <div className="services-hero-visual-side">
              <motion.div 
                style={{ 
                  rotateX: -mousePos.y / 2, 
                  rotateY: mousePos.x / 2,
                  perspective: 1000 
                }}
                className="services-visual-canvas"
              >
                <div className="visual-glass-stack">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                    alt="Medical Tech" 
                    className="services-main-img"
                  />
                  <div className="glass-reflection"></div>
                </div>

                {/* Floating Service Icons */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="floating-service-icon s-1"
                >
                  <Stethoscope size={24} />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="floating-service-icon s-2"
                >
                  <Microscope size={24} />
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="floating-service-icon s-3"
                >
                  <Zap size={24} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-explore-section">
        <div className="container">
          <div className="services-main-grid">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedService(service)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
                className={`service-explore-card ${service.bg} group`}
              >
                <div className="card-bg-number">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
                <div className="service-icon-box">
                  <service.icon size={40} />
                </div>
                <h3 className="service-explore-title">{service.title}</h3>
                <p className="service-explore-desc">
                  {service.desc}
                </p>
                <div className="service-explore-link" onClick={(e) => {
                  e.stopPropagation();
                  navigate('/contact');
                }}>
                   <span>Contact Us</span>
                   <div className="link-icon-wrapper">
                     <PlusCircle size={20} className="link-icon" />
                   </div>
                </div>
                <div className="card-hover-glow"></div>
                <div className="card-decorative-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                </div>
                <div className="card-grid-pattern"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Consultations Detail */}
      <section className="specialist-consult-section">
        <div className="container">
           <div className="specialist-box-card">
              <div className="specialist-layout-grid">
                 <div className="specialist-text-content">
                    <h2 className="specialist-main-title">Specialist Consultations</h2>
                    <p className="specialist-sub-desc">
                      Our clinic hosts expert specialists across Surgical, Medical, and Radiation Oncology. We ensure you get comprehensive and advanced cancer care under one roof.
                    </p>
                    <div className="specialist-list">
                       {['Surgical Oncology', 'Medical Oncology', 'Radiation Oncology', 'Psychiatric Oncology'].map((spec, idx) => (
                          <div key={idx} className="spec-list-item">
                             <CheckSquare size={24} className="spec-check-icon" />
                             <span className="spec-item-name">{spec}</span>
                          </div>
                       ))}
                    </div>
                    <button 
                      className="btn-white-action"
                      onClick={() => navigate('/contact')}
                    >
                       Get Specialist Appointment
                    </button>
                 </div>
                 <div className="specialist-visual-side">
                    <img 
                      src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600" 
                      alt="Specialist" 
                      className="specialist-hero-img float-anim"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="modal-overlay-backdrop" onClick={() => setSelectedService(null)}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="service-details-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="modal-close-btn"
              >
                <X size={32} />
              </button>

              <div className={`modal-icon-container ${selectedService.bg}`}>
                <selectedService.icon size={50} className={selectedService.color} />
              </div>

              <h2 className="modal-title-text">{selectedService.title}</h2>
              <p className="modal-detailed-desc">
                {selectedService.detailed_desc}
              </p>

              <h4 className="modal-subtitle">Key Benefits:</h4>
              <div className="modal-benefits-grid">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="benefit-item">
                    <div className="benefit-dot"></div>
                    <span className="benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="modal-actions-box">
                  <button 
                    className="btn-call-to-action"
                    onClick={() => window.location.href = 'tel:+919999999999'}
                  >
                     <PhoneCall size={20} />
                     <span>Call to Inquire</span>
                  </button>
                  <button 
                    className="btn-book-outline"
                    onClick={() => navigate('/contact')}
                  >
                     Book This Service
                  </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <CTASection />
    </div>
  );
};

export default Services;
