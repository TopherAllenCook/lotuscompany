"use client";

import { useEffect, useState } from "react";
import { slides, SLIDE_REGISTRY } from "@/slides";
import { EditModeProvider } from "@/components/EditableText";

/* ─── Page dimensions ──────────────────────────────────────────
   Letter landscape: 11 × 8.5 in
   At 96 dpi (screen):  1056 × 816 px
   Original slide:      1440 × 810 px
   Scale to fit width:  1056 / 1440 = 0.7333…
   Scaled height:       810 × 0.7333 = 594 px  (centred in 816 px)
─────────────────────────────────────────────────────────────── */
const PAGE_W = 1056;   // px  (11 in × 96)
const PAGE_H = 816;    // px  (8.5 in × 96)
const SLIDE_W = 1440;
const SLIDE_H = 810;
const SCALE = PAGE_W / SLIDE_W;                     // 0.7333…
const SCALED_H = Math.round(SLIDE_H * SCALE);        // 594 px
const OFFSET_Y = Math.round((PAGE_H - SCALED_H) / 2); // 111 px

export default function PdfPage() {
  return (
    <EditModeProvider>
      <PdfInner />
    </EditModeProvider>
  );
}

function PdfInner() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "auto";
    html.style.height = "auto";
    body.style.overflow = "auto";
    body.style.height = "auto";
    // Give Supabase overrides + images time to settle
    const t = setTimeout(() => setReady(true), 3000);
    return () => {
      clearTimeout(t);
      html.style.overflow = "";
      html.style.height = "";
      body.style.overflow = "";
      body.style.height = "";
    };
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, background: "#1a1a1a" }}>

      {/* ── Toolbar (hidden at print) ── */}
      <div
        className="no-print"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          display: "flex", alignItems: "center", gap: 12,
          padding: "12px 20px",
          background: "rgba(5,10,12,0.96)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          fontFamily: "var(--font-futura), 'Futura', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <button
          onClick={() => window.print()}
          disabled={!ready}
          style={{
            padding: "10px 28px",
            background: ready ? "#4dbad6" : "rgba(77,186,214,0.25)",
            color: ready ? "#050a0c" : "rgba(255,255,255,0.3)",
            border: "none", borderRadius: 4,
            cursor: ready ? "pointer" : "not-allowed",
            fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
            transition: "all 0.3s ease", minWidth: 180,
          }}
        >
          {ready ? "print / save as pdf" : "preparing…"}
        </button>

        <button
          onClick={() => window.history.back()}
          style={{
            padding: "10px 18px",
            background: "transparent",
            color: "rgba(255,255,255,0.4)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 4, cursor: "pointer", fontSize: 13,
          }}
        >
          ← back
        </button>

        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
          {slides.length} pages · letter landscape · 11 × 8.5 in
        </span>
      </div>

      {/* Spacer for fixed toolbar */}
      <div className="no-print" style={{ height: 53 }} />

      {/* ── Slide pages ── */}
      {slides.map((slide, i) => (
        <div
          key={SLIDE_REGISTRY[i].key}
          className="pdf-page"
        >
          {/* Scaled slide content */}
          <div className="pdf-slide-inner">
            {slide}
          </div>
        </div>
      ))}
    </div>
  );
}
