"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";
import { EditableBgImage } from "@/components/EditableBgImage";

const marketRent = 1450;
const tiers = [
  { ami: "30% ami", rent: 435,  savings: marketRent - 435,  label: "extremely low income" },
  { ami: "50% ami", rent: 725,  savings: marketRent - 725,  label: "very low income" },
  { ami: "60% ami", rent: 870,  savings: marketRent - 870,  label: "low income" },
  { ami: "80% ami", rent: 1160, savings: marketRent - 1160, label: "moderate income" },
];

const MECHANIC_STEPS = [
  { n: "01", text: "developer applies for lihtc allocation from the state housing finance agency." },
  { n: "02", text: "in exchange for lowering rents to 60% ami or lower, developments qualify for tax credits." },
  { n: "03", text: "restricting 100% of units to 60% ami lets 100% of residential construction costs be claimed as a 4% lihtc." },
  { n: "04", text: "credits are sold to institutional investors (typically banks) to raise equity — reducing required debt." },
  { n: "05", text: "lower debt means lower rents; the permanent capital stack reflects a first mortgage, investor equity, and deferred developer fee." },
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
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(5,10,12,0.90) 0%, rgba(5,10,12,0.62) 55%, rgba(5,10,12,0.30) 100%)" }} />
      </div>

      {/* Main layout */}
      <div style={{ position: "relative", display: "flex", height: "100%", padding: "36px 52px 40px", gap: 22 }}>

        {/* ── Left: glass card ── */}
        <EditableEl
          id="lihtc-rents:card-left"
          label="mechanic glass card"
          type="card"
          style={{
            flex: "0 0 40%",
            display: "flex",
            flexDirection: "column",
            padding: "24px 28px",
            background: "rgba(5,10,12,0.58)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.11)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <EditableText id="lihtc-rents:eyebrow" as="div"
            style={{ fontSize: "9px", color: theme.turquoise, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "8px" }}
          >
            how lihtc lowers rents
          </EditableText>

          <EditableText id="lihtc-rents:headline" as="div"
            style={{ fontSize: "20px", color: "#ffffff", fontWeight: 300, fontFamily: font, lineHeight: 1.25, letterSpacing: "-0.02em", textTransform: "lowercase", marginBottom: "10px" }}
          >
            tax credits replace equity — residents pay the difference.
          </EditableText>

          <EditableText id="lihtc-rents:desc" as="div"
            style={{ fontSize: "12px", color: muted(0.72), fontFamily: font, fontWeight: 300, lineHeight: 1.60, textTransform: "lowercase", marginBottom: "14px" }}
          >
            lihtc reduces the debt a development must carry. lower debt service means lower rents — federal tax credits fill the gap that would otherwise fall on residents.
          </EditableText>

          <div style={{ height: "1px", background: teal(0.18), marginBottom: "14px" }} />

          <EditableText id="lihtc-rents:mechanic-title" as="div"
            style={{ fontSize: "9px", color: theme.turquoise, letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "12px" }}
          >
            the mechanic
          </EditableText>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {MECHANIC_STEPS.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "5px", height: "5px", borderRadius: "50%", background: theme.turquoise, marginTop: "7px" }} />
                <div style={{ fontSize: "12px", color: muted(0.82), fontFamily: font, fontWeight: 300, lineHeight: 1.55, textTransform: "lowercase" }}>
                  <span style={{ color: theme.turquoise, fontWeight: 500 }}>{item.n}. </span>{item.text}
                </div>
              </div>
            ))}
          </div>
        </EditableEl>

        {/* ── Right: rent comparison ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px", minWidth: 0 }}>

          {/* Section header */}
          <div style={{ flexShrink: 0 }}>
            <EditableText id="lihtc-rents:chart-title" as="div"
              style={{ fontSize: "10px", color: theme.turquoise, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: font, fontWeight: 500, marginBottom: "7px" }}
            >
              monthly rent by ami tier vs. dayton market rate
            </EditableText>
            <div style={{ height: "1px", background: teal(0.20) }} />
          </div>

          {/* Market rate reference row */}
          <EditableEl id="lihtc-rents:market-row" label="market rate row" type="card"
            style={{ flexShrink: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "8px" }}
          >
            <EditableText id="lihtc-rents:market-lbl" as="div"
              style={{ fontSize: "12px", color: muted(0.55), fontFamily: font, textTransform: "lowercase", letterSpacing: "0.06em" }}
            >
              dayton market rate (2br avg)
            </EditableText>
            <EditableText id="lihtc-rents:market-val" as="div"
              style={{ fontSize: "22px", color: muted(0.55), fontFamily: font, fontWeight: 300, letterSpacing: "-0.02em" }}
            >
              ${marketRent.toLocaleString()} / mo
            </EditableText>
          </EditableEl>

          {/* AMI tier rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, minHeight: 0 }}>
            {tiers.map((tier, i) => {
              const barPct = (tier.rent / marketRent) * 100;
              const barOpacity = 0.38 + i * 0.13;
              return (
                <EditableEl
                  key={i}
                  id={`lihtc-rents:tier-row-${i}`}
                  label={`tier row — ${tier.ami}`}
                  type="card"
                  style={{
                    flex: 1,
                    padding: "0 16px",
                    background: "rgba(5,10,12,0.42)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <EditableText id={`lihtc-rents:tier-ami-${i}`} as="span"
                        style={{ fontSize: "10px", color: theme.turquoise, fontFamily: font, letterSpacing: "0.20em", textTransform: "uppercase", fontWeight: 500 }}
                      >
                        {tier.ami}
                      </EditableText>
                      <span style={{ fontSize: "10px", color: teal(0.60), fontFamily: font, textTransform: "lowercase" }}>
                        {tier.label}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <EditableText id={`lihtc-rents:tier-rent-${i}`} as="div"
                        style={{ fontSize: "22px", color: "#ffffff", fontFamily: font, fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1 }}
                      >
                        ${tier.rent.toLocaleString()}
                      </EditableText>
                      <EditableText id={`lihtc-rents:tier-savings-${i}`} as="div"
                        style={{ fontSize: "11px", color: teal(0.80), fontFamily: font, textTransform: "lowercase" }}
                      >
                        saves ${tier.savings.toLocaleString()} / mo
                      </EditableText>
                    </div>
                  </div>
                  <div style={{ height: "4px", background: teal(0.10), borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${barPct}%`, background: `rgba(77,186,214,${barOpacity})`, borderRadius: "2px" }} />
                  </div>
                </EditableEl>
              );
            })}
          </div>

          {/* Summary tiles */}
          <div style={{ flexShrink: 0, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {[
              { value: "up to 70%",   label: "below market at 30% ami" },
              { value: "$1,015 / mo", label: "avg monthly savings at 30% ami" },
              { value: "15+ yrs",     label: "affordability restriction period" },
            ].map((stat, i) => (
              <EditableEl key={i} id={`lihtc-rents:summary-tile-${i}`} label={`summary tile — ${stat.label}`} type="card"
                style={{ background: teal(0.07), border: `1px solid ${teal(0.16)}`, borderRadius: "8px", padding: "10px 12px" }}
              >
                <EditableText id={`lihtc-rents:summary-val-${i}`} as="div"
                  style={{ fontSize: "20px", color: "#ffffff", fontFamily: font, fontWeight: 300, lineHeight: 1, marginBottom: "4px", letterSpacing: "-0.01em" }}
                >
                  {stat.value}
                </EditableText>
                <EditableText id={`lihtc-rents:summary-lbl-${i}`} as="div"
                  style={{ fontSize: "10px", color: muted(0.60), fontFamily: font, lineHeight: 1.4, textTransform: "lowercase" }}
                >
                  {stat.label}
                </EditableText>
              </EditableEl>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
