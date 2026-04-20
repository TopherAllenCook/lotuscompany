"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const enter = (delay: number, x = 0) => ({
  initial:   { opacity: 0, y: x === 0 ? 16 : 0, x },
  animate:   { opacity: 1, y: 0, x: 0 },
  transition: { delay, duration: 0.75, ease: EASE_OUT },
});

const CRITERIA = [
  "How does the project location exemplify the Lotus Way in its criteria for selection?",
  "How does the project design align with the resident needs and demographics the project is built for?",
  "How does this project establish an elevated market precedence for the quality of affordable housing?",
  "What specific site, exterior and interior design decisions were made that exemplify this standard?",
  "What cost controlling factors or financial tools were utilized to ensure we delivered the highest standard achievable?",
];

export function LotusWaySlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#050a0c", fontFamily: font, overflow: "hidden" }}>

      {/* Background image — revealed on right side */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 18, ease: "linear" }}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "60% center",
        }}
      />

      {/* Left-to-right fog — content readable, image breathes on right */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(100deg, rgba(5,10,12,0.97) 0%, rgba(5,10,12,0.94) 38%, rgba(5,10,12,0.75) 58%, rgba(5,10,12,0.25) 80%, rgba(5,10,12,0.10) 100%)",
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
        background: "linear-gradient(to top, rgba(5,10,12,0.90) 0%, transparent 100%)",
      }} />

      {/* ── Header bar ───────────────────────────────────────────────── */}
      <motion.div {...enter(0)} style={{ position: "absolute", top: 36, left: 52 }}>
        <LotusMark width={156} onDark />
      </motion.div>

      <motion.div {...enter(0.08)} style={{ position: "absolute", top: 43, left: "50%", transform: "translateX(-50%)" }}>
        <EditableText id="lotus-way:slide-num" as="span" style={{
          fontSize: 11, fontWeight: 400, letterSpacing: "0.50em",
          color: "rgba(206,232,238,0.18)", textTransform: "lowercase",
        }}>
          06 / steelton village
        </EditableText>
      </motion.div>

      {/* ── Two-column body ───────────────────────────────────────────── */}
      <div style={{
        position: "absolute", top: 80, bottom: 0, left: 0, right: 0,
        display: "flex",
      }}>

        {/* ── LEFT: Philosophy + Principles ────────────────────────── */}
        <div style={{
          flex: "0 0 46%",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 32px 24px 52px",
        }}>

          {/* Eyebrow */}
          <motion.div {...enter(0.2)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
            <EditableEl id="lotus-way:rule" label="eyebrow rule" type="bar"
              style={{ width: 24, height: 1.5, background: theme.turquoise, flexShrink: 0 }} />
            <EditableText id="lotus-way:eyebrow" as="span" style={{
              fontSize: 11, fontWeight: 400, letterSpacing: "0.46em",
              color: theme.turquoise, textTransform: "lowercase",
            }}>
              the lotus way
            </EditableText>
            <EditableText id="lotus-way:org-label" as="span" style={{
              fontSize: 10, fontWeight: 400, letterSpacing: "0.22em",
              color: "rgba(206,232,238,0.22)", textTransform: "lowercase",
            }}>
              · lotus impact initiative
            </EditableText>
          </motion.div>

          {/* Hero philosophy statement */}
          <motion.div {...enter(0.3)}>
            <EditableText id="lotus-way:quote" as="div" style={{
              fontSize: "clamp(26px, 3.2vw, 46px)",
              fontWeight: 300,
              color: "#fff",
              letterSpacing: "-0.01em",
              lineHeight: 1.35,
              marginBottom: 36,
              maxWidth: 560,
            }}>
              We believe the psychology associated with the spaces we occupy defines the outcomes we achieve.
            </EditableText>
          </motion.div>

          {/* Principle — Dignity First */}
          <motion.div {...enter(0.48)} style={{
            display: "flex", gap: 18, alignItems: "flex-start",
            padding: "20px 0",
            borderTop: "1px solid rgba(206,232,238,0.09)",
          }}>
            <div style={{ width: 2.5, height: "100%", minHeight: 52, background: theme.turquoise, flexShrink: 0, borderRadius: 2 }} />
            <div>
              <EditableText id="lotus-way:dignity-label" as="div" style={{
                fontSize: 18, fontWeight: 500, color: "#fff",
                letterSpacing: "0.22em", textTransform: "lowercase", marginBottom: 7,
              }}>
                dignity first
              </EditableText>
              <EditableText id="lotus-way:dignity-body" as="div" style={{
                fontSize: 17, fontWeight: 300,
                color: "rgba(206,232,238,0.58)",
                letterSpacing: "0.02em", lineHeight: 1.65,
              }}>
                Our developments are designed for livability, sustainability, and community well-being.
              </EditableText>
            </div>
          </motion.div>

          {/* Principle — Mindfully Creating */}
          <motion.div {...enter(0.60)} style={{
            display: "flex", gap: 18, alignItems: "flex-start",
            padding: "20px 0",
            borderTop: "1px solid rgba(206,232,238,0.09)",
          }}>
            <div style={{ width: 2.5, height: "100%", minHeight: 52, background: theme.turquoise, flexShrink: 0, borderRadius: 2 }} />
            <div>
              <EditableText id="lotus-way:mindful-label" as="div" style={{
                fontSize: 18, fontWeight: 500, color: "#fff",
                letterSpacing: "0.22em", textTransform: "lowercase", marginBottom: 7,
              }}>
                mindfully creating
              </EditableText>
              <EditableText id="lotus-way:mindful-body" as="div" style={{
                fontSize: 17, fontWeight: 300,
                color: "rgba(206,232,238,0.58)",
                letterSpacing: "0.02em", lineHeight: 1.65,
              }}>
                Market-rate quality finishes and thoughtful design that inspires pride of place — raising the bar for what affordable housing should look and feel like.
              </EditableText>
            </div>
          </motion.div>

          <div style={{ height: 1, background: "rgba(206,232,238,0.09)" }} />
        </div>

        {/* Column divider */}
        <div style={{ width: 1, background: "rgba(206,232,238,0.07)", flexShrink: 0, margin: "0 0 48px" }} />

        {/* ── RIGHT: Ethos + Project Qualification ─────────────────── */}
        <motion.div
          {...enter(0.35, 18)}
          style={{
            flex: 1,
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "0 52px 24px 36px",
          }}
        >

          {/* Lotus Ethos — glass callout */}
          <EditableEl id="lotus-way:ethos-card" label="ethos callout" type="card" style={{
            marginBottom: 24,
            padding: "16px 20px",
            background: "rgba(77,186,214,0.05)",
            borderRadius: 10,
            border: "1px solid rgba(77,186,214,0.13)",
          }}>
            <EditableText id="lotus-way:ethos-label" as="div" style={{
              fontSize: 13, fontWeight: 600, color: theme.turquoise,
              letterSpacing: "0.32em", textTransform: "lowercase", marginBottom: 8,
            }}>
              lotus ethos
            </EditableText>
            <EditableText id="lotus-way:ethos-body" as="div" style={{
              fontSize: 17, fontWeight: 300,
              color: "rgba(206,232,238,0.50)",
              letterSpacing: "0.02em", lineHeight: 1.70, fontStyle: "italic",
            }}>
              Achieving results that represent the Lotus Way starts with alignment in the ethos we surround ourselves with — the language we speak, people we hire, cities we select, and partners we rely upon. Impact always leads.
            </EditableText>
          </EditableEl>

          {/* How we uphold / Project Qualification */}
          <motion.div {...enter(0.55)}>
            <EditableText id="lotus-way:standard-header" as="div" style={{
              fontSize: 10, fontWeight: 400,
              color: "rgba(206,232,238,0.34)",
              letterSpacing: "0.38em", textTransform: "lowercase", marginBottom: 8,
            }}>
              how do we uphold this standard?
            </EditableText>
            <EditableText id="lotus-way:qualification-label" as="div" style={{
              fontSize: 24, fontWeight: 400, color: "#fff",
              letterSpacing: "0.14em", textTransform: "lowercase", marginBottom: 14,
            }}>
              project qualification
            </EditableText>
          </motion.div>

          {/* Criteria */}
          <div>
            {CRITERIA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + i * 0.07, duration: 0.55, ease: EASE_OUT }}
                style={{
                  display: "flex", gap: 14, alignItems: "flex-start",
                  padding: "9px 0",
                  borderTop: "1px solid rgba(206,232,238,0.07)",
                }}
              >
                <EditableText id={`lotus-way:q-num-${i}`} as="span" style={{
                  fontSize: 14, fontWeight: 500, color: theme.turquoise,
                  letterSpacing: "0.10em", flexShrink: 0, paddingTop: 2, minWidth: 20,
                }}>
                  {i + 1}.
                </EditableText>
                <EditableText id={`lotus-way:q-${i}`} as="span" style={{
                  fontSize: 17, fontWeight: 300,
                  color: "rgba(206,232,238,0.60)",
                  letterSpacing: "0.02em", lineHeight: 1.6,
                }}>
                  {item}
                </EditableText>
              </motion.div>
            ))}
            <div style={{ height: 1, background: "rgba(206,232,238,0.07)" }} />
          </div>

          {/* Sub-note */}
          <motion.div {...enter(1.05)} style={{ paddingTop: 9, paddingLeft: 30 }}>
            <EditableText id="lotus-way:q-sub" as="div" style={{
              fontSize: 13, fontWeight: 300,
              color: "rgba(206,232,238,0.27)",
              letterSpacing: "0.02em", lineHeight: 1.65, fontStyle: "italic",
            }}>
              e.g. Competitive tax credit secured ensures project budget can be elevated to include heightened design standards.
            </EditableText>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
