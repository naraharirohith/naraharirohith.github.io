'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const commonProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    className: `magnetic-target ${className}`,
  };

  const content = (
    <motion.span
      className="relative inline-block"
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.div {...commonProps}>
        <a href={href} className="inline-block">
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div {...commonProps} onClick={onClick}>
      {content}
    </motion.div>
  );
}
