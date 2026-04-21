"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const BULLETS = [
  { id: "1", text: "allocation percentages are fixed at deal approval, capturing membership composition and capital commitments at that point." },
  { id: "2", text: "future membership changes do not retroactively affect previously approved deal allocations." },
  { id: "3", text: "each deal stands independently with its own snapshot, ensuring predictable member economics." },
  { id: "4", text: "this structure delivers institutional transparency, removes allocation disputes, and enables clear participation tracking." },
];

const STATS = [
  { number: "15%+",    label: "target irr",       sub: "over 15 to 18 year hold period" },
  { number: "2 to 3×", label: "equity multiple",  sub: "on invested capital" },
  { number: "5 to 19%", label: "gp membership",   sub: "class b ownership in the deal alongside lotus" },
];

export default function MembershipSlide() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: theme.darkBg }}>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="membership:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.42 }}
        />
        {/* Heavier left-side vignette for text contrast */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(5,10,12,0.78) 0%, rgba(5,10,12,0.48) 55%, rgba(5,10,12,0.22) 100%)" }} />
      </div>

      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "52px 64px 68px", gap: 36 }}>

        {/* ── Left: policy card ── */}
        <EditableEl id="membership:card" label="glass card" type="card" style={{
          flex: "0 0 44%",
          display: "flex",
          flexDirection: "column",
          padding: "34px 38px",
          background: "rgba(5,10,12,0.62)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.11)",
          boxShadow: "0 12px 48px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.09)",
        }}>

          {/* Eyebrow */}
          <EditableText
            id="membership:eyebrow"
            as="div"
            style={{
              fontSize: "11px",
              color: theme.turquoise,
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              fontFamily: font,
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            membership model
          </EditableText>

          {/* Headline */}
          <EditableText
            id="membership:headline"
            as="h1"
            style={{
              fontSize: "28px",
              color: "#ffffff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.28,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "20px",
            }}
          >
            impact partners collectively share in the gp alongside lotus.
          </EditableText>

          <div style={{ height: "1px", background: "rgba(77,186,214,0.22)", marginBottom: "20px" }} />

          {/* Numbered bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
            {BULLETS.map((b, i) => (
              <div key={b.id} style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}>
                {/* Numbered badge */}
                <div style={{
                  flexShrink: 0,
                  width: "21px",
                  height: "21px",
                  borderRadius: "50%",
                  background: "rgba(77,186,214,0.13)",
                  border: "1px solid rgba(77,186,214,0.38)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                }}>
                  <span style={{ fontSize: "10px", color: theme.turquoise, fontFamily: font, fontWeight: 600, lineHeight: 1 }}>
                    {i + 1}
                  </span>
                </div>
                <EditableText
                  id={`membership:bullet-${b.id}`}
                  as="div"
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    fontWeight: 400,
                    fontFamily: font,
                    lineHeight: 1.62,
                    textTransform: "lowercase",
                  }}
                >
                  {b.text}
                </EditableText>
              </div>
            ))}
          </div>

          {/* Footer rule + closing */}
          <div style={{ height: "1px", background: "rgba(77,186,214,0.14)", marginTop: "20px", marginBottom: "14px" }} />
          <EditableText
            id="membership:closing"
            as="div"
            style={{
              fontSize: "13px",
              color: theme.turquoise,
              fontWeight: 400,
              fontFamily: font,
              letterSpacing: "0.08em",
              textTransform: "lowercase",
            }}
          >
            the right fit matters more than the largest check.
          </EditableText>
        </EditableEl>

        {/* ── Right: stat cards ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "11px" }}>

          {/* Section label + rule */}
          <div style={{ marginBottom: "6px" }}>
            <EditableText
              id="membership:stats-eyebrow"
              as="div"
              style={{
                fontSize: "11px",
                color: theme.turquoise,
                fontFamily: font,
                fontWeight: 500,
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              target returns
            </EditableText>
            <div style={{ height: "1px", background: "rgba(77,186,214,0.20)" }} />
          </div>

          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 + i * 0.10, duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <EditableEl
                id={`membership:stat-${i}`}
                label={`stat — ${stat.label}`}
                type="card"
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  background: "rgba(5,10,12,0.52)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  borderRadius: "13px",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.30)",
                  overflow: "hidden",
                }}
              >
                {/* Gradient accent stripe */}
                <div style={{
                  width: "3px",
                  flexShrink: 0,
                  background: `linear-gradient(180deg, ${theme.turquoise} 0%, rgba(77,186,214,0.25) 100%)`,
                }} />

                {/* Number */}
                <div style={{
                  padding: "18px 20px",
                  minWidth: "154px",
                  flexShrink: 0,
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <EditableText
                    id={`membership:stat-number-${i}`}
                    as="div"
                    style={{
                      fontSize: "42px",
                      color: "#ffffff",
                      fontWeight: 300,
                      letterSpacing: "-0.03em",
                      fontFamily: font,
                      lineHeight: 1,
                      textTransform: "lowercase",
                    }}
                  >
                    {stat.number}
                  </EditableText>
                </div>

                {/* Label + sub */}
                <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
                  <EditableText
                    id={`membership:stat-label-${i}`}
                    as="div"
                    style={{
                      fontSize: "12px",
                      color: theme.turquoise,
                      fontWeight: 500,
                      letterSpacing: "0.24em",
                      fontFamily: font,
                      textTransform: "uppercase",
                      lineHeight: 1,
                    }}
                  >
                    {stat.label}
                  </EditableText>
                  <EditableText
                    id={`membership:stat-sub-${i}`}
                    as="div"
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      fontWeight: 300,
                      fontFamily: font,
                      textTransform: "lowercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.sub}
                  </EditableText>
                </div>
              </EditableEl>
            </motion.div>
          ))}

          {/* Disclaimer */}
          <div style={{ marginTop: "4px" }}>
            <EditableText
              id="membership:footnote"
              as="div"
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.60)",
                fontFamily: font,
                fontWeight: 300,
                letterSpacing: "0.06em",
                textTransform: "lowercase",
                lineHeight: 1.55,
              }}
            >
              projections are illustrative and not guaranteed. past performance does not indicate future results.
            </EditableText>
          </div>
        </div>

      </div>
    </div>
  );
}
