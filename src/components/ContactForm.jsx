import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState(null);

  useEffect(() => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';

    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = 'Enter a valid email.';

    if (!formData.message.trim()) errs.message = 'Message is required.';

    setErrors(errs);
  }, [formData]);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (serverStatus) setServerStatus(null);
  };

  const handleBlur = (e) => setTouched((p) => ({ ...p, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setServerStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setServerStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
      } else {
        setServerStatus({
          type: 'error',
          message: data.error || 'Server rejected submission. Please check your input.'
        });
      }
    } catch (err) {
      setServerStatus({
        type: 'error',
        message: 'Unable to connect to the server. Please verify the backend is running on port 5000.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      {serverStatus?.type === 'success' && (
        <div className="alert-success">{serverStatus.message}</div>
      )}

      {serverStatus?.type === 'error' && (
        <div className="alert-error">{serverStatus.message}</div>
      )}

      <div className="form-group">
        <label htmlFor="name">Your Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.name && errors.name ? 'invalid' : ''}
          required
        />
        {touched.name && errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Your Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.email && errors.email ? 'invalid' : ''}
          required
        />
        {touched.email && errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.message && errors.message ? 'invalid' : ''}
          required
        />
        {touched.message && errors.message && <span className="error-text">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitting || !!Object.keys(errors).length}
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  );
}
