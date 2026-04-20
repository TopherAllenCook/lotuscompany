import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

function supabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );
}

// GET /api/content?mode=published|draft
export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get("mode") ?? "published";

  const { data, error } = await supabase()
    .from("content_overrides")
    .select("data")
    .eq("key", mode)
    .single();

  if (error || !data) {
    // Fallback: try the legacy Storage blob so transition is seamless
    try {
      const storageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/lotus-assets/config/lotus-overrides.json`;
      const r = await fetch(storageUrl + "?t=" + Date.now());
      if (r.ok) return NextResponse.json(await r.json());
    } catch {}
    return NextResponse.json({ overrides: {}, dynamic: {} });
  }

  const payload = data.data as Record<string, unknown>;
  if (!payload || Object.keys(payload).length === 0) {
    // Seed from Storage blob on first use
    try {
      const storageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/lotus-assets/config/lotus-overrides.json`;
      const r = await fetch(storageUrl + "?t=" + Date.now());
      if (r.ok) {
        const blob = await r.json();
        // Write it into the database in the background
        supabase()
          .from("content_overrides")
          .upsert([
            { key: "draft",     data: blob, updated_at: new Date().toISOString() },
            { key: "published", data: blob, updated_at: new Date().toISOString() },
          ])
          .then(() => {});
        return NextResponse.json(blob);
      }
    } catch {}
  }

  return NextResponse.json(payload ?? { overrides: {}, dynamic: {} });
}

// POST /api/content  — save draft
export async function POST(req: NextRequest) {
  let body: unknown;
  try { body = await req.json(); }
  catch { return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 }); }

  const { error } = await supabase()
    .from("content_overrides")
    .upsert({ key: "draft", data: body, updated_at: new Date().toISOString() });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
