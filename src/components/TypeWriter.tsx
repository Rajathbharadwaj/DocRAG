"use client";

import * as React from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
}

export function TypeWriter({ text, delay = 50 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayedText}</span>;
}