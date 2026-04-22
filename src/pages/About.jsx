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
import CTASection from '../components/home/CTASection';
import './About.css';

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Mouse parallax effect for the hero visual
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

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
        onMouseMove={handleMouseMove}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="about-hero-banner"
      >
        <div className="hero-mesh-bg">
          <div className="mesh-blob blob-1"></div>
          <div className="mesh-blob blob-2"></div>
          <div className="mesh-blob blob-3"></div>
        </div>
        
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-text-content">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="about-kicker-wrapper"
              >
                <span className="about-kicker">Excellence Since 2010</span>
                <div className="kicker-line"></div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="about-main-title"
              >
                Pioneering the Future of <br />
                <span className="gradient-text">Human-Centric</span> Healthcare
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="about-hero-sub"
              >
                MS Infinix isn't just a clinic; it's a sanctuary where cutting-edge 
                medical engineering meets deep-rooted compassion. We are redefining 
                the standard of patient care through innovation.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="about-hero-stats"
              >
                <div className="hero-stat-item">
                  <span className="stat-num">98%</span>
                  <span className="stat-label">Patient Satisfaction</span>
                </div>
                <div className="stat-divider"></div>
                <div className="hero-stat-item">
                  <span className="stat-num">50+</span>
                  <span className="stat-label">Expert Specialists</span>
                </div>
              </motion.div>
            </div>

            <div className="about-hero-visual-wrapper">
              <motion.div 
                style={{ 
                  rotateX: -mousePos.y, 
                  rotateY: mousePos.x,
                  perspective: 1000 
                }}
                className="hero-main-visual"
              >
                <div className="visual-glass-frame">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                    alt="Medical Innovation" 
                    className="hero-innovation-img"
                  />
                  <div className="glass-overlay"></div>
                </div>

                {/* Floating Glass Badges */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="floating-glass-card f-card-1"
                >
                  <div className="glass-icon"><Shield size={20} /></div>
                  <div className="glass-info">
                    <span>Certified Safety</span>
                    <small>ISO 9001:2024</small>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="floating-glass-card f-card-2"
                >
                  <div className="glass-icon"><Award size={20} /></div>
                  <div className="glass-info">
                    <span>Top Rated</span>
                    <small>Best Clinic 2023</small>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="visual-circle circle-1"></div>
                <div className="visual-circle circle-2"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Story Section with Abstract Layout */}
      <section className="about-story-section">
        <div className="story-bg-text">EST. 2010</div>
        <div className="container">
          <div className="story-layout">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-visual"
            >
              <div className="story-img-main">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Facility" 
                  className="main-story-img"
                />
                <div className="img-glass-overlay"></div>
                
                {/* Embedded Floating Metrics */}
                <div className="story-floating-badge">
                  <div className="badge-icon"><Users size={24} /></div>
                  <div className="badge-details">
                    <span className="b-count">10k+</span>
                    <span className="b-label">Treated Patients</span>
                  </div>
                </div>
              </div>

              <div className="story-img-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" 
                  alt="Specialist" 
                />
                <div className="img-glow-ring"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="story-text"
            >
              <div className="story-header-creative">
                <span className="story-pre-title">Our Visionary Genesis</span>
                <h2 className="story-title">Bridging Science with <span className="highlight-text">Empathy</span></h2>
                <div className="story-accent-line"></div>
              </div>

              <p className="story-para">
                Founded with a singular vision, MS Infinix bridges the gap between 
                advanced medical science and personalized care. We believe every patient 
                deserves a healthcare journey that is seamless, transparent, and dignified.
              </p>
              
              <div className="story-pill-grid">
                {[
                  { icon: Target, text: 'Precision Diagnostics', sub: 'Evidence-based results', color: '#0ea5e9' },
                  { icon: Shield, text: 'Absolute Safety', sub: 'Uncompromising protocols', color: '#10b981' },
                  { icon: Sparkles, text: 'Modern Tech', sub: 'Pioneering innovation', color: '#8b5cf6' },
                  { icon: Heart, text: 'Patient First', sub: 'Compassionate approach', color: '#f43f5e' }
                ].map((pill, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="story-pill-card"
                    style={{ '--pill-accent': pill.color }}
                  >
                    <div className="pill-icon-box">
                      <pill.icon size={22} />
                    </div>
                    <div className="pill-content">
                      <span className="pill-title">{pill.text}</span>
                      <span className="pill-sub">{pill.sub}</span>
                    </div>
                  </motion.div>
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
              className="pillar-card pillar-card-glass"
            >
              <div className="pillar-icon"><Clock size={32} /></div>
              <h3>24/7 Availability</h3>
              <p>Reliable emergency response and round-the-clock digital consultations for peace of mind.</p>
              <Zap size={120} className="pillar-bg-icon-decomposed" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pillar-card pillar-card-glass"
            >
              <div className="pillar-icon"><BookOpen size={32} /></div>
              <h3>Academic Excellence</h3>
              <p>Ongoing research and training programs that keep our specialists at the forefront of medicine.</p>
              <Sparkles size={120} className="pillar-bg-icon-decomposed" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modernized Timeline */}
      <section className="about-milestones">
        <div className="container">
          <div className="milestones-header">
            <SectionHeader 
              subtitle="The Chronicle"
              title="A Decade of Trust"
              centered
            />
          </div>
          
          <div className="timeline-wrapper-v3">
            {/* The Connecting Path with Scroll Progress */}
            <div className="timeline-main-line">
              <motion.div 
                className="timeline-progress-bar"
                style={{ scaleY: scrollYProgress }}
              />
            </div>

            <div className="timeline-items-column">
              {milestones.map((m, i) => (
                <div key={i} className={`timeline-row ${i % 2 === 0 ? 'left' : 'right'}`}>
                  {/* The Anchor Year (Large/Floating) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    className="floating-year-bg"
                  >
                    {m.year}
                  </motion.div>

                  {/* The Node Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="milestone-card-glass"
                  >
                    <div className="milestone-card-header">
                      <span className="milestone-tag">{m.year}</span>
                      <div className="milestone-icon-circle">
                        {i === 0 && <Target size={20} />}
                        {i === 1 && <Sparkles size={20} />}
                        {i === 2 && <Users size={20} />}
                        {i === 3 && <Zap size={20} />}
                      </div>
                    </div>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                    
                    <div className="milestone-line-connector"></div>
                  </motion.div>

                  {/* Central Node Dot */}
                  <div className="timeline-central-dot">
                    <div className="dot-inner"></div>
                    <div className="dot-ripple"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DoctorPreview />
      <MissionVision />
      <CoreValues />
      <CTASection />
    </div>
  );
};

export default About;
