"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

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
  "executes development & operations",
  "retains long-term ownership",
  "partners with investors to sell tax credits",
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
      }}
    >
      {/* Full-bleed background image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="lihtc:bg-photo"
          label="background photo"
          src="/lotus-photos/solar-aerial.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.52 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.30) 0%, rgba(5,10,12,0.12) 50%, rgba(5,10,12,0.02) 100%)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "52px 64px 68px", gap: 32 }}>

        {/* Left: policy card */}
        <EditableEl
          id="lihtc:card"
          label="policy glass card"
          type="card"
          style={{
            flex: "0 0 42%",
            display: "flex",
            flexDirection: "column",
            padding: "32px 36px",
            background: "rgba(5,10,12,0.54)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
          }}
        >
          <EditableText
            id="lihtc:eyebrow"
            as="div"
            style={{ fontSize: 13, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 300, marginBottom: 10 }}
          >
            policy
          </EditableText>

          <EditableText
            id="lihtc:headline"
            as="h1"
            style={{ fontSize: "36px", color: INK, fontWeight: 300, fontFamily: font, lineHeight: 1.15, letterSpacing: "-0.02em", textTransform: "lowercase", margin: "0 0 8px" }}
          >
            what is lihtc?
          </EditableText>

          <EditableText
            id="lihtc:subtitle"
            as="div"
            style={{ fontSize: "15px", color: theme.turquoise, fontFamily: font, fontStyle: "italic", fontWeight: 300, textTransform: "lowercase", marginBottom: "16px", lineHeight: 1.45 }}
          >
            lihtc is the operating backbone, not just a backdrop
          </EditableText>

          <div style={{ height: "1px", background: "rgba(77,186,214,0.18)", marginBottom: "14px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {BULLETS.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: theme.turquoise, marginTop: "7px", flexShrink: 0 }} />
                <EditableText
                  id={`lihtc:bullet-${i}`}
                  as="p"
                  style={{ fontSize: "15px", color: muted(0.80), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.6, margin: 0 }}
                >
                  {b}
                </EditableText>
              </div>
            ))}
          </div>
        </EditableEl>

        {/* Right: infographic */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>

          {/* Header */}
          <div>
            <EditableText
              id="lihtc:infographic-title"
              as="div"
              style={{ fontSize: 13, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 300, marginBottom: 4 }}
            >
              how lihtc works
            </EditableText>
            <EditableText
              id="lihtc:infographic-sub"
              as="div"
              style={{ fontSize: "17px", color: muted(0.80), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.5 }}
            >
              how affordable housing is financed in the u.s.
            </EditableText>
          </div>

          <div style={{ height: 1, background: "rgba(77,186,214,0.18)" }} />

          {/* Flow row */}
          <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
            {FLOW_STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}>
                <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
                  {step.label && (
                    <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>
                      <EditableText
                        id={`lihtc:flow-label-${i}`}
                        as="div"
                        style={{ fontSize: 11, color: theme.turquoise, fontFamily: font, letterSpacing: "0.12em", textTransform: "lowercase" }}
                      >
                        {step.label}
                      </EditableText>
                    </div>
                  )}
                  <EditableEl
                    id={`lihtc:flow-step-box-${i}`}
                    label={`flow step — ${step.title}`}
                    type="card"
                    style={{
                      textAlign: "center",
                      padding: "10px 10px",
                      background: "rgba(5,10,12,0.52)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <EditableText
                      id={`lihtc:flow-step-${i}-title`}
                      as="div"
                      style={{ fontSize: "14px", color: INK, fontFamily: font, fontWeight: 500, textTransform: "lowercase", lineHeight: 1.3, marginBottom: "3px" }}
                    >
                      {step.title}
                    </EditableText>
                    <EditableText
                      id={`lihtc:flow-step-${i}-sub`}
                      as="div"
                      style={{ fontSize: "12px", color: muted(0.50), fontFamily: font, fontWeight: 300, textTransform: "lowercase" }}
                    >
                      {step.sub}
                    </EditableText>
                  </EditableEl>
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
              padding: "14px 18px",
              background: "rgba(5,10,12,0.52)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderLeft: `3px solid ${theme.turquoise}`,
              borderRadius: "8px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
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
                style={{ fontSize: 13, color: theme.turquoise, fontFamily: font, fontWeight: 300, textTransform: "lowercase", letterSpacing: "0.18em", marginTop: "3px" }}
              >
                lotus impact initiative
              </EditableText>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px 16px", minWidth: 0 }}>
              {DEV_BULLETS.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", minWidth: 0 }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: theme.turquoise, marginTop: "6px", flexShrink: 0 }} />
                  <EditableText
                    id={`lihtc:dev-bullet-${i}`}
                    as="div"
                    style={{ fontSize: "15px", color: muted(0.72), fontFamily: font, fontWeight: 300, textTransform: "lowercase", lineHeight: 1.5 }}
                  >
                    {b}
                  </EditableText>
                </div>
              ))}
            </div>
          </EditableEl>

        </div>
      </div>
    </div>
  );
}
