"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(110% 0 -20px 0)", y: 22 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.68, ease: EASE_OUT },
});

const lift = (delay: number) => ({
  initial:   { opacity: 0, y: 10 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

const PILLARS = ["dignified housing", "community investment", "arts & culture", "economic impact"];

export function IntroSlide() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "#424242",
      fontFamily: font,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>

      {/* Radial turquoise glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(77,186,214,0.13) 0%, rgba(77,186,214,0.04) 40%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* CENTER LOCKUP */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ marginBottom: 24 }}
        >
          <LotusMark width={148} onDark />
        </motion.div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.55, ease: EASE_OUT }}
          style={{ width: 64, height: 1.5, background: theme.turquoise, transformOrigin: "left", marginBottom: 22 }}
        />

        <div style={{ textAlign: "center" }}>
          <div style={{ overflow: "hidden", paddingBottom: 4, marginBottom: 4 }}>
            <motion.span {...reveal(0.55)} style={{ display: "inline-block" }}>
              <EditableText id="intro:the-lotus" label="the lotus" as="span" style={{
                fontSize: "clamp(24px, 2.8vw, 48px)",
                fontWeight: 400, color: "#fff",
                letterSpacing: "0.42em", textTransform: "lowercase",
              }}>
                the lotus
              </EditableText>
            </motion.span>
          </div>

          <div style={{ overflow: "hidden", paddingBottom: 10 }}>
            <motion.span {...reveal(0.72)} style={{ display: "inline-block" }}>
              <EditableText id="intro:tagline" label="impact initiative." as="span" style={{
                fontSize: "clamp(52px, 7.5vw, 128px)",
                fontWeight: 300, color: theme.turquoise,
                letterSpacing: "-0.02em", textTransform: "lowercase", lineHeight: 0.92,
              }}>
                impact initiative<span style={{ color: "#028faa" }}>.</span>
              </EditableText>
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.0, duration: 0.6, ease: EASE_OUT }}
          >
            <EditableText id="intro:mindfully" label="mindfully creating." as="span" style={{
              display: "inline-block",
              marginTop: 20,
              fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: 400,
              color: "#fff", letterSpacing: "0.32em", textTransform: "lowercase",
            }}>
              mindfully creating.
            </EditableText>
          </motion.div>
        </div>
      </div>

      {/* Pillars */}
      <div style={{
        position: "absolute",
        bottom: 96,
        left: "10%", right: "10%",
        display: "flex",
        justifyContent: "center",
        gap: "clamp(24px, 4vw, 56px)",
        alignItems: "center",
        zIndex: 1,
      }}>
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={i}
            {...lift(1.2 + i * 0.1)}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            {i > 0 && (
              <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#028faa", flexShrink: 0 }} />
            )}
            <EditableText id={`intro:pillar-${i}`} label={`pillar — ${pillar}`} as="span" style={{
              fontSize: "clamp(12px, 1.1vw, 15px)", fontWeight: 400,
              color: "#fff", letterSpacing: "0.26em",
              textTransform: "lowercase", whiteSpace: "nowrap",
            }}>
              {pillar}
            </EditableText>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
