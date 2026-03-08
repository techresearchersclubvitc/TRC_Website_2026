import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  // Magnetic hover effect
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="contact-page">
      {/* Grid Pattern Background */}
      <div className="grid-pattern" />

      <div className="contact-container">
        {/* Form Section */}
        <motion.div
          className="form-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              Have a question or want to collaborate? Drop us a message.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us what you're thinking..."
                rows="6"
              />
            </div>

            {/* Submit Button with Magnetic Effect */}
            <motion.button
              ref={buttonRef}
              type="submit"
              className="submit-btn"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND MESSAGE →
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div
          className="info-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="info-title">Contact Information</h3>

            {/* Email */}
            <div className="info-item">
              <span className="info-label">[MAIL]</span>
              <a href="mailto:contact@techresearchers.club" className="info-value">
                contact@techresearchers.club
              </a>
            </div>

            {/* Location with Pulsing Dot */}
            <div className="info-item">
              <span className="info-label">[LOC]</span>
              <div className="location-container">
                <span className="pulsing-dot" />
                <span className="info-value">
                  Innovation Hub, Main Campus<br />
                  University of Technology
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="info-item">
              <span className="info-label">[WEB]</span>
              <div className="social-links">
                <a
                  href="https://github.com/techresearchers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>GH</span>
                  <span className="link-arrow">→</span>
                </a>
                <a
                  href="https://linkedin.com/company/techresearchers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>IN</span>
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="info-item">
              <span className="info-label">[HRS]</span>
              <span className="info-value">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 2:00 PM
              </span>
            </div>
          </motion.div>

          {/* Digital Glitch Effect Decoration */}
          <motion.div
            className="glitch-decoration"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: 'spring',
              stiffness: 200
            }}
          >
            <div className="glitch-line" />
            <div className="glitch-line" />
            <div className="glitch-line" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
