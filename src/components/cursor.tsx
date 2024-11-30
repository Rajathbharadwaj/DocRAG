"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";
import { useCursorState } from "@/lib/hooks/use-cursor-state";
import { CursorRing } from "@/components/cursor/cursor-ring";
import { CursorDot } from "@/components/cursor/cursor-dot";

export function Cursor() {
  const [isMounted, setIsMounted] = useState(false);
  const { position, hidden } = useMousePosition();
  const { clicked, linkHovered } = useCursorState();

  useEffect(() => {
    setIsMounted(true);
    document.body.style.cursor = 'none';
    return () => {
      setIsMounted(false);
      document.body.style.cursor = 'default';
    };
  }, []);

  if (!isMounted || (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches)) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {!hidden && (
        <>
          <CursorRing 
            position={position}
            clicked={clicked}
            linkHovered={linkHovered}
          />
          <CursorDot 
            position={position}
            clicked={clicked}
          />
        </>
      )}
    </AnimatePresence>
  );
}