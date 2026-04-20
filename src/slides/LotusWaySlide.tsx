"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const lift = (delay: number) => ({
  initial:   { opacity: 0, y: 10 },
  animate:   { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE_OUT },
});

const CRITERIA = [
  "How does the project location exemplify the Lotus Way in its criteria for selection?",
  "How does the project design align with the resident needs and demographics the project is built for?",
  "How does this project establish an elevated market precedence for the quality of affordable housing?",
  "What specific site, exterior and interior design decisions were made that exemplify this standard?",
  "What cost controlling factors or financial tools were utilized to ensure we delivered the highest standard achievable?",
];

export function LotusWaySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", fontFamily: font, overflow: "hidden" }}>

      {/* Full-bleed image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 14, ease: "linear" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }}
      />

      {/* Gradient — heavier to support dense text */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(5,10,12,0.98) 0%, rgba(5,10,12,0.88) 45%, rgba(5,10,12,0.55) 75%, rgba(5,10,12,0.20) 100%)",
      }} />

      {/* Top bar */}
      <motion.div {...lift(0)} style={{ position: "absolute", top: 56, left: 72 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div {...lift(0.1)} style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)" }}>
        <EditableText id="lotus-way:slide-num" as="span" style={{ fontSize: 14, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
          06 / steelton village
        </EditableText>
      </motion.div>

      {/* Main card */}
      <EditableEl id="lotus-way:card" label="glass card" type="card" style={{
        position: "absolute", top: 118, bottom: 28, left: 64, right: 64,
        background: "rgba(5,10,12,0.62)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
        padding: "26px 36px 24px",
        overflow: "hidden",
      }}>

        {/* Eyebrow */}
        <motion.div {...lift(0.2)} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <EditableEl id="lotus-way:rule-left" label="eyebrow rule left" type="bar" style={{ width: 36, height: 1.5, background: theme.turquoise, flexShrink: 0 }} />
          <EditableText id="lotus-way:eyebrow" as="span" style={{ fontSize: 12, fontWeight: 400, letterSpacing: "0.42em", color: theme.turquoise, textTransform: "lowercase", whiteSpace: "nowrap" }}>
            the lotus way
          </EditableText>
          <EditableEl id="lotus-way:rule-right" label="eyebrow rule right" type="bar" style={{ width: 36, height: 1.5, background: theme.turquoise, flexShrink: 0 }} />
          <EditableText id="lotus-way:org-label" as="span" style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", color: "rgba(206,232,238,0.28)", textTransform: "lowercase" }}>
            lotus impact initiative
          </EditableText>
        </motion.div>

        {/* Philosophy quote */}
        <motion.div {...lift(0.3)} style={{ marginBottom: 20 }}>
          <EditableText id="lotus-way:quote" as="p" style={{
            fontSize: 13.5, fontWeight: 300, color: "rgba(206,232,238,0.78)",
            letterSpacing: "0.04em", lineHeight: 1.55, fontStyle: "italic",
            borderLeft: `2px solid ${theme.turquoise}`, paddingLeft: 14, margin: 0,
          }}>
            We believe the psychology associated with the spaces we occupy defines the outcomes we achieve.
          </EditableText>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>

          {/* Left column */}
          <motion.div {...lift(0.4)} style={{ flex: "0 0 44%" }}>

            {/* Dignity first */}
            <div style={{ marginBottom: 14 }}>
              <EditableText id="lotus-way:dignity-label" as="div" style={{ fontSize: 11, fontWeight: 600, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginBottom: 4 }}>
                dignity first
              </EditableText>
              <EditableText id="lotus-way:dignity-body" as="div" style={{ fontSize: 11, fontWeight: 300, color: "rgba(206,232,238,0.62)", letterSpacing: "0.03em", lineHeight: 1.65 }}>
                Our developments are designed for livability, sustainability, and community well-being.
              </EditableText>
            </div>

            {/* Mindfully Creating */}
            <div style={{ marginBottom: 18 }}>
              <EditableText id="lotus-way:mindful-label" as="div" style={{ fontSize: 11, fontWeight: 600, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginBottom: 4 }}>
                mindfully creating
              </EditableText>
              <EditableText id="lotus-way:mindful-body" as="div" style={{ fontSize: 11, fontWeight: 300, color: "rgba(206,232,238,0.62)", letterSpacing: "0.03em", lineHeight: 1.65 }}>
                We deliver market-rate quality finishes, and thoughtful design that inspires pride of place, not stigma. Our developments raise the bar for what affordable housing should look and feel like.
              </EditableText>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(206,232,238,0.10)", marginBottom: 16 }} />

            {/* Lotus Ethos */}
            <div>
              <EditableText id="lotus-way:ethos-label" as="div" style={{ fontSize: 11, fontWeight: 600, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginBottom: 5 }}>
                lotus ethos
              </EditableText>
              <EditableText id="lotus-way:ethos-body" as="div" style={{ fontSize: 10.5, fontWeight: 300, color: "rgba(206,232,238,0.52)", letterSpacing: "0.03em", lineHeight: 1.7 }}>
                Achieving the results that represent the Lotus Way starts with alignment in the ethos we surround ourselves with. The alignment comes from how we present and frame our approach — the language we speak, employees we hire, markets and cities we select, investment partners we utilize, and third parties we rely upon. Impact is central to the conversation, and our core values always lead.
              </EditableText>
            </div>
          </motion.div>

          {/* Column divider */}
          <div style={{ width: 1, background: "rgba(206,232,238,0.10)", alignSelf: "stretch", flexShrink: 0 }} />

          {/* Right column */}
          <motion.div {...lift(0.5)} style={{ flex: 1 }}>
            <EditableText id="lotus-way:standard-header" as="div" style={{ fontSize: 11, fontWeight: 500, color: "rgba(206,232,238,0.80)", letterSpacing: "0.18em", textTransform: "lowercase", marginBottom: 12 }}>
              how do we uphold this standard?
            </EditableText>

            <EditableText id="lotus-way:qualification-label" as="div" style={{ fontSize: 11, fontWeight: 600, color: theme.turquoise, letterSpacing: "0.22em", textTransform: "lowercase", marginBottom: 10 }}>
              project qualification
            </EditableText>

            {CRITERIA.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 9 }}>
                <EditableText id={`lotus-way:q-num-${i}`} as="span" style={{ fontSize: 10.5, fontWeight: 500, color: theme.turquoise, letterSpacing: "0.08em", flexShrink: 0, paddingTop: 1 }}>
                  {i + 1}.
                </EditableText>
                <EditableText id={`lotus-way:q-${i}`} as="span" style={{ fontSize: 10.5, fontWeight: 300, color: "rgba(206,232,238,0.58)", letterSpacing: "0.03em", lineHeight: 1.65 }}>
                  {item}
                </EditableText>
              </div>
            ))}

            {/* Sub-note for item 5 */}
            <div style={{ paddingLeft: 18, marginTop: 2 }}>
              <EditableText id="lotus-way:q-sub" as="div" style={{ fontSize: 10, fontWeight: 300, color: "rgba(206,232,238,0.36)", letterSpacing: "0.03em", lineHeight: 1.65, fontStyle: "italic" }}>
                e.g. Competitive tax credit secured ensures project budget can be elevated to include heightened design standards.
              </EditableText>
            </div>
          </motion.div>
        </div>
      </EditableEl>
    </div>
  );
}
