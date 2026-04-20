"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import type { ProjectConfig } from "./projectData";

const BG = "#F7F5F0";
const INK = "#050a0c";
const muted = (a: number) => `rgba(5,10,12,${a})`;
const teal = (a: number) => `rgba(77,186,214,${a})`;

export function ProjectInvestmentDirectiveSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart + 3).padStart(2, "0");

  const targets = [
    { label: "target irr",         value: project.irr          },
    { label: "equity multiple",    value: project.multiple      },
    { label: "capital commitment", value: project.capital       },
    { label: "total returns",      value: project.totalReturns  },
    { label: "cash fee",           value: project.cashFee       },
    { label: "spe ownership",      value: project.speOwnership  },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: BG,
        fontFamily: font,
      }}
    >

      <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "56px 64px 72px" }}>
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <EditableText
            id={`${k}-investment:eyebrow`}
            as="div"
            style={{ fontSize: 14, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 400, marginBottom: 10 }}
          >
            investment directive · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-investment:headline`}
            as="h1"
            style={{ fontSize: "40px", color: INK, fontWeight: 300, fontFamily: font, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "lowercase" }}
          >
            investment returns structured at the partnership level.
          </EditableText>
        </div>

        <div style={{ height: 1, background: muted(0.10), marginBottom: 20 }} />

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: 24, flex: 1, minHeight: 0 }}>

          {/* Left — target stats */}
          <div style={{ flex: "0 0 44%", display: "flex", flexDirection: "column", gap: 10 }}>
            <EditableText
              id={`${k}-investment:targets-title`}
              as="div"
              style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 4 }}
            >
              investment targets
            </EditableText>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {targets.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 14px",
                    background: teal(0.06),
                    border: `1px solid ${muted(0.08)}`,
                    borderRadius: 3,
                  }}
                >
                  <EditableText
                    id={`${k}-investment:target-lbl-${i}`}
                    as="div"
                    style={{ fontSize: 14, color: muted(0.55), fontFamily: font, textTransform: "lowercase", letterSpacing: "0.06em" }}
                  >
                    {t.label}
                  </EditableText>
                  <EditableText
                    id={`${k}-investment:target-val-${i}`}
                    as="div"
                    style={{ fontSize: "34px", color: INK, fontFamily: font, fontWeight: 300, letterSpacing: "-0.01em" }}
                  >
                    {t.value}
                  </EditableText>
                </div>
              ))}
            </div>
          </div>

          {/* Right — description + cash flow table */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <EditableText
              id={`${k}-investment:desc`}
              as="div"
              style={{ fontSize: "22px", color: muted(0.65), fontFamily: font, fontWeight: 300, lineHeight: 1.7, textTransform: "lowercase" }}
            >
              the investment directive locks the impact partner's participation percentages at the time of deal approval. returns are driven by capital turn timing, fee sharing, gp economics, and residual value — not a single event.
            </EditableText>

            <div style={{ height: 1, background: muted(0.08) }} />

            <EditableText
              id={`${k}-investment:cash-flow-title`}
              as="div"
              style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font }}
            >
              projected cash flow events
            </EditableText>

            <div style={{ border: `1px solid ${muted(0.10)}`, borderRadius: 4, overflow: "hidden" }}>
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr", background: teal(0.10), borderBottom: `1px solid ${muted(0.10)}` }}>
                {["year", "event", "projected amount"].map((h) => (
                  <EditableText key={h} id={`${k}-investment:cashflow-header-${h.replace(/\s+/g, "-")}`} as="div" style={{ padding: "7px 12px", fontSize: 11, color: theme.turquoise, fontFamily: font, letterSpacing: "0.2em", textTransform: "lowercase" }}>
                    {h}
                  </EditableText>
                ))}
              </div>

              {[
                { year: "1",     event: "capital deployment",      amount: project.capital      },
                { year: "1–3",   event: "construction / lease-up", amount: "—"                  },
                { year: "2–4",   event: "cash fee receipt",        amount: project.cashFee      },
                { year: "5–10",  event: "tax credit period",       amount: "ongoing"            },
                { year: "10–18", event: "recap / resyndication",   amount: "—"                  },
                { year: "15–18", event: "total return projection", amount: project.totalReturns },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.5fr 1fr",
                    background: i % 2 === 0 ? "transparent" : muted(0.025),
                    borderBottom: i < 5 ? `1px solid ${muted(0.06)}` : "none",
                  }}
                >
                  {[row.year, row.event, row.amount].map((val, j) => (
                    <EditableText
                      key={j}
                      id={`${k}-investment:cf-row-${i}-col-${j}`}
                      as="div"
                      style={{
                        padding: "8px 12px",
                        fontSize: "22px",
                        color: j === 2 ? INK : muted(0.55),
                        fontFamily: font,
                        fontWeight: j === 2 ? 400 : 300,
                        textTransform: "lowercase",
                      }}
                    >
                      {val}
                    </EditableText>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
