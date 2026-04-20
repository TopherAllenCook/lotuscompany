"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableBgImage } from "@/components/EditableBgImage";
import type { ProjectConfig } from "./projectData";

export function ProjectCoverSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;

  const stats = [
    { label: "units",      value: String(project.units), id: `${k}-cover:stat-val-0`, labelId: `${k}-cover:stat-lbl-0` },
    { label: "target irr", value: project.irr,            id: `${k}-cover:stat-val-1`, labelId: `${k}-cover:stat-lbl-1` },
    { label: "multiple",   value: project.multiple,       id: `${k}-cover:stat-val-2`, labelId: `${k}-cover:stat-lbl-2` },
    { label: "commitment", value: project.capital,        id: `${k}-cover:stat-val-3`, labelId: `${k}-cover:stat-lbl-3` },
  ];

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
      {/* Full-bleed hero */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <EditableBgImage
          id={`${k}-cover:hero`}
          label="hero photo"
          src={project.images.hero}
          style={{ width: "100%", height: "100%", opacity: 1 }}
        />
        {/* Bottom-up scrim for text legibility */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(5,10,12,0.96) 0%, rgba(5,10,12,0.72) 38%, rgba(5,10,12,0.28) 65%, rgba(5,10,12,0.06) 100%)",
        }} />
        {/* Left-side scrim for content panel */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(5,10,12,0.68) 0%, rgba(5,10,12,0.28) 50%, rgba(5,10,12,0.0) 75%)",
        }} />
      </div>


      {/* Bottom content block */}
      <div style={{
        position: "absolute",
        bottom: "22%",
        left: 64,
        right: "36%",
        zIndex: 5,
      }}>
        {/* Eyebrow with accent mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 28, height: 2, background: theme.turquoise, borderRadius: 1, flexShrink: 0 }} />
          <EditableText
            id={`${k}-cover:eyebrow`}
            as="div"
            style={{
              fontSize: 15,
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 400,
            }}
          >
            {project.phase} · lihtc, development opportunity
          </EditableText>
        </div>

        {/* Headline */}
        <EditableText
          id={`${k}-cover:headline`}
          as="h1"
          style={{
            fontSize: "64px",
            color: "#fff",
            fontWeight: 300,
            fontFamily: font,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            textTransform: "lowercase",
            marginBottom: 0,
          }}
        >
          {project.name}
        </EditableText>

        {/* Divider */}
        <div style={{
          height: 1,
          background: "linear-gradient(to right, rgba(77,186,214,0.40) 0%, rgba(77,186,214,0.08) 60%, transparent 100%)",
          margin: "24px 0",
        }} />

        {/* Stat row */}
        <div style={{ display: "flex", gap: 0 }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                paddingLeft: i === 0 ? 0 : 24,
                paddingRight: 24,
                borderLeft: i === 0
                  ? "none"
                  : "1px solid rgba(77,186,214,0.20)",
              }}
            >
              <EditableText
                id={stat.id}
                as="div"
                style={{
                  fontSize: "42px",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </EditableText>
              <EditableText
                id={stat.labelId}
                as="div"
                style={{
                  fontSize: 15,
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "lowercase",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </EditableText>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
