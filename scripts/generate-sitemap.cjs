/**
 * generate-sitemap.cjs
 * Reads portfolio_manifest.json and static routes, then writes public/sitemap.xml
 *
 * Usage: node scripts/generate-sitemap.cjs [--base-url https://example.com]
 */

const fs = require('fs');
const path = require('path');

// --- Parse CLI args ---
const args = process.argv.slice(2);
let BASE_URL = 'https://revolite.works'; // default

const baseUrlIdx = args.indexOf('--base-url');
if (baseUrlIdx !== -1 && args[baseUrlIdx + 1]) {
  BASE_URL = args[baseUrlIdx + 1].replace(/\/+$/, '');
}

// --- Static routes ---
// HashRouter: all routes are hash-based (e.g. https://example.com/#/portfolio)
const USE_HASH = true;

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
];

// --- Dynamic routes from portfolio manifest ---
function buildDynamicRoutes() {
  const manifestPath = path.resolve(__dirname, '../src/portfolio_manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.warn(`Manifest not found at ${manifestPath}, skipping dynamic routes.`);
    return [];
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const routes = [];

  for (const key of Object.keys(manifest)) {
    // Skip empty keys or keys with no images
    if (!key || !manifest[key] || manifest[key].length === 0) continue;

    // Key format: "Industry/Subcategory" or just "subcategory"
    const encoded = key
      .split('/')
      .map((segment) => encodeURIComponent(segment))
      .join('/');

    routes.push({
      path: `/portfolio/${encoded}`,
      priority: '0.7',
      changefreq: 'monthly',
    });
  }

  return routes;
}

// --- Build XML ---
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemap() {
  const allRoutes = [...staticRoutes, ...buildDynamicRoutes()];
  const today = new Date().toISOString().split('T')[0];

  const urls = allRoutes
    .map(
      (route) => `  <url>
    <loc>${escapeXml(BASE_URL)}${USE_HASH ? '/#' : ''}${route.path === '/' ? '' : escapeXml(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return xml;
}

// --- Write file ---
const sitemap = generateSitemap();
const outDir = path.resolve(__dirname, '../public');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'sitemap.xml');
fs.writeFileSync(outPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generated at ${outPath}`);
console.log(`   Base URL: ${BASE_URL}`);
console.log(`   Total URLs: ${[...staticRoutes, ...buildDynamicRoutes()].length}`);
