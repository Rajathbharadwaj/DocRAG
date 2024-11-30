"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }, []);

  return { scrollToTop, scrollToSection };
}