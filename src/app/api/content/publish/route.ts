import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function sb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );
}

export async function POST(_req: NextRequest) {
  const client = sb();

  const { data: draftRow, error: readErr } = await client
    .from("content_overrides")
    .select("data")
    .eq("key", "draft")
    .single();

  if (readErr || !draftRow) {
    return NextResponse.json({ ok: false, error: "no draft found" }, { status: 404 });
  }

  // Promote draft → published
  const { error: writeErr } = await client
    .from("content_overrides")
    .upsert({ key: "published", data: draftRow.data, updated_at: new Date().toISOString() });

  if (writeErr) return NextResponse.json({ ok: false, error: writeErr.message }, { status: 500 });

  // Snapshot the published state
  await client.from("content_versions").insert({ data: draftRow.data });

  // Prune to most recent 10 versions
  const { data: versions } = await client
    .from("content_versions")
    .select("id")
    .order("id", { ascending: false });

  if (versions && versions.length > 10) {
    const toDelete = versions.slice(10).map((v: { id: number }) => v.id);
    await client.from("content_versions").delete().in("id", toDelete);
  }

  return NextResponse.json({ ok: true });
}
