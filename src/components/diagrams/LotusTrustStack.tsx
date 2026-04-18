"use client";

import { EditableSvgNode } from "@/components/diagrams/EditableSvgNode";

const layers = [
  { id: "trust-stack:node-0", textId: "trust-stack:text-0", label: "track record" },
  { id: "trust-stack:node-1", textId: "trust-stack:text-1", label: "relationships" },
  { id: "trust-stack:node-2", textId: "trust-stack:text-2", label: "underwriting discipline" },
  { id: "trust-stack:node-3", textId: "trust-stack:text-3", label: "development + asset management" },
  { id: "trust-stack:node-4", textId: "trust-stack:text-4", label: "pipeline control" },
  { id: "trust-stack:node-5", textId: "trust-stack:text-5", label: "cultural alignment" },
];

const layerHeight = 44;
const gap = 4;
const topWidth = 280;
const widthDecrement = 20;

export function LotusTrustStack({
  width = 420,
  height = 320,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
      {layers.map((layer, index) => {
        const layerWidth = topWidth + index * widthDecrement;
        const fillOpacity = 0.06 + index * 0.04;
        const y = index * (layerHeight + gap);
        return (
          <EditableSvgNode
            key={layer.id}
            id={layer.id}
            label={layer.label}
            textId={layer.textId}
            x={20} y={y}
            width={layerWidth} height={layerHeight}
            rx={0}
            fill={`rgba(77,186,214,${fillOpacity})`}
            stroke="rgba(77,186,214,0.3)"
          >
            {layer.label}
          </EditableSvgNode>
        );
      })}
    </svg>
  );
}
