import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text">
            <div className="badge">B.Tech Computer Science &amp; Engineering @ NIT Warangal</div>
            <h1>Hi, I'm <span className="highlight">Sumedh J Jamadagni</span></h1>
            <p className="hero-lead">
              Undergraduate Computer Science student at <strong>National Institute of Technology Warangal</strong> and Full-Stack Engineer. Webmaster at IEEE NIT Warangal with a passion for building full-stack web applications, machine learning solutions, and system-level software.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Projects &rarr;</Link>
              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-title">developer_profile.cpp</span>
              </div>
              <div className="terminal-body">
                <div><span className="code-keyword">#include</span> &lt;iostream&gt;</div>
                <div><span className="code-keyword">using namespace std</span>;</div>
                <br />
                <div><span className="code-keyword">struct</span> <span className="code-func">Developer</span> &#123;</div>
                <div style={{ paddingLeft: '1rem' }}>string name = <span className="code-str">"Sumedh J Jamadagni"</span>;</div>
                <div style={{ paddingLeft: '1rem' }}>string degree = <span className="code-str">"B.Tech CSE @ NIT Warangal"</span>;</div>
                <div style={{ paddingLeft: '1rem' }}>float cgpa = <span className="code-func">8.01</span>;</div>
                <div style={{ paddingLeft: '1rem' }}>string role = <span className="code-str">"IEEE Webmaster &amp; Engineer"</span>;</div>
                <div style={{ paddingLeft: '1rem' }}>vector&lt;string&gt; stack = &#123;</div>
                <div style={{ paddingLeft: '2rem' }}><span className="code-str">"React.js &amp; Node.js"</span>,</div>
                <div style={{ paddingLeft: '2rem' }}><span className="code-str">"C++ &amp; Python ML"</span>,</div>
                <div style={{ paddingLeft: '2rem' }}><span className="code-str">"Docker &amp; Linux Telemetry"</span></div>
                <div style={{ paddingLeft: '1rem' }}>&#125;;</div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Core Engineering Focus</h2>
          <div className="skills-grid" style={{ marginTop: '1.5rem' }}>
            <div className="card">
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.6rem', fontSize: '1.2rem' }}>Full-Stack Web Development</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                Building production web platforms like IEEE Xtreme 2026 and real-time WebRTC AI debate platforms with React, Node.js, Express, and MongoDB.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.6rem', fontSize: '1.2rem' }}>Machine Learning &amp; AI</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                Engineered ML models (Gradient Boosting &amp; Anomaly Detection) using PyTorch, Scikit-Learn, and ONNX for intelligent automation and compiler optimization.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.6rem', fontSize: '1.2rem' }}>Systems &amp; Container Infrastructure</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                Developing systems telemetry using Linux eBPF, cgroup v2 container freezer interventions, PySide6 desktop interfaces, and C++ backends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
