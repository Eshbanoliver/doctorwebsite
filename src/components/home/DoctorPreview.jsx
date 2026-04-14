import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, BookOpen } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import './DoctorPreview.css';

const DoctorPreview = () => {
  return (
    <section className="doctor-preview-section">
      <div className="container">
        <div className="doctor-preview-layout">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="doctor-content-side"
          >
            <SectionHeader 
              subtitle="The Expert Behind the Excellence"
              title="Know Your Doctor"
            />
            <p className="doctor-bio-short">
              Leading our clinical practice is a board-certified specialist dedicated to patient-centric care. With deep roots in the medical community and a passion for innovation, your health is in the most capable hands.
            </p>
            
            <div className="doctor-stats-mini">
              <div className="doc-stat-item">
                <Star className="doc-stat-icon text-amber-500" size={24} />
                <div className="doc-stat-text">
                  <strong>4.9/5</strong>
                  <span>Patient Rating</span>
                </div>
              </div>
              <div className="doc-stat-item">
                <Award className="doc-stat-icon text-teal-500" size={24} />
                <div className="doc-stat-text">
                  <strong>20+ Years</strong>
                  <span>Experience</span>
                </div>
              </div>
              <div className="doc-stat-item">
                <BookOpen className="doc-stat-icon text-blue-500" size={24} />
                <div className="doc-stat-text">
                  <strong>Gold Medalist</strong>
                  <span>Academic Excellence</span>
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn-primary btn-large">
              <span>View Full Profile</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="doctor-visual-side"
          >
            <div className="doctor-image-container">
              <div className="doctor-image-glow"></div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
                alt="Expert Doctor" 
                className="doctor-main-img"
              />
              <div className="doctor-experience-tag">
                <div className="exp-number">20+</div>
                <div className="exp-label">Years of Expert Care</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DoctorPreview;
