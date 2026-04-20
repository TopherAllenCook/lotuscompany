"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import type { ProjectConfig } from "./projectData";

const BG = "#F7F5F0";
const INK = "#050a0c";
const muted = (a: number) => `rgba(5,10,12,${a})`;
const teal = (a: number) => `rgba(77,186,214,${a})`;

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
        background: BG,
        fontFamily: font,
      }}
    >

      <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "56px 64px 72px" }}>
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <EditableText
            id={`${k}-team:eyebrow`}
            as="div"
            style={{ fontSize: 11, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 400, marginBottom: 10 }}
          >
            development team · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-team:headline`}
            as="h1"
            style={{ fontSize: "32px", color: INK, fontWeight: 300, fontFamily: font, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "lowercase" }}
          >
            the lotus team assigned to this project.
          </EditableText>
        </div>

        <div style={{ height: 1, background: muted(0.10), marginBottom: 32 }} />

        {/* Team members — two-up */}
        <div style={{ display: "flex", gap: 24, flex: 1, minHeight: 0, alignItems: "flex-start" }}>
          {project.team.map((member, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                border: `1px solid ${muted(0.10)}`,
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              {/* Photo placeholder */}
              <div
                style={{
                  flex: "0 0 64%",
                  background: teal(0.07),
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
                    border: `1px solid ${muted(0.18)}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.50)",
                  }}
                >
                  <div style={{ fontSize: "38px", color: muted(0.28), fontFamily: font, fontWeight: 300, letterSpacing: "-0.02em" }}>
                    {member.name.charAt(0)}
                  </div>
                </div>

                <EditableText
                  id={`${k}-team:photo-hint-${i}`}
                  as="div"
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 16,
                    fontSize: 9,
                    color: muted(0.22),
                    fontFamily: font,
                    letterSpacing: "0.18em",
                    textTransform: "lowercase",
                  }}
                >
                  photo
                </EditableText>
              </div>

              {/* Name + title */}
              <div style={{ padding: "20px 24px 24px", background: "rgba(255,255,255,0.50)" }}>
                <EditableText
                  id={`${k}-team:name-${i}`}
                  as="div"
                  style={{ fontSize: "32px", color: INK, fontFamily: font, fontWeight: 300, letterSpacing: "-0.01em", textTransform: "lowercase", marginBottom: 6 }}
                >
                  {member.name}
                </EditableText>
                <EditableText
                  id={`${k}-team:title-${i}`}
                  as="div"
                  style={{ fontSize: 10, color: theme.turquoise, fontFamily: font, letterSpacing: "0.20em", textTransform: "lowercase", marginBottom: 16 }}
                >
                  {member.title}
                </EditableText>
                <div style={{ height: 1, background: muted(0.08), marginBottom: 14 }} />
                <EditableText
                  id={`${k}-team:bio-${i}`}
                  as="div"
                  style={{ fontSize: "18px", color: muted(0.50), fontFamily: font, fontWeight: 300, lineHeight: 1.65, textTransform: "lowercase" }}
                >
                  bio to be added.
                </EditableText>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
