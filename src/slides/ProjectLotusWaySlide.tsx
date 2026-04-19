"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import type { ProjectConfig } from "./projectData";

export function ProjectLotusWaySlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart + 1).padStart(2, "0");

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
        <div style={{ marginBottom: 24 }}>
          <EditableText
            id={`${k}-lotus-way:eyebrow`}
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
            the lotus way · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-lotus-way:headline`}
            as="h1"
            style={{
              fontSize: "38px",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
            }}
          >
            how this project represents the lotus way.
          </EditableText>
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(77,186,214,0.18)",
            marginBottom: 24,
          }}
        />

        {/* 3-column pillar grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            flex: 1,
            minHeight: 0,
          }}
        >
          {project.lotusWayPillars.map((pillar, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                borderRadius: 4,
                border: "1px solid rgba(77,186,214,0.12)",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  flex: "0 0 44%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={pillar.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 35%",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(5,10,12,0.0) 50%, rgba(5,10,12,0.65) 100%)",
                  }}
                />
                <EditableText
                  id={`${k}-lotus-way:pillar-label-${i}`}
                  as="div"
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 14,
                    fontSize: 8,
                    color: theme.turquoise,
                    fontFamily: font,
                    letterSpacing: "0.22em",
                    textTransform: "lowercase",
                    fontWeight: 400,
                  }}
                >
                  {pillar.label}
                </EditableText>
              </div>

              {/* Text */}
              <div
                style={{
                  flex: 1,
                  padding: "16px 18px",
                  background: "rgba(77,186,214,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <EditableText
                  id={`${k}-lotus-way:pillar-heading-${i}`}
                  as="div"
                  style={{
                    fontSize: "28px",
                    color: "#fff",
                    fontFamily: font,
                    fontWeight: 300,
                    lineHeight: 1.3,
                    textTransform: "lowercase",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {pillar.heading}
                </EditableText>

                <EditableText
                  id={`${k}-lotus-way:pillar-body-${i}`}
                  as="div"
                  style={{
                    fontSize: "20px",
                    color: "rgba(206,232,238,0.65)",
                    fontFamily: font,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    textTransform: "lowercase",
                  }}
                >
                  {pillar.body}
                </EditableText>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter
        slideKey={`${k}-lotus-way`}
        slideNum={slideNum}
        sectionLabel={project.sectionLabel}
      />
    </div>
  );
}
