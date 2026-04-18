"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

const bulletVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.06, duration: 0.5 },
  }),
};

const dataBoxVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.08, duration: 0.5 },
  }),
};

export function LotusHousingProblemSlide() {
  const bullets = [
    "the u.s. is short 7.2 million affordable and available rental homes for extremely low-income renters.",
    "only 35 such homes exist for every 100 extremely low-income renter households.",
    "hud reports 8.46 million worst-case housing needs.",
    "renter cost burdens remain at record highs.",
  ];

  const dataBoxes = [
    { number: "7.2M", label: "affordable homes shortage" },
    { number: "35", label: "homes per 100 households" },
    { number: "8.46M", label: "worst-case housing needs" },
    { number: "record", label: "renter cost burden" },
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
        flexDirection: "column",
      }}
    >
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <img
          src="/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: 0.30 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.72) 0%, rgba(5,10,12,0.40) 45%, rgba(5,10,12,0.05) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      {/* Upper content (55%) */}
      <div
        style={{
          flex: "0 0 55%",
          paddingLeft: "64px",
          paddingRight: "64px",
          paddingTop: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* Eyebrow */}
        <EditableText
          id="housing-problem:eyebrow"
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
          why housing needs this
        </EditableText>

        {/* Headline */}
        <EditableText
          id="housing-problem:headline"
          as="h2"
          style={{
            fontSize: "clamp(28px, 3vw, 42px)",
            color: "#fff",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            fontFamily: font,
            lineHeight: 1.25,
            marginBottom: "24px",
            textTransform: "lowercase",
          }}
        >
          the shortage is structural. the numbers are clear.
        </EditableText>

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
                  id={`housing-problem:bullet-${i}`}
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
      </div>

      {/* Lower data scoreboard (45%) */}
      <div
        style={{
          flex: "0 0 45%",
          paddingLeft: "64px",
          paddingRight: "64px",
          paddingBottom: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Data boxes row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {dataBoxes.map((box, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={dataBoxVariants}
            >
              <div
                style={{
                  background: "rgba(77,186,214,0.06)",
                  border: "1px solid rgba(77,186,214,0.18)",
                  borderRadius: "4px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <EditableText
                  id={`housing-problem:number-${i}`}
                  as="div"
                  style={{
                    fontSize: "clamp(32px, 3.5vw, 52px)",
                    color: "#fff",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    fontFamily: font,
                    marginBottom: "12px",
                    textTransform: "lowercase",
                  }}
                >
                  {box.number}
                </EditableText>
                <EditableText
                  id={`housing-problem:label-${i}`}
                  as="p"
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    fontFamily: font,
                    margin: 0,
                    textTransform: "lowercase",
                  }}
                >
                  {box.label}
                </EditableText>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source line */}
        <EditableText
          id="housing-problem:source"
          as="p"
          style={{
            fontSize: "9px",
            color: "rgba(255,255,255,0.25)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            fontFamily: font,
            margin: 0,
            textAlign: "center",
            textTransform: "lowercase",
          }}
        >
          sources: nlihc, hud, harvard jchs. as of 2025 data releases.
        </EditableText>
      </div>

      <SlideFooter slideKey="housing-problem" slideNum="03" sectionLabel="problem" />
    </div>
  );
}
