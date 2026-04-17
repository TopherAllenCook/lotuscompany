"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4, ease: EASE_OUT },
});

/* ── primitives ── */

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 10px",
      fontSize: "clamp(9px, 0.82vw, 11px)",
      fontWeight: 600, color: theme.turquoise,
      letterSpacing: "0.2em", textTransform: "lowercase", fontFamily: font,
      lineHeight: 1,
    }}>{children}</p>
  );
}

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "10px 0 4px",
      fontSize: "clamp(9px, 0.78vw, 11px)",
      fontWeight: 600, color: "#424242",
      letterSpacing: "0.14em", textTransform: "lowercase", fontFamily: font,
      lineHeight: 1.2,
    }}>{children}</p>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "7px 0 1px",
      fontSize: "clamp(9px, 0.78vw, 11px)",
      fontWeight: 300, color: "#424242",
      letterSpacing: "0.08em", textTransform: "lowercase", fontFamily: font,
      lineHeight: 1.3,
    }}>{children}</p>
  );
}

function Val({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 2px",
      fontSize: "clamp(9px, 0.82vw, 12px)",
      fontWeight: 400, color: "#424242",
      letterSpacing: "0.02em", textTransform: "lowercase", fontFamily: font,
      lineHeight: 1.6,
    }}>{children}</p>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 2 }}>
      <span style={{ color: theme.turquoise, fontSize: "clamp(9px, 0.82vw, 12px)", lineHeight: 1.6, flexShrink: 0, fontFamily: font }}>·</span>
      <p style={{ margin: 0, fontSize: "clamp(9px, 0.82vw, 12px)", fontWeight: 400, color: "#424242", letterSpacing: "0.02em", textTransform: "lowercase", lineHeight: 1.6, fontFamily: font }}>{children}</p>
    </div>
  );
}

function VRule() {
  return <div style={{ width: 1, background: "rgba(66,66,66,0.1)", flexShrink: 0, alignSelf: "stretch" }} />;
}

function HRule() {
  return <div style={{ height: 1, background: "rgba(66,66,66,0.1)", margin: "8px 0" }} />;
}

/* ── slide ── */

export function ExecSummarySlide() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "#fff", fontFamily: font,
      overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>

      {/* ── TITLE BAR ── */}
      <motion.div {...fade(0.05)} style={{
        display: "flex", alignItems: "baseline", justifyContent: "space-between",
        padding: "28px 48px 16px",
        borderBottom: "2px solid #1a1a1a",
      }}>
        <span style={{
          fontSize: "clamp(14px, 1.5vw, 22px)",
          fontWeight: 600, color: "#1a1a1a",
          letterSpacing: "0.06em", textTransform: "lowercase", fontFamily: font,
        }}>
          executive summary.&nbsp;
          <span style={{ fontWeight: 300, color: "#424242" }}>lotus impact initiative.</span>
        </span>
        <span style={{
          fontSize: "clamp(9px, 0.78vw, 11px)",
          fontWeight: 400, color: "rgba(66,66,66,0.38)",
          letterSpacing: "0.22em", textTransform: "lowercase", fontFamily: font,
        }}>03. executive summary.</span>
      </motion.div>

      {/* ── HERO STATS BAND ── */}
      <motion.div {...fade(0.12)} style={{
        background: "#1a1a1a",
        display: "flex",
      }}>
        {[
          { num: "800",       label: "affordable units\ndelivered each year" },
          { num: "2,000",     label: "residents served\nannually" },
          { num: "13 to 15%", label: "target IRR\nper project" },
          { num: "$300M",     label: "projected 25-year\nreturn to investors" },
        ].map((stat, i) => (
          <div key={i} style={{
            flex: 1,
            padding: "16px 24px",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
            display: "flex", flexDirection: "column", gap: 4,
          }}>
            <span style={{
              fontSize: "clamp(22px, 2.6vw, 40px)",
              fontWeight: 700, color: theme.turquoise,
              letterSpacing: "-0.01em", fontFamily: font, lineHeight: 1,
            }}>{stat.num}</span>
            <span style={{
              fontSize: "clamp(9px, 0.78vw, 11px)",
              fontWeight: 400, color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.08em", textTransform: "lowercase", fontFamily: font,
              lineHeight: 1.5, whiteSpace: "pre-line",
            }}>{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── THREE COLUMNS ── */}
      <div style={{ flex: 1, display: "flex", minHeight: 0, padding: "0 48px" }}>

        {/* COL 1 — the belief */}
        <motion.div {...fade(0.2)} style={{ flex: 1, padding: "16px 20px 16px 0", overflowY: "auto" }}>
          <ColHead>the belief.</ColHead>

          <SectionHead>why this matters</SectionHead>
          <FieldLabel>housing crisis.</FieldLabel>
          <Val>millions face unaffordable housing, which erodes stability and quality of life.</Val>
          <FieldLabel>communities at risk.</FieldLabel>
          <Val>families struggle to find dignified, attainable homes, which weighs on health, education, and opportunity.</Val>

          <HRule />

          <SectionHead>the lotus way</SectionHead>
          <FieldLabel>dignified housing.</FieldLabel>
          <Val>homes designed for livability, sustainability, and community wellbeing. market-rate and affordable, built to the same standard.</Val>
          <FieldLabel>mindfully creating.</FieldLabel>
          <Val>thoughtful design and social impact integrated into every project, from site selection through resident services.</Val>
        </motion.div>

        <VRule />

        {/* COL 2 — the initiative */}
        <motion.div {...fade(0.28)} style={{ flex: 1, padding: "16px 20px", overflowY: "auto" }}>
          <ColHead>the initiative.</ColHead>

          <SectionHead>goal</SectionHead>
          <Val>launch 8 affordable housing projects per year in phase one.</Val>

          <HRule />

          <SectionHead>impact directive 2026</SectionHead>
          <Bullet>800 affordable units annually, across 6 projects at 125 units each, all under 60 percent AMI.</Bullet>
          <Bullet>2,000 low-income residents served each year, at an average of 2.5 per household.</Bullet>
          <Bullet>5,000 residents over a project lifetime, with 15-year ownership and 5-year average residency.</Bullet>

          <HRule />

          <SectionHead>vision</SectionHead>
          <Val><em>Lotus Advantage</em> communities. housing that respects people and fosters thriving neighborhoods.</Val>
        </motion.div>

        <VRule />

        {/* COL 3 — the mechanism and the return */}
        <motion.div {...fade(0.36)} style={{ flex: 1, padding: "16px 0 16px 20px", overflowY: "auto" }}>
          <ColHead>the mechanism and the return.</ColHead>

          <SectionHead>how it works</SectionHead>
          <Val>the GP conduit provides capital with repayment for predevelopment and acquisition.</Val>
          <Val>tax credit investors repay those loans at construction closing, after LIHTC application and award.</Val>
          <Val>Impact Partners then receive GP interest and economics, including ownership, fees, and cash flow rights, upon repayment to the Impact Initiative.</Val>
          <Val>capital recycles into new projects, scaling impact without permanent lock-up.</Val>

          <HRule />

          <SectionHead>investment directive</SectionHead>
          <FieldLabel>year one commitment target.</FieldLabel>
          <Val>$16M to $20M total capital, averaging $3M per project across 6 projects.</Val>
          <FieldLabel>project hold period.</FieldLabel>
          <Val>18 years.</Val>
          <FieldLabel>return target.</FieldLabel>
          <Val>13 to 15 percent IRR, with a 2x to 3x multiple on invested capital.</Val>
          <FieldLabel>recommitment.</FieldLabel>
          <Val>annual subscription with a 1-year redemption window.</Val>
          <FieldLabel>transparency.</FieldLabel>
          <Val>quarterly KPI reporting and an annual investment summit.</Val>
        </motion.div>

      </div>

      {/* ── KICKER STRIP ── */}
      <motion.div {...fade(0.44)} style={{
        padding: "10px 48px 14px",
        borderTop: `1px solid rgba(66,66,66,0.1)`,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: theme.turquoise, flexShrink: 0 }} />
        <span style={{
          fontSize: "clamp(10px, 0.92vw, 13px)",
          fontWeight: 400, color: "#028faa",
          letterSpacing: "0.06em", textTransform: "lowercase", fontFamily: font,
        }}>
          this is more than impact investing. this is legacy building.
        </span>
      </motion.div>

    </div>
  );
}
