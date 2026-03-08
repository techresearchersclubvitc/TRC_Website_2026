import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  // Board Members Contact Information
  const boardMembers = [
    { name: 'Diraq', role: 'Chairperson', email: 'diraq@techresearchers.club' },
    { name: 'Abhinav', role: 'Vice Chair', email: 'abhinav@techresearchers.club' },
    { name: 'Prayasha', role: 'Chair', email: 'prayasha@techresearchers.club' }
  ];

  // Department Leads Contact Information
  const departmentLeads = [
    { name: 'Aditya Bhandari', department: 'Web Dev - Backend', email: 'aditya.backend@techresearchers.club' },
    { name: 'Priyanka', department: 'Web Dev - Frontend', email: 'priyanka.frontend@techresearchers.club' },
    { name: 'Viswosurya', department: 'Design', email: 'viswosurya.design@techresearchers.club' },
    { name: 'Hemeshwar', department: 'Content', email: 'hemeshwar.content@techresearchers.club' },
    { name: 'Tarun', department: 'Research & Dev', email: 'tarun.research@techresearchers.club' },
    { name: 'Omar', department: 'Outreach', email: 'omar.outreach@techresearchers.club' }
  ];

  return (
    <div className="contact-page">
      {/* Grid Pattern Background */}
      <div className="grid-pattern" />

      <div className="contact-container">
        {/* Header Section */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Reach out to our board members and department leads directly via email.
          </p>
        </motion.div>

        {/* Board Members Section */}
        <motion.div
          className="contacts-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            BOARD MEMBERS
            <span className="title-bracket">]</span>
          </h2>
          <div className="contacts-grid">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.email}
                className="contact-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="card-header">
                  <h3 className="contact-name">{member.name}</h3>
                  <span className="contact-role">{member.role}</span>
                </div>
                <a href={`mailto:${member.email}`} className="contact-email">
                  <span className="email-icon">✉</span>
                  {member.email}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Department Leads Section */}
        <motion.div
          className="contacts-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            DEPARTMENT LEADS
            <span className="title-bracket">]</span>
          </h2>
          <div className="contacts-grid">
            {departmentLeads.map((lead, index) => (
              <motion.div
                key={lead.email}
                className="contact-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="card-header">
                  <h3 className="contact-name">{lead.name}</h3>
                  <span className="contact-role">{lead.department}</span>
                </div>
                <a href={`mailto:${lead.email}`} className="contact-email">
                  <span className="email-icon">✉</span>
                  {lead.email}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* General Info Sidebar */}
        <motion.div
          className="info-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        >
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="info-title">General Information</h3>

            {/* General Email */}
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
              delay: 1.2,
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
