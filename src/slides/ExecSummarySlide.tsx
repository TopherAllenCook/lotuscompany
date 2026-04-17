"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";

// Brand colors — per slide_03_executive_summary.html
const BG        = "#ffffff";
const DARK      = "#424242";
const DARK_TQ   = "#028faa";
const TQ        = theme.turquoise;   // #4dbad6
const LB        = "#cee8ee";
const BODY      = "rgba(66,66,66,0.86)";
const STAT_LBL  = "rgba(66,66,66,0.62)";

// 8pt spacing scale tokens
const S = {
  "1": 8,   "2": 16,  "3": 24,  "4": 32,
  "5": 40,  "6": 48,  "7": 56,  "8": 64,
  "9": 72,  "10": 80,
} as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: EASE_OUT },
});

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: S[2] }}>
      <p style={{
        margin: `0 0 ${S[1]}px`, fontFamily: font, fontWeight: 500,
        fontSize: "clamp(9px, 0.72vw, 11px)", color: DARK_TQ,
        letterSpacing: "0.22em", textTransform: "lowercase", lineHeight: 1,
      }}>{children}</p>
      <div style={{ width: 22, height: 1, background: TQ }} />
    </div>
  );
}

function Line({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <p style={{
      margin: `0 0 ${S[1] / 2}px`, fontFamily: font, fontWeight: 400,
      fontSize: "clamp(10px, 0.82vw, 13px)", color: BODY,
      letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.65,
    }}>
      {label && <span style={{ fontWeight: 500, color: DARK }}>{label} </span>}
      {children}
    </p>
  );
}

export function ExecSummarySlide() {
  return (
    <div style={{
      position: "absolute", inset: 0, background: BG,
      fontFamily: font, overflow: "hidden",
      display: "flex", flexDirection: "column",
      // 8pt grid: 56px top, 80px sides, 48px bottom
      padding: `${S[7]}px ${S[10]}px ${S[6]}px`,
    }}>

      {/* ── TITLE BAR ── */}
      <motion.div {...fade(0.05)} style={{
        flexShrink: 0,
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        paddingBottom: S[2],
        borderBottom: `1px solid ${LB}`,
        marginBottom: S[3],
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: S[2] }}>
          <svg width="24" height="24" viewBox="0 0 40 40" style={{ flexShrink: 0 }}>
            <g fill="none" stroke={DARK_TQ} strokeWidth="1.3" strokeLinecap="round">
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(-60 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(-30 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(30 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(60 20 24)"/>
            </g>
          </svg>
          <EditableText id="exec-summary:title" as="h1" style={{
            margin: 0, fontFamily: font, fontWeight: 500,
            fontSize: "clamp(12px, 1.0vw, 16px)", color: DARK,
            letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1,
          }}>
            executive summary. lotus impact initiative.
          </EditableText>
        </div>
        <span style={{
          fontFamily: font, fontWeight: 400,
          fontSize: "clamp(8px, 0.6vw, 10px)", color: "#a9c7cd",
          letterSpacing: "0.22em", textTransform: "lowercase",
        }}>
          03. executive summary.
        </span>
      </motion.div>

      {/* ── SUBTITLE ── */}
      <motion.div {...fade(0.08)} style={{ flexShrink: 0, marginBottom: S[2] }}>
        <EditableText id="exec-summary:subtitle" as="p" style={{
          margin: 0, fontFamily: font, fontWeight: 400,
          fontSize: "clamp(14px, 1.45vw, 22px)", color: DARK,
          letterSpacing: "-0.005em", lineHeight: 1.35,
        }}>
          <span style={{ color: DARK_TQ, fontWeight: 500 }}>
            dignified housing, built to one standard.
          </span>{" "}
          market-rate and affordable, indistinguishable by design.
        </EditableText>
      </motion.div>

      {/* ── HERO STATS ── */}
      <motion.div {...fade(0.14)} style={{
        flexShrink: 0,
        background: "linear-gradient(180deg, rgba(206,232,238,0.55) 0%, rgba(206,232,238,0.15) 100%)",
        borderRadius: 3,
        padding: `${S[4]}px ${S[3]}px`,
        display: "flex", alignItems: "center",
        marginBottom: S[4],
      }}>
        {([
          { num: "800",       suffix: null,  label: "units delivered\neach year" },
          { num: "2,000",     suffix: null,  label: "residents served\nannually" },
          { num: "13 to 15",  suffix: "%",   label: "target irr\nper project" },
          { num: "$300",      suffix: "M",   label: "projected\n25-year return" },
        ] as const).map((stat, i) => (
          <div key={i} style={{
            flex: 1, textAlign: "center",
            padding: `0 ${S[2]}px`,
            borderLeft: i > 0 ? `1px solid rgba(77,186,214,0.30)` : "none",
          }}>
            <EditableText id={`exec-summary:stat-num-${i}`} style={{
              fontFamily: font, fontWeight: 600, color: DARK_TQ,
              fontSize: "clamp(24px, 3.6vw, 56px)",
              lineHeight: 1, marginBottom: S[1],
              letterSpacing: "-0.015em", whiteSpace: "nowrap",
            }}>
              {stat.num}
              {stat.suffix && (
                <span style={{ fontSize: "clamp(16px, 2.3vw, 36px)", fontWeight: 500 }}>
                  {stat.suffix}
                </span>
              )}
            </EditableText>
            <EditableText id={`exec-summary:stat-label-${i}`} style={{
              fontFamily: font, fontWeight: 400, color: STAT_LBL,
              fontSize: "clamp(9px, 0.65vw, 11px)",
              letterSpacing: "0.05em", textTransform: "lowercase",
              lineHeight: 1.45, whiteSpace: "pre-line",
            }}>
              {stat.label}
            </EditableText>
          </div>
        ))}
      </motion.div>

      {/* ── THREE COLUMNS ── */}
      <div style={{
        flex: 1, minHeight: 0,
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: `0 ${S[7]}px`,
      }}>
        <motion.div {...fade(0.20)}>
          <ColHeader>the initiative</ColHeader>
          <Line label="goal.">8 projects per year, phase one.</Line>
          <Line label="units.">800 annually, under 60% ami.</Line>
          <Line label="residents.">2,000 per year. 5,000 over project lifetime.</Line>
          <Line label="vision."><em>Lotus Advantage</em> communities.</Line>
        </motion.div>

        <motion.div {...fade(0.28)}>
          <ColHeader>how it works</ColHeader>
          <Line>gp conduit funds predevelopment and acquisition.</Line>
          <Line>tax credit investors repay at construction closing.</Line>
          <Line>impact partners earn gp interest after repayment.</Line>
          <Line>capital recycles. no permanent lock-up.</Line>
        </motion.div>

        <motion.div {...fade(0.36)}>
          <ColHeader>investment terms</ColHeader>
          <Line label="commitment.">$16m to $20m, year one.</Line>
          <Line label="hold.">18 years.</Line>
          <Line label="return.">13 to 15% irr, 2x to 3x moic.</Line>
          <Line label="reporting.">quarterly kpis, annual summit.</Line>
        </motion.div>
      </div>

      {/* ── KICKER ── */}
      <motion.div {...fade(0.44)} style={{
        flexShrink: 0,
        marginTop: S[3],
        paddingTop: S[2],
        borderTop: `1px solid ${LB}`,
        display: "flex", alignItems: "center", gap: S[3],
      }}>
        <EditableText id="exec-summary:kicker" as="p" style={{
          margin: 0, fontFamily: font, fontWeight: 500,
          fontSize: "clamp(11px, 1.1vw, 18px)", color: DARK_TQ,
          letterSpacing: "0.01em", textTransform: "lowercase", whiteSpace: "nowrap",
        }}>
          this is more than impact investing. this is legacy building.
        </EditableText>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: S[1] }}>
          <div style={{
            flex: 1, height: 1,
            background: `linear-gradient(90deg, ${TQ} 0%, ${LB} 60%, transparent 100%)`,
          }} />
          <div style={{
            width: 9, height: 9, borderRadius: "50%",
            background: TQ, flexShrink: 0,
          }} />
        </div>
      </motion.div>

      {/* Watermark */}
      <svg viewBox="0 0 200 200" style={{
        position: "absolute", right: -64, bottom: -64,
        width: 320, height: 320, opacity: 0.04, pointerEvents: "none",
      }}>
        <g fill="none" stroke={DARK_TQ} strokeWidth="1.2">
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
