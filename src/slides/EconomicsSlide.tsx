"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip, DataTag } from "@/components/StatusChip";

export function EconomicsSlide() {
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
        <div style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingRight: "40px" }}>
          <EditableText
            id="economics:eyebrow"
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
            economics
          </EditableText>

          <EditableText
            id="economics:headline"
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
            returns are earned through structure, not through market timing.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            <EditableText
              id="economics:bullet-1"
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
              use 13 to 15 percent net irr as a portfolio target range, not a guaranteed per-deal result.
            </EditableText>

            <EditableText
              id="economics:bullet-2"
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
              primary drivers are recap timing, fee participation, gp economics, and residual value.
            </EditableText>

            <EditableText
              id="economics:bullet-3"
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
              the value of recycling is throughput and retained exposure, not just nominal yield.
            </EditableText>

            <EditableText
              id="economics:bullet-4"
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
              describe returns as repeatable capital recycling, not infinite reinvestment.
            </EditableText>
          </div>

          {/* Footnote */}
          <EditableText
            id="economics:footnote"
            as="div"
            style={{
              fontSize: "9px",
              color: "rgba(255,255,255,0.3)",
              fontFamily: font,
              fontWeight: 300,
              lineHeight: 1.5,
              textTransform: "lowercase",
            }}
          >
            modeled assumption for presentation design. base case illustrative path: 14.4 percent irr
            <DataTag type="MODELED" />, driven by 12 month recap and base gp economics.
          </EditableText>
        </div>

        {/* Right Waterfall Chart */}
        <div style={{ flex: "0 0 45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width={380} height={280} viewBox="0 0 380 280" style={{ overflow: "visible" }}>
            {/* Title */}
            <text
              x={190}
              y={20}
              textAnchor="middle"
              style={{
                fontSize: "10px",
                fill: "rgba(206,232,238,0.4)",
                fontFamily: font,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              return driver contribution
            </text>

            {/* Bar 1: Capital Turn */}
            <rect x={50} y={50} width={240} height={40} fill="rgba(77,186,214,0.25)" />
            <text
              x={50}
              y={75}
              style={{
                fontSize: "12px",
                fill: theme.lightBlue,
                fontFamily: font,
                textAnchor: "end",
                marginRight: "8px",
              }}
            >
              capital turn
            </text>
            <text
              x={300}
              y={75}
              style={{
                fontSize: "11px",
                fill: theme.turquoise,
                fontFamily: font,
                fontWeight: 300,
              }}
            >
              75%
            </text>

            {/* Bar 2: Fee Participation */}
            <rect x={50} y={110} width={180} height={40} fill="rgba(77,186,214,0.35)" />
            <text
              x={50}
              y={135}
              style={{
                fontSize: "12px",
                fill: theme.lightBlue,
                fontFamily: font,
                textAnchor: "end",
              }}
            >
              fee participation
            </text>
            <text
              x={245}
              y={135}
              style={{
                fontSize: "11px",
                fill: theme.turquoise,
                fontFamily: font,
                fontWeight: 300,
              }}
            >
              55%
            </text>

            {/* Bar 3: Operations */}
            <rect x={50} y={170} width={120} height={40} fill="rgba(77,186,214,0.45)" />
            <text
              x={50}
              y={195}
              style={{
                fontSize: "12px",
                fill: theme.lightBlue,
                fontFamily: font,
                textAnchor: "end",
              }}
            >
              operations
            </text>
            <text
              x={185}
              y={195}
              style={{
                fontSize: "11px",
                fill: theme.turquoise,
                fontFamily: font,
                fontWeight: 300,
              }}
            >
              35%
            </text>

            {/* Bar 4: Residual */}
            <rect x={50} y={230} width={60} height={40} fill="rgba(77,186,214,0.6)" />
            <text
              x={50}
              y={255}
              style={{
                fontSize: "12px",
                fill: theme.lightBlue,
                fontFamily: font,
                textAnchor: "end",
              }}
            >
              residual
            </text>
            <text
              x={125}
              y={255}
              style={{
                fontSize: "11px",
                fill: theme.turquoise,
                fontFamily: font,
                fontWeight: 300,
              }}
            >
              20%
            </text>
          </svg>
        </div>
      </div>

      <SlideFooter slideKey="economics" slideNum="11" sectionLabel="economics" />
    </div>
  );
}
