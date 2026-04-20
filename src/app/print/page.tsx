"use client";

import { useEffect } from "react";
import { slides, SLIDE_REGISTRY } from "@/slides";
import { EditModeProvider } from "@/components/EditableText";

export default function PrintPage() {
  return (
    <EditModeProvider>
      <PrintInner />
    </EditModeProvider>
  );
}

function PrintInner() {
  return (
    <div>
      {/* Print button — hidden when printing */}
      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 1000, display: "flex", gap: 10 }} className="no-print">
        <button
          onClick={() => window.print()}
          style={{
            padding: "10px 24px",
            background: "#4dbad6",
            color: "#050a0c",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.08em",
          }}
        >
          print / save pdf
        </button>
        <button
          onClick={() => window.history.back()}
          style={{
            padding: "10px 18px",
            background: "transparent",
            color: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          back
        </button>
      </div>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={SLIDE_REGISTRY[i].key}
          className="print-slide"
          style={{
            width: "1440px",
            height: "810px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {slide}
        </div>
      ))}
    </div>
  );
}
