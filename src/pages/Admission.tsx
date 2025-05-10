import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, Phone, MapPin, Calendar, FileText, User, Image, Home, BookOpen, GraduationCap, Download } from 'lucide-react';
import '../styles/Admission.css';

const Admission = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    class: '',
    address: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="admission-page">
      <div className="inner-heading">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Academic Community
          </motion.h1>
        </div>
      </div>

      <main className="admission-content">
        <section id="procedure" className="admission-section">
          <motion.div 
            className="inner-heading-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Admission Procedure</h2>
          </motion.div>
          <div className="content">
            <div className="procedure-grid">
              <motion.div 
                className="procedure-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="procedure-icon">
                  <FileText size={24} />
                </div>
                <h3>Step 1: Application Form</h3>
                <p>Fill out the admission application form with accurate details</p>
              </motion.div>

              <motion.div 
                className="procedure-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="procedure-icon">
                  <FileDown size={24} />
                </div>
                <h3>Step 2: Submit Documents</h3>
                <p>Submit all required documents for verification</p>
              </motion.div>

              <motion.div 
                className="procedure-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="procedure-icon">
                  <Calendar size={24} />
                </div>
                <h3>Step 3: Schedule Interview</h3>
                <p>Schedule an interview with our admission team</p>
              </motion.div>

              <motion.div 
                className="procedure-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="procedure-icon">
                  <User size={24} />
                </div>
                <h3>Step 4: Final Admission</h3>
                <p>Complete the admission process and secure your seat</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="eligibility" className="admission-section">
          <motion.div 
            className="inner-heading-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Eligibility Criteria</h2>
          </motion.div>
          <div className="content">
            <div className="eligibility-grid">
              <motion.div 
                className="eligibility-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <BookOpen size={24} />
                <h3>Pre-Primary (Nursery to UKG)</h3>
                <p>Age: 3+ to 5+ years as on 31st March</p>
              </motion.div>

              <motion.div 
                className="eligibility-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GraduationCap size={24} />
                <h3>Primary (Class I to V)</h3>
                <p>Age: 6+ to 10+ years as on 31st March</p>
              </motion.div>

              <motion.div 
                className="eligibility-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GraduationCap size={24} />
                <h3>Middle (Class VI to VIII)</h3>
                <p>Age: 11+ to 13+ years as on 31st March</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="documents" className="admission-section">
          <motion.div 
            className="inner-heading-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Required Documents</h2>
          </motion.div>
          <div className="content">
            <div className="documents-grid">
              <motion.div 
                className="document-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FileText size={24} />
                <h3>Birth Certificate</h3>
              </motion.div>

              <motion.div 
                className="document-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FileText size={24} />
                <h3>Transfer Certificate</h3>
              </motion.div>

              <motion.div 
                className="document-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FileText size={24} />
                <h3>Report Cards</h3>
              </motion.div>

              <motion.div 
                className="document-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image size={24} />
                <h3>Photographs</h3>
              </motion.div>

              <motion.div 
                className="document-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Home size={24} />
                <h3>Address Proof</h3>
              </motion.div>

              <motion.div 
                className="document-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <FileText size={24} />
                <h3>Aadhar Card</h3>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="admission-form" className="admission-section">
          <motion.div 
            className="inner-heading-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Admission Enquiry Form</h2>
          </motion.div>
          <div className="content">
            <form className="admission-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="class">Class Applying For</label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
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

                <div className="form-group full-width">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  ></textarea>
                </div>
              </div>

              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Enquiry
              </motion.button>
            </form>
          </div>
        </section>

        <section id="contact" className="admission-section">
          <motion.div 
            className="inner-heading-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Contact Admission Office</h2>
          </motion.div>
          <div className="content">
            <div className="contact-grid">
              <motion.div 
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Phone size={24} />
                <h3>Phone Numbers</h3>
                <p>
                  <a href="tel:+919424452727">+91 9424452727</a>
                </p>
              </motion.div>

              <motion.div 
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Mail size={24} />
                <h3>Email Address</h3>
                <p>
                  <a href="mailto:admissions@vpabetul.org">admissions@vpabetul.org</a>
                </p>
              </motion.div>

              <motion.div 
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <MapPin size={24} />
                <h3>Location</h3>
                <p>Vaishnavi Nagar, Betul Road, Gunkhed, Th-Athner, Distt-Betul</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="apply" className="admission-section">
          <motion.div 
            className="inner-heading-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Apply Now</h2>
          </motion.div>
          <div className="content">
            <div className="apply-buttons">
              <motion.a 
                href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/application-form.pdf" 
                className="apply-btn download"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Download size={20} />
                Download Application Form
              </motion.a>
              <motion.a 
                href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/application-form.pdf" 
                className="apply-btn online"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Apply Online
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admission;