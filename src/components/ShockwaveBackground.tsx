'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BurstParticle {
  id: number;
  angle: number;
  distance: number;
  size: number;
  duration: number;
}

export default function ShockwaveBackground() {
  const [burstParticles, setBurstParticles] = useState<BurstParticle[]>([]);
  const [burstKey, setBurstKey] = useState(0);

  // Generate burst particles
  const generateBurst = useCallback(() => {
    const particles: BurstParticle[] = [];
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        angle: (360 / particleCount) * i + Math.random() * 20 - 10,
        distance: 150 + Math.random() * 100,
        size: 4 + Math.random() * 4,
        duration: 1.5 + Math.random() * 0.5,
      });
    }
    setBurstParticles(particles);
    setBurstKey(prev => prev + 1);
  }, []);

  // Trigger burst on rhythm
  useEffect(() => {
    generateBurst();
    const interval = setInterval(generateBurst, 5000); // Every 5 seconds
    return () => clearInterval(interval);
  }, [generateBurst]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Breathing background gradient */}
      <motion.div
        className="absolute inset-0 breathing-bg"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Central Epicenter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Shockwave rings */}
        <div className="shockwave-ring" />
        <div className="shockwave-ring" />
        <div className="shockwave-ring" />

        {/* Pulsing core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, #6366f1 50%, transparent 100%)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Energy burst particles */}
        <AnimatePresence mode="wait">
          <motion.div key={burstKey} className="absolute top-1/2 left-1/2">
            {burstParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  width: particle.size,
                  height: particle.size,
                  background: `linear-gradient(135deg, #818cf8, #a855f7)`,
                  boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
                  left: -particle.size / 2,
                  top: -particle.size / 2,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  x: Math.cos((particle.angle * Math.PI) / 180) * particle.distance,
                  y: Math.sin((particle.angle * Math.PI) / 180) * particle.distance,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  duration: particle.duration,
                  ease: 'easeOut',
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating energy wisps */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`wisp-${i}`}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 20,
            height: 100 + i * 20,
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `radial-gradient(circle, rgba(99, 102, 241, ${0.05 + i * 0.01}) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, 20 * (i % 2 === 0 ? -1 : 1), 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Corner energy accents */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(99, 102, 241, 0.1) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.25,
        }}
      />

    </div>
  );
}
