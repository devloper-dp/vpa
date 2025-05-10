import React from 'react';
import '../styles/Choice.css';

const Choice: React.FC = () => {
  return (
    <div className="choice-container">
      <div className="choice-wrapper">
        <div className="choice-title">
          <h1>We Are The Best <span>Choice For Your Child</span></h1>
        </div>
        
        <p>
          We are the best choice for your child because we offer a nurturing and
          stimulating environment tailored to their unique needs, with a team of
          dedicated professionals committed to fostering their growth and
          development. Our innovative programs and personalized approach ensure
          that your child receives the highest quality education and care.
        </p>
        
        <div className="choice-button">
          <a href="tel:9424452727">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Choice;