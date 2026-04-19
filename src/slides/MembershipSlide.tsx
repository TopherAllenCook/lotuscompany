"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { SlideFooter } from "@/components/SlideFooter";
import { StatusChip } from "@/components/StatusChip";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

export default function MembershipSlide() {
  const steps = [
    { label: "qualification", index: 0 },
    { label: "initial commitment", index: 1 },
    { label: "quarterly reporting", index: 2 },
    { label: "annual summit + directive reset", index: 3 },
    { label: "recommit / resize / redeem", index: 4 },
  ];

  const nodeRadius = 18;
  const nodeYPos = 60;
  const spacing = 320 / (steps.length + 1);

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
        <EditableBgImage
          id="membership:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,12,0.25) 0%, rgba(5,10,12,0.10) 50%, rgba(5,10,12,0.0) 100%)" }} />
      </div>

      <StatusChip status="READY" />

      <div style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "56px 64px 72px", gap: 32 }}>
        {/* Left Content */}
        <EditableEl id="membership:card" label="glass card" type="card" style={{
          flex: "0 0 46%",
          display: "flex",
          flexDirection: "column",
          padding: "44px 48px",
          background: "rgba(5,10,12,0.52)",
          backdropFilter: "blur(28px) saturate(200%)",
          WebkitBackdropFilter: "blur(28px) saturate(200%)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
        }}>
          <EditableText
            id="membership:eyebrow"
            as="div"
            style={{
              fontSize: "20px",
              color: theme.turquoise,
              letterSpacing: "0.28em",
              textTransform: "lowercase",
              fontFamily: font,
              fontWeight: 300,
              marginBottom: "10px",
            }}
          >
            membership model
          </EditableText>

          <EditableText
            id="membership:headline"
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
            impact partners collectively share in the gp alongside lotus.
          </EditableText>

          <div
            style={{
              height: "1px",
              background: "rgba(77, 186, 214, 0.18)",
              marginBottom: "24px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
            <EditableText
              id="membership:bullet-1"
              as="div"
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              allocation percentages are fixed at deal approval, capturing membership composition and capital commitments at that point.
            </EditableText>

            <EditableText
              id="membership:bullet-2"
              as="div"
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              future membership changes do not retroactively affect previously approved deal allocations.
            </EditableText>

            <EditableText
              id="membership:bullet-3"
              as="div"
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              each deal stands independently with its own snapshot, ensuring predictable member economics.
            </EditableText>

            <EditableText
              id="membership:bullet-4"
              as="div"
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                fontFamily: font,
                lineHeight: 1.7,
                textTransform: "lowercase",
              }}
            >
              this structure delivers institutional transparency, removes allocation disputes, and enables clear participation tracking.
            </EditableText>
          </div>

          <EditableText
            id="membership:closing"
            as="div"
            style={{
              fontSize: "20px",
              color: theme.turquoise,
              fontWeight: 300,
              fontFamily: font,
              letterSpacing: "0.08em",
              textTransform: "lowercase",
            }}
          >
            the right fit matters more than the largest check.
          </EditableText>
        </EditableEl>

        {/* Right — Stat callouts */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          {[
            { number: "15%+", label: "target irr", sub: "over 15 to 18 year hold period" },
            { number: "2 to 3x", label: "equity multiple", sub: "on invested capital" },
            { number: "5 to 19%", label: "gp membership participation", sub: "alongside lotus" },
          ].map((stat, i) => (
            <EditableEl
              key={i}
              id={`membership:stat-${i}`}
              label={`stat — ${stat.label}`}
              type="card"
              style={{
                width: "100%",
                background: "rgba(77,186,214,0.07)",
                border: "1px solid rgba(77,186,214,0.2)",
                borderRadius: "12px",
                padding: "20px 24px",
                textAlign: "center",
              }}
            >
              <EditableText
                id={`membership:stat-number-${i}`}
                as="div"
                style={{
                  fontSize: "38px",
                  color: "#fff",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  fontFamily: font,
                  marginBottom: "6px",
                  textTransform: "lowercase",
                }}
              >
                {stat.number}
              </EditableText>
              <EditableText
                id={`membership:stat-label-${i}`}
                as="div"
                style={{
                  fontSize: "20px",
                  color: theme.turquoise,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  fontFamily: font,
                  marginBottom: "4px",
                  textTransform: "lowercase",
                }}
              >
                {stat.label}
              </EditableText>
              <EditableText
                id={`membership:stat-sub-${i}`}
                as="div"
                style={{
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.60)",
                  fontWeight: 300,
                  letterSpacing: "0.06em",
                  fontFamily: font,
                  textTransform: "lowercase",
                }}
              >
                {stat.sub}
              </EditableText>
            </EditableEl>
          ))}
        </div>
      </div>

      <SlideFooter slideKey="membership" slideNum="09" sectionLabel="model" />
    </div>
  );
}
