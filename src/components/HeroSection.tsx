'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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

                {/* CTA Buttons with ripple effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-4"
                >
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
                </motion.div>
              </motion.div>

              {/* Right - Animated Workspace */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-[500px] h-[500px]">
                  {/* Subtle glow background */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Rotating energy ring */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                      <defs>
                        <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="95" fill="none" stroke="url(#ring-grad)" strokeWidth="0.5" strokeDasharray="10 5" />
                      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#ring-grad)" strokeWidth="0.3" />
                      <circle cx="100" cy="100" r="65" fill="none" stroke="url(#ring-grad)" strokeWidth="0.5" strokeDasharray="5 10" />
                    </svg>
                  </motion.div>

                  {/* Central floating workspace */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative">
                      {/* Monitor with energy glow */}
                      <motion.div
                        className="w-64 h-44 rounded-xl bg-gradient-to-br from-temple-800 to-temple-900 p-2 shadow-2xl"
                        style={{
                          boxShadow: '0 0 40px rgba(99, 102, 241, 0.3), 0 20px 60px rgba(0,0,0,0.3)',
                        }}
                        animate={{
                          boxShadow: [
                            '0 0 40px rgba(99, 102, 241, 0.3), 0 20px 60px rgba(0,0,0,0.3)',
                            '0 0 60px rgba(139, 92, 246, 0.5), 0 20px 60px rgba(0,0,0,0.3)',
                            '0 0 40px rgba(99, 102, 241, 0.3), 0 20px 60px rgba(0,0,0,0.3)',
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        <div className="w-full h-full rounded-lg bg-gradient-to-br from-temple-900 to-black overflow-hidden">
                          <div className="p-3 space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-400" />
                              <div className="w-2 h-2 rounded-full bg-yellow-400" />
                              <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <div className="space-y-1.5 mt-2">
                              <motion.div
                                className="h-2 w-20 bg-indigo-500/60 rounded"
                                animate={{ opacity: [0.5, 1, 0.5], width: ['5rem', '6rem', '5rem'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <div className="h-2 w-32 bg-purple-500/40 rounded" />
                              <div className="h-2 w-24 bg-violet-500/40 rounded" />
                              <motion.div
                                className="h-2 w-28 bg-indigo-400/60 rounded"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              />
                              <div className="h-2 w-16 bg-purple-500/40 rounded" />
                              <div className="h-2 w-36 bg-indigo-500/40 rounded" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <div className="mx-auto w-6 h-6 bg-gradient-to-b from-temple-700 to-temple-800" />
                      <div className="mx-auto w-24 h-2 rounded-full bg-gradient-to-r from-temple-700 via-temple-600 to-temple-700" />
                    </div>
                  </motion.div>

                  {/* Yuta's Katana with energy trail */}
                  <motion.div
                    className="absolute top-12 right-8"
                    animate={{
                      rotate: [15, 25, 15],
                      y: [0, -8, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 blur-md"
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        <div className="w-3 h-28 bg-gradient-to-t from-indigo-500 via-purple-400 to-white rounded-full" />
                      </motion.div>
                      <div className="w-2 h-28 bg-gradient-to-t from-gray-400 via-gray-200 to-white rounded-t-full shadow-lg" />
                      <div className="w-6 h-2 bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 rounded-full -ml-2" />
                      <div className="w-2.5 h-10 bg-gradient-to-b from-indigo-900 to-purple-900 rounded-b-sm -ml-0.5">
                        <div className="w-full h-full opacity-50" style={{
                          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #4f46e5 2px, #4f46e5 4px)'
                        }} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Rika silhouette with pulsing glow */}
                  <motion.div
                    className="absolute -bottom-8 -right-8"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg width="140" height="160" viewBox="0 0 120 140">
                      <defs>
                        <linearGradient id="rika-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#312e81" />
                        </linearGradient>
                        <filter id="rika-glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <g filter="url(#rika-glow)">
                        <ellipse cx="60" cy="35" rx="25" ry="30" fill="url(#rika-grad)" />
                        <ellipse cx="60" cy="95" rx="38" ry="48" fill="url(#rika-grad)" />
                        <motion.circle
                          cx="50" cy="30" r="4"
                          fill="#a78bfa"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="70" cy="30" r="4"
                          fill="#a78bfa"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                        />
                      </g>
                    </svg>
                  </motion.div>

                  {/* Chai cup */}
                  <motion.div
                    className="absolute bottom-20 left-8"
                    animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative">
                      <div className="w-12 h-14 rounded-b-xl bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-orange-300">
                        <div className="absolute -right-3 top-3 w-4 h-6 rounded-r-full border-2 border-orange-400 border-l-0" />
                      </div>
                      <motion.div
                        className="absolute -top-4 left-3 w-2 h-5 bg-gradient-to-t from-gray-400/50 to-transparent rounded-full"
                        animate={{ y: [-2, -10], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Blockchain cube with energy pulse */}
                  <motion.div
                    className="absolute top-32 left-12"
                    animate={{
                      y: [0, -12, 0],
                      rotateY: [0, 360],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <motion.div
                      className="w-16 h-16 relative"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(99, 102, 241, 0.4)',
                          '0 0 40px rgba(139, 92, 246, 0.6)',
                          '0 0 20px rgba(99, 102, 241, 0.4)',
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg opacity-90" />
                      <div className="absolute inset-2 border border-white/30 rounded" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-sm font-mono font-bold">0x</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* "Copy" badge */}
                  <motion.div
                    className="absolute bottom-8 right-12 px-3 py-1.5 rounded-lg bg-indigo-900/60 border border-indigo-500/40 backdrop-blur-sm"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <span className="text-xs font-mono text-indigo-300">Copy: Activated</span>
                  </motion.div>

                  {/* Floating code symbols */}
                  <motion.div
                    className="absolute top-40 left-28 text-2xl font-mono text-indigo-400/50"
                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {'</>'}
                  </motion.div>
                  <motion.div
                    className="absolute bottom-32 right-28 text-xl font-mono text-purple-400/50"
                    animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  >
                    {'{ }'}
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
