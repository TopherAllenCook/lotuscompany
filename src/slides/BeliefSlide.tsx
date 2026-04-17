"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";

export function BeliefSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fff", fontFamily: font, overflow: "hidden" }}>

      {/* ── UPPER TWO-THIRDS: photo ── */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "67%" }}>

        {/* Ken-burns photo */}
        <motion.img
          src="/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"
          alt=""
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 14, ease: "linear" }}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "50% 40%",
          }}
        />

        {/* Soft top-left darkening for headline contrast — no shadow on text */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.12) 35%, transparent 65%)",
          pointerEvents: "none",
        }} />

        {/* /lotus — top left */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            position: "absolute", top: 32, left: 52,
            fontSize: 11, fontWeight: 400, color: "#fff",
            letterSpacing: "0.32em", textTransform: "lowercase",
          }}
        >/lotus</motion.span>

        {/* 02 — top right */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            position: "absolute", top: 32, right: 52,
            fontSize: 11, fontWeight: 400, color: "#fff",
            letterSpacing: "0.32em",
          }}
        >02</motion.span>

        {/* Headline — lower-left of photo */}
        <div style={{ position: "absolute", bottom: 44, left: 52 }}>
          <div style={{ overflow: "hidden", marginBottom: 4 }}>
            <motion.span
              initial={{ opacity: 0, y: "1em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45, ease: EASE_OUT }}
              style={{
                display: "block",
                fontSize: "clamp(34px, 4.2vw, 68px)",
                fontWeight: 300, color: "#fff",
                letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.0,
              }}
            >mindfully creating</motion.span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.span
              initial={{ opacity: 0, y: "1em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.45, ease: EASE_OUT }}
              style={{
                display: "block",
                fontSize: "clamp(34px, 4.2vw, 68px)",
                fontWeight: 300, color: "#fff",
                letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.0,
              }}
            >beautiful affordable housing</motion.span>
          </div>
        </div>
      </div>

      {/* ── LOWER THIRD: white ── */}
      <div style={{
        position: "absolute",
        top: "67%", left: 0, right: 0, bottom: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 52px",
        gap: 56,
      }}>

        {/* Left column: belief */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.5 }}
          style={{
            flex: 1, margin: 0,
            fontSize: "clamp(13px, 1.25vw, 18px)",
            fontWeight: 400, color: "#424242",
            letterSpacing: "0.04em", textTransform: "lowercase",
            lineHeight: 1.65,
          }}
        >
          everyone deserves dignified, attainable housing.<br />
          we build to one standard, for everyone inside it.
        </motion.p>

        {/* Vertical rule */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.9, duration: 0.4, ease: EASE_OUT }}
          style={{
            width: 1, height: 44,
            background: "rgba(66,66,66,0.18)",
            transformOrigin: "top", flexShrink: 0,
          }}
        />

        {/* Right column: kicker + dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ flex: 1, display: "flex", alignItems: "flex-start", gap: 12 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ delay: 1.15, duration: 0.35 }}
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: theme.turquoise, flexShrink: 0, marginTop: 5,
            }}
          />
          <p style={{
            margin: 0,
            fontSize: "clamp(13px, 1.25vw, 18px)",
            fontWeight: 400, color: "#028faa",
            letterSpacing: "0.04em", textTransform: "lowercase",
            lineHeight: 1.65,
          }}>
            this is more than impact investing.<br />
            this is legacy building.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
