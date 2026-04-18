"use client";

import { EditableSvgNode } from "@/components/diagrams/EditableSvgNode";

const nodes = [
  { id: "capital-recycling:node-1", textId: "capital-recycling:text-1", label: "partner capital",                  x: 60,  y: 150, text: "partner capital" },
  { id: "capital-recycling:node-2", textId: "capital-recycling:text-2", label: "predevelopment + acquisition",     x: 140, y: 40,  text: "predevelopment +\nacquisition advance" },
  { id: "capital-recycling:node-3", textId: "capital-recycling:text-3", label: "lihtc award + construction close", x: 340, y: 40,  text: "lihtc award +\nconstruction close" },
  { id: "capital-recycling:node-4", textId: "capital-recycling:text-4", label: "advance repaid",                   x: 420, y: 150, text: "advance\nrepaid" },
  { id: "capital-recycling:node-5", textId: "capital-recycling:text-5", label: "gp / co-gp economics retained",    x: 340, y: 260, text: "gp / co-gp\neconomics retained" },
  { id: "capital-recycling:node-6", textId: "capital-recycling:text-6", label: "capital redeployed",               x: 140, y: 260, text: "capital\nredeployed" },
];

const connections = [
  { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
  { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 0 },
];

export function CapitalRecyclingLoop({
  width = 560,
  height = 300,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
      <defs>
        <marker id="arrowhead-turquoise" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#4dbad6" opacity="0.6" />
        </marker>
      </defs>

      {connections.map((conn, idx) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        return (
          <line
            key={`line-${idx}`}
            x1={from.x} y1={from.y}
            x2={to.x}   y2={to.y}
            stroke="#4dbad6" strokeWidth="1.2" opacity="0.6"
            markerEnd="url(#arrowhead-turquoise)"
          />
        );
      })}

      {nodes.map((node) => (
        <EditableSvgNode
          key={node.id}
          id={node.id}
          label={node.label}
          textId={node.textId}
          x={node.x - 50} y={node.y - 32}
          width={100} height={64}
          rx={4}
        >
          {node.text}
        </EditableSvgNode>
      ))}
    </svg>
  );
}
