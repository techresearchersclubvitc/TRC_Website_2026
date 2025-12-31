import clubLogo from '../assets/club_logo.png';
import './Footer.css';

const Footer = () => (
  <footer id="contact" className="footer-shell">
    <div className="footer-brand">
      <img src={clubLogo} alt="TRC Logo" className="logo-mark" />
      <div>
        <h4>Tech Researchers Club</h4>
        <p>Innovating the future through research and technology.</p>
        <div className="socials">
          {['in', 'gh', 'tw', 'ig'].map((icon) => (
            <span key={icon}>{icon.toUpperCase()}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="footer-links">
      <h5>Quick Links</h5>
      <a href="/">Home</a>
      <a href="/team">Team</a>
      <a href="/events">Events</a>
      <a href="/recruitments">Recruitments</a>
    </div>
    <div className="footer-contact">
      <h5>Contact</h5>
      <a href="mailto:info@techresearchers.club">info@techresearchers.club</a>
      <p>University Research Center</p>
      <p>Tech Innovation Campus</p>
      <p>Open for collaborations and partnerships</p>
    </div>
  </footer>
);

export default Footer;
