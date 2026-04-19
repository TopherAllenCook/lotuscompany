"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

export default function DualDirectivesSlide() {
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
          id="dual-directives:bg-photo"
          label="background photo"
          src="/nova/Commercial 2025-07-07 Lotus-Nova-3.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
        {/* Left Content */}
        <EditableEl id="dual-directives:card" label="glass card" type="card" style={{ flex: "0 0 46%", display: "flex", flexDirection: "column", padding: "44px 48px", background: "rgba(5,10,12,0.52)", backdropFilter: "blur(28px) saturate(200%)", WebkitBackdropFilter: "blur(28px) saturate(200%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)" }}>
          <EditableText
            id="dual-directives:eyebrow"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "10px",
            }}
          >
            dual directives
          </EditableText>

          <EditableText
            id="dual-directives:headline"
            as="h1"
            style={{
              fontSize: "clamp(24px, 2.6vw, 40px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "20px",
            }}
          >
            disciplined investment. evolving impact.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <EditableText
              id="dual-directives:bullet-1"
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
              the investment directive is fixed for the year and defines target returns, risk limits, and recycling rules.
            </EditableText>

            <EditableText
              id="dual-directives:bullet-2"
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
              the impact directive evolves annually and defines units, affordability depth, and service priorities.
            </EditableText>

            <EditableText
              id="dual-directives:bullet-3"
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
              impact can scale with capital, but only inside explicit guardrails.
            </EditableText>

            <EditableText
              id="dual-directives:bullet-4"
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
              the annual directive reset updates both without destabilizing the platform.
            </EditableText>
          </div>
        </EditableEl>

        {/* Right Diagram */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src="/slides/dual-directive-impact-initiative.png"
            alt="Lotus Impact Initiative — Dual Directives"
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }}
          />
        </div>
      </div>

      <SlideFooter slideKey="dual-directives" slideNum="10" sectionLabel="governance" />
    </div>
  );
}
