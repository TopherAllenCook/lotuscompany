import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

function sb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );
}

// GET /api/content/versions — returns [{id, created_at}]
export async function GET(_req: NextRequest) {
  const { data, error } = await sb()
    .from("content_versions")
    .select("id, created_at")
    .order("id", { ascending: false })
    .limit(10);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}
