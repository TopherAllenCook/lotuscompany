"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";
import type { ProjectConfig } from "./projectData";

const teal = (a: number) => `rgba(77,186,214,${a})`;
const muted = (a: number) => `rgba(255,255,255,${a})`;

const CARD_TOPICS = [
  { key: "mission",   label: "mission",             heading: "two buildings, one mission" },
  { key: "heritage",  label: "industrial heritage",  heading: "industrial heritage, renewed" },
  { key: "programs",  label: "resident programs",    heading: "resident programs from opening day" },
];

export function ProjectLotusWaySlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const pillars = project.lotusWayPillars;

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
      {/* Full-bleed building rendering */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id={`${k}-lotus-way:bg-photo`}
          label="building rendering"
          src={project.images.hero}
          style={{ width: "100%", height: "100%", opacity: 0.38 }}
        />
        {/* gradient — darker at bottom for card legibility */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(5,10,12,0.60) 0%, rgba(5,10,12,0.45) 40%, rgba(5,10,12,0.85) 100%)" }} />
      </div>

      {/* Layout */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", padding: "44px 60px 52px", gap: 28 }}>

        {/* Header */}
        <div style={{ flexShrink: 0 }}>
          <EditableText
            id={`${k}-lotus-way:eyebrow`}
            as="div"
            style={{ fontSize: "10px", color: theme.turquoise, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "10px" }}
          >
            the lotus way · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-lotus-way:headline`}
            as="div"
            style={{ fontSize: "36px", color: "#ffffff", fontWeight: 300, fontFamily: font, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "lowercase" }}
          >
            how this project represents the lotus way.
          </EditableText>
        </div>

        <div style={{ height: "1px", background: teal(0.20), flexShrink: 0 }} />

        {/* Three cards */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", minHeight: 0 }}>
          {CARD_TOPICS.map((topic, i) => {
            const pillar = pillars[i];
            return (
              <EditableEl
                key={topic.key}
                id={`${k}-lotus-way:card-${topic.key}`}
                label={`card — ${topic.label}`}
                type="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(5,10,12,0.58)",
                  backdropFilter: "blur(28px) saturate(160%)",
                  WebkitBackdropFilter: "blur(28px) saturate(160%)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderTop: `2px solid ${teal(0.55)}`,
                  boxShadow: "0 8px 36px rgba(0,0,0,0.45)",
                  overflow: "hidden",
                }}
              >
                {/* Card image */}
                {pillar?.img && (
                  <div style={{ height: "38%", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                    <img
                      src={pillar.img}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,10,12,0) 40%, rgba(5,10,12,0.70) 100%)" }} />
                  </div>
                )}

                {/* Card text */}
                <div style={{ flex: 1, padding: "24px 26px 28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <EditableText
                    id={`${k}-lotus-way:card-label-${topic.key}`}
                    as="div"
                    style={{ fontSize: "9px", color: theme.turquoise, letterSpacing: "0.30em", textTransform: "uppercase", fontFamily: font, fontWeight: 500 }}
                  >
                    {topic.label}
                  </EditableText>

                  <EditableText
                    id={`${k}-lotus-way:card-heading-${topic.key}`}
                    as="div"
                    style={{ fontSize: "22px", color: "#ffffff", fontFamily: font, fontWeight: 300, lineHeight: 1.25, textTransform: "lowercase", letterSpacing: "-0.01em" }}
                  >
                    {pillar?.heading ?? topic.heading}
                  </EditableText>

                  <div style={{ height: "1px", background: teal(0.15) }} />

                  <EditableText
                    id={`${k}-lotus-way:card-body-${topic.key}`}
                    as="div"
                    style={{ fontSize: "14px", color: muted(0.75), fontFamily: font, fontWeight: 300, lineHeight: 1.65, textTransform: "lowercase" }}
                  >
                    {pillar?.body ?? ""}
                  </EditableText>
                </div>
              </EditableEl>
            );
          })}
        </div>
      </div>
    </div>
  );
}
