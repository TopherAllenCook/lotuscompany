"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";

// Swap src to change an image — add files to public/intro/ first.
// Slot guide: 0 far-left | 1 left | 2 top-center hero | 3 top-right | 4 far-right | 5 lower-left | 6 lower-center | 7 lower-right
const CARDS = [
  { src: "/intro/highlights-1.jpg",  left:  "2%", top:  "5%", w: 285, h: 390, rot: -12 }, // 0 far left
  { src: "/intro/nova-1.jpg",        left: "20%", top: "12%", w: 265, h: 345, rot:  -5 }, // 1 left
  { src: "/intro/nova-14.jpg",       left: "37%", top:  "2%", w: 330, h: 430, rot:   3 }, // 2 top-center hero
  { src: "/intro/aerial-1.jpg",      left: "58%", top:  "6%", w: 280, h: 210, rot:   8 }, // 3 top-right landscape
  { src: "/intro/aerial-2.jpg",      left: "72%", top: "18%", w: 265, h: 345, rot:  -7 }, // 4 far right
  { src: "/intro/highlights-2.jpg",  left:  "8%", top: "44%", w: 285, h: 370, rot:  10 }, // 5 lower-left
  { src: "/intro/nova-45.jpg",       left: "42%", top: "50%", w: 310, h: 240, rot:  -4 }, // 6 lower-center landscape
  { src: "/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg",
                                     left: "64%", top: "44%", w: 275, h: 340, rot:   6 }, // 7 lower-right
];

// Deal order: spread outward from center cards first
const DEAL_ORDER = [2, 3, 0, 4, 1, 6, 5, 7];

const STAGGER   = 0.13;
const ENTER_DUR = 0.52;
const LAST_IN   = STAGGER * (CARDS.length - 1) + ENTER_DUR;
const HOLD      = 2.0;
const EXIT_DUR  = 0.55;
const LOGO_AT   = LAST_IN + HOLD + EXIT_DUR - 0.05;

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(110% 0 -20px 0)", y: 22 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.68, ease: EASE_OUT },
});

const PILLARS = ["dignified housing", "community investment", "arts & culture", "economic impact"];

export function IntroSlide() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "#424242",
      fontFamily: font,
      overflow: "hidden",
    }}>

      {/* Scattered photo cards */}
      {CARDS.map((card, i) => {
        const dealPos = DEAL_ORDER.indexOf(i);
        const delay   = dealPos * STAGGER;
        const total   = ENTER_DUR + HOLD + EXIT_DUR;
        const zIndex  = dealPos + 1;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.72, y: -50, rotate: card.rot + 12 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale:   [0.72, 1, 1, 0.92],
              y:       [-50, 0, 0, 0],
              rotate:  [card.rot + 12, card.rot, card.rot, card.rot],
            }}
            transition={{
              delay,
              duration: total,
              times: [0, ENTER_DUR / total, (ENTER_DUR + HOLD) / total, 1],
              ease: ["easeOut", "linear", "easeIn", "easeIn"],
            }}
            style={{
              position: "absolute",
              left: card.left, top: card.top,
              width: card.w, height: card.h,
              overflow: "hidden",
              zIndex,
              boxShadow: "0 16px 56px rgba(0,0,0,0.60)",
              transformOrigin: "center center",
            }}
          >
            <img
              src={card.src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>
        );
      })}

      {/* Radial turquoise glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(77,186,214,0.13) 0%, rgba(77,186,214,0.04) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 20,
      }} />

      {/* CENTER LOCKUP */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        zIndex: 30,
      }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: LOGO_AT, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ marginBottom: 24 }}
        >
          <LotusMark width={148} onDark />
        </motion.div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: LOGO_AT + 0.35, duration: 0.55, ease: EASE_OUT }}
          style={{ width: 64, height: 1.5, background: theme.turquoise, transformOrigin: "left", marginBottom: 22 }}
        />

        <div style={{ textAlign: "center" }}>
          <div style={{ overflow: "hidden", paddingBottom: 4, marginBottom: 4 }}>
            <motion.span
              {...reveal(LOGO_AT + 0.45)}
              style={{
                display: "inline-block",
                fontSize: "clamp(24px, 2.8vw, 48px)",
                fontWeight: 400, color: "#fff",
                letterSpacing: "0.42em", textTransform: "lowercase",
              }}
            >the lotus</motion.span>
          </div>

          <div style={{ overflow: "hidden", paddingBottom: 10 }}>
            <motion.span
              {...reveal(LOGO_AT + 0.62)}
              style={{
                display: "inline-block",
                fontSize: "clamp(52px, 7.5vw, 128px)",
                fontWeight: 300, color: theme.turquoise,
                letterSpacing: "-0.02em", textTransform: "lowercase", lineHeight: 0.92,
              }}
            >impact initiative<span style={{ color: "#028faa" }}>.</span></motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: LOGO_AT + 0.9, duration: 0.6, ease: EASE_OUT }}
            style={{
              marginTop: 20,
              fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: 400,
              color: "#fff", letterSpacing: "0.32em", textTransform: "lowercase",
            }}
          >mindfully creating.</motion.div>
        </div>
      </div>

      {/* Pillars footer */}
      <div style={{
        position: "absolute", bottom: 32, left: "20%", right: "20%",
        display: "flex", justifyContent: "center",
        gap: "clamp(24px, 4vw, 56px)", alignItems: "center",
        zIndex: 30,
      }}>
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: LOGO_AT + 1.1 + i * 0.1, duration: 0.5, ease: EASE_OUT }}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            {i > 0 && (
              <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#028faa", flexShrink: 0 }} />
            )}
            <span style={{
              fontSize: "clamp(12px, 1.1vw, 15px)", fontWeight: 400,
              color: "#fff", letterSpacing: "0.26em",
              textTransform: "lowercase", whiteSpace: "nowrap",
            }}>{pillar}</span>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
