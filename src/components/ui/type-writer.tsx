"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypeWriter({ text, delay = 50, className = "", onComplete }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    function typeNextCharacter() {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text[indexRef.current]);
        indexRef.current++;
        timerRef.current = setTimeout(typeNextCharacter, delay);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    }

    timerRef.current = setTimeout(typeNextCharacter, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [text, delay, isComplete, onComplete]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.8,
            ease: "linear",
            repeatType: "reverse"
          }}
          className="inline-block ml-[1px] -mr-[1px] w-[2px] h-[1em] align-middle bg-current"
        />
      )}
    </motion.span>
  );
}