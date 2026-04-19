"use client";

import { motion } from "framer-motion";
import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";
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
        <EditableBgImage
          id="lotus-structure:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_4-corners_2026.03.26.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      {/* Header section */}
      <div
        style={{
          position: "relative",
          paddingLeft: "64px",
          paddingRight: "64px",
          paddingTop: "56px",
          paddingBottom: "32px",
        }}
      >
        {/* Eyebrow */}
        <EditableText
          id="structure:eyebrow"
          as="div"
          style={{
            fontSize: "20px",
            color: theme.turquoise,
            fontWeight: 300,
            letterSpacing: "0.28em",
            fontFamily: font,
            marginBottom: "10px",
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
            fontSize: "38px",
            color: "#fff",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            fontFamily: font,
            lineHeight: 1.25,
            marginBottom: "12px",
            textTransform: "lowercase",
            textShadow: "0 1px 12px rgba(5,10,12,0.8)",
          }}
        >
          most models trade capital, control, or impact. we won't.
        </EditableText>

        {/* Caption */}
        <EditableText
          id="structure:caption"
          as="p"
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.88)",
            fontWeight: 400,
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
          position: "relative",
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
        <EditableEl id="structure:card" label="glass card" type="card"
          style={{
            background: "rgba(5,10,12,0.52)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
            overflow: "hidden",
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
                    fontSize: "20px",
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
                    fontSize: "20px",
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
                    fontSize: "20px",
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
                    fontSize: "20px",
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
                      fontSize: "20px",
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
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.80)",
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
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.80)",
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
                      fontSize: "20px",
                      fontWeight: 400,
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
        </EditableEl>
      </div>

      <SlideFooter
        slideKey="structure"
        slideNum="04"
        sectionLabel="positioning"
      />
    </div>
  );
}
