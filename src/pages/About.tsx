import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Award, History, School } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="inner-heading">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
        </div>
      </div>

      <main className="about-content">
        <motion.section 
          id="vpa" 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <School size={32} />
            </div>
            <h2>About VPA</h2>
          </div>
          <div className="content">
            <div className="about-grid">
              <div className="about-image">
                <img 
                  src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/games.jpg" 
                  alt="VPA Campus"
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="about-text">
                <p>
                  Vaishnavi Public Academy (VPA) stands as a beacon of educational excellence, 
                  dedicated to nurturing young minds and fostering holistic development. 
                  Established with a vision to provide quality education, our institution 
                  has consistently maintained high standards in academic and co-curricular activities.
                </p>
                <p>
                  Our state-of-the-art campus, equipped with modern facilities and 
                  staffed by experienced educators, provides an ideal environment for 
                  learning and growth. We believe in combining traditional values with 
                  contemporary teaching methods to prepare students for the challenges 
                  of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="vision-mission" 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <Target size={32} />
            </div>
            <h2>Vision and Mission</h2>
          </div>
          <div className="content">
            <div className="vision-mission-grid">
              <div className="vision-box">
                <h3>Our Vision</h3>
                <p>
                  To establish a school that is multifaceted in approach and endowed 
                  with ideally suited infrastructure and environment to accomplish the 
                  multi-fold objective of education:
                </p>
                <ul>
                  <li>To augment the academic acumen of learners</li>
                  <li>To invest in pupils' holistic development</li>
                  <li>To unleash their innate potential</li>
                  <li>To drive them towards global citizenship</li>
                </ul>
              </div>
              <div className="mission-box">
                <h3>Our Mission</h3>
                <ul className="mission-list">
                  <li>Shape young minds into responsible and reliable citizens</li>
                  <li>Provide top-class educational infrastructure and amenities</li>
                  <li>Maintain a competent, professional teaching faculty that works as a team</li>
                  <li>Instill confidence, discipline, and self-esteem in our students</li>
                  <li>Inculcate positive attitude, teamwork, and leadership qualities</li>
                  <li>Foster a strong sense of patriotism and cultural values</li>
                  <li>Enable students to excel in sports and co-curricular activities</li>
                  <li>Create an environment that promotes innovation and creativity</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="inspiration" 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <History size={32} />
            </div>
            <h2>Our Inspiration</h2>
          </div>
          <div className="content">
            <div className="inspiration-grid">
              <div className="inspiration-image">
                <img 
                  src="https://raw.githubusercontent.com/devloper-dp/vpa/f7e92cdd95b9cd08407115d703cc074e75cbd615/public/images/inspiration.png"
                  alt="Our Inspiration"
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="inspiration-text">
                <p>
                  Our inspiration stems from the timeless principles of Indian education 
                  and the modern needs of global citizens. We draw motivation from:
                </p>
                <ul>
                  <li>Ancient Indian educational philosophy that emphasizes character building</li>
                  <li>Modern educational pioneers who revolutionized teaching methods</li>
                  <li>Our commitment to excellence in education</li>
                  <li>The potential we see in every child</li>
                </ul>
                <p>
                  We believe in creating an educational environment that nurtures 
                  creativity, critical thinking, and moral values while preparing 
                  students for the challenges of the future.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="team-management" 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <Users size={32} />
            </div>
            <h2>Team Management</h2>
          </div>
          <div className="content">
            <div className="team-grid">
              {[
                {
                  role: "Academic Leadership",
                  description: "Our academic team comprises experienced educators who ensure the highest standards of teaching and learning.",
                  responsibilities: [
                    "Curriculum development and implementation",
                    "Teacher training and development",
                    "Student performance monitoring",
                    "Educational innovation"
                  ]
                },
                {
                  role: "Administrative Staff",
                  description: "Our administrative team ensures smooth operation of all school activities and facilities.",
                  responsibilities: [
                    "Resource management",
                    "Infrastructure maintenance",
                    "Student services",
                    "Parent communication"
                  ]
                },
                {
                  role: "Support Staff",
                  description: "Our support staff maintains the school environment and assists in daily operations.",
                  responsibilities: [
                    "Campus maintenance",
                    "Security services",
                    "Health and safety",
                    "Transportation management"
                  ]
                }
              ].map((team, index) => (
                <motion.div 
                  key={index}
                  className="team-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3>{team.role}</h3>
                  <p>{team.description}</p>
                  <ul>
                    {team.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="achievements" 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="section-icon">
              <Award size={32} />
            </div>
            <h2>Our Achievements</h2>
          </div>
          <div className="content">
            <div className="achievements-grid">
              {[
                {
                  title: "Academic Excellence",
                  stats: "100% Pass Rate",
                  description: "Consistent academic performance with students achieving top ranks in board examinations."
                },
                {
                  title: "Sports Achievement",
                  stats: "50+ Medals",
                  description: "Outstanding performance in district and state level sports competitions."
                },
                {
                  title: "Cultural Excellence",
                  stats: "25+ Awards",
                  description: "Recognition in various cultural and artistic competitions at regional level."
                },
                {
                  title: "Infrastructure",
                  stats: "Modern Facilities",
                  description: "State-of-the-art infrastructure including smart classrooms and laboratories."
                }
              ].map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3>{achievement.title}</h3>
                  <div className="achievement-stats">{achievement.stats}</div>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default About;
