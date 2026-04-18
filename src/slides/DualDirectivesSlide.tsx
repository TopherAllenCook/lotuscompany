"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { DualDirectiveFramework } from "@/components/diagrams/DualDirectiveFramework";

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
      <StatusChip status="READY" />

      <div style={{ display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <div style={{ flex: "0 0 50%", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "40px" }}>
          <EditableText
            id="dual-directives:eyebrow"
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
            dual directives
          </EditableText>

          <EditableText
            id="dual-directives:headline"
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
            disciplined investment. evolving impact.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <EditableText
              id="dual-directives:bullet-1"
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
              the investment directive is fixed for the year and defines target returns, risk limits, and recycling rules.
            </EditableText>

            <EditableText
              id="dual-directives:bullet-2"
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
              the impact directive evolves annually and defines units, affordability depth, and service priorities.
            </EditableText>

            <EditableText
              id="dual-directives:bullet-3"
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
              impact can scale with capital, but only inside explicit guardrails.
            </EditableText>

            <EditableText
              id="dual-directives:bullet-4"
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
              the annual directive reset updates both without destabilizing the platform.
            </EditableText>
          </div>
        </div>

        {/* Right Diagram */}
        <div style={{ flex: "0 0 50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DualDirectiveFramework width={480} height={340} />
        </div>
      </div>

      <SlideFooter slideKey="dual-directives" slideNum="10" sectionLabel="governance" />
    </div>
  );
}
