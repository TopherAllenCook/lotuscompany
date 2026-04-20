"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";


import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const cardVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.35 + i * 0.1, duration: 0.5 },
  }),
};

const bulletVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.06, duration: 0.5 },
  }),
};

const PERSONAS = [
  {
    initial: "M",
    name: "maya, 32",
    role: "home health aide",
    stat: "7.2M",
    descriptor: "homes short for working families",
  },
  {
    initial: "L",
    name: "letty, 41",
    role: "grocery cashier",
    stat: "1 in 2",
    descriptor: "renter households are cost burdened",
  },
  {
    initial: "M",
    name: "marcus, 29",
    role: "warehouse worker",
    stat: "8.46M",
    descriptor: "households with worst-case needs",
  },
];

export function LotusHousingProblemSlide() {
  const bullets = [
    "access to dignified housing should not be out of reach.",
    "the u.s. is short 7.2 million affordable homes for extremely low-income renters.",
    "only 35 such homes exist for every 100 households that need one.",
    "median rents have outpaced wages in 44 of the 50 largest u.s. metros.",
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



      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>

        {/* Left — glass card */}
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
          <EditableText
            id="housing-problem:eyebrow"
            as="div"
            style={{
              fontSize: "20px",
              color: theme.turquoise,
              fontWeight: 300,
              letterSpacing: "0.28em",
              fontFamily: font,
              marginBottom: "10px",
              textTransform: "lowercase",
            }}
          >
            the why
          </EditableText>

          <EditableText
            id="housing-problem:headline"
            as="h2"
            style={{
              fontSize: "38px",
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

          <div style={{ height: "1px", background: "rgba(77,186,214,0.18)", marginBottom: "24px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {bullets.map((bullet, i) => (
              <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={bulletVariants}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: theme.turquoise, marginTop: "6px", flexShrink: 0 }} />
                  <EditableText
                    id={`housing-problem:bullet-${i}`}
                    as="p"
                    style={{ fontSize: "20px", color: "rgba(255,255,255,0.88)", fontWeight: 400, letterSpacing: "0.04em", fontFamily: font, lineHeight: 1.65, margin: 0, textTransform: "lowercase" }}
                  >
                    {bullet}
                  </EditableText>
                </div>
              </motion.div>
            ))}
          </div>

          <EditableText
            id="housing-problem:source"
            as="p"
            style={{ fontSize: "20px", color: "rgba(255,255,255,0.35)", fontWeight: 300, letterSpacing: "0.06em", fontFamily: font, margin: "24px 0 0", textTransform: "lowercase" }}
          >
            sources: nlihc, hud, harvard jchs. 2025.
          </EditableText>
        </EditableEl>

        {/* Right — persona cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", height: "100%" }}>
          {PERSONAS.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              style={{ flex: 1 }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  padding: "24px 28px",
                  background: "rgba(5,10,12,0.52)",
                  backdropFilter: "blur(28px) saturate(200%)",
                  WebkitBackdropFilter: "blur(28px) saturate(200%)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: `2px solid ${theme.turquoise}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: "rgba(77,186,214,0.08)",
                  }}
                >
                  <span style={{ fontSize: "28px", color: theme.turquoise, fontFamily: font, fontWeight: 300 }}>
                    {p.initial}
                  </span>
                </div>

                {/* Name + role */}
                <div style={{ flex: "0 0 140px" }}>
                  <div style={{ fontSize: "20px", color: "#fff", fontFamily: font, fontWeight: 400, textTransform: "lowercase", lineHeight: 1.3 }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.5)", fontFamily: font, fontWeight: 300, textTransform: "lowercase", marginTop: "3px", letterSpacing: "0.04em" }}>
                    {p.role}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ width: "1px", height: "40px", background: "rgba(77,186,214,0.18)", flexShrink: 0 }} />

                {/* Stat */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "38px", color: theme.turquoise, fontFamily: font, fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {p.stat}
                  </div>
                  <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)", fontFamily: font, fontWeight: 300, textTransform: "lowercase", marginTop: "6px", lineHeight: 1.4 }}>
                    {p.descriptor}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>


    </div>
  );
}
