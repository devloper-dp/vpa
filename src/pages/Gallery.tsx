import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Image, Video, Newspaper, Activity, Map, School, FolderRoot } from 'lucide-react';
import '../styles/Gallery.css';

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'photo',
      title: 'Photo Gallery',
      description: 'Explore our vibrant collection of photos showcasing school events, activities, and memorable moments.',
      icon: <Image size={32} />,
      buttonText: 'View Photos',
      link: '/#galleryphoto'
    },
    {
      id: 'video',
      title: 'VIDEO GALLERY',
      description: 'Watch videos of our school activities, events, and special occasions that showcase our vibrant school community.',
      icon: <Video size={32} />,
      buttonText: 'Watch Videos',
      link: '/#videogal'
    },
    {
      id: 'news',
      title: 'NEWS PUBLISHED',
      description: "Read the latest news and updates about our school's achievements, events, and initiatives that have been featured in the media.",
      icon: <Newspaper size={32} />,
      buttonText: 'Read News',
      link: '/#blog'
    },
    {
      id: 'fit-india',
      title: 'FIT INDIA MOVEMENT',
      description: 'Join us in the Fit India Movement, promoting health and fitness among students through various activities and programs.',
      icon: <Activity size={32} />,
      buttonText: 'Learn More',
      link: 'https://fitindia.gov.in/'
    },
    {
      id: 'education-tour',
      title: 'EDUCATION TOUR',
      description: 'Explore our educational tours that provide students with hands-on learning experiences in various environments.',
      icon: <Map size={32} />,
      buttonText: 'Watch Tour',
      link: 'https://www.youtube.com/watch?app=desktop&v=4YiPZT0Xx_g'
    },
    {
      id: 'activities',
      title: 'SCHOOL ACTIVITIES',
      description: 'From sports to arts, explore the wide range of extracurricular activities that our school offers to enhance student development.',
      icon: <School size={32} />,
      buttonText: 'Explore Activities',
      link: '/#achievements'
    },
    {
      id: 'portfolio',
      title: 'PORTFOLIO',
      description: 'View our portfolio showcasing the outstanding work and projects created by our talented students and faculty.',
      icon: <FolderRoot size={32} />,
      buttonText: 'Download Portfolio',
      link: '/#galleryphoto'
    }
  ];

  const handleNavigate = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link);
      // Smooth scroll to the section after a short delay to ensure navigation is complete
      setTimeout(() => {
        const sectionId = link.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="gallery-page">
      <div className="innerHeading-wrap">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            School Gallery
          </motion.h1>
        </div>
      </div>

      <div className="inner-content">
        <div className="container">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="gallery-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="section-header">
                <div className="section-icon">
                  {section.icon}
                </div>
                <div className="section-title">
                  <h2>{section.title}</h2>
                </div>
              </div>
              <div className="section-content">
                <p>{section.description}</p>
                <motion.button
                  className="learn-more-btn"
                  onClick={() => handleNavigate(section.link)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
