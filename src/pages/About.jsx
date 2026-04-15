import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Award, BookOpen, Clock, Shield, 
  Stethoscope, Heart, Users, Sparkles, 
  Target, Zap, CheckCircle2 
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import MissionVision from '../components/home/MissionVision';
import CoreValues from '../components/home/CoreValues';
import DoctorPreview from '../components/home/DoctorPreview';
import './About.css';

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const milestones = [
    { year: '2010', title: 'Clinic Foundation', desc: 'Inception of a vision to redefine regional healthcare.' },
    { year: '2015', title: 'Advanced Diagnostics', desc: 'Integrated state-of-the-art imaging and laboratory facilities.' },
    { year: '2018', title: 'Specialist Network', desc: 'Partnered with over 50+ visiting consultants worldwide.' },
    { year: '2024', title: 'Digital Frontier', desc: 'Pioneered AI-driven patient management and telehealth systems.' }
  ];

  return (
    <div className="about-page-container">
      {/* Cinematic Hero */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="about-hero-banner"
      >
        <div className="about-hero-mesh"></div>
        <div className="container">
          <div className="about-hero-content">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="about-kicker"
            >
              Excellence Since 2010
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="about-main-title"
            >
              Crafting a Legacy of <br />
              <span>Compassionate</span> Care
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="about-hero-sub"
            >
              We don't just treat symptoms; we care for people. Our journey is 
              defined by precision medicine and the pursuit of patient wellness.
            </motion.p>
          </div>
        </div>
        
        {/* Floating Icons */}
        <div className="hero-floating-elements">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="f-icon f-1"><Heart size={32} /></motion.div>
          <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 7, repeat: Infinity }} className="f-icon f-2"><Stethoscope size={40} /></motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} className="f-icon f-3"><Zap size={24} /></motion.div>
        </div>
      </motion.section>

      {/* Story Section with Abstract Layout */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-layout">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="story-visual"
            >
              <div className="story-img-card">
                <div className="img-glow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Facility" 
                  className="main-story-img"
                />
                <div className="stats-glass-badge">
                  <span className="b-val">15+</span>
                  <span className="b-lbl">Year Legacy</span>
                </div>
              </div>
              <div className="secondary-story-img">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" 
                  alt="Specialist" 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="story-text"
            >
              <SectionHeader 
                subtitle="The Genesis"
                title="Redefining the Patient Experience"
              />
              <p className="story-para">
                Founded with a singular vision, our clinic bridges the gap between 
                advanced medical science and personalized care. We believe every patient 
                deserves a healthcare journey that is seamless, transparent, and dignified.
              </p>
              
              <div className="story-pill-grid">
                {[
                  { icon: Target, text: 'Evidence-Based Medicine' },
                  { icon: Shield, text: 'Uncompromising Safety' },
                  { icon: Users, text: 'Community Focused' },
                  { icon: Sparkles, text: 'Innovative Technology' }
                ].map((pill, i) => (
                  <div key={i} className="story-pill">
                    <pill.icon size={18} />
                    <span>{pill.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars of Care */}
      <section className="about-pillars">
        <div className="container">
          <div className="pillars-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pillar-card highlight"
            >
              <div className="pillar-icon"><Award size={32} /></div>
              <h3>World Class Standards</h3>
              <p>Adhering to international medical protocols and ISO certified safety standards across all departments.</p>
              <CheckCircle2 size={100} className="pillar-bg-icon" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pillar-card"
            >
              <div className="pillar-icon"><Clock size={32} /></div>
              <h3>24/7 Availability</h3>
              <p>Reliable emergency response and round-the-clock digital consultations for peace of mind.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pillar-card"
            >
              <div className="pillar-icon"><BookOpen size={32} /></div>
              <h3>Academic Excellence</h3>
              <p>Ongoing research and training programs that keep our specialists at the forefront of medicine.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modernized Timeline */}
      <section className="about-milestones">
        <div className="container">
          <div className="milestones-header">
            <SectionHeader 
              subtitle="The Journey"
              title="A Decade of Trust"
              centered
            />
          </div>
          <div className="timeline-v2">
            <div className="timeline-line"></div>
            {milestones.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`timeline-node ${i % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="node-content">
                  <div className="node-year">{m.year}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                <div className="node-dot"></div>
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
