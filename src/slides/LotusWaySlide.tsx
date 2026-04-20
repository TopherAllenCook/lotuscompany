"use client";
import { motion, useReducedMotion } from "framer-motion";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: EASE_OUT },
});

const CRITERIA = [
  "How does the project location exemplify the Lotus Way in its criteria for selection?",
  "How does the project design align with the resident needs and demographics the project is built for?",
  "How does this project establish an elevated market precedence for the quality of affordable housing?",
  "What specific site, exterior and interior design decisions were made that exemplify this standard?",
  "What cost controlling factors or financial tools were utilized to ensure we delivered the highest standard achievable?",
];

export function LotusWaySlide() {
  const reduced = useReducedMotion();

  const panelAnim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.35, duration: 0.4, ease: EASE_OUT },
      };

  const itemAnim = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, x: 8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.60 + i * 0.06, duration: 0.45, ease: EASE_OUT },
        };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#050a0c",
        fontFamily: font,
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <motion.img
        src={asset("/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg")}
        alt=""
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 18, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "60% center",
        }}
      />

      {/* Dark overlay — heavier on left and right where text lives */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(16,20,24,0.82) 0%, rgba(16,20,24,0.50) 42%, rgba(16,20,24,0.78) 100%)",
        }}
      />

      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(to top, rgba(16,20,24,0.80) 0%, transparent 100%)",
        }}
      />

      {/* Slide number */}
      <motion.div
        {...(reduced ? {} : enter(0.08))}
        style={{
          position: "absolute",
          top: 43,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <EditableText
          id="lotus-way:slide-num"
          as="span"
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.50em",
            color: "rgba(206,232,238,0.18)",
            textTransform: "lowercase",
          }}
        >
          06 / steelton village
        </EditableText>
      </motion.div>

      {/* Two-column body */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          padding: "120px 80px",
          gap: 120,
        }}
      >
        {/* LEFT: Philosophy + Principles */}
        <div
          style={{
            flex: "0 0 520px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Eyebrow */}
          <motion.div
            {...(reduced ? {} : enter(0.2))}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 24,
                height: 1,
                background: theme.turquoise,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <EditableText
              id="lotus-way:eyebrow"
              as="span"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: theme.turquoise,
                textTransform: "lowercase",
              }}
            >
              the lotus way
            </EditableText>
            <span
              aria-hidden="true"
              style={{ fontSize: 13, color: theme.turquoise, lineHeight: 1 }}
            >
              •
            </span>
            <EditableText
              id="lotus-way:org-label"
              as="span"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: theme.turquoise,
                textTransform: "lowercase",
              }}
            >
              lotus impact initiative
            </EditableText>
          </motion.div>

          {/* Hero statement */}
          <motion.div {...(reduced ? {} : enter(0.30))}>
            <EditableText
              id="lotus-way:quote"
              as="div"
              style={{
                fontSize: 52,
                fontWeight: 300,
                color: "#fff",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
                marginBottom: 40,
              }}
            >
              We believe the psychology associated with the spaces we occupy
              defines the outcomes we achieve.
            </EditableText>
          </motion.div>

          {/* Principle: Dignity First */}
          <motion.div
            {...(reduced ? {} : enter(0.45))}
            style={{
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
              paddingBottom: 24,
            }}
          >
            <div
              style={{
                width: 3,
                minHeight: 52,
                background: theme.turquoise,
                flexShrink: 0,
                borderRadius: 2,
              }}
            />
            <div>
              <EditableText
                id="lotus-way:dignity-label"
                as="div"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: theme.turquoise,
                  letterSpacing: "0.08em",
                  textTransform: "lowercase",
                  marginBottom: 6,
                }}
              >
                dignity first
              </EditableText>
              <EditableText
                id="lotus-way:dignity-body"
                as="div"
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.55,
                }}
              >
                Our developments are designed for livability, sustainability,
                and community well-being.
              </EditableText>
            </div>
          </motion.div>

          {/* Principle: Mindfully Creating */}
          <motion.div
            {...(reduced ? {} : enter(0.55))}
            style={{
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 3,
                minHeight: 52,
                background: theme.turquoise,
                flexShrink: 0,
                borderRadius: 2,
              }}
            />
            <div>
              <EditableText
                id="lotus-way:mindful-label"
                as="div"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: theme.turquoise,
                  letterSpacing: "0.08em",
                  textTransform: "lowercase",
                  marginBottom: 6,
                }}
              >
                mindfully creating
              </EditableText>
              <EditableText
                id="lotus-way:mindful-body"
                as="div"
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.55,
                }}
              >
                Market-rate quality finishes and thoughtful design that inspires
                pride of place, raising the bar for what affordable housing
                should look and feel like.
              </EditableText>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Ethos + Qualification panel */}
        <EditableEl
          id="lotus-way:right-panel"
          label="right panel"
          type="card"
          style={{ flex: "0 0 620px" }}
        >
          <motion.div
            {...panelAnim}
            style={{
              background: "rgba(20,28,34,0.72)",
              backdropFilter: "blur(14px) saturate(1.05)",
              WebkitBackdropFilter: "blur(14px) saturate(1.05)",
              border: "1px solid rgba(205,232,238,0.15)",
              borderRadius: 4,
              padding: "48px 56px",
            }}
          >
            {/* Lotus Ethos heading */}
            <EditableText
              id="lotus-way:ethos-label"
              as="div"
              style={{
                fontSize: 30,
                fontWeight: 400,
                color: "#fff",
                textTransform: "lowercase",
                letterSpacing: "-0.01em",
                marginBottom: 16,
              }}
            >
              lotus ethos
            </EditableText>

            {/* Ethos body — upright, left border instead of italic */}
            <div
              style={{
                borderLeft: "3px solid #4dbad6",
                paddingLeft: 12,
                marginBottom: 24,
              }}
            >
              <EditableText
                id="lotus-way:ethos-body"
                as="div"
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.6,
                }}
              >
                Achieving results that represent the Lotus Way starts with
                alignment in the ethos we surround ourselves with: the language
                we speak, people we hire, cities we select, and partners we rely
                upon. Impact always leads.
              </EditableText>
            </div>

            {/* Divider before qualification */}
            <div
              style={{
                height: 1,
                background: "rgba(205,232,238,0.18)",
                marginBottom: 24,
              }}
            />

            {/* Standard eyebrow */}
            <EditableText
              id="lotus-way:standard-header"
              as="div"
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: theme.turquoise,
                letterSpacing: "0.18em",
                textTransform: "lowercase",
                marginBottom: 8,
              }}
            >
              how do we uphold this standard?
            </EditableText>

            {/* Qualification heading */}
            <EditableText
              id="lotus-way:qualification-label"
              as="div"
              style={{
                fontSize: 30,
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "-0.01em",
                textTransform: "lowercase",
                marginBottom: 20,
              }}
            >
              project qualification
            </EditableText>

            {/* Criteria list */}
            <ol
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {CRITERIA.map((item, i) => (
                <motion.li
                  key={i}
                  {...itemAnim(i)}
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <EditableText
                    id={`lotus-way:q-num-${i}`}
                    as="span"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: theme.turquoise,
                      flexShrink: 0,
                      width: 28,
                      paddingTop: 1,
                    }}
                  >
                    {i + 1}.
                  </EditableText>
                  <EditableText
                    id={`lotus-way:q-${i}`}
                    as="span"
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.92)",
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </EditableText>
                </motion.li>
              ))}
            </ol>

            {/* Example line */}
            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: "1px solid rgba(205,232,238,0.10)",
              }}
            >
              <EditableText
                id="lotus-way:q-sub"
                as="div"
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "rgba(205,232,238,0.78)",
                  lineHeight: 1.65,
                }}
              >
                <span
                  style={{ color: theme.turquoise, fontWeight: 600 }}
                >
                  Example:{" "}
                </span>
                Competitive tax credit secured ensures project budget can be
                elevated to include heightened design standards.
              </EditableText>
            </div>
          </motion.div>
        </EditableEl>
      </div>
    </div>
  );
}
