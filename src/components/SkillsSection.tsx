'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TiltCard from './TiltCard';

const skillCategories = [
  {
    title: 'Backend & Systems',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    gradient: 'from-saffron-500 to-magenta-500',
    bgGradient: 'from-saffron-500/10 to-magenta-500/10',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Node.js', level: 95 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'AWS/EC2', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Git', level: 90 },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    gradient: 'from-magenta-500 to-sacred-500',
    bgGradient: 'from-magenta-500/10 to-sacred-500/10',
    skills: [
      { name: 'Solidity', level: 90 },
      { name: 'Hardhat', level: 85 },
      { name: 'Foundry', level: 80 },
      { name: 'Ethers.js', level: 90 },
      { name: 'Web3.js', level: 85 },
      { name: 'EVM Chains', level: 90 },
      { name: 'Geth', level: 75 },
      { name: 'EIP-1193', level: 85 },
      { name: 'EIP-4337', level: 80 },
      { name: 'ERC-721', level: 90 },
      { name: 'ERC-1155', level: 85 },
      { name: 'ZK Proofs', level: 75 },
      { name: 'Chainlink CCIP', level: 80 },
      { name: 'LayerZero', level: 70 },
    ],
  },
  {
    title: 'Cryptography',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    gradient: 'from-sacred-500 to-teal-500',
    bgGradient: 'from-sacred-500/10 to-teal-500/10',
    skills: [
      { name: "Shamir's Secret Sharing", level: 85 },
      { name: 'Threshold Encryption', level: 80 },
      { name: 'HPKE', level: 85 },
      { name: 'Key Management', level: 85 },
      { name: 'Access Control', level: 90 },
    ],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    gradient: 'from-teal-500 to-gold-500',
    bgGradient: 'from-teal-500/10 to-gold-500/10',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 90 },
    ],
  },
];

const tools = ['Postman', 'JIRA', 'Confluence', 'Notion', 'VS Code', 'Vim'];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-16 overflow-hidden">
      {/* Background decoration */}
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-sacred-500/10 text-sacred-600 dark:text-sacred-400 text-sm font-medium mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-temple-900 dark:text-white mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-temple-600 dark:text-temple-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid - Anime stat card style */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <TiltCard className="h-full">
              <div className="glass-card p-6 card-lift card-shockwave relative overflow-hidden h-full">
              {/* Decorative pattern corner */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${category.bgGradient} blur-2xl`} />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-temple-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills as animated tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                    className="group relative"
                  >
                    <div className="px-3 py-1.5 rounded-lg bg-white/50 dark:bg-temple-800/50 border border-temple-200/50 dark:border-temple-700/50 text-sm font-medium text-temple-700 dark:text-temple-300 hover:border-saffron-500/50 transition-all duration-300 cursor-default">
                      {skill.name}
                    </div>
                    {/* Power level indicator on hover */}
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-temple-200 dark:bg-temple-700 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Anime-style decorative corner */}
              <div className="absolute bottom-2 right-2 opacity-20">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path
                    d="M35 5 L35 35 L5 35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-temple-400"
                  />
                  <circle cx="35" cy="5" r="2" fill="currentColor" className="text-saffron-500" />
                  <circle cx="35" cy="35" r="2" fill="currentColor" className="text-magenta-500" />
                  <circle cx="5" cy="35" r="2" fill="currentColor" className="text-sacred-500" />
                </svg>
              </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-temple-700 dark:text-temple-300 mb-4">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-temple-100 to-temple-50 dark:from-temple-800 dark:to-temple-900 border border-temple-200/50 dark:border-temple-700/50 text-sm font-medium text-temple-600 dark:text-temple-400 shadow-sm cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Power Level Indicator - Anime style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <div className="glass-card px-8 py-6 inline-flex items-center gap-6 card-shockwave">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gradient mb-1">3+</div>
              <div className="text-xs text-temple-500 dark:text-temple-400">Years XP</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-temple-300 dark:via-temple-600 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gradient-gold mb-1">50+</div>
              <div className="text-xs text-temple-500 dark:text-temple-400">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-temple-300 dark:via-temple-600 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gradient mb-1">∞</div>
              <div className="text-xs text-temple-500 dark:text-temple-400">Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
