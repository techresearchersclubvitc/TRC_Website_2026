import './Team.css';
import { motion } from 'framer-motion';
import { boardMembers, teamLeads } from '../data/content';

const MemberCard = ({ member, isLead, index }) => {
  return (
    <motion.article
      className="team-member-card"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
    >
      {/* Spherical Portrait with LEAD Badge */}
      <div className="portrait-wrapper">
        <div className="spherical-portrait">
          <div className="avatar-placeholder" />
        </div>
        {isLead && (
          <div className="lead-badge">
            <span>LEAD</span>
          </div>
        )}
      </div>

      {/* Member Info */}
      <h4 className="member-name">{member.name}</h4>
      <p className="member-role">{member.role}</p>
      <p className="member-focus">{member.focus}</p>

      {/* Social Icons */}
      <div className="social-icons">
        <button className="social-btn">IN</button>
        <button className="social-btn">GH</button>
      </div>
    </motion.article>
  );
};

const TeamSection = ({ title, members, isLead }) => {
  return (
    <div className="team-section">
      <h3 className="team-section-title">{title}</h3>
      <motion.div
        className="team-grid"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {members.map((member, index) => (
          <MemberCard
            key={member.name}
            member={member}
            isLead={isLead}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="team-page">
      {/* Section Header */}
      <div className="team-header">
        <motion.p
          className="tag-pill"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Leaders · Engineers · Storytellers
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Passionate researchers, developers, and innovators driving the future of technology.
        </motion.p>
      </div>

      {/* Board Members Section */}
      <TeamSection title="Board Members" members={boardMembers} isLead={false} />

      {/* Team Leads Section */}
      <TeamSection title="Team Leads" members={teamLeads} isLead={true} />
    </section>
  );
};

export default Team;
