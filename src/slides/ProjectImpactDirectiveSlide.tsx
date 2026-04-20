"use client";

import type { ReactNode } from "react";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import type { ProjectConfig } from "./projectData";

const BG = "#F7F5F0";
const INK = "#050a0c";
const muted = (a: number) => `rgba(5,10,12,${a})`;
const teal = (a: number) => `rgba(77,186,214,${a})`;

const cell = (content: ReactNode, accent = false, right = false) => (
  <div
    style={{
      padding: "7px 12px",
      borderBottom: `1px solid ${muted(0.07)}`,
      display: "flex",
      alignItems: "center",
      justifyContent: right ? "flex-end" : "flex-start",
      color: accent ? INK : muted(0.55),
      fontSize: "24px",
      fontFamily: font,
      fontWeight: 300,
      textTransform: "lowercase",
    }}
  >
    {content}
  </div>
);

export function ProjectImpactDirectiveSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart + 2).padStart(2, "0");

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
            id={`${k}-impact:eyebrow`}
            as="div"
            style={{
              fontSize: 14,
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            impact directive · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-impact:headline`}
            as="h1"
            style={{
              fontSize: "40px",
              color: INK,
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
            }}
          >
            impact is defined before capital is deployed.
          </EditableText>
        </div>

        <div style={{ height: 1, background: muted(0.10), marginBottom: 20 }} />

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: 20, flex: 1, minHeight: 0 }}>

          {/* Left — unit mix table */}
          <div style={{ flex: "0 0 46%", display: "flex", flexDirection: "column", gap: 12 }}>
            <EditableText
              id={`${k}-impact:unit-mix-title`}
              as="div"
              style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 4 }}
            >
              unit mix by ami tier
            </EditableText>

            <div style={{ border: `1px solid ${muted(0.10)}`, borderRadius: 4, overflow: "hidden" }}>
              {/* Header row */}
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 1.2fr", background: teal(0.10), borderBottom: `1px solid ${muted(0.10)}` }}>
                {["ami tier", "units", "unit types"].map((h) => (
                  <div key={h} style={{ padding: "7px 12px", fontSize: 11, color: theme.turquoise, fontFamily: font, letterSpacing: "0.2em", textTransform: "lowercase" }}>
                    {h}
                  </div>
                ))}
              </div>

              {project.unitMix.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 1.2fr", background: i % 2 === 0 ? "transparent" : muted(0.025) }}>
                  {cell(row.ami)}
                  {cell(String(row.units), true, true)}
                  {cell(row.type)}
                </div>
              ))}

              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 1.2fr", background: teal(0.08), borderTop: `1px solid ${muted(0.10)}` }}>
                {cell("total", true)}
                {cell(String(project.units), true, true)}
                {cell("all unit types")}
              </div>
            </div>

            {/* Resident profile */}
            <div style={{ marginTop: 8 }}>
              <EditableText
                id={`${k}-impact:resident-title`}
                as="div"
                style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 10 }}
              >
                resident profile
              </EditableText>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  { label: "estimated residents", value: String(Math.round(project.units * 2.5).toLocaleString()) },
                  { label: "avg household size",  value: "2.5" },
                  { label: "ami range served",    value: "30–80%" },
                  { label: "affordability period",value: "15+ years" },
                ].map((item, i) => (
                  <div key={i} style={{ background: teal(0.06), border: `1px solid ${muted(0.08)}`, borderRadius: 3, padding: "10px 12px" }}>
                    <EditableText
                      id={`${k}-impact:profile-val-${i}`}
                      as="div"
                      style={{ fontSize: "34px", color: INK, fontFamily: font, fontWeight: 300, lineHeight: 1, marginBottom: 4 }}
                    >
                      {item.value}
                    </EditableText>
                    <EditableText
                      id={`${k}-impact:profile-lbl-${i}`}
                      as="div"
                      style={{ fontSize: 11, color: theme.turquoise, fontFamily: font, letterSpacing: "0.18em", textTransform: "lowercase" }}
                    >
                      {item.label}
                    </EditableText>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — impact metrics + 10-yr summary */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <EditableText
              id={`${k}-impact:metrics-title`}
              as="div"
              style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font }}
            >
              impact directive — goals + metrics
            </EditableText>

            {[
              { pillar: "shelter and dignity",   metric: "stabilized occupancy", target: "97%",  baseline: "market benchmark" },
              { pillar: "knowledge and power",   metric: "service utilization",  target: "60%+", baseline: "residents engaged" },
              { pillar: "wholeness",             metric: "health referrals",     target: "—",    baseline: "annual measure" },
              { pillar: "place and beauty",      metric: "resident satisfaction",target: "85%+", baseline: "annual survey" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1.2fr 0.8fr 1fr",
                  background: i % 2 === 0 ? muted(0.03) : "transparent",
                  border: `1px solid ${muted(0.08)}`,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "10px 12px", borderRight: `1px solid ${muted(0.08)}` }}>
                  <EditableText
                    id={`${k}-impact:row-pillar-${i}`}
                    as="div"
                    style={{ fontSize: 11, color: theme.turquoise, letterSpacing: "0.16em", textTransform: "lowercase", fontFamily: font }}
                  >
                    {row.pillar}
                  </EditableText>
                </div>
                <div style={{ padding: "10px 12px", borderRight: `1px solid ${muted(0.08)}`, display: "flex", alignItems: "center" }}>
                  <EditableText
                    id={`${k}-impact:row-metric-${i}`}
                    as="div"
                    style={{ fontSize: 15, color: muted(0.65), fontFamily: font, textTransform: "lowercase" }}
                  >
                    {row.metric}
                  </EditableText>
                </div>
                <div style={{ padding: "10px 12px", borderRight: `1px solid ${muted(0.08)}`, display: "flex", alignItems: "center" }}>
                  <EditableText
                    id={`${k}-impact:row-target-${i}`}
                    as="div"
                    style={{ fontSize: "34px", color: INK, fontFamily: font, fontWeight: 300 }}
                  >
                    {row.target}
                  </EditableText>
                </div>
                <div style={{ padding: "10px 12px", display: "flex", alignItems: "center" }}>
                  <EditableText
                    id={`${k}-impact:row-baseline-${i}`}
                    as="div"
                    style={{ fontSize: 14, color: muted(0.40), fontFamily: font, textTransform: "lowercase" }}
                  >
                    {row.baseline}
                  </EditableText>
                </div>
              </div>
            ))}

            {/* 10-yr summary */}
            <div style={{ marginTop: 8 }}>
              <EditableText
                id={`${k}-impact:tenyear-title`}
                as="div"
                style={{ fontSize: 12, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 10 }}
              >
                10-year impact projection
              </EditableText>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {[
                  { value: String(Math.round(project.units * 2.5 * 10).toLocaleString()), label: "resident-years of housing" },
                  { value: "—", label: "service contacts projected" },
                  { value: "—", label: "workforce program enrollments" },
                ].map((stat, i) => (
                  <div key={i} style={{ background: teal(0.06), border: `1px solid ${muted(0.08)}`, borderRadius: 3, padding: "12px 14px" }}>
                    <EditableText
                      id={`${k}-impact:tenyear-val-${i}`}
                      as="div"
                      style={{ fontSize: "40px", color: INK, fontFamily: font, fontWeight: 300, lineHeight: 1, marginBottom: 5 }}
                    >
                      {stat.value}
                    </EditableText>
                    <EditableText
                      id={`${k}-impact:tenyear-lbl-${i}`}
                      as="div"
                      style={{ fontSize: 11, color: muted(0.45), fontFamily: font, lineHeight: 1.4, textTransform: "lowercase" }}
                    >
                      {stat.label}
                    </EditableText>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
