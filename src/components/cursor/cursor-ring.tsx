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
      className="fixed left-0 top-0 z-[9999] pointer-events-none mix-blend-difference"
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
        className="h-8 w-8 rounded-full bg-primary opacity-30"
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}