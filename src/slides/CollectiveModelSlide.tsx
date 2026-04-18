"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { EditableEl } from "@/components/EditableEl";

export default function CollectiveModelSlide() {
  const participationLevels = [
    {
      label: "informed",
      sublabel: "receives all reporting",
      index: 0,
    },
    {
      label: "engaged",
      sublabel: "attends quarterly calls",
      index: 1,
    },
    {
      label: "consenting",
      sublabel: "votes on deal-level consent",
      index: 2,
    },
    {
      label: "shaping directives",
      sublabel: "contributes to annual reset",
      index: 3,
    },
  ];

  const svgHeight = 320;
  const rungHeight = svgHeight / (participationLevels.length + 1);

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
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <img
          src="/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <EditableEl id="collective-model:card" label="glass card" type="card" style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "36px 40px 36px 36px", background: "rgba(5,10,12,0.52)", backdropFilter: "blur(28px) saturate(200%)", WebkitBackdropFilter: "blur(28px) saturate(200%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)" }}>
          <EditableText
            id="collective-model:eyebrow"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              letterSpacing: "0.2em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            why the collective model fits this audience
          </EditableText>

          <EditableText
            id="collective-model:headline"
            as="h1"
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "24px",
            }}
          >
            partners stay close to the work.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            <EditableText
              id="collective-model:bullet-1"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              curated partner base rather than broad fundraising.
            </EditableText>

            <EditableText
              id="collective-model:bullet-2"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              deal-level consent within clear rules.
            </EditableText>

            <EditableText
              id="collective-model:bullet-3"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              quarterly reporting and annual in-person review.
            </EditableText>

            <EditableText
              id="collective-model:bullet-4"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              optional site visits and project milestone participation.
            </EditableText>
          </div>

          <EditableText
            id="collective-model:closing"
            as="div"
            style={{
              fontSize: "12px",
              color: theme.turquoise,
              fontWeight: 300,
              fontFamily: font,
              letterSpacing: "0.08em",
              textTransform: "lowercase",
            }}
          >
            this is not a blind pool.
          </EditableText>
        </EditableEl>

        {/* Right Diagram - Participation Ladder */}
        <div style={{ flex: "0 0 45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="280" height={svgHeight} viewBox={`0 0 280 ${svgHeight}`}>
            {participationLevels.map((level, idx) => {
              const yPos = svgHeight - (idx + 1) * rungHeight;
              const widthPercent = 0.4 + idx * 0.15;
              const width = 280 * widthPercent;
              const x = (280 - width) / 2;
              const fillOpacity = 0.06 + idx * 0.05;

              return (
                <g key={idx}>
                  {/* Rung */}
                  <rect
                    x={x}
                    y={yPos + 20}
                    width={width}
                    height="40"
                    rx="4"
                    fill={`rgba(77, 186, 214, ${fillOpacity})`}
                    stroke="rgba(77, 186, 214, 0.3)"
                    strokeWidth="1"
                  />

                  {/* Label */}
                  <text
                    x={140}
                    y={yPos + 40}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontSize="12"
                    fontFamily={font}
                    fontWeight="300"
                  >
                    {level.label}
                  </text>

                  {/* Sub-label */}
                  <text
                    x={140}
                    y={yPos + 55}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="rgba(206, 232, 238, 0.6)"
                    fontSize="10"
                    fontFamily={font}
                    fontWeight="300"
                  >
                    {level.sublabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <SlideFooter slideKey="collective-model" slideNum="08" sectionLabel="model" />
    </div>
  );
}
