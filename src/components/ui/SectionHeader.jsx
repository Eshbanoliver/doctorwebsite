import React from 'react';

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-grad-primary rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
