import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/feed1i.jpg",
    text: "My child is studying in the 7th standard at Vaishnavi Public Academy. The school is very good and disciplined. The principal and teachers are very good and they teach well. All the students are disciplined. The students' performance is also good.",
    name: "Govind deshmuleh",
    student: "Vansh deshmukh"
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/feed3i.jpg",
    text: "Dear Teacher, I am writing to express my gratitude for the excellent education my son is receiving at your school. He has shown significant improvement in his studies. Thank you for your hard work and dedication.",
    name: "Sewaram",
    student: "Lakshya"
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/feed2i.jpg",
    text: "I have closely observed in VPA Betul that the following works are being done well in the school. 1. There is discipline in the school. 2.Teaching work is going well in the school. 3. Digital devices (L.C:D) + computers are used in the school. 4. Children are given homework every day.",
    name: "Suresh Lokhande",
    student: "Jigar Lokhande"
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/feed4i.jpg",
    text: "Vaishnavi Public Academy is a good school. The school has a high standard of education. The teachers are highly qualified and teach effectively. The students are able to achieve good results in their studies. The school has a good environment for learning and all facilities are available.",
    name: "Dinesh Kahar",
    student: "Rajat Kahar"
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (slideIndex: number) => {
    if (!isAnimating && slideIndex !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(slideIndex);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div className="testimonials-wrap">
      <div className="container">
        <div className="title">
          <p className="subtitle">Testimonials</p>
          <h2 className="main-title">What Parents Say</h2>
        </div>
        
        <div className="testimonials-slider">
          <button className="testimonial-nav prev" onClick={prevSlide}>❮</button>
          
          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  opacity: index === currentSlide ? 1 : 0
                }}
              >
                <div className="testimonials-sec">
                  <div className="client-box">
                    <div className="clientImg">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="starWrp">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#ffeb00" color="#ffeb00" />
                      ))}
                    </div>
                  </div>
                  
                  <p>{testimonial.text}</p>
                  
                  <h3>{testimonial.name}<span>{testimonial.student}</span></h3>
                  
                  <div className="quote-icon">
                    <Quote size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="testimonial-nav next" onClick={nextSlide}>❯</button>
        </div>
        
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;