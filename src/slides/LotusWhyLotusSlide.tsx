"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { LotusTrustStack } from "@/components/diagrams/LotusTrustStack";

const bulletVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.06, duration: 0.5 },
  }),
};

export function LotusWhyLotusSlide() {
  const bullets = [
    "proven development capability, not a theoretical platform.",
    "deep underwriting discipline tied to real feasibility gates.",
    "relationships across agencies, lenders, syndicators, and local partners.",
    "pipeline control and local pattern recognition.",
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <StatusChip status="READY" />

      {/* Left content (55%) */}
      <div
        style={{
          flex: "0 0 55%",
          paddingLeft: "64px",
          paddingRight: "32px",
          paddingTop: "80px",
          paddingBottom: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Eyebrow */}
        <EditableText
          id="why-lotus:eyebrow"
          as="div"
          style={{
            fontSize: "10px",
            color: theme.turquoise,
            fontWeight: 300,
            letterSpacing: "0.2em",
            fontFamily: font,
            marginBottom: "16px",
            textTransform: "lowercase",
          }}
        >
          why lotus
        </EditableText>

        {/* Headline */}
        <EditableText
          id="why-lotus:headline"
          as="h2"
          style={{
            fontSize: "clamp(28px, 3vw, 44px)",
            color: "#fff",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            fontFamily: font,
            lineHeight: 1.25,
            marginBottom: "20px",
            textTransform: "lowercase",
          }}
        >
          the model only works if the operator is trusted to execute.
        </EditableText>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            background: "rgba(77,186,214,0.18)",
            marginBottom: "24px",
          }}
        />

        {/* Bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
          {bullets.map((bullet, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={bulletVariants}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: theme.turquoise,
                    marginTop: "6px",
                    flexShrink: 0,
                  }}
                />
                <EditableText
                  id={`why-lotus:bullet-${i}`}
                  as="p"
                  style={{
                    fontSize: "15px",
                    color: theme.lightBlue,
                    fontWeight: 300,
                    letterSpacing: "0.04em",
                    fontFamily: font,
                    lineHeight: 1.7,
                    margin: 0,
                    textTransform: "lowercase",
                  }}
                >
                  {bullet}
                </EditableText>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <EditableText
          id="why-lotus:tagline"
          as="p"
          style={{
            fontSize: "12px",
            color: "rgba(77,186,214,0.8)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            fontFamily: font,
            margin: 0,
            textTransform: "lowercase",
          }}
        >
          the lotus way is an operating standard, not a branding slogan.
        </EditableText>
      </div>

      {/* Right diagram (45%) */}
      <div
        style={{
          flex: "0 0 45%",
          paddingRight: "64px",
          paddingTop: "80px",
          paddingBottom: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <LotusTrustStack width={340} height={320} />
        </motion.div>
      </div>

      <SlideFooter slideKey="why-lotus" slideNum="05" sectionLabel="trust" />
    </div>
  );
}
