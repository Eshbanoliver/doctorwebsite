import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Award, BookOpen, GraduationCap, 
  Stethoscope, HeartPulse, ShieldCheck,
  Calendar, Mail, Phone, MapPin, 
  Globe, Share2, Star, ArrowRight
} from 'lucide-react';
import doctorImg from '../assets/doctor-profile.png';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const navigate = useNavigate();
  const qualifications = [
    { degree: 'Doctor of Medicine (MD)', university: 'Harvard Medical School', year: '2005' },
    { degree: 'Master of Surgery (MS)', university: 'Johns Hopkins University', year: '2008' },
    { degree: 'Fellowship in Advanced Cardiology', university: 'Cleveland Clinic', year: '2012' }
  ];

  const expertises = [
    { title: 'Interventional Cardiology', icon: HeartPulse },
    { title: 'Preventive Medicine', icon: ShieldCheck },
    { title: 'Diagnostic Imaging', icon: Stethoscope }
  ];

  const experience = [
    { period: '2018 - Present', role: 'Head Specialist', clinic: 'MS Infinix' },
    { period: '2012 - 2018', role: 'Senior Cardiologist', clinic: 'Fortis Health Global' },
    { period: '2008 - 2012', role: 'Medical Specialist', clinic: 'Udaipur Medical Institute' }
  ];

  return (
    <div className="doctor-profile-container">
      {/* Background Accents */}
      <div className="profile-bg-glow"></div>
      <div className="profile-bg-blob"></div>
      
      <div className="container">
        <div className="profile-grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="profile-breadcrumb"
          >
            <button 
              onClick={() => navigate('/')} 
              className="breadcrumb-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
              <span>Back to Home</span>
            </button>
          </motion.div>
          
          {/* Left Column: Fixed Bio & Socials */}
          <div className="profile-sidebar">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="profile-card glass-card"
            >
              <div className="profile-image-container">
                <img 
                  src={doctorImg} 
                  alt="Dr. Oliver Eshban" 
                />
                <div className="online-indicator"></div>
              </div>
              
              <div className="profile-name-box">
                <h1 className="profile-name">Dr. Oliver Eshban</h1>
                <span className="profile-title">Lead Medical Specialist & Founder</span>
              </div>

              <div className="profile-quick-stats">
                <div className="quick-stat">
                  <Star fill="#f59e0b" color="#f59e0b" size={18} />
                  <span>4.9 (2k+ Reviews)</span>
                </div>
                <div className="quick-stat">
                  <Award size={18} className="text-secondary" />
                  <span>25+ Awards</span>
                </div>
              </div>

              <div className="profile-contact-info">
                <div className="contact-item">
                  <Mail size={18} />
                  <span>dr.infinix@msinfinix.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+91 99999 00000</span>
                </div>
              </div>

              <div className="profile-socials">
                <a href="#" className="social-pill" title="LinkedIn"><Globe size={20} /></a>
                <a href="#" className="social-pill" title="Twitter"><Share2 size={20} /></a>
                <a href="#" className="social-pill" title="Facebook"><Globe size={20} /></a>
              </div>

              <button className="btn-profile-cta" onClick={() => window.location.href = '/contact'}>
                <Calendar size={20} />
                <span>Book a Consultation</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Detailed Info Scrollable */}
          <div className="profile-main-content">
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="profile-content-section"
            >
              <h2 className="section-title-v2">Professional Summary</h2>
              <p className="profile-about-text">
                As the visionary lead at MS Infinix, Dr. Oliver Eshban brings over 20 years of clinical mastery and humanitarian 
                dedication to the field of modern healthcare. His philosophy centers around precision medicine—where 
                state-of-the-art diagnostic technology meets a deeply personal, empathetic approach to patient care. 
                Specializing in interventional cardiology and the implementation of digital healthcare systems, 
                Dr. Eshban is committed to making quality medicine accessible and efficient for everyone.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="profile-content-section"
            >
              <h2 className="section-title-v2">Core Expertise</h2>
              <div className="expertise-grid">
                {expertises.map((item, idx) => (
                  <div key={idx} className="expertise-card glass-card">
                    <item.icon size={32} className="text-primary" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="profile-content-section"
            >
              <h2 className="section-title-v2">Education & Fellowships</h2>
              <div className="timeline-v2">
                {qualifications.map((item, idx) => (
                  <div key={idx} className="timeline-item-v2">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content-v2">
                      <span className="timeline-year">{item.year}</span>
                      <h4 className="timeline-major">{item.degree}</h4>
                      <p className="timeline-uni">{item.university}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="profile-content-section"
            >
              <h2 className="section-title-v2">Work Experience</h2>
              <div className="experience-list">
                {experience.map((item, idx) => (
                  <div key={idx} className="exp-card">
                    <div className="exp-icon bg-soft-blue">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div className="exp-details">
                      <span className="exp-period">{item.period}</span>
                      <h4 className="exp-role">{item.role}</h4>
                      <p className="exp-clinic">{item.clinic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
