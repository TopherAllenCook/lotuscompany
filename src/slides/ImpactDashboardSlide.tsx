"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const BULLETS = [
  "housing creation and preservation",
  "ami mix and affordability depth",
  "residents served and estimated rent savings",
  "resident-service utilization and outcomes",
  "design quality and operating stability metrics",
];

type RowKind = "data" | "goal" | "progress";

const T1_HEADERS = ["project", "units", "hh size", "ann. resident impact", "avg tenants 15 yrs", "total residents", "capital"];
const T1_ROWS: { kind: RowKind; cells: string[] }[] = [
  { kind: "data",     cells: ["steelton i (2026)",           "279",    "2.72",    "415",   "3",   "2,277",  "$3,250,000"]  },
  { kind: "data",     cells: ["lotus projects 2026",         "788",    "2.44",  "1,977",   "3",   "5,930", "$10,906,598"]  },
  { kind: "goal",     cells: ["impact annual goal",          "800",    "2.50",  "2,000",   "3",   "6,000", "$16,000,000"]  },
  { kind: "progress", cells: ["steelton i to annual goal",   "34.88%", "108.82%", "20.75%", "100.00%", "37.95%",  "20.31%"] },
  { kind: "progress", cells: ["lotus 2026 to annual goal",   "98.50%",  "97.41%", "98.83%", "100.00%", "98.83%",  "68.17%"] },
];

const T2_HEADERS = ["project", "units", "hh size", "annual", "avg #", "total", "capital"];
const T2_ROWS: { kind: RowKind; cells: string[] }[] = [
  { kind: "data",     cells: ["total impact",             "788",   "2.51", "1,977",  "3",  "5,930",  "$16,000,000"] },
  { kind: "goal",     cells: ["total impact goal",       "8,000",  "2.50", "2,000", "30", "60,000", "$16,000,000"] },
  { kind: "progress", cells: ["total impact goal progress", "9.85%", "100.33%", "98.83%", "10.00%", "9.88%", "100%"] },
];

const BOTTOM_STATS = [
  { id: "b0", value: "$3,000", label: "per resident impacted", sub: "first year commitment"                 },
  { id: "b1", value: "$300",   label: "per resident impacted", sub: "10-years of capital recommitment"      },
  { id: "b2", value: "50,000", label: "lives impacted",        sub: "with 10-years of capital recommitment" },
];

const cellBase: React.CSSProperties = {
  fontSize: "12px",
  fontFamily: font,
  padding: "7px 10px",
  textAlign: "left" as const,
  verticalAlign: "middle" as const,
  lineHeight: 1.3,
  borderBottom: "1px solid rgba(77,186,214,0.10)",
};

function ImpactTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: { kind: RowKind; cells: string[] }[];
}) {
  return (
    <div
      style={{
        background: "rgba(5,10,12,0.54)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderRadius: "10px",
        border: "1px solid rgba(77,186,214,0.15)",
        overflow: "hidden",
      }}
    >
      {/* Table title bar */}
      <div
        style={{
          background: "rgba(77,186,214,0.22)",
          padding: "7px 14px",
          borderBottom: "1px solid rgba(77,186,214,0.20)",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: theme.lightBlue,
            fontFamily: font,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "rgba(77,186,214,0.10)" }}>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  ...cellBase,
                  color: theme.turquoise,
                  fontWeight: 500,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  fontSize: "10px",
                  borderBottom: "1px solid rgba(77,186,214,0.18)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{
                background:
                  row.kind === "progress"
                    ? "rgba(77,186,214,0.07)"
                    : ri % 2 === 1
                    ? "rgba(255,255,255,0.02)"
                    : "transparent",
              }}
            >
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    ...cellBase,
                    color:
                      row.kind === "goal"
                        ? "rgba(206,232,238,0.75)"
                        : row.kind === "progress"
                        ? theme.turquoise
                        : ci === 0
                        ? "rgba(255,255,255,0.92)"
                        : theme.lightBlue,
                    fontStyle: row.kind === "goal" ? "italic" : "normal",
                    fontWeight: row.kind === "progress" ? 500 : 400,
                    borderBottom:
                      ri === rows.length - 1
                        ? "none"
                        : "1px solid rgba(77,186,214,0.10)",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ImpactDashboardSlide() {
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
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="impact-dashboard:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.14 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.60) 0%, rgba(5,10,12,0.35) 100%)" }} />
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "44px 64px 56px",
        }}
      >
        {/* Headline */}
        <div className="anim-fade-in-up" style={{ marginBottom: "14px", flexShrink: 0 }}>
          <EditableText
            id="impact-dashboard:eyebrow"
            as="div"
            style={{
              fontSize: "14px",
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 400,
              marginBottom: "8px",
            }}
          >
            impact dashboard
          </EditableText>
          <EditableText
            id="impact-dashboard:headline"
            as="h1"
            style={{
              fontSize: "30px",
              color: "#fff",
              fontWeight: 400,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              margin: 0,
            }}
          >
            impact is reported like an operating business, not a slogan.
          </EditableText>
        </div>

        <div style={{ height: "1px", background: "rgba(77,186,214,0.20)", marginBottom: "14px", flexShrink: 0 }} />

        {/* Middle: bullets left + tables right */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Left — bullet points */}
          <EditableEl
            id="impact-dashboard:bullets-card"
            label="bullet points card"
            type="card"
            style={{
              flex: "0 0 32%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0",
              background: "rgba(5,10,12,0.46)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              borderRadius: "12px",
              border: "1px solid rgba(77,186,214,0.14)",
              padding: "24px 22px",
            }}
          >
            {BULLETS.map((bullet, i) => (
              <EditableText
                key={i}
                id={`impact-dashboard:bullet-${i}`}
                as="div"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.90)",
                  fontFamily: font,
                  fontWeight: 400,
                  lineHeight: 1.45,
                  textTransform: "lowercase",
                  paddingTop: i === 0 ? "0" : "14px",
                  paddingBottom: i === BULLETS.length - 1 ? "0" : "14px",
                  borderBottom: i < BULLETS.length - 1 ? "1px solid rgba(77,186,214,0.10)" : "none",
                }}
              >
                <span style={{ color: theme.turquoise, fontWeight: 400, flexShrink: 0, marginTop: "1px" }}>›</span>
                {bullet}
              </EditableText>
            ))}
          </EditableEl>

          {/* Right — two tables stacked */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px", minWidth: 0, overflow: "hidden" }}>
            <ImpactTable
              title="Steelton I — Impact Project Metrics"
              headers={T1_HEADERS}
              rows={T1_ROWS}
            />
            <ImpactTable
              title="10-YR Impact Summary"
              headers={T2_HEADERS}
              rows={T2_ROWS}
            />
          </div>
        </div>

        {/* Bottom stat bar — unchanged */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginTop: "12px",
            flexShrink: 0,
          }}
        >
          {BOTTOM_STATS.map((stat) => (
            <EditableEl
              key={stat.id}
              id={`impact-dashboard:bottom-stat-${stat.id}`}
              label={`bottom stat — ${stat.label}`}
              type="card"
              style={{
                background: "rgba(77,186,214,0.09)",
                border: "1px solid rgba(77,186,214,0.22)",
                borderRadius: "10px",
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <EditableText
                id={`impact-dashboard:bottom-stat-${stat.id}-value`}
                as="div"
                style={{
                  fontSize: "28px",
                  color: "#fff",
                  fontFamily: font,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {stat.value}
              </EditableText>
              <EditableText
                id={`impact-dashboard:bottom-stat-${stat.id}-label`}
                as="div"
                style={{
                  fontSize: "12px",
                  color: theme.turquoise,
                  fontFamily: font,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </EditableText>
              <EditableText
                id={`impact-dashboard:bottom-stat-${stat.id}-sub`}
                as="div"
                style={{
                  fontSize: "13px",
                  color: "rgba(206,232,238,0.70)",
                  fontFamily: font,
                  lineHeight: 1.3,
                  textTransform: "lowercase",
                }}
              >
                {stat.sub}
              </EditableText>
            </EditableEl>
          ))}
        </div>
      </div>
    </div>
  );
}
