'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    chapter: 'Chapter 3',
    title: 'Backend Developer',
    company: 'Vivid Infotech',
    location: 'Chennai, India',
    period: 'Jan 2023 - Dec 2023',
    description:
      'Built production-ready NFT marketplace backend with secure, scalable architecture.',
    achievements: [
      'Designed backend system using Node.js, Express.js, PostgreSQL, and Prisma ORM',
      'Built REST APIs for user authentication, NFT listings, and auction logic',
      'Implemented multi-wallet support with EIP-1193 and EIP-4337 standards',
      'Developed gas-optimized ERC-721/ERC-1155 smart contracts',
      'Set up CI/CD pipelines with Docker and automated testing',
    ],
    gradient: 'from-saffron-500 to-magenta-500',
    icon: '🏗️',
  },
  {
    chapter: 'Chapter 2',
    title: 'Software Developer',
    company: 'Arcana Networks',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Nov 2022',
    description:
      'Contributed to Web3 infrastructure powering authentication and wallet services for 1M+ users.',
    achievements: [
      'Built backend services for key management and encrypted file sharing',
      'Developed wallet SDK supporting EVM chains',
      'Implemented Shamir\'s Secret Sharing and threshold encryption',
      'Contributed to infrastructure handling 4M+ transactions',
      'Built access control systems using Node.js and smart contracts',
    ],
    gradient: 'from-magenta-500 to-sacred-500',
    icon: '🔐',
  },
  {
    chapter: 'Chapter 1',
    title: 'CTF Player - Cryptography',
    company: 'Team Bi0s',
    location: 'Amrita University',
    period: 'Sep 2018 - Jan 2020',
    description:
      'Competed in international CTF competitions focusing on cryptographic challenges.',
    achievements: [
      'Participated in 20+ CTF competitions worldwide',
      'Specialized in cryptographic attacks and challenges',
      'Solved complex encryption and hashing problems',
      'Collaborated with team members on security research',
    ],
    gradient: 'from-sacred-500 to-teal-500',
    icon: '🔓',
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-temple-900 dark:text-white mb-4">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-lg text-temple-600 dark:text-temple-400 max-w-2xl mx-auto">
            The story arcs of my professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron-500 via-magenta-500 to-sacred-500" />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.chapter}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-2xl">{exp.icon}</span>
                </motion.div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 pl-24 md:pl-0' : 'md:pl-16 pl-24'}`}>
                <div className="glass-card p-6 card-lift card-shockwave relative overflow-hidden group">
                  {/* Chapter badge */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} px-4 py-1 bg-gradient-to-r ${exp.gradient} text-white text-xs font-bold rounded-bl-xl ${index % 2 === 0 ? 'rounded-tr-xl' : 'rounded-tl-xl rounded-br-xl rounded-bl-none'}`}>
                    {exp.chapter}
                  </div>

                  {/* Decorative background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10 mt-4">
                    {/* Title and company */}
                    <h3 className="text-xl font-display font-bold text-temple-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-saffron-500 font-semibold">{exp.company}</span>
                      <span className="text-temple-400">•</span>
                      <span className="text-temple-500 dark:text-temple-400 text-sm">{exp.location}</span>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-temple-100 dark:bg-temple-800 text-temple-600 dark:text-temple-400 text-xs font-medium mb-4">
                      {exp.period}
                    </div>

                    {/* Description */}
                    <p className="text-temple-600 dark:text-temple-400 text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-temple-600 dark:text-temple-400"
                        >
                          <span className="text-saffron-500 mt-1">▸</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Anime-style corner decoration */}
                  <div className="absolute bottom-2 right-2 w-8 h-8 opacity-20">
                    <svg viewBox="0 0 32 32" className="w-full h-full">
                      <path
                        d="M28 4 L28 28 L4 28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-temple-400"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story continues indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="relative">
            <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-gradient-to-b from-sacred-500 to-transparent" />
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-saffron-500/10 via-magenta-500/10 to-sacred-500/10 border border-saffron-500/20">
              <span className="text-sm font-medium text-temple-600 dark:text-temple-400">
                The journey continues...
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
