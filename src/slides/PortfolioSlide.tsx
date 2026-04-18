"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";
import { asset } from "@/lib/storage";
import { EditableText } from "@/components/EditableText";
import { EditableEl } from "@/components/EditableEl";

const IMAGES = [
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-1.jpg"),                            label: "lotus nova",      col: "1", row: "1 / 3" },
  { src: asset("/republic/highlights/_DSC1121.jpg"),                                        label: "lotus republic",  col: "2", row: "1" },
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-14.jpg"),                            label: "lotus nova",      col: "3", row: "1" },
  { src: asset("/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg"),         label: "steelton village",col: "2", row: "2" },
  { src: asset("/republic/aerials/Arial.jpg"),                                              label: "lotus republic",  col: "3", row: "2 / 4" },
  { src: asset("/nova/Commercial 2025-07-07 Lotus-Nova-30.jpg"),                            label: "lotus nova",      col: "2", row: "3" },
];

export function PortfolioSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: theme.darkBg, fontFamily: font, overflow: "hidden" }}>

      {/* Top bar */}
      <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ position: "absolute", top: 56, left: 72, zIndex: 10 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
        style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <EditableText id="portfolio:slide-num" as="span" style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
          05 / lotus portfolio
        </EditableText>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
        style={{ position: "absolute", top: 62, right: 72, display: "flex", alignItems: "center", gap: 12, zIndex: 10 }}>
        <EditableText id="portfolio:header" label="header — the lotus portfolio" as="span" style={{ fontSize: 12, fontWeight: 400, letterSpacing: "0.36em", color: theme.turquoise, textTransform: "lowercase" }}>
          the lotus portfolio
        </EditableText>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.35, duration: 0.5 }}
          style={{ transformOrigin: "left" }}>
          <EditableEl id="portfolio:header-rule" label="header rule" type="bar" style={{ width: 36, height: 1.5, background: theme.turquoise }} />
        </motion.div>
      </motion.div>

      {/* Asymmetric masonry grid */}
      <div style={{
        position: "absolute", top: 108, bottom: 56, left: 64, right: 64,
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gap: 8,
      }}>
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12 + i * 0.1, duration: 0.75, ease: EASE_OUT }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              gridColumn: img.col,
              gridRow: img.row,
            }}
          >
            <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "24px 14px 12px",
              background: "linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 100%)",
            }}>
              <EditableText id={`portfolio:img-label-${i}`} label={`image — ${img.label} ${i}`} as="span" style={{
                fontSize: 10, fontWeight: 400, letterSpacing: "0.3em",
                color: "rgba(206,232,238,0.78)", textTransform: "lowercase",
              }}>
                {img.label}
              </EditableText>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
        style={{ position: "absolute", bottom: 16, right: 64 }}>
        <EditableText id="portfolio:tagline" label="tagline" as="span" style={{ fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
          mindfully creating.
        </EditableText>
      </motion.div>
    </div>
  );
}
