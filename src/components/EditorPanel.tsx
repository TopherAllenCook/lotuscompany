"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { font, EASE_OUT } from "@/lib/theme";
import { useEditMode } from "@/components/EditableText";
import { SLIDE_EDITABLES } from "@/lib/slideEditables";
import type { TextOverride } from "@/lib/textOverrides";

// ─── Slider controls definition ─────────────────────────────────────────────

const CONTROLS = [
  { key: "fontSize",      label: "font size",      min: 6,    max: 120,  step: 0.5,  suffix: "px" },
  { key: "translateX",    label: "move x",         min: -300, max: 300,  step: 1,    suffix: "px" },
  { key: "translateY",    label: "move y",         min: -300, max: 300,  step: 1,    suffix: "px" },
  { key: "letterSpacing", label: "letter spacing", min: -0.1, max: 0.6,  step: 0.01, suffix: "em" },
  { key: "lineHeight",    label: "line height",    min: 0.8,  max: 3.5,  step: 0.05, suffix: "" },
] as const;

// Initial slider values read from computed DOM style — so sliders start at
// the actual rendered value rather than an arbitrary default.
function readInitialValues(el: HTMLElement, override: TextOverride): Record<string, number> {
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

// ─── Main panel ─────────────────────────────────────────────────────────────

interface Props {
  slideKey: string;
  open: boolean;
  onClose: () => void;
}

export function EditorPanel({ slideKey, open, onClose }: Props) {
  const { overrides, setOverride, clearOverride, activeId, setActiveId, getEl, setEditMode } = useEditMode();
  const editables = SLIDE_EDITABLES[slideKey] ?? [];

  // Local slider values — initialized from DOM when activeId changes
  const [vals, setVals] = useState<Record<string, number>>({
    fontSize: 16, translateX: 0, translateY: 0, letterSpacing: 0, lineHeight: 1.5,
  });

  useEffect(() => {
    if (!activeId) return;
    const el = getEl(activeId);
    if (!el) return;
    setVals(readInitialValues(el, overrides[activeId] ?? {}));
  }, [activeId, getEl, overrides]);

  // Write to context on every slider change
  const handleChange = useCallback((field: string, value: number) => {
    setVals(prev => ({ ...prev, [field]: value }));
    if (activeId) setOverride(activeId, { [field]: value } as Partial<TextOverride>);
  }, [activeId, setOverride]);

  const handleReset = useCallback(() => {
    if (!activeId) return;
    clearOverride(activeId);
    const el = getEl(activeId);
    if (el) {
      // Small delay so override is cleared before re-reading computed style
      setTimeout(() => setVals(readInitialValues(el, {})), 16);
    }
  }, [activeId, clearOverride, getEl]);

  const handleClose = () => {
    setEditMode(false);
    setActiveId(null);
    onClose();
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
              <p style={{
                margin: 0, fontSize: 9, color: "#028faa",
                letterSpacing: "0.22em", textTransform: "lowercase",
              }}>
                text editor
              </p>
              <p style={{
                margin: "3px 0 0", fontSize: 11, color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.05em", textTransform: "lowercase",
              }}>
                {slideKey.replace(/-/g, " ")}
              </p>
            </div>
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

          {/* Element list */}
          <div style={{
            flexShrink: 0, padding: "10px 0",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            overflowY: "auto", maxHeight: "35%",
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
                no editable elements on this slide yet
              </p>
            )}
            {editables.map(({ id, label }) => {
              const isActive = activeId === id;
              const hasOverride = !!overrides[id];
              return (
                <button
                  key={id}
                  onClick={() => setActiveId(isActive ? null : id)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "9px 20px",
                    background: isActive ? "rgba(2,143,170,0.12)" : "transparent",
                    borderLeft: isActive ? "2px solid #028faa" : "2px solid transparent",
                    border: "none", textAlign: "left", cursor: "pointer",
                    transition: "background 0.12s ease",
                  }}
                >
                  <span style={{
                    fontSize: 11, color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                    letterSpacing: "0.06em", textTransform: "lowercase",
                  }}>
                    {label}
                  </span>
                  {hasOverride && (
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#028faa", flexShrink: 0,
                    }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Sliders */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
            {!activeId ? (
              <p style={{
                margin: 0, fontSize: 11, color: "rgba(255,255,255,0.2)",
                lineHeight: 1.6, letterSpacing: "0.04em", textTransform: "lowercase",
              }}>
                select an element above to edit its size and position.
              </p>
            ) : (
              <>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  marginBottom: 14,
                }}>
                  <p style={{
                    margin: 0, fontSize: 9, color: "#028faa",
                    letterSpacing: "0.18em", textTransform: "lowercase",
                  }}>
                    properties
                  </p>
                  <button
                    onClick={handleReset}
                    style={{
                      background: "none",
                      border: "1px solid rgba(255,255,255,0.1)",
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
                  {CONTROLS.map(({ key, label, min, max, step, suffix }) => {
                    const val = vals[key] ?? 0;
                    return (
                      <div key={key}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                          <span style={{
                            fontSize: 10, color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.1em", textTransform: "lowercase",
                          }}>
                            {label}
                          </span>
                          <span style={{
                            fontSize: 10, color: "#4dbad6",
                            fontVariantNumeric: "tabular-nums",
                          }}>
                            {val.toFixed(step < 1 ? 2 : 1)}{suffix}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={min}
                          max={max}
                          step={step}
                          value={val}
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

          {/* Footer hint */}
          <div style={{
            flexShrink: 0, padding: "12px 20px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}>
            <p style={{
              margin: 0, fontSize: 9, color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.1em", textTransform: "lowercase", lineHeight: 1.6,
            }}>
              changes save automatically. blue dot = modified. press esc to close.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
