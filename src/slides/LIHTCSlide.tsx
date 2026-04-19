"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

const BULLETS = [
  "hud describes lihtc as the primary federal production tool for affordable rental housing",
  "credits are claimed over a 10-year credit period",
  "compliance runs for 15 years, with longer affordability often favored in allocations",
  "state housing agencies allocate, test feasibility, and monitor compliance",
];

const FLOW_STEPS = [
  { title: "federal & state housing agencies", sub: "allocate tax credits" },
  { title: "institutional investor", sub: "banks / corporations" },
  { title: "affordable housing development", sub: "rent-restricted housing" },
];

const FLOW_LABELS = ["lihtc allocation — credits awarded to projects", "equity investment — tax credits delivered (10 years)"];

const DEV_BULLETS = [
  "sources and structures projects",
  "secures lihtc awards",
  "retains long-term ownership",
  "banks / lihtc awards",
  "executes development",
];

const CLOSING = [
  "government allocates tax credits to incentivize affordable housing",
  "investors provide upfront capital in exchange for those credits",
  "projects are built with long-term rent restrictions",
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
        display: "flex",
        flexDirection: "column",
        padding: "48px 64px 68px",
      }}
    >
      <StatusChip status="READY" />

      <div style={{ display: "flex", gap: "28px", flex: 1, minHeight: 0 }}>

        {/* ── Left: glass card with bullets ─────────────────────────── */}
        <EditableEl
          id="lihtc:card"
          label="left card"
          type="card"
          style={{
            flex: "0 0 38%",
            display: "flex",
            flexDirection: "column",
            padding: "36px 40px",
            background: "rgba(5,10,12,0.52)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
          }}
        >
          <EditableText
            id="lihtc:eyebrow"
            as="div"
            style={{ fontSize: "10px", color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 300, marginBottom: "10px" }}
          >
            policy
          </EditableText>

          <EditableText
            id="lihtc:headline"
            as="h1"
            style={{ fontSize: "clamp(26px, 3vw, 44px)", color: theme.turquoise, fontWeight: 700, fontFamily: font, lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "lowercase", margin: "0 0 8px" }}
          >
            what is lihtc
          </EditableText>

          <EditableText
            id="lihtc:subtitle"
            as="div"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontFamily: font, fontStyle: "italic", fontWeight: 300, textTransform: "lowercase", marginBottom: "20px", lineHeight: 1.45 }}
          >
            lihtc is the operating backbone, not just a backdrop
          </EditableText>

          <div style={{ height: "1px", background: "rgba(77,186,214,0.2)", marginBottom: "20px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
            {BULLETS.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: theme.turquoise, marginTop: "6px", flexShrink: 0 }} />
                <EditableText
                  id={`lihtc:bullet-${i}`}
                  as="p"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", fontFamily: font, fontWeight: 400, textTransform: "lowercase", lineHeight: 1.6, margin: 0 }}
                >
                  {b}
                </EditableText>
              </div>
            ))}
          </div>

          {/* Photo strip at card bottom */}
          <div style={{ margin: "20px -40px -36px", borderRadius: "0 0 14px 14px", overflow: "hidden", height: "120px", flexShrink: 0 }}>
            <EditableBgImage
              id="lihtc:card-photo"
              label="card photo"
              src="/lotus-photos/nova/Commercial 2025-07-07 Lotus-Nova-5.jpg"
              style={{ width: "100%", height: "100%", opacity: 0.75 }}
            />
          </div>
        </EditableEl>

        {/* ── Right: infographic ─────────────────────────────────────── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2px" }}>
            <EditableText
              id="lihtc:infographic-title"
              as="div"
              style={{ fontSize: "15px", color: "#fff", fontFamily: font, fontWeight: 600, textTransform: "lowercase", letterSpacing: "-0.01em" }}
            >
              what is lihtc?
            </EditableText>
            <EditableText
              id="lihtc:infographic-sub"
              as="div"
              style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontFamily: font, fontStyle: "italic", fontWeight: 300, textTransform: "lowercase", marginTop: "3px" }}
            >
              how affordable housing is financed in the u.s.
            </EditableText>
          </div>

          {/* Flow row */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.09)",
              padding: "18px 20px",
            }}
          >
            {/* Label row above arrows */}
            <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "8px", paddingLeft: "calc(33% + 12px)", gap: 0 }}>
              {FLOW_LABELS.map((label, i) => (
                <EditableText
                  key={i}
                  id={`lihtc:flow-label-${i}`}
                  as="div"
                  style={{ flex: 1, textAlign: "center", fontSize: "9px", color: theme.turquoise, fontFamily: font, fontWeight: 400, textTransform: "lowercase", letterSpacing: "0.04em", lineHeight: 1.3, paddingRight: i === 0 ? "8px" : 0 }}
                >
                  {label}
                </EditableText>
              ))}
            </div>

            {/* Step boxes + arrows */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {FLOW_STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", flex: i === 1 ? "0 0 auto" : 1 }}>
                  <div
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px 12px",
                      background: "rgba(77,186,214,0.07)",
                      borderRadius: "8px",
                      border: "1px solid rgba(77,186,214,0.2)",
                    }}
                  >
                    <EditableText
                      id={`lihtc:flow-step-${i}-title`}
                      as="div"
                      style={{ fontSize: "11px", color: "#fff", fontFamily: font, fontWeight: 600, textTransform: "lowercase", lineHeight: 1.3, marginBottom: "3px" }}
                    >
                      {step.title}
                    </EditableText>
                    <EditableText
                      id={`lihtc:flow-step-${i}-sub`}
                      as="div"
                      style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", fontFamily: font, fontWeight: 300, textTransform: "lowercase" }}
                    >
                      {step.sub}
                    </EditableText>
                  </div>
                  {i < 2 && (
                    <div style={{ flexShrink: 0, padding: "0 6px" }}>
                      <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                        <line x1="0" y1="6" x2="18" y2="6" stroke={theme.turquoise} strokeWidth="1.5" />
                        <polygon points="18,3 24,6 18,9" fill={theme.turquoise} />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Developer / Operator bar */}
          <EditableEl
            id="lihtc:developer-bar"
            label="developer / operator bar"
            type="card"
            style={{
              padding: "14px 20px",
              background: "rgba(77,186,214,0.10)",
              border: `1px solid ${theme.turquoise}`,
              borderRadius: "8px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <EditableText
                id="lihtc:developer-title"
                as="div"
                style={{ fontSize: "13px", color: "#fff", fontFamily: font, fontWeight: 600, textTransform: "lowercase" }}
              >
                developer / operator
              </EditableText>
              <EditableText
                id="lihtc:developer-sub"
                as="div"
                style={{ fontSize: "10px", color: theme.turquoise, fontFamily: font, fontWeight: 400, textTransform: "lowercase", letterSpacing: "0.08em", marginTop: "2px" }}
              >
                lotus impact initiative
              </EditableText>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px 16px" }}>
              {DEV_BULLETS.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: theme.turquoise, marginTop: "5px", flexShrink: 0 }} />
                  <EditableText
                    id={`lihtc:dev-bullet-${i}`}
                    as="div"
                    style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.4 }}
                  >
                    {b}
                  </EditableText>
                </div>
              ))}
            </div>
          </EditableEl>

          {/* Closing bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {CLOSING.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(77,186,214,0.45)", marginTop: "5px", flexShrink: 0 }} />
                <EditableText
                  id={`lihtc:closing-${i}`}
                  as="div"
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.4 }}
                >
                  {c}
                </EditableText>
              </div>
            ))}
          </div>

        </div>
      </div>

      <SlideFooter slideKey="lihtc" slideNum="06" sectionLabel="mechanism" />
    </div>
  );
}
