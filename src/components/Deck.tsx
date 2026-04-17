"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT, theme, font } from "@/lib/theme";
import { SLIDE_REGISTRY } from "@/slides";
import { LotusMark } from "@/components/LotusMark";
import { EditModeProvider, useEditMode } from "@/components/EditableText";

interface DeckProps {
  slides: React.ReactNode[];
  initialIndex?: number;
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
        top: 0, bottom: 0,
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
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
        style={{ transform: isPrev ? "rotate(180deg)" : undefined, filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}>
        <polyline points="6,2 14,10 6,18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function DotNav({ index, go }: { index: number; go: (n: number) => void }) {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <div style={{
      position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)",
      zIndex: 100, display: "flex", alignItems: "center", gap: 10,
    }}>
      {SLIDE_REGISTRY.map((slide, i) => {
        const isActive = i === index;
        const isHovered = hoveredDot === i;
        return (
          <div key={slide.key} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              position: "absolute", bottom: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)",
              background: "rgba(10,10,10,0.82)", backdropFilter: "blur(6px)",
              color: "#fff", fontSize: 10, fontFamily: font, fontWeight: 400,
              letterSpacing: "0.18em", textTransform: "lowercase", whiteSpace: "nowrap",
              padding: "5px 10px", borderRadius: 3, pointerEvents: "none",
              opacity: isHovered ? 1 : 0, transition: "opacity 0.18s ease",
            }}>
              {slide.title.toLowerCase()}
            </div>
            <button
              onClick={() => go(i)}
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
              aria-label={`Go to ${slide.title}`}
              style={{
                width: isActive ? 20 : 6, height: 6, borderRadius: 3,
                background: isActive ? theme.turquoise : "rgba(255,255,255,0.45)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function SlideDrawer({ index, go, onClose }: { index: number; go: (n: number) => void; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
        style={{
          position: "fixed", top: 0, left: 0, bottom: 0, width: 280,
          background: "#111", zIndex: 201,
          display: "flex", flexDirection: "column",
          padding: "32px 0 48px",
        }}
      >
        {/* Logo + close */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px 32px" }}>
          <LotusMark width={96} onDark />
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "rgba(255,255,255,0.4)", fontSize: 20, lineHeight: 1 }}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "0 28px 24px" }} />

        {/* Slide list */}
        <nav style={{ flex: 1, overflowY: "auto" }}>
          {SLIDE_REGISTRY.map((slide, i) => {
            const isActive = i === index;
            return (
              <button
                key={slide.key}
                onClick={() => { go(i); onClose(); }}
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  width: "100%", padding: "12px 28px",
                  background: isActive ? "rgba(77,186,214,0.08)" : "transparent",
                  border: "none", borderLeft: isActive ? `2px solid ${theme.turquoise}` : "2px solid transparent",
                  cursor: "pointer", textAlign: "left",
                  transition: "background 0.15s ease",
                }}
              >
                <span style={{
                  fontSize: 10, fontFamily: font, fontWeight: 400,
                  color: isActive ? theme.turquoise : "rgba(255,255,255,0.3)",
                  letterSpacing: "0.2em", minWidth: 22,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{
                  fontSize: 13, fontFamily: font, fontWeight: 400,
                  color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                  letterSpacing: "0.08em", textTransform: "lowercase",
                }}>
                  {slide.title.toLowerCase()}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer label */}
        <div style={{ padding: "0 28px", marginTop: 24 }}>
          <span style={{
            fontSize: 9, fontFamily: font, color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.22em", textTransform: "lowercase",
          }}>
            the lotus impact initiative
          </span>
        </div>
      </motion.div>
    </>
  );
}

function DeckInner({ slides, initialIndex = 0 }: DeckProps) {
  const router = useRouter();
  const [[index], setPage] = useState([initialIndex, 0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { editMode, setEditMode } = useEditMode();

  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, next));
    setPage(([cur]) => [clamped, clamped > cur ? 1 : -1]);
    router.push(`/${SLIDE_REGISTRY[clamped].key}`);
  }, [slides.length, router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setDrawerOpen(false); setEditMode(false); return; }
      if (e.key === "e" || e.key === "E") { setEditMode(!editMode); return; }
      if (drawerOpen || editMode) return;
      if (e.key === "ArrowRight" || e.key === " ") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go, drawerOpen, editMode, setEditMode]);

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

      <DotNav index={index} go={go} />

      {/* Logo trigger — top left */}
      <button
        onClick={() => setDrawerOpen(true)}
        aria-label="Open slide menu"
        style={{
          position: "fixed", top: 20, left: 24, zIndex: 150,
          background: "rgba(0,0,0,0.28)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 6, padding: "7px 12px",
          cursor: "pointer", display: "flex", alignItems: "center",
        }}
      >
        <LotusMark width={64} onDark />
      </button>

      <AnimatePresence>
        {drawerOpen && (
          <SlideDrawer index={index} go={go} onClose={() => setDrawerOpen(false)} />
        )}
      </AnimatePresence>

      {/* Edit mode toggle — bottom right */}
      <button
        onClick={() => setEditMode(!editMode)}
        title="Toggle text editor (E)"
        style={{
          position: "fixed", bottom: 20, right: 24, zIndex: 150,
          background: editMode ? "rgba(2,143,170,0.85)" : "rgba(0,0,0,0.28)",
          backdropFilter: "blur(8px)",
          border: editMode ? "1px solid rgba(77,186,214,0.7)" : "1px solid rgba(255,255,255,0.1)",
          borderRadius: 5, padding: "6px 13px",
          cursor: "pointer", display: "flex", alignItems: "center", gap: 7,
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M9 1.5L11.5 4L4.5 11H2V8.5L9 1.5Z"
            stroke={editMode ? "#fff" : "rgba(255,255,255,0.55)"}
            strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{
          fontFamily: font, fontSize: 9, letterSpacing: "0.18em",
          color: editMode ? "#fff" : "rgba(255,255,255,0.45)",
          textTransform: "lowercase",
        }}>
          {editMode ? "editing" : "edit"}
        </span>
      </button>

      {editMode && (
        <div style={{
          position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
          zIndex: 200, background: "rgba(2,143,170,0.9)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(77,186,214,0.5)",
          borderRadius: 4, padding: "5px 14px",
          fontFamily: font, fontSize: 9, color: "#fff",
          letterSpacing: "0.18em", textTransform: "lowercase",
          pointerEvents: "none",
        }}>
          click any text to edit · e to exit · esc to cancel
        </div>
      )}
    </div>
  );
}

export function Deck(props: DeckProps) {
  return (
    <EditModeProvider>
      <DeckInner {...props} />
    </EditModeProvider>
  );
}
