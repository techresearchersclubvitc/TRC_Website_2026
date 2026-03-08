import './Recruitments.css';
import { recruitmentTracks } from '../data/content';

const Recruitments = () => (
  <section className="section-wrapper recruit-shell">
    <p className="tag-pill">Opportunities · Collaborations · Fellowships</p>
    <h2 className="section-heading">Join Our Team</h2>
    <p className="section-subtitle">
      We are looking for passionate individuals to help drive innovation, design beautiful products,
      and share research stories with the world.
    </p>

    {/* Recruitment Closed Banner */}
    <div className="recruitment-closed-banner">
      <div className="banner-content">
        <span className="banner-icon">⚠</span>
        <div className="banner-text">
          <h3>Recruitments Closed</h3>
          <p>We are currently not recruiting. Please check back later for future opportunities.</p>
        </div>
      </div>
    </div>

    <div className="grid recruit-grid recruit-grid-disabled">
      {recruitmentTracks.map((track) => (
        <article key={track.title} className="card recruit-card">
          <div className="recruit-icon" />
          <h3>{track.title}</h3>
          <p>{track.blurb}</p>
          <button className="btn btn-outline" disabled>Currently Closed</button>
        </article>
      ))}
    </div>
  </section>
);

export default Recruitments;
