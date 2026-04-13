import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, ShieldCheck, Stethoscope, Heart } from 'lucide-react';
import MissionVision from '../components/home/MissionVision';
import CoreValues from '../components/home/CoreValues';

const About = () => {
  const experiences = [
    {
      year: '2010',
      title: 'Clinic Founded',
      desc: 'Started with a mission to bring modern healthcare to Udaipur.'
    },
    {
      year: '2015',
      title: 'Expanding Services',
      desc: 'Introduced specialized diagnostic and emergency care departments.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      desc: 'Launched online consultations and digital health records.'
    },
    {
      year: '2024',
      title: 'Excellence Award',
      desc: 'Recognized as the best regional clinic for patient outcomes.'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <SectionHeader 
              subtitle="Get To Know Us"
              title="Providing Compassionate Healthcare Since 2010"
            />
            <p className="text-xl text-text-muted leading-relaxed mb-8">
              Welcome to Doctor, where your health is our ultimate priority. We are a team of dedicated medical professionals committed to providing the highest quality healthcare services in Udaipur.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-6 glass-card bg-primary text-white rounded-3xl shadow-xl">
                 <div className="text-3xl font-bold">15+</div>
                 <div className="text-xs uppercase tracking-widest font-bold opacity-80">Doctors on Board</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Our Story & Qualifications</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Founded by leading medical experts, our clinic was established with the goal of creating a healthcare environment that feels less like a hospital and more like a sanctuary for healing. 
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                Our staff includes board-certified physicians, skilled nurses, and empathetic support staff, all working together to ensure your journey to health is smooth and successful. Every member of our team is hand-picked for their clinical expertise and commitment to patient care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                     <Award size={24} />
                  </div>
                  <span className="font-bold text-text-main">Gold Medalist MDs</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                     <BookOpen size={24} />
                  </div>
                  <span className="font-bold text-text-main">Continuous Research</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                     <Clock size={24} />
                  </div>
                  <span className="font-bold text-text-main">Long Consultation Hours</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                     <Heart size={24} />
                  </div>
                  <span className="font-bold text-text-main">Patient-Centric Approach</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <SectionHeader 
            subtitle="Our Journey"
            title="Milestones of Excellence"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass-card bg-white border-none text-center hover:bg-grad-primary hover:text-white transition-all group"
              >
                <div className="text-4xl font-bold text-primary group-hover:text-white mb-4">{exp.year}</div>
                <h4 className="text-xl font-bold mb-4">{exp.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MissionVision />
      <CoreValues />
    </div>
  );
};

export default About;
