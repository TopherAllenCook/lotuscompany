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
  borderRadius?: number;  // px
  blurAmount?: number;    // px — backdropFilter blur
  objectPositionX?: number; // 0–100 %
  objectPositionY?: number; // 0–100 %
  scale?: number;           // 1–200 %
  paddingX?: number;        // px horizontal
  paddingY?: number;        // px vertical
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

function getStorageUrl() {
  const base = typeof process !== "undefined" && process.env.NEXT_PUBLIC_SUPABASE_URL;
  return base
    ? `${base}/storage/v1/object/public/lotus-assets/config/lotus-overrides.json`
    : "/lotus-overrides.json";
}

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
    const r = await fetch(getStorageUrl() + "?t=" + Date.now());
    if (!r.ok) return { overrides: {}, dynamic: {} };
    return await r.json();
  } catch {
    return { overrides: {}, dynamic: {} };
  }
}

export async function pushSavedState(overrides: OverridesMap, dynamic: DynamicElementsMap): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch("/api/save-overrides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ overrides, dynamic }),
    });
    const body = await r.json().catch(() => ({}));
    if (!r.ok) {
      const msg = body?.error ?? `HTTP ${r.status}`;
      console.error("[save-overrides]", msg, body);
      return { ok: false, error: msg };
    }
    return { ok: true };
  } catch (e) {
    const msg = String(e);
    console.error("[save-overrides]", msg);
    return { ok: false, error: msg };
  }
}

// ─── Phase 1: database-backed draft/publish ───────────────────────────────────

function adminHeaders(): HeadersInit {
  const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET;
  return {
    "Content-Type": "application/json",
    ...(secret ? { "Authorization": `Bearer ${secret}` } : {}),
  };
}

export async function fetchContent(
  mode: "published" | "draft" = "published"
): Promise<{ overrides: OverridesMap; dynamic: DynamicElementsMap }> {
  try {
    const headers: HeadersInit = mode === "draft" ? adminHeaders() : {};
    const r = await fetch(`/api/content?mode=${mode}&t=${Date.now()}`, { headers });
    if (!r.ok) return { overrides: {}, dynamic: {} };
    return await r.json();
  } catch {
    return { overrides: {}, dynamic: {} };
  }
}

export interface VersionMeta { id: number; created_at: string; }

export async function fetchVersions(): Promise<VersionMeta[]> {
  try {
    const r = await fetch("/api/content/versions?t=" + Date.now(), { headers: adminHeaders() });
    if (!r.ok) return [];
    return await r.json();
  } catch {
    return [];
  }
}

export async function revertToVersion(versionId: number): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch("/api/content/revert", {
      method: "POST",
      headers: adminHeaders(),
      body: JSON.stringify({ versionId }),
    });
    const body = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, error: body?.error ?? `HTTP ${r.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function saveDraft(
  overrides: OverridesMap,
  dynamic: DynamicElementsMap
): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch("/api/content", {
      method: "POST",
      headers: adminHeaders(),
      body: JSON.stringify({ overrides, dynamic }),
    });
    const body = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, error: body?.error ?? `HTTP ${r.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function publishContent(): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch("/api/content/publish", {
      method: "POST",
      headers: adminHeaders(),
    });
    const body = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, error: body?.error ?? `HTTP ${r.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
