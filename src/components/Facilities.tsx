import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Facilities.css';
import { Wifi, PlayCircle, BookOpen, Camera, Monitor, Trophy, FolderRoot as Football, Palette, Flower2, Stethoscope, Droplets, Flame, Tv, Armchair as Wheelchair, Building2, Bus } from 'lucide-react';

const facilities = [
  {
    id: 1,
    name: "WiFi Campus",
    description: "High-speed internet connectivity throughout the campus",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
    icon: <Wifi size={24} />
  },
  {
    id: 2,
    name: "Playground",
    description: "Spacious playground for outdoor activities and sports",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    icon: <PlayCircle size={24} />
  },
  {
    id: 3,
    name: "Library",
    description: "Well-stocked library with diverse collection of books",
    image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
    icon: <BookOpen size={24} />
  },
  {
    id: 4,
    name: "CCTV Surveillance",
    description: "24/7 audio-video surveillance for enhanced security",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
    icon: <Camera size={24} />
  },
  {
    id: 5,
    name: "Computer Lab",
    description: "Modern computer lab with latest technology",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    icon: <Monitor size={24} />
  },
  {
    id: 6,
    name: "Indoor Sports",
    description: "Various indoor sports facilities for students",
    image: "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg",
    icon: <Trophy size={24} />
  },
  {
    id: 7,
    name: "Outdoor Sports",
    description: "Multiple outdoor sports facilities and equipment",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    icon: <Football size={24} />
  },
  {
    id: 8,
    name: "Art and Craft",
    description: "Creative space for artistic expression",
    image: "https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg",
    icon: <Palette size={24} />
  },
  {
    id: 9,
    name: "Garden",
    description: "Beautiful garden area for relaxation and learning",
    image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg",
    icon: <Flower2 size={24} />
  },
  {
    id: 10,
    name: "Medical Room",
    description: "Well-equipped medical facility for emergency care",
    image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
    icon: <Stethoscope size={24} />
  },
  {
    id: 11,
    name: "Water Cooler",
    description: "Clean drinking water facilities throughout campus",
    image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
    icon: <Droplets size={24} />
  },
  {
    id: 12,
    name: "Fire Extinguisher",
    description: "Safety equipment placed at strategic locations",
    image: "https://images.pexels.com/photos/257385/pexels-photo-257385.jpeg",
    icon: <Flame size={24} />
  },
  {
    id: 13,
    name: "Smart Classrooms",
    description: "LCD TV equipped classrooms for interactive learning",
    image: "https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg",
    icon: <Tv size={24} />
  },
  {
    id: 14,
    name: "Ramps",
    description: "Accessible infrastructure for all students",
    image: "https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg",
    icon: <Wheelchair size={24} />
  },
  {
    id: 15,
    name: "Separate Toilets",
    description: "Clean and separate facilities for boys and girls",
    image: "https://images.pexels.com/photos/6520177/pexels-photo-6520177.jpeg",
    icon: <Building2 size={24} />
  },
  {
    id: 16,
    name: "Educational Tours",
    description: "Regular educational trips for practical learning",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    icon: <Bus size={24} />
  }
];

const Facilities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setDirection(1);
    if (currentIndex < facilities.length - itemsPerView) {
      setCurrentIndex(prev => prev + itemsPerView);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    setDirection(-1);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - itemsPerView);
    } else {
      setCurrentIndex(facilities.length - itemsPerView);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index * itemsPerView);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const visibleFacilities = facilities.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="facilities-wrap" id="facilities">
      <div className="welcome-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WELCOME TO VAISHNAVI PUBLIC ACADEMY
        </motion.h1>
      </div>
      <div className="container">
        <motion.div 
          className="facilities-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="facilities-title">SCHOOL FACILITIES</h1>
          <p className="facilities-subtitle">Discover our world-class facilities designed to enhance learning and development</p>
        </motion.div>
        <div className="facilities-slider-container">
          <button className="slider-nav prev" onClick={prevSlide}>❮</button>
          <div className="facilities-slider">
            <AnimatePresence initial={false} mode="wait">
              <motion.div 
                key={currentIndex}
                className="facilities-track"
                initial={{ 
                  x: direction > 0 ? 1000 : -1000,
                  opacity: 0 
                }}
                animate={{ 
                  x: 0,
                  opacity: 1 
                }}
                exit={{ 
                  x: direction > 0 ? -1000 : 1000,
                  opacity: 0
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {visibleFacilities.map((facility) => (
                  <motion.div 
                    key={facility.id} 
                    className="facility-card"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="facility-image">
                      <img src={facility.image} alt={facility.name} />
                      <div className="facility-overlay">
                        <motion.div 
                          className="facility-icon"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                        >
                          {facility.icon}
                        </motion.div>
                      </div>
                    </div>
                    <div className="facility-content">
                      <div className="facility-icon-small">{facility.icon}</div>
                      <h3>{facility.name}</h3>
                      <p>{facility.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <button className="slider-nav next" onClick={nextSlide}>❯</button>
        </div>
        <div className="facilities-dots">
          {Array.from({ length: Math.ceil(facilities.length / itemsPerView) }).map((_, index) => (
            <motion.span
              key={index}
              className={`dot ${Math.floor(currentIndex / itemsPerView) === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;