"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip, PlaceholderTag } from "@/components/StatusChip";
import { EditableEl } from "@/components/EditableEl";

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
        <img
          src="/steelton-village/Steelton I_North Park_2026.03.10.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="PLACEHOLDER" />

      <div style={{ position: "relative", display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <EditableEl id="pipeline:card" label="glass card" type="card" style={{
          flex: "0 0 50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "36px 40px 36px 36px",
          background: "rgba(5,10,12,0.52)",
          backdropFilter: "blur(28px) saturate(200%)",
          WebkitBackdropFilter: "blur(28px) saturate(200%)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
        }}>
          <EditableText
            id="pipeline:eyebrow"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              letterSpacing: "0.2em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "16px",
            }}
          >
            pipeline + readiness
          </EditableText>

          <EditableText
            id="pipeline:headline"
            as="h1"
            style={{
              fontSize: "clamp(26px, 2.8vw, 42px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "24px",
            }}
          >
            a live pipeline. not a concept.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <EditableText
              id="pipeline:bullet-1"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
                display: "flex",
                alignItems: "center",
              }}
            >
              — active projects.
              <PlaceholderTag />
            </EditableText>

            <EditableText
              id="pipeline:bullet-2"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
                display: "flex",
                alignItems: "center",
              }}
            >
              — target states and metros.
              <PlaceholderTag />
            </EditableText>

            <EditableText
              id="pipeline:bullet-3"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
                display: "flex",
                alignItems: "center",
              }}
            >
              — predevelopment capital needed in the next 12 months.
              <PlaceholderTag />
            </EditableText>

            <EditableText
              id="pipeline:bullet-4"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              state-by-state appendix tied to live qap and bond calendars.
            </EditableText>

            <EditableText
              id="pipeline:bullet-5"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              lotus investment committee gates every deal before member consent.
            </EditableText>
          </div>
        </EditableEl>

        {/* Right Pipeline Funnel */}
        <div style={{ flex: "0 0 50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <svg width={320} height={340} viewBox="0 0 320 340" style={{ overflow: "visible" }}>
              {/* Stage 1: Sourced */}
              <path
                d="M 40 20 L 280 20 L 240 100 L 80 100 Z"
                fill="rgba(77,186,214,0.08)"
                stroke="rgba(77,186,214,0.3)"
                strokeWidth={1}
              />
              <text
                x={160}
                y={40}
                textAnchor="middle"
                style={{
                  fontSize: "12px",
                  fill: theme.lightBlue,
                  fontFamily: font,
                }}
              >
                sourced
              </text>
              <text
                x={160}
                y={85}
                textAnchor="middle"
                style={{
                  fontSize: "20px",
                  fill: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —
              </text>

              {/* Stage 2: In Underwriting */}
              <path
                d="M 80 100 L 240 100 L 200 180 L 120 180 Z"
                fill="rgba(77,186,214,0.12)"
                stroke="rgba(77,186,214,0.3)"
                strokeWidth={1}
              />
              <text
                x={160}
                y={120}
                textAnchor="middle"
                style={{
                  fontSize: "12px",
                  fill: theme.lightBlue,
                  fontFamily: font,
                }}
              >
                in underwriting
              </text>
              <text
                x={160}
                y={165}
                textAnchor="middle"
                style={{
                  fontSize: "20px",
                  fill: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —
              </text>

              {/* Stage 3: Awarded / Bond Path */}
              <path
                d="M 120 180 L 200 180 L 160 260 L 160 260 Z"
                fill="rgba(77,186,214,0.16)"
                stroke="rgba(77,186,214,0.3)"
                strokeWidth={1}
              />
              <text
                x={160}
                y={205}
                textAnchor="middle"
                style={{
                  fontSize: "12px",
                  fill: theme.lightBlue,
                  fontFamily: font,
                }}
              >
                awarded / bond path
              </text>
              <text
                x={160}
                y={240}
                textAnchor="middle"
                style={{
                  fontSize: "20px",
                  fill: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —
              </text>

              {/* Stage 4: Closed */}
              <path
                d="M 160 260 L 160 260 L 140 320 L 180 320 Z"
                fill="rgba(77,186,214,0.22)"
                stroke="rgba(77,186,214,0.3)"
                strokeWidth={1}
              />
              <text
                x={160}
                y={275}
                textAnchor="middle"
                style={{
                  fontSize: "12px",
                  fill: theme.lightBlue,
                  fontFamily: font,
                }}
              >
                closed
              </text>
              <text
                x={160}
                y={305}
                textAnchor="middle"
                style={{
                  fontSize: "20px",
                  fill: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —
              </text>
            </svg>

            {/* Placeholder tags next to each value */}
            <div style={{ marginTop: "-320px", display: "flex", flexDirection: "column", gap: "58px", alignItems: "center" }}>
              <PlaceholderTag />
              <PlaceholderTag />
              <PlaceholderTag />
              <PlaceholderTag />
            </div>

            {/* Target States Label */}
            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <EditableText
                id="pipeline:target-states"
                as="span"
                style={{
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: font,
                  textTransform: "lowercase",
                }}
              >
                target states: —
              </EditableText>
              <PlaceholderTag />
            </div>
          </div>
        </div>
      </div>

      <SlideFooter slideKey="pipeline" slideNum="14" sectionLabel="execution" />
    </div>
  );
}
