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
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Wait for Supabase overrides + images to load before enabling print
    const imgs = Array.from(document.images);
    let settled = false;

    function checkReady() {
      if (settled) return;
      settled = true;
      // Additional 500ms buffer after images for font rendering
      setTimeout(() => setReady(true), 500);
    }

    const allLoaded = imgs.every((img) => img.complete);
    if (allLoaded && imgs.length > 0) {
      checkReady();
    } else {
      // Wait for all images to load, with 4s max timeout
      let loaded = 0;
      const total = imgs.length || 1;
      const onLoad = () => { loaded++; if (loaded >= total) checkReady(); };
      imgs.forEach((img) => {
        if (img.complete) { loaded++; }
        else { img.addEventListener("load", onLoad); img.addEventListener("error", onLoad); }
      });
      if (loaded >= total) checkReady();
      // Fallback timeout
      setTimeout(checkReady, 4000);
    }
  }, []);

  // Countdown display while loading
  useEffect(() => {
    if (ready) return;
    const t = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [ready]);

  return (
    <div style={{ margin: 0, padding: 0, background: "#050a0c" }}>
      {/* Toolbar — hidden when printing */}
      <div
        className="no-print"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          display: "flex", alignItems: "center", gap: 12,
          padding: "12px 20px",
          background: "rgba(5,10,12,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <button
          onClick={() => window.print()}
          disabled={!ready}
          style={{
            padding: "10px 24px",
            background: ready ? "#4dbad6" : "rgba(77,186,214,0.3)",
            color: ready ? "#050a0c" : "rgba(5,10,12,0.5)",
            border: "none",
            borderRadius: 4,
            cursor: ready ? "pointer" : "not-allowed",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            transition: "all 0.3s ease",
          }}
        >
          {ready ? "print / save pdf" : `preparing… ${countdown > 0 ? countdown : ""}`}
        </button>

        <button
          onClick={() => window.history.back()}
          style={{
            padding: "10px 18px",
            background: "transparent",
            color: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          back
        </button>

        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginLeft: 8 }}>
          {ready
            ? "in chrome: destination → save as pdf · background graphics → on"
            : "loading content and images…"}
        </span>
      </div>

      {/* Spacer so slides don't hide behind toolbar */}
      <div className="no-print" style={{ height: 57 }} />

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
