"use client";
import {
  createContext, useContext, useState, useRef, useEffect,
  useCallback, type ReactNode, type CSSProperties,
} from "react";
import { loadOverrides, saveOverrides, type TextOverride, type OverridesMap } from "@/lib/textOverrides";

// ─── Context ────────────────────────────────────────────────────────────────

interface EditCtx {
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  overrides: OverridesMap;
  setOverride: (id: string, patch: Partial<TextOverride>) => void;
  clearOverride: (id: string) => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  registerEl: (id: string, label: string, el: HTMLElement | null) => void;
  getEl: (id: string) => HTMLElement | null;
  registeredList: { id: string; label: string }[];
}

const Ctx = createContext<EditCtx | null>(null);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [overrides, setOverrides] = useState<OverridesMap>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [registeredList, setRegisteredList] = useState<{ id: string; label: string }[]>([]);
  const elMap = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => { setOverrides(loadOverrides()); }, []);

  const setOverride = useCallback((id: string, patch: Partial<TextOverride>) => {
    setOverrides(prev => {
      const next = { ...prev, [id]: { ...prev[id], ...patch } };
      saveOverrides(next);
      return next;
    });
  }, []);

  const clearOverride = useCallback((id: string) => {
    setOverrides(prev => {
      const next = { ...prev };
      delete next[id];
      saveOverrides(next);
      return next;
    });
  }, []);

  const registerEl = useCallback((id: string, label: string, el: HTMLElement | null) => {
    elMap.current[id] = el;
    if (el) {
      setRegisteredList(prev =>
        prev.some(e => e.id === id) ? prev : [...prev, { id, label }]
      );
    } else {
      setRegisteredList(prev => prev.filter(e => e.id !== id));
    }
  }, []);

  const getEl = useCallback((id: string) => elMap.current[id] ?? null, []);

  return (
    <Ctx.Provider value={{
      editMode, setEditMode, overrides, setOverride, clearOverride,
      activeId, setActiveId, registerEl, getEl, registeredList,
    }}>
      {children}
    </Ctx.Provider>
  );
}

export function useEditMode() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEditMode outside EditModeProvider");
  return ctx;
}

// ─── EditableText ────────────────────────────────────────────────────────────

export function EditableText<T extends keyof React.JSX.IntrinsicElements = "div">({
  id,
  label,
  as,
  children,
  style,
}: {
  id: string;
  label?: string;
  as?: T;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const Tag = (as ?? "div") as React.ElementType;
  const { editMode, overrides, activeId, setActiveId, registerEl, setOverride } = useEditMode();
  const ref = useRef<HTMLElement>(null);
  const override = overrides[id] ?? {};
  const resolvedLabel = label ?? id.split(":").slice(1).join(" ");
  const overrideRef = useRef(override);
  overrideRef.current = override;

  useEffect(() => {
    registerEl(id, resolvedLabel, ref.current);
    return () => registerEl(id, resolvedLabel, null);
  }, [id, resolvedLabel, registerEl]);

  // Build override styles
  const ovr: CSSProperties = {};
  if (override.fontSize != null)      ovr.fontSize      = `${override.fontSize}px`;
  if (override.letterSpacing != null) ovr.letterSpacing = `${override.letterSpacing}em`;
  if (override.lineHeight != null)    ovr.lineHeight    = override.lineHeight;
  if (override.color != null)         ovr.color         = override.color;
  if (override.fontWeight != null)    ovr.fontWeight    = override.fontWeight;
  if (override.translateX != null || override.translateY != null) {
    const base = (style?.transform as string) ?? "";
    const shift = `translate(${override.translateX ?? 0}px, ${override.translateY ?? 0}px)`;
    ovr.transform = base ? `${base} ${shift}` : shift;
  }

  const isActive = editMode && activeId === id;

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!editMode) return;
    setActiveId(id);

    const el = ref.current;
    if (!el) return;

    const origTx = overrideRef.current.translateX ?? 0;
    const origTy = overrideRef.current.translateY ?? 0;
    const startX = e.clientX;
    const startY = e.clientY;
    const baseTransform = (style?.transform as string) ?? "";
    let dragging = false;

    const onMove = (me: MouseEvent) => {
      const dx = me.clientX - startX;
      const dy = me.clientY - startY;
      if (!dragging && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        dragging = true;
      }
      if (!dragging) return;
      const newTx = origTx + dx;
      const newTy = origTy + dy;
      const shift = `translate(${newTx}px, ${newTy}px)`;
      el.style.transform = baseTransform ? `${baseTransform} ${shift}` : shift;
      el.style.cursor = "move";
    };

    const onUp = (me: MouseEvent) => {
      if (dragging) {
        const dx = me.clientX - startX;
        const dy = me.clientY - startY;
        setOverride(id, { translateX: origTx + dx, translateY: origTy + dy });
        el.style.cursor = "";
      }
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [editMode, id, setActiveId, setOverride, style]);

  const displayChildren =
    override.content !== undefined && typeof children === "string"
      ? override.content
      : children;

  return (
    <Tag
      ref={ref}
      onMouseDown={editMode ? handleMouseDown : undefined}
      style={{
        ...style,
        ...ovr,
        ...(editMode ? {
          outline: isActive
            ? "2px solid #028faa"
            : "1px dashed rgba(2,143,170,0.25)",
          outlineOffset: 3,
          cursor: isActive ? "move" : "default",
          userSelect: "none" as const,
        } : {}),
      }}
    >
      {displayChildren}
    </Tag>
  );
}
