"use client";
import { useRef, useEffect, type CSSProperties, type ReactNode } from "react";
import { useEditMode, useDragToMove, type ElementType } from "@/components/EditableText";

interface Props {
  id: string;
  label?: string;
  type?: ElementType;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export function EditableEl({ id, label, type = "shape", style, className, children }: Props) {
  const { editMode, overrides, activeId, setActiveId, registerEl, setOverride, gridSize, snapToGrid } = useEditMode();
  const ref = useRef<HTMLDivElement>(null);
  const override = overrides[id] ?? {};
  const resolvedLabel = label ?? id.split(":").slice(1).join(" ");
  const overrideRef = useRef(override);
  overrideRef.current = override;

  useEffect(() => {
    registerEl(id, resolvedLabel, type, ref.current as HTMLElement | null);
    return () => registerEl(id, resolvedLabel, type, null);
  }, [id, resolvedLabel, type, registerEl]);

  // Build override styles
  const ovr: CSSProperties = {};
  if (override.width != null)      ovr.width      = `${override.width}px`;
  if (override.height != null)     ovr.height     = `${override.height}px`;
  if (override.background != null) ovr.background = override.background;
  if (override.opacity != null)    ovr.opacity    = override.opacity;

  const baseTransform = (style?.transform as string) ?? "";
  const tx = override.translateX ?? 0;
  const ty = override.translateY ?? 0;
  const rot = override.rotate ?? 0;
  const hasTx = override.translateX != null || override.translateY != null;
  const hasRot = override.rotate != null;

  if (hasTx || hasRot) {
    const parts: string[] = [];
    if (baseTransform) parts.push(baseTransform);
    if (hasTx) parts.push(`translate(${tx}px, ${ty}px)`);
    if (hasRot) parts.push(`rotate(${rot}deg)`);
    ovr.transform = parts.join(" ");
  }

  const isActive = editMode && activeId === id;

  const handleMouseDown = useDragToMove(
    id, editMode, setActiveId, setOverride, overrideRef,
    ref as React.RefObject<HTMLElement | null>,
    baseTransform, gridSize, snapToGrid
  );

  return (
    <div
      ref={ref}
      className={className}
      onMouseDown={editMode ? handleMouseDown : undefined}
      style={{
        ...style,
        ...ovr,
        ...(editMode ? {
          outline: isActive
            ? "2px solid #028faa"
            : "1px dashed rgba(2,143,170,0.22)",
          outlineOffset: 2,
          cursor: isActive ? "move" : "crosshair",
          boxSizing: "border-box" as const,
        } : {}),
      }}
    >
      {children}
    </div>
  );
}
