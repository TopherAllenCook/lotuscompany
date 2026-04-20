"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";



const partners = [
  { name: "newpoint real estate capital",                  category: "debt / equity",          logo: "/Logos/New Point Real Estat Capitol Logo.jpg" },
  { name: "jpmorgan chase",                               category: "cra equity investor",     logo: "/Logos/Jp-Morgan Chase Logo.svg"              },
  { name: "ohio capital corporation for housing (occh)",  category: "syndicator / equity",     logo: "/Logos/OCCH_Logo.png"                         },
  { name: "citi community capital",                       category: "cra equity investor",     logo: "/Logos/Citi Logo.jpg"                         },
  { name: "pnc bank",                                     category: "construction lender",     logo: "/Logos/PNC Bank Logo.svg"                     },
  { name: "keybank community development corporation",    category: "cra equity investor",     logo: "/Logos/Key Bank Logo.png"                     },
  { name: "fannie mae",                                   category: "permanent debt",          logo: "/Logos/fannie May Logo.png"                   },
  { name: "raymond james tax credit funds",               category: "tax credit syndicator",   logo: "/Logos/Raymond_James_Financial-Logo.wine.svg"  },
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
              fontSize: 12,
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
              fontSize: "40px",
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
                borderRadius: 8,
                background: "rgba(77,186,214,0.04)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Logo area — white background so logos render correctly */}
              <div
                style={{
                  background: "#fff",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 20px",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "64px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              {/* Name + category */}
              <div style={{ padding: "10px 14px 12px", textAlign: "center" }}>
                <EditableText
                  id={`partners:name-${i}`}
                  as="div"
                  style={{
                    fontSize: "14px",
                    color: "#fff",
                    fontFamily: font,
                    fontWeight: 300,
                    textTransform: "lowercase",
                    lineHeight: 1.4,
                    marginBottom: 4,
                  }}
                >
                  {partner.name}
                </EditableText>
                <EditableText
                  id={`partners:category-${i}`}
                  as="div"
                  style={{
                    fontSize: 10,
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
            fontSize: 11,
            color: "rgba(206,232,238,0.25)",
            fontFamily: font,
            textTransform: "lowercase",
            letterSpacing: "0.04em",
            lineHeight: 1.5,
          }}
        >
          partner relationships vary by project.
        </EditableText>
      </div>


    </div>
  );
}
