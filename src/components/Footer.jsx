import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Sumedh J Jamadagni. All rights reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-outline btn-sm">
          Back to Top &uarr;
        </button>
      </div>
    </footer>
  );
}
