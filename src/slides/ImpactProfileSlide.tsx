"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";

const BG    = theme.offWhite;
const DARK  = theme.darkGray;
const ACCENT = theme.turquoise;
const DEEP   = "#4B7D96";

function Counter({ to, delay, prefix = "", suffix = "" }: { to: number; delay: number; prefix?: string; suffix?: string }) {
  const val = useMotionValue(0);
  useEffect(() => {
    const c = animate(val, to, { delay, duration: 1.4, ease: "easeOut" });
    return c.stop;
  }, []);
  const display = useTransform(val, (v) => `${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`);
  return <motion.span>{display}</motion.span>;
}

export function ImpactProfileSlide() {
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
        07 / steelton village
      </motion.div>

      {/* Title */}
      <div style={{ position: "absolute", top: 52, left: 72, right: 72 }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(36px,3.5vw,54px)", fontWeight: 300, color: DARK, letterSpacing: "-0.015em", textTransform: "lowercase", paddingTop: 68 }}>
          impact &amp; resident profile
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 300, color: "rgba(66,66,66,0.68)", letterSpacing: "0.05em", textTransform: "lowercase", flexShrink: 0 }}>
            steelton village phase 1 · who we serve and how
          </span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.35, duration: 0.6 }}
            style={{ flex: 1, height: 1, background: ACCENT, transformOrigin: "left" }} />
        </motion.div>
      </div>

      {/* Hero numbers */}
      <div style={{ position: "absolute", top: 220, left: 72, right: 72, display: "flex", gap: 0 }}>
        {[
          { value: 2277, prefix: "", suffix: "", label: "future residents served" },
          { value: 1427, prefix: "$", suffix: "/mo", label: "average monthly cost" },
          { value: 20,   prefix: "", suffix: "%",  label: "of steelton's 60% ami goal" },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: EASE_OUT }}
            style={{ flex: 1, paddingRight: 40 }}>
            <div style={{ fontSize: "clamp(40px,4.5vw,72px)", fontWeight: 700, color: DARK, lineHeight: 1, letterSpacing: "-0.03em" }}>
              {item.prefix}<Counter to={item.value} delay={0.6 + i * 0.1} />{item.suffix}
            </div>
            <div style={{ fontSize: 11, fontWeight: 400, color: "rgba(66,66,66,0.50)", letterSpacing: "0.12em", textTransform: "lowercase", marginTop: 6 }}>
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.7 }}
        style={{ position: "absolute", top: 370, left: 72, right: 72, height: 1, background: "rgba(66,66,66,0.10)", transformOrigin: "left" }} />

      {/* Audience split */}
      <div style={{ position: "absolute", top: 394, left: 72, right: 72, display: "flex", alignItems: "flex-start", gap: 0 }}>
        {[
          { label: "young professionals", units: 109, pct: "40.4%", color: ACCENT },
          { label: "families",            units: 170, pct: "62.9%", color: DEEP  },
        ].map((seg, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.12, duration: 0.6 }}
            style={{ flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 400, color: seg.color, letterSpacing: "0.18em", textTransform: "lowercase", marginBottom: 8 }}>
              {seg.label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, color: DARK, lineHeight: 1, letterSpacing: "-0.025em" }}>{seg.units}</span>
              <span style={{ fontSize: 13, fontWeight: 400, color: seg.color, letterSpacing: "0.1em", textTransform: "lowercase" }}>units</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(66,66,66,0.55)", marginTop: 4 }}>{seg.pct} of total</div>
          </motion.div>
        ))}
      </div>

      {/* Segmented bar */}
      <div style={{ position: "absolute", top: 560, left: 72, right: 72 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.4 }}
          style={{ display: "flex", height: 28, borderRadius: 3, overflow: "hidden", gap: 2 }}>
          {[
            { width: "39.1%", color: ACCENT, label: "39.1%", units: 109 },
            { width: "40.5%", color: DEEP,   label: "40.5%", units: 109 },
            { width: "20.4%", color: DARK,   label: "20.4%", units: 61  },
          ].map((seg, i) => (
            <motion.div key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              style={{ width: seg.width, height: "100%", background: seg.color, transformOrigin: "left", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#fff", letterSpacing: "0.06em" }}>{seg.label}</span>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ display: "flex", gap: 2, marginTop: 8 }}>
          {[
            { width: "39.1%", label: "30–50% ami · 109 units" },
            { width: "40.5%", label: "51–60% ami · 109 units" },
            { width: "20.4%", label: "market rate · 52 units"  },
          ].map((s, i) => (
            <div key={i} style={{ width: s.width, fontSize: 9, fontWeight: 300, color: "rgba(66,66,66,0.50)", letterSpacing: "0.04em", textTransform: "lowercase" }}>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.6 }}
        style={{ position: "absolute", bottom: 16, right: 72, fontSize: 13, fontWeight: 300, color: "rgba(66,66,66,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>
    </div>
  );
}
