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

const TreatmentsPreview = () => {
  const treatments = [
    {
      icon: Stethoscope,
      title: 'Surgical Oncology',
      desc: 'Expert surgical management of Head & Neck, Thoracic, and Gastrointestinal cancers.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: 'Cancer Therapy',
      desc: 'Advanced Medical Oncology including Hormone Therapy and chemotherapy management.',
      color: 'text-teal-500',
      bg: 'bg-teal-50'
    },
    {
      icon: Activity,
      title: 'Minimally Invasive Surgery',
      desc: 'Laparoscopic and robotic-assisted surgeries for quicker recovery and precision.',
      color: 'text-rose-500',
      bg: 'bg-rose-50'
    },
    {
      icon: Microscope,
      title: 'Uro & Gynae Oncology',
      desc: 'Specialized care for bladder, kidney, uterus, and gynecologic cancers.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50'
    },
    {
      icon: Shield,
      title: 'Radiation Oncology',
      desc: 'Precision radiotherapy and radio therapy center services for effective treatment.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      icon: Video,
      title: 'Online Consultations',
      desc: 'Access expert oncology guidance from anywhere with our digital health portal.',
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
            title="Advanced Oncology Treatments"
          />
          <Link to="/treatments" className="btn-utility">
            View All Treatments
          </Link>
        </div>

        <div className="services-preview-grid">
          {treatments.map((treatment, idx) => (
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
              className={`service-preview-card ${treatment.bg} group`}
            >
              <div className={`service-icon-container ${treatment.bg}`}>
                <treatment.icon size={32} className={`${treatment.color} transition-transform duration-500 group-hover:rotate-12`} />
              </div>
              
              <h3 className="service-card-title">{treatment.title}</h3>
              <p className="service-card-desc">
                {treatment.desc}
              </p>
              
              <Link to="/treatments" className="service-card-link">
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

export default TreatmentsPreview;
