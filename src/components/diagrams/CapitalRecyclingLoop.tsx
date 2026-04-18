"use client";

export function CapitalRecyclingLoop({
  width = 560,
  height = 300,
}: {
  width?: number;
  height?: number;
}) {
  const nodes = [
    { id: 1, label: "partner capital", x: 60, y: 150 },
    { id: 2, label: "predevelopment +\nacquisition advance", x: 140, y: 40 },
    { id: 3, label: "lihtc award +\nconstruction close", x: 340, y: 40 },
    { id: 4, label: "advance\nrepaid", x: 420, y: 150 },
    { id: 5, label: "gp / co-gp\neconomics retained", x: 340, y: 260 },
    { id: 6, label: "capital\nredeployed", x: 140, y: 260 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 6, to: 1 },
  ];

  const getNode = (id: number) => nodes.find((n) => n.id === id)!;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
    >
      <defs>
        <marker
          id="arrowhead-turquoise"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3, 0 6"
            fill="#4dbad6"
            opacity="0.6"
          />
        </marker>
      </defs>

      {/* Connection lines */}
      {connections.map((conn, idx) => {
        const fromNode = getNode(conn.from);
        const toNode = getNode(conn.to);
        return (
          <line
            key={`line-${idx}`}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="#4dbad6"
            strokeWidth="1.2"
            opacity="0.6"
            markerEnd="url(#arrowhead-turquoise)"
          />
        );
      })}

      {/* Node boxes */}
      {nodes.map((node) => (
        <g key={`node-${node.id}`}>
          <rect
            x={node.x - 50}
            y={node.y - 32}
            width="100"
            height="64"
            rx="4"
            fill="rgba(77,186,214,0.08)"
            stroke="#4dbad6"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#cee8ee"
            fontSize="11"
            fontFamily="'Futura PT', sans-serif"
            style={{ whiteSpace: "pre" }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
