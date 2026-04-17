"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT, theme, font } from "@/lib/theme";
import { SLIDE_REGISTRY } from "@/slides";

interface DeckProps {
  slides: React.ReactNode[];
}

const VARIANTS = {
  enter:  { opacity: 0, scale: 1.025 },
  center: { opacity: 1, scale: 1 },
  exit:   { opacity: 0, scale: 0.975 },
};

function NavArrow({
  direction,
  onClick,
  visible,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isPrev = direction === "prev";

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        [isPrev ? "left" : "right"]: 0,
        width: "clamp(48px, 6vw, 80px)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{
          transform: isPrev ? "rotate(180deg)" : undefined,
          filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))",
        }}
      >
        <polyline
          points="6,2 14,10 6,18"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function DotNav({ index, total, go }: { index: number; total: number; go: (n: number) => void }) {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}>
      {SLIDE_REGISTRY.map((slide, i) => {
        const isActive = i === index;
        const isHovered = hoveredDot === i;

        return (
          <div key={slide.key} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Tooltip */}
            <div style={{
              position: "absolute",
              bottom: "calc(100% + 10px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(10,10,10,0.82)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              fontSize: 10,
              fontFamily: font,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "lowercase",
              whiteSpace: "nowrap",
              padding: "5px 10px",
              borderRadius: 3,
              pointerEvents: "none",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.18s ease",
            }}>
              {slide.title.toLowerCase()}
            </div>

            {/* Dot */}
            <button
              onClick={() => go(i)}
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
              aria-label={`Go to ${slide.title}`}
              style={{
                width: isActive ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: isActive ? theme.turquoise : "rgba(255,255,255,0.45)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

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
      <AnimatePresence mode="wait">
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

      <NavArrow direction="prev" onClick={() => go(index - 1)} visible={index > 0} />
      <NavArrow direction="next" onClick={() => go(index + 1)} visible={index < slides.length - 1} />

      <DotNav index={index} total={slides.length} go={go} />
    </div>
  );
}
