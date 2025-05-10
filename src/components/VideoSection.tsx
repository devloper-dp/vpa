import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';
import '../styles/VideoSection.css';

const VideoSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const openVideo = () => {
    setShowVideo(true);
  };
  
  const closeVideo = () => {
    setShowVideo(false);
  };
  
  return (
    <div className="video-container" id="videogal">
      <div className="video-wrapper">
        <motion.div 
          className="video-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1>Watch Our Video</h1>
        </motion.div>
        
        <motion.div 
          className="video-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="video-thumbnail">
            <img 
              src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/large_img.jpg" 
              alt="School Tour Video Thumbnail" 
            />
            <div className="video-overlay" onClick={openVideo}>
              <motion.div 
                className="play-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle size={80} />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {showVideo && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div 
              className="video-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-video" onClick={closeVideo}>
                <X size={24} />
              </button>
              <div className="video-frame">
                <iframe 
                  src="https://www.youtube.com/embed/QTUmcc80ZBQ?autoplay=1&rel=0" 
                  title="School Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;