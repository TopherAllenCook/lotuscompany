"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";

const COLUMNS = [
  {
    number: "01",
    heading: "a vision for connected community",
    body: "Steelton I is designed to grow with the people who call it home. Through multiple phases and the integration of The Fort — a curated gathering space for artisans, musicians, and food — culture and daily life are woven into the same fabric. This is not a development. This is place making.",
  },
  {
    number: "02",
    heading: "our community leads the outdoors",
    body: "Steelton I extends beyond its walls. A 6-acre public park and direct trail connection to the Greater Columbus Trail System give residents access to green space, movement, and the natural world as part of everyday life. A $200,000 investment through the Lotus Art Collective empowers local artists to shape what this community sees, feels, and remembers.",
  },
  {
    number: "03",
    heading: "dignity in every detail",
    body: "Within Steelton I, every amenity is a decision made on behalf of the people who will live there. A clubhouse, game room, fitness center, park, dog wash, and secure bike storage are not features on a checklist. They are the physical expression of a single belief: that comfort, connection, and pride of place belong to everyone, regardless of income.",
  },
];

export function CommunitySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: theme.darkBg, fontFamily: font, overflow: "hidden" }}>

      {/* Right image panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: EASE_OUT }}
        style={{ position: "absolute", top: 0, right: 0, width: 480, bottom: 0, overflow: "hidden" }}
      >
        <motion.img
          src={asset("/steelton-village/Steelton I_North Park_2026.03.10.jpg")}
          alt=""
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.07 }}
          transition={{ duration: 10, ease: "linear" }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, width: 160, background: `linear-gradient(to right, ${theme.darkBg} 0%, transparent 100%)` }} />
      </motion.div>

      {/* Top bar */}
      <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
        style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
        03 / steelton village
      </motion.div>

      {/* Main content */}
      <div style={{ position: "absolute", top: "50%", left: 0, right: 420, transform: "translateY(-50%)", paddingLeft: 64, paddingRight: 64 }}>

        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
          <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.4em", color: theme.turquoise, textTransform: "lowercase" }}>
            steelton village · phase 1
          </span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
        </motion.div>

        {/* Three columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
          {COLUMNS.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: EASE_OUT }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 32, height: 1.5, background: theme.turquoise, flexShrink: 0 }} />
                <span style={{ fontSize: 10, fontWeight: 400, letterSpacing: "0.36em", color: theme.turquoise, textTransform: "lowercase" }}>{col.number}</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 300, color: "#fff", lineHeight: 1.25, letterSpacing: "-0.01em", textTransform: "lowercase", marginBottom: 16 }}>
                {col.heading}<span style={{ color: theme.turquoise }}>.</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.72)", lineHeight: 1.75, letterSpacing: "0.01em" }}>
                {col.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
        style={{ position: "absolute", bottom: 32, right: 64, fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>
    </div>
  );
}
