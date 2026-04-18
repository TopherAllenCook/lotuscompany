"use client";

export function LotusTrustStack({
  width = 420,
  height = 320,
}: {
  width?: number;
  height?: number;
}) {
  const layers = [
    { label: "track record", index: 0 },
    { label: "relationships", index: 1 },
    { label: "underwriting discipline", index: 2 },
    { label: "development + asset management", index: 3 },
    { label: "pipeline control", index: 4 },
    { label: "cultural alignment", index: 5 },
  ];

  const layerHeight = 44;
  const gap = 4;
  const baseWidth = 380;
  const topWidth = 280;
  const widthDecrement = 20;

  const getLayerProps = (index: number) => {
    // Reverse order: index 0 (top) is narrowest, index 5 (bottom) is widest
    const layerWidth = topWidth + index * widthDecrement;
    const layerOpacity = 0.06 + index * 0.04;
    const totalHeight = layers.length * (layerHeight + gap);
    const yPosition = index * (layerHeight + gap);

    return {
      width: layerWidth,
      height: layerHeight,
      x: 20,
      y: yPosition,
      fill: `rgba(77,186,214,${layerOpacity})`,
      opacity: layerOpacity,
    };
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
    >
      {layers.map((layer) => {
        const props = getLayerProps(layer.index);
        return (
          <g key={`layer-${layer.index}`}>
            <rect
              x={props.x}
              y={props.y}
              width={props.width}
              height={props.height}
              fill={props.fill}
              stroke="rgba(77,186,214,0.3)"
              strokeWidth="1"
            />
            <text
              x={props.x + 12}
              y={props.y + props.height / 2}
              dominantBaseline="middle"
              fill="#cee8ee"
              fontSize="11"
              fontFamily="'Futura PT', sans-serif"
              style={{ textTransform: "lowercase" }}
            >
              {layer.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
