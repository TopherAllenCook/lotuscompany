"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: EASE_OUT },
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 6px",
      fontSize: "clamp(10px, 0.9vw, 13px)",
      fontWeight: 600, color: theme.turquoise,
      letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: font,
    }}>{children}</p>
  );
}

function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{
      margin: "0 0 4px",
      fontSize: "clamp(10px, 0.88vw, 13px)",
      fontWeight: 400, color: "#424242",
      letterSpacing: "0.02em", lineHeight: 1.65, fontFamily: font,
      ...style,
    }}>{children}</p>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 700 }}>{children}</span>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 3 }}>
      <span style={{ color: theme.turquoise, fontFamily: font, fontSize: "clamp(10px, 0.88vw, 13px)", lineHeight: 1.65, flexShrink: 0 }}>•</span>
      <p style={{ margin: 0, fontSize: "clamp(10px, 0.88vw, 13px)", fontWeight: 400, color: "#424242", letterSpacing: "0.02em", lineHeight: 1.65, fontFamily: font }}>{children}</p>
    </div>
  );
}

function Rule() {
  return <div style={{ height: 1, background: "rgba(66,66,66,0.12)", margin: "10px 0" }} />;
}

export function ExecSummarySlide() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "#fff", fontFamily: font,
      overflow: "hidden",
      display: "flex", flexDirection: "column",
      padding: "36px 52px 32px",
    }}>

      {/* Header */}
      <motion.div {...fade(0.05)}>
        <h1 style={{
          margin: "0 0 10px",
          fontSize: "clamp(18px, 2.0vw, 30px)",
          fontWeight: 700, color: "#1a1a1a",
          letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font,
          lineHeight: 1.1,
        }}>
          Executive Summary&nbsp;
          <span style={{ color: "rgba(66,66,66,0.4)", fontWeight: 300 }}>—</span>
          &nbsp;Lotus Impact Initiative
        </h1>
        <div style={{ height: 2, background: "#1a1a1a", marginBottom: 18 }} />
      </motion.div>

      {/* Two-column body */}
      <div style={{ flex: 1, display: "flex", gap: 40, minHeight: 0 }}>

        {/* LEFT COLUMN */}
        <motion.div {...fade(0.15)} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>

          {/* Why This Matters */}
          <SectionLabel>Why This Matters</SectionLabel>
          <Body><Bold>Housing Crisis:</Bold> Millions face unaffordable housing, eroding stability and quality of life.</Body>
          <Body><Bold>Communities at Risk:</Bold> Families struggle to find dignified, attainable homes, impacting health, education, and opportunity.</Body>

          <Rule />

          {/* The Impact Initiative */}
          <SectionLabel>The Impact Initiative</SectionLabel>
          <Body><Bold>Goal:</Bold> Launch 8 Affordable Housing Projects per Year (Phase 1).</Body>
          <Body style={{ marginBottom: 4 }}><Bold>Impact Directive 2026:</Bold></Body>
          <Bullet><Bold>800 Affordable Units Annually</Bold> (6 projects × 125 units each). (&lt;60% AMI)</Bullet>
          <Bullet><Bold>2,000 Low-Income Residents Served Each Year</Bold> (avg. 2.5 persons per household).</Bullet>
          <Bullet><Bold>5,000 Residents Over Project Lifetime</Bold> (15-year ownership, 5-year avg. residency).</Bullet>
          <Body style={{ marginTop: 4 }}><Bold>Vision:</Bold> <em>Lotus Advantage</em> communities—housing that respects people and fosters thriving neighborhoods.</Body>

          <Rule />

          {/* The Lotus Way */}
          <SectionLabel>The Lotus Way</SectionLabel>
          <Body><Bold>Dignified Housing:</Bold> Homes designed for livability, sustainability, and community well-being.</Body>
          <Body><Bold>Mindfully Creating:</Bold> Integrating thoughtful design and social impact into every project.</Body>

        </motion.div>

        {/* Vertical divider */}
        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT }}
          style={{ width: 1, background: "rgba(66,66,66,0.1)", transformOrigin: "top", flexShrink: 0 }}
        />

        {/* RIGHT COLUMN */}
        <motion.div {...fade(0.25)} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>

          {/* How It Works */}
          <SectionLabel>How It Works — Simple Terms</SectionLabel>
          <Body><Bold>What is LIHTC and how does it work?</Bold></Body>
          <Body style={{ marginBottom: 4 }}><Bold>GP Conduit Structure:</Bold></Body>
          <Bullet>Provides <Bold>capital with repayment</Bold> for predevelopment/acquisition.</Bullet>
          <Bullet><Bold>Tax Credit Investors repay loans at construction closing</Bold> after LIHTC application and award.</Bullet>
          <Bullet>Impact Partners Investment receive <Bold>GP interest and economics</Bold> (ownership, fees, cash flow rights) upon repayment to the Impact Initiative.</Bullet>
          <Body style={{ marginTop: 4 }}><Bold>Result:</Bold> Capital recycles into new projects, scaling impact without permanent lock-up.</Body>

          <Rule />

          {/* Investment Directive */}
          <SectionLabel>Investment Directive</SectionLabel>
          <Body><Bold>Year 1 Capital Commitment Target:</Bold> $16–20M Total Capital (avg. $3M per project × 6 projects).</Body>
          <Body style={{ marginBottom: 4 }}><Bold>Investment Return Targets / Project:</Bold></Body>
          <Body style={{ paddingLeft: 16 }}><Bold>Project Hold Period:</Bold> 18 years</Body>
          <Body style={{ paddingLeft: 16, marginBottom: 4 }}><Bold>Return:</Bold> 13–15% IRR target; 2–3x multiple on invested capital</Body>
          <Body><Bold>Recommitment:</Bold> Annual subscription with 1-year redemption window.</Body>
          <Body><Bold>Transparency:</Bold> Quarterly KPI reporting + Annual Investment Summit.</Body>
          <Body><Bold>Projected Return:</Bold> $300M total return to investors over 25 years with 10-years of annual recommitment.</Body>

        </motion.div>
      </div>

      {/* Slide number */}
      <motion.span
        {...fade(0.35)}
        style={{
          position: "absolute", bottom: 24, right: 52,
          fontSize: 11, fontWeight: 400, color: "rgba(66,66,66,0.35)",
          letterSpacing: "0.22em", fontFamily: font,
        }}
      >03</motion.span>

    </div>
  );
}
