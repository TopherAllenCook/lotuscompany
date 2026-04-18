"use client";
import { motion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const BG       = "#ffffff";
const DARK     = "#424242";
const DARK_TQ  = "#028faa";
const TQ       = theme.turquoise;
const LB       = "#cee8ee";
const BODY     = "rgba(66,66,66,0.86)";
const STAT_LBL = "rgba(66,66,66,0.62)";

const S = { "1": 8, "2": 16, "3": 24, "4": 32, "5": 40, "6": 48, "7": 56 } as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: EASE_OUT },
});

function ColHeader({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <p style={{
        margin: "0 0 6px", fontFamily: font, fontWeight: 500,
        fontSize: "clamp(9px, 0.65vw, 10px)", color: DARK_TQ,
        letterSpacing: "0.22em", textTransform: "lowercase", lineHeight: 1,
      }}>{children}</p>
      <EditableEl
        id={id}
        label={`col underline — ${typeof children === "string" ? children : id}`}
        type="bar"
        style={{ width: 22, height: 1, background: TQ }}
      />
    </div>
  );
}

function Line({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 4px", fontFamily: font, fontWeight: 400,
      fontSize: "clamp(9px, 0.75vw, 12px)", color: BODY,
      letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1.6,
    }}>
      {label && <span style={{ fontWeight: 500, color: DARK }}>{label} </span>}
      {children}
    </p>
  );
}

export function ExecSummarySlide() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      fontFamily: font, overflow: "hidden",
      display: "flex",
    }}>

      {/* ── LEFT: PHOTO PANEL (44%) ── */}
      <div style={{ position: "relative", width: "44%", flexShrink: 0 }}>

        <motion.img
          src={asset("/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg")}
          alt=""
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 18, ease: "linear" }}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "50% 50%",
          }}
        />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.32) 55%, rgba(0,0,0,0.10) 100%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "0 36px 40px",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65, ease: EASE_OUT }}
          >
            <EditableText id="exec-summary:photo-headline" as="div" style={{
              fontFamily: font, fontWeight: 300,
              fontSize: "clamp(22px, 2.7vw, 42px)",
              color: "#fff", letterSpacing: "0.01em",
              textTransform: "lowercase", lineHeight: 1.15,
            }}>
              a proven model for dignified affordable housing<span style={{ color: TQ }}>.</span>
            </EditableText>
          </motion.div>
        </div>
      </div>

      {/* ── RIGHT: DATA PANEL (56%) ── */}
      <div style={{
        flex: 1, background: BG,
        display: "flex", flexDirection: "column",
        padding: `${S[5]}px ${S[7]}px ${S[4]}px ${S[5]}px`,
        overflow: "hidden",
      }}>

        {/* TITLE BAR */}
        <motion.div {...fade(0.08)} style={{
          flexShrink: 0,
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          paddingBottom: S[2],
          borderBottom: `1px solid ${LB}`,
          marginBottom: S[3],
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="20" height="20" viewBox="0 0 40 40" style={{ flexShrink: 0 }}>
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
              fontSize: "clamp(10px, 0.85vw, 14px)", color: DARK,
              letterSpacing: "0.01em", textTransform: "lowercase", lineHeight: 1,
            }}>
              executive summary. lotus impact initiative.
            </EditableText>
          </div>
          <span style={{
            fontFamily: font, fontWeight: 400,
            fontSize: "clamp(8px, 0.55vw, 9px)", color: "#a9c7cd",
            letterSpacing: "0.22em", textTransform: "lowercase",
          }}>
            03. executive summary.
          </span>
        </motion.div>

        {/* HERO STATS */}
        <motion.div {...fade(0.16)} style={{
          flexShrink: 0,
          background: "linear-gradient(180deg, rgba(206,232,238,0.55) 0%, rgba(206,232,238,0.15) 100%)",
          borderRadius: 3,
          padding: `${S[3]}px ${S[2]}px`,
          display: "flex", alignItems: "center",
          marginBottom: S[3],
        }}>
          {([
            { num: "800",    suffix: null, label: "units\nper year" },
            { num: "2,000",  suffix: null, label: "residents\nannually" },
            { num: "13–15",  suffix: "%",  label: "target\nirr" },
            { num: "$300",   suffix: "M",  label: "projected\nreturn" },
          ] as const).map((stat, i) => (
            <div key={i} style={{
              flex: 1, textAlign: "center",
              padding: `0 ${S[1]}px`,
              borderLeft: i > 0 ? "1px solid rgba(77,186,214,0.30)" : "none",
            }}>
              <EditableText id={`exec-summary:stat-num-${i}`} style={{
                fontFamily: font, fontWeight: 600, color: DARK_TQ,
                fontSize: "clamp(18px, 2.8vw, 44px)",
                lineHeight: 1, marginBottom: 4,
                letterSpacing: "-0.015em", whiteSpace: "nowrap",
              }}>
                {stat.num}
                {stat.suffix && (
                  <span style={{ fontSize: "clamp(12px, 1.8vw, 28px)", fontWeight: 500 }}>
                    {stat.suffix}
                  </span>
                )}
              </EditableText>
              <EditableText id={`exec-summary:stat-label-${i}`} style={{
                fontFamily: font, fontWeight: 400, color: STAT_LBL,
                fontSize: "clamp(8px, 0.55vw, 9px)",
                letterSpacing: "0.05em", textTransform: "lowercase",
                lineHeight: 1.45, whiteSpace: "pre-line",
              }}>
                {stat.label}
              </EditableText>
            </div>
          ))}
        </motion.div>

        {/* THREE COLUMNS */}
        <div style={{
          flex: 1, minHeight: 0,
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: `0 ${S[5]}px`,
        }}>
          <motion.div {...fade(0.24)}>
            <ColHeader id="exec-summary:col-underline-0">the initiative</ColHeader>
            <Line label="goal.">8 projects per year, phase one.</Line>
            <Line label="units.">800 annually, under 60% ami.</Line>
            <Line label="residents.">2,000 per year. 5,000 over lifetime.</Line>
            <Line label="vision.">lotus advantage communities.</Line>
          </motion.div>

          <motion.div {...fade(0.30)}>
            <ColHeader id="exec-summary:col-underline-1">how it works</ColHeader>
            <Line>gp conduit funds predevelopment + acquisition.</Line>
            <Line>tax credit investors repay at construction closing.</Line>
            <Line>impact partners earn gp interest after repayment.</Line>
            <Line>capital recycles. no permanent lock-up.</Line>
          </motion.div>

          <motion.div {...fade(0.36)}>
            <ColHeader id="exec-summary:col-underline-2">investment terms</ColHeader>
            <Line label="commitment.">$16m to $20m, year one.</Line>
            <Line label="hold.">18 years.</Line>
            <Line label="return.">13–15% irr, 2x–3x moic.</Line>
            <Line label="reporting.">quarterly kpis, annual summit.</Line>
          </motion.div>
        </div>

        {/* KICKER */}
        <motion.div {...fade(0.42)} style={{
          flexShrink: 0,
          marginTop: S[2],
          paddingTop: S[2],
          borderTop: `1px solid ${LB}`,
          display: "flex", alignItems: "center", gap: S[3],
        }}>
          <EditableText id="exec-summary:kicker" as="p" style={{
            margin: 0, fontFamily: font, fontWeight: 500,
            fontSize: "clamp(9px, 0.9vw, 14px)", color: DARK_TQ,
            letterSpacing: "0.01em", textTransform: "lowercase", whiteSpace: "nowrap",
          }}>
            this is more than impact investing. this is legacy building.
          </EditableText>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: S[1] }}>
            <EditableEl id="exec-summary:kicker-line" label="kicker gradient line" type="bar" style={{
              flex: 1, height: 1,
              background: `linear-gradient(90deg, ${TQ} 0%, ${LB} 60%, transparent 100%)`,
            }} />
            <EditableEl id="exec-summary:kicker-dot" label="kicker dot" type="dot"
              style={{ width: 7, height: 7, borderRadius: "50%", background: TQ, flexShrink: 0 }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
