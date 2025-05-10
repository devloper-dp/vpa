import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddressClick = () => {
    window.open('https://maps.google.com/?q=Vaishnavi+Public+Academy+Betul', '_blank');
  };

  return (
    <>
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="footer-logo" onClick={handleLogoClick}>
                  <img 
                    src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/logo.jpg" 
                    alt="Vaishnavi Public Academy Logo" 
                    className="main-logo"
                  />
                </div>
                <p className="footer-description">
                  Vaishnavi Public Academy in Betul offers a comprehensive educational
                  experience with a focus on academic excellence and holistic
                  development. Our dedicated staff and modern facilities ensure a nurturing 
                  environment for student success.
                </p>
              </div>
              
              <div className="footer-links-section">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                  <li><Link to="/" className="footer-link">Home</Link></li>
                  <li><Link to="/about" className="footer-link">About</Link></li>
                  <li><Link to="/academics" className="footer-link">Academics</Link></li>
                  <li><Link to="/admission" className="footer-link">Admission</Link></li>
                  <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                  <li><Link to="/beyond-academics" className="footer-link">Beyond Academics</Link></li>
                  <li><Link to="/exam" className="footer-link">Exam</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                </ul>
              </div>
              
              <div className="footer-contact">
                <h3>Get in Touch</h3>
                <ul className="footer-contact-info">
                  <li onClick={handleAddressClick} className="address-link">
                    <MapPin size={16} className="contact-icon" />
                    <span>Vaishnavi Nagar, Betul Road, Gunkhed, Th-Athner, Distt-Betul</span>
                  </li>
                  <li>
                    <Mail size={16} className="contact-icon" />
                    <a href="mailto:info@vpabetul.org" className="contact-link">info@vpabetul.org</a>
                  </li>
                  <li>
                    <Phone size={16} className="contact-icon" />
                    <a href="tel:9424452727" className="contact-link">9424 452 727</a>
                  </li>
                </ul>
                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" aria-label="Facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <Facebook size={16} />
                    </a>
                    <a href="#" aria-label="Twitter" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <Twitter size={16} />
                    </a>
                    <a href="https://www.instagram.com/vpa_athner/" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <Instagram size={16} />
                    </a>
                    <a href="https://www.youtube.com/@vaishnavipublicacademyathner" aria-label="Youtube" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <Youtube size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="footer-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.6923690948333!2d77.9121915750493!3d21.636907980169017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd677137235d0af%3A0xe0cd98bcefd567e8!2sVAISHNAVI%20PUBLIC%20ACADEMY!5e0!3m2!1sen!2sin!4v1724436240444!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              Copyright © {new Date().getFullYear()} Vaishnavi Public Academy. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;