"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";


import type { ProjectConfig } from "./projectData";

const BG   = "#F7F5F0";
const INK  = "#050a0c";
const muted = (a: number) => `rgba(5,10,12,${a})`;

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
        background: BG,
        fontFamily: font,
      }}
    >


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
              fontSize: 12,
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
              fontSize: "46px",
              color: INK,
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
              {/* Photo or placeholder */}
              <div
                style={{
                  flex: "0 0 44%",
                  position: "relative",
                  overflow: "hidden",
                  background: pillar.img ? undefined : "rgba(77,186,214,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {pillar.img ? (
                  <>
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
                  </>
                ) : (
                  <div style={{ fontSize: 11, color: "rgba(77,186,214,0.30)", fontFamily: font, letterSpacing: "0.18em", textTransform: "lowercase" }}>
                    rendering coming soon
                  </div>
                )}
                <EditableText
                  id={`${k}-lotus-way:pillar-label-${i}`}
                  as="div"
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 14,
                    fontSize: 10,
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
                    fontSize: "34px",
                    color: INK,
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
                    fontSize: "24px",
                    color: muted(0.60),
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


    </div>
  );
}
