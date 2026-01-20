'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnabled?: boolean;
  tiltAmount?: number;
}

export default function TiltCard({
  children,
  className = '',
  glareEnabled = true,
  tiltAmount = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    const tiltX = (y - 0.5) * tiltAmount;
    const tiltY = (x - 0.5) * -tiltAmount;

    setRotateX(tiltX);
    setRotateY(tiltY);
    setGlarePosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}

      {/* Glare effect */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            }}
          />
        </motion.div>
      )}

      {/* Highlight border on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)`,
          boxShadow: '0 0 30px rgba(99, 102, 241, 0.15)',
        }}
      />
    </motion.div>
  );
}
