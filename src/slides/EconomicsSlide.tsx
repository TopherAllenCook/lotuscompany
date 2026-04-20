"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";


import { DataTag } from "@/components/StatusChip";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

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
      {/* Background photo — right side accent */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "45%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <EditableBgImage
          id="economics:bg-photo"
          label="background photo"
          src="/lotus-photos/nova/Commercial 2025-07-07 Lotus-Nova-3.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.50 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>



      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
        {/* Left Content */}
        <EditableEl id="economics:card" label="glass card" type="card" className="anim-fade-in-up" style={{ flex: "0 0 46%", display: "flex", flexDirection: "column", padding: "36px 40px", background: "rgba(5,10,12,0.52)", backdropFilter: "blur(28px) saturate(200%)", WebkitBackdropFilter: "blur(28px) saturate(200%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)" }}>
          <EditableText
            id="economics:eyebrow"
            as="div"
            style={{
              fontSize: "17px",
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "10px",
            }}
          >
            economics
          </EditableText>

          <EditableText
            id="economics:headline"
            as="h1"
            style={{
              fontSize: "38px",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "20px",
            }}
          >
            returns come from structure.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "18px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "16px" }}>
            <EditableEl
              id="economics:highlight-card"
              label="irr highlight card"
              type="card"
              style={{
                background: "rgba(77,186,214,0.10)",
                border: "1px solid rgba(77,186,214,0.25)",
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              <EditableText
                id="economics:irr-number"
                as="div"
                style={{
                  fontSize: "38px",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                13–15%
              </EditableText>
              <EditableText
                id="economics:bullet-1"
                as="div"
                style={{
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 400,
                  fontFamily: font,
                  lineHeight: 1.5,
                  textTransform: "lowercase",
                }}
              >
                net irr portfolio target range, not a per-deal guarantee.
              </EditableText>
            </EditableEl>

            <EditableText
              id="economics:bullet-2"
              as="div"
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
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
                fontSize: "17px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              recycling creates throughput and retained exposure, not just nominal yield.
            </EditableText>

            <EditableText
              id="economics:bullet-4"
              as="div"
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              this is repeatable capital recycling, not infinite reinvestment.
            </EditableText>
          </div>

          {/* Footnote */}
          <EditableText
            id="economics:footnote"
            as="div"
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              fontFamily: font,
              fontWeight: 300,
              lineHeight: 1.5,
              textTransform: "lowercase",
            }}
          >
            modeled assumption for presentation design. base case illustrative path: 14.4 percent irr
            <DataTag type="MODELED" />, driven by 12 month recap and base gp economics.
          </EditableText>
        </EditableEl>

        {/* Right Waterfall Chart */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width={460} height={280} viewBox="0 0 460 280" style={{ overflow: "visible" }}>
            {/* Title */}
            <text
              x={230}
              y={20}
              textAnchor="middle"
              style={{
                fontSize: "16px",
                fill: "rgba(206,232,238,0.75)",
                fontFamily: font,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              return driver contribution
            </text>

            {/* Bar 1: Capital Turn */}
            <rect x={185} y={50} width={200} height={40} fill="rgba(77,186,214,0.25)" />
            <text
              x={178}
              y={75}
              textAnchor="end"
              style={{
                fontSize: "16px",
                fill: theme.lightBlue,
                fontFamily: font,
              }}
            >
              capital turn
            </text>
            <text
              x={392}
              y={75}
              style={{
                fontSize: "16px",
                fill: theme.turquoise,
                fontFamily: font,
                fontWeight: 300,
              }}
            >
              75%
            </text>

            {/* Bar 2: Fee Participation */}
            <rect x={185} y={110} width={150} height={40} fill="rgba(77,186,214,0.35)" />
            <text
              x={178}
              y={135}
              textAnchor="end"
              style={{
                fontSize: "16px",
                fill: theme.lightBlue,
                fontFamily: font,
              }}
            >
              fee participation
            </text>
            <text
              x={342}
              y={135}
              style={{
                fontSize: "16px",
                fill: theme.turquoise,
                fontFamily: font,
                fontWeight: 300,
              }}
            >
              55%
            </text>

            {/* Bar 3: Operations */}
            <rect x={185} y={170} width={100} height={40} fill="rgba(77,186,214,0.45)" />
            <text
              x={178}
              y={195}
              textAnchor="end"
              style={{
                fontSize: "16px",
                fill: theme.lightBlue,
                fontFamily: font,
              }}
            >
              operations
            </text>
            <text
              x={292}
              y={195}
              style={{
                fontSize: "16px",
                fill: theme.turquoise,
                fontFamily: font,
                fontWeight: 300,
              }}
            >
              35%
            </text>

            {/* Bar 4: Residual */}
            <rect x={185} y={230} width={50} height={40} fill="rgba(77,186,214,0.6)" />
            <text
              x={178}
              y={255}
              textAnchor="end"
              style={{
                fontSize: "16px",
                fill: theme.lightBlue,
                fontFamily: font,
              }}
            >
              residual
            </text>
            <text
              x={242}
              y={255}
              style={{
                fontSize: "16px",
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


    </div>
  );
}
