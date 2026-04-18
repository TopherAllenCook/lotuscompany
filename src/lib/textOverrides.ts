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

export type TextOverride = ElementOverride;
export type OverridesMap = Record<string, ElementOverride>;

export interface DynamicElementDef {
  id: string;
  slideKey: string;
  type: "text" | "bar" | "shape";
  x: number;
  y: number;
  // initial defaults
  content: string;
  color: string;
  fontSize: number;
  fontWeight: number;
  width: number;
  height: number;
  background: string;
  opacity: number;
}
export type DynamicElementsMap = Record<string, DynamicElementDef>;

const KEY     = "lotus-text-overrides";
const DYN_KEY = "lotus-dynamic-elements";
const SAVE_FILE = "/lotus-overrides.json";

export function loadOverrides(): OverridesMap {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(KEY) ?? "{}"); }
  catch { return {}; }
}

export function saveOverrides(map: OverridesMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
}

export function loadDynamicElements(): DynamicElementsMap {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(DYN_KEY) ?? "{}"); }
  catch { return {}; }
}

export function saveDynamicElements(map: DynamicElementsMap) {
  localStorage.setItem(DYN_KEY, JSON.stringify(map));
}

export async function fetchSavedState(): Promise<{ overrides: OverridesMap; dynamic: DynamicElementsMap }> {
  try {
    const r = await fetch(SAVE_FILE + "?t=" + Date.now());
    if (!r.ok) return { overrides: {}, dynamic: {} };
    return await r.json();
  } catch {
    return { overrides: {}, dynamic: {} };
  }
}

export async function pushSavedState(overrides: OverridesMap, dynamic: DynamicElementsMap): Promise<boolean> {
  try {
    const r = await fetch("/api/save-overrides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ overrides, dynamic }),
    });
    return r.ok;
  } catch {
    return false;
  }
}
