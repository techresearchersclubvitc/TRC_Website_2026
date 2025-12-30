import './Team.css';
import { boardMembers, teamLeads } from '../data/content';

const TeamSection = ({ title, members }) => (
  <div>
    <h3 className="team-subheading">{title}</h3>
    <div className="grid team-grid">
      {members.map((member) => (
        <article key={member.name} className="card team-card">
          <div className="avatar" />
          <h4>{member.name}</h4>
          <p className="role">{member.role}</p>
          <p className="focus">{member.focus}</p>
          <div className="team-socials">
            {['in', 'gh'].map((icon) => (
              <span key={`${member.name}-${icon}`}>{icon.toUpperCase()}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Team = () => (
  <section className="section-wrapper team-shell">
    <p className="tag-pill">Leaders · Engineers · Storytellers</p>
    <h2 className="section-heading">Meet Our Team</h2>
    <p className="section-subtitle">
      Passionate researchers, developers, and innovators driving the future of technology.
    </p>

    <TeamSection title="Board Members" members={boardMembers} />
    <TeamSection title="Team Leads" members={teamLeads} />
  </section>
);

export default Team;
