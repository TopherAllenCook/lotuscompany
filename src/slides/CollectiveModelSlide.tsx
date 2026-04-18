"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

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
      <StatusChip status="READY" />

      <div style={{ display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <div style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "40px" }}>
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
            partners participate in decisions and stay connected to outcomes.
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
                color: theme.lightBlue,
                fontWeight: 300,
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
                color: theme.lightBlue,
                fontWeight: 300,
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
                color: theme.lightBlue,
                fontWeight: 300,
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
                color: theme.lightBlue,
                fontWeight: 300,
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
            shared identity around stewardship, not optics.
          </EditableText>
        </div>

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
