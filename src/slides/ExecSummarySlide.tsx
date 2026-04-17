"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";

const BG      = "#ffffff";
const DARK    = theme.darkBg;           // #050a0c — headlines
const ACCENT  = theme.turquoise;        // #4dbad6 — stats, subheads
const BODY    = "rgba(5,10,12,0.58)";   // muted dark — body copy
const RULE    = "rgba(5,10,12,0.10)";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: EASE_OUT },
});

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      margin: "0 0 14px", fontFamily: font, fontWeight: 300,
      fontSize: "clamp(20px, 2.4vw, 38px)", color: DARK,
      letterSpacing: "0.08em", textTransform: "lowercase", lineHeight: 1.15,
    }}>{children}</h2>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 10px", fontFamily: font, fontWeight: 500,
      fontSize: "clamp(9px, 0.85vw, 13px)", color: ACCENT,
      letterSpacing: "0.06em", textTransform: "lowercase", lineHeight: 1.3,
    }}>{children}</p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 6px", fontFamily: font, fontWeight: 400,
      fontSize: "clamp(9px, 0.78vw, 11.5px)", color: BODY,
      letterSpacing: "0.02em", textTransform: "lowercase", lineHeight: 1.7,
    }}>{children}</p>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 600, color: DARK }}>{children}</span>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 5 }}>
      <span style={{ color: ACCENT, flexShrink: 0, lineHeight: 1.7, fontSize: "clamp(9px, 0.78vw, 11.5px)", fontFamily: font }}>·</span>
      <p style={{ margin: 0, fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 0.78vw, 11.5px)", color: BODY, letterSpacing: "0.02em", textTransform: "lowercase", lineHeight: 1.7 }}>{children}</p>
    </div>
  );
}

export function ExecSummarySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: BG, fontFamily: font, overflow: "hidden", display: "flex", flexDirection: "column", padding: "36px 52px 28px" }}>

      {/* ── TITLE ── */}
      <motion.div {...fade(0.05)} style={{ flexShrink: 0, marginBottom: 24 }}>
        <h1 style={{
          margin: 0, fontFamily: font, fontWeight: 300,
          fontSize: "clamp(16px, 1.8vw, 28px)", color: DARK,
          letterSpacing: "0.22em", textTransform: "lowercase", lineHeight: 1,
        }}>
          executive summary
        </h1>
      </motion.div>

      {/* ── STATS BAND ── */}
      <motion.div {...fade(0.10)} style={{ flexShrink: 0, display: "flex", marginBottom: 24 }}>
        {([
          { num: "800",     label: "affordable units\ndelivered each year" },
          { num: "2000",    label: "residents\nserved annually" },
          { num: "13–15%",  label: "target IRR per\nproject" },
          { num: "$300M",   label: "projected\n25-year return" },
        ] as const).map((stat, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div style={{
              fontFamily: font, fontWeight: 700, color: ACCENT,
              fontSize: "clamp(24px, 3.0vw, 50px)", lineHeight: 1, marginBottom: 8,
              letterSpacing: "-0.01em",
            }}>{stat.num}</div>
            <div style={{
              fontFamily: font, fontWeight: 400, color: BODY,
              fontSize: "clamp(8px, 0.7vw, 10px)", letterSpacing: "0.05em",
              textTransform: "lowercase", lineHeight: 1.5, whiteSpace: "pre-line",
            }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── RULE ── */}
      <div style={{ flexShrink: 0, height: 1, background: RULE, marginBottom: 24 }} />

      {/* ── THREE COLUMNS ── */}
      <div style={{ flex: 1, display: "flex", gap: 36, minHeight: 0 }}>

        {/* COL 1 — the belief */}
        <motion.div {...fade(0.18)} style={{ flex: 1 }}>
          <ColHead>the belief</ColHead>
          <Sub>a solution to the housing crisis</Sub>
          <Body>millions face unaffordable housing, eroding stability and quality of life. communities are at risk — families struggle to find dignified, attainable homes.</Body>
          <Body><Bold>the lotus way —</Bold> mindfully creating beautiful affordable housing and market-rate developments, built and designed to be indistinguishable from one another and enhanced with social impact integrated into every project.</Body>
        </motion.div>

        {/* COL 2 — the initiative */}
        <motion.div {...fade(0.26)} style={{ flex: 1 }}>
          <ColHead>the initiative</ColHead>
          <Sub>affordable housing projects per year in phase 1</Sub>
          <Body style={{ marginBottom: 10 }}><Bold>impact directive 2026:</Bold></Body>
          <Bullet><Bold>800</Bold> affordable units annually</Bullet>
          <Bullet>6 projects, all at <Bold>125 units</Bold> each, all under 60% ami</Bullet>
          <Bullet><Bold>2,000</Bold> low-income residents served each year, averaging 2.5 per household</Bullet>
          <Bullet><Bold>5,000</Bold> residents over a project lifetime with 15-year ownership and 5-year average residency</Bullet>
        </motion.div>

        {/* COL 3 — the mechanism + the return */}
        <motion.div {...fade(0.34)} style={{ flex: 1 }}>
          <ColHead>the mechanism+{"\n"}the return</ColHead>
          <Sub>how it works</Sub>
          <Bullet>the <Bold>gp conduit</Bold> provides capital for predevelopment and acquisition, repaid at construction closing</Bullet>
          <Bullet>tax credit investors fund repayment after lihtc award</Bullet>
          <Bullet><Bold>impact partners</Bold> receive gp economics — ownership, fees, cash flow — upon repayment</Bullet>
          <Bullet>capital recycles into new projects without permanent lock-up</Bullet>
          <Body style={{ marginTop: 10 }}><Bold>investment directive:</Bold> $16m–$20m year one · 18-year hold · 13–15% irr · 2×–3× moic · annual subscription</Body>
        </motion.div>

      </div>
    </div>
  );
}
