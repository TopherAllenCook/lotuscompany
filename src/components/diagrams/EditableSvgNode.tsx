"use client";

import { useEffect, useRef } from "react";
import { useEditMode, EditableText } from "@/components/EditableText";

interface Props {
  id: string;
  label?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rx?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  textId: string;
  textLabel?: string;
  fontSize?: number;
  textColor?: string;
  fontFamily?: string;
  children: string;
}

function toSolidFill(fill: string): string {
  return fill.replace(/rgba\(([^,]+,[^,]+,[^,]+),[^)]+\)/, "rgb($1)");
}

export function EditableSvgNode({
  id, label,
  x, y, width, height, rx = 3,
  fill = "rgba(77,186,214,0.08)",
  stroke = "rgba(77,186,214,0.3)",
  strokeWidth = 1,
  textId, textLabel,
  fontSize = 11,
  textColor = "#cee8ee",
  fontFamily = "'Futura PT', sans-serif",
  children,
}: Props) {
  const { editMode, overrides, activeId, setActiveId, registerEl } = useEditMode();
  const gRef = useRef<SVGGElement>(null);
  const override = overrides[id] ?? {};
  const isActive = editMode && activeId === id;

  useEffect(() => {
    registerEl(id, label ?? id, "svgnode", gRef.current as unknown as HTMLElement);
    return () => registerEl(id, label ?? id, "svgnode", null);
  }, [id, label, registerEl]);

  const hasOpacityOverride = override.opacity != null;
  const resolvedFill = override.background ?? (hasOpacityOverride ? toSolidFill(fill) : fill);
  const resolvedOpacity = hasOpacityOverride ? override.opacity! / 100 : undefined;
  const resolvedWidth = override.width ?? width;
  const resolvedHeight = override.height ?? height;
  const resolvedRx = override.borderRadius ?? rx;
  const tx = override.translateX ?? 0;
  const ty = override.translateY ?? 0;
  const hasTranslate = tx !== 0 || ty !== 0;

  return (
    <>
      {/* Background rect — has its own opacity so text stays independent */}
      <g
        ref={gRef}
        opacity={resolvedOpacity}
        transform={hasTranslate ? `translate(${tx},${ty})` : undefined}
      >
        <rect
          x={x} y={y}
          width={resolvedWidth} height={resolvedHeight}
          rx={resolvedRx}
          fill={resolvedFill}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />

        {editMode && (
          <>
            <rect
              x={x} y={y}
              width={resolvedWidth} height={resolvedHeight}
              rx={resolvedRx}
              fill="none"
              stroke={isActive ? "#028faa" : "rgba(2,143,170,0.45)"}
              strokeWidth={isActive ? 2 : 1}
              strokeDasharray={isActive ? undefined : "3 3"}
              style={{ pointerEvents: "none" }}
            />
            <rect
              x={x} y={y}
              width={16} height={16}
              fill={isActive ? "rgba(2,143,170,0.55)" : "rgba(2,143,170,0.28)"}
              style={{ cursor: "crosshair" }}
              onMouseDown={(e) => { e.stopPropagation(); setActiveId(id); }}
            />
          </>
        )}
      </g>

      {/* Text label — separate from the rect so opacity/color are independent */}
      <foreignObject
        x={x + 4 + tx} y={y + 4 + ty}
        width={resolvedWidth - 8} height={resolvedHeight - 8}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <EditableText
            id={textId}
            label={textLabel ?? textId}
            as="span"
            style={{
              fontSize: `${fontSize}px`,
              color: textColor,
              fontFamily,
              textAlign: "center",
              lineHeight: 1.3,
              whiteSpace: "pre-wrap",
              textTransform: "lowercase",
              display: "block",
              width: "100%",
            }}
          >
            {children}
          </EditableText>
        </div>
      </foreignObject>
    </>
  );
}
