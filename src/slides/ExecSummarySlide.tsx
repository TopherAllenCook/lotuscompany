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
const STAT_LBL = "rgba(66,66,66,0.55)";

const CARD_BG     = "rgba(255,255,255,0.94)";
const CARD_BORDER = "rgba(255,255,255,0.5)";
const CARD_SHADOW = "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)";

const lift = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: EASE_OUT },
});

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

      {/* Top-left scrim — guarantees headline contrast */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(145deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.30) 40%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Bottom scrim — card backdrop consistency */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.22) 45%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* ── /lotus + slide number ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          position: "absolute", top: 32, left: 52, right: 52,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span style={{
          fontSize: 10, fontWeight: 400, color: "rgba(255,255,255,0.65)",
          letterSpacing: "0.32em", textTransform: "lowercase",
        }}>/lotus</span>
        <span style={{
          fontSize: 10, fontWeight: 400, color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.22em",
        }}>03. executive summary.</span>
      </motion.div>

      {/* ── HEADLINE ── */}
      <div style={{ position: "absolute", top: 64, left: 52, right: "34%" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65, ease: EASE_OUT }}
        >
          <EditableText id="exec-summary:headline" as="div" style={{
            fontSize: "clamp(26px, 3.6vw, 56px)",
            fontWeight: 300, color: "#fff",
            letterSpacing: "0.01em", textTransform: "lowercase",
            lineHeight: 1.12,
          }}>
            a proven model for<br />
            dignified affordable housing.
          </EditableText>
        </motion.div>
      </div>

      {/* ── CARD ROW — pinned to bottom safe area ── */}
      <div style={{
        position: "absolute",
        bottom: 36, left: 52, right: 52,
        display: "flex", gap: 14, alignItems: "flex-end",
      }}>

        {/* 000 — Numbers card */}
        <motion.div {...lift(0.30)} style={{
          flex: "0 0 auto", width: "28%",
          background: CARD_BG,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid ${CARD_BORDER}`,
          borderRadius: 6,
          boxShadow: CARD_SHADOW,
          padding: "20px 20px 18px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <EditableText id="exec-summary:numbers-eyebrow" as="p" style={{
              margin: 0, fontSize: 9, fontWeight: 500,
              color: DARK_TQ, letterSpacing: "0.22em", textTransform: "lowercase",
            }}>
              the numbers
            </EditableText>
            <span style={{ fontSize: 9, fontWeight: 400, color: "rgba(2,143,170,0.35)", letterSpacing: "0.15em" }}>
              000
            </span>
          </div>
          <EditableEl id="exec-summary:numbers-rule" label="numbers rule" type="bar"
            style={{ width: 22, height: 1, background: TQ, marginBottom: 14 }} />

          {/* Hero financial metrics — largest */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 8px", marginBottom: 12 }}>
            <div>
              <EditableText id="exec-summary:stat-num-irr" style={{
                fontFamily: font, fontWeight: 700, color: DARK_TQ,
                fontSize: "clamp(22px, 2.8vw, 42px)",
                lineHeight: 1, letterSpacing: "-0.02em", whiteSpace: "nowrap",
              }}>
                13–15<span style={{ fontSize: "clamp(14px, 1.6vw, 24px)", fontWeight: 500 }}>%</span>
              </EditableText>
              <EditableText id="exec-summary:stat-label-irr" style={{
                fontFamily: font, fontWeight: 400, color: STAT_LBL,
                fontSize: "clamp(8px, 0.58vw, 9px)",
                letterSpacing: "0.05em", textTransform: "lowercase", lineHeight: 1.4,
              }}>
                target irr
              </EditableText>
            </div>
            <div>
              <EditableText id="exec-summary:stat-num-return" style={{
                fontFamily: font, fontWeight: 700, color: DARK_TQ,
                fontSize: "clamp(22px, 2.8vw, 42px)",
                lineHeight: 1, letterSpacing: "-0.02em", whiteSpace: "nowrap",
              }}>
                $300<span style={{ fontSize: "clamp(14px, 1.6vw, 24px)", fontWeight: 500 }}>M</span>
              </EditableText>
              <EditableText id="exec-summary:stat-label-return" style={{
                fontFamily: font, fontWeight: 400, color: STAT_LBL,
                fontSize: "clamp(8px, 0.58vw, 9px)",
                letterSpacing: "0.05em", textTransform: "lowercase", lineHeight: 1.4,
              }}>
                25-yr projected return
              </EditableText>
            </div>
          </div>

          {/* Thin divider */}
          <div style={{ height: 1, background: "rgba(206,232,238,0.7)", marginBottom: 12 }} />

          {/* Supporting volume metrics — smaller */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 8px" }}>
            <div>
              <EditableText id="exec-summary:stat-num-units" style={{
                fontFamily: font, fontWeight: 600, color: DARK_TQ,
                fontSize: "clamp(15px, 1.8vw, 26px)",
                lineHeight: 1, letterSpacing: "-0.015em", whiteSpace: "nowrap",
              }}>
                800
              </EditableText>
              <EditableText id="exec-summary:stat-label-units" style={{
                fontFamily: font, fontWeight: 400, color: STAT_LBL,
                fontSize: "clamp(8px, 0.58vw, 9px)",
                letterSpacing: "0.05em", textTransform: "lowercase", lineHeight: 1.4,
              }}>
                units per year
              </EditableText>
            </div>
            <div>
              <EditableText id="exec-summary:stat-num-residents" style={{
                fontFamily: font, fontWeight: 600, color: DARK_TQ,
                fontSize: "clamp(15px, 1.8vw, 26px)",
                lineHeight: 1, letterSpacing: "-0.015em", whiteSpace: "nowrap",
              }}>
                2,000
              </EditableText>
              <EditableText id="exec-summary:stat-label-residents" style={{
                fontFamily: font, fontWeight: 400, color: STAT_LBL,
                fontSize: "clamp(8px, 0.58vw, 9px)",
                letterSpacing: "0.05em", textTransform: "lowercase", lineHeight: 1.4,
              }}>
                residents annually
              </EditableText>
            </div>
          </div>
        </motion.div>

        {/* 001 / 002 / 003 — Story cards */}
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
          <motion.div key={card.id} {...lift(0.38 + i * 0.09)} style={{
            flex: 1,
            background: CARD_BG,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: 6,
            boxShadow: CARD_SHADOW,
            padding: "20px 20px 18px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <EditableText id={`exec-summary:col-header-${card.id}`} as="p" style={{
                margin: 0, fontSize: 9, fontWeight: 500,
                color: DARK_TQ, letterSpacing: "0.22em", textTransform: "lowercase",
              }}>
                {card.header}
              </EditableText>
              <span style={{ fontSize: 9, fontWeight: 400, color: "rgba(2,143,170,0.35)", letterSpacing: "0.15em" }}>
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
                margin: "0 0 6px", fontFamily: font, fontWeight: 400, color: BODY,
                fontSize: "clamp(9px, 0.78vw, 12px)",
                letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.6,
              }}>
                {line}
              </EditableText>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Watermark — top right, white */}
      <svg viewBox="0 0 200 200" style={{
        position: "absolute", right: -56, top: -56,
        width: 280, height: 280, opacity: 0.06, pointerEvents: "none",
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
