"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";

const IMAGES = [
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-1.jpg"),                           style: { top: "5%",  left: "3%",   width: "31%", height: "40%" } },
  { src: asset("/republic/highlights/_DSC1121.jpg"),                                       style: { top: "3%",  left: "37%",  width: "26%", height: "33%" } },
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-14.jpg"),                           style: { top: "4%",  right: "3%",  width: "25%", height: "44%" } },
  { src: asset("/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"),        style: { top: "48%", left: "4%",  width: "28%", height: "34%" } },
  { src: asset("/republic/aerials/Arial.jpg"),                                             style: { bottom: "5%", left: "35%", width: "30%", height: "33%" } },
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-30.jpg"),                           style: { bottom: "4%", right: "4%", width: "26%", height: "40%" } },
  { src: asset("/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg"),                   style: { top: "40%", right: "5%",  width: "22%", height: "29%" } },
];

// Timing
const LAST_ENTER   = 0.3 + (IMAGES.length - 1) * 0.22 + 0.55; // ~2.1s
const HOLD         = 1.1;
const EXIT_START   = LAST_ENTER + HOLD;   // ~3.2s
const EXIT_DUR     = 0.85;
const LOGO_DELAY   = EXIT_START + EXIT_DUR + 0.2; // ~4.25s

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(110% 0 -20px 0)", y: 28 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.75, ease: EASE_OUT },
});

export function IntroSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: theme.darkBg, fontFamily: font, overflow: "hidden" }}>

      {/* Scattered image collage — fades out as a group */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: EXIT_START, duration: EXIT_DUR, ease: "easeIn" }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.22, duration: 0.55, ease: EASE_OUT }}
            style={{
              position: "absolute",
              overflow: "hidden",
              borderRadius: 3,
              ...img.style,
            }}
          >
            <img src={img.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Dark vignette scrim so images don't bleed into the logo moment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: EXIT_START, duration: EXIT_DUR + 0.3, ease: "easeIn" }}
        style={{ position: "absolute", inset: 0, background: theme.darkBg, pointerEvents: "none" }}
      />

      {/* Logo + headline — fades in after images leave */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOGO_DELAY, duration: 0.6, ease: EASE_OUT }}
        style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 48,
        }}
      >
        <LotusMark width={130} onDark />

        {/* Headline — staggered clip-path reveal */}
        <div style={{ textAlign: "center", lineHeight: 0.95 }}>
          <div style={{ overflow: "hidden", paddingBottom: 8 }}>
            <motion.span {...reveal(LOGO_DELAY + 0.15)} style={{
              display: "inline-block",
              fontSize: "clamp(52px, 6.5vw, 112px)",
              fontWeight: 400,
              color: theme.turquoise,
              letterSpacing: "0.06em",
              textTransform: "lowercase",
            }}>
              the lotus
            </motion.span>
          </div>
          <div style={{ overflow: "hidden", paddingBottom: 8 }}>
            <motion.span {...reveal(LOGO_DELAY + 0.35)} style={{
              display: "inline-block",
              fontSize: "clamp(52px, 6.5vw, 112px)",
              fontWeight: 300,
              color: theme.turquoise,
              letterSpacing: "0.06em",
              textTransform: "lowercase",
            }}>
              impact
            </motion.span>
          </div>
          <div style={{ overflow: "hidden", paddingBottom: 8 }}>
            <motion.span {...reveal(LOGO_DELAY + 0.55)} style={{
              display: "inline-block",
              fontSize: "clamp(52px, 6.5vw, 112px)",
              fontWeight: 300,
              color: theme.turquoise,
              letterSpacing: "0.06em",
              textTransform: "lowercase",
            }}>
              initiative.
            </motion.span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
