"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";



const PILLARS = [
  {
    key: "shelter",
    label: "shelter and dignity",
    img: "/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg",
    tiles: [
      { id: "tile-shelter-1", label: "total units",       value: "788",  def: "units created or preserved"         },
      { id: "tile-shelter-2", label: "avg ami depth",     value: "—%",   def: "weighted average ami served"        },
      { id: "tile-shelter-3", label: "est. rent savings", value: "$—",   def: "annual savings vs. market rate"     },
    ],
  },
  {
    key: "knowledge",
    label: "knowledge and power",
    img: "/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg",
    tiles: [
      { id: "tile-knowledge-1", label: "residents served",    value: "1,977", def: "estimated residents housed"            },
      { id: "tile-knowledge-2", label: "service utilization", value: "—%",    def: "residents using on-site services"      },
      { id: "tile-knowledge-3", label: "program reach",       value: "—",     def: "education and job program enrollments" },
    ],
  },
  {
    key: "wholeness",
    label: "wholeness",
    img: "/steelton-village/Steelton I_North Park_2026.03.10.jpg",
    tiles: [
      { id: "tile-wholeness-1", label: "health connections",   value: "—",  def: "health service referrals made"       },
      { id: "tile-wholeness-2", label: "wellness touchpoints", value: "—",  def: "mental wellness interactions"        },
      { id: "tile-wholeness-3", label: "stabilized occupancy", value: "—%", def: "stabilized portfolio occupancy rate" },
    ],
  },
  {
    key: "place",
    label: "place and beauty",
    img: "/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg",
    tiles: [
      { id: "tile-place-1", label: "design quality",        value: "—",  def: "internal design quality score"       },
      { id: "tile-place-2", label: "community amenity",     value: "—",  def: "amenity completeness score"          },
      { id: "tile-place-3", label: "resident satisfaction", value: "—%", def: "annual resident satisfaction survey" },
    ],
  },
];

const BOTTOM_STATS = [
  { value: "$3,000", label: "per resident impacted", sub: "first year commitment"                       },
  { value: "$300",   label: "per resident impacted", sub: "10-years of capital recommitment"            },
  { value: "50,000", label: "lives impacted",        sub: "with 10-years of capital recommitment"       },
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


      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "56px 64px 72px 64px",
          gap: "28px",
        }}
      >
        {/* LEFT — stacked portrait photo strip, one image per pillar */}
        <div
          style={{
            flex: "0 0 200px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          {PILLARS.map((pillar) => (
            <div
              key={pillar.key}
              style={{ flex: 1, position: "relative", overflow: "hidden" }}
            >
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
              {/* Left-to-right gradient so label is legible */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(5,10,12,0.72) 0%, rgba(5,10,12,0.18) 55%, rgba(5,10,12,0.0) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "12px",
                  fontSize: "14px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  maxWidth: "120px",
                }}
              >
                {pillar.label}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — data panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {/* Headline block */}
          <div className="anim-fade-in-up" style={{ marginBottom: "18px" }}>
            <EditableText
              id="impact-dashboard:eyebrow"
              as="div"
              style={{
                fontSize: "24px",
                color: theme.turquoise,
                letterSpacing: "0.28em",
                textTransform: "lowercase",
                fontFamily: font,
                fontWeight: 300,
                marginBottom: "10px",
              }}
            >
              impact dashboard
            </EditableText>

            <EditableText
              id="impact-dashboard:headline"
              as="h1"
              style={{
                fontSize: "46px",
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

          {/* 4 horizontal pillar rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              flex: 1,
              minHeight: 0,
            }}
          >
            {PILLARS.map((pillar, pi) => (
              <div
                key={pillar.key}
                className={`anim-pillar-${pi + 1}`}
                style={{
                  display: "flex",
                  gap: "7px",
                  flex: 1,
                  minHeight: 0,
                  alignItems: "stretch",
                }}
              >
                {/* Pillar label cell */}
                <div
                  style={{
                    flex: "0 0 130px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                    background: "rgba(77,186,214,0.04)",
                    border: "1px solid rgba(77,186,214,0.10)",
                    borderRadius: "3px",
                  }}
                >
                  <EditableText
                    id={`impact-dashboard:pillar-${pillar.key}`}
                    as="div"
                    style={{
                      fontSize: "14px",
                      color: theme.turquoise,
                      fontFamily: font,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    {pillar.label}
                  </EditableText>
                </div>

                {/* 3 metric tiles */}
                {pillar.tiles.map((tile) => (
                  <div
                    key={tile.id}
                    style={{
                      flex: 1,
                      background: "rgba(77,186,214,0.05)",
                      border: "1px solid rgba(77,186,214,0.15)",
                      borderRadius: "3px",
                      padding: "10px 12px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <EditableText
                      id={`impact-dashboard:${tile.id}-label`}
                      as="div"
                      style={{
                        fontSize: "14px",
                        color: theme.turquoise,
                        fontFamily: font,
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {tile.label}
                    </EditableText>

                    <div
                      className="anim-stat-pulse"
                      style={{ marginBottom: "4px" }}
                    >
                      <EditableText
                        id={`impact-dashboard:${tile.id}-value`}
                        as="div"
                        style={{
                          fontSize: "40px",
                          color: "#fff",
                          fontFamily: font,
                          fontWeight: 300,
                          lineHeight: 1,
                        }}
                      >
                        {tile.value}
                      </EditableText>
                    </div>

                    <EditableText
                      id={`impact-dashboard:${tile.id}-def`}
                      as="div"
                      style={{
                        fontSize: "24px",
                        color: "rgba(206,232,238,0.4)",
                        fontFamily: font,
                        lineHeight: 1.3,
                        textTransform: "lowercase",
                      }}
                    >
                      {tile.def}
                    </EditableText>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom stat bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "7px",
              marginTop: "10px",
              flexShrink: 0,
            }}
          >
            {BOTTOM_STATS.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(77,186,214,0.08)",
                  border: "1px solid rgba(77,186,214,0.22)",
                  borderRadius: "3px",
                  padding: "12px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                <EditableText
                  id={`impact-dashboard:bottom-stat-${i}-value`}
                  as="div"
                  style={{
                    fontSize: "40px",
                    color: "#fff",
                    fontFamily: font,
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </EditableText>
                <EditableText
                  id={`impact-dashboard:bottom-stat-${i}-label`}
                  as="div"
                  style={{
                    fontSize: "24px",
                    color: theme.turquoise,
                    fontFamily: font,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </EditableText>
                <EditableText
                  id={`impact-dashboard:bottom-stat-${i}-sub`}
                  as="div"
                  style={{
                    fontSize: "24px",
                    color: "rgba(206,232,238,0.4)",
                    fontFamily: font,
                    lineHeight: 1.3,
                    textTransform: "lowercase",
                  }}
                >
                  {stat.sub}
                </EditableText>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
