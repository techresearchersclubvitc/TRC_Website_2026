import './Home.css';
import { features } from '../data/content';

const Home = () => (
  <div className="home-shell">
    <section className="hero">
      <div className="hero-content">
        <p className="tag-pill">Research · Innovation · Community</p>
        <h1 className="hero-title">Innovating the future through research and technology.</h1>
        <p className="hero-subtitle">
          Join a community of researchers, engineers, and storytellers shaping the next frontier of
          science through hands-on experimentation and bold collaborations.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/recruitments">
            Join Us
          </a>
          <a className="btn btn-outline" href="/events">
            Explore Events
          </a>
        </div>
      </div>
      <div className="hero-art">
        <div className="orb" />
        <div className="hero-stat">
          <h3>140+</h3>
          <p>Active researchers</p>
        </div>
        <div className="hero-stat">
          <h3>28</h3>
          <p>Annual initiatives</p>
        </div>
      </div>
    </section>

    <section className="section-wrapper">
      <h2 className="section-heading">What We Do</h2>
      <p className="section-subtitle">
        The Tech Researchers Club explores cutting-edge ideas through curated labs, public demos,
        and open learning cohorts.
      </p>
      <div className="grid feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="card feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="text-link">Learn more →</button>
          </article>
        ))}
      </div>
    </section>

    <section className="cta-panel">
      <div>
        <p className="tag-pill">Ready to join?</p>
        <h2>Become part of the Tech Researchers Club</h2>
        <p>
          Connect with multi-disciplinary teams, access mentorship, and showcase your research with
          a global audience.
        </p>
      </div>
      <a className="btn btn-primary" href="/recruitments">
        Apply Now
      </a>
    </section>
  </div>
);

export default Home;
