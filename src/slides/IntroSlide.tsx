"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";

const FRAME_IMAGES = [
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-1.jpg"),
    style: { top: 0, left: 0, width: "33.5%", height: "30%" } },
  { src: asset("/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"),
    style: { top: 0, left: "33.5%", width: "33%", height: "30%" } },
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-14.jpg"),
    style: { top: 0, right: 0, width: "33.5%", height: "30%" } },
  { src: asset("/republic/highlights/_DSC1121.jpg"),
    style: { top: "30%", left: 0, width: "20%", height: "40%" } },
  { src: asset("/republic/aerials/Arial.jpg"),
    style: { top: "30%", right: 0, width: "20%", height: "40%" } },
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-30.jpg"),
    style: { bottom: 0, left: 0, width: "33.5%", height: "30%" } },
  { src: asset("/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg"),
    style: { bottom: 0, left: "33.5%", width: "33%", height: "30%" } },
  { src: asset("/steelton-village/Steelton I_North Park_2026.03.10.jpg"),
    style: { bottom: 0, right: 0, width: "33.5%", height: "30%" } },
];

// Corners first, then top/bottom center, then sides
const ENTER_ORDER = [0, 2, 5, 7, 1, 6, 3, 4];

const ENTER_DUR  = 0.45;
const STAGGER    = 0.055;
const LAST_IN    = STAGGER * (FRAME_IMAGES.length - 1) + ENTER_DUR;
const HOLD       = 1.8;
const EXIT_START = LAST_IN + HOLD;
const EXIT_DUR   = 0.50;
const LOGO_AT    = EXIT_START + EXIT_DUR - 0.05;

const PILLARS = ["dignified housing", "community investment", "arts & culture", "economic impact"];

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(110% 0 -20px 0)", y: 22 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.68, ease: EASE_OUT },
});

export function IntroSlide() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "#424242",
      fontFamily: font,
      overflow: "hidden",
    }}>

      {/* Frame images */}
      {FRAME_IMAGES.map((img, i) => {
        const order  = ENTER_ORDER.indexOf(i);
        const eDelay = order * STAGGER;
        const total  = ENTER_DUR + HOLD + EXIT_DUR;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.94, 1, 1, 1] }}
            transition={{
              delay: eDelay,
              duration: total,
              times: [
                0,
                ENTER_DUR / total,
                (ENTER_DUR + HOLD) / total,
                1,
              ],
              ease: ["easeOut", "linear", "easeIn", "easeIn"],
            }}
            style={{ position: "absolute", overflow: "hidden", ...img.style }}
          >
            <img src={img.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>
        );
      })}

      {/* Radial depth glow — dark turquoise at center, creates stage depth */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 60% 55% at 50% 50%, rgba(77,186,214,0.13) 0%, rgba(77,186,214,0.04) 40%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* CENTER LOCKUP — logo anchored directly above title, reads as one unit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOGO_AT, duration: 0.65, ease: EASE_OUT }}
        style={{
          position: "absolute",
          top: "30%", bottom: "30%",
          left: "20%", right: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Logo — large, anchored to title */}
        <div style={{ marginBottom: 28 }}>
          <LotusMark width={148} onDark />
        </div>

        {/* Title — 2-line intentional break: parent brand / program name */}
        <div style={{ textAlign: "center" }}>
          {/* Line 1: parent brand — smaller, letterspaced */}
          <div style={{ overflow: "hidden", paddingBottom: 4, marginBottom: 6 }}>
            <motion.span
              {...reveal(LOGO_AT + 0.1)}
              style={{
                display: "inline-block",
                fontSize: "clamp(24px, 2.8vw, 48px)",
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "0.42em",
                textTransform: "lowercase",
              }}
            >
              the lotus
            </motion.span>
          </div>

          {/* Line 2: program name — oversized, bold, high contrast */}
          <div style={{ overflow: "hidden", paddingBottom: 8 }}>
            <motion.span
              {...reveal(LOGO_AT + 0.28)}
              style={{
                display: "inline-block",
                fontSize: "clamp(52px, 7.5vw, 128px)",
                fontWeight: 300,
                color: theme.turquoise,
                letterSpacing: "-0.02em",
                textTransform: "lowercase",
                lineHeight: 0.92,
              }}
            >
              impact initiative<span style={{ color: "#028faa" }}>.</span>
            </motion.span>
          </div>

          {/* Subtitle — short, declarative, approved vocabulary */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: LOGO_AT + 0.52, duration: 0.55, ease: EASE_OUT }}
            style={{
              marginTop: 20,
              fontSize: "clamp(15px, 1.5vw, 20px)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "0.32em",
              textTransform: "lowercase",
              textAlign: "center",
            }}
          >
            mindfully creating.
          </motion.div>
        </div>
      </motion.div>

      {/* Impact pillars footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOGO_AT + 0.7, duration: 0.6, ease: EASE_OUT }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "20%", right: "20%",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(24px, 4vw, 56px)",
          alignItems: "center",
        }}
      >
        {PILLARS.map((pillar, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {i > 0 && (
              <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#028faa", flexShrink: 0 }} />
            )}
            <span style={{
              fontSize: "clamp(12px, 1.1vw, 15px)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "0.26em",
              textTransform: "lowercase",
              whiteSpace: "nowrap",
            }}>
              {pillar}
            </span>
          </div>
        ))}
      </motion.div>

    </div>
  );
}
