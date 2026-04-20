"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";



const PILLARS = [
  {
    title: "lotus led private capital collective",
    body: "investors partner directly with the team deploying the capital.",
  },
  {
    title: "recyclable capital for scalable housing impact",
    body: "capital deploys, returns through low-income housing tax credit equity, and redeploys into the next community.",
  },
  {
    title: "direct participation, disciplined stewardship, measurable outcomes",
    body: "partners retain ownership and cash flow in every asset, measured by both return and community result.",
  },
];

export function LotusWhyLotusSlide() {
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


      {/* Top-left title block */}
      <div style={{ position: "absolute", top: 48, left: 64 }}>
        <EditableText
          id="why-lotus:title"
          as="div"
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#fff",
            fontFamily: font,
            letterSpacing: "0.01em",
            textTransform: "lowercase",
            lineHeight: 1,
            marginBottom: "6px",
          }}
        >
          the why
        </EditableText>
        <EditableText
          id="why-lotus:subtitle"
          as="div"
          style={{
            fontSize: "20px",
            fontWeight: 400,
            color: theme.turquoise,
            fontFamily: font,
            letterSpacing: "0.22em",
            textTransform: "lowercase",
            lineHeight: 1,
          }}
        >
          lotus impact initiative
        </EditableText>
      </div>

      {/* Main content column */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "96px 88px 72px",
          gap: 0,
        }}
      >
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "18px" }}
        >
          <EditableText
            id="why-lotus:hero"
            as="h1"
            style={{
              fontSize: "38px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: font,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            access to dignified housing should not be out of reach.
          </EditableText>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "22px" }}
        >
          <EditableText
            id="why-lotus:body"
            as="p"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.72)",
              fontFamily: font,
              letterSpacing: "0.02em",
              textTransform: "lowercase",
              lineHeight: 1.9,
              margin: 0,
              maxWidth: "58ch",
            }}
          >
            we build homes with intention, for the families who deserve them.
            every development is more than a building. it is a sanctuary, and a
            platform where capital, community, and care compound together.
          </EditableText>
        </motion.div>

        {/* Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "28px" }}
        >
          <div style={{ height: "1px", width: "40px", background: theme.turquoise, margin: "0 auto 14px" }} />
          <EditableText
            id="why-lotus:differentiator"
            as="p"
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#fff",
              fontFamily: font,
              letterSpacing: "0.01em",
              textTransform: "lowercase",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: "54ch",
            }}
          >
            not philanthropy. not a traditional fund. a disciplined system for
            scaling impact, one investment across many communities.
          </EditableText>
        </motion.div>

        {/* Pillar cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 + i * 0.1, duration: 0.5 }}
            >
              <div
                style={{
                  padding: "20px 22px",
                  background: "rgba(5,10,12,0.52)",
                  backdropFilter: "blur(28px) saturate(200%)",
                  WebkitBackdropFilter: "blur(28px) saturate(200%)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ width: "24px", height: "1px", background: theme.turquoise, marginBottom: "10px" }} />
                <EditableText
                  id={`why-lotus:pillar-${i}-title`}
                  as="div"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#fff",
                    fontFamily: font,
                    letterSpacing: "0.02em",
                    textTransform: "lowercase",
                    lineHeight: 1.4,
                    marginBottom: "8px",
                  }}
                >
                  {p.title}
                </EditableText>
                <EditableText
                  id={`why-lotus:pillar-${i}-body`}
                  as="p"
                  style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.58)",
                    fontFamily: font,
                    letterSpacing: "0.02em",
                    textTransform: "lowercase",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {p.body}
                </EditableText>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <EditableText
            id="why-lotus:closing"
            as="p"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "rgba(77,186,214,0.7)",
              fontFamily: font,
              letterSpacing: "0.12em",
              textTransform: "lowercase",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            attractive risk-adjusted returns alongside sustained community outcomes.
          </EditableText>
        </motion.div>
      </div>


    </div>
  );
}
