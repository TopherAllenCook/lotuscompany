"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const PILLARS = [
  {
    key: "shelter",
    label: "shelter and dignity",
    tiles: [
      { id: "tile-shelter-1", label: "total units",       value: "788",   def: "units created or preserved"         },
      { id: "tile-shelter-2", label: "avg ami depth",     value: "—%",    def: "weighted average ami served"        },
      { id: "tile-shelter-3", label: "est. rent savings", value: "$—",    def: "annual savings vs. market rate"     },
    ],
  },
  {
    key: "knowledge",
    label: "knowledge and power",
    tiles: [
      { id: "tile-knowledge-1", label: "residents served",    value: "1,977", def: "estimated residents housed"            },
      { id: "tile-knowledge-2", label: "service utilization", value: "—%",    def: "residents using on-site services"      },
      { id: "tile-knowledge-3", label: "program reach",       value: "—",     def: "education and job program enrollments" },
    ],
  },
  {
    key: "wholeness",
    label: "wholeness",
    tiles: [
      { id: "tile-wholeness-1", label: "health connections",   value: "—",  def: "health service referrals made"       },
      { id: "tile-wholeness-2", label: "wellness touchpoints", value: "—",  def: "mental wellness interactions"        },
      { id: "tile-wholeness-3", label: "stabilized occupancy", value: "—%", def: "stabilized portfolio occupancy rate" },
    ],
  },
  {
    key: "place",
    label: "place and beauty",
    tiles: [
      { id: "tile-place-1", label: "design quality",        value: "—",  def: "internal design quality score"       },
      { id: "tile-place-2", label: "community amenity",     value: "—",  def: "amenity completeness score"          },
      { id: "tile-place-3", label: "resident satisfaction", value: "—%", def: "annual resident satisfaction survey" },
    ],
  },
];

const BOTTOM_STATS = [
  { id: "b0", value: "$3,000", label: "per resident impacted", sub: "first year commitment"                 },
  { id: "b1", value: "$300",   label: "per resident impacted", sub: "10-years of capital recommitment"      },
  { id: "b2", value: "50,000", label: "lives impacted",        sub: "with 10-years of capital recommitment" },
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
      {/* Subtle full-bleed background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="impact-dashboard:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.18 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.55) 0%, rgba(5,10,12,0.30) 100%)" }} />
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "48px 64px 60px",
          gap: 0,
        }}
      >
        {/* Headline */}
        <div className="anim-fade-in-up" style={{ marginBottom: "16px", flexShrink: 0 }}>
          <EditableText
            id="impact-dashboard:eyebrow"
            as="div"
            style={{
              fontSize: "14px",
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 400,
              marginBottom: "8px",
            }}
          >
            impact dashboard
          </EditableText>
          <EditableText
            id="impact-dashboard:headline"
            as="h1"
            style={{
              fontSize: "34px",
              color: "#fff",
              fontWeight: 400,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              margin: 0,
            }}
          >
            impact is reported like an operating business, not a slogan.
          </EditableText>
        </div>

        <div style={{ height: "1px", background: "rgba(77,186,214,0.20)", marginBottom: "16px", flexShrink: 0 }} />

        {/* 4-column pillar grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            flex: 1,
            minHeight: 0,
          }}
        >
          {PILLARS.map((pillar, pi) => (
            <EditableEl
              key={pillar.key}
              id={`impact-dashboard:pillar-col-${pillar.key}`}
              label={`pillar column — ${pillar.key}`}
              type="card"
              className={`anim-pillar-${pi + 1}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                background: "rgba(5,10,12,0.42)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                borderRadius: "12px",
                border: "1px solid rgba(77,186,214,0.14)",
                padding: "20px 18px",
              }}
            >
              {/* Pillar header */}
              <EditableText
                id={`impact-dashboard:pillar-${pillar.key}`}
                as="div"
                style={{
                  fontSize: "12px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(77,186,214,0.16)",
                  marginBottom: "4px",
                  flexShrink: 0,
                }}
              >
                {pillar.label}
              </EditableText>

              {/* 3 metric tiles */}
              {pillar.tiles.map((tile) => (
                <div
                  key={tile.id}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(77,186,214,0.08)",
                  }}
                >
                  <EditableText
                    id={`impact-dashboard:${tile.id}-label`}
                    as="div"
                    style={{
                      fontSize: "11px",
                      color: "rgba(206,232,238,0.70)",
                      fontFamily: font,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      marginBottom: "6px",
                    }}
                  >
                    {tile.label}
                  </EditableText>
                  <EditableText
                    id={`impact-dashboard:${tile.id}-value`}
                    as="div"
                    className="anim-stat-pulse"
                    style={{
                      fontSize: "32px",
                      color: "#fff",
                      fontFamily: font,
                      fontWeight: 400,
                      lineHeight: 1,
                      marginBottom: "6px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tile.value}
                  </EditableText>
                  <EditableText
                    id={`impact-dashboard:${tile.id}-def`}
                    as="div"
                    style={{
                      fontSize: "13px",
                      color: "rgba(206,232,238,0.65)",
                      fontFamily: font,
                      lineHeight: 1.4,
                      textTransform: "lowercase",
                    }}
                  >
                    {tile.def}
                  </EditableText>
                </div>
              ))}
            </EditableEl>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginTop: "12px",
            flexShrink: 0,
          }}
        >
          {BOTTOM_STATS.map((stat) => (
            <EditableEl
              key={stat.id}
              id={`impact-dashboard:bottom-stat-${stat.id}`}
              label={`bottom stat — ${stat.label}`}
              type="card"
              style={{
                background: "rgba(77,186,214,0.09)",
                border: "1px solid rgba(77,186,214,0.22)",
                borderRadius: "10px",
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <EditableText
                id={`impact-dashboard:bottom-stat-${stat.id}-value`}
                as="div"
                style={{
                  fontSize: "28px",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {stat.value}
              </EditableText>
              <EditableText
                id={`impact-dashboard:bottom-stat-${stat.id}-label`}
                as="div"
                style={{
                  fontSize: "12px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </EditableText>
              <EditableText
                id={`impact-dashboard:bottom-stat-${stat.id}-sub`}
                as="div"
                style={{
                  fontSize: "13px",
                  color: "rgba(206,232,238,0.70)",
                  fontFamily: font,
                  lineHeight: 1.3,
                  textTransform: "lowercase",
                }}
              >
                {stat.sub}
              </EditableText>
            </EditableEl>
          ))}
        </div>
      </div>
    </div>
  );
}
