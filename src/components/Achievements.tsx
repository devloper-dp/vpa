import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Achievements.css';

const achievementData = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/activity.jpg",
    category: "Art Competition"},
  {
    id: 2,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/maths.jpg",
    category: "Mathematics Olympiad" },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/achievement.jpg",
    category: "English Literature"
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/science.jpg",
    category: "Science Fair"}
];

const Achievements: React.FC = () => {
  return (
    <div className="achievements-container" id="achievements">
      <div className="achievements-wrapper">
        <motion.div 
          className="achievements-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1>Our Outstanding Achievements</h1>
          <p>Celebrating excellence and dedication of our students</p>
        </motion.div>
        
        <div className="achievements-grid">
          {achievementData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="achievement-image">
                <img src={item.image} alt={item.name} />
                <motion.div 
                  className="achievement-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.achievement}</p>
                </motion.div>
              </div>
              <motion.div 
                className="achievement-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3>{item.name}</h3>
                <div className="achievement-category">{item.category}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;