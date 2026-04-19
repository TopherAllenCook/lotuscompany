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

export function LotusHousingProblemSlide() {
  const bullets = [
    "7.2 million affordable homes are missing for extremely low-income renters.",
    "only 35 such homes exist for every 100 households that need one.",
    "median rents have outpaced wages in 44 of the 50 largest u.s. metros.",
    "hud reports 8.46 million worst-case housing needs — a record.",
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
          id="housing-problem:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
        {/* Left content */}
        <EditableEl id="housing-problem:card" label="glass card" type="card"
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

          {/* Headline */}
          <EditableText
            id="housing-problem:headline"
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
            every number is a neighbor.
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
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
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

          {/* Source */}
          <EditableText
            id="housing-problem:source"
            as="p"
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 300,
              letterSpacing: "0.06em",
              fontFamily: font,
              margin: "28px 0 0",
              textTransform: "lowercase",
            }}
          >
            sources: nlihc, hud, harvard jchs. as of 2025 data releases.
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
            <img
              src="/slides/why-housing-needs-this.png"
              alt="Every Number is a Neighbor — Workforce Housing Gap"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }}
            />
          </motion.div>
        </div>
      </div>

      <SlideFooter slideKey="housing-problem" slideNum="03" sectionLabel="problem" />
    </div>
  );
}
