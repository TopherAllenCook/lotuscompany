"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { LotusTrustStack } from "@/components/diagrams/LotusTrustStack";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

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
    "track record: proven development capability, not a theoretical platform.",
    "underwriting discipline: deep underwriting tied to real feasibility gates.",
    "relationships: long-standing trust across agencies, lenders, syndicators, and local partners.",
    "pipeline control: active pipeline and local pattern recognition.",
    "cultural alignment: the lotus way is an operating standard, not a branding slogan.",
  ];

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
          id="why-lotus:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
      {/* Left content */}
      <EditableEl id="why-lotus:card" label="glass card" type="card"
        style={{
          flex: "0 0 46%",
          display: "flex",
          flexDirection: "column",
          padding: "44px 48px",
          background: "rgba(5,10,12,0.52)",
          backdropFilter: "blur(28px) saturate(200%)",
          WebkitBackdropFilter: "blur(28px) saturate(200%)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
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
            letterSpacing: "0.28em",
            fontFamily: font,
            marginBottom: "10px",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
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
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 400,
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
            fontSize: "13px",
            color: "rgba(77,186,214,0.8)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            fontFamily: font,
            margin: 0,
            textTransform: "lowercase",
          }}
        >
          lotus brings operator discipline to a structural housing problem.
        </EditableText>
      </EditableEl>

      {/* Right diagram */}
      <div
        style={{
          flex: 1,
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
      </div>

      <SlideFooter slideKey="why-lotus" slideNum="05" sectionLabel="trust" />
    </div>
  );
}
