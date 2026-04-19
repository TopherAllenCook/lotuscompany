"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import type { ProjectConfig } from "./projectData";

export function ProjectTeamSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart + 6).padStart(2, "0");

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
            id={`${k}-team:eyebrow`}
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
            development team · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-team:headline`}
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
            the lotus team assigned to this project.
          </EditableText>
        </div>

        <div style={{ height: 1, background: "rgba(77,186,214,0.18)", marginBottom: 32 }} />

        {/* Team members — two-up */}
        <div
          style={{
            display: "flex",
            gap: 24,
            flex: 1,
            minHeight: 0,
            alignItems: "flex-start",
          }}
        >
          {project.team.map((member, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 0,
                border: "1px solid rgba(77,186,214,0.12)",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              {/* Photo placeholder */}
              <div
                style={{
                  flex: "0 0 64%",
                  background: "rgba(77,186,214,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  minHeight: 280,
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "1px solid rgba(77,186,214,0.20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(24px, 2.4vw, 36px)",
                      color: "rgba(77,186,214,0.30)",
                      fontFamily: font,
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                </div>

                {/* Photo label hint */}
                <EditableText
                  id={`${k}-team:photo-hint-${i}`}
                  as="div"
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 16,
                    fontSize: 8,
                    color: "rgba(206,232,238,0.20)",
                    fontFamily: font,
                    letterSpacing: "0.18em",
                    textTransform: "lowercase",
                  }}
                >
                  photo
                </EditableText>
              </div>

              {/* Name + title */}
              <div
                style={{
                  padding: "20px 24px 24px",
                  background: "rgba(77,186,214,0.04)",
                }}
              >
                <EditableText
                  id={`${k}-team:name-${i}`}
                  as="div"
                  style={{
                    fontSize: "clamp(18px, 1.9vw, 26px)",
                    color: "#fff",
                    fontFamily: font,
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                    textTransform: "lowercase",
                    marginBottom: 6,
                  }}
                >
                  {member.name}
                </EditableText>
                <EditableText
                  id={`${k}-team:title-${i}`}
                  as="div"
                  style={{
                    fontSize: 9,
                    color: theme.turquoise,
                    fontFamily: font,
                    letterSpacing: "0.20em",
                    textTransform: "lowercase",
                    marginBottom: 16,
                  }}
                >
                  {member.title}
                </EditableText>
                <div
                  style={{
                    height: 1,
                    background: "rgba(77,186,214,0.12)",
                    marginBottom: 14,
                  }}
                />
                <EditableText
                  id={`${k}-team:bio-${i}`}
                  as="div"
                  style={{
                    fontSize: "clamp(11px, 1.1vw, 13px)",
                    color: "rgba(206,232,238,0.55)",
                    fontFamily: font,
                    fontWeight: 300,
                    lineHeight: 1.65,
                    textTransform: "lowercase",
                  }}
                >
                  bio to be added.
                </EditableText>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter
        slideKey={`${k}-team`}
        slideNum={slideNum}
        sectionLabel={project.sectionLabel}
      />
    </div>
  );
}
