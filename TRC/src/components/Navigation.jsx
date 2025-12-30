import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('events');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Team', id: 'team' },
    { label: 'Events', id: 'events' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Recruitments', id: 'recruitments' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">TR</div>
          <span>Tech<span className="highlight">Researchers</span></span>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;