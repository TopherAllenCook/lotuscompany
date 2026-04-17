"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT, theme } from "@/lib/theme";

interface DeckProps {
  slides: React.ReactNode[];
}

const VARIANTS = {
  enter:  { opacity: 0, scale: 1.025 },
  center: { opacity: 1, scale: 1 },
  exit:   { opacity: 0, scale: 0.975 },
};

export function Deck({ slides }: DeckProps) {
  const [[index], setPage] = useState([0, 0]);

  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, next));
    setPage(([cur]) => [clamped, clamped > cur ? 1 : -1]);
  }, [slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd   = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend",   onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [index, go]);

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", background: "#000" }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          variants={VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: EASE_OUT }}
          style={{ position: "absolute", inset: 0 }}
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 2, background: "rgba(255,255,255,0.06)", zIndex: 100 }}>
        <motion.div
          animate={{ scaleX: slides.length > 1 ? index / (slides.length - 1) : 1 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ position: "absolute", inset: 0, background: theme.turquoise, transformOrigin: "left", scaleX: 0 }}
        />
      </div>
    </div>
  );
}
