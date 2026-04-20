import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET;
  if (!secret || req.headers.get("Authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  const { data: draftRow, error: readErr } = await sb
    .from("content_overrides")
    .select("data")
    .eq("key", "draft")
    .single();

  if (readErr || !draftRow) {
    return NextResponse.json({ ok: false, error: "no draft found" }, { status: 404 });
  }

  const { error: writeErr } = await sb
    .from("content_overrides")
    .upsert({ key: "published", data: draftRow.data, updated_at: new Date().toISOString() });

  if (writeErr) return NextResponse.json({ ok: false, error: writeErr.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
