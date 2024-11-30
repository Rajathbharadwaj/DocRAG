"use client";

import { motion } from "framer-motion";

interface CursorDotProps {
  position: { x: number; y: number };
  clicked: boolean;
}

export function CursorDot({ position, clicked }: CursorDotProps) {
  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - 1,
        y: position.y - 1,
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