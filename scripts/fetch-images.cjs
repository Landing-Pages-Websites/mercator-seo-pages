#!/usr/bin/env node
// Fetch Pexels images for all Mercator SEO pages
// Usage: PEXELS_API_KEY=xxx node scripts/fetch-images.mjs

const API_KEY = process.env.PEXELS_API_KEY;
if (!API_KEY) { console.error("PEXELS_API_KEY not set"); process.exit(1); }

const fs = require("fs");
const path = require("path");
const https = require("https");

const PUBLIC_DIR = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(PUBLIC_DIR, { recursive: true });

async function searchPexels(query, perPage = 3) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape&size=large`;
  const res = await fetch(url, { headers: { Authorization: API_KEY } });
  const data = await res.json();
  return data.photos || [];
}

async function downloadImage(imageUrl, filepath) {
  if (fs.existsSync(filepath)) {
    console.log(`  SKIP (exists): ${path.basename(filepath)}`);
    return;
  }
  // Use the large size (940px wide) for good quality without huge files
  const url = imageUrl.replace("auto=compress", "auto=compress&w=1200&h=630&fit=crop");
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (res2) => {
          const stream = fs.createWriteStream(filepath);
          res2.pipe(stream);
          stream.on("finish", () => { stream.close(); resolve(); });
        });
        return;
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on("finish", () => { stream.close(); resolve(); });
    }).on("error", reject);
  });
}

// Image queries by page type
const cityQueries = {
  "houston": "Houston Texas skyline construction",
  "dallas-fort-worth": "Dallas Texas skyline construction cranes",
  "san-antonio": "San Antonio Texas cityscape",
  "austin": "Austin Texas skyline construction",
  "miami": "Miami Florida skyline construction cranes",
  "port-st-lucie": "Florida coastal construction development",
  "orlando": "Orlando Florida construction development",
  "tampa": "Tampa Florida skyline construction",
  "st-petersburg": "St Petersburg Florida waterfront",
  "cape-coral": "Cape Coral Florida construction development",
  "jacksonville": "Jacksonville Florida skyline construction",
};

const categoryQueries = {
  "commercial": "commercial office building construction",
  "healthcare": "hospital construction medical building",
  "retail": "retail shopping center construction",
  "institutional": "school building construction",
  "office-buildings": "modern office tower construction",
  "tenant-improvements": "interior office renovation construction",
  "industrial": "industrial facility construction warehouse",
  "data-centers": "data center construction server facility",
  "light-industrial": "light industrial warehouse construction",
  "warehousing": "warehouse distribution center construction",
  "manufacturing": "manufacturing plant construction factory",
  "treatment-plants": "water treatment plant construction",
  "multi-family": "apartment building construction multi family",
  "mixed-use": "mixed use development construction",
  "high-rise": "high rise building construction crane",
  "mid-rise": "mid rise apartment construction",
  "low-rise": "garden apartment townhome construction",
};

const generalQueries = {
  "hero": "construction site aerial view cranes",
  "general-state": "construction blueprints planning meeting",
};

async function main() {
  const allQueries = [];

  // City hero images
  for (const [slug, query] of Object.entries(cityQueries)) {
    allQueries.push({ slug: `cities/${slug}`, query, prefix: "hero" });
  }

  // Category hero images
  for (const [slug, query] of Object.entries(categoryQueries)) {
    allQueries.push({ slug: `categories/${slug}`, query, prefix: "hero" });
  }

  // General images
  for (const [slug, query] of Object.entries(generalQueries)) {
    allQueries.push({ slug: `general`, query, prefix: slug });
  }

  console.log(`Fetching images for ${allQueries.length} queries...`);

  for (const { slug, query, prefix } of allQueries) {
    const dir = path.join(PUBLIC_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });

    console.log(`\n[${slug}/${prefix}] Query: "${query}"`);

    try {
      const photos = await searchPexels(query, 2);
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        const ext = "jpg";
        const filename = `${prefix}-${i + 1}.${ext}`;
        const filepath = path.join(dir, filename);
        const imgUrl = photo.src.large2x;

        console.log(`  Downloading: ${filename} (${photo.alt?.substring(0, 50)}...)`);
        await downloadImage(imgUrl, filepath);
      }
      // Rate limit: Pexels allows 200 req/hr, ~1 per 18s to be safe
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
    }
  }

  // Generate a JSON manifest
  const manifest = {};
  function scanDir(dir, key) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".jpg") || f.endsWith(".png"));
    if (files.length > 0) {
      manifest[key] = files.map(f => `/images/${key}/${f}`);
    }
  }

  for (const slug of Object.keys(cityQueries)) scanDir(path.join(PUBLIC_DIR, "cities", slug), `cities/${slug}`);
  for (const slug of Object.keys(categoryQueries)) scanDir(path.join(PUBLIC_DIR, "categories", slug), `categories/${slug}`);
  scanDir(path.join(PUBLIC_DIR, "general"), "general");

  fs.writeFileSync(path.join(PUBLIC_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`\nDone. Manifest written to public/images/manifest.json`);
  console.log(`Total image groups: ${Object.keys(manifest).length}`);
}

main().catch(console.error);
