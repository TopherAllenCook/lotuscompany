"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

const BG = "#424242";
const INK = "#ffffff";
const muted = (a: number) => `rgba(255,255,255,${a})`;
const teal = (a: number) => `rgba(77,186,214,${a})`;

const BULLETS = [
  "hud describes lihtc as the primary federal production tool for affordable rental housing",
  "credits are claimed over a 10-year credit period",
  "compliance runs for 15 years, with longer affordability often favored in allocations",
  "state housing agencies allocate, test feasibility, and monitor compliance",
];

const FLOW_STEPS = [
  { title: "federal & state housing agencies", sub: "allocate tax credits", label: null },
  { title: "institutional investor", sub: "banks / corporations", label: "lihtc allocation" },
  { title: "affordable housing development", sub: "rent-restricted housing", label: "equity investment (10 yrs)" },
];

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
        background: BG,
        display: "flex",
        flexDirection: "column",
        padding: "48px 64px 68px",
        fontFamily: font,
      }}
    >
      <StatusChip status="READY" />

      <div style={{ display: "flex", gap: "28px", flex: 1, minHeight: 0 }}>

        {/* ── Left: card ─────────────────────────────────────────────── */}
        <EditableEl
          id="lihtc:card"
          label="left card"
          type="card"
          style={{
            flex: "0 0 38%",
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${muted(0.10)}`,
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "32px 36px 28px", flex: 1 }}>
            <EditableText
              id="lihtc:eyebrow"
              as="div"
              style={{ fontSize: 11, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 400, marginBottom: 10 }}
            >
              policy
            </EditableText>

            <EditableText
              id="lihtc:headline"
              as="h1"
              style={{ fontSize: "38px", color: INK, fontWeight: 300, fontFamily: font, lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "lowercase", margin: "0 0 10px" }}
            >
              what is lihtc?
            </EditableText>

            <EditableText
              id="lihtc:subtitle"
              as="div"
              style={{ fontSize: "14px", color: theme.turquoise, fontFamily: font, fontStyle: "italic", fontWeight: 300, textTransform: "lowercase", marginBottom: "20px", lineHeight: 1.45 }}
            >
              lihtc is the operating backbone, not just a backdrop
            </EditableText>

            <div style={{ height: "1px", background: muted(0.10), marginBottom: "20px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {BULLETS.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: theme.turquoise, marginTop: "7px", flexShrink: 0 }} />
                  <EditableText
                    id={`lihtc:bullet-${i}`}
                    as="p"
                    style={{ fontSize: "14px", color: muted(0.70), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.6, margin: 0 }}
                  >
                    {b}
                  </EditableText>
                </div>
              ))}
            </div>
          </div>

          {/* Photo strip at card bottom */}
          <div style={{ height: "130px", flexShrink: 0 }}>
            <EditableBgImage
              id="lihtc:card-photo"
              label="card photo"
              src="/lotus-photos/nova/Commercial 2025-07-07 Lotus-Nova-5.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </EditableEl>

        {/* ── Right: infographic ─────────────────────────────────────── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>

          {/* Header */}
          <div>
            <EditableText
              id="lihtc:infographic-title"
              as="div"
              style={{ fontSize: 11, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 4 }}
            >
              how lihtc works
            </EditableText>
            <EditableText
              id="lihtc:infographic-sub"
              as="div"
              style={{ fontSize: "18px", color: muted(0.65), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.5 }}
            >
              how affordable housing is financed in the u.s.
            </EditableText>
          </div>

          <div style={{ height: 1, background: muted(0.08) }} />

          {/* Flow row */}
          <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
            {FLOW_STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{ flex: 1, position: "relative" }}>
                  {/* Arrow label above connector */}
                  {step.label && (
                    <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>
                      <EditableText
                        id={`lihtc:flow-label-${i}`}
                        as="div"
                        style={{ fontSize: 9, color: theme.turquoise, fontFamily: font, letterSpacing: "0.12em", textTransform: "lowercase" }}
                      >
                        {step.label}
                      </EditableText>
                    </div>
                  )}
                  <div
                    style={{
                      textAlign: "center",
                      padding: "14px 12px",
                      background: teal(0.06),
                      borderRadius: "8px",
                      border: `1px solid ${muted(0.10)}`,
                    }}
                  >
                    <EditableText
                      id={`lihtc:flow-step-${i}-title`}
                      as="div"
                      style={{ fontSize: "13px", color: INK, fontFamily: font, fontWeight: 500, textTransform: "lowercase", lineHeight: 1.3, marginBottom: "4px" }}
                    >
                      {step.title}
                    </EditableText>
                    <EditableText
                      id={`lihtc:flow-step-${i}-sub`}
                      as="div"
                      style={{ fontSize: "11px", color: muted(0.42), fontFamily: font, fontWeight: 300, textTransform: "lowercase" }}
                    >
                      {step.sub}
                    </EditableText>
                  </div>
                </div>
                {i < 2 && (
                  <div style={{ flexShrink: 0, padding: "0 8px" }}>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                      <line x1="0" y1="5" x2="15" y2="5" stroke={theme.turquoise} strokeWidth="1.5" />
                      <polygon points="15,2.5 20,5 15,7.5" fill={theme.turquoise} />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Developer / Operator bar */}
          <EditableEl
            id="lihtc:developer-bar"
            label="developer / operator bar"
            type="card"
            style={{
              padding: "16px 20px",
              background: teal(0.06),
              border: `1px solid ${muted(0.10)}`,
              borderLeft: `3px solid ${theme.turquoise}`,
              borderRadius: "8px",
            }}
          >
            <div style={{ marginBottom: "12px" }}>
              <EditableText
                id="lihtc:developer-title"
                as="div"
                style={{ fontSize: "18px", color: INK, fontFamily: font, fontWeight: 400, textTransform: "lowercase" }}
              >
                developer / operator
              </EditableText>
              <EditableText
                id="lihtc:developer-sub"
                as="div"
                style={{ fontSize: 11, color: theme.turquoise, fontFamily: font, fontWeight: 400, textTransform: "lowercase", letterSpacing: "0.16em", marginTop: "3px" }}
              >
                lotus impact initiative
              </EditableText>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px 20px" }}>
              {DEV_BULLETS.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: theme.turquoise, marginTop: "6px", flexShrink: 0 }} />
                  <EditableText
                    id={`lihtc:dev-bullet-${i}`}
                    as="div"
                    style={{ fontSize: "13px", color: muted(0.65), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.5 }}
                  >
                    {b}
                  </EditableText>
                </div>
              ))}
            </div>
          </EditableEl>

          {/* Closing bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {CLOSING.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: teal(0.50), marginTop: "7px", flexShrink: 0 }} />
                <EditableText
                  id={`lihtc:closing-${i}`}
                  as="div"
                  style={{ fontSize: "14px", color: muted(0.50), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.5 }}
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
