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
      <AboutPreview />
      <Metrics />
      <ServicesPreview />
      <DoctorPreview />
      <MissionVision />
      <WhyChooseUs />
      <CoreValues />
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </>
  );
};

export default Home;
