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
const STAT_LBL = "rgba(66,66,66,0.58)";

const CARD_BG     = "rgba(255,255,255,0.93)";
const CARD_BORDER = "rgba(255,255,255,0.55)";

const lift = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
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

      {/* Gradient — dark top + bottom, lets middle breathe */}
      <div style={{
        position: "absolute", inset: 0,
        background: [
          "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 38%, rgba(0,0,0,0.22) 62%, rgba(0,0,0,0.70) 100%)",
        ].join(","),
        pointerEvents: "none",
      }} />

      {/* ── /lotus tag + slide number ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          position: "absolute", top: 32, left: 52, right: 52,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span style={{
          fontSize: 10, fontWeight: 400, color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.32em", textTransform: "lowercase",
        }}>/lotus</span>
        <span style={{
          fontSize: 10, fontWeight: 400, color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.32em",
        }}>03. executive summary.</span>
      </motion.div>

      {/* ── HEADLINE ── */}
      <div style={{
        position: "absolute", top: 68, left: 52, right: "36%",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65, ease: EASE_OUT }}
        >
          <EditableText id="exec-summary:headline" as="div" style={{
            fontSize: "clamp(28px, 3.8vw, 60px)",
            fontWeight: 300, color: "#fff",
            letterSpacing: "0.01em", textTransform: "lowercase",
            lineHeight: 1.1,
          }}>
            a proven model for<br />
            dignified affordable housing<span style={{ color: TQ }}>.</span>
          </EditableText>
        </motion.div>
      </div>

      {/* ── BOTTOM CARD ROW ── */}
      <div style={{
        position: "absolute", bottom: 40, left: 52, right: 52,
        display: "flex", gap: 16, alignItems: "flex-end",
      }}>

        {/* LEFT: Stats card */}
        <motion.div {...lift(0.30)} style={{
          flex: "0 0 auto", width: "30%",
          background: CARD_BG,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: `1px solid ${CARD_BORDER}`,
          borderRadius: 6,
          padding: "24px 24px 20px",
        }}>
          <EditableText id="exec-summary:card-eyebrow" as="p" style={{
            margin: "0 0 14px", fontSize: 9, fontWeight: 500,
            color: DARK_TQ, letterSpacing: "0.22em", textTransform: "lowercase",
          }}>
            the numbers
          </EditableText>
          <EditableEl id="exec-summary:card-rule" label="card rule" type="bar"
            style={{ width: 22, height: 1, background: TQ, marginBottom: 16 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 8px" }}>
            {([
              { num: "800",    suffix: null, label: "units per year" },
              { num: "2,000",  suffix: null, label: "residents annually" },
              { num: "13–15",  suffix: "%",  label: "target irr" },
              { num: "$300",   suffix: "M",  label: "25-yr projected return" },
            ] as const).map((s, i) => (
              <div key={i}>
                <EditableText id={`exec-summary:stat-num-${i}`} style={{
                  fontFamily: font, fontWeight: 600, color: DARK_TQ,
                  fontSize: "clamp(20px, 2.4vw, 36px)",
                  lineHeight: 1, letterSpacing: "-0.02em", whiteSpace: "nowrap",
                }}>
                  {s.num}
                  {s.suffix && (
                    <span style={{ fontSize: "clamp(13px, 1.5vw, 22px)", fontWeight: 500 }}>
                      {s.suffix}
                    </span>
                  )}
                </EditableText>
                <EditableText id={`exec-summary:stat-label-${i}`} style={{
                  fontFamily: font, fontWeight: 400, color: STAT_LBL,
                  fontSize: "clamp(8px, 0.6vw, 10px)",
                  letterSpacing: "0.05em", textTransform: "lowercase", lineHeight: 1.4,
                }}>
                  {s.label}
                </EditableText>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Three numbered cards */}
        <div style={{ flex: 1, display: "flex", gap: 12, alignItems: "flex-end" }}>
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
            <motion.div key={card.id} {...lift(0.38 + i * 0.08)} style={{
              flex: 1,
              background: CARD_BG,
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 6,
              padding: "20px 20px 18px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <EditableText id={`exec-summary:col-header-${card.id}`} as="p" style={{
                  margin: 0, fontSize: 9, fontWeight: 500,
                  color: DARK_TQ, letterSpacing: "0.22em", textTransform: "lowercase",
                }}>
                  {card.header}
                </EditableText>
                <span style={{
                  fontSize: 9, fontWeight: 400, color: "rgba(2,143,170,0.35)",
                  letterSpacing: "0.15em", lineHeight: 1,
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
                  margin: "0 0 5px", fontFamily: font, fontWeight: 400, color: BODY,
                  fontSize: "clamp(9px, 0.78vw, 12px)",
                  letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.6,
                }}>
                  {line}
                </EditableText>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <svg viewBox="0 0 200 200" style={{
        position: "absolute", right: -64, top: -64,
        width: 300, height: 300, opacity: 0.06, pointerEvents: "none",
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
