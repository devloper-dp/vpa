import React from 'react';
import '../styles/Features.css';

const features = [
  {
    icon: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/teacher.png",
    title: "Expert Teachers",
    description: "Expert Teachers provide valuable insights and guidance, enhancing the learning experience for all students.",
    color: "#f0aa00"
  },
  {
    icon: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/book.png",
    title: "Quality Education",
    description: "Quality education fosters critical thinking and empowers students to achieve their full potential.",
    color: "#ff002a"
  },
  {
    icon: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/support.png",
    title: "Life Time Support",
    description: "Lifetime support ensures ongoing assistance and resources, helping individuals achieve long-term success and growth.",
    color: "#003d69"
  },
  {
    icon: "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/scholarship.png",
    title: "Scholarship News",
    description: "Scholarship news highlights new funding opportunities, making higher education more accessible for students.",
    color: "#3db2d5"
  }
];

const Features: React.FC = () => {
  return (
    <div className="features-container">
      <div className="features-wrapper">
        <div className="our-course-categories">
          <div className="categories-wrap">
            <ul className="categories-list">
              {features.map((feature, index) => (
                <li key={index} className="category-item">
                  <div 
                    className="categories-course"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 200}`}
                  >
                    <div className="item-inner" style={{ backgroundColor: feature.color }}>
                      <div className="course-icon">
                        <div className="course-icon-inner">
                          <img src={feature.icon} alt={feature.title} />
                        </div>
                      </div>
                      <div className="course-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;