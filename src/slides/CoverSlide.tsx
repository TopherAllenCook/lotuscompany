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
  initial:   { clipPath: "inset(115% 0 -20px 0)", y: 32 },
  animate:   { clipPath: "inset(0% 0 -20px 0)",   y: 0 },
  transition: { delay, duration: 0.7, ease: EASE_OUT },
});

export function CoverSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", fontFamily: font, overflow: "hidden" }}>

      {/* Background image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.07 }}
        transition={{ duration: 10, ease: "linear" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "40% 55%", transformOrigin: "40% 55%" }}
      />

      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(15,20,22,0.35) 0%, rgba(10,14,16,0.50) 35%, rgba(5,10,12,0.80) 65%, rgba(2,6,8,0.96) 100%)",
        }}
      />

      {/* Location — top right */}
      <motion.div {...lift(0.25)} style={{ position: "absolute", top: 66, right: 72, display: "flex", alignItems: "center", gap: 12 }}>
        <EditableEl id="cover:location-dot" label="location dot" type="dot" style={{ width: 5, height: 5, borderRadius: "50%", background: theme.turquoise }} />
        <EditableText id="cover:location" label="location" as="span" style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.28em", color: theme.lightBlue, textTransform: "lowercase" }}>
          columbus, ohio
        </EditableText>
      </motion.div>

      {/* Eyebrow */}
      <motion.div {...lift(0.4)} style={{ position: "absolute", top: "14%", left: 72, right: 72, display: "flex", alignItems: "center", gap: 16 }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}>
          <EditableEl id="cover:rule-left" label="eyebrow rule left" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
        </motion.div>
        <EditableText id="cover:eyebrow" label="eyebrow" as="span" style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.36em", color: "#fff", textTransform: "lowercase" }}>
          new development · phase 1
        </EditableText>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}>
          <EditableEl id="cover:rule-right" label="eyebrow rule right" type="bar" style={{ width: 52, height: 1.5, background: theme.turquoise }} />
        </motion.div>
      </motion.div>

      {/* Title + stats */}
      <div style={{ position: "absolute", bottom: 96, left: 72, right: 72 }}>

        {/* Title */}
        <div style={{ fontSize: "clamp(64px,7vw,108px)", fontWeight: 300, color: "#fff", lineHeight: 0.92, letterSpacing: "-0.02em", textTransform: "lowercase", marginBottom: 36 }}>
          <div style={{ overflow: "hidden", paddingBottom: 10 }}>
            <motion.span {...reveal(0.55)} style={{ display: "inline-block" }}>
              <EditableText id="cover:title-1" label="title — steelton" as="span">steelton</EditableText>
            </motion.span>
          </div>
          <div style={{ overflow: "hidden", paddingBottom: 10 }}>
            <motion.span {...reveal(0.7)} style={{ display: "inline-block" }}>
              <EditableText id="cover:title-2" label="title — village." as="span">
                village<span style={{ color: theme.turquoise }}>.</span>
              </EditableText>
            </motion.span>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <motion.div {...lift(1.0)}>
            <EditableText id="cover:stat-num-0" label="stat — 270 units number" as="div" style={{ fontSize: 36, fontWeight: 300, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>
              270
            </EditableText>
            <EditableText id="cover:stat-label-0" label="stat — units label" as="div" style={{ fontSize: 11, fontWeight: 400, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginTop: 5 }}>
              units
            </EditableText>
          </motion.div>

          <motion.div {...lift(1.0)}>
            <EditableEl id="cover:stat-divider-0" label="stat divider 1" type="bar" style={{ width: 1, height: 48, background: "rgba(206,232,238,0.18)" }} />
          </motion.div>

          <motion.div {...lift(1.1)}>
            <EditableText id="cover:stat-num-1" label="stat — lihtc number" as="div" style={{ fontSize: 22, fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "0.08em", textTransform: "lowercase" }}>
              lihtc
            </EditableText>
            <EditableText id="cover:stat-label-1" label="stat — financing label" as="div" style={{ fontSize: 11, fontWeight: 400, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginTop: 5 }}>
              financing
            </EditableText>
          </motion.div>

          <motion.div {...lift(1.1)}>
            <EditableEl id="cover:stat-divider-1" label="stat divider 2" type="bar" style={{ width: 1, height: 48, background: "rgba(206,232,238,0.18)" }} />
          </motion.div>

          <motion.div {...lift(1.2)}>
            <EditableText id="cover:stat-line-1" label="stat — development line" as="div" style={{ fontSize: 22, fontWeight: 300, color: "#fff", lineHeight: 1.15, textTransform: "lowercase" }}>
              development
            </EditableText>
            <EditableText id="cover:stat-line-2" label="stat — opportunity line" as="div" style={{ fontSize: 22, fontWeight: 300, color: theme.turquoise, lineHeight: 1.15, textTransform: "lowercase" }}>
              opportunity
            </EditableText>
          </motion.div>
        </div>
      </div>

      {/* Lotus logo — bottom left */}
      <motion.div {...lift(1.3)} style={{ position: "absolute", bottom: 28, left: 72 }}>
        <LotusMark width={160} onDark />
      </motion.div>
    </div>
  );
}
