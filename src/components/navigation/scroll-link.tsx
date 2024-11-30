"use client";

import { useCallback } from "react";

interface ScrollLinkProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollLink({ sectionId, children, className }: ScrollLinkProps) {
  const scrollToSection = useCallback(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }, [sectionId]);

  return (
    <button onClick={scrollToSection} className={className}>
      {children}
    </button>
  );
}