"use client";

import { useEffect, useState } from "react";
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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // globals.css sets html,body { overflow:hidden; height:100% } which clips
    // the print page to one viewport — override it so all slides are reachable
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "auto";
    html.style.height   = "auto";
    body.style.overflow = "auto";
    body.style.height   = "auto";

    // Give Supabase overrides + images 3s to load before enabling print
    const t = setTimeout(() => setReady(true), 3000);

    return () => {
      clearTimeout(t);
      html.style.overflow = "";
      html.style.height   = "";
      body.style.overflow = "";
      body.style.height   = "";
    };
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, background: "#050a0c" }}>
      {/* Toolbar — hidden when printing */}
      <div
        className="no-print"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          display: "flex", alignItems: "center", gap: 12,
          padding: "12px 20px",
          background: "rgba(5,10,12,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <button
          onClick={() => window.print()}
          disabled={!ready}
          style={{
            padding: "10px 28px",
            background: ready ? "#4dbad6" : "rgba(77,186,214,0.25)",
            color: ready ? "#050a0c" : "rgba(255,255,255,0.3)",
            border: "none",
            borderRadius: 4,
            cursor: ready ? "pointer" : "not-allowed",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            transition: "all 0.4s ease",
          }}
        >
          {ready ? "print / save pdf" : "preparing…"}
        </button>

        <button
          onClick={() => window.history.back()}
          style={{
            padding: "10px 18px",
            background: "transparent",
            color: "rgba(255,255,255,0.4)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          ← back
        </button>

        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", marginLeft: 4 }}>
          chrome: destination → save as pdf · background graphics → on · scale → 100%
        </span>
      </div>

      {/* Spacer */}
      <div className="no-print" style={{ height: 53 }} />

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
