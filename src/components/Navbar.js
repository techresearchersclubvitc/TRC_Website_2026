import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/content';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="nav-brand">
        <Link to="/">
          <div className="logo-mark">TRC</div>
          <div>
            <p>Tech Researchers Club</p>
            <small>Innovating the future</small>
          </div>
        </Link>
      </div>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="#contact" className="btn btn-primary nav-cta">
          Contact Us
        </a>
      </nav>
      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Navbar;
