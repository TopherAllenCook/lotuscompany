"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { CapitalRecyclingLoop } from "@/components/diagrams/CapitalRecyclingLoop";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

export default function CapitalEngineSlide() {
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
          id="capital-engine:bg-photo"
          label="background photo"
          src="/republic/aerials/DJI_20250821112542_0507_D_0000.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <EditableEl id="capital-engine:card" label="glass card" type="card" style={{ flex: "0 0 50%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "36px 40px 36px 36px", background: "rgba(5,10,12,0.52)", backdropFilter: "blur(28px) saturate(200%)", WebkitBackdropFilter: "blur(28px) saturate(200%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)" }}>
          <EditableText
            id="capital-engine:eyebrow"
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
            how the capital engine works
          </EditableText>

          <EditableText
            id="capital-engine:headline"
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
            capital is advanced early, repaid at closing, and retained through gp economics.
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
              id="capital-engine:bullet-1"
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
              members fund predevelopment and acquisition advances.
            </EditableText>

            <EditableText
              id="capital-engine:bullet-2"
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
              projects move through application, award, and construction-close milestones.
            </EditableText>

            <EditableText
              id="capital-engine:bullet-3"
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
              the advance is repaid at the lihtc capital event.
            </EditableText>

            <EditableText
              id="capital-engine:bullet-4"
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
              gp or co-gp economics remain with the vehicle or assigned members.
            </EditableText>

            <EditableText
              id="capital-engine:bullet-5"
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
              repaid capital is redeployed into the next cohort.
            </EditableText>
          </div>
        </EditableEl>

        {/* Right Diagram */}
        <div style={{ flex: "0 0 50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CapitalRecyclingLoop width={460} height={280} />
        </div>
      </div>

      <SlideFooter slideKey="capital-engine" slideNum="07" sectionLabel="mechanism" />
    </div>
  );
}
