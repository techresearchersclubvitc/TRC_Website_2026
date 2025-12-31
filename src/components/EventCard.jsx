import React from 'react';
import './EventCard.css';

function EventCard({ event }) {
  const isLeft = event.position === 'left';

  return (
    <div className={`event-card-wrapper ${isLeft ? 'left' : 'right'}`}>
      <div className="event-card">
        {/* Timeline Dot (Desktop) */}
        <div className="timeline-dot"></div>

        {/* Image */}
        <div className="event-image">
          <img src={event.image} alt={event.title} />
          <div className="image-overlay"></div>
          <span className="event-tag">{event.tag}</span>
        </div>

        {/* Content */}
        <div className="event-content">
          <h3 className="event-title">{event.title}</h3>

          <div className="event-details">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span>{event.date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🕐</span>
              <span>{event.time}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <span>{event.location}</span>
            </div>
          </div>

          <p className="event-description">{event.description}</p>

          <button className="register-btn">
            Register Now
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;