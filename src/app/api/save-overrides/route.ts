import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const filePath = join(process.cwd(), "public", "lotus-overrides.json");
    writeFileSync(filePath, JSON.stringify(body, null, 2));
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
