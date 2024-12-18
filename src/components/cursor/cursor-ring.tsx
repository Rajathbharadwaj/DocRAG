"use client";

import { motion } from "framer-motion";

interface CursorRingProps {
  position: { x: number; y: number };
  clicked: boolean;
  linkHovered: boolean;
}

export function CursorRing({ position, clicked, linkHovered }: CursorRingProps) {
  const size = clicked ? 16 : linkHovered ? 24 : 4;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 999999,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
      animate={{
        x: position.x - size,
        y: position.y - size,
        scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 1500, 
        damping: 50, 
        mass: 0.3 
      }}
    >
      <motion.div
        style={{
          height: '32px',
          width: '32px',
          borderRadius: '50%',
          backgroundColor: 'white',
          opacity: 0.3,
          willChange: 'transform',
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}