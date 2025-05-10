import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { School } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faGraduationCap,
  faUserPlus,
  faImages,
  faBook,
  faFileAlt,
  faClipboardList,
  faPhone,
  faChalkboardTeacher,
  faCaretDown,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    address: '',
    message: ''
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (!isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const toggleSubmenu = (index: number) => {
    if (window.innerWidth <= 991) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth > 991) {
      setActiveSubmenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 991) {
      setActiveSubmenu(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);

      // Clear form and close popup
      setFormData({
        name: '',
        email: '',
        phone: '',
        class: '',
        address: '',
        message: ''
      });
      setIsPopupOpen(false);
      document.body.style.overflow = 'unset';

      // Show success message
      alert('Enquiry submitted successfully! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 991) {
      setIsMobileMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <div className={`header-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="admission-enquiry">
        <a href="#" onClick={togglePopup}>ADMISSION ENQUIRY</a>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-form" onClick={e => e.stopPropagation()}>
            <h3>Admission Enquiry Form</h3>
            <span className="close-btn" onClick={togglePopup}>&times;</span>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name: *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email: *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number: *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  placeholder="Enter 10-digit phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="class">Class Applying For: *</label>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any specific requirements or questions?"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit Enquiry</button>
            </form>
          </div>
        </div>
      )}

      <div className="top-header">
        <div className="logo-container">
          <Link to="/">
            <div className="logo1">
              <img src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/logo.jpg" alt="Vaishnavi Public Academy Logo" />
            </div>
          </Link>
          <div className="additional-logos">
            <a href="https://www.cbse.gov.in/" target="_blank" rel="noopener noreferrer">
              <img src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/rtel.jpg" alt="SARAS" />
            </a>
            <a href="https://saras.cbse.gov.in/oasis/Login/Login" target="_blank" rel="noopener noreferrer">
              <img src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/sarasl.jpg" alt="OASIS" />
            </a>
            <a href="https://www.cbseacademic.nic.in/" target="_blank" rel="noopener noreferrer">
              <img src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/hpel.jpg" alt="HPE" />
            </a>
            <a href="https://rteportal.mp.gov.in/Login/Public/sLogin.aspx" target="_blank" rel="noopener noreferrer">
              <img src="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/images/oasisl.jpg" alt="RTE" />
            </a>
          </div>
        </div>
      </div>

      <div className="main-nav-container">
        <div className="nav-items-container">
          <div className="navigation-wrap" id="filters">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleMobileMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">Menu</Link>
              <div className={`navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
                <button className="close-toggler" onClick={toggleMobileMenu}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item home-button">
                    <Link className="nav-link active" to="/" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faHome} className="nav-icon" /> Home
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" /> About Us
                    </Link>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="fas"
                      onClick={() => toggleSubmenu(0)}
                    />
                    <ul className={`submenu ${activeSubmenu === 0 ? 'show' : ''}`}>
                      <li><Link to="/about#vpa" onClick={handleLinkClick}>About VPA</Link></li>
                      <li><Link to="/about#vision-mission" onClick={handleLinkClick}>Vision and mission</Link></li>
                      <li><Link to="/about#inspiration" onClick={handleLinkClick}>Our Inspiration</Link></li>
                      <li><Link to="/about#team-management" onClick={handleLinkClick}>Team management</Link></li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="/academics" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faGraduationCap} className="nav-icon" /> Academics
                    </Link>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="fas"
                      onClick={() => toggleSubmenu(1)}
                    />
                    <ul className={`submenu ${activeSubmenu === 1 ? 'show' : ''}`}>
                      <li><Link to="/academics#syllabus" onClick={handleLinkClick}>Syllabus</Link></li>
                      <li><a href="https://cbseacademic.nic.in/curriculum_2025.html" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>CBSE Website</a></li>
                      <li><Link to="/academics#book-list" onClick={handleLinkClick}>Booklist - Session wise</Link></li>
                      <li><Link to="/academics#academic-calendar" onClick={handleLinkClick}>Academics Calendar</Link></li>
                      <li><Link to="/academics#ptm" onClick={handleLinkClick}>Parent Teacher Meeting</Link></li>
                      <li><Link to="/academics#school-hours" onClick={handleLinkClick}>School hours</Link></li>
                      <li><Link to="/academics#achievements" onClick={handleLinkClick}>School achievement</Link></li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="/admission" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faUserPlus} className="nav-icon" /> Admission
                    </Link>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="fas"
                      onClick={() => toggleSubmenu(2)}
                    />
                    <ul className={`submenu ${activeSubmenu === 2 ? 'show' : ''}`}>
                      <li><Link to="/admission#procedure" onClick={handleLinkClick}>Procedure</Link></li>
                      <li><Link to="/admission#online-application" onClick={handleLinkClick}>Online application form</Link></li>
                      <li><Link to="/admission#admissions-enquiry" onClick={handleLinkClick}>Admission enquiry</Link></li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="/gallery" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faImages} className="nav-icon" /> Gallery
                    </Link>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="fas"
                      onClick={() => toggleSubmenu(3)}
                    />
                    <ul className={`submenu ${activeSubmenu === 3 ? 'show' : ''}`}>
                      <li><Link to="/gallery#photo" onClick={handleLinkClick}>Photo</Link></li>
                      <li><Link to="/gallery#video" onClick={handleLinkClick}>Video</Link></li>
                      <li><Link to="/gallery#news-published" onClick={handleLinkClick}>News Published</Link></li>
                      <li><Link to="/gallery#fit-india" onClick={handleLinkClick}>Fit India Movement</Link></li>
                      <li><Link to="/gallery#education-tour" onClick={handleLinkClick}>Education Tour</Link></li>
                      <li><Link to="/gallery#activity" onClick={handleLinkClick}>Activity</Link></li>
                      <li><Link to="/gallery#portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="/beyond-academics" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faBook} className="nav-icon" /> Beyond Academics
                    </Link>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="fas"
                      onClick={() => toggleSubmenu(4)}
                    />
                    <ul className={`submenu ${activeSubmenu === 4 ? 'show' : ''}`}>
                      <li><Link to="/beyond-academics#school-uniform" onClick={handleLinkClick}>School Uniform</Link></li>
                      <li><Link to="/beyond-academics#code-of-conduct" onClick={handleLinkClick}>Code of conduct</Link></li>
                      <li><Link to="/beyond-academics#bagless-tuition-free" onClick={handleLinkClick}>Bagless & Tuition free</Link></li>
                      <li><Link to="/beyond-academics#transportation" onClick={handleLinkClick}>Transportation</Link></li>
                      <li><Link to="/beyond-academics#policies-committees" onClick={handleLinkClick}>Policies and Committees</Link></li>
                      <li><Link to="/beyond-academics#career-guide" onClick={handleLinkClick}>Career Guide</Link></li>
                      <li><Link to="/beyond-academics#vpa-complaint" onClick={handleLinkClick}>VPA Complaint Desk</Link></li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="/exam" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faFileAlt} className="nav-icon" /> Exam
                    </Link>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="fas"
                      onClick={() => toggleSubmenu(5)}
                    />
                    <ul className={`submenu ${activeSubmenu === 5 ? 'show' : ''}`}>
                      <li><Link to="/exam#timetable" onClick={handleLinkClick}>Time table</Link></li>
                      <li><Link to="/exam#ptm" onClick={handleLinkClick}>PTM Notice</Link></li>
                      <li><Link to="/exam#notice" onClick={handleLinkClick}>Downloads</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/disclosure" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faClipboardList} className="nav-icon" /> Disclosure
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mandatory-disclosure" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faChalkboardTeacher} className="nav-icon" /> Mandatory Public Disclosure
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                      <FontAwesomeIcon icon={faPhone} className="nav-icon" /> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <div className="navbar-overlay" onClick={toggleMobileMenu}></div>}
    </div>
  );
};

export default Header;