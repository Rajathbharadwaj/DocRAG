"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";
import { useCursorState } from "@/lib/hooks/use-cursor-state";
import { CursorRing } from "@/components/cursor/cursor-ring";
import { CursorDot } from "@/components/cursor/cursor-dot";
import { createPortal } from "react-dom";

export function Cursor() {
  const [isMounted, setIsMounted] = useState(false);
  const { position, hidden } = useMousePosition();
  const { clicked, linkHovered } = useCursorState();
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    let container = document.getElementById('cursor-portal');
    if (!container) {
      container = document.createElement('div');
      container.id = 'cursor-portal';
      container.style.position = 'fixed';
      container.style.pointerEvents = 'none';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }
    setPortalContainer(container);

    // Only hide cursor on devices with fine pointer (mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      document.body.style.cursor = 'none';
      // Force cursor to be visible initially
      const event = new MouseEvent('mousemove', {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2
      });
      document.dispatchEvent(event);
    }

    return () => {
      setIsMounted(false);
      document.body.style.cursor = 'default';
      container?.remove();
    };
  }, []);

  // Don't render cursor on touch devices or when not mounted
  if (!isMounted || !window.matchMedia('(pointer: fine)').matches || !portalContainer) {
    return null;
  }

  const cursor = (
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

  return createPortal(cursor, portalContainer);
}