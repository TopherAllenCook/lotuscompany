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
    registerEl(id, label ?? id, "card", gRef.current as unknown as HTMLElement);
    return () => registerEl(id, label ?? id, "card", null);
  }, [id, label, registerEl]);

  // When opacity is overridden, use a solid fill so the <g> opacity is the sole
  // control over transparency (fill alpha would otherwise multiply with it).
  const hasOpacityOverride = override.opacity != null;
  const resolvedFill = override.background ?? (hasOpacityOverride ? toSolidFill(fill) : fill);
  const resolvedOpacity = hasOpacityOverride ? override.opacity! / 100 : undefined;

  return (
    <g ref={gRef} opacity={resolvedOpacity}>
      <rect
        x={x} y={y}
        width={width} height={height}
        rx={rx}
        fill={resolvedFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />

      {/* Editable label via foreignObject */}
      <foreignObject x={x + 4} y={y + 4} width={width - 8} height={height - 8}>
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

      {/* Edit-mode: dashed selection border + corner handle */}
      {editMode && (
        <>
          <rect
            x={x} y={y}
            width={width} height={height}
            rx={rx}
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
  );
}
