export interface TextOverride {
  fontSize?: number;
  translateX?: number;
  translateY?: number;
  letterSpacing?: number;
  lineHeight?: number;
}

export type OverridesMap = Record<string, TextOverride>;

const KEY = "lotus-text-overrides";

export function loadOverrides(): OverridesMap {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(KEY) ?? "{}"); }
  catch { return {}; }
}

export function saveOverrides(map: OverridesMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
}
