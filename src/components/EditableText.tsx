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
  registerEl: (id: string, el: HTMLElement | null) => void;
  getEl: (id: string) => HTMLElement | null;
}

const Ctx = createContext<EditCtx | null>(null);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [overrides, setOverrides] = useState<OverridesMap>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const elMap = useRef<Record<string, HTMLElement | null>>({});

  // Load from localStorage on client only
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

  const registerEl = useCallback((id: string, el: HTMLElement | null) => {
    elMap.current[id] = el;
  }, []);

  const getEl = useCallback((id: string) => elMap.current[id] ?? null, []);

  return (
    <Ctx.Provider value={{ editMode, setEditMode, overrides, setOverride, clearOverride, activeId, setActiveId, registerEl, getEl }}>
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
// Renders as the given tag, applies stored overrides, and highlights when
// the editor panel has this element selected.

export function EditableText<T extends keyof React.JSX.IntrinsicElements = "div">({
  id,
  as,
  children,
  style,
}: {
  id: string;
  as?: T;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const Tag = (as ?? "div") as React.ElementType;
  const { editMode, overrides, activeId, registerEl } = useEditMode();
  const ref = useRef<HTMLElement>(null);
  const override = overrides[id] ?? {};

  // Register DOM node so the editor panel can read computed styles
  useEffect(() => {
    registerEl(id, ref.current);
    return () => registerEl(id, null);
  }, [id, registerEl]);

  // Build override styles
  const ovr: CSSProperties = {};
  if (override.fontSize != null) ovr.fontSize = `${override.fontSize}px`;
  if (override.letterSpacing != null) ovr.letterSpacing = `${override.letterSpacing}em`;
  if (override.lineHeight != null) ovr.lineHeight = override.lineHeight;
  if (override.translateX != null || override.translateY != null) {
    const base = (style?.transform as string) ?? "";
    const shift = `translate(${override.translateX ?? 0}px, ${override.translateY ?? 0}px)`;
    ovr.transform = base ? `${base} ${shift}` : shift;
  }

  const isActive = editMode && activeId === id;

  return (
    <Tag
      ref={ref}
      style={{
        ...style,
        ...ovr,
        ...(editMode ? {
          outline: isActive
            ? "2px solid #028faa"
            : "1px dashed rgba(2,143,170,0.25)",
          outlineOffset: 3,
          cursor: "default",
        } : {}),
      }}
    >
      {children}
    </Tag>
  );
}
