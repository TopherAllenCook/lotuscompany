"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";

export function BeliefSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fff", fontFamily: font, overflow: "hidden" }}>

      {/* ── UPPER ~55%: photo ── */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "55%" }}>

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

        {/* Soft top-left darkening for headline contrast */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.14) 35%, transparent 65%)",
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
        <div style={{ position: "absolute", bottom: 36, left: 52 }}>
          <div style={{ overflow: "hidden", marginBottom: 6 }}>
            <motion.span
              initial={{ opacity: 0, y: "1em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45, ease: EASE_OUT }}
              style={{
                display: "block",
                fontSize: "clamp(38px, 5.2vw, 84px)",
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
                fontSize: "clamp(38px, 5.2vw, 84px)",
                fontWeight: 300, color: "#fff",
                letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.0,
              }}
            >beautiful affordable housing</motion.span>
          </div>
        </div>
      </div>

      {/* ── LOWER 45%: white ── */}
      <div style={{
        position: "absolute",
        top: "55%", left: 0, right: 0, bottom: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 52px",
        gap: 36,
      }}>

        {/* Column 1: initiative overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.5 }}
          style={{ flex: 1.4 }}
        >
          <p style={{
            margin: "0 0 8px",
            fontSize: "clamp(9px, 0.85vw, 11px)",
            fontWeight: 600, color: theme.turquoise,
            letterSpacing: "0.18em", textTransform: "lowercase",
          }}>
            the initiative
          </p>
          <p style={{
            margin: 0,
            fontSize: "clamp(11px, 1.05vw, 15px)",
            fontWeight: 400, color: "#424242",
            letterSpacing: "0.02em", textTransform: "lowercase",
            lineHeight: 1.7,
          }}>
            the lotus impact initiative invests in dignified, attainable
            housing built to a single standard — market-rate and affordable
            alike. on-site lotus impact hubs carry that standard into daily
            life with childcare, tutoring, and enriching services for residents.
          </p>
        </motion.div>

        <Divider delay={0.9} />

        {/* Column 2: how it works */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          style={{ flex: 1.4 }}
        >
          <p style={{
            margin: "0 0 8px",
            fontSize: "clamp(9px, 0.85vw, 11px)",
            fontWeight: 600, color: theme.turquoise,
            letterSpacing: "0.18em", textTransform: "lowercase",
          }}>
            the structure
          </p>
          <p style={{
            margin: 0,
            fontSize: "clamp(11px, 1.05vw, 15px)",
            fontWeight: 400, color: "#424242",
            letterSpacing: "0.02em", textTransform: "lowercase",
            lineHeight: 1.7,
          }}>
            the initiative vehicle finances early-stage costs, providing
            secured capital in the funding phase that sets each project in
            motion. after repayment from tax credit investor equity, partners
            secure membership interest — aligning cash flow and equity upside
            with long-term social impact.
          </p>
        </motion.div>

        <Divider delay={1.0} />

        {/* Column 3: kicker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          style={{ flex: 0.9, display: "flex", alignItems: "flex-start", gap: 10 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ delay: 1.3, duration: 0.35 }}
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: theme.turquoise, flexShrink: 0, marginTop: 5,
            }}
          />
          <p style={{
            margin: 0,
            fontSize: "clamp(12px, 1.15vw, 17px)",
            fontWeight: 400, color: "#028faa",
            letterSpacing: "0.03em", textTransform: "lowercase",
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

function Divider({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay, duration: 0.4, ease: EASE_OUT }}
      style={{
        width: 1, height: 56,
        background: "rgba(66,66,66,0.15)",
        transformOrigin: "top", flexShrink: 0,
      }}
    />
  );
}
