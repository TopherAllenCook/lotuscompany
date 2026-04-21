"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";


import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const ROWS = [
  {
    id: "1",
    risk: "award and timing risk",
    mitigant: "qap-tied readiness, diversified application cohorts, reserves",
  },
  {
    id: "2",
    risk: "construction-cost and capital-stack risk",
    mitigant: "underwritten contingencies, staged advances, fixed-price contracts where available",
  },
  {
    id: "3",
    risk: "counterparty and sponsor-execution risk",
    mitigant: "lotus ic gates, vetted sponsor bench, milestone controls",
  },
  {
    id: "4",
    risk: "regulatory and compliance risk",
    mitigant: "compliance monitoring, section 42 covenants, third-party reports",
  },
  {
    id: "5",
    risk: "portfolio concentration risk",
    mitigant: "concentration limits inside investment directive",
  },
];

export function RiskControlsSlide() {
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
      {/* Background photo — full bleed */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <EditableBgImage
          id="risk-controls:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.30 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.65) 0%, rgba(5,10,12,0.50) 60%, rgba(5,10,12,0.40) 100%)" }} />
      </div>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", padding: "56px 64px 72px" }}>
        <EditableEl
          id="risk-controls:card"
          label="glass card"
          type="card"
          className="anim-fade-in-up"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            background: "rgba(5,10,12,0.58)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
            overflow: "hidden",
          }}
        >
          {/* Headline header */}
          <div style={{ padding: "32px 40px 28px" }}>
            <EditableText
              id="risk-controls:eyebrow"
              as="div"
              style={{
                fontSize: "16px",
                color: theme.turquoise,
                letterSpacing: "0.28em",
                textTransform: "lowercase",
                fontFamily: font,
                fontWeight: 400,
                marginBottom: "10px",
              }}
            >
              risk controls
            </EditableText>

            <EditableText
              id="risk-controls:headline"
              as="h1"
              style={{
                fontSize: "34px",
                color: "#fff",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                textTransform: "lowercase",
                margin: 0,
              }}
            >
              mission does not remove risk. we price it in.
            </EditableText>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(77,186,214,0.20)", marginLeft: "40px", marginRight: "40px" }} />

          {/* Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              flex: 1,
            }}
          >
            <thead>
              <tr style={{ background: "rgba(77,186,214,0.10)" }}>
                <th
                  style={{
                    fontSize: "13px",
                    color: theme.turquoise,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    fontFamily: font,
                    fontWeight: 500,
                    textAlign: "left",
                    padding: "14px 40px",
                    width: "38%",
                    borderBottom: "1px solid rgba(77,186,214,0.15)",
                  }}
                >
                  risk
                </th>
                <th
                  style={{
                    fontSize: "13px",
                    color: theme.turquoise,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    fontFamily: font,
                    fontWeight: 500,
                    textAlign: "left",
                    padding: "14px 40px 14px 24px",
                    borderBottom: "1px solid rgba(77,186,214,0.15)",
                  }}
                >
                  mitigant
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.id}
                  style={{
                    background: i % 2 === 1 ? "rgba(255,255,255,0.025)" : "transparent",
                    borderBottom: i < ROWS.length - 1 ? "1px solid rgba(77,186,214,0.10)" : "none",
                  }}
                >
                  <td style={{ padding: "18px 40px", verticalAlign: "top", width: "38%" }}>
                    <EditableText
                      id={`risk-controls:risk-${row.id}`}
                      as="span"
                      style={{
                        fontSize: "16px",
                        color: "rgba(255,255,255,0.95)",
                        fontFamily: font,
                        fontWeight: 400,
                        lineHeight: 1.45,
                        textTransform: "lowercase",
                      }}
                    >
                      {row.risk}
                    </EditableText>
                  </td>
                  <td style={{ padding: "18px 40px 18px 24px", verticalAlign: "top" }}>
                    <EditableText
                      id={`risk-controls:mitigant-${row.id}`}
                      as="span"
                      style={{
                        fontSize: "16px",
                        color: theme.lightBlue,
                        fontFamily: font,
                        fontWeight: 400,
                        lineHeight: 1.55,
                        textTransform: "lowercase",
                      }}
                    >
                      {row.mitigant}
                    </EditableText>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </EditableEl>
      </div>
    </div>
  );
}
