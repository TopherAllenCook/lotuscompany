"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const muted = (a: number) => `rgba(255,255,255,${a})`;
const teal  = (a: number) => `rgba(77,186,214,${a})`;

const BULLETS = [
  "hud describes lihtc as the primary federal production tool for affordable rental housing",
  "credits are claimed over a 10-year credit period",
  "compliance runs 15 years, with longer affordability often favored in allocations",
  "state housing agencies allocate, test feasibility, and monitor compliance",
];

const DEV_BULLETS = [
  "sources and structures projects",
  "secures lihtc awards",
  "executes on development and operations",
  "partners with investors to sell tax credits",
  "retains long-term ownership",
  "ensures compliance with federal regulations",
];

export default function LIHTCSlide() {
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
          id="lihtc:bg-photo"
          label="background photo"
          src="/lotus-photos/solar-aerial.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.45 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(5,10,12,0.84) 0%, rgba(5,10,12,0.52) 55%, rgba(5,10,12,0.22) 100%)" }} />
      </div>

      {/* Layout */}
      <div style={{ position: "relative", display: "flex", alignItems: "stretch", height: "100%", padding: "36px 52px 42px", gap: 24 }}>

        {/* ── Left: policy card ── */}
        <EditableEl
          id="lihtc:card"
          label="policy glass card"
          type="card"
          style={{
            flex: "0 0 38%",
            display: "flex",
            flexDirection: "column",
            padding: "26px 30px",
            background: "rgba(5,10,12,0.58)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.13)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.09)",
          }}
        >
          {/* Eyebrow */}
          <EditableText
            id="lihtc:eyebrow"
            as="div"
            style={{ fontSize: "11px", color: theme.turquoise, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "12px" }}
          >
            policy
          </EditableText>

          {/* Headline */}
          <EditableText
            id="lihtc:headline"
            as="h1"
            style={{ fontSize: "28px", color: "#ffffff", fontWeight: 300, fontFamily: font, lineHeight: 1.18, letterSpacing: "-0.02em", textTransform: "lowercase", margin: "0 0 8px" }}
          >
            what is lihtc?
          </EditableText>

          {/* Subtitle */}
          <EditableText
            id="lihtc:subtitle"
            as="div"
            style={{ fontSize: "13px", color: teal(0.85), fontFamily: font, fontStyle: "italic", fontWeight: 300, textTransform: "lowercase", lineHeight: 1.5, marginBottom: "16px" }}
          >
            lihtc is the operating backbone, not just a backdrop
          </EditableText>

          <div style={{ height: "1px", background: teal(0.20), marginBottom: "16px" }} />

          {/* Bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
            {BULLETS.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: theme.turquoise, marginTop: "7px", flexShrink: 0 }} />
                <EditableText
                  id={`lihtc:bullet-${i}`}
                  as="p"
                  style={{ fontSize: "14px", color: muted(0.82), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.60, margin: 0 }}
                >
                  {b}
                </EditableText>
              </div>
            ))}
          </div>
        </EditableEl>

        {/* ── Right: diagram + developer bar ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px", minWidth: 0 }}>

          {/* Section header */}
          <div>
            <EditableText
              id="lihtc:infographic-title"
              as="div"
              style={{ fontSize: "11px", color: theme.turquoise, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "8px" }}
            >
              how lihtc works
            </EditableText>
            <div style={{ height: "1px", background: teal(0.20) }} />
          </div>

          {/* LIHTC diagram — hero image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}
          >
            <EditableEl
              id="lihtc:diagram-image"
              label="what is lihtc diagram"
              type="card"
              style={{
                flex: 1,
                minHeight: 0,
                background: "rgba(255,255,255,0.96)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 6px 32px rgba(0,0,0,0.35)",
                overflow: "hidden",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/lotus-photos/what_is_lihtc.png"
                alt="What is LIHTC — federal credit flow diagram"
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", borderRadius: "4px" }}
              />
            </EditableEl>
          </motion.div>

          {/* Developer / Operator bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.30, duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flexShrink: 0 }}
          >
            <EditableEl
              id="lihtc:developer-bar"
              label="developer / operator bar"
              type="card"
              style={{
                padding: "18px 22px",
                background: "rgba(5,10,12,0.55)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.11)",
                borderLeft: `3px solid ${theme.turquoise}`,
                borderRadius: "12px",
              }}
            >
              {/* Bar header */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "14px" }}>
                <EditableText
                  id="lihtc:developer-title"
                  as="div"
                  style={{ fontSize: "17px", color: "#ffffff", fontFamily: font, fontWeight: 400, textTransform: "lowercase" }}
                >
                  developer / operator
                </EditableText>
                <EditableText
                  id="lihtc:developer-sub"
                  as="div"
                  style={{ fontSize: "12px", color: theme.turquoise, fontFamily: font, fontWeight: 400, textTransform: "lowercase", letterSpacing: "0.18em" }}
                >
                  lotus impact initiative
                </EditableText>
              </div>

              {/* Bullets — 2 columns for breathing room */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px 20px" }}>
                {DEV_BULLETS.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", minWidth: 0 }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: theme.turquoise, marginTop: "8px", flexShrink: 0 }} />
                    <EditableText
                      id={`lihtc:dev-bullet-${i}`}
                      as="div"
                      style={{ fontSize: "14px", color: muted(0.75), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.55 }}
                    >
                      {b}
                    </EditableText>
                  </div>
                ))}
              </div>
            </EditableEl>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
