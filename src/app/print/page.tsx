"use client";

import { useEffect, useState, useRef } from "react";
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
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const runningRef = useRef(false);

  useEffect(() => {
    // Override global overflow:hidden so all slides render
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "auto";
    html.style.height = "auto";
    body.style.overflow = "auto";
    body.style.height = "auto";

    // Wait 3s for Supabase overrides + images
    const t = setTimeout(() => setReady(true), 3000);
    return () => {
      clearTimeout(t);
      html.style.overflow = "";
      html.style.height = "";
      body.style.overflow = "";
      body.style.height = "";
    };
  }, []);

  async function downloadPDF() {
    if (!containerRef.current || runningRef.current) return;
    runningRef.current = true;
    setGenerating(true);
    setProgress(0);

    // Open the target window NOW — inside the user gesture — before any await
    const pdfWindow = window.open("", "_blank");

    try {
      const { default: html2canvas } = await import("html2canvas");
      const { default: jsPDF } = await import("jspdf");

      // Snapshot the slide elements before any re-renders occur
      const slideEls = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(".print-slide")
      );
      const total = slideEls.length;

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1440, 810],
        compress: true,
      });

      for (let i = 0; i < total; i++) {
        const canvas = await html2canvas(slideEls[i], {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          width: 1440,
          height: 810,
          logging: false,
        });

        if (i > 0) pdf.addPage([1440, 810], "landscape");
        pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 1440, 810);

        setProgress(Math.round(((i + 1) / total) * 100));
      }

      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
      if (pdfWindow) {
        pdfWindow.location.href = url;
      } else {
        // fallback if popup was blocked
        const a = document.createElement("a");
        a.href = url;
        a.download = "lotus-company-deck.pdf";
        a.click();
      }
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (err) {
      pdfWindow?.close();
      throw err;
    } finally {
      runningRef.current = false;
      setGenerating(false);
      setProgress(0);
    }
  }

  return (
    <div style={{ margin: 0, padding: 0, background: "#050a0c" }}>
      {/* Toolbar */}
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
          onClick={downloadPDF}
          disabled={!ready || generating}
          style={{
            padding: "10px 28px",
            background: ready && !generating ? "#4dbad6" : "rgba(77,186,214,0.25)",
            color: ready && !generating ? "#050a0c" : "rgba(255,255,255,0.3)",
            border: "none",
            borderRadius: 4,
            cursor: ready && !generating ? "pointer" : "not-allowed",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            transition: "all 0.4s ease",
            minWidth: 180,
          }}
        >
          {!ready
            ? "preparing…"
            : generating
            ? `building pdf… ${progress}%`
            : "download pdf"}
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

        <a
          href="/pdf"
          style={{
            marginLeft: "auto",
            padding: "10px 18px",
            background: "transparent",
            color: "rgba(77,186,214,0.6)",
            border: "1px solid rgba(77,186,214,0.2)",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 12,
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
        >
          letter pdf →
        </a>

        {generating && (
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
            capturing {progress}% — this takes about a minute
          </span>
        )}
      </div>

      {/* Spacer */}
      <div className="no-print" style={{ height: 53 }} />

      {/* Slides */}
      <div ref={containerRef}>
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
    </div>
  );
}
