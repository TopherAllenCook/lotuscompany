"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { font, EASE_OUT } from "@/lib/theme";
import { useEditMode } from "@/components/EditableText";
import type { ElementOverride } from "@/lib/textOverrides";
import { pushSavedState } from "@/lib/textOverrides";

const TEXT_SLIDERS = [
  { key: "fontSize",      label: "font size",      min: 6,    max: 120,  step: 0.5,  suffix: "px" },
  { key: "translateX",    label: "move x",         min: -800, max: 800,  step: 1,    suffix: "px" },
  { key: "translateY",    label: "move y",         min: -800, max: 800,  step: 1,    suffix: "px" },
  { key: "letterSpacing", label: "letter spacing", min: -0.1, max: 0.6,  step: 0.01, suffix: "em" },
  { key: "lineHeight",    label: "line height",    min: 0.8,  max: 3.5,  step: 0.05, suffix: "" },
  { key: "opacity",       label: "opacity",        min: 0,    max: 100,  step: 1,    suffix: "%" },
] as const;

const SHAPE_SLIDERS = [
  { key: "translateX", label: "move x",  min: -800, max: 800,  step: 1,   suffix: "px" },
  { key: "translateY", label: "move y",  min: -800, max: 800,  step: 1,   suffix: "px" },
  { key: "width",      label: "width",   min: 0,    max: 2000, step: 1,   suffix: "px" },
  { key: "height",     label: "height",  min: 0,    max: 1200, step: 1,   suffix: "px" },
  { key: "opacity",    label: "opacity", min: 0,    max: 100,  step: 1,   suffix: "%" },
  { key: "rotate",     label: "rotate",  min: -180, max: 180,  step: 0.5, suffix: "°" },
] as const;

const CARD_SLIDERS = [
  { key: "translateX",   label: "move x",       min: -800, max: 800,  step: 1,   suffix: "px" },
  { key: "translateY",   label: "move y",       min: -800, max: 800,  step: 1,   suffix: "px" },
  { key: "width",        label: "width",        min: 0,    max: 2000, step: 1,   suffix: "px" },
  { key: "height",       label: "height",       min: 0,    max: 1200, step: 1,   suffix: "px" },
  { key: "opacity",      label: "opacity",      min: 0,    max: 100,  step: 1,   suffix: "%" },
  { key: "borderRadius", label: "corner radius", min: 0,   max: 80,   step: 1,   suffix: "px" },
  { key: "blurAmount",   label: "blur",         min: 0,    max: 40,   step: 0.5, suffix: "px" },
] as const;

const SVG_NODE_SLIDERS = [
  { key: "translateX",   label: "move x",        min: -800, max: 800, step: 1,   suffix: "px" },
  { key: "translateY",   label: "move y",        min: -800, max: 800, step: 1,   suffix: "px" },
  { key: "width",        label: "width",         min: 20,   max: 400, step: 1,   suffix: "px" },
  { key: "height",       label: "height",        min: 10,   max: 300, step: 1,   suffix: "px" },
  { key: "opacity",      label: "opacity",       min: 0,    max: 100, step: 1,   suffix: "%" },
  { key: "borderRadius", label: "corner radius", min: 0,    max: 40,  step: 1,   suffix: "px" },
] as const;

const BG_IMAGE_SLIDERS = [
  { key: "opacity",         label: "opacity",   min: 0,  max: 100, step: 1, suffix: "%" },
  { key: "objectPositionX", label: "position x", min: 0, max: 100, step: 1, suffix: "%" },
  { key: "objectPositionY", label: "position y", min: 0, max: 100, step: 1, suffix: "%" },
] as const;

const WEIGHTS = [300, 400, 500, 600, 700] as const;
const GRID_SIZES = [4, 8, 16, 32] as const;

function readTextValues(el: HTMLElement, override: ElementOverride): Record<string, number> {
  const cs = window.getComputedStyle(el);
  const baseFontSize = parseFloat(cs.fontSize) || 16;
  const baseLineHeight = parseFloat(cs.lineHeight);
  return {
    fontSize:      override.fontSize      ?? baseFontSize,
    translateX:    override.translateX    ?? 0,
    translateY:    override.translateY    ?? 0,
    letterSpacing: override.letterSpacing ?? 0,
    lineHeight:    override.lineHeight    ?? (isNaN(baseLineHeight) ? 1.5 : +(baseLineHeight / baseFontSize).toFixed(2)),
    opacity:       override.opacity       ?? 100,
  };
}

function readShapeValues(el: HTMLElement, override: ElementOverride): Record<string, number> {
  const cs = window.getComputedStyle(el);
  return {
    translateX: override.translateX ?? 0,
    translateY: override.translateY ?? 0,
    width:      (override.width      ?? parseFloat(cs.width))  || 0,
    height:     (override.height     ?? parseFloat(cs.height)) || 0,
    opacity:    override.opacity    ?? 100,
    rotate:     override.rotate     ?? 0,
  };
}

function rgbToHex(rgb: string): string | null {
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return null;
  return "#" + [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, "0")).join("");
}

interface Props {
  slideKey: string;
  open: boolean;
  onClose: () => void;
}

export function EditorPanel({ slideKey, open, onClose }: Props) {
  const {
    overrides, setOverride, clearOverride,
    activeId, setActiveId, getEl, setEditMode, registeredList,
    gridSize, snapToGrid, showGrid, setGridSize, setSnapToGrid, setShowGrid,
    dynamicElements, addDynamicElement, removeDynamicElement,
  } = useEditMode();

  const editables = registeredList.filter(e => e.id.startsWith(slideKey + ":"));
  const activeEntry = registeredList.find(e => e.id === activeId);
  const activeType = activeEntry?.type ?? "text";
  const isTextType = activeType === "text";
  const isCardType = activeType === "card";
  const isSvgNodeType = activeType === "svgnode";
  const isBgImageType = activeType === "bgimage";
  const isActiveDynamic = activeId != null && dynamicElements[activeId] != null;

  const [vals, setVals] = useState<Record<string, number>>({
    fontSize: 16, translateX: 0, translateY: 0, letterSpacing: 0, lineHeight: 1.5,
    width: 0, height: 0, opacity: 100, rotate: 0,
  });
  // null = show formatted val; string = user is typing
  const [inputDrafts, setInputDrafts] = useState<Record<string, string | null>>({});
  const [contentText, setContentText] = useState("");
  const [colorHex, setColorHex] = useState("#ffffff");
  const [bgHex, setBgHex] = useState("#4dbad6");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [saveError, setSaveError] = useState<string | null>(null);
  const prevActiveId = useRef<string | null>(null);

  useEffect(() => {
    if (!activeId || activeId === prevActiveId.current) return;
    prevActiveId.current = activeId;
    const override = overrides[activeId] ?? {};
    const type = registeredList.find(e => e.id === activeId)?.type ?? "text";

    if (type === "bgimage") {
      setVals({
        opacity: override.opacity ?? 100,
        objectPositionX: override.objectPositionX ?? 50,
        objectPositionY: override.objectPositionY ?? 50,
      });
      return;
    }

    if (type === "card") {
      const cardEl = getEl(activeId);
      let w = override.width ?? 0;
      let h = override.height ?? 0;
      if ((!w || !h) && cardEl) {
        const rect = cardEl.getBoundingClientRect();
        w = w || Math.round(rect.width);
        h = h || Math.round(rect.height);
      }
      setVals({
        translateX: override.translateX ?? 0,
        translateY: override.translateY ?? 0,
        width: w, height: h,
        opacity: override.opacity ?? 100,
        borderRadius: override.borderRadius ?? 0,
        blurAmount: override.blurAmount ?? 0,
      });
      return;
    }

    if (type === "svgnode") {
      const svgEl = getEl(activeId) as unknown as SVGGElement | null;
      let w = override.width ?? 0;
      let h = override.height ?? 0;
      if ((!w || !h) && svgEl?.getBBox) {
        try { const b = svgEl.getBBox(); w = w || Math.round(b.width); h = h || Math.round(b.height); } catch {}
      }
      setVals({
        translateX: override.translateX ?? 0,
        translateY: override.translateY ?? 0,
        width: w, height: h,
        opacity: override.opacity ?? 100,
        borderRadius: override.borderRadius ?? 0,
      });
      setBgHex(override.background ?? "#4dbad6");
      return;
    }

    const el = getEl(activeId);
    if (!el) return;

    if (type === "text") {
      setVals(readTextValues(el, override));
      setContentText(override.content ?? el.innerText ?? "");
      setColorHex(override.color ?? rgbToHex(window.getComputedStyle(el).color) ?? "#ffffff");
    } else {
      setVals(readShapeValues(el, override));
      const cs = window.getComputedStyle(el);
      const rawBg = override.background ?? cs.backgroundColor ?? "";
      setBgHex(rgbToHex(rawBg) ?? "#4dbad6");
    }
  }, [activeId, getEl, overrides, registeredList]);

  const handleChange = useCallback((field: string, value: number) => {
    setVals(prev => ({ ...prev, [field]: value }));
    setInputDrafts(prev => ({ ...prev, [field]: null }));
    if (activeId) setOverride(activeId, { [field]: value } as Partial<ElementOverride>);
  }, [activeId, setOverride]);

  const handleContent = useCallback((value: string) => {
    setContentText(value);
    if (activeId) setOverride(activeId, { content: value });
  }, [activeId, setOverride]);

  const handleColor = useCallback((value: string) => {
    setColorHex(value);
    if (activeId) setOverride(activeId, { color: value });
  }, [activeId, setOverride]);

  const handleBg = useCallback((value: string) => {
    setBgHex(value);
    if (activeId) setOverride(activeId, { background: value });
  }, [activeId, setOverride]);

  const handleWeight = useCallback((w: number) => {
    if (activeId) setOverride(activeId, { fontWeight: w });
  }, [activeId, setOverride]);

  const handleResetSlide = useCallback(() => {
    editables.forEach(({ id }) => clearOverride(id));
    setActiveId(null);
  }, [editables, clearOverride, setActiveId]);

  const handleReset = useCallback(() => {
    if (!activeId) return;
    clearOverride(activeId);
    const el = getEl(activeId);
    const type = registeredList.find(e => e.id === activeId)?.type ?? "text";
    if (el) {
      setTimeout(() => {
        if (type === "text") {
          setVals(readTextValues(el, {}));
          setContentText(el.innerText ?? "");
          setColorHex(rgbToHex(window.getComputedStyle(el).color) ?? "#ffffff");
        } else {
          setVals(readShapeValues(el, {}));
          setBgHex(rgbToHex(window.getComputedStyle(el).backgroundColor) ?? "#4dbad6");
        }
      }, 16);
    }
  }, [activeId, clearOverride, getEl, registeredList]);

  const handleSave = useCallback(async () => {
    setSaveState("saving");
    setSaveError(null);
    const result = await pushSavedState(overrides, dynamicElements);
    setSaveState(result.ok ? "saved" : "error");
    if (!result.ok) setSaveError(result.error ?? null);
    setTimeout(() => setSaveState("idle"), 3500);
  }, [overrides, dynamicElements]);

  const handleAddElement = useCallback((type: "text" | "bar" | "shape") => {
    const id = addDynamicElement(slideKey, type);
    // Give the element a moment to mount, then select it
    setTimeout(() => setActiveId(id), 80);
  }, [slideKey, addDynamicElement, setActiveId]);

  const handleDeleteElement = useCallback(() => {
    if (!activeId || !isActiveDynamic) return;
    removeDynamicElement(activeId);
    setActiveId(null);
  }, [activeId, isActiveDynamic, removeDynamicElement, setActiveId]);

  const handleClose = () => {
    setEditMode(false);
    setActiveId(null);
    onClose();
  };

  const activeOverride = activeId ? overrides[activeId] ?? {} : {};
  const sliders = isBgImageType ? BG_IMAGE_SLIDERS : isCardType ? CARD_SLIDERS : isSvgNodeType ? SVG_NODE_SLIDERS : isTextType ? TEXT_SLIDERS : SHAPE_SLIDERS;

  const typeLabel = (t: string) => {
    if (t === "bar") return "bar";
    if (t === "dot") return "dot";
    if (t === "gradient") return "gradient";
    if (t === "image") return "image";
    if (t === "shape") return "shape";
    if (t === "card") return "card";
    if (t === "svgnode") return "node";
    if (t === "bgimage") return "bg image";
    return "text";
  };

  const saveBtnStyle = {
    background: saveState === "saved"  ? "rgba(2,143,170,0.25)"  :
                saveState === "error"  ? "rgba(255,80,80,0.15)"  :
                saveState === "saving" ? "rgba(255,255,255,0.05)" : "rgba(2,143,170,0.12)",
    border: `1px solid ${
      saveState === "saved"  ? "#028faa" :
      saveState === "error"  ? "rgba(255,80,80,0.4)" :
      saveState === "saving" ? "rgba(255,255,255,0.1)" : "rgba(2,143,170,0.35)"
    }`,
    borderRadius: 4, padding: "4px 10px",
    color: saveState === "saved"  ? "#4dbad6" :
           saveState === "error"  ? "rgba(255,100,100,0.8)" : "rgba(2,143,170,0.8)",
    fontSize: 9, letterSpacing: "0.12em", textTransform: "lowercase" as const,
    cursor: saveState === "saving" ? "default" : "pointer", fontFamily: font,
    transition: "all 0.2s ease",
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="editor-panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          style={{
            position: "fixed", top: 0, right: 0, bottom: 0,
            width: 268, zIndex: 300,
            background: "#0e0e0e",
            borderLeft: "1px solid rgba(77,186,214,0.18)",
            display: "flex", flexDirection: "column",
            fontFamily: font,
          }}
        >
          {/* Header */}
          <div style={{
            padding: "20px 20px 14px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <div>
              <p style={{ margin: 0, fontSize: 9, color: "#028faa", letterSpacing: "0.22em", textTransform: "lowercase" }}>
                element editor
              </p>
              <p style={{ margin: "3px 0 0", fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em", textTransform: "lowercase" }}>
                {slideKey.replace(/-/g, " ")}
              </p>
            </div>
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
                <button onClick={handleSave} disabled={saveState === "saving"} style={saveBtnStyle}
                  title={saveError ?? undefined}>
                  {saveState === "saving" ? "saving…" : saveState === "saved" ? "saved ✓" : saveState === "error" ? "error ↑" : "save"}
                </button>
                {saveState === "error" && saveError && (
                  <span style={{
                    fontSize: 8, color: "rgba(255,100,100,0.65)",
                    maxWidth: 130, textAlign: "right", lineHeight: 1.3,
                    letterSpacing: "0.03em", fontFamily: font,
                  }}>
                    {saveError.slice(0, 80)}
                  </span>
                )}
              </div>
              <button
                onClick={handleResetSlide}
                title="Clear all overrides for this slide"
                style={{
                  background: "none", border: "1px solid rgba(255,80,80,0.2)",
                  borderRadius: 4, padding: "4px 9px",
                  color: "rgba(255,100,100,0.5)", fontSize: 9,
                  letterSpacing: "0.1em", textTransform: "lowercase",
                  cursor: "pointer", fontFamily: font,
                }}
              >reset slide</button>
              <button
                onClick={handleClose}
                aria-label="Close editor"
                style={{
                  background: "none", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4, padding: "4px 9px",
                  color: "rgba(255,255,255,0.35)", fontSize: 14,
                  cursor: "pointer", lineHeight: 1,
                }}
              >×</button>
            </div>
          </div>

          {/* Grid controls */}
          <div style={{
            flexShrink: 0, padding: "10px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            <p style={{ margin: "0 0 8px", fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em", textTransform: "lowercase" }}>
              grid
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                <input type="checkbox" checked={showGrid} onChange={e => setShowGrid(e.target.checked)}
                  style={{ accentColor: "#028faa", cursor: "pointer" }} />
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "lowercase" }}>show</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                <input type="checkbox" checked={snapToGrid} onChange={e => setSnapToGrid(e.target.checked)}
                  style={{ accentColor: "#028faa", cursor: "pointer" }} />
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "lowercase" }}>snap</span>
              </label>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              {GRID_SIZES.map(s => {
                const isOn = gridSize === s;
                return (
                  <button key={s} onClick={() => setGridSize(s)} style={{
                    flex: 1, padding: "4px 0",
                    background: isOn ? "rgba(2,143,170,0.2)" : "rgba(255,255,255,0.04)",
                    border: isOn ? "1px solid #028faa" : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 3, color: isOn ? "#4dbad6" : "rgba(255,255,255,0.3)",
                    fontSize: 9, cursor: "pointer", fontFamily: font,
                  }}>{s}px</button>
                );
              })}
            </div>
          </div>

          {/* Element list */}
          <div style={{
            flexShrink: 0, padding: "10px 0",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            overflowY: "auto", maxHeight: "28%",
          }}>
            <p style={{
              margin: "0 0 6px", padding: "0 20px",
              fontSize: 9, color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.18em", textTransform: "lowercase",
            }}>
              select element
            </p>
            {editables.length === 0 && (
              <p style={{ margin: 0, padding: "6px 20px", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
                click any element on the slide, or select below once elements load.
              </p>
            )}
            {editables.map(({ id, label, type }) => {
              const isActive = activeId === id;
              const hasOverride = !!overrides[id];
              const isDynamic = !!dynamicElements[id];
              return (
                <button
                  key={id}
                  onClick={() => setActiveId(isActive ? null : id)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "8px 20px",
                    background: isActive ? "rgba(2,143,170,0.12)" : "transparent",
                    borderLeft: isActive ? "2px solid #028faa" : "2px solid transparent",
                    border: "none", textAlign: "left", cursor: "pointer",
                    transition: "background 0.12s ease",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span style={{
                      fontSize: 8, color: type === "text" ? "rgba(77,186,214,0.5)" : "rgba(255,186,77,0.6)",
                      letterSpacing: "0.1em", textTransform: "lowercase",
                      border: "1px solid currentColor", borderRadius: 2, padding: "1px 4px", flexShrink: 0,
                    }}>{typeLabel(type)}{isDynamic ? " +" : ""}</span>
                    <span style={{ fontSize: 11, color: isActive ? "#fff" : "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "lowercase" }}>
                      {label}
                    </span>
                  </span>
                  {hasOverride && (
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#028faa", flexShrink: 0 }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
            {!activeId ? (
              <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.2)", lineHeight: 1.6, letterSpacing: "0.04em", textTransform: "lowercase" }}>
                select an element above or click directly on the slide.
              </p>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <p style={{ margin: 0, fontSize: 9, color: "#028faa", letterSpacing: "0.18em", textTransform: "lowercase" }}>
                    {typeLabel(activeType)} properties
                  </p>
                  <div style={{ display: "flex", gap: 5 }}>
                    {isActiveDynamic && (
                      <button
                        onClick={handleDeleteElement}
                        style={{
                          background: "none", border: "1px solid rgba(255,80,80,0.3)",
                          borderRadius: 3, padding: "3px 9px",
                          color: "rgba(255,100,100,0.6)", fontSize: 9,
                          letterSpacing: "0.12em", textTransform: "lowercase",
                          cursor: "pointer", fontFamily: font,
                        }}
                      >delete</button>
                    )}
                    <button
                      onClick={handleReset}
                      style={{
                        background: "none", border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 3, padding: "3px 9px",
                        color: "rgba(255,255,255,0.3)", fontSize: 9,
                        letterSpacing: "0.12em", textTransform: "lowercase",
                        cursor: "pointer", fontFamily: font,
                      }}
                    >reset</button>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {/* Text-only: content */}
                  {isTextType && (
                    <div>
                      <label style={{ display: "block", marginBottom: 6, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "lowercase" }}>
                        text content
                      </label>
                      <textarea
                        value={contentText}
                        onChange={e => handleContent(e.target.value)}
                        rows={3}
                        style={{
                          width: "100%", boxSizing: "border-box",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 4, padding: "8px 10px",
                          color: "#fff", fontSize: 11, fontFamily: font,
                          letterSpacing: "0.04em", lineHeight: 1.5,
                          resize: "vertical", outline: "none",
                        }}
                      />
                    </div>
                  )}

                  {/* Text-only: text color */}
                  {isTextType && (
                    <div>
                      <label style={{ display: "block", marginBottom: 6, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "lowercase" }}>
                        color
                      </label>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input type="color" value={colorHex} onChange={e => handleColor(e.target.value)}
                          style={{ width: 32, height: 28, padding: 2, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, background: "none", cursor: "pointer" }} />
                        <input type="text" value={colorHex}
                          onChange={e => { const v = e.target.value; if (/^#[0-9a-fA-F]{0,6}$/.test(v)) handleColor(v); }}
                          style={{
                            flex: 1, background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 4, padding: "5px 8px",
                            color: "#4dbad6", fontSize: 11, fontFamily: "monospace",
                            letterSpacing: "0.08em", outline: "none",
                          }} />
                      </div>
                    </div>
                  )}

                  {/* Text-only: font weight */}
                  {isTextType && (
                    <div>
                      <label style={{ display: "block", marginBottom: 8, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "lowercase" }}>
                        font weight
                      </label>
                      <div style={{ display: "flex", gap: 5 }}>
                        {WEIGHTS.map(w => {
                          const isOn = (activeOverride.fontWeight ?? 0) === w;
                          return (
                            <button key={w} onClick={() => handleWeight(w)} style={{
                              flex: 1, padding: "5px 0",
                              background: isOn ? "rgba(2,143,170,0.25)" : "rgba(255,255,255,0.04)",
                              border: isOn ? "1px solid #028faa" : "1px solid rgba(255,255,255,0.1)",
                              borderRadius: 3, color: isOn ? "#4dbad6" : "rgba(255,255,255,0.35)",
                              fontSize: 10, fontWeight: w, cursor: "pointer", fontFamily: font,
                            }}>{w}</button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Shape-only: background color */}
                  {!isTextType && !isBgImageType && (
                    <div>
                      <label style={{ display: "block", marginBottom: 6, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "lowercase" }}>
                        background
                      </label>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input type="color" value={bgHex} onChange={e => handleBg(e.target.value)}
                          style={{ width: 32, height: 28, padding: 2, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, background: "none", cursor: "pointer" }} />
                        <input type="text" value={bgHex}
                          onChange={e => { const v = e.target.value; if (/^#[0-9a-fA-F]{0,6}$/.test(v)) handleBg(v); }}
                          style={{
                            flex: 1, background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 4, padding: "5px 8px",
                            color: "#4dbad6", fontSize: 11, fontFamily: "monospace",
                            letterSpacing: "0.08em", outline: "none",
                          }} />
                      </div>
                    </div>
                  )}

                  {/* Sliders (type-aware) */}
                  {sliders.map(({ key, label, min, max, step, suffix }) => {
                    const val = vals[key] ?? 0;
                    const decimals = step < 1 ? 2 : 1;
                    const draft = inputDrafts[key];
                    const displayVal = draft !== null && draft !== undefined ? draft : val.toFixed(decimals);

                    const commitDraft = () => {
                      const parsed = parseFloat(String(draft));
                      if (!isNaN(parsed)) {
                        const clamped = Math.min(max, Math.max(min, parsed));
                        handleChange(key, clamped);
                      }
                      setInputDrafts(prev => ({ ...prev, [key]: null }));
                    };

                    return (
                      <div key={key}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "lowercase" }}>
                            {label}
                          </span>
                          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <input
                              type="text"
                              value={displayVal}
                              onChange={e => setInputDrafts(prev => ({ ...prev, [key]: e.target.value }))}
                              onBlur={commitDraft}
                              onKeyDown={e => {
                                if (e.key === "Enter") { e.currentTarget.blur(); }
                                if (e.key === "Escape") {
                                  setInputDrafts(prev => ({ ...prev, [key]: null }));
                                  e.currentTarget.blur();
                                }
                                if (e.key === "ArrowUp") {
                                  e.preventDefault();
                                  handleChange(key, Math.min(max, val + step));
                                }
                                if (e.key === "ArrowDown") {
                                  e.preventDefault();
                                  handleChange(key, Math.max(min, val - step));
                                }
                              }}
                              style={{
                                width: 52, textAlign: "right",
                                background: "rgba(77,186,214,0.08)",
                                border: "1px solid rgba(77,186,214,0.2)",
                                borderRadius: 3, padding: "2px 5px",
                                color: "#4dbad6", fontSize: 10,
                                fontFamily: "monospace", fontVariantNumeric: "tabular-nums",
                                outline: "none",
                              }}
                            />
                            {suffix && (
                              <span style={{ fontSize: 9, color: "rgba(77,186,214,0.5)", letterSpacing: "0.05em" }}>
                                {suffix}
                              </span>
                            )}
                          </div>
                        </div>
                        <input
                          type="range" min={min} max={max} step={step} value={val}
                          onChange={e => handleChange(key, parseFloat(e.target.value))}
                          style={{ width: "100%", accentColor: "#028faa", cursor: "pointer" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Add element */}
          <div style={{
            flexShrink: 0, padding: "12px 20px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}>
            <p style={{ margin: "0 0 8px", fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em", textTransform: "lowercase" }}>
              add element
            </p>
            <div style={{ display: "flex", gap: 5 }}>
              {(["text", "bar", "shape"] as const).map(t => (
                <button
                  key={t}
                  onClick={() => handleAddElement(t)}
                  style={{
                    flex: 1, padding: "6px 0",
                    background: "rgba(2,143,170,0.08)",
                    border: "1px solid rgba(2,143,170,0.25)",
                    borderRadius: 3,
                    color: "rgba(2,143,170,0.7)",
                    fontSize: 9, letterSpacing: "0.1em", textTransform: "lowercase",
                    cursor: "pointer", fontFamily: font,
                  }}
                >+ {t}</button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ flexShrink: 0, padding: "10px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ margin: 0, fontSize: 9, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em", textTransform: "lowercase", lineHeight: 1.6 }}>
              auto-saved locally · click save to commit · blue dot = modified
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
