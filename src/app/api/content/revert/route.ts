import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

function sb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );
}

// POST /api/content/revert  body: { versionId: number }
// Copies the snapshot data into the draft row (does NOT auto-publish)
export async function POST(req: NextRequest) {
  let versionId: number;
  try {
    const body = await req.json();
    versionId = Number(body.versionId);
    if (!versionId || isNaN(versionId)) throw new Error("invalid");
  } catch {
    return NextResponse.json({ ok: false, error: "versionId required" }, { status: 400 });
  }

  const client = sb();
  const { data: version, error: readErr } = await client
    .from("content_versions")
    .select("data")
    .eq("id", versionId)
    .single();

  if (readErr || !version) {
    return NextResponse.json({ ok: false, error: "version not found" }, { status: 404 });
  }

  const { error: writeErr } = await client
    .from("content_overrides")
    .upsert({ key: "draft", data: version.data, updated_at: new Date().toISOString() });

  if (writeErr) return NextResponse.json({ ok: false, error: writeErr.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
