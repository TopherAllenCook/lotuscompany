"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { font, EASE_OUT } from "@/lib/theme";
import { useEditMode } from "@/components/EditableText";
import type { ElementOverride } from "@/lib/textOverrides";

const TEXT_SLIDERS = [
  { key: "fontSize",      label: "font size",      min: 6,    max: 120,  step: 0.5,  suffix: "px" },
  { key: "translateX",    label: "move x",         min: -800, max: 800,  step: 1,    suffix: "px" },
  { key: "translateY",    label: "move y",         min: -800, max: 800,  step: 1,    suffix: "px" },
  { key: "letterSpacing", label: "letter spacing", min: -0.1, max: 0.6,  step: 0.01, suffix: "em" },
  { key: "lineHeight",    label: "line height",    min: 0.8,  max: 3.5,  step: 0.05, suffix: "" },
] as const;

const SHAPE_SLIDERS = [
  { key: "translateX", label: "move x",  min: -800, max: 800,  step: 1,   suffix: "px" },
  { key: "translateY", label: "move y",  min: -800, max: 800,  step: 1,   suffix: "px" },
  { key: "width",      label: "width",   min: 0,    max: 2000, step: 1,   suffix: "px" },
  { key: "height",     label: "height",  min: 0,    max: 1200, step: 1,   suffix: "px" },
  { key: "opacity",    label: "opacity", min: 0,    max: 1,    step: 0.01, suffix: "" },
  { key: "rotate",     label: "rotate",  min: -180, max: 180,  step: 0.5, suffix: "°" },
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
  };
}

function readShapeValues(el: HTMLElement, override: ElementOverride): Record<string, number> {
  const cs = window.getComputedStyle(el);
  return {
    translateX: override.translateX ?? 0,
    translateY: override.translateY ?? 0,
    width:      (override.width      ?? parseFloat(cs.width))  || 0,
    height:     (override.height     ?? parseFloat(cs.height)) || 0,
    opacity:    override.opacity    ?? 1,
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
  } = useEditMode();

  const editables = registeredList.filter(e => e.id.startsWith(slideKey + ":"));
  const activeEntry = registeredList.find(e => e.id === activeId);
  const activeType = activeEntry?.type ?? "text";
  const isTextType = activeType === "text";

  const [vals, setVals] = useState<Record<string, number>>({
    fontSize: 16, translateX: 0, translateY: 0, letterSpacing: 0, lineHeight: 1.5,
    width: 0, height: 0, opacity: 1, rotate: 0,
  });
  const [contentText, setContentText] = useState("");
  const [colorHex, setColorHex] = useState("#ffffff");
  const [bgHex, setBgHex] = useState("#4dbad6");
  const prevActiveId = useRef<string | null>(null);

  useEffect(() => {
    if (!activeId || activeId === prevActiveId.current) return;
    prevActiveId.current = activeId;
    const el = getEl(activeId);
    if (!el) return;
    const override = overrides[activeId] ?? {};
    const type = registeredList.find(e => e.id === activeId)?.type ?? "text";

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

  const handleClose = () => {
    setEditMode(false);
    setActiveId(null);
    onClose();
  };

  const activeOverride = activeId ? overrides[activeId] ?? {} : {};
  const sliders = isTextType ? TEXT_SLIDERS : SHAPE_SLIDERS;

  const typeLabel = (t: string) => {
    if (t === "bar") return "bar";
    if (t === "dot") return "dot";
    if (t === "gradient") return "gradient";
    if (t === "image") return "image";
    if (t === "shape") return "shape";
    return "text";
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
            <div style={{ display: "flex", gap: 6 }}>
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
                    }}>{typeLabel(type)}</span>
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
                  <button
                    onClick={handleReset}
                    style={{
                      background: "none", border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 3, padding: "3px 9px",
                      color: "rgba(255,255,255,0.3)", fontSize: 9,
                      letterSpacing: "0.12em", textTransform: "lowercase",
                      cursor: "pointer", fontFamily: font,
                    }}
                  >
                    reset
                  </button>
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
                  {!isTextType && (
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
                    return (
                      <div key={key}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "lowercase" }}>
                            {label}
                          </span>
                          <span style={{ fontSize: 10, color: "#4dbad6", fontVariantNumeric: "tabular-nums" }}>
                            {val.toFixed(step < 1 ? 2 : 1)}{suffix}
                          </span>
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

          {/* Footer */}
          <div style={{ flexShrink: 0, padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ margin: 0, fontSize: 9, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em", textTransform: "lowercase", lineHeight: 1.6 }}>
              changes save automatically · blue dot = modified · drag to reposition · esc to close
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
