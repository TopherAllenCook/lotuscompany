"use client";
import { useRef, useEffect, type CSSProperties } from "react";
import { useEditMode } from "@/components/EditableText";

interface Props {
  id: string;
  label?: string;
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

export function EditableBgImage({ id, label, src, alt = "", className, style }: Props) {
  const { editMode, overrides, activeId, setActiveId, registerEl } = useEditMode();
  const ref = useRef<HTMLImageElement>(null);
  const override = overrides[id] ?? {};
  const resolvedLabel = label ?? id.split(":").slice(1).join(" ");

  useEffect(() => {
    registerEl(id, resolvedLabel, "bgimage", ref.current as HTMLElement | null);
    return () => registerEl(id, resolvedLabel, "bgimage", null);
  }, [id, resolvedLabel, registerEl]);

  const imgOvr: CSSProperties = {};
  if (override.opacity != null) imgOvr.opacity = override.opacity / 100;
  if (override.scale != null)   imgOvr.transform = `scale(${override.scale / 100})`;

  const px = override.objectPositionX ?? 50;
  const py = override.objectPositionY ?? 50;
  imgOvr.objectPosition = `${px}% ${py}%`;

  const containerOvr: CSSProperties = {};
  if (override.width  != null) containerOvr.width  = `${override.width}px`;
  if (override.height != null) containerOvr.height = `${override.height}px`;

  const isActive = editMode && activeId === id;

  return (
    <div style={{ position: "relative", ...style, ...containerOvr }} className={className}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transformOrigin: "center center",
          ...imgOvr,
        }}
      />
      {editMode && (
        <div
          onClick={() => setActiveId(isActive ? null : id)}
          title={resolvedLabel}
          style={{
            position: "absolute",
            inset: 0,
            cursor: isActive ? "default" : "crosshair",
            outline: isActive
              ? "2px solid #028faa"
              : "1px dashed rgba(2,143,170,0.45)",
            outlineOffset: -2,
            zIndex: 9000,
            background: isActive ? "rgba(2,143,170,0.08)" : "transparent",
          }}
        >
          {isActive && (
            <span style={{
              position: "absolute",
              top: 6,
              left: 8,
              fontSize: 11,
              fontFamily: "monospace",
              color: "#028faa",
              background: "rgba(0,0,0,0.5)",
              padding: "2px 6px",
              borderRadius: 4,
              pointerEvents: "none",
            }}>
              {resolvedLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
