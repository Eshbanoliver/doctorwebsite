import React from 'react';

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`section-header-box ${centered ? 'text-center' : ''}`}>
      <span className="section-subtitle">
        {subtitle}
      </span>
      <h2 className="section-title">
        {title}
      </h2>
      <div className={`section-underline ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
