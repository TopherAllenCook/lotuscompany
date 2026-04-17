"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";

// Brand colors per lotus_brand_guide / slide_03_executive_summary.html
const BG           = "#ffffff";
const DARK         = "#424242";                  // body text, title
const DARK_TQ      = "#028faa";                  // stats, col headers, kicker, subtitle emph
const TQ           = theme.turquoise;            // #4dbad6 — col rule underline, kicker line
const LIGHT_BLUE   = "#cee8ee";                  // borders, rule dividers
const BODY         = "rgba(66,66,66,0.86)";      // column body lines
const STAT_LABEL   = "rgba(66,66,66,0.65)";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: EASE_OUT },
});

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p style={{
        margin: "0 0 6px", fontFamily: font, fontWeight: 500,
        fontSize: "clamp(8px, 0.72vw, 10.5px)", color: DARK_TQ,
        letterSpacing: "0.22em", textTransform: "lowercase", lineHeight: 1,
      }}>{children}</p>
      <div style={{ width: 22, height: 1, background: TQ, marginBottom: 14 }} />
    </>
  );
}

function Line({ label, children, italic }: { label?: string; children: React.ReactNode; italic?: boolean }) {
  return (
    <p style={{
      margin: "0 0 4px", fontFamily: font, fontWeight: 400,
      fontSize: "clamp(9px, 0.78vw, 13px)", color: BODY,
      letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.6,
      fontStyle: italic ? "italic" : undefined,
    }}>
      {label && <span style={{ fontWeight: 500, color: DARK, fontStyle: "normal" }}>{label} </span>}
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
      padding: "clamp(28px, 3.5vw, 56px) clamp(32px, 5vw, 80px) clamp(24px, 3vw, 50px)",
    }}>

      {/* ── TITLE BAR ── */}
      <motion.div {...fade(0.05)} style={{
        flexShrink: 0, display: "flex",
        justifyContent: "space-between", alignItems: "flex-end",
        paddingBottom: 14,
        borderBottom: `1px solid ${LIGHT_BLUE}`,
        marginBottom: "clamp(14px, 1.8vw, 22px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Lotus mark — small inline */}
          <svg width="26" height="26" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <g fill="none" stroke={DARK_TQ} strokeWidth="1.3" strokeLinecap="round">
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(-60 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(-30 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(30 20 24)"/>
              <ellipse cx="20" cy="24" rx="3" ry="12" transform="rotate(60 20 24)"/>
            </g>
          </svg>
          <h1 style={{
            margin: 0, fontFamily: font, fontWeight: 500,
            fontSize: "clamp(11px, 1.1vw, 16px)", color: DARK,
            letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1,
          }}>
            executive summary. lotus impact initiative.
          </h1>
        </div>
        <span style={{
          fontFamily: font, fontWeight: 400,
          fontSize: "clamp(8px, 0.65vw, 10px)", color: "#a9c7cd",
          letterSpacing: "0.22em", textTransform: "lowercase",
        }}>
          03. executive summary.
        </span>
      </motion.div>

      {/* ── SUBTITLE ── */}
      <motion.div {...fade(0.08)} style={{ flexShrink: 0, marginBottom: "clamp(12px, 1.6vw, 18px)" }}>
        <p style={{
          margin: 0, fontFamily: font, fontWeight: 400,
          fontSize: "clamp(13px, 1.5vw, 22px)", color: DARK,
          letterSpacing: "-0.005em", lineHeight: 1.35,
        }}>
          <span style={{ color: DARK_TQ, fontWeight: 500 }}>dignified housing, built to one standard.</span>{" "}
          market-rate and affordable, indistinguishable by design.
        </p>
      </motion.div>

      {/* ── HERO STATS ── */}
      <motion.div {...fade(0.14)} style={{
        flexShrink: 0,
        background: "linear-gradient(180deg, rgba(206,232,238,0.55) 0%, rgba(206,232,238,0.15) 100%)",
        padding: "clamp(14px, 2vw, 30px) clamp(12px, 1.5vw, 24px)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: "clamp(16px, 2.2vw, 32px)",
        borderRadius: 3,
      }}>
        {([
          { num: "800",              pct: null,  small: null,  label: "units delivered each year" },
          { num: "2,000",            pct: null,  small: null,  label: "residents served annually" },
          { num: "13 to 15",         pct: "%",   small: null,  label: "target irr per project" },
          { num: "$300",             pct: null,  small: "M",   label: "projected 25-year return" },
        ] as const).map((stat, i) => (
          <div key={i} style={{
            flex: 1, textAlign: "center", padding: "0 14px",
            position: "relative",
            ...(i > 0 ? {
              borderLeft: `1px solid rgba(77,186,214,0.35)`,
            } : {}),
          }}>
            <div style={{
              fontFamily: font, fontWeight: 600, color: DARK_TQ,
              fontSize: "clamp(20px, 3.5vw, 56px)", lineHeight: 1,
              marginBottom: 10, letterSpacing: "-0.015em", whiteSpace: "nowrap",
            }}>
              {stat.num}
              {stat.pct && <span style={{ fontSize: "clamp(14px, 2.3vw, 36px)", fontWeight: 500 }}>{stat.pct}</span>}
              {stat.small && <span style={{ fontSize: "clamp(14px, 2.3vw, 36px)", fontWeight: 500 }}>{stat.small}</span>}
            </div>
            <div style={{
              fontFamily: font, fontWeight: 400, color: STAT_LABEL,
              fontSize: "clamp(8px, 0.68vw, 11px)", letterSpacing: "0.05em",
              textTransform: "lowercase", lineHeight: 1.4,
            }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── THREE COLUMNS ── */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(24px, 3.5vw, 56px)", minHeight: 0 }}>

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
      <motion.div {...fade(0.42)} style={{
        flexShrink: 0, marginTop: "clamp(14px, 2vw, 24px)",
        paddingTop: "clamp(10px, 1.4vw, 16px)",
        borderTop: `1px solid ${LIGHT_BLUE}`,
        display: "flex", alignItems: "center", gap: 20,
      }}>
        <p style={{
          margin: 0, fontFamily: font, fontWeight: 500,
          fontSize: "clamp(10px, 1.1vw, 18px)", color: DARK_TQ,
          letterSpacing: "0.01em", textTransform: "lowercase", whiteSpace: "nowrap",
        }}>
          this is more than impact investing. this is legacy building.
        </p>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, marginLeft: 20 }}>
          <div style={{
            flex: 1, height: 1,
            background: `linear-gradient(90deg, ${TQ} 0%, ${LIGHT_BLUE} 60%, transparent 100%)`,
          }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: TQ, flexShrink: 0 }} />
        </div>
      </motion.div>

      {/* Watermark */}
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", right: -70, bottom: -70, width: 360, height: 360, opacity: 0.035, pointerEvents: "none" }}
      >
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
