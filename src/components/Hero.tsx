import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Hero.css';

const slides = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/b1.jpg",
    title: "Welcome to Vaishnavi Public Academy",
    subtitle: "Nurturing Minds, Shaping Futures"
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/b2.jpg",
    title: "Excellence in Education",
    subtitle: "Building Tomorrow's Leaders Today"
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/b1.jpg",
    title: "Holistic Development",
    subtitle: "Academic Excellence & Character Building"
  }
];

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false
  };

  useEffect(() => {
    // Initialize WOW.js using dynamic import
    if (typeof window !== 'undefined') {
      import('wow.js').then((WOW) => {
        new WOW.default().init();
      });
    }
  }, []);

  return (
    <div className="hero-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide-item">
            <div 
              className="slide-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay">
                <div className="slide-text wow fadeInUp" data-wow-delay="0.3s">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <button className="hero-btn wow fadeInUp" data-wow-delay="0.6s">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;