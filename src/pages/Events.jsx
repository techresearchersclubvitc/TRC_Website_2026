import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { events } from '../data/content';
import DNAThread from '../components/DNAThread';

const EventRing = ({ event, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: 'spring',
        stiffness: 120
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`absolute ${isLeft ? 'lg:right-[55%] md:right-[60%] right-[65%]' : 'lg:left-[55%] md:left-[60%] left-[65%]'}`}
      style={{ 
        top: `${index * 700 + 80}px`,
        zIndex: isHovered ? 50 : 10
      }}
    >
      <motion.div
        layout
        className="relative"
      >
        {/* Collapsed Ring State */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              layout
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={`glass-border rounded-full px-6 py-3 cursor-pointer
                         hover:border-[#facc15]/70 transition-all duration-300
                         ${isLeft ? 'lg:mr-8 md:mr-6 mr-4' : 'lg:ml-8 md:ml-6 ml-4'}`}
              style={{ minWidth: '200px' }}
            >
              <div className="text-center">
                <div className="font-mono text-xs text-[#facc15] mb-1 tracking-wider">
                  {event.date}
                </div>
                <div className="text-sm font-bold text-white/90 truncate">
                  {event.title}
                </div>
              </div>
              
              {/* Connector Line to Helix */}
              <motion.div
                className={`absolute top-1/2 ${isLeft ? 'left-full' : 'right-full'} 
                           h-[2px] bg-gradient-to-r ${isLeft ? 'from-[#facc15]/50 to-transparent' : 'from-transparent to-[#facc15]/50'}`}
                style={{ width: isLeft ? '100px' : '100px' }}
              />
              
              {/* Pulsing Ring Indicator */}
              <motion.div
                className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? '-right-2' : '-left-2'}
                           w-4 h-4 bg-[#facc15] rounded-full`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Card State */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.85, x: isLeft ? -20 : 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: isLeft ? -20 : 20 }}
              transition={{ 
                duration: 0.4,
                type: 'spring',
                stiffness: 200,
                damping: 25
              }}
              className={`glass-border rounded-sm p-6 cursor-pointer
                         border-[#facc15]/70 shadow-[0_0_40px_rgba(250,204,21,0.3)]
                         ${isLeft ? 'lg:mr-8 md:mr-6 mr-4' : 'lg:ml-8 md:ml-6 ml-4'}`}
              style={{ 
                minWidth: '320px',
                maxWidth: '450px',
                width: '420px'
              }}
            >
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
              <h3 className="text-2xl font-black mb-3 text-[#facc15]">
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
              
              {/* Connector Line to Helix */}
              <motion.div
                className={`absolute top-12 ${isLeft ? 'left-full' : 'right-full'} 
                           h-[2px] bg-gradient-to-r ${isLeft ? 'from-[#facc15] to-transparent' : 'from-transparent to-[#facc15]'}`}
                style={{ width: '100px' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
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
        <div className="absolute left-1/2 lg:left-1/2 md:left-1/3 max-md:left-1/4 lg:top-40 top-32 -translate-x-1/2 lg:w-[300px] md:w-[250px] max-md:w-[200px] pointer-events-none" style={{ height: `${events.length * 700 - 100}px` }}>
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

        {/* Event Rings */}
        <div className="relative lg:pt-24 pt-16 lg:pb-24 pb-16" style={{ minHeight: `${events.length * 700}px` }}>
          {events.map((event, index) => (
            <EventRing key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-16" />
    </div>
  );
};

export default Events;
