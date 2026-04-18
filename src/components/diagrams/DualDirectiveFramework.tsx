"use client";

export function DualDirectiveFramework({
  width = 640,
  height = 380,
}: {
  width?: number;
  height?: number;
}) {
  const nodes = [
    // Root
    { id: "root", label: "annual directive\nreset", x: 320, y: 40, isRoot: true },
    // Branch level
    { id: "inv", label: "investment\ndirective", x: 180, y: 120, isBranch: true },
    { id: "imp", label: "impact\ndirective", x: 460, y: 120, isBranch: true },
    // Sub-nodes under investment
    { id: "inv1", label: "return target\nrange", x: 80, y: 240 },
    { id: "inv2", label: "risk limits", x: 180, y: 240 },
    { id: "inv3", label: "recycling\ncadence", x: 280, y: 240 },
    // Sub-nodes under impact
    { id: "imp1", label: "units + ami\ntargets", x: 360, y: 240 },
    { id: "imp2", label: "service tier", x: 460, y: 240 },
    { id: "imp3", label: "place-based\npriorities", x: 560, y: 240 },
    { id: "imp4", label: "guardrails", x: 660, y: 240 },
  ];

  const connections = [
    { from: "root", to: "inv" },
    { from: "root", to: "imp" },
    { from: "inv", to: "inv1" },
    { from: "inv", to: "inv2" },
    { from: "inv", to: "inv3" },
    { from: "imp", to: "imp1" },
    { from: "imp", to: "imp2" },
    { from: "imp", to: "imp3" },
    { from: "imp", to: "imp4" },
  ];

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
    >
      {/* Connector lines */}
      {connections.map((conn, idx) => {
        const fromNode = getNode(conn.from);
        const toNode = getNode(conn.to);
        return (
          <line
            key={`line-${idx}`}
            x1={fromNode.x}
            y1={fromNode.y + 24}
            x2={toNode.x}
            y2={toNode.y - 24}
            stroke="#4dbad6"
            strokeWidth="1"
            opacity="0.4"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => {
        const isRoot = node.isRoot;
        const isBranch = node.isBranch;
        const baseFill = isRoot
          ? "rgba(77,186,214,0.15)"
          : "rgba(77,186,214,0.08)";

        return (
          <g key={`node-${node.id}`}>
            <rect
              x={node.x - 48}
              y={node.y - 24}
              width="96"
              height="48"
              rx="3"
              fill={baseFill}
              stroke="rgba(77,186,214,0.3)"
              strokeWidth="1"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#cee8ee"
              fontSize="10"
              fontFamily="'Futura PT', sans-serif"
              style={{ whiteSpace: "pre", textTransform: "lowercase" }}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
