'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Magnetic wrapper for buttons
function MagneticWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      className={`magnetic-target ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay content reveal for impact effect
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Main content */}
      <AnimatePresence>
        {showContent && (
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center lg:text-left"
              >
                {/* JJK-inspired badge with pulse */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 mb-6"
                >
                  <motion.span
                    className="text-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    ⚡
                  </motion.span>
                  <span className="text-sm font-medium text-indigo-400">
                    Limitless Code • Infinite Potential
                  </span>
                </motion.div>

                {/* Name with impact animation */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4"
                >
                  <motion.span
                    className="text-temple-900 dark:text-white inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Rohith
                  </motion.span>{' '}
                  <motion.span
                    className="text-gradient inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Narahari
                  </motion.span>
                </motion.h1>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl sm:text-2xl font-medium text-temple-600 dark:text-temple-400 mb-4"
                >
                  Software Engineer | Blockchain Developer
                </motion.h2>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-temple-700 dark:text-temple-300 mb-6 max-w-xl mx-auto lg:mx-0"
                >
                  Building scalable systems and privacy-preserving dApps
                </motion.p>

                {/* Stats with staggered reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                >
                  {[
                    { label: '3+ years', sublabel: 'experience' },
                    { label: '1M+', sublabel: 'users served' },
                    { label: 'Hackathon', sublabel: 'winner' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-xl bg-white/50 dark:bg-temple-800/50 backdrop-blur-sm border border-temple-200/50 dark:border-temple-700/50 cursor-default"
                    >
                      <span className="font-bold text-indigo-500">{stat.label}</span>
                      <span className="text-sm text-temple-600 dark:text-temple-400 ml-1">{stat.sublabel}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons with magnetic effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-4"
                >
                  <MagneticWrapper>
                    <motion.a
                      href="#projects"
                      className="btn-primary ripple-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Projects</span>
                      <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </MagneticWrapper>
                  <MagneticWrapper>
                    <motion.a
                      href="#contact"
                      className="btn-secondary ripple-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Me
                    </motion.a>
                  </MagneticWrapper>
                  <MagneticWrapper>
                    <motion.a
                      href="https://drive.google.com/file/d/1sab5bkr1ciHwp5OJdVeWVEUbdBcp9Ps1/view?usp=sharing"
                      target="_blank"
                      className="btn-secondary ripple-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Resume
                    </motion.a>
                  </MagneticWrapper>
                </motion.div>
              </motion.div>

              {/* Right - Animated Workspace */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                <div className="relative">
                  {/* Main monitor */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div
                      className="w-80 h-52 rounded-2xl bg-gradient-to-br from-temple-800 to-temple-900 p-3 shadow-2xl border border-temple-700/50"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.15)',
                      }}
                    >
                      <div className="w-full h-full rounded-xl bg-temple-950 overflow-hidden">
                        {/* Window controls */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-temple-900/80 border-b border-temple-700/50">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          <span className="ml-3 text-xs text-temple-500 font-mono">index.ts</span>
                        </div>
                        {/* Code lines */}
                        <div className="p-4 space-y-2">
                          <div className="flex gap-3">
                            <span className="text-temple-600 text-xs font-mono w-4">1</span>
                            <div className="h-3 w-24 bg-purple-500/40 rounded" />
                          </div>
                          <div className="flex gap-3">
                            <span className="text-temple-600 text-xs font-mono w-4">2</span>
                            <div className="h-3 w-40 bg-indigo-500/50 rounded" />
                          </div>
                          <div className="flex gap-3">
                            <span className="text-temple-600 text-xs font-mono w-4">3</span>
                            <div className="h-3 w-32 bg-violet-500/40 rounded" />
                          </div>
                          <div className="flex gap-3">
                            <span className="text-temple-600 text-xs font-mono w-4">4</span>
                            <motion.div
                              className="h-3 bg-indigo-400/60 rounded"
                              animate={{ width: ['6rem', '8rem', '6rem'] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                          <div className="flex gap-3">
                            <span className="text-temple-600 text-xs font-mono w-4">5</span>
                            <div className="h-3 w-20 bg-purple-500/40 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Monitor stand */}
                    <div className="mx-auto w-8 h-8 bg-gradient-to-b from-temple-700 to-temple-800" />
                    <div className="mx-auto w-28 h-2 rounded-full bg-temple-700" />
                  </motion.div>

                  {/* Floating tech badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-indigo-600/90 shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="text-xs font-semibold text-white">TypeScript</span>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg bg-purple-600/90 shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <span className="text-xs font-semibold text-white">Solidity</span>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg bg-violet-600/90 shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <span className="text-xs font-semibold text-white">Node.js</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator with pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-sm text-temple-500 dark:text-temple-400">Scroll to explore</span>
                <motion.svg
                  className="w-6 h-6 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
