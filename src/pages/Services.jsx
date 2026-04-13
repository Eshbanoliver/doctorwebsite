import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Activity, 
  PlusCircle, 
  Zap, 
  Microscope, 
  Shield, 
  Video, 
  X, 
  PhoneCall, 
  CheckSquare 
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Stethoscope,
      title: 'General Consultation',
      desc: 'Expert general checkups and health guidance for all age groups. Our primary care physicians are dedicated to your overall well-being.',
      detailed_desc: 'Our general consultation service provides a comprehensive assessment of your health. From routine physicals to managing chronic conditions, we use a patient-centered approach to ensure you receive the best care. We focus on listening, diagnosing, and creating a personalized health plan for you.',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      benefits: ['Routine Physicals', 'Vaccinations', 'Chronic Disease Management', 'Health Screenings']
    },
    {
      icon: Activity,
      title: 'Health Checkups',
      desc: 'Comprehensive full-body health screenings and diagnostic tests tailored to your age and risk factors.',
      detailed_desc: 'Prevention is better than cure. Our executive health checkups are designed to detect potential health issues before they become serious. We offer packages that include blood tests, imaging, and specialist consultations to give you a complete picture of your health.',
      color: 'text-teal-500',
      bg: 'bg-teal-50',
      benefits: ['Executive Health Pakages', 'Age-Specific Screenings', 'Nutritional Counseling', 'Lifestyle Assessment']
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      desc: 'Quick and efficient 24/7 medical response for critical situations. Our trauma team is always on standby.',
      detailed_desc: 'In a medical emergency, every second counts. Our emergency department is equipped with advanced life-support systems and staffed by trauma specialists who can handle everything from cardiac arrests to severe accidents. We prioritize immediate triage and specialized care.',
      color: 'text-rose-500',
      bg: 'bg-rose-50',
      benefits: ['24/7 Trauma Service', 'Ambulance Support', 'Critical Care Unit', 'Immediate Triage']
    },
    {
      icon: Microscope,
      title: 'Diagnostics',
      desc: 'Advanced laboratory and imaging services for accurate results. Fast turnaround times for all tests.',
      detailed_desc: 'Accurate diagnosis is the foundation of effective treatment. Our diagnostic center features state-of-the-art laboratory equipment and imaging technology (X-ray, Ultrasound, CT Scan). Our pathologists and radiologists work closely to provide rapid and precise results.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
      benefits: ['Digital X-Ray/Ultrasound', 'Pathology Lab', 'ECG/TMT Testing', 'Biopsy Services']
    },
    {
      icon: ShieldCheck,
      title: 'Preventive Healthcare',
      desc: 'Proactive strategies and wellness programs to maintain long-term health and prevent diseases.',
      detailed_desc: 'Our preventive healthcare programs focus on education and early intervention. We help you manage risks like stress, obesity, and inactivity through guided programs. Our goal is to empower you with the knowledge and tools to stay healthy.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      benefits: ['Wellness Coaching', 'Immunization Charts', 'Anti-Smoking Programs', 'Heart Health Focus']
    },
    {
      icon: Video,
      title: 'Online Consultation',
      desc: 'Connect with experts from the comfort of your home via our secure video consultation platform.',
      detailed_desc: 'Get expert medical advice without leaving your home. Our secure tele-health platform allows you to upload reports, chat with doctors, and receive digital prescriptions. Ideal for follow-ups, minor ailments, and mental health counseling.',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      benefits: ['Secure Video Link', 'Digital Prescriptions', 'Record Management', 'Time-Saving']
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container">
          <SectionHeader 
            subtitle="Expert Care"
            title="Comprehensive Medical Services"
            centered
          />
          <p className="text-xl text-text-muted text-center max-w-3xl mx-auto mb-20 leading-relaxed">
            We provide a wide range of specialized medical services designed to meet the unique needs of every patient. Our approach is defined by precision, compassion, and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="glass-card group hover:bg-white hover:-translate-y-3 transition-all p-10 cursor-pointer"
              >
                <div className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform group-hover:rotate-6`}>
                  <service.icon size={40} className={service.color} />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">{service.title}</h3>
                <p className="text-text-muted mb-8 italic">
                  "{service.desc}"
                </p>
                <button className="flex items-center space-x-3 text-primary font-bold">
                   <span>Learn More</span>
                   <PlusCircle size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Consultations Detail (Separate section or big card) */}
      <section className="section-padding bg-white">
        <div className="container">
           <div className="glass-card bg-grad-primary p-12 lg:p-20 text-white rounded-[50px] overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                 <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Specialist Consultations</h2>
                    <p className="text-xl opacity-90 mb-10 leading-relaxed">
                      Our clinic hosts visiting specialists across Cardiology, Orthopedics, Pediatrics, and Gynacology. We ensure you get expert advice from the best in the field without traveling outside Udaipur.
                    </p>
                    <div className="space-y-4 mb-12">
                       {['Cardiology', 'Orthopedics', 'Pediatrics', 'Obstetrics & Gynaecology'].map((spec, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                             <CheckSquare size={24} className="text-white" />
                             <span className="text-xl font-medium">{spec}</span>
                          </div>
                       ))}
                    </div>
                    <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
                       Get Specialist Appointment
                    </button>
                 </div>
                 <div className="hidden lg:block">
                    <img 
                      src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600" 
                      alt="Specialist" 
                      className="rounded-[40px] shadow-2xl float-anim"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-text-main/60 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-8 text-text-muted hover:text-text-main"
              >
                <X size={32} />
              </button>

              <div className={`w-24 h-24 rounded-3xl ${selectedService.bg} flex items-center justify-center mb-10`}>
                <selectedService.icon size={50} className={selectedService.color} />
              </div>

              <h2 className="text-4xl font-bold text-text-main mb-6">{selectedService.title}</h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed">
                {selectedService.detailed_desc}
              </p>

              <h4 className="text-xl font-bold mb-6">Key Benefits:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-semibold text-text-main">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center space-x-3">
                    <PhoneCall size={20} />
                    <span>Call to Inquire</span>
                 </button>
                 <button className="flex-1 py-4 border-2 border-primary text-primary rounded-2xl font-bold">
                    Book This Service
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
