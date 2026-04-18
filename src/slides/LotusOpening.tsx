"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

export function LotusOpening() {
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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background photo — muted aerial */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <img
          src="/republic/aerials/DJI_20250821112542_0507_D_0000.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 60%",
            opacity: 0.07,
          }}
        />
      </div>

      {/* Background radial gradient glow */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(77,186,214,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <StatusChip status="READY" />

      {/* Content container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "900px",
          paddingLeft: "64px",
          paddingRight: "64px",
        }}
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <EditableText
            id="lotus-opening:headline"
            as="h1"
            style={{
              fontSize: "clamp(48px, 5.5vw, 80px)",
              fontWeight: 300,
              color: "#fff",
              letterSpacing: "-0.025em",
              fontFamily: font,
              margin: "0 0 20px 0",
              lineHeight: 1.1,
              textTransform: "lowercase",
            }}
          >
            lotus impact initiative
          </EditableText>
        </motion.div>

        {/* Rule */}
        <div
          style={{
            width: "240px",
            height: "1px",
            background: "#4dbad6",
            margin: "20px auto",
          }}
        />

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <EditableText
            id="lotus-opening:subheading"
            as="p"
            style={{
              fontSize: "16px",
              color: theme.lightBlue,
              fontWeight: 300,
              letterSpacing: "0.12em",
              fontFamily: font,
              margin: "0 0 32px 0",
              textTransform: "lowercase",
            }}
          >
            a lotus-led private capital collective
          </EditableText>
        </motion.div>

        {/* Three-line description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
            marginTop: "32px",
          }}
        >
          <EditableText
            id="lotus-opening:desc-1"
            as="p"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 300,
              letterSpacing: "0.06em",
              fontFamily: font,
              margin: 0,
              textTransform: "lowercase",
            }}
          >
            built by lotus, for a small circle of partners
          </EditableText>
          <EditableText
            id="lotus-opening:desc-2"
            as="p"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 300,
              letterSpacing: "0.06em",
              fontFamily: font,
              margin: 0,
              textTransform: "lowercase",
            }}
          >
            recyclable capital for scalable housing impact
          </EditableText>
          <EditableText
            id="lotus-opening:desc-3"
            as="p"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 300,
              letterSpacing: "0.06em",
              fontFamily: font,
              margin: 0,
              textTransform: "lowercase",
            }}
          >
            direct participation, disciplined stewardship, measurable outcomes
          </EditableText>
        </div>
      </div>

      {/* Bottom-left watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "64px",
        }}
      >
        <EditableText
          id="lotus-opening:watermark"
          as="span"
          style={{
            fontSize: "11px",
            color: theme.turquoise,
            fontWeight: 300,
            letterSpacing: "0.1em",
            fontFamily: font,
            textTransform: "lowercase",
          }}
        >
          lotus
        </EditableText>
      </div>

      <SlideFooter slideKey="lotus-opening" slideNum="01" sectionLabel="opening" />
    </div>
  );
}
