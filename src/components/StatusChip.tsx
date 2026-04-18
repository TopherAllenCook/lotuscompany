"use client";
import { font } from "@/lib/theme";

const COLORS = {
  READY:       { bg: "rgba(77,186,214,0.13)",  color: "#4dbad6",  border: "rgba(77,186,214,0.35)" },
  DRAFT:       { bg: "rgba(255,190,80,0.12)",  color: "#ffc060",  border: "rgba(255,190,80,0.30)" },
  PLACEHOLDER: { bg: "rgba(181,98,58,0.14)",   color: "#c4693e",  border: "rgba(181,98,58,0.35)" },
} as const;

export type StatusLevel = keyof typeof COLORS;

export function StatusChip({ status }: { status: StatusLevel }) {
  const c = COLORS[status];
  return (
    <div
      style={{
        position: "absolute",
        top: 22,
        right: 22,
        zIndex: 10,
        padding: "4px 11px",
        borderRadius: 3,
        background: c.bg,
        border: `1px solid ${c.border}`,
        fontSize: 8,
        letterSpacing: "0.2em",
        fontFamily: font,
        color: c.color,
        textTransform: "uppercase",
        pointerEvents: "none",
      }}
    >
      {status}
    </div>
  );
}

export function PlaceholderTag({ children }: { children?: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 7px",
        borderRadius: 2,
        background: "rgba(181,98,58,0.13)",
        border: "1px solid rgba(181,98,58,0.35)",
        fontSize: 8,
        letterSpacing: "0.14em",
        fontFamily: font,
        color: "#c4693e",
        textTransform: "uppercase",
        verticalAlign: "middle",
        marginLeft: 6,
      }}
    >
      {children ?? "placeholder"}
    </span>
  );
}

export function DataTag({ type }: { type: "FACT" | "MODELED" | "PLACEHOLDER" }) {
  const label = type === "FACT" ? "fact" : type === "MODELED" ? "modeled" : "placeholder";
  const color =
    type === "FACT" ? { bg: "rgba(77,186,214,0.1)", color: "#4dbad6", border: "rgba(77,186,214,0.3)" } :
    type === "MODELED" ? { bg: "rgba(255,190,80,0.1)", color: "#ffc060", border: "rgba(255,190,80,0.28)" } :
    { bg: "rgba(181,98,58,0.12)", color: "#c4693e", border: "rgba(181,98,58,0.3)" };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "1px 6px",
        borderRadius: 2,
        background: color.bg,
        border: `1px solid ${color.border}`,
        fontSize: 7,
        letterSpacing: "0.14em",
        fontFamily: font,
        color: color.color,
        textTransform: "uppercase",
        verticalAlign: "middle",
        marginLeft: 5,
      }}
    >
      {label}
    </span>
  );
}
