"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";

const BG    = theme.offWhite;
const DARK  = theme.darkGray;
const ACCENT = theme.turquoise;

function Counter({ from, to, delay, suffix = "" }: { from: number; to: number; delay: number; suffix?: string }) {
  const val = useMotionValue(from);
  useEffect(() => {
    const controls = animate(val, to, { delay, duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, []);
  const display = useTransform(val, (v) => `${Math.round(v).toLocaleString("en-US")}${suffix}`);
  return <motion.span>{display}</motion.span>;
}

const Dot = () => (
  <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT, flexShrink: 0, marginTop: 6 }} />
);

const col = (delay: number) => ({
  initial:   { opacity: 0, y: 14 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

export function LotusWaySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: BG, fontFamily: font, overflow: "hidden" }}>

      {/* Logo */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ position: "absolute", top: 56, left: 72, zIndex: 10 }}>
        <LotusMark width={180} />
      </motion.div>

      {/* Slide number */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
        style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(11,33,53,0.22)", textTransform: "lowercase" }}>
        06 / steelton village
      </motion.div>

      {/* Title block */}
      <div style={{ position: "absolute", top: 52, left: 72, right: 72 }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(36px,3.5vw,54px)", fontWeight: 300, color: DARK, letterSpacing: "-0.015em", lineHeight: 1.1, textTransform: "lowercase", paddingTop: 68 }}>
          lotus steelton
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 300, color: `rgba(66,66,66,0.68)`, letterSpacing: "0.05em", textTransform: "lowercase", flexShrink: 0 }}>
            how this project represents the lotus way
          </span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            style={{ flex: 1, height: 1, background: ACCENT, transformOrigin: "left" }} />
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ position: "absolute", top: 200, left: 0, right: 0, height: 300, overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, background: `rgba(66,66,66,0.08)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ fontSize: 22, fontWeight: 400, color: ACCENT, letterSpacing: "0.14em", textTransform: "lowercase" }}>the fort</div>
          <div style={{ fontSize: 11, fontWeight: 300, color: "rgba(66,66,66,0.40)", letterSpacing: "0.06em" }}>add image: public/steelton-village/the-fort.jpg</div>
        </div>
        <img src="/steelton-village/the-fort.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 90, background: `linear-gradient(to top, ${BG} 0%, transparent 100%)` }} />
      </motion.div>

      {/* Three columns */}
      <div style={{ position: "absolute", top: 524, left: 72, right: 72, bottom: 44, display: "flex", gap: 52 }}>

        <motion.div {...col(0.8)} style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 9, fontWeight: 400, color: ACCENT, letterSpacing: "0.18em", textTransform: "lowercase", marginBottom: 10 }}>a vision for connected community</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: DARK, lineHeight: 1.3, letterSpacing: "-0.01em", textTransform: "lowercase", marginBottom: 12 }}>
            this is not simply development, it is place-making.
          </div>
          {["Mixed-use community designed to evolve over multiple phases","Integration of The Fort as a cultural anchor","Curated spaces for artisans, music, food, and gathering","Culture, creativity, and daily life intersecting by design"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, fontSize: 12, fontWeight: 300, color: `rgba(66,66,66,0.78)`, lineHeight: 1.55, marginBottom: 5 }}>
              <Dot /><span>{t}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...col(1.0)} style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 9, fontWeight: 400, color: ACCENT, letterSpacing: "0.18em", textTransform: "lowercase", marginBottom: 10 }}>where community meets the outdoors</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: DARK, lineHeight: 1.3, letterSpacing: "-0.01em", textTransform: "lowercase", marginBottom: 12 }}>
            unprecedented access to urban green space, recreation, and movement.
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 60, fontWeight: 700, color: DARK, lineHeight: 1, letterSpacing: "-0.03em" }}>
              <Counter from={0} to={6} delay={1.2} />
            </span>
            <span style={{ fontSize: 12, fontWeight: 400, color: ACCENT, letterSpacing: "0.12em", textTransform: "lowercase", paddingBottom: 4 }}>acres</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 26, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1, whiteSpace: "nowrap" }}>
              $<Counter from={0} to={200000} delay={1.2} />
            </span>
            <span style={{ fontSize: 10, fontWeight: 300, color: `rgba(66,66,66,0.60)`, letterSpacing: "0.03em", lineHeight: 1.4, maxWidth: 160 }}>art investment, lotus art collective</span>
          </div>
          {["6-acre public park at the heart of the site","Direct trail connection to the Greater Columbus trail system","$200,000 art investment through the Lotus Art Collective","Local artists contributing original work to the community"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, fontSize: 12, fontWeight: 300, color: `rgba(66,66,66,0.78)`, lineHeight: 1.55, marginBottom: 5 }}>
              <Dot /><span>{t}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...col(1.2)} style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 9, fontWeight: 400, color: ACCENT, letterSpacing: "0.18em", textTransform: "lowercase", marginBottom: 10 }}>luxury in every detail</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: DARK, lineHeight: 1.3, letterSpacing: "-0.01em", textTransform: "lowercase", marginBottom: 12 }}>
            the luxury-quality standard that defines lotus housing.
          </div>
          {["Clubhouse and game room","Fitness center","Bark park and dog wash","Secure bike storage","Designed for comfort, connection, and pride of place"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, fontSize: 12, fontWeight: 300, color: `rgba(66,66,66,0.78)`, lineHeight: 1.55, marginBottom: 5 }}>
              <Dot /><span>{t}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}
        style={{ position: "absolute", bottom: 16, right: 72, fontSize: 13, fontWeight: 300, color: "rgba(66,66,66,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>
    </div>
  );
}
