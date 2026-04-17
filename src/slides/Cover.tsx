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
  initial:   { clipPath: "inset(115% 0 -20px 0)", y: 32 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.7, ease: EASE_OUT },
});

export function CoverSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", fontFamily: font, overflow: "hidden" }}>

      {/* Background image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.07 }}
        transition={{ duration: 10, ease: "linear" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "40% 55%", transformOrigin: "40% 55%" }}
      />

      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(15,20,22,0.35) 0%, rgba(10,14,16,0.50) 35%, rgba(5,10,12,0.80) 65%, rgba(2,6,8,0.96) 100%)",
        }}
      />

      {/* Top-left logo */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>

      {/* Slide number */}
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
        01 / steelton village
      </motion.div>

      {/* Location — top right */}
      <motion.div {...lift(0.25)} style={{ position: "absolute", top: 66, right: 72, display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: theme.turquoise }} />
        <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.28em", color: theme.lightBlue, textTransform: "lowercase" }}>
          columbus, ohio
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.div {...lift(1.4)} style={{ position: "absolute", bottom: 32, right: 72, fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>

      {/* Main content */}
      <div style={{ position: "absolute", bottom: 72, left: 72, right: 72 }}>

        {/* Eyebrow */}
        <motion.div {...lift(0.4)} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
          <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.36em", color: theme.turquoise, textTransform: "lowercase" }}>
            new development · phase 1
          </span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
        </motion.div>

        {/* Title */}
        <div style={{ fontSize: "clamp(64px,7vw,108px)", fontWeight: 300, color: "#fff", lineHeight: 0.92, letterSpacing: "-0.02em", textTransform: "lowercase", marginBottom: 36 }}>
          <div style={{ overflow: "hidden", paddingBottom: 10 }}>
            <motion.span {...reveal(0.55)} style={{ display: "inline-block" }}>steelton</motion.span>
          </div>
          <div style={{ overflow: "hidden", paddingBottom: 10 }}>
            <motion.span {...reveal(0.7)} style={{ display: "inline-block" }}>
              village<span style={{ color: theme.turquoise }}>.</span>
            </motion.span>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <motion.div {...lift(1.0)}>
            <div style={{ fontSize: 36, fontWeight: 300, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>270</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginTop: 5 }}>units</div>
          </motion.div>

          <motion.div {...lift(1.0)} style={{ width: 1, height: 48, background: "rgba(206,232,238,0.18)" }} />

          <motion.div {...lift(1.1)}>
            <div style={{ fontSize: 22, fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "0.08em", textTransform: "lowercase" }}>lihtc</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginTop: 5 }}>financing</div>
          </motion.div>

          <motion.div {...lift(1.1)} style={{ width: 1, height: 48, background: "rgba(206,232,238,0.18)" }} />

          <motion.div {...lift(1.2)}>
            <div style={{ fontSize: 22, fontWeight: 300, color: "#fff", lineHeight: 1.15, textTransform: "lowercase" }}>development</div>
            <div style={{ fontSize: 22, fontWeight: 300, color: theme.turquoise, lineHeight: 1.15, textTransform: "lowercase" }}>opportunity</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
