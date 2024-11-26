"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setLinkHovered(!!target.closest("a") || !!target.closest("button"));
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <>
          <motion.div
            className="fixed left-0 top-0 z-[9999] pointer-events-none"
            animate={{
              x: position.x - (clicked ? 16 : linkHovered ? 24 : 4),
              y: position.y - (clicked ? 16 : linkHovered ? 24 : 4),
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
              className={`h-8 w-8 rounded-full ${
                linkHovered 
                  ? "bg-primary/10 dark:bg-primary/20" 
                  : "bg-primary/20 dark:bg-primary/30"
              }`}
              animate={{
                scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
              }}
              transition={{ duration: 0.15 }}
            />
          </motion.div>
          <motion.div
            className="fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary pointer-events-none"
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
        </>
      )}
    </AnimatePresence>
  );
}