import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, Award, BookOpen, 
  CheckCircle2, Sparkles, GraduationCap, 
  Stethoscope, HeartPulse, ShieldCheck 
} from 'lucide-react';
import './DoctorPreview.css';

const DoctorPreview = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="doctor-preview-section" ref={containerRef}>
      {/* Decorative Background Elements */}
      <div className="doc-bg-accent-1"></div>
      <div className="doc-bg-accent-2"></div>
      <div className="doc-bg-pattern"></div>
      
      <div className="container">
        <div className="doctor-preview-layout">
          
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="doctor-content-side"
          >
            <div className="doc-header-top">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="doc-line-accent"
              />
              <span className="doc-subtitle">Leading Specialist</span>
            </div>
            
            <h2 className="doc-main-title">
              Meet the Visionary Behind <br />
              <span>Our Excellence</span>
            </h2>

            <p className="doctor-bio-short">
              With over two decades of clinical mastery, our lead specialist combines 
              precision methodology with human-centric care. Specializing in advanced 
              diagnostics and minimally invasive procedures.
            </p>

            <div className="doc-focus-areas">
              <div className="focus-item">
                <div className="focus-icon-box blue">
                  <Stethoscope size={20} />
                </div>
                <span>General Medicine</span>
              </div>
              <div className="focus-item">
                <div className="focus-icon-box teal">
                  <HeartPulse size={20} />
                </div>
                <span>Cardiac Care</span>
              </div>
              <div className="focus-item">
                <div className="focus-icon-box rose">
                  <ShieldCheck size={20} />
                </div>
                <span>Critical Care</span>
              </div>
            </div>
            
            <div className="doctor-stats-canvas">
              {[
                { icon: Star, value: '4.9/5', label: 'Patient Trust', color: '#f59e0b' },
                { icon: Award, value: '25+', label: 'Medical Awards', color: '#10b981' },
                { icon: GraduationCap, value: 'Fellow', label: 'RCP London', color: '#3b82f6' }
              ].map((stat, i) => (
                <div key={i} className="doc-canvas-stat">
                  <div className="canvas-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                    <stat.icon size={20} />
                  </div>
                  <div className="canvas-info">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="doc-cta-group">
              <Link to="/doctor-profile" className="doc-btn-primary">
                <span>View Full Profile</span>
                <div className="btn-icon-circle">
                  <ArrowRight size={18} />
                </div>
              </Link>
              <div className="doc-trust-badge">
                <Sparkles size={16} className="text-amber-500" />
                <span>Top Rated Expert 2024</span>
              </div>
            </div>
          </motion.div>

          <div className="doctor-visual-side">
            <motion.div 
              style={{ y: y1 }}
              className="doc-img-main-wrap"
            >
              <div className="doc-frame-accent"></div>
              <div className="doc-glass-card-back"></div>
              
              <div className="doc-portrait-container">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1200" 
                  alt="Expert Lead Doctor" 
                  className="doc-portrait-img"
                />
                
                {/* Floating Tags */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="floating-doc-tag tag-top"
                >
                  <div className="tag-icon"><CheckCircle2 size={14} /></div>
                  Board Certified
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="floating-doc-tag tag-bottom"
                >
                  <div className="tag-icon"><BookOpen size={14} /></div>
                  Published Author
                </motion.div>
              </div>

              {/* Experience Badge */}
              <motion.div 
                style={{ y: y2 }}
                className="doc-experience-badge"
              >
                <div className="badge-inner">
                  <div className="badge-val">20+</div>
                  <div className="badge-txt">Years of Clinical Mastery</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Background Blob */}
            <div className="doc-visual-blob"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorPreview;
