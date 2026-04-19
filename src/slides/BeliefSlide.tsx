"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

export function BeliefSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fff", fontFamily: font, overflow: "hidden" }}>

      {/* ── UPPER 65%: photo ── */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "65%" }}>

        {/* Ken-burns photo */}
        <motion.img
          src="/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"
          alt=""
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 14, ease: "linear" }}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "50% 40%",
          }}
        />

        {/* Soft top-left darkening */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.22) 45%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* /lotus — top left */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ position: "absolute", top: 32, left: 52 }}
        >
          <EditableText id="belief:lotus-tag" label="/lotus tag" as="span" style={{
            fontSize: 11, fontWeight: 400, color: "#fff",
            letterSpacing: "0.32em", textTransform: "lowercase",
          }}>
            /lotus
          </EditableText>
        </motion.span>

        {/* 02 — top right */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ position: "absolute", top: 32, right: 52 }}
        >
          <EditableText id="belief:slide-num" label="slide number" as="span" style={{
            fontSize: 11, fontWeight: 400, color: "#fff",
            letterSpacing: "0.32em",
          }}>
            02
          </EditableText>
        </motion.span>

        {/* Headline */}
        <div style={{ position: "absolute", top: 58, left: 0, right: 0, padding: "0 52px" }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: EASE_OUT }}
            style={{ marginBottom: 4 }}
          >
            <EditableText id="belief:headline-1" label="headline line 1" as="div" style={{
              fontSize: "38px",
              fontWeight: 300, color: "#fff",
              letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.0,
            }}>
              mindfully creating
            </EditableText>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5, ease: EASE_OUT }}
          >
            <EditableText id="belief:headline-2" label="headline line 2" as="div" style={{
              fontSize: "38px",
              fontWeight: 300, color: "#fff",
              letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.0,
            }}>
              beautiful affordable housing
            </EditableText>
          </motion.div>
        </div>
      </div>

      {/* ── LOWER 45%: white ── */}
      <div style={{
        position: "absolute",
        top: "65%", left: 0, right: 0, bottom: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 52px",
        gap: 36,
      }}>

        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.5 }}
          style={{ flex: 1.4 }}
        >
          <EditableText id="belief:col1-header" label="col 1 header — the initiative" as="p" style={{
            margin: "0 0 8px",
            fontSize: "20px",
            fontWeight: 600, color: theme.turquoise,
            letterSpacing: "0.18em", textTransform: "lowercase",
          }}>
            the initiative
          </EditableText>
          <EditableText id="belief:col1-body" label="col 1 body" as="p" style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: 400, color: "#424242",
            letterSpacing: "0.02em", textTransform: "lowercase",
            lineHeight: 1.7,
          }}>
            the lotus impact initiative invests in dignified, attainable
            housing built to a single standard — market-rate and affordable
            alike. on-site lotus impact hubs carry that standard into daily
            life with childcare, tutoring, and enriching services for residents.
          </EditableText>
        </motion.div>

        <Divider delay={0.9} id="belief:divider-0" />

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          style={{ flex: 1.4 }}
        >
          <EditableText id="belief:col2-header" label="col 2 header — the structure" as="p" style={{
            margin: "0 0 8px",
            fontSize: "20px",
            fontWeight: 600, color: theme.turquoise,
            letterSpacing: "0.18em", textTransform: "lowercase",
          }}>
            the structure
          </EditableText>
          <EditableText id="belief:col2-body" label="col 2 body" as="p" style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: 400, color: "#424242",
            letterSpacing: "0.02em", textTransform: "lowercase",
            lineHeight: 1.7,
          }}>
            the initiative vehicle finances early-stage costs, providing
            secured capital in the funding phase that sets each project in
            motion. after repayment from tax credit investor equity, partners
            secure membership interest — aligning cash flow and equity upside
            with long-term social impact.
          </EditableText>
        </motion.div>

        <Divider delay={1.0} id="belief:divider-1" />

        {/* Column 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          style={{ flex: 0.9, display: "flex", alignItems: "flex-start", gap: 10 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ delay: 1.3, duration: 0.35 }}
            style={{ flexShrink: 0, marginTop: 5 }}
          >
            <EditableEl id="belief:kicker-dot" label="kicker dot" type="dot" style={{ width: 6, height: 6, borderRadius: "50%", background: theme.turquoise }} />
          </motion.div>
          <EditableText id="belief:kicker" label="kicker" as="p" style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: 400, color: "#028faa",
            letterSpacing: "0.03em", textTransform: "lowercase",
            lineHeight: 1.65,
          }}>
            this is more than impact investing.<br />
            this is legacy building.
          </EditableText>
        </motion.div>

      </div>
    </div>
  );
}

function Divider({ delay, id }: { delay: number; id: string }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay, duration: 0.4, ease: EASE_OUT }}
      style={{ transformOrigin: "top", flexShrink: 0 }}
    >
      <EditableEl id={id} label="column divider" type="bar" style={{ width: 1, height: 72, background: "rgba(66,66,66,0.15)" }} />
    </motion.div>
  );
}
