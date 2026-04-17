"use client";
import {
  createContext, useContext, useState, useRef, useEffect,
  useCallback, type ReactNode, type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { font } from "@/lib/theme";
import {
  type TextOverride, type OverridesMap,
  loadOverrides, saveOverrides,
} from "@/lib/textOverrides";

// ─── Context ─────────────────────────────────────────────────────────────────

interface EditModeCtx {
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  overrides: OverridesMap;
  setOverride: (id: string, patch: Partial<TextOverride>) => void;
  clearOverride: (id: string) => void;
}

const EditModeContext = createContext<EditModeCtx | null>(null);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [overrides, setOverrides] = useState<OverridesMap>(loadOverrides);

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

  return (
    <EditModeContext.Provider value={{ editMode, setEditMode, overrides, setOverride, clearOverride }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const ctx = useContext(EditModeContext);
  if (!ctx) throw new Error("useEditMode must be inside EditModeProvider");
  return ctx;
}

// ─── Floating Panel ───────────────────────────────────────────────────────────

const CONTROLS = [
  { label: "font size",      field: "fontSize",      min: 6,    max: 120,  step: 0.5,  suffix: "px", def: 16 },
  { label: "move x",         field: "translateX",    min: -300, max: 300,  step: 1,    suffix: "px", def: 0  },
  { label: "move y",         field: "translateY",    min: -300, max: 300,  step: 1,    suffix: "px", def: 0  },
  { label: "letter spacing", field: "letterSpacing", min: -0.1, max: 0.5,  step: 0.01, suffix: "em", def: 0  },
  { label: "line height",    field: "lineHeight",    min: 0.8,  max: 3.5,  step: 0.05, suffix: "",   def: 1.5 },
] as const;

function EditPanel({
  anchorRef,
  override,
  onChange,
  onReset,
  onClose,
}: {
  anchorRef: React.RefObject<HTMLElement | null>;
  override: TextOverride;
  onChange: (patch: Partial<TextOverride>) => void;
  onReset: () => void;
  onClose: () => void;
}) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (anchorRef.current) setRect(anchorRef.current.getBoundingClientRect());
  }, [anchorRef]);

  if (!rect) return null;

  const panelTop = rect.bottom + window.scrollY + 8;
  const panelLeft = Math.min(rect.left + window.scrollX, window.innerWidth - 260);

  return createPortal(
    <div
      onMouseDown={e => e.stopPropagation()}
      onClick={e => e.stopPropagation()}
      style={{
        position: "absolute",
        top: panelTop,
        left: panelLeft,
        zIndex: 9999,
        width: 248,
        background: "#111",
        border: "1px solid rgba(77,186,214,0.35)",
        borderRadius: 6,
        padding: "14px 16px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        fontFamily: font,
        boxShadow: "0 12px 40px rgba(0,0,0,0.65)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <span style={{ fontSize: 9, color: "#028faa", letterSpacing: "0.2em", textTransform: "lowercase" }}>
          text editor
        </span>
        <button
          onClick={onClose}
          style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.3)", fontSize: 16, lineHeight: 1, padding: 0 }}
          aria-label="Close panel"
        >×</button>
      </div>

      {/* Sliders */}
      {CONTROLS.map(({ label, field, min, max, step, suffix, def }) => {
        const val = (override[field] as number | undefined) ?? def;
        return (
          <div key={field} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "lowercase" }}>
                {label}
              </span>
              <span style={{ fontSize: 10, color: "#4dbad6", fontVariantNumeric: "tabular-nums", letterSpacing: "0.02em" }}>
                {val.toFixed(step < 1 ? 2 : 1)}{suffix}
              </span>
            </div>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={val}
              onChange={e => onChange({ [field]: parseFloat(e.target.value) })}
              style={{ width: "100%", accentColor: "#028faa", cursor: "pointer" }}
            />
          </div>
        );
      })}

      {/* Actions */}
      <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
        <button
          onClick={onReset}
          style={{
            flex: 1, padding: "6px 0",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 3, color: "rgba(255,255,255,0.35)",
            fontSize: 9, letterSpacing: "0.14em", textTransform: "lowercase",
            cursor: "pointer", fontFamily: font,
          }}
        >
          reset
        </button>
        <button
          onClick={onClose}
          style={{
            flex: 1, padding: "6px 0",
            background: "rgba(2,143,170,0.12)",
            border: "1px solid rgba(2,143,170,0.45)",
            borderRadius: 3, color: "#028faa",
            fontSize: 9, letterSpacing: "0.14em", textTransform: "lowercase",
            cursor: "pointer", fontFamily: font,
          }}
        >
          done
        </button>
      </div>
    </div>,
    document.body
  );
}

// ─── EditableText ─────────────────────────────────────────────────────────────

type Tag = keyof React.JSX.IntrinsicElements;

export function EditableText<T extends Tag = "div">({
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
  const Tag = (as ?? "div") as Tag;
  const { editMode, overrides, setOverride, clearOverride } = useEditMode();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const override = overrides[id] ?? {};

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Build override style
  const overrideStyle: CSSProperties = {};
  if (override.fontSize != null) overrideStyle.fontSize = `${override.fontSize}px`;
  if (override.letterSpacing != null) overrideStyle.letterSpacing = `${override.letterSpacing}em`;
  if (override.lineHeight != null) overrideStyle.lineHeight = override.lineHeight;
  if (override.translateX != null || override.translateY != null) {
    const base = (style?.transform ?? "") as string;
    const shift = `translate(${override.translateX ?? 0}px, ${override.translateY ?? 0}px)`;
    overrideStyle.transform = base ? `${base} ${shift}` : shift;
  }

  const mergedStyle: CSSProperties = {
    ...style,
    ...overrideStyle,
    ...(editMode ? {
      outline: open ? "2px solid #028faa" : "1px dashed rgba(2,143,170,0.3)",
      outlineOffset: 3,
      cursor: "pointer",
    } : {}),
  };

  const El = Tag as React.ElementType;
  return (
    <El
      ref={ref}
      style={mergedStyle}
      onClick={editMode ? (e: React.MouseEvent) => { e.stopPropagation(); setOpen(v => !v); } : undefined}
    >
      {children}
      {editMode && open && (
        <EditPanel
          anchorRef={ref}
          override={override}
          onChange={patch => setOverride(id, patch)}
          onReset={() => { clearOverride(id); }}
          onClose={() => setOpen(false)}
        />
      )}
    </El>
  );
}
