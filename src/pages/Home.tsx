import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Facilities from '../components/Facilities';
import Leadership from '../components/Leadership';
import Choice from '../components/Choice';
import VideoSection from '../components/VideoSection';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Enroll from '../components/Enroll';
import Achievements from '../components/Achievements';
import Blog from '../components/Blog';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Facilities />
      <Leadership />
      <Choice />
      <VideoSection />
      <Gallery />
      <Testimonials />
      <Enroll />
      <Achievements />
      <Blog />
    </>
  );
};

export default Home;