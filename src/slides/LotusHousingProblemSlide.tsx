"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { EditableBgImage } from "@/components/EditableBgImage";

export function LotusHousingProblemSlide() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="housing-problem:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.25 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.55) 0%, rgba(5,10,12,0.20) 60%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      {/* Header */}
      <div
        style={{
          position: "relative",
          padding: "52px 64px 20px",
          flexShrink: 0,
        }}
      >
        <EditableText
          id="housing-problem:eyebrow"
          as="div"
          style={{
            fontSize: "10px",
            color: theme.turquoise,
            fontWeight: 300,
            letterSpacing: "0.28em",
            fontFamily: font,
            marginBottom: "10px",
            textTransform: "lowercase",
          }}
        >
          why housing needs this
        </EditableText>

        <EditableText
          id="housing-problem:headline"
          as="h2"
          style={{
            fontSize: "clamp(28px, 3vw, 44px)",
            color: "#fff",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            fontFamily: font,
            lineHeight: 1.2,
            textTransform: "lowercase",
          }}
        >
          every number is a neighbor.
        </EditableText>
      </div>

      {/* Infographic — hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          position: "relative",
          flex: 1,
          margin: "0 64px 72px",
          minHeight: 0,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 48px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src="/slides/why-housing-needs-this.png"
          alt="Every Number is a Neighbor — Workforce Housing Gap"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </motion.div>

      <SlideFooter slideKey="housing-problem" slideNum="03" sectionLabel="problem" />
    </div>
  );
}
