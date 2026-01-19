'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'cursed' | 'marigold' | 'geometric' | 'energy';
  delay: number;
  duration: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    const types: Particle['type'][] = ['cursed', 'marigold', 'geometric', 'energy'];

    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 6,
        type: types[Math.floor(Math.random() * types.length)],
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 15,
      });
    }
    setParticles(newParticles);
  }, []);

  const renderParticle = (particle: Particle) => {
    switch (particle.type) {
      case 'cursed':
        // JJK cursed energy particle
        return (
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, #a78bfa 0%, #6366f1 50%, transparent 70%)',
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
            }}
          />
        );
      case 'energy':
        // Energy wisp
        return (
          <div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, transparent 100%)',
              borderRadius: '50% 0 50% 0',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 8px rgba(129, 140, 248, 0.5)',
            }}
          />
        );
      case 'marigold':
        // Keep some desi elements
        return (
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'linear-gradient(135deg, #fb923c 0%, #fbbf24 100%)',
              boxShadow: '0 0 8px rgba(251, 146, 60, 0.5)',
            }}
          />
        );
      case 'geometric':
        // Tech geometric
        return (
          <div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              boxShadow: '0 0 8px rgba(139, 92, 246, 0.5)',
            }}
          />
        );
    }
  };

  return (
    <div className="particles-container fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Domain Expansion style background pattern */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.03] dark:opacity-[0.06]"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="domain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          {/* Cursed technique pattern - JJK inspired */}
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 100 100)`}>
              <path
                d="M100 15 L105 35 L100 30 L95 35 Z"
                fill="url(#domain-grad)"
              />
              <line x1="100" y1="35" x2="100" y2="85" stroke="url(#domain-grad)" strokeWidth="0.5" />
            </g>
          ))}
          {/* Concentric circles like domain boundary */}
          <circle cx="100" cy="100" r="30" fill="none" stroke="url(#domain-grad)" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#domain-grad)" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#domain-grad)" strokeWidth="0.3" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#domain-grad)" strokeWidth="0.2" />
          {/* Inner hexagram pattern */}
          {[...Array(6)].map((_, i) => (
            <line
              key={`hex-${i}`}
              x1="100"
              y1="70"
              x2="100"
              y2="100"
              stroke="url(#domain-grad)"
              strokeWidth="0.3"
              transform={`rotate(${i * 60} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Secondary rotating pattern (opposite direction) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] dark:opacity-[0.04]"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 100 100)`}>
              <path
                d="M100 20 Q110 50 100 80"
                fill="none"
                stroke="#6366f1"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-100px',
            opacity: [0, 0.7, 0.7, 0],
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}

      {/* Ambient cursed energy wisps */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`wisp-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
}
