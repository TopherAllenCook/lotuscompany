"use client";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/LotusMark";
import { theme, font, EASE_OUT } from "@/lib/theme";

const IMAGES = [
  { file: "Steelton I_Updated Lobby_2026.04.02.jpg",         label: "lobby"               },
  { file: "Steelton I_Unit Rendering_2026.03.10.jpg",        label: "unit interior"        },
  { file: "Steelton I_Clubhouse_2026.03.10.jpg",             label: "clubhouse"            },
  { file: "Steelton I_Pedestrian Promenade_2026.03.10.jpg",  label: "pedestrian promenade" },
  { file: "Steelton I_North Park_2026.03.10.jpg",            label: "north park"           },
  { file: "Steelton I_Water Detention_2026.03.26.jpg",       label: "courtyard"            },
];

export function RenderingsSlide() {
  return (
    <div style={{ position: "absolute", inset: 0, background: theme.darkBg, fontFamily: font, overflow: "hidden" }}>

      {/* Top bar */}
      <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ position: "absolute", top: 56, left: 72, zIndex: 10 }}>
        <LotusMark width={180} onDark />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
        style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", zIndex: 10, fontSize: 11, fontWeight: 400, letterSpacing: "0.44em", color: "rgba(206,232,238,0.22)", textTransform: "lowercase" }}>
        04 / steelton village
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
        style={{ position: "absolute", top: 54, right: 64, display: "flex", alignItems: "center", gap: 12, zIndex: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 400, letterSpacing: "0.36em", color: theme.turquoise, textTransform: "lowercase" }}>the renderings</span>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
          style={{ width: 36, height: 1.5, background: theme.turquoise, transformOrigin: "left" }} />
      </motion.div>

      {/* 3×2 grid */}
      <div style={{ position: "absolute", top: 110, bottom: 56, left: 64, right: 64, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 10 }}>
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: EASE_OUT }}
            style={{ position: "relative", overflow: "hidden", borderRadius: 2 }}
          >
            <img
              src={`/steelton-village/${img.file}`}
              alt={img.label}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px 12px", background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)", fontSize: 10, fontWeight: 400, letterSpacing: "0.3em", color: "rgba(206,232,238,0.75)", textTransform: "lowercase" }}>
              {img.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.6 }}
        style={{ position: "absolute", bottom: 16, right: 64, fontSize: 13, fontWeight: 300, color: "rgba(206,232,238,0.40)", letterSpacing: "0.28em", textTransform: "lowercase" }}>
        mindfully creating.
      </motion.div>
    </div>
  );
}
