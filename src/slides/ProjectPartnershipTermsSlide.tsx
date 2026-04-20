"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import type { ProjectConfig } from "./projectData";

const BG = "#F7F5F0";
const INK = "#050a0c";
const muted = (a: number) => `rgba(5,10,12,${a})`;
const teal = (a: number) => `rgba(77,186,214,${a})`;

export function ProjectPartnershipTermsSlide({ project }: { project: ProjectConfig }) {
  const k = project.key;
  const slideNum = String(project.slideNumStart + 5).padStart(2, "0");

  const projectInfo = [
    { label: "project name",      value: project.name          },
    { label: "location",          value: project.location      },
    { label: "development phase", value: project.phase         },
    { label: "total units",       value: String(project.units) },
    { label: "program type",      value: "lihtc 4% / 9%"       },
    { label: "construction type", value: "—"                   },
    { label: "projected close",   value: "—"                   },
    { label: "development partner",value: "—"                  },
  ];

  const terms = [
    { label: "capital commitment",      value: project.capital      },
    { label: "spe ownership stake",     value: project.speOwnership },
    { label: "target irr",             value: project.irr          },
    { label: "equity multiple",         value: project.multiple     },
    { label: "cash fee",                value: project.cashFee      },
    { label: "total projected returns", value: project.totalReturns },
    { label: "pref return",             value: "—"                  },
    { label: "waterfall structure",     value: "—"                  },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: BG,
        fontFamily: font,
      }}
    >
      <StatusChip status="DRAFT" />

      <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "56px 64px 72px" }}>
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <EditableText
            id={`${k}-partnership:eyebrow`}
            as="div"
            style={{ fontSize: 11, color: theme.turquoise, letterSpacing: "0.28em", textTransform: "lowercase", fontFamily: font, fontWeight: 400, marginBottom: 10 }}
          >
            partnership terms · {project.name}
          </EditableText>

          <EditableText
            id={`${k}-partnership:headline`}
            as="h1"
            style={{ fontSize: "32px", color: INK, fontWeight: 300, fontFamily: font, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "lowercase" }}
          >
            terms are set at approval and held through the full hold period.
          </EditableText>
        </div>

        <div style={{ height: 1, background: muted(0.10), marginBottom: 20 }} />

        {/* Two-column tables */}
        <div style={{ display: "flex", gap: 20, flex: 1, minHeight: 0 }}>

          {/* Left — project info */}
          <div style={{ flex: 1 }}>
            <EditableText
              id={`${k}-partnership:info-title`}
              as="div"
              style={{ fontSize: 10, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 10 }}
            >
              project information
            </EditableText>

            <div style={{ border: `1px solid ${muted(0.10)}`, borderRadius: 4, overflow: "hidden" }}>
              {projectInfo.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 1fr",
                    background: i % 2 === 0 ? "transparent" : muted(0.025),
                    borderBottom: i < projectInfo.length - 1 ? `1px solid ${muted(0.06)}` : undefined,
                  }}
                >
                  <EditableText
                    id={`${k}-partnership:info-lbl-${i}`}
                    as="div"
                    style={{ padding: "9px 14px", fontSize: "18px", color: muted(0.42), fontFamily: font, textTransform: "lowercase", letterSpacing: "0.04em" }}
                  >
                    {row.label}
                  </EditableText>
                  <EditableText
                    id={`${k}-partnership:info-val-${i}`}
                    as="div"
                    style={{ padding: "9px 14px", fontSize: "18px", color: muted(0.75), fontFamily: font, textTransform: "lowercase" }}
                  >
                    {row.value}
                  </EditableText>
                </div>
              ))}
            </div>
          </div>

          {/* Right — partnership terms */}
          <div style={{ flex: 1 }}>
            <EditableText
              id={`${k}-partnership:terms-title`}
              as="div"
              style={{ fontSize: 10, color: theme.turquoise, letterSpacing: "0.24em", textTransform: "lowercase", fontFamily: font, marginBottom: 10 }}
            >
              partnership terms
            </EditableText>

            <div style={{ border: `1px solid ${muted(0.10)}`, borderRadius: 4, overflow: "hidden" }}>
              {terms.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 1fr",
                    background: i % 2 === 0 ? "transparent" : muted(0.025),
                    borderBottom: i < terms.length - 1 ? `1px solid ${muted(0.06)}` : undefined,
                  }}
                >
                  <EditableText
                    id={`${k}-partnership:terms-lbl-${i}`}
                    as="div"
                    style={{ padding: "9px 14px", fontSize: "18px", color: muted(0.42), fontFamily: font, textTransform: "lowercase", letterSpacing: "0.04em" }}
                  >
                    {row.label}
                  </EditableText>
                  <EditableText
                    id={`${k}-partnership:terms-val-${i}`}
                    as="div"
                    style={{ padding: "9px 14px", fontSize: "18px", color: INK, fontFamily: font, fontWeight: 400, textTransform: "lowercase" }}
                  >
                    {row.value}
                  </EditableText>
                </div>
              ))}
            </div>

            <EditableText
              id={`${k}-partnership:note`}
              as="div"
              style={{ marginTop: 14, fontSize: 10, color: muted(0.30), fontFamily: font, textTransform: "lowercase", lineHeight: 1.6 }}
            >
              all figures are projections based on current underwriting. final terms subject to lp approval and closing documents.
            </EditableText>
          </div>
        </div>
      </div>

      <SlideFooter slideKey={`${k}-partnership`} slideNum={slideNum} sectionLabel={project.sectionLabel} light />
    </div>
  );
}
