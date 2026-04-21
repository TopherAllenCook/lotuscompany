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
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [buildError, setBuildError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const runningRef = useRef(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "auto";
    html.style.height = "auto";
    body.style.overflow = "auto";
    body.style.height = "auto";

    const t = setTimeout(() => setReady(true), 3000);
    return () => {
      clearTimeout(t);
      html.style.overflow = "";
      html.style.height = "";
      body.style.overflow = "";
      body.style.height = "";
    };
  }, []);

  // Revoke previous blob URL when a new one is generated
  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfUrl]);

  async function buildPDF() {
    if (!containerRef.current || runningRef.current) return;
    runningRef.current = true;
    setPdfUrl(null);
    setBuildError(null);
    setGenerating(true);
    setProgress(0);

    try {
      const { default: html2canvas } = await import("html2canvas");
      const { default: jsPDF } = await import("jspdf");

      const slideEls = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(".print-slide")
      );
      const total = slideEls.length;

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1440, 810],
      });

      for (let i = 0; i < total; i++) {
        const canvas = await html2canvas(slideEls[i], {
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#050a0c",
          width: 1440,
          height: 810,
          logging: false,
          imageTimeout: 15000,
        });

        if (i > 0) pdf.addPage([1440, 810], "landscape");
        pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 1440, 810);
        setProgress(Math.round(((i + 1) / total) * 100));
      }

      const blob = pdf.output("blob");
      setPdfUrl(URL.createObjectURL(blob));
    } catch (err) {
      setBuildError(err instanceof Error ? err.message : String(err));
    } finally {
      runningRef.current = false;
      setGenerating(false);
    }
  }

  const done = !generating && pdfUrl;

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
        {/* Step 1 — build */}
        {!done && (
          <button
            onClick={buildPDF}
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
            {!ready ? "preparing…" : generating ? `building… ${progress}%` : "build pdf"}
          </button>
        )}

        {/* Step 2 — download link (real user gesture, no permission prompt) */}
        {done && (
          <>
            <a
              href={pdfUrl!}
              download="lotus-company-deck.pdf"
              style={{
                padding: "10px 28px",
                background: "#4dbad6",
                color: "#050a0c",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              ↓ download pdf
            </a>
            <button
              onClick={() => { setPdfUrl(null); setProgress(0); }}
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
              rebuild
            </button>
          </>
        )}

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
        {buildError && (
          <span style={{ fontSize: 11, color: "#f87171", letterSpacing: "0.06em", maxWidth: 600 }}>
            error: {buildError}
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
