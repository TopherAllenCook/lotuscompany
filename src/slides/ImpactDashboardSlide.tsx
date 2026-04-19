"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip, PlaceholderTag } from "@/components/StatusChip";

const PILLARS = [
  {
    key: "shelter",
    label: "shelter and dignity",
    img: "/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg",
    animClass: "anim-pillar-1",
    tiles: [
      { id: "tile-shelter-1", label: "total units",        value: "—",   def: "units created or preserved"         },
      { id: "tile-shelter-2", label: "avg ami depth",      value: "—%",  def: "weighted average ami served"        },
      { id: "tile-shelter-3", label: "est. rent savings",  value: "$—",  def: "annual savings vs. market rate"     },
    ],
  },
  {
    key: "knowledge",
    label: "knowledge and power",
    img: "/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg",
    animClass: "anim-pillar-2",
    tiles: [
      { id: "tile-knowledge-1", label: "residents served",      value: "—",  def: "estimated residents housed"           },
      { id: "tile-knowledge-2", label: "service utilization",   value: "—%", def: "residents using on-site services"     },
      { id: "tile-knowledge-3", label: "program reach",         value: "—",  def: "education and job program enrollments" },
    ],
  },
  {
    key: "wholeness",
    label: "wholeness",
    img: "/steelton-village/Steelton I_North Park_2026.03.10.jpg",
    animClass: "anim-pillar-3",
    tiles: [
      { id: "tile-wholeness-1", label: "health connections",   value: "—",  def: "health service referrals made"         },
      { id: "tile-wholeness-2", label: "wellness touchpoints", value: "—",  def: "mental wellness interactions"          },
      { id: "tile-wholeness-3", label: "stabilized occupancy", value: "—%", def: "stabilized portfolio occupancy rate"   },
    ],
  },
  {
    key: "place",
    label: "place and beauty",
    img: "/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg",
    animClass: "anim-pillar-4",
    tiles: [
      { id: "tile-place-1", label: "design quality",       value: "—",  def: "internal design quality score"       },
      { id: "tile-place-2", label: "community amenity",    value: "—",  def: "amenity completeness score"          },
      { id: "tile-place-3", label: "resident satisfaction", value: "—%", def: "annual resident satisfaction survey" },
    ],
  },
];

export function ImpactDashboardSlide() {
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
      <StatusChip status="DRAFT" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "64px 64px 72px 64px",
        }}
      >
        {/* Top headline block */}
        <div className="anim-fade-in-up" style={{ marginBottom: "28px" }}>
          <EditableText
            id="impact-dashboard:eyebrow"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              letterSpacing: "0.2em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "14px",
            }}
          >
            impact dashboard
          </EditableText>

          <EditableText
            id="impact-dashboard:headline"
            as="h1"
            style={{
              fontSize: "clamp(26px, 2.8vw, 42px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
            }}
          >
            impact is reported like an operating business, not a slogan.
          </EditableText>
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(77,186,214,0.18)",
            marginBottom: "14px",
          }}
        />

        {/* 5 metric categories */}
        <div style={{ display: "flex", gap: "32px", marginBottom: "16px", flexWrap: "wrap" }}>
          {[
            "housing creation and preservation.",
            "ami mix and affordability depth.",
            "residents served and estimated rent savings.",
            "resident service utilization and outcomes.",
            "design, quality, and operating stability metrics.",
          ].map((bullet, i) => (
            <EditableText
              key={i}
              id={`impact-dashboard:category-${i}`}
              as="div"
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.65)",
                fontFamily: font,
                fontWeight: 300,
                letterSpacing: "0.04em",
                textTransform: "lowercase",
              }}
            >
              {bullet}
            </EditableText>
          ))}
        </div>

        {/* 4-column botanical pillar grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            flex: 1,
            overflow: "hidden",
          }}
        >
          {PILLARS.map((pillar, pi) => (
            <div
              key={pillar.key}
              className={pillar.animClass}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight: pi < 3 ? "1px solid rgba(77,186,214,0.12)" : "none",
                paddingRight: pi < 3 ? "20px" : "0",
                paddingLeft: pi > 0 ? "20px" : "0",
              }}
            >
              {/* Image strip */}
              <div
                style={{
                  height: "120px",
                  overflow: "hidden",
                  borderRadius: "3px",
                  marginBottom: "14px",
                  position: "relative",
                }}
              >
                {/* Overlay so image doesn't compete with text */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(5,10,12,0.15) 0%, rgba(5,10,12,0.55) 100%)",
                    zIndex: 1,
                  }}
                />
                <img
                  src={pillar.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 40%",
                    display: "block",
                  }}
                />
              </div>

              {/* Pillar title */}
              <EditableText
                id={`impact-dashboard:pillar-${pillar.key}`}
                as="div"
                style={{
                  fontSize: "9px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  marginBottom: "14px",
                }}
              >
                {pillar.label}
              </EditableText>

              {/* 3 tiles */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: 1,
                }}
              >
                {pillar.tiles.map((tile) => (
                  <div
                    key={tile.id}
                    style={{
                      background: "rgba(77,186,214,0.05)",
                      border: "1px solid rgba(77,186,214,0.15)",
                      borderRadius: "3px",
                      padding: "12px 14px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Label */}
                    <EditableText
                      id={`impact-dashboard:${tile.id}-label`}
                      as="div"
                      style={{
                        fontSize: "8px",
                        color: theme.turquoise,
                        fontFamily: font,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      {tile.label}
                    </EditableText>

                    {/* Value row */}
                    <div
                      className="anim-stat-pulse"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "6px",
                        marginBottom: "6px",
                      }}
                    >
                      <EditableText
                        id={`impact-dashboard:${tile.id}-value`}
                        as="div"
                        style={{
                          fontSize: "clamp(22px, 2.4vw, 34px)",
                          color: "#fff",
                          fontFamily: font,
                          fontWeight: 300,
                          lineHeight: 1,
                        }}
                      >
                        {tile.value}
                      </EditableText>
                      <PlaceholderTag />
                    </div>

                    {/* Definition */}
                    <EditableText
                      id={`impact-dashboard:${tile.id}-def`}
                      as="div"
                      style={{
                        fontSize: "9px",
                        color: "rgba(206,232,238,0.45)",
                        fontFamily: font,
                        lineHeight: 1.4,
                        textTransform: "lowercase",
                      }}
                    >
                      {tile.def}
                    </EditableText>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter slideKey="impact-dashboard" slideNum="13" sectionLabel="reporting" />
    </div>
  );
}
