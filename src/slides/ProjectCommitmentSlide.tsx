"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import type { ProjectConfig } from "./projectData";

const BG = "#F7F5F0";
const INK = "#050a0c";
const muted = (a: number) => `rgba(5,10,12,${a})`;
const teal = (a: number) => `rgba(77,186,214,${a})`;

export function ProjectCommitmentSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart + 4).padStart(2, "0");

  const useOfFunds = [
    { category: "equity contribution — spe",    amount: "—",            pct: "—%"  },
    { category: "development fee participation", amount: "—",            pct: "—%"  },
    { category: "deferred developer fee",       amount: "—",            pct: "—%"  },
    { category: "gp reserves",                 amount: "—",            pct: "—%"  },
    { category: "total commitment",             amount: project.capital, pct: "100%"},
  ];

  const drawMilestones = [
    { milestone: "closing / financial close",   date: project.deployDate,     pct: "25%" },
    { milestone: "construction commencement",   date: "—",                    pct: "25%" },
    { milestone: "50% construction completion", date: "—",                    pct: "25%" },
    { milestone: "certificate of occupancy",    date: project.completionDate, pct: "25%" },
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
            id={`${k}-commitment:eyebrow`}
            as="div"
            style={{ fontSize: 14, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 400, marginBottom: 10 }}
          >
            commitment amount + draw schedule · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-commitment:headline`}
            as="h1"
            style={{ fontSize: "40px", color: INK, fontWeight: 300, fontFamily: font, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "lowercase" }}
          >
            capital is drawn in stages against verified milestones.
          </EditableText>
        </div>

        <div style={{ height: 1, background: muted(0.10), marginBottom: 20 }} />

        {/* Big commitment number */}
        <div
          style={{
            background: teal(0.07),
            border: `1px solid ${muted(0.10)}`,
            borderRadius: 6,
            padding: "24px 32px",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div>
            <EditableText
              id={`${k}-commitment:amount-lbl`}
              as="div"
              style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, marginBottom: 6 }}
            >
              total commitment
            </EditableText>
            <EditableText
              id={`${k}-commitment:amount-val`}
              as="div"
              style={{ fontSize: "46px", color: INK, fontFamily: font, fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1 }}
            >
              {project.capital}
            </EditableText>
          </div>

          <div style={{ height: 56, width: 1, background: muted(0.12) }} />

          {[
            { label: "target irr",     value: project.irr          },
            { label: "equity multiple", value: project.multiple      },
            { label: "total returns",  value: project.totalReturns  },
          ].map((s, i) => (
            <div key={i}>
              <EditableText
                id={`${k}-commitment:quick-lbl-${i}`}
                as="div"
                style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.2em", textTransform: "lowercase", fontFamily: font, marginBottom: 4 }}
              >
                {s.label}
              </EditableText>
              <EditableText
                id={`${k}-commitment:quick-val-${i}`}
                as="div"
                style={{ fontSize: "34px", color: INK, fontFamily: font, fontWeight: 300 }}
              >
                {s.value}
              </EditableText>
            </div>
          ))}
        </div>

        {/* Two-column tables */}
        <div style={{ display: "flex", gap: 20, flex: 1, minHeight: 0 }}>

          {/* Use of funds */}
          <div style={{ flex: 1 }}>
            <EditableText
              id={`${k}-commitment:use-title`}
              as="div"
              style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 10 }}
            >
              use of funds
            </EditableText>
            <div style={{ border: `1px solid ${muted(0.10)}`, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 0.7fr", background: teal(0.10), borderBottom: `1px solid ${muted(0.10)}` }}>
                {["category", "amount", "% of total"].map((h) => (
                  <EditableText key={h} id={`${k}-commitment:use-header-${h.replace(/\s+/g, "-")}`} as="div" style={{ padding: "7px 12px", fontSize: 11, color: theme.turquoise, fontFamily: font, letterSpacing: "0.18em", textTransform: "lowercase" }}>{h}</EditableText>
                ))}
              </div>
              {useOfFunds.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 0.7fr",
                    background: i === useOfFunds.length - 1 ? teal(0.08) : i % 2 === 0 ? "transparent" : muted(0.025),
                    borderTop: i === useOfFunds.length - 1 ? `1px solid ${muted(0.10)}` : undefined,
                  }}
                >
                  {[row.category, row.amount, row.pct].map((val, j) => (
                    <EditableText
                      key={j}
                      id={`${k}-commitment:use-r${i}-c${j}`}
                      as="div"
                      style={{
                        padding: "8px 12px",
                        fontSize: "22px",
                        color: i === useOfFunds.length - 1 ? INK : muted(0.60),
                        fontFamily: font,
                        fontWeight: i === useOfFunds.length - 1 ? 400 : 300,
                        textTransform: "lowercase",
                        borderBottom: i < useOfFunds.length - 1 ? `1px solid ${muted(0.06)}` : undefined,
                      }}
                    >
                      {val}
                    </EditableText>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Draw schedule */}
          <div style={{ flex: 1 }}>
            <EditableText
              id={`${k}-commitment:draw-title`}
              as="div"
              style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 10 }}
            >
              draw schedule
            </EditableText>
            <div style={{ border: `1px solid ${muted(0.10)}`, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 0.6fr", background: teal(0.10), borderBottom: `1px solid ${muted(0.10)}` }}>
                {["milestone", "target date", "% drawn"].map((h) => (
                  <EditableText key={h} id={`${k}-commitment:draw-header-${h.replace(/\s+/g, "-")}`} as="div" style={{ padding: "7px 12px", fontSize: 11, color: theme.turquoise, fontFamily: font, letterSpacing: "0.18em", textTransform: "lowercase" }}>{h}</EditableText>
                ))}
              </div>
              {drawMilestones.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 0.6fr",
                    background: i % 2 === 0 ? "transparent" : muted(0.025),
                    borderBottom: i < drawMilestones.length - 1 ? `1px solid ${muted(0.06)}` : undefined,
                  }}
                >
                  {[row.milestone, row.date, row.pct].map((val, j) => (
                    <EditableText
                      key={j}
                      id={`${k}-commitment:draw-r${i}-c${j}`}
                      as="div"
                      style={{ padding: "8px 12px", fontSize: "22px", color: muted(0.60), fontFamily: font, fontWeight: 300, textTransform: "lowercase" }}
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
