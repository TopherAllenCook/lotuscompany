"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

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
      {/* Background photo — muted building */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <img
          src="/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            opacity: 0.20,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,10,12,0.45) 0%, rgba(5,10,12,0.20) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "80px 64px 72px 64px" }}>
        {/* Headline Section */}
        <div className="anim-fade-in-up" style={{ marginBottom: "40px" }}>
          <EditableText
            id="risk-controls:eyebrow"
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
            risk controls
          </EditableText>

          <EditableText
            id="risk-controls:headline"
            as="h1"
            style={{
              fontSize: "clamp(26px, 2.8vw, 42px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "0",
            }}
          >
            mission does not remove risk. we price it in.
          </EditableText>
        </div>

        {/* Risk Matrix Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            flex: 1,
          }}
        >
          <thead>
            <tr style={{ background: "rgba(77,186,214,0.15)" }}>
              <th
                style={{
                  fontSize: "11px",
                  color: theme.turquoise,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontFamily: font,
                  fontWeight: 400,
                  textAlign: "left",
                  padding: "12px 20px",
                  width: "35%",
                  borderBottom: "1px solid rgba(77,186,214,0.1)",
                }}
              >
                <EditableText
                  id="risk-controls:header-risk"
                  as="span"
                  style={{
                    fontSize: "11px",
                    color: theme.turquoise,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontFamily: font,
                    fontWeight: 400,
                  }}
                >
                  risk
                </EditableText>
              </th>
              <th
                style={{
                  fontSize: "11px",
                  color: theme.turquoise,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontFamily: font,
                  fontWeight: 400,
                  textAlign: "left",
                  padding: "12px 20px",
                  borderBottom: "1px solid rgba(77,186,214,0.1)",
                }}
              >
                <EditableText
                  id="risk-controls:header-mitigant"
                  as="span"
                  style={{
                    fontSize: "11px",
                    color: theme.turquoise,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontFamily: font,
                    fontWeight: 400,
                  }}
                >
                  mitigant
                </EditableText>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr style={{ background: "transparent", borderBottom: "1px solid rgba(77,186,214,0.1)" }}>
              <td
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: font,
                  fontWeight: 400,
                  padding: "12px 20px",
                  width: "35%",
                }}
              >
                <EditableText
                  id="risk-controls:risk-1"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: font,
                    fontWeight: 400,
                  }}
                >
                  award and timing risk
                </EditableText>
              </td>
              <td
                style={{
                  fontSize: "13px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  padding: "12px 20px",
                }}
              >
                <EditableText
                  id="risk-controls:mitigant-1"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: theme.lightBlue,
                    fontFamily: font,
                    fontWeight: 300,
                  }}
                >
                  qap-tied readiness, diversified application cohorts, reserves
                </EditableText>
              </td>
            </tr>

            {/* Row 2 */}
            <tr style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(77,186,214,0.1)" }}>
              <td
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: font,
                  fontWeight: 400,
                  padding: "12px 20px",
                  width: "35%",
                }}
              >
                <EditableText
                  id="risk-controls:risk-2"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: font,
                    fontWeight: 400,
                  }}
                >
                  construction-cost and capital-stack risk
                </EditableText>
              </td>
              <td
                style={{
                  fontSize: "13px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  padding: "12px 20px",
                }}
              >
                <EditableText
                  id="risk-controls:mitigant-2"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: theme.lightBlue,
                    fontFamily: font,
                    fontWeight: 300,
                  }}
                >
                  underwritten contingencies, staged advances, fixed-price contracts where available
                </EditableText>
              </td>
            </tr>

            {/* Row 3 */}
            <tr style={{ background: "transparent", borderBottom: "1px solid rgba(77,186,214,0.1)" }}>
              <td
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: font,
                  fontWeight: 400,
                  padding: "12px 20px",
                  width: "35%",
                }}
              >
                <EditableText
                  id="risk-controls:risk-3"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: font,
                    fontWeight: 400,
                  }}
                >
                  counterparty and sponsor-execution risk
                </EditableText>
              </td>
              <td
                style={{
                  fontSize: "13px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  padding: "12px 20px",
                }}
              >
                <EditableText
                  id="risk-controls:mitigant-3"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: theme.lightBlue,
                    fontFamily: font,
                    fontWeight: 300,
                  }}
                >
                  lotus ic gates, vetted sponsor bench, milestone controls
                </EditableText>
              </td>
            </tr>

            {/* Row 4 */}
            <tr style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(77,186,214,0.1)" }}>
              <td
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: font,
                  fontWeight: 400,
                  padding: "12px 20px",
                  width: "35%",
                }}
              >
                <EditableText
                  id="risk-controls:risk-4"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: font,
                    fontWeight: 400,
                  }}
                >
                  regulatory and compliance risk
                </EditableText>
              </td>
              <td
                style={{
                  fontSize: "13px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  padding: "12px 20px",
                }}
              >
                <EditableText
                  id="risk-controls:mitigant-4"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: theme.lightBlue,
                    fontFamily: font,
                    fontWeight: 300,
                  }}
                >
                  compliance monitoring, section 42 covenants, third-party reports
                </EditableText>
              </td>
            </tr>

            {/* Row 5 */}
            <tr style={{ background: "transparent", borderBottom: "1px solid rgba(77,186,214,0.1)" }}>
              <td
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: font,
                  fontWeight: 400,
                  padding: "12px 20px",
                  width: "35%",
                }}
              >
                <EditableText
                  id="risk-controls:risk-5"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: font,
                    fontWeight: 400,
                  }}
                >
                  portfolio concentration risk
                </EditableText>
              </td>
              <td
                style={{
                  fontSize: "13px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  padding: "12px 20px",
                }}
              >
                <EditableText
                  id="risk-controls:mitigant-5"
                  as="span"
                  style={{
                    fontSize: "13px",
                    color: theme.lightBlue,
                    fontFamily: font,
                    fontWeight: 300,
                  }}
                >
                  concentration limits inside investment directive
                </EditableText>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <SlideFooter slideKey="risk-controls" slideNum="12" sectionLabel="risk" />
    </div>
  );
}
