"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";

const partners = [
  { name: "newpoint real estate capital", category: "debt / equity"         },
  { name: "jpmorgan chase",              category: "cra equity investor"    },
  { name: "ohio capital corporation for housing (occh)", category: "syndicator / equity" },
  { name: "citi community capital",      category: "cra equity investor"    },
  { name: "pnc bank",                    category: "construction lender"    },
  { name: "keybank community development corporation", category: "cra equity investor" },
  { name: "fannie mae",                  category: "permanent debt"         },
  { name: "raymond james tax credit funds", category: "tax credit syndicator" },
];

export function PartnersSlide() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: theme.darkBg,
        fontFamily: font,
      }}
    >
      <StatusChip status="DRAFT" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "56px 64px 72px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <EditableText
            id="partners:eyebrow"
            as="div"
            style={{
              fontSize: 10,
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: 10,
            }}
          >
            capital partners
          </EditableText>

          <EditableText
            id="partners:headline"
            as="h1"
            style={{
              fontSize: "32px",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
            }}
          >
            institutional partners across debt, equity, and syndication.
          </EditableText>
        </div>

        <div style={{ height: 1, background: "rgba(77,186,214,0.18)", marginBottom: 28 }} />

        {/* Partner grid — 4×2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 12,
            flex: 1,
            minHeight: 0,
          }}
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(77,186,214,0.12)",
                borderRadius: 5,
                background: "rgba(77,186,214,0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "20px 18px",
                textAlign: "center",
              }}
            >
              {/* Logo placeholder */}
              <div
                style={{
                  width: "100%",
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  background: "rgba(77,186,214,0.06)",
                  border: "1px dashed rgba(77,186,214,0.15)",
                }}
              >
                <EditableText
                  id={`partners:logo-${i}`}
                  as="div"
                  style={{
                    fontSize: 8,
                    color: "rgba(77,186,214,0.30)",
                    fontFamily: font,
                    letterSpacing: "0.14em",
                    textTransform: "lowercase",
                  }}
                >
                  logo
                </EditableText>
              </div>

              <div>
                <EditableText
                  id={`partners:name-${i}`}
                  as="div"
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    fontFamily: font,
                    fontWeight: 300,
                    textTransform: "lowercase",
                    lineHeight: 1.4,
                    marginBottom: 5,
                  }}
                >
                  {partner.name}
                </EditableText>
                <EditableText
                  id={`partners:category-${i}`}
                  as="div"
                  style={{
                    fontSize: 8,
                    color: theme.turquoise,
                    fontFamily: font,
                    letterSpacing: "0.16em",
                    textTransform: "lowercase",
                  }}
                >
                  {partner.category}
                </EditableText>
              </div>
            </div>
          ))}
        </div>

        <EditableText
          id="partners:note"
          as="div"
          style={{
            marginTop: 16,
            fontSize: 9,
            color: "rgba(206,232,238,0.25)",
            fontFamily: font,
            textTransform: "lowercase",
            letterSpacing: "0.04em",
            lineHeight: 1.5,
          }}
        >
          partner relationships vary by project. logos to be added prior to final presentation.
        </EditableText>
      </div>

      <SlideFooter
        slideKey="partners"
        slideNum="18"
        sectionLabel="the platform"
      />
    </div>
  );
}
