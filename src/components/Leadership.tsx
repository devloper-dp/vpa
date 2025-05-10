import React, { useState, useEffect, useRef } from 'react';
import '../styles/Leadership.css';

const leadershipData = [
  {
    id: 1,
    title: "Director's Message",
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/director.jpg",
    message: "Welcome to our school; we nurture every student's potential. At VPA Betul, we believe in fostering a nurturing environment where innovation, integrity, and excellence are a way of life. Education here goes beyond academics—it's about shaping responsible global citizens."
  },
  {
    id: 2,
    title: "Principal's Message",
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/principal.jpg",
    message: "Our goal is to inspire and empower every student to excel. We are dedicated to building a community where curiosity is encouraged, creativity is celebrated, and lifelong learning is a shared journey. Together, let's pave the path to a bright and meaningful future."
  },
  {
    id: 3,
    title: "Vice Principal's Message",
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/vprinciple.jpg",
    message: "I'm committed to providing engaging lessons and personalized support to help each student succeed and thrive. We strive to ensure that every child feels seen, heard, and valued. By nurturing their strengths, we aim to instill confidence, resilience, and a passion for learning."
  }
];

const Leadership: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % leadershipData.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + leadershipData.length) % leadershipData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  return (
    <div className="leadership-container">
      <div className="leadership-wrapper">
        <div className="leadership-title">
          <h1>Words From Our Leaders</h1>
        </div>
        
        <div className="leadership-slider-container">
          <button className="slider-nav prev" onClick={prevSlide}>❮</button>
          
          <div className="leadership-slider-viewport">
            <div className="leadership-slider" ref={sliderRef}>
              {leadershipData.map((leader) => (
                <div key={leader.id} className="leadership-card">
                  <div className="leadership-image">
                    <img src={leader.image} alt={leader.title} />
                  </div>
                  <div className="leadership-content">
                    <h3><a href="#">{leader.title}</a></h3>
                    <p>{leader.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-nav next" onClick={nextSlide}>❯</button>
        </div>
        
        <div className="leadership-dots">
          {leadershipData.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;