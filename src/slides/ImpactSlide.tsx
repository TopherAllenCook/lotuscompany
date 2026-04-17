"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";

const lift = (delay: number) => ({
  initial:   { opacity: 0, y: 10 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(115% 0 -20px 0)", y: 32 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.7, ease: EASE_OUT },
});

export function ImpactSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: theme.darkBg, fontFamily: font, overflow: "hidden" }}>

      {/* Right image panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: EASE_OUT }}
        style={{ position: "absolute", top: 0, right: 0, width: 520, bottom: 0, overflow: "hidden" }}
      >
        <motion.img
          src={asset("/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg")}
          alt=""
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.07 }}
          transition={{ duration: 10, ease: "linear" }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, left: 0, width: 180, background: `linear-gradient(to right, ${theme.darkBg} 0%, transparent 100%)` }} />
      </motion.div>

      {/* Top bar */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
        02 / steelton village
      </motion.div>

      {/* Main content */}
      <div style={{ position: "absolute", top: "50%", left: 0, right: 440, transform: "translateY(-50%)", paddingLeft: 140, paddingRight: 72 }}>

        {/* Eyebrow */}
        <motion.div {...lift(0.3)} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
          <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.4em", color: theme.turquoise, textTransform: "lowercase" }}>
            steelton village · phase 1
          </span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
        </motion.div>

        {/* Title */}
        <div style={{ fontSize: "clamp(72px,9vw,148px)", fontWeight: 300, color: "#fff", lineHeight: 0.9, letterSpacing: "-0.025em", textTransform: "lowercase", marginBottom: 52 }}>
          {["the", "impact", "initiative"].map((word, i) => (
            <div key={word} style={{ overflow: "hidden", paddingBottom: 14 }}>
              <motion.span {...reveal(0.5 + i * 0.15)} style={{ display: "inline-block" }}>
                {word}{i === 2 && <span style={{ color: theme.turquoise }}>.</span>}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
          style={{ height: 1, background: "rgba(206,232,238,0.18)", marginBottom: 36, maxWidth: 480, transformOrigin: "left" }} />

        {/* Subtitle */}
        <motion.div {...lift(1.1)} style={{ fontSize: "clamp(32px,4vw,64px)", fontWeight: 300, letterSpacing: "0.08em", color: theme.lightBlue, textTransform: "lowercase" }}>
          steelton<span style={{ color: theme.turquoise }}>.</span>
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.div {...lift(1.3)} style={{ position: "absolute", bottom: 32, right: 64, fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>
    </div>
  );
}
