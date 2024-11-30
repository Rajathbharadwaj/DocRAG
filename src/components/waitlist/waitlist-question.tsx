"use client";

import { motion } from "framer-motion";

interface WaitlistQuestionProps {
  question: string;
  error?: string;
  children: React.ReactNode;
}

export function WaitlistQuestion({ question, error, children }: WaitlistQuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold">{question}</h2>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-destructive"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}