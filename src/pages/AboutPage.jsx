import React from 'react';
import Skills from '../components/Skills';

const coursework = [
  "Data Structures & Algorithms", "Compiler Design", "Operating Systems",
  "Database Management Systems", "Object-Oriented Programming",
  "Design & Analysis of Algorithms", "Software Engineering"
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education &amp; Coursework</h2>
          <div className="card edu-card">
            <div className="edu-header">
              <div>
                <h3>National Institute of Technology Warangal</h3>
                <p className="subtext">Bachelor of Technology in Computer Science and Engineering</p>
              </div>
              <div className="edu-meta">
                <span className="date-badge">Aug 2024 – Expected May 2028</span>
                <span className="score-tag">CGPA: 8.01 / 10</span>
              </div>
            </div>

            <div className="coursework-section">
              <h4>Key Coursework Covered:</h4>
              <div className="tag-group">
                {coursework.map((c, i) => <span className="tag" key={i}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <Skills />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="card exp-card">
            <div className="exp-header">
              <div>
                <h3>Webmaster / Full-Stack Engineer</h3>
                <p className="subtext">IEEE Student Branch, NIT Warangal</p>
              </div>
              <span className="date-badge">Mar 2026 - Present</span>
            </div>
            <ul className="bullet-points">
              <li>Developed and deployed the official event platform for IEEE Xtreme 2026, supporting 11 live challenge stations and 100+ participants.</li>
              <li>Created responsive frontend interfaces with custom animations optimized for mobile and desktop users.</li>
              <li>Collaborated with the IEEE organizing committee to deliver features on schedule.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
