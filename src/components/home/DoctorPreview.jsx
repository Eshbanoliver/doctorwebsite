import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Star, Award, BookOpen, 
  CheckCircle2, Sparkles, GraduationCap, 
  Stethoscope, HeartPulse, ShieldCheck 
} from 'lucide-react';
import './DoctorPreview.css';
import doctorImg from '../../assets/dr_quresh_enhanced.png';

const DoctorPreview = () => {
  const navigate = useNavigate();
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
              With extensive expertise in surgical oncology, our lead specialist provides exceptional, personalized cancer care. Specializing in advanced treatments and surgical management of head and neck cancers.
            </p>

            <div className="doc-focus-areas">
              {[
                { label: 'Surgical Oncology', icon: Stethoscope, class: 'blue' },
                { label: 'Head & Neck Cancers', icon: HeartPulse, class: 'teal' },
                { label: 'Minimally Invasive', icon: ShieldCheck, class: 'rose' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="focus-item-v2 glass-card"
                >
                  <div className={`focus-icon-box-v2 ${item.class}`}>
                    <item.icon size={18} />
                  </div>
                  <span>{item.label}</span>
                  <div className="focus-item-glow"></div>
                </motion.div>
              ))}
            </div>
            
            <div className="doctor-stats-canvas-v2">
              {[
                { icon: Star, value: '4.9/5', label: 'Patient Trust', color: '#f59e0b' },
                { icon: Award, value: '25+', label: 'Medical Awards', color: '#10b981' },
                { icon: GraduationCap, value: 'Fellow', label: 'RCP London', color: '#3b82f6' }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="doc-canvas-stat-v2 glass-card"
                >
                  <div className="canvas-icon-v2" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                    <stat.icon size={22} />
                  </div>
                  <div className="canvas-info-v2">
                    <strong className="stat-value-animated">{stat.value}</strong>
                    <span className="stat-label-modern">{stat.label}</span>
                  </div>
                  <div className="stat-card-border" style={{ borderColor: stat.color }}></div>
                </motion.div>
              ))}
            </div>

            <div className="doc-cta-group">
              <button 
                onClick={() => navigate('/doctor')} 
                className="doc-btn-primary"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <span>View Full Profile</span>
                <div className="btn-icon-circle">
                  <ArrowRight size={18} />
                </div>
              </button>
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
              
              <button 
                onClick={() => navigate('/doctor')} 
                className="doc-portrait-link"
                style={{ background: 'none', border: 'none', padding: 0, width: '100%', textAlign: 'left' }}
              >
                <div className="doc-portrait-container">
                  <img 
                    src={doctorImg} 
                    alt="Dr. Quresh Bambora" 
                    className="doc-portrait-img"
                    loading="lazy"
                    decoding="async"
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
              </button>

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
