import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpen, Calendar, Clock, Trophy, Users, Download } from 'lucide-react';
import '../styles/Academics.css';

const Academics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="academics-page">
      <div className="inner-heading">
        <div className="container">
          <h1>Academics</h1>
        </div>
      </div>

      <main className="academics-content">
        <section id="syllabus" className="academics-section" data-aos="fade-up">
          <div className="section-header">
            <div className="section-icon">
              <BookOpen size={32} />
            </div>
            <h2>Syllabus</h2>
          </div>
          
          <div className="section-content">
            <div className="grade-grid">
              {[
                {
                  grade: "Grade 1-5",
                  subjects: ["Basic Mathematics", "English", "Science", "Social Studies"]
                },
                {
                  grade: "Grade 6-8",
                  subjects: ["Advanced Mathematics", "Literature", "Physics", "Chemistry", "History"]
                },
                {
                  grade: "Grade 9-10",
                  subjects: ["Algebra", "Geometry", "Biology", "World History", "Economics"]
                },
                {
                  grade: "Grade 11-12",
                  subjects: ["Calculus", "Physics", "Chemistry", "Computer Science", "Political Science"]
                }
              ].map((item, index) => (
                <div className="grade-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3>{item.grade}</h3>
                  <ul>
                    {item.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="book-list" className="academics-section" data-aos="fade-up">
          <div className="section-header">
            <div className="section-icon">
              <BookOpen size={32} />
            </div>
            <h2>Book List - Session Wise</h2>
          </div>
          
          <div className="section-content">
            <div className="session-grid">
              {[
                {
                  session: "Session 1 (June - September)",
                  books: ["English Reader", "Math Workbook", "Science Guide"]
                },
                {
                  session: "Session 2 (October - December)",
                  books: ["Literature Text", "History Book", "Physics Fundamentals"]
                },
                {
                  session: "Session 3 (January - March)",
                  books: ["Biology Textbook", "Chemistry Lab Manual", "Computer Basics"]
                }
              ].map((item, index) => (
                <div className="session-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3>{item.session}</h3>
                  <ul>
                    {item.books.map((book, idx) => (
                      <li key={idx}>{book}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/book list 25-26.pdf" className="download-btn" download>
              <Download size={20} />
              Download Booklist
            </a>
          </div>
        </section>

        <section id="academic-calendar" className="academics-section" data-aos="fade-up">
          <div className="section-header">
            <div className="section-icon">
              <Calendar size={32} />
            </div>
            <h2>Academic Calendar</h2>
          </div>
          
          <div className="section-content">
            <div className="calendar-grid">
              {[
                {
                  term: "Term 1",
                  events: [
                    { title: "School Reopens", date: "June 1, 2024" },
                    { title: "Mid-Term Exams", date: "September 15-20, 2024" }
                  ]
                },
                {
                  term: "Term 2",
                  events: [
                    { title: "Winter Break", date: "December 20, 2024 - January 5, 2025" },
                    { title: "Annual Day", date: "February 10, 2025" }
                  ]
                },
                {
                  term: "Term 3",
                  events: [
                    { title: "Final Exams", date: "March 15-25, 2025" }
                  ]
                }
              ].map((item, index) => (
                <div className="calendar-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3>{item.term}</h3>
                  <ul>
                    {item.events.map((event, idx) => (
                      <li key={idx}><strong>{event.title}:</strong> {event.date}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a href="https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/CALENDER 2024 NEW DESIGN (6)_11zon.pdf" className="download-btn" download>
              <Download size={20} />
              Download Academic Calendar
            </a>
          </div>
        </section>

        <section id="ptm" className="academics-section" data-aos="fade-up">
          <div className="section-header">
            <div className="section-icon">
              <Users size={32} />
            </div>
            <h2>Parent-Teacher Meetings</h2>
          </div>
          
          <div className="section-content">
            <div className="ptm-grid">
              <div className="ptm-card" data-aos="fade-up">
                <h3>PTM Schedule</h3>
                <ul>
                  {[
                    { number: "1", date: "10 August 2024" },
                    { number: "2", date: "21 September 2024" },
                    { number: "3", date: "14 December 2024" },
                    { number: "4", date: "2 February 2025" }
                  ].map((ptm, index) => (
                    <li key={index}><strong>PTM {ptm.number}:</strong> {ptm.date}</li>
                  ))}
                </ul>
                <p className="ptm-note">Please ensure to book your slot in advance.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="school-hours" className="academics-section" data-aos="fade-up">
          <div className="section-header">
            <div className="section-icon">
              <Clock size={32} />
            </div>
            <h2>School Hours</h2>
          </div>
          
          <div className="section-content">
            <div className="hours-grid">
              <div className="hours-card" data-aos="fade-up">
                <h3>Timings</h3>
                <ul>
                  <li><strong>School Hours:</strong> 9 AM - 5 PM</li>
                  <li><strong>Monday - Saturday:</strong> Full day</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="academics-section" data-aos="fade-up">
          <div className="section-header">
            <div className="section-icon">
              <Trophy size={32} />
            </div>
            <h2>School Achievements</h2>
          </div>
          
          <div className="section-content">
            <div className="achievements-grid">
              {[
                {
                  title: "2023 Science Olympiad",
                  achievement: "Gold Medal in Physics"
                },
                {
                  title: "2023 National Debate Competition",
                  achievement: "1st Place"
                },
                {
                  title: "2023 Regional Sports Meet",
                  achievement: "Champions in Basketball and Soccer"
                }
              ].map((item, index) => (
                <div className="achievement-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3>{item.title}</h3>
                  <p>{item.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Academics;