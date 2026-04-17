"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";

const lift = (delay: number) => ({
  initial:   { opacity: 0, y: 12 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(115% 0 -20px 0)", y: 28 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.75, ease: EASE_OUT },
});

const CONCEPTS = [
  "connected community",
  "6-acre public park",
  "the fort · art + culture",
];

export function CommunitySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", fontFamily: font, overflow: "hidden" }}>

      {/* Full-bleed image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_North Park_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 14, ease: "linear" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 60%" }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(5,10,12,0.98) 0%, rgba(5,10,12,0.70) 38%, rgba(5,10,12,0.20) 65%, rgba(5,10,12,0.05) 100%)",
      }} />

      {/* Top bar */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
        03 / steelton village
      </motion.div>

      {/* Main content */}
      <div style={{ position: "absolute", bottom: 72, left: 72, right: 72 }}>

        {/* Eyebrow */}
        <motion.div {...lift(0.3)} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
          <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.4em", color: theme.turquoise, textTransform: "lowercase" }}>
            steelton village · phase 1
          </span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
        </motion.div>

        {/* Editorial statement */}
        <div style={{ fontSize: "clamp(44px,5.5vw,88px)", fontWeight: 300, color: "#fff", lineHeight: 1.0, letterSpacing: "-0.02em", textTransform: "lowercase", marginBottom: 40 }}>
          {["this is not", "development.", "this is", "place-making."].map((line, i) => (
            <div key={i} style={{ overflow: "hidden", paddingBottom: 6 }}>
              <motion.span
                {...reveal(0.45 + i * 0.12)}
                style={{
                  display: "inline-block",
                  color: i === 1 || i === 3 ? theme.turquoise : "#fff",
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Concept pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {CONCEPTS.map((c, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 400, letterSpacing: "0.22em", color: "rgba(206,232,238,0.50)", textTransform: "lowercase" }}>
              {c}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.div {...lift(1.4)} style={{ position: "absolute", bottom: 32, right: 72, fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>
    </div>
  );
}
