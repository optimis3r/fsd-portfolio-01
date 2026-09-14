import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="nav-brand">
          <span className="brand-dot"></span>
          <span>Sumedh J Jamadagni</span>
        </Link>

        <nav className={`nav-links ${isMobileOpen ? 'active' : ''}`} aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>

          <button type="button" className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle dark/light theme">
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
