"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const DARK_TQ  = "#028faa";
const TQ       = theme.turquoise;
const LB       = "#cee8ee";
const DARK     = "#424242";
const BODY     = "rgba(66,66,66,0.82)";

const CARD_BG     = "rgba(255,255,255,0.94)";
const CARD_BORDER = "rgba(255,255,255,0.5)";
const CARD_SHADOW = "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)";

const lift = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: EASE_OUT },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.5, ease: EASE_OUT },
});

// Floating stat — lives directly on the photo
function FloatStat({
  id, num, suffix, label, delay, align = "left",
}: {
  id: string; num: string; suffix?: string; label: string;
  delay: number; align?: "left" | "right";
}) {
  return (
    <motion.div {...lift(delay)} style={{ textAlign: align }}>
      <EditableText id={`exec-summary:stat-${id}`} as="div" style={{
        fontFamily: font, fontWeight: 700,
        fontSize: "clamp(28px, 3.8vw, 60px)",
        color: "#fff", lineHeight: 1,
        letterSpacing: "-0.025em", whiteSpace: "nowrap",
        textShadow: "0 2px 12px rgba(0,0,0,0.35)",
      }}>
        {num}
        {suffix && (
          <span style={{ fontSize: "clamp(18px, 2.4vw, 38px)", fontWeight: 500 }}>
            {suffix}
          </span>
        )}
      </EditableText>
      <EditableText id={`exec-summary:stat-label-${id}`} as="div" style={{
        fontFamily: font, fontWeight: 400,
        fontSize: "clamp(8px, 0.62vw, 10px)",
        color: "rgba(255,255,255,0.65)",
        letterSpacing: "0.18em", textTransform: "lowercase",
        marginTop: 4,
        textShadow: "0 1px 6px rgba(0,0,0,0.4)",
      }}>
        {label}
      </EditableText>
    </motion.div>
  );
}

export function ExecSummarySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, fontFamily: font, overflow: "hidden" }}>

      {/* ── FULL-BLEED PHOTO ── */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "linear" }}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "50% 45%",
        }}
      />

      {/* Top-left scrim — headline legibility */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(145deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.28) 45%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Bottom scrim — card backdrop */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 42%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Right scrim — stat legibility */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to left, rgba(0,0,0,0.40) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />

      {/* ── TITLE BAR ── */}
      <motion.div {...fadeIn(0.08)} style={{
        position: "absolute", top: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 52px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="18" height="18" viewBox="0 0 40 40" style={{ flexShrink: 0, opacity: 0.9 }}>
            <g fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round">
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(-60 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(-30 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(30 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(60 20 24)"/>
            </g>
          </svg>
          <EditableText id="exec-summary:title" as="span" style={{
            fontFamily: font, fontWeight: 400,
            fontSize: "clamp(10px, 0.85vw, 13px)", color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.08em", textTransform: "lowercase",
          }}>
            executive summary. lotus impact initiative.
          </EditableText>
        </div>
        <span style={{
          fontSize: 10, fontWeight: 400, color: "rgba(255,255,255,0.38)",
          letterSpacing: "0.22em",
        }}>03. executive summary.</span>
      </motion.div>

      {/* ── HEADLINE — top left ── */}
      <div style={{ position: "absolute", top: 80, left: 52, right: "46%" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: EASE_OUT }}
        >
          <EditableText id="exec-summary:headline" as="div" style={{
            fontSize: "clamp(24px, 3.3vw, 52px)",
            fontWeight: 300, color: "#fff",
            letterSpacing: "0.005em", textTransform: "lowercase",
            lineHeight: 1.12,
          }}>
            a proven model for<br />
            dignified affordable<br />
            housing.
          </EditableText>
        </motion.div>
      </div>

      {/* ── FLOATING STATS — top right ── */}
      <div style={{
        position: "absolute", top: 80, right: 52,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(20px, 3vw, 48px) clamp(24px, 4vw, 64px)",
        width: "38%",
      }}>
        {/* Hero financial metrics — larger */}
        <FloatStat id="irr"    num="13–15" suffix="%" label="target irr"           delay={0.32} />
        <FloatStat id="return" num="$300"  suffix="M" label="25-yr projected return" delay={0.40} align="right" />

        {/* Thin divider spanning both columns */}
        <motion.div {...fadeIn(0.48)} style={{
          gridColumn: "1 / -1",
          height: 1,
          background: "rgba(255,255,255,0.18)",
          marginTop: -8,
        }} />

        {/* Supporting volume metrics — smaller weight */}
        <motion.div {...lift(0.50)}>
          <EditableText id="exec-summary:stat-units" as="div" style={{
            fontFamily: font, fontWeight: 600,
            fontSize: "clamp(18px, 2.2vw, 34px)",
            color: "#fff", lineHeight: 1,
            letterSpacing: "-0.02em", whiteSpace: "nowrap",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}>
            800
          </EditableText>
          <EditableText id="exec-summary:stat-label-units" as="div" style={{
            fontFamily: font, fontWeight: 400,
            fontSize: "clamp(8px, 0.6vw, 10px)",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.18em", textTransform: "lowercase", marginTop: 4,
          }}>
            units per year
          </EditableText>
        </motion.div>

        <motion.div {...lift(0.56)} style={{ textAlign: "right" }}>
          <EditableText id="exec-summary:stat-residents" as="div" style={{
            fontFamily: font, fontWeight: 600,
            fontSize: "clamp(18px, 2.2vw, 34px)",
            color: "#fff", lineHeight: 1,
            letterSpacing: "-0.02em", whiteSpace: "nowrap",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}>
            2,000
          </EditableText>
          <EditableText id="exec-summary:stat-label-residents" as="div" style={{
            fontFamily: font, fontWeight: 400,
            fontSize: "clamp(8px, 0.6vw, 10px)",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.18em", textTransform: "lowercase", marginTop: 4,
          }}>
            residents annually
          </EditableText>
        </motion.div>
      </div>

      {/* ── BOTTOM CARDS ── */}
      <div style={{
        position: "absolute", bottom: 72, left: 52, right: 52,
        display: "flex", gap: 16,
      }}>
        {([
          {
            num: "001", id: "initiative",
            header: "the initiative",
            lines: [
              "8 projects per year, phase one.",
              "800 units annually, under 60% ami.",
              "lotus advantage communities on-site.",
            ],
          },
          {
            num: "002", id: "how-it-works",
            header: "how it works",
            lines: [
              "gp conduit funds predevelopment + acquisition.",
              "tax credit equity repays at construction closing.",
              "partners earn gp interest. capital recycles.",
            ],
          },
          {
            num: "003", id: "terms",
            header: "investment terms",
            lines: [
              "$16m–$20m commitment, year one.",
              "13–15% irr, 2x–3x moic over 18 years.",
              "quarterly kpis. annual summit.",
            ],
          },
        ]).map((card, i) => (
          <motion.div key={card.id} {...lift(0.62 + i * 0.09)} style={{
            flex: 1,
            background: CARD_BG,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: 6,
            boxShadow: CARD_SHADOW,
            padding: "26px 28px 24px",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", marginBottom: 8,
            }}>
              <EditableText id={`exec-summary:col-header-${card.id}`} as="p" style={{
                margin: 0, fontSize: 11, fontWeight: 500,
                color: DARK_TQ, letterSpacing: "0.22em", textTransform: "lowercase",
              }}>
                {card.header}
              </EditableText>
              <span style={{
                fontSize: 9, fontWeight: 400,
                color: "rgba(2,143,170,0.35)", letterSpacing: "0.15em",
              }}>
                {card.num}
              </span>
            </div>
            <EditableEl
              id={`exec-summary:col-rule-${card.id}`}
              label={`${card.header} rule`}
              type="bar"
              style={{ width: 22, height: 1, background: TQ, marginBottom: 12 }}
            />
            {card.lines.map((line, li) => (
              <EditableText key={li} id={`exec-summary:col-${card.id}-line-${li}`} as="p" style={{
                margin: "0 0 8px", fontFamily: font, fontWeight: 400, color: BODY,
                fontSize: "clamp(12px, 1.05vw, 16px)",
                letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.65,
              }}>
                {line}
              </EditableText>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Watermark */}
      <svg viewBox="0 0 200 200" style={{
        position: "absolute", right: -56, top: -56,
        width: 280, height: 280, opacity: 0.055, pointerEvents: "none",
      }}>
        <g fill="none" stroke="#fff" strokeWidth="1.2">
          <ellipse cx="100" cy="120" rx="18" ry="58" transform="rotate(-60 100 120)"/>
          <ellipse cx="100" cy="120" rx="18" ry="58" transform="rotate(-30 100 120)"/>
          <ellipse cx="100" cy="120" rx="18" ry="58"/>
          <ellipse cx="100" cy="120" rx="18" ry="58" transform="rotate(30 100 120)"/>
          <ellipse cx="100" cy="120" rx="18" ry="58" transform="rotate(60 100 120)"/>
        </g>
      </svg>
    </div>
  );
}
