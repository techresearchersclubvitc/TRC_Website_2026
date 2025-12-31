import './Events.css';
import { events } from '../data/content';

const Events = () => (
  <section className="section-wrapper events-shell">
    <p className="tag-pill">Workshops · Conferences · Meetups</p>
    <h2 className="section-heading">Events</h2>
    <p className="section-subtitle">
      Join us for immersive experiences that blend research showcases with hands-on labs.
    </p>

    <div className="events-toggle">
      <button className="btn btn-primary">Upcoming Events</button>
      <button className="btn btn-outline">Past Events</button>
    </div>

    <div className="timeline">
      {events.map((event) => (
        <article key={event.id} className="card timeline-item event-card">
          <div className="event-header">
            <h3>{event.title}</h3>
            <span className="tag-pill">Signature</span>
          </div>
          <ul>
            <li>
              <strong>Date:</strong> {event.date}
            </li>
            <li>
              <strong>Time:</strong> {event.time}
            </li>
            <li>
              <strong>Venue:</strong> {event.venue}
            </li>
          </ul>
          <p>{event.description}</p>
          <div className="event-meta">
            <span>{event.capacity}</span>
            <button className="btn btn-outline">Register</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Events;
