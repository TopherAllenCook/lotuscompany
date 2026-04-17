"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_SLIDE } from "@/lib/theme";

interface DeckProps {
  slides: React.ReactNode[];
}

const VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const TRANSITION = { duration: 0.55, ease: EASE_SLIDE };

export function Deck({ slides }: DeckProps) {
  const [[index, dir], setPage] = useState([0, 0]);

  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, next));
    setPage(([cur]) => [clamped, clamped > cur ? 1 : -1]);
  }, [slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") go(index + 1);
      if (e.key === "ArrowLeft")                   go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  // Touch swipe
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
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div
          key={index}
          custom={dir}
          variants={VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          transition={TRANSITION}
          style={{ position: "absolute", inset: 0 }}
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows */}
      {index > 0 && (
        <button onClick={() => go(index - 1)} style={arrowStyle("left")}>‹</button>
      )}
      {index < slides.length - 1 && (
        <button onClick={() => go(index + 1)} style={arrowStyle("right")}>›</button>
      )}

      {/* Dot indicators */}
      <div style={{ position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 100 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: i === index ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === index ? "rgba(77,186,214,0.9)" : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function arrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "fixed",
    top: "50%",
    [side]: 20,
    transform: "translateY(-50%)",
    zIndex: 100,
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    backdropFilter: "blur(4px)",
  };
}
