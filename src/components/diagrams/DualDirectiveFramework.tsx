"use client";

import { EditableSvgNode } from "@/components/diagrams/EditableSvgNode";

const nodes = [
  { id: "dual-directive:node-root", textId: "dual-directive:text-root", label: "annual directive reset",    x: 320, y: 40,  isRoot: true,   text: "annual directive\nreset" },
  { id: "dual-directive:node-inv",  textId: "dual-directive:text-inv",  label: "investment directive",      x: 180, y: 120, isBranch: true, text: "investment\ndirective" },
  { id: "dual-directive:node-imp",  textId: "dual-directive:text-imp",  label: "impact directive",          x: 460, y: 120, isBranch: true, text: "impact\ndirective" },
  { id: "dual-directive:node-inv1", textId: "dual-directive:text-inv1", label: "return target range",       x: 80,  y: 240, text: "return target\nrange" },
  { id: "dual-directive:node-inv2", textId: "dual-directive:text-inv2", label: "risk limits",               x: 180, y: 240, text: "risk limits" },
  { id: "dual-directive:node-inv3", textId: "dual-directive:text-inv3", label: "recycling cadence",         x: 280, y: 240, text: "recycling\ncadence" },
  { id: "dual-directive:node-imp1", textId: "dual-directive:text-imp1", label: "units + ami targets",       x: 360, y: 240, text: "units + ami\ntargets" },
  { id: "dual-directive:node-imp2", textId: "dual-directive:text-imp2", label: "service tier",              x: 460, y: 240, text: "service tier" },
  { id: "dual-directive:node-imp3", textId: "dual-directive:text-imp3", label: "place-based priorities",    x: 560, y: 240, text: "place-based\npriorities" },
  { id: "dual-directive:node-imp4", textId: "dual-directive:text-imp4", label: "guardrails",                x: 660, y: 240, text: "guardrails" },
];

const connections = [
  { fromIdx: 0, toIdx: 1 }, { fromIdx: 0, toIdx: 2 },
  { fromIdx: 1, toIdx: 3 }, { fromIdx: 1, toIdx: 4 }, { fromIdx: 1, toIdx: 5 },
  { fromIdx: 2, toIdx: 6 }, { fromIdx: 2, toIdx: 7 }, { fromIdx: 2, toIdx: 8 }, { fromIdx: 2, toIdx: 9 },
];

export function DualDirectiveFramework({
  width = 640,
  height = 380,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 760 320" preserveAspectRatio="xMidYMid meet" style={{ overflow: "hidden" }}>
      {connections.map((conn, idx) => {
        const from = nodes[conn.fromIdx];
        const to = nodes[conn.toIdx];
        return (
          <line
            key={`line-${idx}`}
            x1={from.x} y1={from.y + 24}
            x2={to.x}   y2={to.y - 24}
            stroke="#4dbad6" strokeWidth="1" opacity="0.4"
          />
        );
      })}

      {nodes.map((node) => (
        <EditableSvgNode
          key={node.id}
          id={node.id}
          label={node.label}
          textId={node.textId}
          x={node.x - 48} y={node.y - 24}
          width={96} height={48}
          rx={3}
          fill={node.isRoot ? "rgba(77,186,214,0.15)" : "rgba(77,186,214,0.08)"}
          stroke="rgba(77,186,214,0.3)"
        >
          {node.text}
        </EditableSvgNode>
      ))}
    </svg>
  );
}
