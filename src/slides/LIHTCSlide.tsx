"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { LIHTCTimeline } from "@/components/diagrams/LIHTCTimeline";
import { EditableEl } from "@/components/EditableEl";

export default function LIHTCSlide() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
      }}
    >
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <img
          src="/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", height: "100%", padding: "80px 64px" }}>
        {/* Left Content */}
        <EditableEl id="lihtc:card" label="glass card" type="card" style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "36px 40px 36px 36px", background: "rgba(5,10,12,0.52)", backdropFilter: "blur(28px) saturate(200%)", WebkitBackdropFilter: "blur(28px) saturate(200%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)" }}>
          <EditableText
            id="lihtc:eyebrow"
            as="div"
            style={{
              fontSize: "10px",
              color: theme.turquoise,
              letterSpacing: "0.2em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            what lihtc is
          </EditableText>

          <EditableText
            id="lihtc:headline"
            as="h1"
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "24px",
            }}
          >
            lihtc is the backbone.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <EditableText
              id="lihtc:bullet-1"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              hud describes lihtc as the primary federal production tool for affordable rental housing.
            </EditableText>

            <EditableText
              id="lihtc:bullet-2"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              credits are claimed over a 10-year credit period.
            </EditableText>

            <EditableText
              id="lihtc:bullet-3"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              compliance runs for 15 years, with longer affordability often favored in allocations.
            </EditableText>

            <EditableText
              id="lihtc:bullet-4"
              as="div"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              state housing agencies allocate, test feasibility, and monitor compliance.
            </EditableText>
          </div>
        </EditableEl>

        {/* Right Diagram */}
        <div style={{ flex: "0 0 45%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <svg width="400" height="320" viewBox="0 0 400 320" style={{ marginBottom: "24px" }}>
            {/* Boxes */}
            <rect x="20" y="20" width="80" height="50" rx="3" fill="rgba(77, 186, 214, 0.08)" stroke="rgba(77, 186, 214, 0.3)" strokeWidth="1" />
            <text x="60" y="52" textAnchor="middle" fill="#cee8ee" fontSize="11" fontFamily={font}>
              state
            </text>
            <text x="60" y="64" textAnchor="middle" fill="#cee8ee" fontSize="11" fontFamily={font}>
              agency
            </text>

            <rect x="160" y="20" width="80" height="50" rx="3" fill="rgba(77, 186, 214, 0.08)" stroke="rgba(77, 186, 214, 0.3)" strokeWidth="1" />
            <text x="200" y="52" textAnchor="middle" fill="#cee8ee" fontSize="11" fontFamily={font}>
              developer
            </text>

            <rect x="300" y="20" width="80" height="50" rx="3" fill="rgba(77, 186, 214, 0.08)" stroke="rgba(77, 186, 214, 0.3)" strokeWidth="1" />
            <text x="340" y="52" textAnchor="middle" fill="#cee8ee" fontSize="11" fontFamily={font}>
              lender
            </text>

            <rect x="50" y="180" width="100" height="50" rx="3" fill="rgba(77, 186, 214, 0.08)" stroke="rgba(77, 186, 214, 0.3)" strokeWidth="1" />
            <text x="100" y="212" textAnchor="middle" fill="#cee8ee" fontSize="11" fontFamily={font}>
              tax-credit
            </text>
            <text x="100" y="224" textAnchor="middle" fill="#cee8ee" fontSize="11" fontFamily={font}>
              investor
            </text>

            <rect x="250" y="180" width="80" height="50" rx="3" fill="rgba(77, 186, 214, 0.08)" stroke="rgba(77, 186, 214, 0.3)" strokeWidth="1" />
            <text x="290" y="212" textAnchor="middle" fill="#cee8ee" fontSize="11" fontFamily={font}>
              manager
            </text>

            {/* Arrows */}
            <line x1="100" y1="70" x2="100" y2="130" stroke="#4dbad6" strokeWidth="1" opacity="0.5" />
            <polygon points="100,140 95,130 105,130" fill="#4dbad6" opacity="0.5" />

            <line x1="200" y1="70" x2="200" y2="130" stroke="#4dbad6" strokeWidth="1" opacity="0.5" />
            <polygon points="200,140 195,130 205,130" fill="#4dbad6" opacity="0.5" />

            <line x1="300" y1="70" x2="300" y2="130" stroke="#4dbad6" strokeWidth="1" opacity="0.5" />
            <polygon points="300,140 295,130 305,130" fill="#4dbad6" opacity="0.5" />

            <line x1="160" y1="205" x2="150" y2="205" stroke="#4dbad6" strokeWidth="1" opacity="0.5" />
            <polygon points="140,205 150,200 150,210" fill="#4dbad6" opacity="0.5" />

            <line x1="240" y1="205" x2="250" y2="205" stroke="#4dbad6" strokeWidth="1" opacity="0.5" />
            <polygon points="260,205 250,200 250,210" fill="#4dbad6" opacity="0.5" />
          </svg>

          <LIHTCTimeline width={380} height={80} />
        </div>
      </div>

      <SlideFooter slideKey="lihtc" slideNum="06" sectionLabel="mechanism" />
    </div>
  );
}
