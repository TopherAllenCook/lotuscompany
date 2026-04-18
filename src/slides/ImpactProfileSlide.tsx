"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

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

const METRICS = [
  { value: 2277, prefix: "",  suffix: "",     label: "future residents served" },
  { value: 1427, prefix: "$", suffix: "/mo",  label: "average monthly cost" },
  { value: 20,   prefix: "",  suffix: "%",    label: "of steelton's 60% ami goal" },
];

const SEGMENTS = [
  { width: "39.1%", color: theme.turquoise, label: "30–50% ami",   units: "109 units" },
  { width: "40.5%", color: "#4B7D96",       label: "51–60% ami",   units: "109 units" },
  { width: "20.4%", color: "rgba(206,232,238,0.25)", label: "market rate", units: "52 units" },
];

const AUDIENCE = [
  { label: "young professionals", units: 109, pct: "40.4%", color: theme.turquoise },
  { label: "families",            units: 170, pct: "62.9%", color: "#4B7D96" },
];

export function ImpactProfileSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: theme.darkBg, fontFamily: font, overflow: "hidden" }}>

      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <img
          src="/steelton-village/Steelton I_North Park_2026.03.10.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.16 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,10,12,0.78) 0%, rgba(5,10,12,0.48) 100%)" }} />
      </div>

      {/* Logo */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72, zIndex: 10 }}>
        <LotusMark width={180} onDark />
      </motion.div>

      {/* Slide number */}
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)" }}>
        <EditableText id="impact-profile:slide-num" as="span" style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
          07 / steelton village
        </EditableText>
      </motion.div>

      {/* Eyebrow */}
      <div style={{ position: "absolute", top: 148, left: 72, right: 72 }}>
        <motion.div {...lift(0.25)} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.25, duration: 0.5 }}
            style={{ transformOrigin: "left" }}>
            <EditableEl id="impact-profile:rule-left" label="eyebrow rule left" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
          </motion.div>
          <EditableText id="impact-profile:eyebrow" label="eyebrow — impact & resident profile" as="span" style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.4em", color: theme.turquoise, textTransform: "lowercase" }}>
            impact &amp; resident profile
          </EditableText>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.25, duration: 0.5 }}
            style={{ transformOrigin: "left" }}>
            <EditableEl id="impact-profile:rule-right" label="eyebrow rule right" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Hero metrics */}
      <div style={{ position: "absolute", top: 210, left: 72, right: 72, display: "flex", gap: 0 }}>
        {METRICS.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.14, duration: 0.7, ease: EASE_OUT }}
            style={{ flex: 1 }}
          >
            <div style={{ fontSize: "clamp(52px,6vw,96px)", fontWeight: 300, color: "#fff", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
              {m.prefix}<Counter to={m.value} delay={0.6 + i * 0.12} />{m.suffix}
            </div>
            <EditableText id={`impact-profile:metric-label-${i}`} label={`metric label — ${m.label}`} as="div" style={{ fontSize: 11, fontWeight: 400, color: "rgba(206,232,238,0.45)", letterSpacing: "0.14em", textTransform: "lowercase", marginTop: 10 }}>
              {m.label}
            </EditableText>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.7 }}
        style={{ position: "absolute", top: 390, left: 72, right: 72, transformOrigin: "left" }}>
        <EditableEl id="impact-profile:divider" label="section divider" type="bar" style={{ height: 1, background: "rgba(206,232,238,0.10)" }} />
      </motion.div>

      {/* Audience split */}
      <div style={{ position: "absolute", top: 418, left: 72, right: 72, display: "flex", gap: 0 }}>
        {AUDIENCE.map((seg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 0.12, duration: 0.6, ease: EASE_OUT }}
            style={{ flex: 1 }}
          >
            <EditableText id={`impact-profile:seg-label-${i}`} label={`audience — ${seg.label}`} as="div" style={{ fontSize: 10, fontWeight: 400, color: seg.color, letterSpacing: "0.2em", textTransform: "lowercase", marginBottom: 10 }}>
              {seg.label}
            </EditableText>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <EditableText id={`impact-profile:seg-units-${i}`} label={`audience units — ${seg.label}`} as="span" style={{ fontSize: "clamp(36px,4vw,64px)", fontWeight: 300, color: "#fff", lineHeight: 1, letterSpacing: "-0.025em" }}>{seg.units}</EditableText>
              <EditableText id={`impact-profile:seg-units-label-${i}`} label={`audience units label — ${seg.label}`} as="span" style={{ fontSize: 12, fontWeight: 400, color: seg.color, letterSpacing: "0.12em", textTransform: "lowercase" }}>units</EditableText>
            </div>
            <EditableText id={`impact-profile:seg-pct-${i}`} label={`audience pct — ${seg.label}`} as="div" style={{ fontSize: 12, fontWeight: 300, color: "rgba(206,232,238,0.40)", marginTop: 5, letterSpacing: "0.04em" }}>{seg.pct} of total</EditableText>
          </motion.div>
        ))}
      </div>

      {/* AMI bar */}
      <div style={{ position: "absolute", top: 570, left: 72, right: 72 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
          style={{ display: "flex", height: 6, gap: 2, borderRadius: 3, overflow: "hidden" }}
        >
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.7, ease: "easeOut" }}
              style={{ width: seg.width, height: "100%", transformOrigin: "left" }}
            >
              <EditableEl id={`impact-profile:ami-bar-${i}`} label={`ami segment — ${seg.label}`} type="bar"
                style={{ width: "100%", height: "100%", background: seg.color }} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          style={{ display: "flex", gap: 2, marginTop: 10 }}
        >
          {SEGMENTS.map((seg, i) => (
            <EditableText key={i} id={`impact-profile:ami-${i}`} label={`ami label — ${seg.label}`} as="div" style={{ width: seg.width, fontSize: 10, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.06em", textTransform: "lowercase" }}>
              {seg.label} · {seg.units}
            </EditableText>
          ))}
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.div {...lift(1.9)} style={{ position: "absolute", bottom: 16, right: 72 }}>
        <EditableText id="impact-profile:tagline" label="tagline" as="span" style={{ fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
          mindfully creating.
        </EditableText>
      </motion.div>
    </div>
  );
}
