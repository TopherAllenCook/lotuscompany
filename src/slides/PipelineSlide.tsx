"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const stages = [
  { id: "sourced",      label: "sourced",              valueId: "pipeline:val-sourced",      sub: "deals reviewed" },
  { id: "underwriting", label: "in underwriting",       valueId: "pipeline:val-underwriting", sub: "active diligence" },
  { id: "awarded",      label: "awarded / bond path",   valueId: "pipeline:val-awarded",      sub: "approved for financing" },
  { id: "closed",       label: "closed",                valueId: "pipeline:val-closed",       sub: "capital deployed" },
];

export function PipelineSlide() {
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
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="pipeline:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_North Park_2026.03.10.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.45 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.35) 0%, rgba(5,10,12,0.15) 60%, rgba(5,10,12,0.05) 100%)" }} />
      </div>


      <div style={{ position: "relative", display: "flex", alignItems: "stretch", height: "100%", padding: "56px 64px 72px", gap: 40 }}>

        {/* Left: headline card */}
        <EditableEl id="pipeline:card" label="glass card" type="card" style={{
          flex: "0 0 42%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "36px 40px",
          background: "rgba(5,10,12,0.52)",
          backdropFilter: "blur(28px) saturate(200%)",
          WebkitBackdropFilter: "blur(28px) saturate(200%)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
        }}>
          <EditableText
            id="pipeline:eyebrow"
            as="div"
            style={{
              fontSize: "16px",
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "12px",
            }}
          >
            pipeline + readiness
          </EditableText>

          <EditableText
            id="pipeline:headline"
            as="h1"
            style={{
              fontSize: "38px",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "20px",
            }}
          >
            a live pipeline. not a concept.
          </EditableText>

          <div style={{ height: "1px", background: "rgba(77,186,214,0.18)", marginBottom: "28px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { id: "pipeline:bullet-1", text: "active projects across 5 states." },
              { id: "pipeline:bullet-2", text: "predevelopment capital needed in the next 12 months." },
              { id: "pipeline:bullet-3", text: "state-by-state appendix tied to live qap and bond calendars." },
              { id: "pipeline:bullet-4", text: "lotus investment committee gates every deal before member consent." },
            ].map(({ id, text }) => (
              <EditableText
                key={id}
                id={id}
                as="div"
                style={{
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.80)",
                  fontWeight: 400,
                  fontFamily: font,
                  lineHeight: 1.6,
                  textTransform: "lowercase",
                  paddingLeft: "16px",
                  borderLeft: `2px solid rgba(77,186,214,0.35)`,
                }}
              >
                {text}
              </EditableText>
            ))}
          </div>

          {/* Target states footer */}
          <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(77,186,214,0.14)", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <EditableText
              id="pipeline:target-states"
              as="span"
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.45)",
                fontFamily: font,
                textTransform: "lowercase",
                letterSpacing: "0.08em",
              }}
            >
              target states: —
            </EditableText>
          </div>
        </EditableEl>

        {/* Right: pipeline stages — individual dark-glass cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>

          {stages.map((stage, i) => {
            const isLast = i === stages.length - 1;
            return (
              <EditableEl
                key={stage.id}
                id={`pipeline:stage-card-${i}`}
                label={`stage — ${stage.label}`}
                type="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "18px 24px",
                  background: "rgba(5,10,12,0.50)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: isLast
                    ? `3px solid ${theme.turquoise}`
                    : "3px solid rgba(77,186,214,0.35)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                {/* Step badge */}
                <div style={{
                  fontSize: "14px",
                  color: isLast ? theme.turquoise : "rgba(77,186,214,0.5)",
                  fontFamily: font,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                  width: "16px",
                  textAlign: "center",
                }}>
                  {i + 1}
                </div>

                {/* Label + sub */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <EditableText
                    id={`pipeline:stage-label-${i}`}
                    as="div"
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontFamily: font,
                      textTransform: "lowercase",
                      fontWeight: 300,
                      letterSpacing: "0.01em",
                      lineHeight: 1.2,
                      marginBottom: "3px",
                    }}
                  >
                    {stage.label}
                  </EditableText>
                  <EditableText
                    id={`pipeline:stage-sub-${i}`}
                    as="div"
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.38)",
                      fontFamily: font,
                      textTransform: "lowercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {stage.sub}
                  </EditableText>
                </div>

                {/* Value */}
                <EditableText
                  id={stage.valueId}
                  as="div"
                  style={{
                    fontSize: "54px",
                    color: isLast ? theme.turquoise : "#fff",
                    fontFamily: font,
                    fontWeight: 200,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  —
                </EditableText>
              </EditableEl>
            );
          })}

          {/* Total row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            padding: "14px 24px 14px 43px",
            gap: "20px",
            borderTop: "1px solid rgba(77,186,214,0.18)",
            marginTop: "4px",
          }}>
            <EditableText
              id="pipeline:total-label"
              as="div"
              style={{
                flex: 1,
                fontSize: "14px",
                color: "rgba(255,255,255,0.35)",
                fontFamily: font,
                textTransform: "lowercase",
                letterSpacing: "0.2em",
              }}
            >
              total pipeline
            </EditableText>
            <EditableText
              id="pipeline:val-total"
              as="div"
              style={{
                fontSize: "54px",
                color: theme.turquoise,
                fontFamily: font,
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              —
            </EditableText>
          </div>

        </div>
      </div>

    </div>
  );
}
