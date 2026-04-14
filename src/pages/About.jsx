import React from 'react';
import './About.css';
import SectionHeader from '../components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, Shield, Stethoscope, Heart } from 'lucide-react';
import MissionVision from '../components/home/MissionVision';
import CoreValues from '../components/home/CoreValues';
import DoctorPreview from '../components/home/DoctorPreview';

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
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-banner">
        <div className="container">
          <div className="about-hero-content">
            <SectionHeader 
              subtitle="Get To Know Us"
              title="Providing Compassionate Healthcare Since 2010"
            />
            <p className="about-hero-text">
              Welcome to Doctor, where your health is our ultimate priority. We are a team of dedicated medical professionals committed to providing the highest quality healthcare services in Udaipur.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="about-intro-section">
        <div className="container">
          <div className="about-intro-layout">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-intro-visual"
            >
              <div className="about-intro-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Team" 
                  className="about-intro-img"
                />
                <div className="about-badge-floating glass-card">
                   <div className="badge-number">15+</div>
                   <div className="badge-caption">Doctors on Board</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-intro-content"
            >
              <h3 className="intro-title">Our Story & Qualifications</h3>
              <p className="intro-desc">
                Founded by leading medical experts, our clinic was established with the goal of creating a healthcare environment that feels less like a hospital and more like a sanctuary for healing. 
              </p>
              <p className="intro-desc">
                Our staff includes board-certified physicians, skilled nurses, and empathetic support staff, all working together to ensure your journey to health is smooth and successful. Every member of our team is hand-picked for their clinical expertise and commitment to patient care.
              </p>

              <div className="about-feature-grid">
                <div className="feature-item">
                  <div className="feature-icon bg-gold">
                     <Award size={24} />
                  </div>
                  <span className="feature-text">Gold Medalist MDs</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon bg-blue">
                     <BookOpen size={24} />
                  </div>
                  <span className="feature-text">Continuous Research</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon bg-teal">
                     <Clock size={24} />
                  </div>
                  <span className="feature-text">Long Consultation Hours</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon bg-rose">
                     <Heart size={24} />
                  </div>
                  <span className="feature-text">Patient-Centric Approach</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="about-timeline-section">
        <div className="container">
          <SectionHeader 
            subtitle="Our Journey"
            title="Milestones of Excellence"
            centered
          />
          <div className="about-timeline-grid">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="milestone-card group"
              >
                <div className="milestone-year">{exp.year}</div>
                <h4 className="milestone-title">{exp.title}</h4>
                <p className="milestone-desc">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DoctorPreview />
      <MissionVision />
      <CoreValues />
    </div>
  );
};

export default About;
