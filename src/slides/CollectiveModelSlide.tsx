"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";


import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

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
        <EditableBgImage
          id="collective-model:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>



      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
        {/* Left Content */}
        <EditableEl id="collective-model:card" label="glass card" type="card" style={{ flex: "0 0 46%", display: "flex", flexDirection: "column", padding: "44px 48px", background: "rgba(5,10,12,0.52)", backdropFilter: "blur(28px) saturate(200%)", WebkitBackdropFilter: "blur(28px) saturate(200%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)" }}>
          <EditableText
            id="collective-model:eyebrow"
            as="div"
            style={{
              fontSize: "24px",
              color: theme.turquoise,
              letterSpacing: "0.12em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "10px",
            }}
          >
            why the collective model fits this audience
          </EditableText>

          <EditableText
            id="collective-model:headline"
            as="h1"
            style={{
              fontSize: "46px",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "20px",
            }}
          >
            partners participate in decisions and stay connected to outcomes.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "16px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
            {[
              "curated partner base rather than broad fundraising.",
              "target impact partner count: 1 to 5.",
              "deal-level consent within clear rules.",
              "quarterly reporting and an annual in-person review.",
              "optional site visits and project milestone participation.",
              "shared identity rooted in stewardship, not optics.",
              "culture fit matters as much as capital size.",
              "annual recommit, redeem, or resize election.",
              "every partner sees the same reporting spine and directive memo.",
              "prior deals are not restated when the member base changes.",
            ].map((bullet, i) => (
              <EditableText
                key={i}
                id={`collective-model:bullet-${i}`}
                as="div"
                style={{
                  fontSize: "24px",
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 400,
                  fontFamily: font,
                  lineHeight: 1.6,
                  textTransform: "lowercase",
                }}
              >
                {bullet}
              </EditableText>
            ))}
          </div>

          <EditableText
            id="collective-model:closing"
            as="div"
            style={{
              fontSize: "24px",
              color: theme.turquoise,
              fontWeight: 300,
              fontFamily: font,
              letterSpacing: "0.08em",
              textTransform: "lowercase",
            }}
          >
            a curated collective should feel selective, structured, and durable.
          </EditableText>
        </EditableEl>

        {/* Right Diagram - Participation Ladder */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0, padding: "0 16px" }}>
          {/* Ladder label */}
          <div style={{ marginBottom: 20, textAlign: "center" }}>
            <EditableText id="collective-model:ladder-title" as="div" style={{ fontSize: "24px", color: theme.turquoise, fontFamily: font, fontWeight: 300, letterSpacing: "0.18em", textTransform: "lowercase" }}>
              participation levels
            </EditableText>
          </div>

          {/* Rungs — rendered top (shaping) → bottom (informed) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", alignItems: "center" }}>
            {[...participationLevels].reverse().map((level, idx) => {
              const widths = ["58%", "72%", "86%", "100%"];
              const opacities = [0.55, 0.42, 0.30, 0.18];
              return (
                <EditableEl
                  key={level.index}
                  id={`collective-model:tile-${level.index}`}
                  label={`tile — ${level.label}`}
                  type="card"
                  style={{
                    width: widths[idx],
                    padding: "14px 20px",
                    background: "rgba(77,186,214,1)",
                    border: "1px solid rgba(77,186,214,0.35)",
                    borderRadius: 8,
                    textAlign: "center",
                    opacity: opacities[idx],
                  }}
                >
                  <EditableText
                    id={`collective-model:tile-label-${level.index}`}
                    as="div"
                    style={{ fontSize: "24px", color: "#fff", fontFamily: font, fontWeight: 400, textTransform: "lowercase", lineHeight: 1.2 }}
                  >
                    {level.label}
                  </EditableText>
                  <EditableText
                    id={`collective-model:tile-sublabel-${level.index}`}
                    as="div"
                    style={{ fontSize: "24px", color: "rgba(206,232,238,0.6)", fontFamily: font, fontWeight: 300, textTransform: "lowercase", marginTop: 4 }}
                  >
                    {level.sublabel}
                  </EditableText>
                </EditableEl>
              );
            })}
          </div>

          {/* Bottom label */}
          <div style={{ marginTop: 16, textAlign: "center" }}>
            <EditableText id="collective-model:ladder-footer" as="div" style={{ fontSize: "24px", color: "rgba(255,255,255,0.35)", fontFamily: font, fontWeight: 300, textTransform: "lowercase", fontStyle: "italic" }}>
              all partners receive base reporting
            </EditableText>
          </div>
        </div>
      </div>


    </div>
  );
}
