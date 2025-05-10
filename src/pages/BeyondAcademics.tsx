import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, GraduationCap, Phone, School, Shield, Bus } from 'lucide-react';
import '../styles/BeyondAcademics.css';

const BeyondAcademics = () => {
  return (
    <div className="beyond-academics-page">
      <div className="inner-heading">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Beyond Academics
          </motion.h1>
        </div>
      </div>

      <main className="beyond-academics-content">
        <div className="container">
          <motion.section 
            id="school-uniform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <School size={32} />
            </div>
            <div className="content">
              <h2>School Uniform</h2>
              <p>
                Our school uniform fosters a sense of unity and pride among students. 
                It represents our values and the discipline we uphold.
              </p>
              <motion.a 
                href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/school-uniform.pdf" 
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Uniform Guide
              </motion.a>
            </div>
          </motion.section>

          <motion.section 
            id="code-of-conduct"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <Shield size={32} />
            </div>
            <div className="content">
              <h2>Code of Conduct</h2>
              <p>
                Our code of conduct ensures a safe, respectful, and supportive environment 
                for all students, staff, and visitors.
              </p>
              <motion.a 
                href="documents/code-of-conduct.pdf" 
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Code of Conduct
              </motion.a>
            </div>
          </motion.section>

          <motion.section 
            id="bagless-tuition-free"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <GraduationCap size={32} />
            </div>
            <div className="content">
              <h2>Bagless & Tuition Free</h2>
              <p>
                We promote a stress-free learning environment with our bagless and 
                tuition-free initiatives, ensuring holistic education for all.
              </p>
              <motion.a
                href="https://raw.githubusercontent.com/devloper-dp/vpa/325611c04ab21be5916c3fa3de28bfb867c5c306/public/documents/fees_structure.pdf" 
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Learn More
              </motion.a>
            </div>
          </motion.section>

          <motion.section 
            id="transportation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <Bus size={32} />
            </div>
            <div className="content">
              <h2>Transportation Route Information</h2>
              <p>
                Our school provides safe and efficient transportation options for students 
                across various routes, ensuring timely and secure travel.
              </p>
              <motion.a 
                href="https://raw.githubusercontent.com/devloper-dp/vpa/af6d99d650959f285d8db5e15a4ebc6925a6427b/public/documents/Busroute.xlsx" 
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                View Routes
              </motion.a>
            </div>
          </motion.section>

          <motion.section 
            id="policies-committees"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <FileText size={32} />
            </div>
            <div className="content">
              <h2>Policies and Committees</h2>
              <p>Find the documents related to the school's policies and committees here.</p>
              
              <div className="policy-list">
                {[
                  { name: 'Anti Bullying Policy', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Anti_Bullying_Policy.pdf' },
                  { name: 'Anti Corporal Punishment Policy', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Anti_Corporal_Punishment_Policy.pdf' },
                  { name: 'Child Protection Policy', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Child_Protection_Policy.pdf' },
                  { name: 'Cyber Policy', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Cyber_Policy.pdf' },
                  { name: 'Drug and Substance Abuse Policy', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Drug_and_Substance_Abuse_Policy.pdf' },
                  { name: 'Sexual Harassment of Women at Workplace', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Sexual_Harassment_Workplace_Policy.pdf' },
                  { name: 'The Flag Code of India', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Flag_Code_of_India.pdf' },
                  { name: 'POCSO Committee and Members', file: 'https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/SMC.jpg' }
                ].map((policy, index) => (
                  <motion.div 
                    key={index}
                    className="policy-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span>{policy.name}</span>
                    <motion.a 
                      href={policy.file}
                      className="download-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      download
                    >
                      <Download size={16} />
                      Download
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section 
            id="career-guide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <GraduationCap size={32} />
            </div>
            <div className="content">
              <h2>Career Guide</h2>
              <p>
                Our career guide provides valuable insights and advice to help students 
                plan and pursue their desired career paths.
              </p>
              <motion.a 
                href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/career-guide.pdf" 
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Career Guide
              </motion.a>
            </div>
          </motion.section>

          <motion.section 
            id="vpa-complaint"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <Phone size={32} />
            </div>
            <div className="content">
              <h2>VPA Complaint Desk</h2>
              <p>
                Our VPA Complaint Desk ensures that any concerns or issues are addressed 
                promptly and effectively.
              </p>
              <p className="contact-number">
                <strong>Contact Number: </strong>
                <a href="tel:+919424452727">+91 9424452727</a>
              </p>
              <motion.a 
                href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/vpa-complaint.pdf" 
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Submit a Complaint
              </motion.a>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default BeyondAcademics;