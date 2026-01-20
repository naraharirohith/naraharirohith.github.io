'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 rangoli-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-temple-900 dark:text-white mb-4">
            The <span className="text-gradient">Developer</span> Behind the Code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative glass-card p-8 card-lift card-shockwave">
              {/* Decorative mandala corners */}
              <div className="absolute top-4 left-4 w-16 h-16 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="corner-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                  {[...Array(8)].map((_, i) => (
                    <path
                      key={i}
                      d="M50 10 Q60 30 50 50"
                      fill="none"
                      stroke="url(#corner-grad-1)"
                      strokeWidth="2"
                      transform={`rotate(${i * 45} 50 50)`}
                    />
                  ))}
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10 rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <path
                      key={i}
                      d="M50 10 Q60 30 50 50"
                      fill="none"
                      stroke="url(#corner-grad-1)"
                      strokeWidth="2"
                      transform={`rotate(${i * 45} 50 50)`}
                    />
                  ))}
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-lg text-temple-700 dark:text-temple-300 leading-relaxed mb-6">
                  Software Engineer with <span className="font-semibold text-saffron-500">3+ years of experience</span> building
                  scalable APIs, secure backend systems, and production-ready dApps. Contributed to infrastructure
                  serving <span className="font-semibold text-magenta-500">1M+ users</span> at Arcana Networks.
                </p>
                <p className="text-lg text-temple-700 dark:text-temple-300 leading-relaxed mb-6">
                  Winner of <span className="font-semibold text-sacred-500">Avalanche Track at Chainlink x Chromia Hackathon 2025</span> ($1K prize)
                  for building psiX, a privacy-preserving perpetual trading platform using zero-knowledge proofs
                  and cross-chain technology.
                </p>
                <p className="text-lg text-temple-700 dark:text-temple-300 leading-relaxed">
                  Passionate about building systems at the intersection of cryptography, distributed systems,
                  and blockchain technology. Always exploring new ways to create secure, scalable, and
                  user-friendly applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Education Card */}
            <div className="glass-card p-6 card-lift card-shockwave">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sacred-500/20 to-sacred-600/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sacred-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-temple-900 dark:text-white mb-1">Education</h3>
                  <p className="text-temple-600 dark:text-temple-400 text-sm">B.Tech, Computer Science</p>
                  <p className="text-temple-500 dark:text-temple-500 text-sm">Amrita Vishwa Vidyapeetham</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 text-xs font-medium">
                      8.2 GPA
                    </span>
                    <span className="text-temple-400 text-xs">May 2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 card-lift card-shockwave">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500/20 to-saffron-600/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-saffron-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-temple-900 dark:text-white mb-1">Location</h3>
                  <p className="text-temple-600 dark:text-temple-400 text-sm">Based in India</p>
                  <p className="text-magenta-500 text-sm font-medium mt-1">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-6 card-lift card-shockwave">
              <h3 className="font-semibold text-temple-900 dark:text-white mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-temple-600 dark:text-temple-400 text-sm">Production Systems</span>
                  <span className="font-semibold text-saffron-500">1M+ Users</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-temple-600 dark:text-temple-400 text-sm">Transactions Processed</span>
                  <span className="font-semibold text-magenta-500">4M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-temple-600 dark:text-temple-400 text-sm">CTF Competitions</span>
                  <span className="font-semibold text-sacred-500">20+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-temple-600 dark:text-temple-400 text-sm">Hackathon Winner</span>
                  <span className="font-semibold text-gold-500">Avalanche Track</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
