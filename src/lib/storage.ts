const BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/lotus-assets`
  : "";

/** Returns the full URL for a Supabase Storage asset, or falls back to local path during dev. */
export function asset(path: string): string {
  return BASE ? `${BASE}${path}` : path;
}
