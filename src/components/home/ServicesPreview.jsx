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
    <section className="section-padding bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeader 
            subtitle="Our Expertise"
            title="Premium Medical Services"
          />
          <Link to="/services" className="mb-12 px-8 py-3 bg-white text-primary font-bold rounded-xl border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-sm">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group hover:bg-white hover:-translate-y-2 transition-all p-10"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon size={32} className={service.color} />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">{service.title}</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link to="/services" className="text-primary font-bold flex items-center space-x-2 group-hover:space-x-4 transition-all">
                <span>Explore Details</span>
                <PlusCircle size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
