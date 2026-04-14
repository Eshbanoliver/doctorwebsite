import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Activity, 
  PlusCircle, 
  Zap, 
  Microscope, 
  Shield, 
  Video 
} from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Consultation',
      desc: 'Expert general checkups and health guidance for all age groups.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: Activity,
      title: 'Health Checkups',
      desc: 'Comprehensive full-body health screenings and diagnostic tests.',
      color: 'text-teal-500',
      bg: 'bg-teal-50'
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      desc: 'Quick and efficient 24/7 medical response for critical situations.',
      color: 'text-rose-500',
      bg: 'bg-rose-50'
    },
    {
      icon: Microscope,
      title: 'Diagnostics',
      desc: 'Advanced laboratory and imaging services for accurate results.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50'
    },
    {
      icon: Shield,
      title: 'Preventive Healthcare',
      desc: 'Proactive strategies to maintain long-term health and wellness.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      icon: Video,
      title: 'Online Consultation',
      desc: 'Connect with experts from the comfort of your home.',
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    }
  ];

  return (
    <section className="services-preview-section highlight-bg">
      <div className="container">
        <div className="services-preview-header">
          <SectionHeader 
            subtitle="Our Expertise"
            title="Premium Medical Services"
          />
          <Link to="/services" className="btn-utility">
            View All Services
          </Link>
        </div>

        <div className="services-preview-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`service-preview-card ${service.bg} group`}
            >
              <div className={`service-icon-container ${service.bg}`}>
                <service.icon size={32} className={`${service.color} transition-transform duration-500 group-hover:rotate-12`} />
              </div>
              
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">
                {service.desc}
              </p>
              
              <Link to="/services" className="service-card-link">
                <span>Explore Details</span>
                <PlusCircle size={20} className="link-icon" />
              </Link>

              {/* Decorative Subtle Gradient Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/5 blur-3xl rounded-full group-hover:bg-blue-400/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
