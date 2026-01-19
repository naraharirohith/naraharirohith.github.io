'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactLinks = [
  {
    name: 'Email',
    value: 'rohit.narahari@gmail.com',
    href: 'mailto:rohit.narahari@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/rohithnarahari',
    href: 'https://linkedin.com/in/rohithnarahari/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    value: 'github.com/naraharirohith',
    href: 'https://github.com/naraharirohith',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:rohit.narahari@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Contact from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="relative py-16 overflow-hidden">
      {/* Animated background with rangoli + circuit fusion */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 rangoli-pattern opacity-20" />
        <div className="absolute inset-0 circuit-pattern opacity-10" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-saffron-500/20 to-magenta-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-sacred-500/20 to-teal-500/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-magenta-500/10 text-magenta-600 dark:text-magenta-400 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-temple-900 dark:text-white mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-temple-600 dark:text-temple-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Send me a message!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-saffron-500 via-magenta-500 to-sacred-500 rounded-3xl opacity-20 blur-xl" />

          <div className="relative glass-card p-8 md:p-12 card-shockwave">
            {/* Ornate corner decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 opacity-30">
              <svg viewBox="0 0 50 50" className="w-full h-full text-saffron-500">
                <path d="M5 5 L5 20 M5 5 L20 5" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="5" cy="5" r="2" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 opacity-30 rotate-90">
              <svg viewBox="0 0 50 50" className="w-full h-full text-magenta-500">
                <path d="M5 5 L5 20 M5 5 L20 5" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="5" cy="5" r="2" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12 opacity-30 -rotate-90">
              <svg viewBox="0 0 50 50" className="w-full h-full text-sacred-500">
                <path d="M5 5 L5 20 M5 5 L20 5" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="5" cy="5" r="2" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 opacity-30 rotate-180">
              <svg viewBox="0 0 50 50" className="w-full h-full text-teal-500">
                <path d="M5 5 L5 20 M5 5 L20 5" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="5" cy="5" r="2" fill="currentColor" />
              </svg>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-temple-700 dark:text-temple-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-temple-800/50 border border-temple-200/50 dark:border-temple-700/50 text-temple-900 dark:text-white placeholder-temple-400 dark:placeholder-temple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-temple-700 dark:text-temple-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-temple-800/50 border border-temple-200/50 dark:border-temple-700/50 text-temple-900 dark:text-white placeholder-temple-400 dark:placeholder-temple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-temple-700 dark:text-temple-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-temple-800/50 border border-temple-200/50 dark:border-temple-700/50 text-temple-900 dark:text-white placeholder-temple-400 dark:placeholder-temple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-temple-700 dark:text-temple-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-temple-800/50 border border-temple-200/50 dark:border-temple-700/50 text-temple-900 dark:text-white placeholder-temple-400 dark:placeholder-temple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary ripple-button px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Email Client Opened!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Message
                    </span>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Status banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 p-4 rounded-xl bg-gradient-to-r from-saffron-500/10 via-magenta-500/10 to-sacred-500/10 border border-saffron-500/20"
            >
              <div className="flex items-center justify-center gap-3">
                <motion.span
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-center text-temple-700 dark:text-temple-300">
                  Currently seeking{' '}
                  <span className="font-semibold text-gradient">
                    Software Engineering & Blockchain Developer
                  </span>{' '}
                  roles
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Links - Moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-temple-700 dark:text-temple-300 text-center mb-6">
            Or reach out directly
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card border border-temple-200/50 dark:border-temple-700/50 hover:border-indigo-500/50 transition-all duration-300 tremor-hover"
              >
                <span className="text-indigo-500">{link.icon}</span>
                <div>
                  <p className="text-xs text-temple-500 dark:text-temple-400">{link.name}</p>
                  <p className="text-sm font-medium text-temple-900 dark:text-white">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">⚔️</span>
            <span className="text-temple-400">•</span>
            <span className="text-sm text-temple-500 dark:text-temple-400">
              Built with limitless cursed energy & chai
            </span>
            <span className="text-temple-400">•</span>
            <span className="text-2xl">🍵</span>
          </div>
          <p className="text-sm text-temple-500 dark:text-temple-400">
            © {new Date().getFullYear()} Rohith Narahari. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
