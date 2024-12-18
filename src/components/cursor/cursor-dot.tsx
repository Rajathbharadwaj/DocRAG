"use client";

import { motion } from "framer-motion";

interface CursorDotProps {
  position: { x: number; y: number };
  clicked: boolean;
}

export function CursorDot({ position, clicked }: CursorDotProps) {
  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 999999,
        height: '8px',
        width: '8px',
        borderRadius: '50%',
        backgroundColor: 'white',
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
      animate={{
        x: position.x - 4,
        y: position.y - 4,
        scale: clicked ? 0.5 : 1,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 2000, 
        damping: 50, 
        mass: 0.2 
      }}
    />
  );
}