"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

const STEPS = [
  {
    num: "1",
    title: "federal and state housing agencies",
    desc: "allocate tax credits",
  },
  {
    num: "2",
    title: "lihtc allocation",
    desc: "competitive awards",
  },
  {
    num: "3",
    title: "institutional investors",
    desc: "provide equity for credits",
  },
  {
    num: "4",
    title: "affordable housing development",
    desc: "rent restricted housing",
  },
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
        padding: "52px 72px 72px",
      }}
    >
      <StatusChip status="READY" />

      {/* Eyebrow */}
      <EditableText
        id="lihtc:eyebrow"
        as="div"
        style={{
          fontSize: "10px",
          color: theme.turquoise,
          letterSpacing: "0.28em",
          textTransform: "lowercase",
          fontFamily: font,
          fontWeight: 300,
          marginBottom: "10px",
        }}
      >
        policy
      </EditableText>

      {/* Headline */}
      <EditableText
        id="lihtc:headline"
        as="h1"
        style={{
          fontSize: "clamp(32px, 4vw, 58px)",
          color: theme.turquoise,
          fontWeight: 700,
          fontFamily: font,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          textTransform: "lowercase",
          margin: "0 0 8px",
        }}
      >
        what is lihtc
      </EditableText>

      {/* Subtitle */}
      <EditableText
        id="lihtc:subtitle"
        as="div"
        style={{
          fontSize: "16px",
          color: "rgba(255,255,255,0.65)",
          fontFamily: font,
          fontStyle: "italic",
          fontWeight: 300,
          letterSpacing: "0.01em",
          textTransform: "lowercase",
          marginBottom: "32px",
        }}
      >
        how affordable housing is financed in the united states
      </EditableText>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(77,186,214,0.2)", marginBottom: "36px" }} />

      {/* 4-step flow */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          flex: 1,
          alignItems: "start",
        }}
      >
        {STEPS.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
            {/* Step content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingRight: i < 3 ? "16px" : 0 }}>
              {/* Numbered circle */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: `2px solid ${theme.turquoise}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  background: "rgba(77,186,214,0.08)",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "22px", color: theme.turquoise, fontFamily: font, fontWeight: 300 }}>
                  {step.num}
                </span>
              </div>

              <EditableText
                id={`lihtc:step-${i}-title`}
                as="div"
                style={{
                  fontSize: "15px",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 600,
                  textTransform: "lowercase",
                  lineHeight: 1.35,
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </EditableText>

              <EditableText
                id={`lihtc:step-${i}-desc`}
                as="div"
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: font,
                  fontWeight: 300,
                  textTransform: "lowercase",
                  lineHeight: 1.5,
                }}
              >
                {step.desc}
              </EditableText>
            </div>

            {/* Arrow between steps */}
            {i < 3 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "14px",
                  flexShrink: 0,
                }}
              >
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <line x1="0" y1="8" x2="24" y2="8" stroke={theme.turquoise} strokeWidth="1.5" />
                  <polygon points="24,4 32,8 24,12" fill={theme.turquoise} />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lotus Company bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 28px",
          background: "rgba(77,186,214,0.10)",
          border: `1px solid ${theme.turquoise}`,
          borderRadius: "6px",
          marginBottom: "18px",
        }}
      >
        <div>
          <EditableText
            id="lihtc:company-label"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              fontFamily: font,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "lowercase",
              marginBottom: "4px",
            }}
          >
            developer and operator
          </EditableText>
          <EditableText
            id="lihtc:company-name"
            as="div"
            style={{
              fontSize: "22px",
              color: "#fff",
              fontFamily: font,
              fontWeight: 300,
              textTransform: "lowercase",
              letterSpacing: "-0.01em",
            }}
          >
            lotus company
          </EditableText>
        </div>

        <div style={{ textAlign: "right" }}>
          <EditableText
            id="lihtc:role-label"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              fontFamily: font,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "lowercase",
              marginBottom: "4px",
            }}
          >
            role
          </EditableText>
          <EditableText
            id="lihtc:role-value"
            as="div"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.85)",
              fontFamily: font,
              fontStyle: "italic",
              fontWeight: 300,
              textTransform: "lowercase",
            }}
          >
            sources, structures, executes, owns
          </EditableText>
        </div>
      </div>

      {/* Closing line */}
      <div style={{ textAlign: "center" }}>
        <EditableText
          id="lihtc:closing"
          as="div"
          style={{
            fontSize: "13px",
            color: theme.turquoise,
            fontFamily: font,
            fontStyle: "italic",
            fontWeight: 300,
            textTransform: "lowercase",
            letterSpacing: "0.02em",
          }}
        >
          lihtc converts government tax credits into private equity for affordable housing
        </EditableText>
      </div>

      <SlideFooter slideKey="lihtc" slideNum="06" sectionLabel="mechanism" />
    </div>
  );
}
