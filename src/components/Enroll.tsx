import React from 'react';
import '../styles/Enroll.css';
import { PhoneCall } from 'lucide-react';

const Enroll: React.FC = () => {
  return (
    <div className="enroll-container">
      <div className="enroll-wrapper">
        <div className="enroll-title">
          <h1>Call To Enroll Your Child</h1>
        </div>
        
        <p>
          Call today to enroll your child and give them the opportunity to
          thrive in a nurturing and dynamic environment. Our dedicated staff
          offers exceptional teaching and personalized attention, ensuring a
          positive and impactful educational experience for every student.
        </p>
        
        <div className="phone-button">
          <PhoneCall size={32} className="phone-icon" />
          <a href="tel:9424452727">9424452727</a>
        </div>
      </div>
    </div>
  );
};

export default Enroll;