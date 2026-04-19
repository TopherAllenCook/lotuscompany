"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
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

export function LotusMandateSlide() {
  const bullets = [
    "capital is deployed where projects are most fragile and most catalytic.",
    "the same capital base is recycled into multiple developments.",
    "partners stay close to the work rather than becoming passive lps.",
    "the goal is durable housing creation with disciplined stewardship.",
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
          id="mandate:bg-photo"
          label="background photo"
          src="/republic/aerials/DJI_20250821112542_0507_D_0000.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
      {/* Left content */}
      <EditableEl id="mandate:card" label="glass card" type="card"
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
          id="mandate:eyebrow"
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
          the mandate
        </EditableText>

        {/* Headline */}
        <EditableText
          id="mandate:headline"
          as="h2"
          style={{
            fontSize: "clamp(30px, 3.2vw, 46px)",
            color: "#fff",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            fontFamily: font,
            lineHeight: 1.25,
            marginBottom: "20px",
            textTransform: "lowercase",
          }}
        >
          a small group can move real housing from concept to construction.
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
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                  id={`mandate:bullet-${i}`}
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
          <img
            src="/slides/mission-driven-investment.png"
            alt="Mission Driven Investment and Reinvestment — The Capital Cycle"
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }}
          />
        </motion.div>
      </div>
      </div>

      <SlideFooter slideKey="mandate" slideNum="02" sectionLabel="mission" />
    </div>
  );
}
