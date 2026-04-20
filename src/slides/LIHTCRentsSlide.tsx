"use client";

import { font, theme } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";



const marketRent = 1450;
const tiers = [
  { ami: "30% ami", pct: 30, rent: 435,  savings: marketRent - 435,  label: "extremely low income" },
  { ami: "50% ami", pct: 50, rent: 725,  savings: marketRent - 725,  label: "very low income"      },
  { ami: "60% ami", pct: 60, rent: 870,  savings: marketRent - 870,  label: "low income"           },
  { ami: "80% ami", pct: 80, rent: 1160, savings: marketRent - 1160, label: "moderate income"      },
];

const MECHANIC_STEPS: { step: string; text: string; sub?: string }[] = [
  { step: "01", text: "developer applies for lihtc allocation from the state housing finance agency." },
  { step: "02", text: "in exchange for lowering rents to 60% of the area median income (ami) or lower, developments qualify for tax credits." },
  { step: "03", text: "by restricting 100% of units to 60% ami, 100% of residential construction costs can be claimed as a 4% lihtc.", sub: "4% lihtcs generate 4% of your residential costs as a tax credit annually for ten years, effectively providing equity for 40% of the costs of the development." },
  { step: "05", text: "then apply for 4% lihtc credits through the state housing finance agency and sell these 4% credits to institutional investors, typically banks." },
  { step: "06", text: "lower rents equal less debt, reducing monthly debt service." },
  { step: "07", text: "the permanent financing capital stack will then reflect a first mortgage, 4% lihtc investor equity, and deferred developer fee." },
];

export function LIHTCRentsSlide() {
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
            id="lihtc-rents:eyebrow"
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
            how lihtc lowers rents
          </EditableText>

          <EditableText
            id="lihtc-rents:headline"
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
            tax credits replace equity — residents pay the difference.
          </EditableText>
        </div>

        <div style={{ height: 1, background: "rgba(77,186,214,0.18)", marginBottom: 24 }} />

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: 32, flex: 1, minHeight: 0 }}>

          {/* Left — explanation */}
          <div style={{ flex: "0 0 38%", display: "flex", flexDirection: "column", gap: 20 }}>
            <EditableText
              id="lihtc-rents:desc"
              as="div"
              style={{
                fontSize: "24px",
                color: "rgba(206,232,238,0.75)",
                fontFamily: font,
                fontWeight: 300,
                lineHeight: 1.75,
                textTransform: "lowercase",
              }}
            >
              the low-income housing tax credit (lihtc) reduces the amount of debt a development must carry. lower debt service means lower rents — not because the building is cheaper, but because federal tax credits fill the gap that would otherwise fall on residents.
            </EditableText>

            <div style={{ height: 1, background: "rgba(77,186,214,0.10)" }} />

            <EditableText
              id="lihtc-rents:mechanic-title"
              as="div"
              style={{
                fontSize: 11,
                color: theme.turquoise,
                letterSpacing: "0.24em",
                textTransform: "lowercase",
                fontFamily: font,
                marginBottom: 8,
              }}
            >
              the mechanic
            </EditableText>

            {MECHANIC_STEPS.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <EditableText
                  id={`lihtc-rents:step-num-${i}`}
                  as="div"
                  style={{
                    flexShrink: 0,
                    fontSize: 10,
                    color: theme.turquoise,
                    fontFamily: font,
                    letterSpacing: "0.16em",
                    paddingTop: 2,
                  }}
                >
                  {item.step}
                </EditableText>
                <div>
                  <EditableText
                    id={`lihtc-rents:step-${i}`}
                    as="div"
                    style={{
                      fontSize: "13px",
                      color: "rgba(206,232,238,0.60)",
                      fontFamily: font,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      textTransform: "lowercase",
                    }}
                  >
                    {item.text}
                  </EditableText>
                  {item.sub && (
                    <div style={{ display: "flex", gap: 10, marginTop: 5, paddingLeft: 2 }}>
                      <div style={{ width: 2, background: "rgba(77,186,214,0.30)", borderRadius: 1, flexShrink: 0 }} />
                      <EditableText
                        id={`lihtc-rents:step-${i}-sub`}
                        as="div"
                        style={{
                          fontSize: "12px",
                          color: "rgba(206,232,238,0.40)",
                          fontFamily: font,
                          fontWeight: 300,
                          lineHeight: 1.6,
                          textTransform: "lowercase",
                          fontStyle: "italic",
                        }}
                      >
                        {item.sub}
                      </EditableText>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — rent comparison */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <EditableText
              id="lihtc-rents:chart-title"
              as="div"
              style={{
                fontSize: 11,
                color: theme.turquoise,
                letterSpacing: "0.24em",
                textTransform: "lowercase",
                fontFamily: font,
              }}
            >
              monthly rent by ami tier vs. dayton market rate
            </EditableText>

            {/* Market rate reference */}
            <EditableEl
              id="lihtc-rents:market-row"
              label="market rate row"
              type="card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 4,
              }}
            >
              <EditableText
                id="lihtc-rents:market-lbl"
                as="div"
                style={{ fontSize: 12, color: "rgba(206,232,238,0.50)", fontFamily: font, textTransform: "lowercase", letterSpacing: "0.08em" }}
              >
                dayton market rate (2br avg)
              </EditableText>
              <EditableText
                id="lihtc-rents:market-val"
                as="div"
                style={{ fontSize: "34px", color: "rgba(206,232,238,0.55)", fontFamily: font, fontWeight: 300 }}
              >
                ${marketRent.toLocaleString()} / mo
              </EditableText>
            </EditableEl>

            {/* AMI tier bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {tiers.map((tier, i) => {
                const barPct = (tier.rent / marketRent) * 100;
                return (
                  <EditableEl key={i} id={`lihtc-rents:tier-row-${i}`} label={`tier row — ${tier.ami}`} type="card">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <EditableText
                        id={`lihtc-rents:tier-lbl-${i}`}
                        as="div"
                        style={{ fontSize: 11, color: theme.turquoise, fontFamily: font, letterSpacing: "0.18em", textTransform: "lowercase" }}
                      >
                        {tier.ami} — {tier.label}
                      </EditableText>
                      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                        <EditableText
                          id={`lihtc-rents:tier-rent-${i}`}
                          as="div"
                          style={{ fontSize: "34px", color: "#fff", fontFamily: font, fontWeight: 300 }}
                        >
                          ${tier.rent.toLocaleString()}
                        </EditableText>
                        <EditableText
                          id={`lihtc-rents:tier-savings-${i}`}
                          as="div"
                          style={{ fontSize: 11, color: "rgba(77,186,214,0.65)", fontFamily: font, textTransform: "lowercase" }}
                        >
                          saves ${tier.savings.toLocaleString()} / mo
                        </EditableText>
                      </div>
                    </div>
                    <div style={{ height: 6, background: "rgba(77,186,214,0.10)", borderRadius: 3, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${barPct}%`,
                          background: `rgba(77,186,214,${0.3 + (i * 0.15)})`,
                          borderRadius: 3,
                        }}
                      />
                    </div>
                  </EditableEl>
                );
              })}
            </div>

            <div style={{ height: 1, background: "rgba(77,186,214,0.10)", marginTop: 4 }} />

            {/* Summary stat */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
              }}
            >
              {[
                { value: "up to 70%",    label: "below market rent at 30% ami" },
                { value: "$1,015 / mo",  label: "avg monthly savings at 30% ami" },
                { value: "15+ yrs",      label: "affordability restriction period" },
              ].map((stat, i) => (
                <EditableEl
                  key={i}
                  id={`lihtc-rents:summary-tile-${i}`}
                  label={`summary tile — ${stat.label}`}
                  type="card"
                  style={{
                    background: "rgba(77,186,214,0.06)",
                    border: "1px solid rgba(77,186,214,0.14)",
                    borderRadius: 4,
                    padding: "12px 14px",
                  }}
                >
                  <EditableText
                    id={`lihtc-rents:summary-val-${i}`}
                    as="div"
                    style={{
                      fontSize: "34px",
                      color: "#fff",
                      fontFamily: font,
                      fontWeight: 300,
                      lineHeight: 1,
                      marginBottom: 5,
                    }}
                  >
                    {stat.value}
                  </EditableText>
                  <EditableText
                    id={`lihtc-rents:summary-lbl-${i}`}
                    as="div"
                    style={{
                      fontSize: 10,
                      color: "rgba(206,232,238,0.40)",
                      fontFamily: font,
                      lineHeight: 1.4,
                      textTransform: "lowercase",
                    }}
                  >
                    {stat.label}
                  </EditableText>
                </EditableEl>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
