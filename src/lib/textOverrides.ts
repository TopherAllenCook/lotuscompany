export interface ElementOverride {
  // text
  content?: string;
  color?: string;
  fontWeight?: number;
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  // universal position
  translateX?: number;
  translateY?: number;
  // dimensions
  width?: number;   // px
  height?: number;  // px
  // visual
  background?: string;
  opacity?: number;
  rotate?: number;  // degrees
}

// backward-compat alias
export type TextOverride = ElementOverride;

export type OverridesMap = Record<string, ElementOverride>;

const KEY = "lotus-text-overrides";

export function loadOverrides(): OverridesMap {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(KEY) ?? "{}"); }
  catch { return {}; }
}

export function saveOverrides(map: OverridesMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
}
