import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container not-found-container">
      <div className="not-found-title">404</div>
      <h2>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)' }}>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
