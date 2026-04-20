"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";


import { CapitalRecyclingLoop } from "@/components/diagrams/CapitalRecyclingLoop";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

export function ClosingSlide() {
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
      {/* Background photo — muted building strip right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <EditableBgImage
          id="closing:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_4-corners_2026.03.26.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.50,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>



      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
        {/* Left Content */}
        <EditableEl id="closing:card" label="left card" type="card" className="anim-fade-in-up" style={{ flex: "0 0 46%", display: "flex", flexDirection: "column" }}>
          <EditableText
            id="closing:eyebrow"
            as="div"
            style={{
              fontSize: "17px",
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "10px",
            }}
          >
            closing
          </EditableText>

          <EditableText
            id="closing:headline"
            as="h1"
            style={{
              fontSize: "38px",
              color: "#fff",
              fontWeight: 300,
              fontFamily: font,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "20px",
            }}
          >
            build homes. recycle capital. stay accountable.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "18px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <EditableEl
              id="closing:pill-1"
              label="pill — impact-first mandate"
              type="card"
              style={{
                background: "rgba(77,186,214,0.08)",
                border: "1px solid rgba(77,186,214,0.2)",
                borderRadius: 3,
                padding: "8px 16px",
              }}
            >
              <EditableText
                id="closing:pill-1-text"
                as="span"
                style={{
                  fontSize: "17px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  textTransform: "lowercase",
                }}
              >
                impact-first mandate.
              </EditableText>
            </EditableEl>

            <EditableEl
              id="closing:pill-2"
              label="pill — lotus-proven execution"
              type="card"
              style={{
                background: "rgba(77,186,214,0.08)",
                border: "1px solid rgba(77,186,214,0.2)",
                borderRadius: 3,
                padding: "8px 16px",
              }}
            >
              <EditableText
                id="closing:pill-2-text"
                as="span"
                style={{
                  fontSize: "17px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  textTransform: "lowercase",
                }}
              >
                lotus-proven execution.
              </EditableText>
            </EditableEl>

            <EditableEl
              id="closing:pill-3"
              label="pill — disciplined recycling engine"
              type="card"
              style={{
                background: "rgba(77,186,214,0.08)",
                border: "1px solid rgba(77,186,214,0.2)",
                borderRadius: 3,
                padding: "8px 16px",
              }}
            >
              <EditableText
                id="closing:pill-3-text"
                as="span"
                style={{
                  fontSize: "17px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  textTransform: "lowercase",
                }}
              >
                disciplined recycling engine.
              </EditableText>
            </EditableEl>

            <EditableEl
              id="closing:pill-4"
              label="pill — active partner participation"
              type="card"
              style={{
                background: "rgba(77,186,214,0.08)",
                border: "1px solid rgba(77,186,214,0.2)",
                borderRadius: 3,
                padding: "8px 16px",
              }}
            >
              <EditableText
                id="closing:pill-4-text"
                as="span"
                style={{
                  fontSize: "17px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  textTransform: "lowercase",
                }}
              >
                active partner participation.
              </EditableText>
            </EditableEl>

            <EditableEl
              id="closing:pill-5"
              label="pill — durable reporting and governance"
              type="card"
              style={{
                background: "rgba(77,186,214,0.08)",
                border: "1px solid rgba(77,186,214,0.2)",
                borderRadius: 3,
                padding: "8px 16px",
              }}
            >
              <EditableText
                id="closing:pill-5-text"
                as="span"
                style={{
                  fontSize: "17px",
                  color: theme.lightBlue,
                  fontFamily: font,
                  fontWeight: 300,
                  textTransform: "lowercase",
                }}
              >
                durable reporting and governance.
              </EditableText>
            </EditableEl>
          </div>
        </EditableEl>

        {/* Right Diagram with Glow */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Subtle animated glow background */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(77,186,214,0.06) 0%, transparent 70%)",
              zIndex: 1,
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <CapitalRecyclingLoop width={440} height={260} />
          </div>
        </div>
      </div>


    </div>
  );
}
