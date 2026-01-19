'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  {
    icon: '🏆',
    title: 'Hackathon Winner',
    description: 'Chainlink x Chromia Hackathon 2025',
    highlight: 'Avalanche Track Winner',
    gradient: 'from-gold-400 to-saffron-500',
    borderColor: 'border-gold-500/30',
    bgColor: 'from-gold-500/10 to-saffron-500/10',
  },
  {
    icon: '🚀',
    title: 'Production Scale',
    description: 'Built infrastructure at Arcana Networks',
    highlight: '1M+ Users • 4M+ Transactions',
    gradient: 'from-magenta-400 to-sacred-500',
    borderColor: 'border-magenta-500/30',
    bgColor: 'from-magenta-500/10 to-sacred-500/10',
  },
  {
    icon: '🔐',
    title: 'CTF Competitor',
    description: 'Team Bi0s - Cryptography Specialist',
    highlight: '20+ International Competitions',
    gradient: 'from-sacred-400 to-teal-500',
    borderColor: 'border-sacred-500/30',
    bgColor: 'from-sacred-500/10 to-teal-500/10',
  },
  {
    icon: '🎓',
    title: 'Academic Excellence',
    description: 'B.Tech CS - Amrita Vishwa Vidyapeetham',
    highlight: '8.2 GPA',
    gradient: 'from-teal-400 to-saffron-500',
    borderColor: 'border-teal-500/30',
    bgColor: 'from-teal-500/10 to-saffron-500/10',
  },
  {
    icon: '💡',
    title: 'Innovation Lead',
    description: 'Drowsiness Detection Project',
    highlight: 'Hackbout, Bangalore',
    gradient: 'from-saffron-400 to-gold-500',
    borderColor: 'border-saffron-500/30',
    bgColor: 'from-saffron-500/10 to-gold-500/10',
  },
];

const certifications = [
  {
    name: 'Google Cloud Infrastructure',
    issuer: 'Google Cloud',
    icon: '☁️',
  },
  {
    name: 'Smart Contracts',
    issuer: 'University of Buffalo',
    icon: '📜',
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 rangoli-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 text-sm font-medium mb-4">
            Recognition
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-temple-900 dark:text-white mb-4">
            Achievements & <span className="text-gradient-gold">Highlights</span>
          </h2>
        </motion.div>

        {/* Achievement Badges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div
                className={`relative h-full glass-card p-6 border-2 ${achievement.borderColor} overflow-hidden card-shockwave`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Decorative mandala corner */}
                <div className="absolute -top-6 -right-6 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <path
                        key={i}
                        d="M50 10 Q60 30 50 50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        transform={`rotate(${i * 45} 50 50)`}
                        className="text-gold-500"
                      />
                    ))}
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-temple-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-temple-600 dark:text-temple-400 mb-2">
                    {achievement.description}
                  </p>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                    {achievement.highlight}
                  </p>
                </div>

                {/* Ornate border decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-temple-700 dark:text-temple-300 mb-6">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card border border-temple-200/50 dark:border-temple-700/50 card-shockwave"
              >
                <span className="text-xl">{cert.icon}</span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-temple-900 dark:text-white">
                    {cert.name}
                  </p>
                  <p className="text-xs text-temple-500 dark:text-temple-400">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
