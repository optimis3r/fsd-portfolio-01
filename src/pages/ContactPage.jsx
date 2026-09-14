import React from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="contact-page section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <p>Feel free to reach out for collaborations, research inquiries, or project opportunities!</p>
            <div className="info-list card" style={{ padding: '1.5rem' }}>
              <p><strong>Email:</strong> <a href="mailto:sumedhjamadagni@gmail.com">sumedhjamadagni@gmail.com</a></p>
              <p><strong>Phone:</strong> +91 9483303539</p>
              <p><strong>Location:</strong> Bangalore, India</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/optimis3r" target="_blank" rel="noopener noreferrer">github.com/optimis3r</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sumedhj/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sumedhj</a></p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
