"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import type { ProjectConfig } from "./projectData";

export function ProjectCommitmentSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart + 4).padStart(2, "0");

  const useOfFunds = [
    { category: "equity contribution — spe",       amount: "—",   pct: "—%" },
    { category: "development fee participation",    amount: "—",   pct: "—%" },
    { category: "deferred developer fee",          amount: "—",   pct: "—%" },
    { category: "gp reserves",                    amount: "—",   pct: "—%" },
    { category: "total commitment",               amount: project.capital, pct: "100%" },
  ];

  const drawMilestones = [
    { milestone: "closing / financial close",    date: "—",   pct: "25%" },
    { milestone: "construction commencement",    date: "—",   pct: "25%" },
    { milestone: "50% construction completion",  date: "—",   pct: "25%" },
    { milestone: "certificate of occupancy",     date: "—",   pct: "25%" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
        fontFamily: font,
      }}
    >
      <StatusChip status="DRAFT" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "56px 64px 72px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <EditableText
            id={`${k}-commitment:eyebrow`}
            as="div"
            style={{
              fontSize: 10,
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: 10,
            }}
          >
            commitment amount + draw schedule · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-commitment:headline`}
            as="h1"
            style={{
              fontSize: "clamp(20px, 2.2vw, 32px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
            }}
          >
            capital is drawn in stages against verified milestones.
          </EditableText>
        </div>

        <div style={{ height: 1, background: "rgba(77,186,214,0.18)", marginBottom: 20 }} />

        {/* Big commitment number */}
        <div
          style={{
            background: "rgba(77,186,214,0.06)",
            border: "1px solid rgba(77,186,214,0.18)",
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
              style={{
                fontSize: 9,
                color: theme.turquoise,
                letterSpacing: "0.28em",
                textTransform: "lowercase",
                fontFamily: font,
                marginBottom: 6,
              }}
            >
              total commitment
            </EditableText>
            <EditableText
              id={`${k}-commitment:amount-val`}
              as="div"
              style={{
                fontSize: "clamp(32px, 3.5vw, 52px)",
                color: "#fff",
                fontFamily: font,
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {project.capital}
            </EditableText>
          </div>

          <div style={{ height: 56, width: 1, background: "rgba(77,186,214,0.20)" }} />

          {[
            { label: "target irr",     value: project.irr       },
            { label: "equity multiple", value: project.multiple   },
            { label: "total returns",  value: project.totalReturns },
          ].map((s, i) => (
            <div key={i}>
              <EditableText
                id={`${k}-commitment:quick-lbl-${i}`}
                as="div"
                style={{ fontSize: 9, color: theme.turquoise, letterSpacing: "0.2em", textTransform: "lowercase", fontFamily: font, marginBottom: 4 }}
              >
                {s.label}
              </EditableText>
              <EditableText
                id={`${k}-commitment:quick-val-${i}`}
                as="div"
                style={{ fontSize: "clamp(16px, 1.6vw, 22px)", color: "#fff", fontFamily: font, fontWeight: 300 }}
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
              style={{
                fontSize: 9,
                color: theme.turquoise,
                letterSpacing: "0.24em",
                textTransform: "lowercase",
                fontFamily: font,
                marginBottom: 10,
              }}
            >
              use of funds
            </EditableText>
            <div style={{ border: "1px solid rgba(77,186,214,0.15)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 0.7fr", background: "rgba(77,186,214,0.10)", borderBottom: "1px solid rgba(77,186,214,0.18)" }}>
                {["category", "amount", "% of total"].map((h) => (
                  <div key={h} style={{ padding: "7px 12px", fontSize: 8, color: theme.turquoise, fontFamily: font, letterSpacing: "0.18em", textTransform: "lowercase" }}>{h}</div>
                ))}
              </div>
              {useOfFunds.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 0.7fr",
                    background: i === useOfFunds.length - 1 ? "rgba(77,186,214,0.08)" : i % 2 === 0 ? "transparent" : "rgba(77,186,214,0.03)",
                    borderTop: i === useOfFunds.length - 1 ? "1px solid rgba(77,186,214,0.18)" : undefined,
                  }}
                >
                  {[row.category, row.amount, row.pct].map((val, j) => (
                    <EditableText
                      key={j}
                      id={`${k}-commitment:use-r${i}-c${j}`}
                      as="div"
                      style={{
                        padding: "8px 12px",
                        fontSize: "clamp(10px, 1.0vw, 12px)",
                        color: i === useOfFunds.length - 1 ? "#fff" : "rgba(206,232,238,0.65)",
                        fontFamily: font,
                        textTransform: "lowercase",
                        borderBottom: i < useOfFunds.length - 1 ? "1px solid rgba(77,186,214,0.08)" : undefined,
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
              style={{
                fontSize: 9,
                color: theme.turquoise,
                letterSpacing: "0.24em",
                textTransform: "lowercase",
                fontFamily: font,
                marginBottom: 10,
              }}
            >
              draw schedule
            </EditableText>
            <div style={{ border: "1px solid rgba(77,186,214,0.15)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 0.6fr", background: "rgba(77,186,214,0.10)", borderBottom: "1px solid rgba(77,186,214,0.18)" }}>
                {["milestone", "target date", "% drawn"].map((h) => (
                  <div key={h} style={{ padding: "7px 12px", fontSize: 8, color: theme.turquoise, fontFamily: font, letterSpacing: "0.18em", textTransform: "lowercase" }}>{h}</div>
                ))}
              </div>
              {drawMilestones.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 0.6fr",
                    background: i % 2 === 0 ? "transparent" : "rgba(77,186,214,0.03)",
                    borderBottom: i < drawMilestones.length - 1 ? "1px solid rgba(77,186,214,0.08)" : undefined,
                  }}
                >
                  {[row.milestone, row.date, row.pct].map((val, j) => (
                    <EditableText
                      key={j}
                      id={`${k}-commitment:draw-r${i}-c${j}`}
                      as="div"
                      style={{
                        padding: "8px 12px",
                        fontSize: "clamp(10px, 1.0vw, 12px)",
                        color: "rgba(206,232,238,0.65)",
                        fontFamily: font,
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

      <SlideFooter
        slideKey={`${k}-commitment`}
        slideNum={slideNum}
        sectionLabel={project.sectionLabel}
      />
    </div>
  );
}
