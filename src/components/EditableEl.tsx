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

  const ovr: CSSProperties = {};
  if (override.width != null)        ovr.width          = `${override.width}px`;
  if (override.height != null)       ovr.height         = `${override.height}px`;
  if (override.background != null)   ovr.background     = override.background;
  if (override.opacity != null)      ovr.opacity        = override.opacity / 100;
  if (override.borderRadius != null) ovr.borderRadius   = `${override.borderRadius}px`;
  if (override.blurAmount != null) {
    ovr.backdropFilter = `blur(${override.blurAmount}px)`;
    (ovr as Record<string, unknown>).WebkitBackdropFilter = `blur(${override.blurAmount}px)`;
  }

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
    baseTransform, gridSize, snapToGrid,
  );

  if (!editMode) {
    return (
      <div ref={ref} className={className} style={{ ...style, ...ovr }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...ovr,
        position: (style?.position as CSSProperties["position"]) ?? "relative",
        outline: isActive
          ? "2px solid #028faa"
          : "1px dashed rgba(2,143,170,0.45)",
        outlineOffset: 3,
      }}
    >
      {children}
      {/* Expanded transparent hit area — skipped for card type to avoid blocking child elements */}
      {type !== "card" && (
        <div
          onMouseDown={handleMouseDown}
          style={{
            position: "absolute",
            inset: -10,
            cursor: isActive ? "move" : "crosshair",
            zIndex: 9000,
          }}
        />
      )}
      {/* Card corner handle — small clickable tab so cards are selectable without blocking children */}
      {type === "card" && (
        <div
          onMouseDown={handleMouseDown}
          title={resolvedLabel}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 28,
            height: 28,
            zIndex: 9000,
            cursor: isActive ? "move" : "crosshair",
            background: isActive ? "rgba(2,143,170,0.55)" : "rgba(2,143,170,0.28)",
            borderBottomRightRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ pointerEvents: "none" }}>
            <circle cx="3" cy="3" r="1.2" fill="rgba(255,255,255,0.9)" />
            <circle cx="9" cy="3" r="1.2" fill="rgba(255,255,255,0.9)" />
            <circle cx="3" cy="9" r="1.2" fill="rgba(255,255,255,0.9)" />
            <circle cx="9" cy="9" r="1.2" fill="rgba(255,255,255,0.9)" />
          </svg>
        </div>
      )}
    </div>
  );
}
