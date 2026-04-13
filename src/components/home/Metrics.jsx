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
    <section className="py-16 bg-grad-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 mx-auto mb-6 glass-card bg-white/20 border-white/30 rounded-2xl flex items-center justify-center">
                <stat.icon size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
