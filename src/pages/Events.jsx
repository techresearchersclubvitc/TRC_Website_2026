import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { events } from '../data/content';
import DNAThread from '../components/DNAThread';

const EventCard = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.9 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      className={`relative mb-32 ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
      style={{ 
        width: '45%',
        minWidth: '320px',
        maxWidth: '500px'
      }}
    >
      <div className="glass-border rounded-sm p-6 hover:border-[#facc15]/50 transition-all duration-300 group">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-[#facc15] tracking-wider">
            [{event.category.toUpperCase()}]
          </span>
          <span className="font-mono text-xs text-white/40">
            ID: {String(event.id).padStart(3, '0')}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="text-2xl font-black mb-3 group-hover:text-[#facc15] transition-colors">
          {event.title}
        </h3>

        {/* Date - Large Monospace */}
        <div className="font-mono text-xl font-semibold text-[#facc15] mb-4 tracking-tight">
          {event.date}
        </div>

        {/* Details Grid */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-start">
            <span className="font-mono text-white/50 w-20">TIME:</span>
            <span className="text-white/80">{event.time}</span>
          </div>
          <div className="flex items-start">
            <span className="font-mono text-white/50 w-20">VENUE:</span>
            <span className="text-white/80">{event.venue}</span>
          </div>
          <div className="flex items-start">
            <span className="font-mono text-white/50 w-20">SIZE:</span>
            <span className="text-white/80">{event.capacity}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-6 border-t border-white/10 pt-4">
          {event.description}
        </p>

        {/* Action Button */}
        <button className="w-full py-2 px-4 border border-white/20 rounded text-sm font-mono 
                         hover:bg-[#facc15] hover:text-[#0a0a0a] hover:border-[#facc15] 
                         transition-all duration-300">
          REGISTER_NOW →
        </button>
      </div>

      {/* Connector Dot */}
      <div
        className={`absolute top-8 ${isLeft ? 'right-0' : 'left-0'} w-4 h-4 
                   bg-[#facc15] rounded-full border-4 border-[#0a0a0a]
                   shadow-[0_0_20px_rgba(250,204,21,0.6)]`}
        style={{
          transform: isLeft ? 'translateX(50%)' : 'translateX(-50%)'
        }}
      />
    </motion.div>
  );
};

const Events = () => {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTime - lastTime.current;
      
      // Calculate velocity (pixels per millisecond)
      const velocity = deltaTime > 0 ? deltaY / deltaTime : 0;
      
      setScrollVelocity(velocity);
      
      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] py-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-16 px-8"
      >
        <div className="font-mono text-xs text-[#facc15] mb-4 tracking-widest">
          [ WORKSHOPS · CONFERENCES · SYMPOSIUMS ]
        </div>
        <h1 className="text-6xl font-black mb-6">
          Event <span className="text-[#facc15]">Timeline</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto font-mono text-sm">
          // Immersive experiences that blend research showcases with hands-on collaborative labs
        </p>
      </motion.div>

      {/* Timeline Container with DNA Helix */}
      <div className="relative max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-black text-center mb-16">
          <span className="text-white">Upcoming </span>
          <span className="text-[#facc15]">Events</span>
        </h2>

        {/* DNA Helix - Fixed/Sticky in Center */}
        <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[500px] pointer-events-none" style={{ height: `${events.length * 600}px` }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#facc15]/5 to-transparent blur-3xl" />
            <DNAThread scrollVelocity={scrollVelocity} />
          </motion.div>
        </div>

        {/* Vertical Timeline Line (subtle background) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-0" />

        {/* Event Cards */}
        <div className="relative">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-32" />
    </div>
  );
};

export default Events;
