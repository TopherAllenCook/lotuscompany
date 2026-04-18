"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip, PlaceholderTag } from "@/components/StatusChip";

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

      <div style={{ display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <div style={{ flex: "0 0 45%", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingRight: "40px" }}>
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
              marginBottom: "16px",
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
              marginBottom: "24px",
            }}
          >
            impact should be reported like an operating business, not a slogan.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <EditableText
              id="impact-dashboard:bullet-1"
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
              housing creation and preservation.
            </EditableText>

            <EditableText
              id="impact-dashboard:bullet-2"
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
              ami mix and affordability depth.
            </EditableText>

            <EditableText
              id="impact-dashboard:bullet-3"
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
              residents served and estimated rent savings.
            </EditableText>

            <EditableText
              id="impact-dashboard:bullet-4"
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
              resident-service utilization and outcomes.
            </EditableText>

            <EditableText
              id="impact-dashboard:bullet-5"
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
              design, quality, and operating stability metrics.
            </EditableText>
          </div>
        </div>

        {/* Right KPI Dashboard Grid */}
        <div style={{ flex: "0 0 55%", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "60px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            {/* Tile 1: Total Units */}
            <div
              style={{
                background: "rgba(77,186,214,0.06)",
                border: "1px solid rgba(77,186,214,0.18)",
                borderRadius: 4,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <EditableText
                id="impact-dashboard:tile-1-label"
                as="div"
                style={{
                  fontSize: "9px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                total units
              </EditableText>
              <EditableText
                id="impact-dashboard:tile-1-value"
                as="div"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —
              </EditableText>
              <PlaceholderTag />
              <EditableText
                id="impact-dashboard:tile-1-def"
                as="div"
                style={{
                  fontSize: "10px",
                  color: "rgba(206,232,238,0.55)",
                  fontFamily: font,
                  marginTop: "4px",
                }}
              >
                units created or preserved
              </EditableText>
              <div style={{ fontSize: "12px", color: theme.turquoise, marginTop: "6px" }}>↑</div>
            </div>

            {/* Tile 2: Avg AMI Depth */}
            <div
              style={{
                background: "rgba(77,186,214,0.06)",
                border: "1px solid rgba(77,186,214,0.18)",
                borderRadius: 4,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <EditableText
                id="impact-dashboard:tile-2-label"
                as="div"
                style={{
                  fontSize: "9px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                avg ami depth
              </EditableText>
              <EditableText
                id="impact-dashboard:tile-2-value"
                as="div"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —%
              </EditableText>
              <PlaceholderTag />
              <EditableText
                id="impact-dashboard:tile-2-def"
                as="div"
                style={{
                  fontSize: "10px",
                  color: "rgba(206,232,238,0.55)",
                  fontFamily: font,
                  marginTop: "4px",
                }}
              >
                weighted average ami served
              </EditableText>
              <div style={{ fontSize: "12px", color: theme.turquoise, marginTop: "6px" }}>→</div>
            </div>

            {/* Tile 3: Residents Served */}
            <div
              style={{
                background: "rgba(77,186,214,0.06)",
                border: "1px solid rgba(77,186,214,0.18)",
                borderRadius: 4,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <EditableText
                id="impact-dashboard:tile-3-label"
                as="div"
                style={{
                  fontSize: "9px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                residents served
              </EditableText>
              <EditableText
                id="impact-dashboard:tile-3-value"
                as="div"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —
              </EditableText>
              <PlaceholderTag />
              <EditableText
                id="impact-dashboard:tile-3-def"
                as="div"
                style={{
                  fontSize: "10px",
                  color: "rgba(206,232,238,0.55)",
                  fontFamily: font,
                  marginTop: "4px",
                }}
              >
                estimated residents housed
              </EditableText>
              <div style={{ fontSize: "12px", color: theme.turquoise, marginTop: "6px" }}>↑</div>
            </div>

            {/* Tile 4: Est. Rent Savings */}
            <div
              style={{
                background: "rgba(77,186,214,0.06)",
                border: "1px solid rgba(77,186,214,0.18)",
                borderRadius: 4,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <EditableText
                id="impact-dashboard:tile-4-label"
                as="div"
                style={{
                  fontSize: "9px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                est. rent savings
              </EditableText>
              <EditableText
                id="impact-dashboard:tile-4-value"
                as="div"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                $—
              </EditableText>
              <PlaceholderTag />
              <EditableText
                id="impact-dashboard:tile-4-def"
                as="div"
                style={{
                  fontSize: "10px",
                  color: "rgba(206,232,238,0.55)",
                  fontFamily: font,
                  marginTop: "4px",
                }}
              >
                annual savings vs market rate
              </EditableText>
              <div style={{ fontSize: "12px", color: theme.turquoise, marginTop: "6px" }}>↑</div>
            </div>

            {/* Tile 5: Service Utilization */}
            <div
              style={{
                background: "rgba(77,186,214,0.06)",
                border: "1px solid rgba(77,186,214,0.18)",
                borderRadius: 4,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <EditableText
                id="impact-dashboard:tile-5-label"
                as="div"
                style={{
                  fontSize: "9px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                service utilization
              </EditableText>
              <EditableText
                id="impact-dashboard:tile-5-value"
                as="div"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —%
              </EditableText>
              <PlaceholderTag />
              <EditableText
                id="impact-dashboard:tile-5-def"
                as="div"
                style={{
                  fontSize: "10px",
                  color: "rgba(206,232,238,0.55)",
                  fontFamily: font,
                  marginTop: "4px",
                }}
              >
                residents using on-site services
              </EditableText>
              <div style={{ fontSize: "12px", color: theme.turquoise, marginTop: "6px" }}>→</div>
            </div>

            {/* Tile 6: Operating Stability */}
            <div
              style={{
                background: "rgba(77,186,214,0.06)",
                border: "1px solid rgba(77,186,214,0.18)",
                borderRadius: 4,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <EditableText
                id="impact-dashboard:tile-6-label"
                as="div"
                style={{
                  fontSize: "9px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                operating stability
              </EditableText>
              <EditableText
                id="impact-dashboard:tile-6-value"
                as="div"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                }}
              >
                —%
              </EditableText>
              <PlaceholderTag />
              <EditableText
                id="impact-dashboard:tile-6-def"
                as="div"
                style={{
                  fontSize: "10px",
                  color: "rgba(206,232,238,0.55)",
                  fontFamily: font,
                  marginTop: "4px",
                }}
              >
                stabilized occupancy rate
              </EditableText>
              <div style={{ fontSize: "12px", color: theme.turquoise, marginTop: "6px" }}>↑</div>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter slideKey="impact-dashboard" slideNum="13" sectionLabel="reporting" />
    </div>
  );
}
