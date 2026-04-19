"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const lift = (delay: number) => ({
  initial:   { opacity: 0, y: 10 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

const reveal = (delay: number) => ({
  initial:   { clipPath: "inset(115% 0 -20px 0)", y: 32 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.7, ease: EASE_OUT },
});

const TITLE_WORDS = ["the", "impact", "initiative."];

export function ImpactSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", fontFamily: font, overflow: "hidden" }}>

      {/* Full-bleed image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.07 }}
        transition={{ duration: 12, ease: "linear" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%" }}
      />

      {/* Gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(5,10,12,0.97) 0%, rgba(5,10,12,0.65) 40%, rgba(5,10,12,0.15) 70%, rgba(5,10,12,0.05) 100%)",
      }} />

      {/* Top bar */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)" }}>
        <EditableText id="impact:slide-num" as="span" style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
          02 / steelton village
        </EditableText>
      </motion.div>

      {/* Main content */}
      <div style={{ position: "absolute", bottom: 72, left: 72, right: 72 }}>

        {/* Eyebrow */}
        <motion.div {...lift(0.3)} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: "left" }}>
            <EditableEl id="impact:rule-left" label="eyebrow rule left" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
          </motion.div>
          <EditableText id="impact:eyebrow" label="eyebrow" as="span" style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.4em", color: theme.turquoise, textTransform: "lowercase" }}>
            steelton village · phase 1
          </EditableText>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: "left" }}>
            <EditableEl id="impact:rule-right" label="eyebrow rule right" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
          </motion.div>
        </motion.div>

        {/* Title */}
        <div style={{ fontSize: "38px", fontWeight: 300, color: "#fff", lineHeight: 0.92, letterSpacing: "-0.025em", textTransform: "lowercase" }}>
          {TITLE_WORDS.map((word, i) => (
            <div key={word} style={{ overflow: "hidden", paddingBottom: 10 }}>
              <motion.span {...reveal(0.5 + i * 0.15)} style={{ display: "inline-block" }}>
                <EditableText id={`impact:title-${i}`} label={`title — ${word}`} as="span">
                  {word === "initiative." ? (
                    <>initiative<span style={{ color: theme.turquoise }}>.</span></>
                  ) : word}
                </EditableText>
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <motion.div {...lift(1.3)} style={{ position: "absolute", bottom: 32, right: 72 }}>
        <EditableText id="impact:tagline" label="tagline" as="span" style={{ fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
          mindfully creating.
        </EditableText>
      </motion.div>
    </div>
  );
}
