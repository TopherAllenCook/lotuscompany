/**
 * Uploads all Lotus Company property images to Supabase Storage.
 *
 * Usage:
 *   SUPABASE_URL=https://xxxx.supabase.co SUPABASE_SERVICE_KEY=your-service-key node scripts/upload-to-supabase.mjs
 *
 * Requires the service role key (not anon key) — find it in:
 *   Supabase Dashboard → Project Settings → API → service_role (secret)
 *
 * Creates a public bucket named "lotus-assets" with folders:
 *   nova/           — 96 commercial photos
 *   republic/aerials/
 *   republic/highlights/
 *   steelton-village/
 */

import { createClient } from "@supabase/supabase-js";
import { readdir, readFile } from "fs/promises";
import { join, extname } from "path";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET = "lotus-assets";
const PUBLIC_DIR = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY env vars");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets();
  if (!buckets?.find((b) => b.name === BUCKET)) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true });
    if (error) throw new Error(`Failed to create bucket: ${error.message}`);
    console.log(`✓ Created bucket "${BUCKET}"`);
  } else {
    console.log(`✓ Bucket "${BUCKET}" already exists`);
  }
}

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

async function uploadFolder(localPath, storagePath) {
  let entries;
  try {
    entries = await readdir(localPath, { withFileTypes: true });
  } catch {
    console.warn(`  ⚠ Folder not found, skipping: ${localPath}`);
    return;
  }

  for (const entry of entries) {
    const localFile = join(localPath, entry.name);
    const storageFile = `${storagePath}/${entry.name}`;

    if (entry.isDirectory()) {
      await uploadFolder(localFile, storageFile);
      continue;
    }

    const ext = extname(entry.name).toLowerCase();
    const mime = MIME[ext];
    if (!mime) continue;

    const data = await readFile(localFile);
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(storageFile, data, { contentType: mime, upsert: true });

    if (error) {
      console.error(`  ✗ ${storageFile}: ${error.message}`);
    } else {
      console.log(`  ↑ ${storageFile}`);
    }
  }
}

async function main() {
  console.log(`\nUploading Lotus Company images to ${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/\n`);
  await ensureBucket();

  const folders = [
    { local: join(PUBLIC_DIR, "nova"),             storage: "nova" },
    { local: join(PUBLIC_DIR, "republic"),         storage: "republic" },
    { local: join(PUBLIC_DIR, "steelton-village"), storage: "steelton-village" },
  ];

  for (const { local, storage } of folders) {
    console.log(`\n→ ${storage}/`);
    await uploadFolder(local, storage);
  }

  console.log("\n✓ Upload complete");
}

main().catch((e) => { console.error(e); process.exit(1); });
