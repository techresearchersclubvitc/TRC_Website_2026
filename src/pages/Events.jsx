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
      className={`relative mb-32 
        ${isLeft ? 'lg:mr-auto lg:pr-24' : 'lg:ml-auto lg:pl-24'}
        max-lg:ml-auto max-lg:pl-8
        lg:w-[42%] md:w-[70%] w-[85%]`}
      style={{ 
        minWidth: '280px',
        maxWidth: '500px'
      }}
    >
      <div className="glass-border rounded-sm lg:p-6 p-4 hover:border-[#facc15]/50 transition-all duration-300 group">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono lg:text-xs text-[10px] text-[#facc15] tracking-wider">
            [{event.category.toUpperCase()}]
          </span>
          <span className="font-mono lg:text-xs text-[10px] text-white/40">
            ID: {String(event.id).padStart(3, '0')}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="lg:text-2xl text-lg font-black mb-3 group-hover:text-[#facc15] transition-colors">
          {event.title}
        </h3>

        {/* Date - Large Monospace */}
        <div className="font-mono lg:text-xl text-base font-semibold text-[#facc15] mb-4 tracking-tight">
          {event.date}
        </div>

        {/* Details Grid */}
        <div className="space-y-2 mb-4 lg:text-sm text-xs">
          <div className="flex items-start">
            <span className="font-mono text-white/50 lg:w-20 w-16">TIME:</span>
            <span className="text-white/80">{event.time}</span>
          </div>
          <div className="flex items-start">
            <span className="font-mono text-white/50 lg:w-20 w-16">VENUE:</span>
            <span className="text-white/80">{event.venue}</span>
          </div>
          <div className="flex items-start">
            <span className="font-mono text-white/50 lg:w-20 w-16">SIZE:</span>
            <span className="text-white/80">{event.capacity}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 lg:text-sm text-xs leading-relaxed lg:mb-6 mb-4 border-t border-white/10 lg:pt-4 pt-3">
          {event.description}
        </p>

        {/* Action Button */}
        <button className="w-full lg:py-2 py-1.5 lg:px-4 px-3 border border-white/20 rounded lg:text-sm text-xs font-mono 
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
        className="relative text-center lg:mb-16 mb-12 lg:px-8 px-4"
      >
        <div className="font-mono lg:text-xs text-[10px] text-[#facc15] lg:mb-4 mb-3 tracking-widest">
          [ WORKSHOPS · CONFERENCES · SYMPOSIUMS ]
        </div>
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-black lg:mb-6 mb-4">
          Event <span className="text-[#facc15]">Timeline</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto font-mono lg:text-sm text-xs">
          // Immersive experiences that blend research showcases with hands-on collaborative labs
        </p>
      </motion.div>

      {/* Timeline Container with DNA Helix */}
      <div className="relative max-w-6xl mx-auto lg:px-8 px-4">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-black text-center lg:mb-16 mb-12">
          <span className="text-white">Upcoming </span>
          <span className="text-[#facc15]">Events</span>
        </h2>

        {/* DNA Helix - Fixed/Sticky in Center */}
        <div className="absolute left-1/2 lg:left-1/2 md:left-1/3 max-md:left-1/4 lg:top-40 top-32 -translate-x-1/2 lg:w-[500px] md:w-[400px] max-md:w-[300px] pointer-events-none" style={{ height: `${events.length * 550 + 250}px` }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#facc15]/5 to-transparent blur-3xl" />
            <DNAThread scrollVelocity={scrollVelocity} />
            
            {/* Dark gradient overlay at top for fade-in effect */}
            <div 
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{
                height: '400px',
                background: 'linear-gradient(to top, transparent 0%, rgba(10, 10, 10, 0.5) 40%, rgba(10, 10, 10, 0.9) 100%)'
              }}
            />
            
            {/* Dark gradient overlay at bottom for fade-out effect */}
            <div 
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: '500px',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.3) 30%, rgba(10, 10, 10, 0.7) 60%, rgba(10, 10, 10, 0.95) 100%)'
              }}
            />
          </motion.div>
        </div>

        {/* Vertical Timeline Line (subtle background) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-0" />

        {/* Event Cards */}
        <div className="relative lg:pt-24 pt-16 lg:pb-32 pb-24">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Events;
