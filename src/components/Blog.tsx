import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Blog.css';
import { div } from 'framer-motion/client';

const blogData = [
  {
    id: 1,
    title: "Education Programs",
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/blog1.jpeg",
    description: "Explore our education programs designed to inspire and support every child's growth."
  },
  {
    id: 2,
    title: "Games Program",
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/games.jpg",
    description: "Enroll in our games program to enhance skills, foster teamwork, and provide a fun, engaging experience for all participants."
  },
  {
    id: 3,
    title: "Labs Programs",
    image: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/labs.jpg",
    description: "Discover our labs programs designed to spark curiosity, encourage hands-on learning, and develop critical thinking skills in students."
  }
];

const Blog: React.FC = () => {
  return (
    <div className="blog-wrap" id="blog">
      <div className="container">
        <motion.div 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1>Our Programs</h1>
        </motion.div>
        
        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <motion.div 
              key={blog.id} 
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-overlay">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;