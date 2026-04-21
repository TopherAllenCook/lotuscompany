"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const DIMENSIONS = [
  { label: "capital lifecycle",     philanthropy: "spent once",                    blindPool: "locked, single cycle",        lotus: "recycled across cohorts" },
  { label: "partner visibility",    philanthropy: "low",                           blindPool: "low to moderate",             lotus: "high" },
  { label: "impact accountability", philanthropy: "high intent, variable measure", blindPool: "secondary to return",         lotus: "core to reporting" },
  { label: "speed to deploy",       philanthropy: "slow",                          blindPool: "manager pace",                lotus: "deal-level consent within rules" },
  { label: "return on capital",     philanthropy: "none",                          blindPool: "target-based, opaque",        lotus: "15%+ irr, transparent" },
];

const muted = (a: number) => `rgba(255,255,255,${a})`;
const teal  = (a: number) => `rgba(77,186,214,${a})`;

const ROW_H = `${100 / DIMENSIONS.length}%`;

export function LotusStructureSlide() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: theme.darkBg }}>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="lotus-structure:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_4-corners_2026.03.26.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.40 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(5,10,12,0.88) 0%, rgba(5,10,12,0.52) 55%, rgba(5,10,12,0.18) 100%)" }} />
      </div>

      <div style={{ position: "relative", display: "flex", alignItems: "stretch", height: "100%", padding: "48px 56px 52px", gap: 24 }}>

        {/* ── Left: narrative card ── */}
        <EditableEl
          id="structure:card-left"
          label="narrative glass card"
          type="card"
          style={{
            flex: "0 0 30%",
            display: "flex",
            flexDirection: "column",
            padding: "32px 34px",
            background: "rgba(5,10,12,0.60)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.11)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <EditableText
            id="structure:eyebrow"
            as="div"
            style={{ fontSize: "11px", color: theme.turquoise, fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, marginBottom: "12px" }}
          >
            why this structure exists
          </EditableText>

          <EditableText
            id="structure:headline"
            as="h2"
            style={{ fontSize: "30px", color: "#fff", fontWeight: 300, letterSpacing: "-0.02em", fontFamily: font, lineHeight: 1.22, textTransform: "lowercase", margin: "0 0 18px" }}
          >
            most models trade capital, control, or impact. we won&apos;t.
          </EditableText>

          <div style={{ height: "1px", background: teal(0.18), marginBottom: "18px" }} />

          <EditableText
            id="structure:caption"
            as="p"
            style={{ fontSize: "16px", color: muted(0.78), fontWeight: 300, fontFamily: font, fontStyle: "italic", margin: 0, textTransform: "lowercase", lineHeight: 1.65 }}
          >
            purpose with process. the lotus collective is built to hold both — without trading one for the other.
          </EditableText>
        </EditableEl>

        {/* ── Right: three comparison columns ── */}
        <div style={{ flex: 1, display: "flex", gap: "12px", minWidth: 0 }}>

          {/* — Philanthropy — */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.10, duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <EditableEl id="structure:card-philanthropy" label="philanthropy column" type="card"
              style={{ flex: 1, display: "flex", flexDirection: "column", background: "rgba(5,10,12,0.44)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}
            >
              {/* Header */}
              <div style={{ padding: "16px 20px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
                <EditableText id="structure:label-philanthropy" as="div"
                  style={{ fontSize: "13px", color: muted(0.44), fontFamily: font, fontWeight: 500, textTransform: "lowercase", letterSpacing: "0.08em" }}
                >
                  philanthropy
                </EditableText>
              </div>
              {/* Rows */}
              {DIMENSIONS.map((d, i) => (
                <div key={i} style={{ flex: 1, padding: "0 20px", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: i < DIMENSIONS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <EditableText id={`structure:phil-dim-${i}`} as="div" style={{ fontSize: "9px", color: teal(0.40), fontFamily: font, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "4px" }}>
                    {d.label}
                  </EditableText>
                  <EditableText id={`structure:phil-val-${i}`} as="div" style={{ fontSize: "15px", color: muted(0.50), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.35 }}>
                    {d.philanthropy}
                  </EditableText>
                </div>
              ))}
            </EditableEl>
          </motion.div>

          {/* — Blind-Pool Fund — */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.20, duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <EditableEl id="structure:card-blindpool" label="blind-pool column" type="card"
              style={{ flex: 1, display: "flex", flexDirection: "column", background: "rgba(5,10,12,0.50)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.09)", overflow: "hidden" }}
            >
              <div style={{ padding: "16px 20px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
                <EditableText id="structure:label-blindpool" as="div"
                  style={{ fontSize: "13px", color: muted(0.52), fontFamily: font, fontWeight: 500, textTransform: "lowercase", letterSpacing: "0.08em" }}
                >
                  blind-pool fund
                </EditableText>
              </div>
              {DIMENSIONS.map((d, i) => (
                <div key={i} style={{ flex: 1, padding: "0 20px", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: i < DIMENSIONS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <EditableText id={`structure:bp-dim-${i}`} as="div" style={{ fontSize: "9px", color: teal(0.40), fontFamily: font, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "4px" }}>
                    {d.label}
                  </EditableText>
                  <EditableText id={`structure:bp-val-${i}`} as="div" style={{ fontSize: "15px", color: muted(0.58), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.35 }}>
                    {d.blindPool}
                  </EditableText>
                </div>
              ))}
            </EditableEl>
          </motion.div>

          {/* — The Lotus Collective — */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <EditableEl id="structure:card-lotus" label="lotus collective column" type="card"
              style={{ flex: 1, display: "flex", flexDirection: "column", background: "rgba(5,10,12,0.62)", backdropFilter: "blur(28px) saturate(180%)", WebkitBackdropFilter: "blur(28px) saturate(180%)", borderRadius: "14px", border: `1px solid ${teal(0.36)}`, boxShadow: `0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 ${teal(0.14)}`, overflow: "hidden" }}
            >
              <div style={{ padding: "16px 20px 14px", background: teal(0.10), borderBottom: `1px solid ${teal(0.20)}`, flexShrink: 0 }}>
                <EditableText id="structure:label-lotus" as="div"
                  style={{ fontSize: "13px", color: theme.turquoise, fontFamily: font, fontWeight: 600, textTransform: "lowercase", letterSpacing: "0.10em" }}
                >
                  the lotus collective
                </EditableText>
              </div>
              {DIMENSIONS.map((d, i) => (
                <div key={i} style={{ flex: 1, padding: "0 20px", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: i < DIMENSIONS.length - 1 ? `1px solid ${teal(0.10)}` : "none", background: i % 2 === 0 ? teal(0.03) : "transparent" }}>
                  <EditableText id={`structure:lotus-dim-${i}`} as="div" style={{ fontSize: "9px", color: teal(0.62), fontFamily: font, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "4px" }}>
                    {d.label}
                  </EditableText>
                  <EditableText id={`structure:lotus-val-${i}`} as="div" style={{ fontSize: "15px", color: "#ffffff", fontFamily: font, fontWeight: 400, textTransform: "lowercase", lineHeight: 1.35 }}>
                    {d.lotus}
                  </EditableText>
                </div>
              ))}
            </EditableEl>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
