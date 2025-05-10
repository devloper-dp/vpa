import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/GalleryComponent.css';

const galleryImages = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/gallery-1.jpg",
    title: "Cultural Performance"
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/gallery-2.jpg",
    title: "Dance Performance"
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/gallery-3.jpg",
    title: "Annual Function"
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/gallery-4.jpg",
    title: "Sports Day"
  },
  {
    id: 5,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/gallery-5.jpg",
    title: "Independence Day"
  },
  {
    id: 6,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/gallery-6.jpg",
    title: "Republic Day"
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'next'
      ? (selectedImage + 1) % galleryImages.length
      : (selectedImage - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="gallery-section" id="galleryphoto">
      <div className="gallery-container">
        <div className="gallery-content">
          <div className="gallery-text">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Photo Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our photo gallery to see highlights of our vibrant community and joyful experiences.
            </motion.p>
            <Link to="/gallery">
              <motion.button
                className="view-all-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                VIEW ALL GALLERY
              </motion.button>
            </Link>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="gallery-item-inner">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                  <motion.div 
                    className="gallery-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleImageClick(index)}
                  >
                    <Search size={24} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={handleCloseModal}>
          <button className="close-lightbox" onClick={handleCloseModal}>
            <X size={24} />
          </button>
          
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img 
              src={galleryImages[selectedImage].image} 
              alt={galleryImages[selectedImage].title}
              className="lightbox-image"
            />
            <h3 className="lightbox-title">{galleryImages[selectedImage].title}</h3>
          </div>

          <button 
            className="nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            ❮
          </button>
          <button 
            className="nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;