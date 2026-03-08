import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { features } from '../data/content';
import AtomLogo3D from '../components/AtomLogo3D';

const HUDOverlay = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 font-mono text-xs tracking-wider z-20"
      >
        <div className="glass-border px-4 py-2 rounded">
          <span className="text-[#facc15]">SYSTEM_STATUS:</span>{' '}
          <span className="text-green-400">ACTIVE</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-8 right-8 font-mono text-xs tracking-wider z-20"
      >
        <div className="glass-border px-4 py-2 rounded">
          <span className="text-[#facc15]">NODE_ID:</span>{' '}
          <span className="text-white">TRC-MAIN-01</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-8 left-8 font-mono text-xs tracking-wider z-20"
      >
        <div className="glass-border px-4 py-2 rounded">
          <span className="text-[#facc15]">UPTIME:</span>{' '}
          <span className="text-white">{formatUptime(uptime)}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-8 right-8 font-mono text-xs tracking-wider z-20"
      >
        <div className="glass-border px-4 py-2 rounded">
          <span className="text-[#facc15]">ENCRYPTION:</span>{' '}
          <span className="text-white">AES-256</span>
        </div>
      </motion.div>
    </>
  );
};

const TerminalMarquee = () => {
  const logs = [
    '[INFO] New research cycle initiated...',
    '[SUCCESS] Symposium dates finalized...',
    '[DATA] Collaboration requests pending: 3',
    '[SYSTEM] Publication pipeline active',
    '[ALERT] Recruitment applications open',
    '[INFO] Lab access granted to new members',
    '[SUCCESS] Research paper submitted for review',
  ];

  return (
    <div className="w-full overflow-hidden bg-black/40 border-y border-white/10 py-3">
      <div className="flex animate-scroll">
        {[...logs, ...logs].map((log, index) => (
          <span
            key={index}
            className="font-mono text-xs text-[#facc15] whitespace-nowrap mx-8"
          >
            {log}
          </span>
        ))}
      </div>
    </div>
  );
};

const MagneticButton = ({ children, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-border px-8 py-3 rounded font-bold text-sm tracking-wide 
                 hover:bg-[#facc15] hover:text-[#0a0a0a] transition-colors 
                 duration-300 inline-block"
    >
      {children}
    </motion.a>
  );
};

const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const domains = [
    {
      id: 1,
      title: 'Core Research',
      description:
        'Our primary mission is to advance technological frontiers through rigorous experimentation, peer collaboration, and open-source contributions. We operate at the intersection of hardware, software, and human-centered design.',
      size: 'large',
    },
    {
      id: 2,
      title: 'Collaborations',
      description: 'Partner Labs & Departments',
      partners: [
        'Quantum Computing Lab',
        'AI Ethics Institute',
        'Biotech Research Center',
        'Robotics Division',
      ],
      size: 'medium',
    },
    {
      id: 3,
      title: 'Publications',
      description: '47 papers published',
      stat: '12 active projects',
      size: 'small',
    },
    {
      id: 4,
      title: 'Recruitments',
      description: 'Applications Open',
      stat: 'Spring 2026 Cohort',
      size: 'small',
    },
  ];

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-black mb-4 text-white">
          The <span className="text-[#facc15]">Registry</span>
        </h2>
        <p className="text-white/60 mb-12 font-mono text-sm">
          // Research Domains & Operational Status
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Tile 1 - Large (takes 2 columns and 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 glass-border rounded-lg p-8 
                       hover:border-electric-yellow/50 transition-all duration-300 
                       group"
          >
            <div className="font-mono text-xs text-[#facc15] mb-4">
              [PRIMARY_DOMAIN]
            </div>
            <h3 className="text-3xl font-bold mb-4 group-hover:text-[#facc15] transition-colors">
              {domains[0].title}
            </h3>
            <p className="text-white/70 leading-relaxed">{domains[0].description}</p>
          </motion.div>

          {/* Tile 2 - Medium (takes 2 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 glass-border rounded-lg p-6 
                       hover:border-electric-yellow/50 transition-all duration-300 
                       group"
          >
            <div className="font-mono text-xs text-[#facc15] mb-3">
              [NETWORK_NODES]
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#facc15] transition-colors">
              {domains[1].title}
            </h3>
            <p className="text-white/60 text-sm mb-3">{domains[1].description}</p>
            <ul className="space-y-2">
              {domains[1].partners.map((partner, idx) => (
                <li key={idx} className="font-mono text-xs text-white/50">
                  → {partner}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tile 3 - Small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-border rounded-lg p-6 
                       hover:border-electric-yellow/50 transition-all duration-300 
                       group"
          >
            <div className="font-mono text-xs text-[#facc15] mb-3">
              [ARCHIVE_STATUS]
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#facc15] transition-colors">
              {domains[2].title}
            </h3>
            <p className="text-white/60 text-sm mb-1">{domains[2].description}</p>
            <p className="font-mono text-xs text-white/50">{domains[2].stat}</p>
          </motion.div>

          {/* Tile 4 - Small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-border rounded-lg p-6 
                       hover:border-electric-yellow/50 transition-all duration-300 
                       group cursor-pointer"
          >
            <div className="font-mono text-xs text-[#facc15] mb-3">
              [ACCESS_PORTAL]
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#facc15] transition-colors">
              {domains[3].title}
            </h3>
            <p className="text-green-400 text-sm mb-1 font-semibold">{domains[3].description}</p>
            <p className="font-mono text-xs text-white/50">{domains[3].stat}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="film-grain min-h-screen">
      {/* Hero Section with 3D Atom */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HUDOverlay />
        
        <div className="absolute inset-0 z-10">
          <AtomLogo3D />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center max-w-4xl px-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-mono text-xs text-[#facc15] mb-6 tracking-widest"
          >
            [ RESEARCH · INNOVATION · COMMUNITY ]
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-6xl md:text-7xl font-black mb-6 leading-tight"
          >
            Innovating the future through{' '}
            <span className="text-[#facc15] text-glow">research</span> and technology
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-white/70 text-lg mb-12 leading-relaxed"
          >
            Join a community of researchers, engineers, and storytellers shaping the next frontier
            of science through hands-on experimentation and bold collaborations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex gap-6 justify-center"
          >
            <MagneticButton href="/recruitments">Join Us</MagneticButton>
            <MagneticButton href="/events">Explore Events</MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Terminal Marquee */}
      <TerminalMarquee />

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-border rounded-lg p-12 text-center"
        >
          <div className="font-mono text-xs text-[#facc15] mb-4 tracking-widest">
            [ READY_TO_JOIN ]
          </div>
          <h2 className="text-4xl font-black mb-4">
            Become part of the Tech Researchers Club
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Connect with multi-disciplinary teams, access mentorship, and showcase your research
            with a global audience.
          </p>
          <MagneticButton href="/recruitments">Apply Now</MagneticButton>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
