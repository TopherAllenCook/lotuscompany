"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";

const BG      = theme.darkBg;
const ACCENT  = theme.turquoise;
const TEXT    = "rgba(206,232,238,0.85)";
const MUTED   = "rgba(206,232,238,0.40)";
const RULE    = "rgba(77,186,214,0.16)";
const DIVIDER = "rgba(77,186,214,0.12)";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: EASE_OUT },
});

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p style={{
        margin: "0 0 10px", fontSize: "clamp(8px, 0.72vw, 10px)",
        fontWeight: 500, color: ACCENT, letterSpacing: "0.28em",
        textTransform: "lowercase", fontFamily: font, lineHeight: 1,
      }}>{children}</p>
      <div style={{ height: 1, background: RULE, marginBottom: 14 }} />
    </>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "12px 0 5px", fontSize: "clamp(9px, 0.82vw, 12px)",
      fontWeight: 600, color: "rgba(206,232,238,0.95)", letterSpacing: "0.06em",
      textTransform: "lowercase", fontFamily: font, lineHeight: 1.2,
    }}>{children}</p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 5px", fontSize: "clamp(9px, 0.78vw, 11px)",
      fontWeight: 300, color: TEXT, letterSpacing: "0.02em",
      textTransform: "lowercase", fontFamily: font, lineHeight: 1.65,
    }}>{children}</p>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 600, color: "rgba(206,232,238,0.95)" }}>{children}</span>;
}

function Dot({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 5 }}>
      <span style={{ color: ACCENT, lineHeight: 1.65, flexShrink: 0, fontSize: "clamp(9px, 0.78vw, 11px)", fontFamily: font }}>·</span>
      <p style={{ margin: 0, fontSize: "clamp(9px, 0.78vw, 11px)", fontWeight: 300, color: TEXT, letterSpacing: "0.02em", textTransform: "lowercase", fontFamily: font, lineHeight: 1.65 }}>{children}</p>
    </div>
  );
}

export function ExecSummarySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: BG, fontFamily: font, overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* ── HEADER ── */}
      <motion.div {...fade(0.05)} style={{
        flexShrink: 0, padding: "28px 52px 22px",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        borderBottom: `1px solid ${DIVIDER}`,
      }}>
        <div>
          <p style={{
            margin: "0 0 6px", fontSize: "clamp(8px, 0.72vw, 10px)",
            fontWeight: 400, color: MUTED, letterSpacing: "0.3em",
            textTransform: "lowercase", fontFamily: font, lineHeight: 1,
          }}>
            03 / executive summary
          </p>
          <h1 style={{
            margin: 0, fontFamily: font, fontWeight: 700,
            fontSize: "clamp(22px, 2.6vw, 42px)",
            letterSpacing: "-0.01em", textTransform: "lowercase",
            color: "#fff", lineHeight: 1.1,
          }}>
            executive summary
            <span style={{ color: ACCENT }}>.</span>
          </h1>
        </div>
        <p style={{
          margin: 0, fontSize: "clamp(9px, 0.78vw, 11px)",
          fontWeight: 300, color: MUTED, letterSpacing: "0.18em",
          textTransform: "lowercase", fontFamily: font, lineHeight: 1,
        }}>
          lotus impact initiative.
        </p>
      </motion.div>

      {/* ── STATS BAND ── */}
      <motion.div {...fade(0.12)} style={{
        flexShrink: 0, display: "flex",
        borderBottom: `1px solid ${DIVIDER}`,
      }}>
        {([
          { num: "800",       label: "affordable units delivered each year" },
          { num: "2,000",     label: "residents served annually" },
          { num: "13–15%",    label: "target IRR per project" },
          { num: "$300M",     label: "projected 25-year return" },
        ] as const).map((stat, i) => (
          <div key={i} style={{
            flex: 1, padding: "18px 28px",
            borderRight: i < 3 ? `1px solid ${DIVIDER}` : "none",
          }}>
            <div style={{
              fontSize: "clamp(22px, 2.8vw, 44px)", fontWeight: 700,
              color: ACCENT, fontFamily: font, lineHeight: 1, marginBottom: 5,
              letterSpacing: "-0.01em",
            }}>{stat.num}</div>
            <div style={{
              fontSize: "clamp(8px, 0.72vw, 10px)", fontWeight: 400,
              color: MUTED, fontFamily: font,
              letterSpacing: "0.06em", textTransform: "lowercase", lineHeight: 1.4,
            }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── THREE COLUMNS ── */}
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>

        {/* COL 1 — the belief */}
        <motion.div {...fade(0.2)} style={{
          flex: 1, padding: "20px 28px",
          borderRight: `1px solid ${DIVIDER}`,
          display: "flex", flexDirection: "column",
        }}>
          <ColLabel>the belief</ColLabel>
          <div style={{ flex: 1 }}>
            <Sub>why this matters</Sub>
            <Body><Bold>housing crisis.</Bold> millions face unaffordable housing, eroding stability and quality of life.</Body>
            <Body><Bold>communities at risk.</Bold> families struggle to find dignified, attainable homes — weighing on health, education, and opportunity.</Body>
            <Sub>the lotus way</Sub>
            <Body><Bold>dignified housing.</Bold> homes designed for livability, sustainability, and community wellbeing. market-rate and affordable, built to the same standard.</Body>
            <Body><Bold>mindfully creating.</Bold> thoughtful design and social impact integrated into every project, from site selection through resident services.</Body>
          </div>
          <div style={{ paddingTop: 14, borderTop: `1px solid ${RULE}`, marginTop: 10 }}>
            <p style={{ margin: 0, fontSize: "clamp(8px, 0.72vw, 10px)", fontWeight: 300, color: MUTED, fontFamily: font, letterSpacing: "0.12em", textTransform: "lowercase", lineHeight: 1.6 }}>
              this is more than impact investing. this is legacy building.
            </p>
          </div>
        </motion.div>

        {/* COL 2 — the initiative */}
        <motion.div {...fade(0.28)} style={{
          flex: 1, padding: "20px 28px",
          borderRight: `1px solid ${DIVIDER}`,
        }}>
          <ColLabel>the initiative</ColLabel>
          <Sub>goal</Sub>
          <Body>launch 8 affordable housing projects per year in phase one.</Body>
          <Sub>impact directive 2026</Sub>
          <Body><Bold>800</Bold> affordable units annually — 6 projects at 125 units each, all under 60% ami.</Body>
          <Body><Bold>2,000</Bold> low-income residents served each year, averaging 2.5 per household.</Body>
          <Body><Bold>5,000</Bold> residents over a project lifetime, with 15-year ownership and 5-year average residency.</Body>
          <Sub>vision</Sub>
          <Body><em>lotus advantage</em> communities — housing that respects people and fosters thriving neighborhoods.</Body>
        </motion.div>

        {/* COL 3 — the mechanism and the return */}
        <motion.div {...fade(0.36)} style={{ flex: 1, padding: "20px 28px" }}>
          <ColLabel>the mechanism + the return</ColLabel>
          <Sub>how it works</Sub>
          <Dot>the <Bold>gp conduit</Bold> provides capital with repayment for predevelopment and acquisition.</Dot>
          <Dot>tax credit investors repay those loans at construction closing, after lihtc application and award.</Dot>
          <Dot><Bold>impact partners</Bold> receive gp interest and economics — ownership, fees, and cash flow rights — upon repayment.</Dot>
          <Dot>capital recycles into new projects, scaling impact without permanent lock-up.</Dot>
          <Sub>investment directive</Sub>
          <Body><Bold>year one target.</Bold> $16m–$20m total capital, averaging $3m per project across 6 projects.</Body>
          <Body><Bold>hold period.</Bold> 18 years.</Body>
          <Body><Bold>return target.</Bold> 13–15% irr, 2×–3× moic.</Body>
          <Body><Bold>recommitment.</Bold> annual subscription, 1-year redemption window.</Body>
          <Body><Bold>transparency.</Bold> quarterly kpi reporting + annual investment summit.</Body>
        </motion.div>

      </div>
    </div>
  );
}
