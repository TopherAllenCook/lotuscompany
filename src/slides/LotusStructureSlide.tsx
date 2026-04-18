"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

export function LotusStructureSlide() {
  const tableData = [
    {
      dimension: "capital lifecycle",
      philanthropy: "spent once",
      blindPool: "locked, single cycle",
      curated: "recycled across cohorts",
    },
    {
      dimension: "partner visibility",
      philanthropy: "low",
      blindPool: "low to moderate",
      curated: "high",
    },
    {
      dimension: "impact accountability",
      philanthropy: "high intent, variable measurement",
      blindPool: "secondary to return",
      curated: "core to reporting",
    },
    {
      dimension: "speed to deploy",
      philanthropy: "slow",
      blindPool: "manager pace",
      curated: "deal-level consent within rules",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <img
          src="/steelton-village/Steelton I_4-corners_2026.03.26.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.15 }}
        />
      </div>

      <StatusChip status="READY" />

      {/* Header section */}
      <div
        style={{
          paddingLeft: "64px",
          paddingRight: "64px",
          paddingTop: "80px",
          paddingBottom: "32px",
        }}
      >
        {/* Eyebrow */}
        <EditableText
          id="structure:eyebrow"
          as="div"
          style={{
            fontSize: "10px",
            color: theme.turquoise,
            fontWeight: 300,
            letterSpacing: "0.2em",
            fontFamily: font,
            marginBottom: "16px",
            textTransform: "lowercase",
          }}
        >
          why this structure exists
        </EditableText>

        {/* Headline */}
        <EditableText
          id="structure:headline"
          as="h2"
          style={{
            fontSize: "clamp(26px, 2.8vw, 40px)",
            color: "#fff",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            fontFamily: font,
            lineHeight: 1.25,
            marginBottom: "12px",
            textTransform: "lowercase",
          }}
        >
          most models trade capital, control, or impact. we won't.
        </EditableText>

        {/* Caption */}
        <EditableText
          id="structure:caption"
          as="p"
          style={{
            fontSize: "13px",
            color: theme.lightBlue,
            fontWeight: 300,
            letterSpacing: "0.04em",
            fontFamily: font,
            fontStyle: "italic",
            margin: 0,
            textTransform: "lowercase",
          }}
        >
          purpose with process.
        </EditableText>
      </div>

      {/* Table */}
      <div
        style={{
          flex: 1,
          paddingLeft: "64px",
          paddingRight: "64px",
          paddingBottom: "72px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: font,
            }}
          >
            <thead>
              <tr style={{ background: "rgba(77,186,214,0.12)" }}>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: theme.turquoise,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  <EditableText
                    id="structure:header-dimension"
                    as="span"
                    style={{}}
                  >
                    dimensions
                  </EditableText>
                </th>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: theme.turquoise,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  <EditableText
                    id="structure:header-philanthropy"
                    as="span"
                    style={{}}
                  >
                    philanthropy
                  </EditableText>
                </th>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: theme.turquoise,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  <EditableText
                    id="structure:header-blindpool"
                    as="span"
                    style={{}}
                  >
                    blind-pool fund
                  </EditableText>
                </th>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: theme.turquoise,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  <EditableText
                    id="structure:header-curated"
                    as="span"
                    style={{}}
                  >
                    the lotus collective
                  </EditableText>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  style={{
                    background:
                      rowIdx % 2 === 1 ? "rgba(255,255,255,0.025)" : "transparent",
                    borderTop:
                      rowIdx > 0
                        ? "1px solid rgba(77,186,214,0.12)"
                        : "none",
                  }}
                >
                  <td
                    style={{
                      padding: "10px 16px",
                      fontSize: "11px",
                      fontWeight: 300,
                      color: "rgba(77,186,214,0.8)",
                      letterSpacing: "0.12em",
                      textTransform: "lowercase",
                    }}
                  >
                    <EditableText
                      id={`structure:dim-${rowIdx}`}
                      as="span"
                      style={{}}
                    >
                      {row.dimension}
                    </EditableText>
                  </td>
                  <td
                    style={{
                      padding: "10px 16px",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.55)",
                      textTransform: "lowercase",
                    }}
                  >
                    <EditableText
                      id={`structure:phil-${rowIdx}`}
                      as="span"
                      style={{}}
                    >
                      {row.philanthropy}
                    </EditableText>
                  </td>
                  <td
                    style={{
                      padding: "10px 16px",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.55)",
                      textTransform: "lowercase",
                    }}
                  >
                    <EditableText
                      id={`structure:blind-${rowIdx}`}
                      as="span"
                      style={{}}
                    >
                      {row.blindPool}
                    </EditableText>
                  </td>
                  <td
                    style={{
                      padding: "10px 16px",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "#fff",
                      textTransform: "lowercase",
                    }}
                  >
                    <EditableText
                      id={`structure:curated-${rowIdx}`}
                      as="span"
                      style={{}}
                    >
                      {row.curated}
                    </EditableText>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      <SlideFooter
        slideKey="structure"
        slideNum="04"
        sectionLabel="positioning"
      />
    </div>
  );
}
