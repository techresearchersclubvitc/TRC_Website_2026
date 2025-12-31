import React, { useEffect, useRef } from "react";
import "./App.css";
import AtomLogo from "./AppLogo"; 
import OrbitsBackground from "./OrbitsBackground";

const App = () => {
  const cardsRef = useRef([]);

  // Fade‑in on scroll for "What we do" cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const setCardRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  return (
  <div className="macbook-pro-14-2">
<div className="macbook-pro-14-2-child" />
  <div className="macbook-pro-14-2-item" />
    <div className="page">
      
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
    <AtomLogo className="navbar-logo" />   {/* NEW */}
    <span>Tech Researchers Club</span>
  </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#team">Team</a>
          <a href="#events">Events</a>
          <a href="#blogs">Blogs</a>
          <a href="#recruitments">Recruitments</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

        {/* floating side orbits */}
        <main id="home" className="hero">
  {/* central logo, etc. */}
<OrbitsBackground className="orbits-bg" />

        {/* central atom that rotates on very first load */}
        <div className="hero-atom-wrapper">
          <AtomLogo className="hero-atom once-rotate" />
        </div>

        <section className="hero-content">
          <div className="hero-banner">
            <h1>Innovating the Future through Research and Technology</h1>
          </div>
          <p className="hero-subtext">
            Join a community of innovative thinkers, researchers, and tech
            enthusiasts dedicated to pushing the boundaries of what’s possible.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Join Us →</button>
            <button className="secondary-btn">Explore Events</button>
          </div>
        </section>
      </main>

      {/* What we do section */}
      <section className="what-section" id="what">
        <div className="what-header">
          <h2>What we do ?</h2>
          <p>
            The Tech Researchers Club is dedicated to exploring cutting-edge
            technology and research.
          </p>
        </div>

        <div className="what-grid">
          {[
            "Innovative Ideas",
            "Community",
            "Events & Workshops",
            "Publications",
          ].map((title, idx) => (
            <div
              key={idx}
              className="what-card card-hidden"
              ref={el => setCardRef(el, idx)}
            >
              <div className="card-icon" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
  );
};

export default App;
