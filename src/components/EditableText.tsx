"use client";
import {
  createContext, useContext, useState, useRef, useEffect,
  useCallback, type ReactNode, type CSSProperties,
} from "react";
import {
  loadOverrides, saveOverrides, type ElementOverride, type OverridesMap,
  loadDynamicElements, saveDynamicElements, fetchContent,
  saveDraft, publishContent,
  type DynamicElementDef, type DynamicElementsMap,
  type VersionMeta, fetchVersions, revertToVersion,
} from "@/lib/textOverrides";

// ─── Types ───────────────────────────────────────────────────────────────────

export type ElementType = "text" | "bar" | "shape" | "dot" | "image" | "gradient" | "card" | "svgnode" | "bgimage";

// ─── Context ─────────────────────────────────────────────────────────────────

export type SaveState    = "idle" | "saving" | "saved" | "error";
export type PublishState = "idle" | "publishing" | "published" | "error";

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
  // draft/publish
  saveState: SaveState;
  saveError: string | null;
  publishState: PublishState;
  publishError: string | null;
  saveDraftNow: () => Promise<void>;
  publishNow: () => Promise<void>;
  // versioning
  previewMode: boolean;
  reloadContent: () => Promise<void>;
  versions: VersionMeta[];
  versionsLoading: boolean;
  loadVersions: () => Promise<void>;
  revertState: "idle" | "reverting" | "reverted" | "error";
  revertError: string | null;
  revertNow: (versionId: number) => Promise<void>;
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
  const [saveState, setSaveState]       = useState<SaveState>("idle");
  const [saveError, setSaveError]       = useState<string | null>(null);
  const [publishState, setPublishState] = useState<PublishState>("idle");
  const [publishError, setPublishError] = useState<string | null>(null);
  const [versions, setVersions]         = useState<VersionMeta[]>([]);
  const [versionsLoading, setVersionsLoading] = useState(false);
  const [revertState, setRevertState]   = useState<"idle" | "reverting" | "reverted" | "error">("idle");
  const [revertError, setRevertError]   = useState<string | null>(null);
  const previewMode = typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("preview") === "draft";
  const elMap = useRef<Record<string, HTMLElement | null>>({});
  const historyRef    = useRef<OverridesMap[]>([]);
  const futureRef     = useRef<OverridesMap[]>([]);
  const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load published (or draft in preview mode) state from database, overlay localStorage on top
  useEffect(() => {
    const fromLocal = loadOverrides();
    const dynLocal  = loadDynamicElements();
    const mode = typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("preview") === "draft"
      ? "draft" : "published";
    fetchContent(mode).then(({ overrides: fromDB, dynamic: dynDB }) => {
      setOverrides({ ...fromDB, ...fromLocal });
      setDynamicElements({ ...dynDB, ...dynLocal });
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

  // Autosave draft 2 s after the last change while in edit mode.
  // On failure, retries once after 3 s before surfacing the error.
  useEffect(() => {
    if (!editMode) return;
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(async () => {
      setSaveState("saving");
      setSaveError(null);
      let result = await saveDraft(overrides, dynamicElements);
      if (!result.ok) {
        await new Promise(r => setTimeout(r, 3000));
        result = await saveDraft(overrides, dynamicElements);
      }
      setSaveState(result.ok ? "saved" : "error");
      if (!result.ok) setSaveError(result.error ?? null);
      setTimeout(() => setSaveState(s => s === "saved" ? "idle" : s), 3500);
    }, 2000);
    return () => { if (autosaveTimer.current) clearTimeout(autosaveTimer.current); };
  }, [overrides, dynamicElements, editMode]); // eslint-disable-line react-hooks/exhaustive-deps

  const saveDraftNow = useCallback(async () => {
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    setSaveState("saving");
    setSaveError(null);
    let result = await saveDraft(overrides, dynamicElements);
    if (!result.ok) {
      // One automatic retry before surfacing the error
      await new Promise(r => setTimeout(r, 1500));
      result = await saveDraft(overrides, dynamicElements);
    }
    setSaveState(result.ok ? "saved" : "error");
    if (!result.ok) setSaveError(result.error ?? null);
    setTimeout(() => setSaveState(s => s === "saved" ? "idle" : s), 3500);
  }, [overrides, dynamicElements]);

  const publishNow = useCallback(async () => {
    // Flush any pending draft first
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    await saveDraft(overrides, dynamicElements);
    setPublishState("publishing");
    setPublishError(null);
    const result = await publishContent();
    setPublishState(result.ok ? "published" : "error");
    if (!result.ok) setPublishError(result.error ?? null);
    setTimeout(() => setPublishState(s => s === "published" ? "idle" : s), 3500);
  }, [overrides, dynamicElements]);

  const reloadContent = useCallback(async () => {
    const { overrides: fromDB, dynamic: dynDB } = await fetchContent("draft");
    setOverrides(fromDB);
    setDynamicElements(dynDB);
    saveOverrides(fromDB);
    saveDynamicElements(dynDB);
  }, []);

  const loadVersions = useCallback(async () => {
    setVersionsLoading(true);
    const list = await fetchVersions();
    setVersions(list);
    setVersionsLoading(false);
  }, []);

  const revertNow = useCallback(async (versionId: number) => {
    setRevertState("reverting");
    setRevertError(null);
    const result = await revertToVersion(versionId);
    if (!result.ok) {
      setRevertState("error");
      setRevertError(result.error ?? null);
      return;
    }
    // Reload the reverted draft into local state
    await reloadContent();
    setRevertState("reverted");
    setTimeout(() => setRevertState(s => s === "reverted" ? "idle" : s), 3500);
  }, [reloadContent]);

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
      saveState, saveError, publishState, publishError, saveDraftNow, publishNow,
      previewMode, reloadContent,
      versions, versionsLoading, loadVersions,
      revertState, revertError, revertNow,
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
  if (override.opacity != null)       ovr.opacity       = override.opacity / 100;
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
    override.content !== undefined && override.content !== "" && typeof children === "string"
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
          cursor: isActive ? "move" : "crosshair",
          zIndex: 9000,
        }}
      />
    </Tag>
  );
}
