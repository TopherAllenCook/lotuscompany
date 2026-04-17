"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";

function Counter({ to, delay, prefix = "", suffix = "" }: { to: number; delay: number; prefix?: string; suffix?: string }) {
  const val = useMotionValue(0);
  useEffect(() => {
    const c = animate(val, to, { delay, duration: 1.6, ease: "easeOut" });
    return c.stop;
  }, []);
  const display = useTransform(val, (v) => `${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`);
  return <motion.span>{display}</motion.span>;
}

const lift = (delay: number) => ({
  initial:   { opacity: 0, y: 10 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

const STATS = [
  { value: 6,      prefix: "",  suffix: "",  unit: "acres",      sub: "public green space at the heart of the site" },
  { value: 200000, prefix: "$", suffix: "",  unit: "invested",   sub: "lotus art collective · local artists" },
  { value: 270,    prefix: "",  suffix: "",  unit: "units",      sub: "mixed-use · multi-phase development" },
];

export function LotusWaySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", fontFamily: font, overflow: "hidden" }}>

      {/* Full-bleed image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 14, ease: "linear" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }}
      />

      {/* Gradient — strong at bottom, lighter at top */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(5,10,12,0.98) 0%, rgba(5,10,12,0.75) 35%, rgba(5,10,12,0.30) 60%, rgba(5,10,12,0.10) 100%)",
      }} />

      {/* Top bar */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
        06 / steelton village
      </motion.div>

      {/* Bottom content */}
      <div style={{ position: "absolute", bottom: 64, left: 72, right: 72 }}>

        {/* Eyebrow */}
        <motion.div {...lift(0.3)} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
          <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.4em", color: theme.turquoise, textTransform: "lowercase" }}>
            the lotus way
          </span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ width: 52, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
        </motion.div>

        {/* Three kinetic stat blocks */}
        <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.18, duration: 0.7, ease: EASE_OUT }}
              style={{ flex: 1, paddingRight: 48 }}
            >
              {/* Number */}
              <div style={{ fontSize: "clamp(56px,6.5vw,104px)", fontWeight: 300, color: "#fff", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
                <Counter to={stat.value} delay={0.8 + i * 0.15} prefix={stat.prefix} suffix={stat.suffix} />
              </div>

              {/* Unit label */}
              <div style={{ fontSize: 13, fontWeight: 400, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginTop: 10, marginBottom: 12 }}>
                {stat.unit}
              </div>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
                style={{ width: "100%", maxWidth: 200, height: 1, background: "rgba(206,232,238,0.18)", transformOrigin: "left", marginBottom: 12 }}
              />

              {/* Sub-label */}
              <div style={{ fontSize: 12, fontWeight: 300, color: "rgba(206,232,238,0.50)", letterSpacing: "0.06em", lineHeight: 1.6, textTransform: "lowercase" }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <motion.div {...lift(1.6)} style={{ position: "absolute", bottom: 16, right: 72, fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>
    </div>
  );
}
