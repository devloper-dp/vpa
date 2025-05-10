import React from 'react';
import '../styles/Exam.css';

const Exam = () => {
  return (
    <div className="exam-page">
      <div className="inner-heading">
        <div className="container">
          <h1>Exam Information</h1>
        </div>
      </div>

      <main className="exam-content">
        <section id="timetable">
          <div className="inner-heading-wrap">
            <h2>Time Table</h2>
          </div>
          <div className="content">
            <p>Find the latest exam timetable for the current session. Please ensure you are aware of the dates and timings of your exams.</p>
            <a href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/timetable.pdf" className="download-btn">Download Time Table</a>
          </div>
        </section>

        <section id="ptm">
          <div className="inner-heading-wrap">
            <h2>PTM Notice</h2>
          </div>
          <div className="content">
            <p>Important notices regarding the Parent Teacher Meeting (PTM) will be shared here. Stay updated with the latest information.</p>
            <a href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/ptm_notice.pdf" className="download-btn">Download PTM Notice</a>
          </div>
        </section>

        <section id="notice">
          <div className="inner-heading-wrap">
            <h2>Exam Notices</h2>
          </div>
          <div className="content">
            <p>All exam-related notices, including guidelines, rules, and any changes in the schedule, will be available in this section.</p>
            <a href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/exam_notice.pdf" className="download-btn">Download Exam Notice</a>
          </div>
        </section>

        <section id="downloads">
          <div className="inner-heading-wrap">
            <h2>Additional Downloads</h2>
          </div>
          <div className="content">
            <p>Download additional resources related to exams, such as sample papers, exam rules, and more.</p>
            <a href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/additional_resources.zip" className="download-btn">Download Additional Resources</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Exam;