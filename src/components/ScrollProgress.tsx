'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 origin-left z-[99] blur-sm opacity-60"
        style={{ scaleX }}
      />

      {/* Side progress indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col items-center gap-2">
        <motion.div
          className="w-1 bg-temple-800 rounded-full overflow-hidden"
          style={{ height: '100px' }}
        >
          <motion.div
            className="w-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full origin-top"
            style={{
              height: '100%',
              scaleY: scrollYProgress,
              transformOrigin: 'top',
            }}
          />
        </motion.div>
        <motion.span
          className="text-xs font-mono text-temple-500"
          style={{
            opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
          }}
        >
          <motion.span>
            {/* This will show percentage */}
          </motion.span>
        </motion.span>
      </div>
    </>
  );
}
