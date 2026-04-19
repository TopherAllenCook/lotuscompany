"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableBgImage } from "@/components/EditableBgImage";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { LotusMark } from "@/components/LotusMark";
import type { ProjectConfig } from "./projectData";

export function ProjectCoverSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart).padStart(2, "0");

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
      {/* Full-bleed hero image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <EditableBgImage
          id={`${k}-cover:hero`}
          label="hero photo"
          src={project.images.hero}
          style={{ width: "100%", height: "100%", opacity: 1 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(5,10,12,0.94) 0%, rgba(5,10,12,0.55) 45%, rgba(5,10,12,0.20) 75%, rgba(5,10,12,0.08) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(5,10,12,0.60) 0%, rgba(5,10,12,0.0) 55%)",
          }}
        />
      </div>

      <StatusChip status="DRAFT" />

      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 64,
          right: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 5,
        }}
      >
        <LotusMark width={160} onDark />
        <EditableText
          id={`${k}-cover:slide-indicator`}
          as="span"
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.44em",
            color: "rgba(206,232,238,0.22)",
            fontFamily: font,
            textTransform: "lowercase",
          }}
        >
          {slideNum} / {project.sectionLabel}
        </EditableText>
      </div>

      {/* Bottom content */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 64,
          maxWidth: "60%",
          zIndex: 5,
        }}
      >
        <EditableText
          id={`${k}-cover:eyebrow`}
          as="div"
          style={{
            fontSize: 10,
            color: theme.turquoise,
            letterSpacing: "0.3em",
            textTransform: "lowercase",
            fontFamily: font,
            fontWeight: 300,
            marginBottom: 16,
          }}
        >
          {project.location} · {project.phase}
        </EditableText>

        <EditableText
          id={`${k}-cover:headline`}
          as="h1"
          style={{
            fontSize: "38px",
            color: "#fff",
            fontWeight: 300,
            fontFamily: font,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textTransform: "lowercase",
            marginBottom: 28,
          }}
        >
          {project.name}
        </EditableText>

        {/* Stat row */}
        <div style={{ display: "flex", gap: 32 }}>
          {[
            { label: "units",     value: String(project.units)    },
            { label: "target irr", value: project.irr             },
            { label: "multiple",  value: project.multiple         },
            { label: "commitment", value: project.capital         },
          ].map((stat, i) => (
            <div key={i}>
              <EditableText
                id={`${k}-cover:stat-val-${i}`}
                as="div"
                style={{
                  fontSize: "32px",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: 5,
                }}
              >
                {stat.value}
              </EditableText>
              <EditableText
                id={`${k}-cover:stat-lbl-${i}`}
                as="div"
                style={{
                  fontSize: 9,
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.2em",
                  textTransform: "lowercase",
                }}
              >
                {stat.label}
              </EditableText>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter
        slideKey={`${k}-cover`}
        slideNum={slideNum}
        sectionLabel={project.sectionLabel}
      />
    </div>
  );
}
