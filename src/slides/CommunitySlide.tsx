"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const lift = (delay: number) => ({
  initial:   { opacity: 0, y: 12 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(115% 0 -20px 0)", y: 28 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.75, ease: EASE_OUT },
});

const EDITORIAL_LINES = ["this is not", "development.", "this is", "place-making."];
const CONCEPTS = [
  "connected community",
  "6-acre public park",
  "the fort · art + culture",
];

export function CommunitySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", fontFamily: font, overflow: "hidden" }}>

      {/* Full-bleed image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_North Park_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 14, ease: "linear" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 60%" }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(5,10,12,0.98) 0%, rgba(5,10,12,0.70) 38%, rgba(5,10,12,0.20) 65%, rgba(5,10,12,0.05) 100%)",
      }} />

      {/* Top bar */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)" }}>
        <EditableText id="community:slide-num" as="span" style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
          03 / steelton village
        </EditableText>
      </motion.div>

      {/* Main content */}
      <div style={{ position: "absolute", bottom: 72, left: 72, right: 72 }}>

        {/* Eyebrow */}
        <motion.div {...lift(0.3)} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: "left" }}>
            <EditableEl id="community:rule-left" label="eyebrow rule left" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
          </motion.div>
          <EditableText id="community:eyebrow" label="eyebrow" as="span" style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.4em", color: theme.turquoise, textTransform: "lowercase" }}>
            steelton village · phase 1
          </EditableText>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: "left" }}>
            <EditableEl id="community:rule-right" label="eyebrow rule right" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
          </motion.div>
        </motion.div>

        {/* Editorial statement */}
        <div style={{ fontSize: "38px", fontWeight: 300, color: "#fff", lineHeight: 1.0, letterSpacing: "-0.02em", textTransform: "lowercase", marginBottom: 40 }}>
          {EDITORIAL_LINES.map((line, i) => (
            <div key={i} style={{ overflow: "hidden", paddingBottom: 6 }}>
              <motion.span
                {...reveal(0.45 + i * 0.12)}
                style={{ display: "inline-block" }}
              >
                <EditableText id={`community:line-${i}`} label={`editorial — ${line}`} as="span" style={{
                  color: i === 1 || i === 3 ? theme.turquoise : "#fff",
                }}>
                  {line}
                </EditableText>
              </motion.span>
            </div>
          ))}
        </div>

        {/* Concept pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {CONCEPTS.map((c, i) => (
            <EditableText key={i} id={`community:concept-${i}`} label={`concept — ${c}`} as="span" style={{ fontSize: 12, fontWeight: 400, letterSpacing: "0.22em", color: "rgba(206,232,238,0.50)", textTransform: "lowercase" }}>
              {c}
            </EditableText>
          ))}
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.div {...lift(1.4)} style={{ position: "absolute", bottom: 32, right: 72 }}>
        <EditableText id="community:tagline" label="tagline" as="span" style={{ fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
          mindfully creating.
        </EditableText>
      </motion.div>
    </div>
  );
}
