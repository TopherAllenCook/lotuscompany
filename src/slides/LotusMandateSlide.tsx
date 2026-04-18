"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { CapitalRecyclingLoop } from "@/components/diagrams/CapitalRecyclingLoop";

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
    "capital is deployed at the point of highest fragility.",
    "the same capital base funds multiple developments over time.",
    "partners stay close to the work instead of becoming passive investors.",
    "dignified housing at scale, held to a luxury standard.",
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
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <img
          src="/republic/aerials/DJI_20250821112542_0507_D_0000.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.18 }}
        />
      </div>

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
          id="mandate:eyebrow"
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
          we move real homes from concept to construction.
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
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
          <CapitalRecyclingLoop width={420} height={260} />
        </motion.div>
      </div>

      <SlideFooter slideKey="mandate" slideNum="02" sectionLabel="mission" />
    </div>
  );
}
