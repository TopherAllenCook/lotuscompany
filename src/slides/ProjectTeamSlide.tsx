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
            style={{ fontSize: 14, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 400, marginBottom: 10 }}
          >
            development team · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-team:headline`}
            as="h1"
            style={{ fontSize: "40px", color: INK, fontWeight: 300, fontFamily: font, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "lowercase" }}
          >
            the lotus team assigned to this project.
          </EditableText>
        </div>

        <div style={{ height: 1, background: muted(0.10), marginBottom: 32 }} />

        {/* Team members — responsive grid */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${project.team.length}, 1fr)`, gap: 24, flex: 1, minHeight: 0, alignItems: "stretch" }}>
          {project.team.map((member, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                border: `1px solid ${muted(0.10)}`,
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  flex: 1,
                  background: teal(0.07),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  minHeight: 280,
                  overflow: "hidden",
                }}
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                ) : (
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
                    <EditableText id={`${k}-team:avatar-initial-${i}`} as="div" style={{ fontSize: "46px", color: muted(0.28), fontFamily: font, fontWeight: 300, letterSpacing: "-0.02em" }}>
                      {member.name.charAt(0)}
                    </EditableText>
                  </div>
                )}
              </div>

              {/* Name + title */}
              <div style={{ padding: "20px 24px 24px", background: "rgba(255,255,255,0.50)", flexShrink: 0 }}>
                <EditableText
                  id={`${k}-team:name-${i}`}
                  as="div"
                  style={{ fontSize: "32px", color: INK, fontFamily: font, fontWeight: 300, letterSpacing: "-0.01em", textTransform: "lowercase", marginBottom: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {member.name}
                </EditableText>
                <EditableText
                  id={`${k}-team:title-${i}`}
                  as="div"
                  style={{ fontSize: 12, color: theme.turquoise, fontFamily: font, letterSpacing: "0.20em", textTransform: "lowercase", marginBottom: 16, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {member.title}
                </EditableText>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
