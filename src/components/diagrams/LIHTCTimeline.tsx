"use client";

import { EditableText } from "@/components/EditableText";

const nodes = [
  { id: 1, label: "site\ncontrol",              phase: "execution" },
  { id: 2, label: "predevelopment",             phase: "execution" },
  { id: 3, label: "market study\n+ application", phase: "execution" },
  { id: 4, label: "award or\nbond path",        phase: "execution" },
  { id: 5, label: "construction\nclose",        phase: "execution" },
  { id: 6, label: "placed in\nservice",         phase: "compliance" },
  { id: 7, label: "10-year\ncredit period",     phase: "compliance" },
  { id: 8, label: "15-year\ncompliance",        phase: "compliance" },
];

export function LIHTCTimeline({
  width = 780,
  height = 100,
}: {
  width?: number;
  height?: number;
}) {
  const nodeSpacing = width / 9;
  const lineY = 20;
  const textY = 55;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
      <defs>
        <marker id="arrowhead-timeline" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#4dbad6" opacity="0.5" />
        </marker>
      </defs>

      <line x1={nodeSpacing} y1={lineY} x2={width - nodeSpacing} y2={lineY}
        stroke="#4dbad6" strokeWidth="1" opacity="0.3" />

      {nodes.map((node, idx) => {
        const x = nodeSpacing * (idx + 1);
        const isExecution = node.phase === "execution";
        const nodeOpacity = isExecution ? 1 : 0.5;
        const circleFill = isExecution ? "#4dbad6" : "rgba(77,186,214,0.4)";

        return (
          <g key={`node-${node.id}`}>
            {idx < nodes.length - 1 && (
              <line
                x1={x + 8} y1={lineY} x2={nodeSpacing * (idx + 2) - 8} y2={lineY}
                stroke="#4dbad6" strokeWidth="1" opacity="0.4"
                markerEnd="url(#arrowhead-timeline)"
              />
            )}
            <circle cx={x} cy={lineY} r="6" fill={circleFill} opacity={nodeOpacity} />

            {/* Editable label via foreignObject */}
            <foreignObject x={x - 36} y={textY} width={72} height={40}>
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <EditableText
                  id={`lihtc-timeline:text-${node.id}`}
                  as="span"
                  style={{
                    fontSize: "9px",
                    color: "#cee8ee",
                    fontFamily: "'Futura PT', sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre-wrap",
                    textTransform: "lowercase",
                    display: "block",
                    opacity: nodeOpacity,
                    lineHeight: 1.4,
                  }}
                >
                  {node.label}
                </EditableText>
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}
