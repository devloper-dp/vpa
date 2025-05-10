import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="contact-page">
      <div className="inner-heading">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-info-grid" data-aos="fade-up">
            {[
              {
                icon: <Phone size={24} />,
                title: "Call Us",
                content: <a href="tel:+919424452727">+91 9424452727</a>
              },
              {
                icon: <Mail size={24} />,
                title: "Mail Us",
                content: <a href="mailto:info@vpabetul.org">info@vpabetul.org</a>
              },
              {
                icon: <Clock size={24} />,
                title: "Opening Hours",
                content: (
                  <>
                    <p>Mon - Sat: 9am to 5pm</p>
                    <p>Sun: Closed</p>
                  </>
                )
              },
              {
                icon: <MapPin size={24} />,
                title: "Address",
                content: "Vaishnavi Nagar, Betul Road, Gunkhed, Th-Athner, Distt-Betul"
              }
            ].map((item, index) => (
              <div className="contact-info-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="icon">
                  {item.icon}
                </div>
                <div className="info">
                  <h3>{item.title}</h3>
                  {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-map">
            <div className="contact-form" data-aos="fade-right">
              <div className="form-header">
                <h3>Get In Touch</h3>
                <div className="form-underline"></div>
              </div>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="First Name" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Last Name" className="form-control" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" placeholder="Email Address" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows={4} className="form-control"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                  <span className="btn-effect"></span>
                </button>
              </form>
            </div>

            <div className="contact-map" data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.692241061699!2d77.91219157432421!3d21.636912966615203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd677137235d0af%3A0xe0cd98bcefd567e8!2sVAISHNAVI%20PUBLIC%20ACADEMY!5e0!3m2!1sen!2sin!4v1724660463405!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;