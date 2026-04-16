import React, { useState } from 'react';
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
      icon: Stethoscope,
      title: 'General Consultation',
      desc: 'Expert general checkups and health guidance for all age groups. Our primary care physicians are dedicated to your overall well-being.',
      detailed_desc: 'Our general consultation service provides a comprehensive assessment of your health. From routine physicals to managing chronic conditions, we use a patient-centered approach to ensure you receive the best care. We focus on listening, diagnosing, and creating a personalized health plan for you.',
      color: 'theme-blue',
      bg: 'theme-blue',
      benefits: ['Routine Physicals', 'Vaccinations', 'Chronic Disease Management', 'Health Screenings']
    },
    {
      icon: Activity,
      title: 'Health Checkups',
      desc: 'Comprehensive full-body health screenings and diagnostic tests tailored to your age and risk factors.',
      detailed_desc: 'Prevention is better than cure. Our executive health checkups are designed to detect potential health issues before they become serious. We offer packages that include blood tests, imaging, and specialist consultations to give you a complete picture of your health.',
      color: 'theme-teal',
      bg: 'theme-teal',
      benefits: ['Executive Health Pakages', 'Age-Specific Screenings', 'Nutritional Counseling', 'Lifestyle Assessment']
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      desc: 'Quick and efficient 24/7 medical response for critical situations. Our trauma team is always on standby.',
      detailed_desc: 'In a medical emergency, every second counts. Our emergency department is equipped with advanced life-support systems and staffed by trauma specialists who can handle everything from cardiac arrests to severe accidents. We prioritize immediate triage and specialized care.',
      color: 'theme-rose',
      bg: 'theme-rose',
      benefits: ['24/7 Trauma Service', 'Ambulance Support', 'Critical Care Unit', 'Immediate Triage']
    },
    {
      icon: Microscope,
      title: 'Diagnostics',
      desc: 'Advanced laboratory and imaging services for accurate results. Fast turnaround times for all tests.',
      detailed_desc: 'Accurate diagnosis is the foundation of effective treatment. Our diagnostic center features state-of-the-art laboratory equipment and imaging technology (X-ray, Ultrasound, CT Scan). Our pathologists and radiologists work closely to provide rapid and precise results.',
      color: 'theme-indigo',
      bg: 'theme-indigo',
      benefits: ['Digital X-Ray/Ultrasound', 'Pathology Lab', 'ECG/TMT Testing', 'Biopsy Services']
    },
    {
      icon: ShieldCheck,
      title: 'Preventive Healthcare',
      desc: 'Proactive strategies and wellness programs to maintain long-term health and prevent diseases.',
      detailed_desc: 'Our preventive healthcare programs focus on education and early intervention. We help you manage risks like stress, obesity, and inactivity through guided programs. Our goal is to empower you with the knowledge and tools to stay healthy.',
      color: 'theme-emerald',
      bg: 'theme-emerald',
      benefits: ['Wellness Coaching', 'Immunization Charts', 'Anti-Smoking Programs', 'Heart Health Focus']
    },
    {
      icon: Video,
      title: 'Online Consultation',
      desc: 'Connect with experts from the comfort of your home via our secure video consultation platform.',
      detailed_desc: 'Get expert medical advice without leaving your home. Our secure tele-health platform allows you to upload reports, chat with doctors, and receive digital prescriptions. Ideal for follow-ups, minor ailments, and mental health counseling.',
      color: 'theme-amber',
      bg: 'theme-amber',
      benefits: ['Secure Video Link', 'Digital Prescriptions', 'Record Management', 'Time-Saving']
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
                className={`service-explore-card ${service.bg} group`}
              >
                <div className="service-icon-box">
                  <service.icon size={40} />
                </div>
                <h3 className="service-explore-title">{service.title}</h3>
                <p className="service-explore-desc">
                  {service.desc}
                </p>
                <div className="service-explore-link">
                   <span>Learn More</span>
                   <PlusCircle size={20} className="link-icon" />
                </div>
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
                      Our clinic hosts visiting specialists across Cardiology, Orthopedics, Pediatrics, and Gynacology. We ensure you get expert advice from the best in the field without traveling outside Udaipur.
                    </p>
                    <div className="specialist-list">
                       {['Cardiology', 'Orthopedics', 'Pediatrics', 'Obstetrics & Gynaecology'].map((spec, idx) => (
                          <div key={idx} className="spec-list-item">
                             <CheckSquare size={24} className="spec-check-icon" />
                             <span className="spec-item-name">{spec}</span>
                          </div>
                       ))}
                    </div>
                    <button className="btn-white-action">
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
                 <button className="btn-call-to-action">
                    <PhoneCall size={20} />
                    <span>Call to Inquire</span>
                 </button>
                 <button className="btn-book-outline">
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
