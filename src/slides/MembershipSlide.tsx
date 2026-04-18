"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

export default function MembershipSlide() {
  const steps = [
    { label: "qualification", index: 0 },
    { label: "initial commitment", index: 1 },
    { label: "quarterly reporting", index: 2 },
    { label: "annual summit + directive reset", index: 3 },
    { label: "recommit / resize / redeem", index: 4 },
  ];

  const nodeRadius = 18;
  const nodeYPos = 60;
  const spacing = 320 / (steps.length + 1);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
      }}
    >
      <StatusChip status="READY" />

      <div style={{ display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <div style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "40px" }}>
          <EditableText
            id="membership:eyebrow"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              letterSpacing: "0.2em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            membership model
          </EditableText>

          <EditableText
            id="membership:headline"
            as="h1"
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "24px",
            }}
          >
            small by design. built to last.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            <EditableText
              id="membership:bullet-1"
              as="div"
              style={{
                fontSize: "14px",
                color: theme.lightBlue,
                fontWeight: 300,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              target partner count: 10 to 30 households.
            </EditableText>

            <EditableText
              id="membership:bullet-2"
              as="div"
              style={{
                fontSize: "14px",
                color: theme.lightBlue,
                fontWeight: 300,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              annual recommit, redeem, or resize election.
            </EditableText>

            <EditableText
              id="membership:bullet-3"
              as="div"
              style={{
                fontSize: "14px",
                color: theme.lightBlue,
                fontWeight: 300,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              each partner sees the same reporting spine and directive memo.
            </EditableText>

            <EditableText
              id="membership:bullet-4"
              as="div"
              style={{
                fontSize: "14px",
                color: theme.lightBlue,
                fontWeight: 300,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              prior deals are not restated when the member base changes.
            </EditableText>
          </div>

          <EditableText
            id="membership:closing"
            as="div"
            style={{
              fontSize: "12px",
              color: theme.turquoise,
              fontWeight: 300,
              fontFamily: font,
              letterSpacing: "0.08em",
              textTransform: "lowercase",
            }}
          >
            the right fit matters more than the largest check.
          </EditableText>
        </div>

        {/* Right Diagram - Membership Flow */}
        <div style={{ flex: "0 0 45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="320" height="260" viewBox="0 0 320 260">
            {/* Connecting lines */}
            {steps.map((_, idx) => {
              if (idx < steps.length - 1) {
                const x1 = spacing * (idx + 1) + nodeRadius;
                const x2 = spacing * (idx + 2) - nodeRadius;
                return (
                  <line
                    key={`line-${idx}`}
                    x1={x1}
                    y1={nodeYPos}
                    x2={x2}
                    y2={nodeYPos}
                    stroke="rgba(77, 186, 214, 0.3)"
                    strokeWidth="1"
                  />
                );
              }
              return null;
            })}

            {/* Nodes and labels */}
            {steps.map((step) => {
              const xPos = spacing * (step.index + 1);
              return (
                <g key={`node-${step.index}`}>
                  {/* Node circle */}
                  <circle cx={xPos} cy={nodeYPos} r={nodeRadius} fill="rgba(77, 186, 214, 0.1)" stroke="#4dbad6" strokeWidth="1" />

                  {/* Number text in node */}
                  <text
                    x={xPos}
                    y={nodeYPos}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#cee8ee"
                    fontSize="11"
                    fontFamily={font}
                    fontWeight="300"
                  >
                    {step.index + 1}
                  </text>

                  {/* Label below node */}
                  <text
                    x={xPos}
                    y={nodeYPos + 40}
                    textAnchor="middle"
                    dominantBaseline="text-before-edge"
                    fill="#cee8ee"
                    fontSize="10"
                    fontFamily={font}
                    fontWeight="300"
                  >
                    {step.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <SlideFooter slideKey="membership" slideNum="09" sectionLabel="model" />
    </div>
  );
}
