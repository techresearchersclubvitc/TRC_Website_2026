import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-icon">TR</div>
              <span>Tech<span className="highlight">Researchers</span></span>
            </div>
            <p className="footer-description">
              Empowering the next generation of tech innovators through knowledge sharing, collaborative research, and hands-on workshops.
            </p>
            <div className="social-links">
              <a href="#" title="GitHub">🐙</a>
              <a href="#" title="Twitter">𝕏</a>
              <a href="#" title="LinkedIn">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <div>contact@techresearchers.club</div>
                  <div>partnerships@techresearchers.club</div>
                </div>
              </div>
            </div>
            <div className="newsletter">
              <h4>Subscribe to Newsletter</h4>
              <p>Get updates on latest events.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Email address" />
                <button>Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Tech Researchers Club. All rights reserved.</p>
          <p>Made with ❤️ by TRC Dev Team</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;