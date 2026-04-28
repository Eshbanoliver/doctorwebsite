import React from 'react';
import './Home.css';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Metrics from '../components/home/Metrics';
import ServicesPreview from '../components/home/ServicesPreview';
import DoctorPreview from '../components/home/DoctorPreview';
import MissionVision from '../components/home/MissionVision';
import CoreValues from '../components/home/CoreValues';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import FAQPreview from '../components/home/FAQPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="content-visibility-auto">
        <AboutPreview />
      </div>
      <div className="content-visibility-auto">
        <Metrics />
      </div>
      <div className="content-visibility-auto">
        <ServicesPreview />
      </div>
      <div className="content-visibility-auto">
        <DoctorPreview />
      </div>
      <div className="content-visibility-auto">
        <MissionVision />
      </div>
      <div className="content-visibility-auto">
        <WhyChooseUs />
      </div>
      <div className="content-visibility-auto">
        <CoreValues />
      </div>
      <div className="content-visibility-auto">
        <Testimonials />
      </div>
      <div className="content-visibility-auto">
        <FAQPreview />
      </div>
      <CTASection />
    </>
  );
};

export default Home;
