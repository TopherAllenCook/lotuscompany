"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const DIMENSIONS = [
  { label: "capital lifecycle",      philanthropy: "spent once",                    blindPool: "locked, single cycle",           lotus: "recycled across cohorts" },
  { label: "partner visibility",     philanthropy: "low",                           blindPool: "low to moderate",                lotus: "high" },
  { label: "impact accountability",  philanthropy: "high intent, variable measure", blindPool: "secondary to return",            lotus: "core to reporting" },
  { label: "speed to deploy",        philanthropy: "slow",                          blindPool: "manager pace",                   lotus: "deal-level consent within rules" },
  { label: "return on capital",      philanthropy: "none",                          blindPool: "target-based, opaque",           lotus: "15%+ irr, transparent" },
];

const muted = (a: number) => `rgba(255,255,255,${a})`;
const teal  = (a: number) => `rgba(77,186,214,${a})`;

export function LotusStructureSlide() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="lotus-structure:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_4-corners_2026.03.26.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.40 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(5,10,12,0.82) 0%, rgba(5,10,12,0.50) 55%, rgba(5,10,12,0.22) 100%)" }} />
      </div>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", padding: "48px 60px 56px" }}>

        {/* ── Top header ── */}
        <div style={{ marginBottom: "28px" }}>
          <EditableText
            id="structure:eyebrow"
            as="div"
            style={{ fontSize: "11px", color: theme.turquoise, fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, marginBottom: "10px" }}
          >
            why this structure exists
          </EditableText>
          <EditableText
            id="structure:headline"
            as="h1"
            style={{ fontSize: "36px", color: "#fff", fontWeight: 300, letterSpacing: "-0.02em", fontFamily: font, lineHeight: 1.15, textTransform: "lowercase", margin: 0 }}
          >
            most models trade capital, control, or impact.&nbsp;we won&apos;t.
          </EditableText>
        </div>

        <div style={{ height: "1px", background: teal(0.20), marginBottom: "24px" }} />

        {/* ── Three pillar cards ── */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1.18fr", gap: "14px", minHeight: 0 }}>

          {/* — Philanthropy — */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.10, duration: 0.50, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", flexDirection: "column", minHeight: 0 }}
          >
            <EditableEl
              id="structure:card-philanthropy"
              label="philanthropy card"
              type="card"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                background: "rgba(5,10,12,0.48)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div style={{ padding: "20px 22px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <EditableText
                  id="structure:label-philanthropy"
                  as="div"
                  style={{ fontSize: "13px", color: muted(0.50), fontFamily: font, fontWeight: 500, textTransform: "lowercase", letterSpacing: "0.10em" }}
                >
                  philanthropy
                </EditableText>
              </div>
              {/* Rows */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {DIMENSIONS.map((d, i) => (
                  <div key={i} style={{ flex: 1, padding: "0 22px", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: i < DIMENSIONS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <EditableText id={`structure:phil-dim-${i}`} as="div" style={{ fontSize: "9px", color: teal(0.45), fontFamily: font, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "3px" }}>
                      {d.label}
                    </EditableText>
                    <EditableText id={`structure:phil-val-${i}`} as="div" style={{ fontSize: "14px", color: muted(0.55), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.35 }}>
                      {d.philanthropy}
                    </EditableText>
                  </div>
                ))}
              </div>
            </EditableEl>
          </motion.div>

          {/* — Blind-Pool Fund — */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.20, duration: 0.50, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", flexDirection: "column", minHeight: 0 }}
          >
            <EditableEl
              id="structure:card-blindpool"
              label="blind-pool fund card"
              type="card"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                background: "rgba(5,10,12,0.52)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.11)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "20px 22px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <EditableText
                  id="structure:label-blindpool"
                  as="div"
                  style={{ fontSize: "13px", color: muted(0.58), fontFamily: font, fontWeight: 500, textTransform: "lowercase", letterSpacing: "0.10em" }}
                >
                  blind-pool fund
                </EditableText>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {DIMENSIONS.map((d, i) => (
                  <div key={i} style={{ flex: 1, padding: "0 22px", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: i < DIMENSIONS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <EditableText id={`structure:bp-dim-${i}`} as="div" style={{ fontSize: "9px", color: teal(0.45), fontFamily: font, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "3px" }}>
                      {d.label}
                    </EditableText>
                    <EditableText id={`structure:bp-val-${i}`} as="div" style={{ fontSize: "14px", color: muted(0.62), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.35 }}>
                      {d.blindPool}
                    </EditableText>
                  </div>
                ))}
              </div>
            </EditableEl>
          </motion.div>

          {/* — The Lotus Collective — highlighted ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.54, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", flexDirection: "column", minHeight: 0 }}
          >
            <EditableEl
              id="structure:card-lotus"
              label="the lotus collective card"
              type="card"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                background: "rgba(5,10,12,0.62)",
                backdropFilter: "blur(32px) saturate(180%)",
                WebkitBackdropFilter: "blur(32px) saturate(180%)",
                borderRadius: "14px",
                border: `1px solid ${teal(0.38)}`,
                boxShadow: `0 12px 48px rgba(0,0,0,0.50), 0 0 0 1px ${teal(0.12)}, inset 0 1px 0 ${teal(0.15)}`,
                overflow: "hidden",
              }}
            >
              {/* Turquoise header band */}
              <div style={{ padding: "20px 24px 16px", background: teal(0.10), borderBottom: `1px solid ${teal(0.22)}` }}>
                <EditableText
                  id="structure:label-lotus"
                  as="div"
                  style={{ fontSize: "13px", color: theme.turquoise, fontFamily: font, fontWeight: 600, textTransform: "lowercase", letterSpacing: "0.12em" }}
                >
                  the lotus collective
                </EditableText>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {DIMENSIONS.map((d, i) => (
                  <div key={i} style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: i < DIMENSIONS.length - 1 ? `1px solid ${teal(0.10)}` : "none", background: i % 2 === 0 ? teal(0.03) : "transparent" }}>
                    <EditableText id={`structure:lotus-dim-${i}`} as="div" style={{ fontSize: "9px", color: teal(0.65), fontFamily: font, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "3px" }}>
                      {d.label}
                    </EditableText>
                    <EditableText id={`structure:lotus-val-${i}`} as="div" style={{ fontSize: "15px", color: "#ffffff", fontFamily: font, fontWeight: 400, textTransform: "lowercase", lineHeight: 1.35 }}>
                      {d.lotus}
                    </EditableText>
                  </div>
                ))}
              </div>
            </EditableEl>
          </motion.div>

        </div>

        {/* ── Footer caption ── */}
        <div style={{ marginTop: "18px" }}>
          <EditableText
            id="structure:caption"
            as="div"
            style={{ fontSize: "13px", color: theme.turquoise, fontFamily: font, fontWeight: 400, textTransform: "lowercase", letterSpacing: "0.08em", fontStyle: "italic" }}
          >
            purpose with process.
          </EditableText>
        </div>

      </div>
    </div>
  );
}
