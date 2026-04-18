"use client";
import { useRef, useEffect, type CSSProperties } from "react";
import { useEditMode, useDragToMove } from "@/components/EditableText";
import type { DynamicElementDef } from "@/lib/textOverrides";
import { font } from "@/lib/theme";

function DynamicEl({ def }: { def: DynamicElementDef }) {
  const {
    editMode, overrides, activeId, setActiveId,
    registerEl, setOverride, gridSize, snapToGrid,
  } = useEditMode();

  const ref = useRef<HTMLDivElement>(null);
  const override = overrides[def.id] ?? {};
  const overrideRef = useRef(override);
  overrideRef.current = override;

  const elType = def.type === "text" ? "text" : def.type === "bar" ? "bar" : "shape";

  useEffect(() => {
    const label = def.type === "text"
      ? (override.content ?? def.content).slice(0, 28)
      : def.id.split(":").pop() ?? def.id;
    registerEl(def.id, label, elType, ref.current as HTMLElement | null);
    return () => registerEl(def.id, label, elType, null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [def.id, elType, registerEl]);

  const handleMouseDown = useDragToMove(
    def.id, editMode, setActiveId, setOverride, overrideRef,
    ref as React.RefObject<HTMLElement | null>,
    "", gridSize, snapToGrid,
  );

  const isActive = editMode && activeId === def.id;
  const tx = override.translateX ?? 0;
  const ty = override.translateY ?? 0;

  const baseStyle: CSSProperties = {
    position: "absolute",
    left: def.x,
    top: def.y,
    transform: `translate(${tx}px, ${ty}px)`,
    zIndex: 6,
    pointerEvents: editMode ? "auto" : "none",
    cursor: editMode ? (isActive ? "move" : "default") : "default",
    ...(editMode ? {
      outline: isActive ? "2px solid #028faa" : "1px dashed rgba(2,143,170,0.35)",
      outlineOffset: 3,
    } : {}),
  };

  if (def.type === "text") {
    return (
      <div
        ref={ref}
        onMouseDown={editMode ? handleMouseDown : undefined}
        style={{
          ...baseStyle,
          fontSize:      override.fontSize      ?? def.fontSize,
          fontWeight:    override.fontWeight     ?? def.fontWeight,
          color:         override.color         ?? def.color,
          letterSpacing: override.letterSpacing != null ? `${override.letterSpacing}em` : undefined,
          lineHeight:    override.lineHeight     ?? 1.5,
          fontFamily: font,
          textTransform: "lowercase",
          whiteSpace: "pre-wrap",
          userSelect: editMode ? "none" : undefined,
        }}
      >
        {override.content ?? def.content}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseDown={editMode ? handleMouseDown : undefined}
      style={{
        ...baseStyle,
        width:      `${override.width      ?? def.width}px`,
        height:     `${override.height     ?? def.height}px`,
        background:  override.background   ?? def.background,
        opacity:     override.opacity      ?? def.opacity,
        rotate:      override.rotate != null ? `${override.rotate}deg` : undefined,
        borderRadius: def.type === "bar" ? 1 : 2,
      }}
    />
  );
}

export function DynamicLayer({ slideKey }: { slideKey: string }) {
  const { dynamicElements } = useEditMode();
  const elements = Object.values(dynamicElements).filter(el => el.slideKey === slideKey);
  if (elements.length === 0) return null;
  return (
    <>
      {elements.map(def => <DynamicEl key={def.id} def={def} />)}
    </>
  );
}
