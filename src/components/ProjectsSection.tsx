'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import TiltCard from './TiltCard';

const projects = [
  {
    id: 1,
    title: 'psiX - Privacy-Preserving Perpetual Trading',
    description:
      'Built institutional-grade private trading platform using HPKE encryption and zero-knowledge proofs for batched trade execution on Avalanche. Implemented cross-chain synthetic asset trading (sTSLA, sAAPL) with Chainlink CCIP integration and USDC bridging between Ethereum and Avalanche.',
    badge: 'Winner - Avalanche Track, Chainlink x Chromia Hackathon 2025',
    badgeIcon: '🏆',
    tech: ['Solidity', 'ZK Proofs', 'Chainlink CCIP', 'Avalanche', 'HPKE Encryption', 'Smart Contracts'],
    category: 'blockchain',
    featured: true,
    github: 'https://github.com/naraharirohith/psiX',
    demo: 'https://psix-v1.vercel.app/',
    gradient: 'from-gold-500 via-saffron-500 to-magenta-500',
  },
  {
    id: 2,
    title: 'Web3 Authentication & Wallet Infrastructure',
    description:
      'Contributed to backend and wallet SDK powering Arcana\'s user authentication system. Built optimized smart contracts and secure backend services for key management, encrypted file sharing, and access control using Node.js and EVM chains.',
    badge: 'Production - 1M+ Wallets, 4M+ Transactions',
    badgeIcon: '🚀',
    tech: ['Node.js', 'Solidity', 'EVM', 'Distributed Systems', 'Cryptography'],
    category: 'blockchain',
    company: 'Arcana Networks',
    github: '#',
    gradient: 'from-magenta-500 via-sacred-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Production NFT Marketplace Backend',
    description:
      'Designed secure, scalable backend system using Node.js, Express.js, PostgreSQL, and Prisma ORM. Built REST APIs for user auth, NFT listings, auction logic, multi-wallet support (EIP-1193/4337). Developed gas-optimized ERC-721/ERC-1155 smart contracts with CI/CD pipelines.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Docker', 'Hardhat', 'ERC-721', 'ERC-1155'],
    category: 'backend',
    company: 'Vivid Infotech',
    github: '#',
    gradient: 'from-sacred-500 via-teal-500 to-saffron-500',
  },
  {
    id: 4,
    title: 'MicroMission Platform',
    description:
      'Built crowdsourcing platform for ML data annotation using Express.js, Prisma, and PostgreSQL. Implemented cryptocurrency payment integration with wallet support for decentralized rewards and global fee-free transactions.',
    tech: ['Express.js', 'Prisma', 'PostgreSQL', 'Cryptocurrency Integration', 'APIs'],
    category: 'backend',
    github: '#',
    gradient: 'from-teal-500 via-saffron-500 to-magenta-500',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'backend', label: 'Backend' },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-magenta-500/10 text-magenta-600 dark:text-magenta-400 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-temple-900 dark:text-white mb-4">
            Project <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-lg text-temple-600 dark:text-temple-400 max-w-2xl mx-auto">
            A collection of blockchain and backend systems I&apos;ve built
          </p>
        </motion.div>

        {/* Category Filter - Anime style tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'text-temple-600 dark:text-temple-400 hover:text-saffron-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-saffron-500 via-magenta-500 to-sacred-500 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <TiltCard className="h-full">
              <div
                className={`relative glass-card overflow-hidden card-lift card-shockwave group h-full ${
                  project.featured ? 'p-8' : 'p-6'
                }`}
              >
                {/* Decorative border gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Episode number style corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br ${project.gradient} opacity-20 rotate-45`}
                  />
                  <span className="absolute top-2 right-3 text-xs font-mono font-bold text-temple-500 dark:text-temple-400">
                    #{String(project.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  {project.badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-gold-500/20 to-saffron-500/20 border border-gold-500/30 mb-4">
                      <span className="text-lg">{project.badgeIcon}</span>
                      <span className="text-xs font-semibold text-gold-600 dark:text-gold-400">
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Company badge */}
                  {project.company && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-temple-100 dark:bg-temple-800 mb-4">
                      <span className="text-xs font-medium text-temple-600 dark:text-temple-400">
                        @ {project.company}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className={`font-display font-bold text-temple-900 dark:text-white mb-3 ${
                      project.featured ? 'text-2xl' : 'text-xl'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-temple-600 dark:text-temple-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium text-temple-600 dark:text-temple-400 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        className="flex items-center gap-2 text-sm font-medium text-magenta-500 hover:text-magenta-600 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative manga-style corner lines */}
                <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden opacity-10">
                  <div className="absolute bottom-2 left-2 w-12 h-0.5 bg-current rotate-45 origin-left" />
                  <div className="absolute bottom-2 left-2 w-8 h-0.5 bg-current rotate-45 origin-left translate-y-2" />
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/naraharirohith"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-temple-100 dark:bg-temple-800 text-temple-700 dark:text-temple-300 font-medium hover:bg-gradient-to-r hover:from-saffron-500 hover:to-magenta-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
