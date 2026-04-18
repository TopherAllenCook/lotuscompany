"use client";
import {
  createContext, useContext, useState, useRef, useEffect,
  useCallback, type ReactNode, type CSSProperties,
} from "react";
import {
  loadOverrides, saveOverrides, type ElementOverride, type OverridesMap,
  loadDynamicElements, saveDynamicElements, fetchSavedState,
  type DynamicElementDef, type DynamicElementsMap,
} from "@/lib/textOverrides";

// ─── Types ───────────────────────────────────────────────────────────────────

export type ElementType = "text" | "bar" | "shape" | "dot" | "image" | "gradient";

// ─── Context ─────────────────────────────────────────────────────────────────

interface EditCtx {
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  overrides: OverridesMap;
  setOverride: (id: string, patch: Partial<ElementOverride>) => void;
  clearOverride: (id: string) => void;
  undo: () => void;
  redo: () => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  registerEl: (id: string, label: string, type: ElementType, el: HTMLElement | null) => void;
  getEl: (id: string) => HTMLElement | null;
  registeredList: { id: string; label: string; type: ElementType }[];
  gridSize: number;
  snapToGrid: boolean;
  showGrid: boolean;
  setGridSize: (n: number) => void;
  setSnapToGrid: (b: boolean) => void;
  setShowGrid: (b: boolean) => void;
  // dynamic elements
  dynamicElements: DynamicElementsMap;
  addDynamicElement: (slideKey: string, type: "text" | "bar" | "shape") => string;
  removeDynamicElement: (id: string) => void;
}

const Ctx = createContext<EditCtx | null>(null);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [overrides, setOverrides] = useState<OverridesMap>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [registeredList, setRegisteredList] = useState<{ id: string; label: string; type: ElementType }[]>([]);
  const [gridSize, setGridSize] = useState(8);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [dynamicElements, setDynamicElements] = useState<DynamicElementsMap>({});
  const elMap = useRef<Record<string, HTMLElement | null>>({});
  const historyRef = useRef<OverridesMap[]>([]);
  const futureRef  = useRef<OverridesMap[]>([]);

  // Load from committed file first, then overlay localStorage (live edits on top)
  useEffect(() => {
    const fromLocal = loadOverrides();
    const dynLocal  = loadDynamicElements();
    fetchSavedState().then(({ overrides: fromFile, dynamic: dynFile }) => {
      setOverrides({ ...fromFile, ...fromLocal });
      setDynamicElements({ ...dynFile, ...dynLocal });
    });
  }, []);

  const setOverride = useCallback((id: string, patch: Partial<ElementOverride>) => {
    setOverrides(prev => {
      historyRef.current = [...historyRef.current, prev];
      futureRef.current  = [];
      const next = { ...prev, [id]: { ...prev[id], ...patch } };
      saveOverrides(next);
      return next;
    });
  }, []);

  const clearOverride = useCallback((id: string) => {
    setOverrides(prev => {
      historyRef.current = [...historyRef.current, prev];
      futureRef.current  = [];
      const next = { ...prev };
      delete next[id];
      saveOverrides(next);
      return next;
    });
  }, []);

  const undo = useCallback(() => {
    const prev = historyRef.current.pop();
    if (prev === undefined) return;
    setOverrides(cur => {
      futureRef.current = [...futureRef.current, cur];
      saveOverrides(prev);
      return prev;
    });
  }, []);

  const redo = useCallback(() => {
    const next = futureRef.current.pop();
    if (next === undefined) return;
    setOverrides(cur => {
      historyRef.current = [...historyRef.current, cur];
      saveOverrides(next);
      return next;
    });
  }, []);

  const registerEl = useCallback((id: string, label: string, type: ElementType, el: HTMLElement | null) => {
    elMap.current[id] = el;
    if (el) {
      setRegisteredList(prev =>
        prev.some(e => e.id === id) ? prev : [...prev, { id, label, type }]
      );
    } else {
      setRegisteredList(prev => prev.filter(e => e.id !== id));
    }
  }, []);

  const getEl = useCallback((id: string) => elMap.current[id] ?? null, []);

  const addDynamicElement = useCallback((slideKey: string, type: "text" | "bar" | "shape"): string => {
    const id = `${slideKey}:dyn-${Date.now()}`;
    const def: DynamicElementDef = {
      id, slideKey, type,
      x: 300, y: 300,
      content:    "new text",
      color:      "#ffffff",
      fontSize:   24,
      fontWeight: 300,
      width:      type === "bar" ? 200 : 120,
      height:     type === "bar" ? 2   : type === "shape" ? 80 : 30,
      background: type === "bar" ? "#4dbad6" : "rgba(77,186,214,0.15)",
      opacity:    1,
    };
    setDynamicElements(prev => {
      const next = { ...prev, [id]: def };
      saveDynamicElements(next);
      return next;
    });
    return id;
  }, []);

  const removeDynamicElement = useCallback((id: string) => {
    setDynamicElements(prev => {
      const next = { ...prev };
      delete next[id];
      saveDynamicElements(next);
      return next;
    });
    clearOverride(id);
  }, [clearOverride]);

  return (
    <Ctx.Provider value={{
      editMode, setEditMode, overrides, setOverride, clearOverride, undo, redo,
      activeId, setActiveId, registerEl, getEl, registeredList,
      gridSize, snapToGrid, showGrid, setGridSize, setSnapToGrid, setShowGrid,
      dynamicElements, addDynamicElement, removeDynamicElement,
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

// ─── Shared drag logic ────────────────────────────────────────────────────────

export function useDragToMove(
  id: string,
  editMode: boolean,
  setActiveId: (id: string | null) => void,
  setOverride: (id: string, patch: Partial<ElementOverride>) => void,
  overrideRef: React.MutableRefObject<ElementOverride>,
  elRef: React.RefObject<HTMLElement | null>,
  baseTransform: string,
  gridSize: number,
  snapToGrid: boolean,
) {
  return useCallback((e: React.MouseEvent) => {
    if (!editMode) return;
    e.stopPropagation();
    setActiveId(id);

    const el = elRef.current;
    if (!el) return;

    const origTx = overrideRef.current.translateX ?? 0;
    const origTy = overrideRef.current.translateY ?? 0;
    const startX = e.clientX;
    const startY = e.clientY;
    let dragging = false;

    const snap = (v: number) => snapToGrid ? Math.round(v / gridSize) * gridSize : v;

    const onMove = (me: MouseEvent) => {
      const dx = me.clientX - startX;
      const dy = me.clientY - startY;
      if (!dragging && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) dragging = true;
      if (!dragging) return;
      const shift = `translate(${origTx + dx}px, ${origTy + dy}px)`;
      el.style.transform = baseTransform ? `${baseTransform} ${shift}` : shift;
    };

    const onUp = (me: MouseEvent) => {
      if (dragging) {
        const dx = me.clientX - startX;
        const dy = me.clientY - startY;
        setOverride(id, { translateX: snap(origTx + dx), translateY: snap(origTy + dy) });
      }
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [editMode, id, setActiveId, setOverride, baseTransform, gridSize, snapToGrid]);
}

// ─── EditableText ─────────────────────────────────────────────────────────────

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
  const { editMode, overrides, activeId, setActiveId, registerEl, setOverride, gridSize, snapToGrid } = useEditMode();
  const ref = useRef<HTMLElement>(null);
  const override = overrides[id] ?? {};
  const resolvedLabel = label ?? id.split(":").slice(1).join(" ");
  const overrideRef = useRef(override);
  overrideRef.current = override;

  useEffect(() => {
    registerEl(id, resolvedLabel, "text", ref.current);
    return () => registerEl(id, resolvedLabel, "text", null);
  }, [id, resolvedLabel, registerEl]);

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
  const baseTransform = (style?.transform as string) ?? "";

  const handleMouseDown = useDragToMove(
    id, editMode, setActiveId, setOverride, overrideRef, ref, baseTransform, gridSize, snapToGrid
  );

  const displayChildren =
    override.content !== undefined && typeof children === "string"
      ? override.content
      : children;

  if (!editMode) {
    return <Tag ref={ref} style={{ ...style, ...ovr }}>{displayChildren}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      style={{
        ...style,
        ...ovr,
        position: (style?.position as CSSProperties["position"]) ?? "relative",
        outline: isActive
          ? "2px solid #028faa"
          : "1px dashed rgba(2,143,170,0.25)",
        outlineOffset: 3,
        userSelect: "none" as const,
      }}
    >
      {displayChildren}
      <span
        onMouseDown={handleMouseDown}
        style={{
          position: "absolute",
          inset: -8,
          display: "block",
          cursor: isActive ? "move" : "default",
          zIndex: 9000,
        }}
      />
    </Tag>
  );
}
