"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const MARKET_RENT = 1450;

const TIERS = [
  { ami: "30% ami", rent: 435,  label: "extremely low income" },
  { ami: "50% ami", rent: 725,  label: "very low income"      },
  { ami: "60% ami", rent: 870,  label: "low income"           },
  { ami: "80% ami", rent: 1160, label: "moderate income"      },
];

const MECHANIC = [
  "developer restricts rents to ami limits in exchange for tax credits allocated by the state housing finance agency.",
  "credits are sold to institutional investors, raising equity that replaces construction debt in the capital stack.",
  "lower debt service enables lower rents, locked in over a 15+ year affordability compliance period.",
];

const muted = (a: number) => `rgba(255,255,255,${a})`;
const teal  = (a: number) => `rgba(77,186,214,${a})`;

export function LIHTCRentsSlide() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: theme.darkBg, fontFamily: font }}>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <EditableBgImage
          id="lihtc-rents:bg-photo"
          label="background photo"
          src="/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg"
          style={{ width: "100%", height: "100%", opacity: 0.32 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(5,10,12,0.90) 0%, rgba(5,10,12,0.62) 55%, rgba(5,10,12,0.28) 100%)" }} />
      </div>

      {/* Main layout */}
      <div style={{ position: "relative", display: "flex", alignItems: "stretch", height: "100%", padding: "36px 52px 42px", gap: 24 }}>

        {/* ── Left: mechanic card ── */}
        <EditableEl
          id="lihtc-rents:card-left"
          label="mechanic glass card"
          type="card"
          style={{
            flex: "0 0 36%",
            display: "flex",
            flexDirection: "column",
            padding: "26px 30px",
            background: "rgba(5,10,12,0.58)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.13)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.09)",
          }}
        >
          <EditableText
            id="lihtc-rents:eyebrow" as="div"
            style={{ fontSize: "11px", color: theme.turquoise, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "12px" }}
          >
            how lihtc lowers rents
          </EditableText>

          <EditableText
            id="lihtc-rents:headline" as="h1"
            style={{ fontSize: "26px", color: "#ffffff", fontWeight: 300, fontFamily: font, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "lowercase", margin: "0 0 10px" }}
          >
            tax credits replace equity — residents pay the difference.
          </EditableText>

          <EditableText
            id="lihtc-rents:subtitle" as="div"
            style={{ fontSize: "13px", color: teal(0.85), fontFamily: font, fontStyle: "italic", fontWeight: 300, textTransform: "lowercase", lineHeight: 1.55, marginBottom: "18px" }}
          >
            lower debt service means lower rents. federal credits fill the gap that would otherwise fall on residents.
          </EditableText>

          <div style={{ height: "1px", background: teal(0.20), marginBottom: "18px" }} />

          <EditableText
            id="lihtc-rents:mechanic-label" as="div"
            style={{ fontSize: "11px", color: theme.turquoise, letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}
          >
            the mechanic
          </EditableText>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
            {MECHANIC.map((text, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "5px", height: "5px", borderRadius: "50%", background: theme.turquoise, marginTop: "7px" }} />
                <EditableText
                  id={`lihtc-rents:mechanic-${i}`} as="p"
                  style={{ fontSize: "14px", color: muted(0.80), fontFamily: font, fontWeight: 300, lineHeight: 1.60, textTransform: "lowercase", margin: 0 }}
                >
                  {text}
                </EditableText>
              </div>
            ))}
          </div>
        </EditableEl>

        {/* ── Right: rent comparison ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px", minWidth: 0 }}>

          {/* Section header */}
          <div style={{ flexShrink: 0 }}>
            <EditableText
              id="lihtc-rents:chart-title" as="div"
              style={{ fontSize: "11px", color: theme.turquoise, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "10px" }}
            >
              monthly rent by ami tier
            </EditableText>
            <div style={{ height: "1px", background: teal(0.20) }} />
          </div>

          {/* AMI tier rows — each flex: 1 to share vertical space equally */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px", minHeight: 0 }}>
            {TIERS.map((tier, i) => {
              const barPct  = (tier.rent / MARKET_RENT) * 100;
              const savings = MARKET_RENT - tier.rent;
              const barAlpha = 0.38 + i * 0.12;
              return (
                <EditableEl
                  key={i}
                  id={`lihtc-rents:tier-${i}`}
                  label={`tier — ${tier.ami}`}
                  type="card"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "0 24px",
                    background: "rgba(5,10,12,0.48)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderLeft: `3px solid ${teal(barAlpha + 0.25)}`,
                    borderRadius: "10px",
                    minHeight: 0,
                  }}
                >
                  {/* Label */}
                  <div style={{ flexShrink: 0, width: "130px" }}>
                    <EditableText
                      id={`lihtc-rents:tier-ami-${i}`} as="div"
                      style={{ fontSize: "13px", color: theme.turquoise, fontFamily: font, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3px" }}
                    >
                      {tier.ami}
                    </EditableText>
                    <div style={{ fontSize: "11px", color: teal(0.55), fontFamily: font, textTransform: "lowercase" }}>
                      {tier.label}
                    </div>
                  </div>

                  {/* Bar */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ height: "6px", background: teal(0.10), borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${barPct}%`, background: teal(barAlpha), borderRadius: "3px" }} />
                    </div>
                  </div>

                  {/* Rent + savings */}
                  <div style={{ flexShrink: 0, textAlign: "right", width: "170px" }}>
                    <EditableText
                      id={`lihtc-rents:tier-rent-${i}`} as="div"
                      style={{ fontSize: "30px", color: "#ffffff", fontFamily: font, fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1 }}
                    >
                      ${tier.rent.toLocaleString()}
                    </EditableText>
                    <EditableText
                      id={`lihtc-rents:tier-savings-${i}`} as="div"
                      style={{ fontSize: "12px", color: teal(0.80), fontFamily: font, textTransform: "lowercase", marginTop: "4px" }}
                    >
                      saves ${savings.toLocaleString()} / mo
                    </EditableText>
                  </div>
                </EditableEl>
              );
            })}
          </div>

          {/* Market rate reference */}
          <EditableEl
            id="lihtc-rents:market-row"
            label="market rate reference"
            type="card"
            style={{
              flexShrink: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 24px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "10px",
            }}
          >
            <EditableText
              id="lihtc-rents:market-lbl" as="div"
              style={{ fontSize: "12px", color: muted(0.40), fontFamily: font, textTransform: "lowercase", letterSpacing: "0.10em" }}
            >
              columbus market rate avg · 2 bedroom
            </EditableText>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <EditableText
                id="lihtc-rents:market-val" as="div"
                style={{ fontSize: "26px", color: muted(0.40), fontFamily: font, fontWeight: 300, letterSpacing: "-0.02em" }}
              >
                ${MARKET_RENT.toLocaleString()}
              </EditableText>
              <span style={{ fontSize: "12px", color: muted(0.30), fontFamily: font, textTransform: "lowercase" }}> / mo</span>
            </div>
          </EditableEl>

        </div>
      </div>
    </div>
  );
}
