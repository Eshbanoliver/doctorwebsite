import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, Clock } from 'lucide-react';

const Metrics = () => {
  const stats = [
    { icon: Users, label: 'Happy Patients', value: '15,000+', color: 'bg-blue-500' },
    { icon: Heart, label: 'Success Rate', value: '99%', color: 'bg-teal-500' },
    { icon: Award, label: 'Medical Awards', value: '25+', color: 'bg-rose-500' },
    { icon: Clock, label: 'Years Experience', value: '15+', color: 'bg-indigo-500' }
  ];

  return (
    <section className="metrics-section">
      {/* Decorative Circles */}
      <div className="metrics-blob blob-top"></div>
      <div className="metrics-blob blob-bottom"></div>
      
      <div className="container">
        <div className="metrics-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="metric-card"
            >
              <div className="metric-icon-box glass-card">
                <stat.icon size={32} />
              </div>
              <div className="metric-value">{stat.value}</div>
              <div className="metric-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
