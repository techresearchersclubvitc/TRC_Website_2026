import React from 'react';
import Navigation from './components/Navigation';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <EventsSection />
      <Footer />
    </div>
  );
}

export default App;