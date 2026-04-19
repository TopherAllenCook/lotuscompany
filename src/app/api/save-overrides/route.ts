import { NextRequest, NextResponse } from "next/server";

// Debug: GET /api/save-overrides → shows which env vars are present
export async function GET() {
  return NextResponse.json({
    hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasKey: !!process.env.SUPABASE_SERVICE_KEY,
    url:    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "(missing)",
  });
}

export async function POST(req: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json(
      { ok: false, error: `missing env vars — url:${!!supabaseUrl} key:${!!serviceKey}` },
      { status: 500 }
    );
  }

  try {
    const body    = await req.json();
    const content = JSON.stringify(body, null, 2);

    // Try POST (create); fall back to PUT (update) if object already exists
    const uploadUrl = `${supabaseUrl}/storage/v1/object/lotus-assets/config/lotus-overrides.json`;
    const headers = {
      "Authorization": `Bearer ${serviceKey}`,
      "Content-Type":  "application/json",
      "x-upsert":      "true",
    };

    const r = await fetch(uploadUrl, { method: "POST", headers, body: content });

    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json({ ok: false, error: text, status: r.status }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
