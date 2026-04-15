import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Users, Heart, Award, Clock, Activity, Zap, ShieldCheck, Stethoscope } from 'lucide-react';

const CountUp = ({ value }) => {
  const [target, setTarget] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[,+]/g, ''));
      setTarget(numericValue);
    }
  }, [isInView, value]);

  const spring = useSpring(0, {
    duration: 3000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    const rounded = Math.floor(current);
    if (value.includes('+')) return `${rounded.toLocaleString()}+`;
    if (value.includes('%')) return `${rounded}%`;
    return rounded.toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, target, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Metrics = () => {
  const stats = [
    { 
      icon: Users, 
      label: 'Happy Patients', 
      value: '15,000+', 
      suffix: 'Trust us for their care',
      color: '#0ea5e9',
      glow: 'rgba(14, 165, 233, 0.3)'
    },
    { 
      icon: Heart, 
      label: 'Success Rate', 
      value: '99%', 
      suffix: 'In surgical procedures',
      color: '#14b8a6',
      glow: 'rgba(20, 184, 166, 0.3)'
    },
    { 
      icon: Award, 
      label: 'Medical Awards', 
      value: '25+', 
      suffix: 'Excellence recognized',
      color: '#f43f5e',
      glow: 'rgba(244, 63, 94, 0.3)'
    },
    { 
      icon: Clock, 
      label: 'Years Experience', 
      value: '15+', 
      suffix: 'Dedicated service',
      color: '#6366f1',
      glow: 'rgba(99, 102, 241, 0.3)'
    }
  ];

  return (
    <section className="metrics-section">
      {/* Dynamic Background Elements */}
      <div className="metrics-bg-mesh"></div>
      <div className="metrics-floating-particles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="metrics-header-wrap"
        >
          <span className="metrics-tag">Our Impact</span>
          <h2 className="metrics-main-title">Excellence in <span>Modern</span> Healthcare</h2>
        </motion.div>

        <div className="metrics-grid-modern">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: idx * 0.1 
              }}
              viewport={{ once: true }}
              className="metric-card-modern"
            >
              <div className="metric-glass-overlay"></div>
              
              <div className="metric-content-inner">
                <div 
                  className="metric-icon-wrapper"
                  style={{ 
                    backgroundColor: `${stat.color}15`,
                    color: stat.color,
                    boxShadow: `0 0 20px ${stat.glow}`
                  }}
                >
                  <stat.icon size={28} strokeWidth={2.5} />
                  <motion.div 
                    className="icon-ring"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ borderColor: stat.color }}
                  />
                </div>

                <div className="metric-text-box">
                  <div className="metric-number">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="metric-title">{stat.label}</div>
                  <div className="metric-sub">{stat.suffix}</div>
                </div>

                <div className="metric-progress-base">
                  <motion.div 
                    className="metric-progress-tip"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                    style={{ background: stat.color }}
                  />
                </div>
              </div>
              
              {/* Decorative Corner */}
              <div className="card-corner" style={{ background: stat.color }}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="metrics-trust-row"
        >
          <div className="trust-item">
            <ShieldCheck size={18} />
            <span>ISO Certified Facility</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Stethoscope size={18} />
            <span>Advanced Diagnostics</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Zap size={18} />
            <span>24/7 Digital Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
