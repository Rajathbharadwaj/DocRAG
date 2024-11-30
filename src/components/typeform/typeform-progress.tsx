"use client";

import { motion } from "framer-motion";

interface TypeformProgressProps {
  current: number;
  total: number;
}

export function TypeformProgress({ current, total }: TypeformProgressProps) {
  const progress = (current / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div 
        className="h-1 bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}