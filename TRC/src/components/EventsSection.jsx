import React from 'react';
import EventCard from './EventCard';
import './EventsSection.css';

function EventsSection() {
  const [events] = React.useState([
    {
      id: 1,
      title: 'AI Research Symposium',
      date: 'June 15, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Tech Center Auditorium',
      description: 'Join us for a day of cutting-edge AI research presentations from leading experts.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80',
      tag: 'Upcoming',
      position: 'left',
    },
    {
      id: 2,
      title: 'Blockchain Workshop Series',
      date: 'July 8-10, 2023',
      time: '1:00 PM - 5:00 PM',
      location: 'Innovation Lab',
      description: 'A three-day workshop covering blockchain fundamentals, smart contracts, and more.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&q=80',
      tag: 'Upcoming',
      position: 'right',
    },
    {
      id: 3,
      title: 'Tech Research Hackathon',
      date: 'August 5-6, 2023',
      time: '9:00 AM - 9:00 PM',
      location: 'Main Campus Hub',
      description: 'A 36-hour hackathon focused on solving real-world problems through technology.',
      image: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?w=500&q=80',
      tag: 'Upcoming',
      position: 'left',
    },
  ]);

  return (
    <div className="events-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <span className="hero-badge">Explore Our Activities</span>
          <h1 className="hero-title">
            Upcoming <span className="gradient-text">Events</span>
          </h1>
          <p className="hero-subtitle">
            Join us for interactive workshops, cutting-edge tech conferences, and networking meetups designed to inspire and educate.
          </p>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="arrow-down"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-line"></div>
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Have an idea for an event?</h2>
          <p>We are always open to new collaborations and community-led workshops.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Propose an Event</button>
            <button className="btn btn-secondary">Contact Organizers</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsSection;