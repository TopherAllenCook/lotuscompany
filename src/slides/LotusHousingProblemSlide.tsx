"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableBgImage } from "@/components/EditableBgImage";

export function LotusHousingProblemSlide() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#e8e0d4",
        fontFamily: font,
      }}
    >
      {/* Full-bleed background photo */}
      <div style={{ position: "absolute", inset: 0 }}>
        <EditableBgImage
          id="housing-problem:bg-photo"
          label="background photo"
          src="/nova/Commercial 2025-07-07 Lotus-Nova-3.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
        />
      </div>

      {/* Warm white overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(245,240,232,0.62)",
          pointerEvents: "none",
        }}
      />

      {/* Top-left title block */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55 }}
        style={{
          position: "absolute",
          top: 52,
          left: 64,
        }}
      >
        <EditableText
          id="housing-problem:title"
          as="div"
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#0d2028",
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
          id="housing-problem:subtitle"
          as="div"
          style={{
            fontSize: "10px",
            fontWeight: 400,
            color: "#0d2028",
            fontFamily: font,
            letterSpacing: "0.22em",
            textTransform: "lowercase",
            lineHeight: 1,
            marginBottom: "12px",
          }}
        >
          lotus impact initiative
        </EditableText>
        {/* Turquoise rule */}
        <div
          style={{
            height: "1px",
            width: "52px",
            background: theme.turquoise,
          }}
        />
      </motion.div>

      {/* Center hero block */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 120px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65 }}
        >
          <EditableText
            id="housing-problem:hero"
            as="h1"
            style={{
              fontSize: "clamp(36px, 4.8vw, 68px)",
              fontWeight: 700,
              color: "#0d2028",
              fontFamily: font,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              lineHeight: 1.15,
              margin: "0 0 36px",
            }}
          >
            access to dignified housing<br />
            should not be out of reach.
          </EditableText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.6 }}
        >
          <EditableText
            id="housing-problem:body"
            as="p"
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(13,32,40,0.70)",
              fontFamily: font,
              letterSpacing: "0.02em",
              textTransform: "lowercase",
              lineHeight: 1.95,
              margin: 0,
              maxWidth: "42ch",
            }}
          >
            the u.s. is short 7.2 million affordable homes
            for the families who keep our cities running.
            lotus exists to close that gap with discipline,
            beauty, and measurable outcomes for residents.
          </EditableText>
        </motion.div>
      </div>

      {/* Lotus mark — lower right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: 40,
          right: 56,
        }}
      >
        <img
          src="/Lotus_Master_Logo.png"
          alt="Lotus"
          style={{ width: "80px", opacity: 0.55 }}
        />
      </motion.div>
    </div>
  );
}
