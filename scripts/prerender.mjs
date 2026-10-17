/**
 * Post-build SEO step.
 *
 * The app is a client-rendered SPA, so every URL served by the rewrite would
 * otherwise share the same <title> and description. This script writes a small
 * static HTML file per route with the correct head tags, which crawlers and
 * social scrapers read before any JavaScript runs. Vercel (and any static host)
 * serves those files ahead of the catch-all rewrite, and the React app still
 * boots normally from them.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const { site, routes } = JSON.parse(
  readFileSync(join(root, "src/data/seo.json"), "utf8"),
);

const baseUrl = site.url.replace(/\/+$/, "");
const template = readFileSync(join(dist, "index.html"), "utf8");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const meta = (attr, key, content) =>
  `    <meta ${attr}="${key}" content="${escapeHtml(content)}" />`;

function headFor(path, route) {
  const url = `${baseUrl}${path === "/" ? "/" : path}`;
  const image = `${baseUrl}${route.image ?? site.defaultImage}`;
  const imageAlt = route.imageAlt ?? site.defaultImageAlt;
  const width = 1200;
  const height = 630;

  return [
    `    <title>${escapeHtml(route.title)}</title>`,
    meta("name", "description", route.description),
    meta("name", "author", site.name),
    meta("name", "robots", "index, follow, max-image-preview:large"),
    `    <link rel="canonical" href="${url}" />`,
    "",
    meta("property", "og:type", route.type ?? "website"),
    meta("property", "og:site_name", site.name),
    meta("property", "og:locale", site.locale),
    meta("property", "og:url", url),
    meta("property", "og:title", route.title),
    meta("property", "og:description", route.description),
    meta("property", "og:image", image),
    meta("property", "og:image:width", width),
    meta("property", "og:image:height", height),
    meta("property", "og:image:alt", imageAlt),
    "",
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", route.title),
    meta("name", "twitter:description", route.description),
    meta("name", "twitter:image", image),
    meta("name", "twitter:image:alt", imageAlt),
    "",
    '    <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />',
    '    <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />',
  ].join("\n");
}

const START = "    <!-- seo:start -->";
const END = "    <!-- seo:end -->";

function inject(html, head) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1) {
    throw new Error("SEO markers are missing from dist/index.html");
  }
  return html.slice(0, start + START.length) + "\n" + head + "\n" + html.slice(end);
}

let written = 0;
for (const [path, route] of Object.entries(routes)) {
  const outFile =
    path === "/"
      ? join(dist, "index.html")
      : join(dist, path.slice(1), "index.html");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, inject(template, headFor(path, route)));
  written += 1;
}

// Vercel only falls back to a route's own HTML when it is told to; keep the
// explicit rewrites in vercel.json in step with the routes we generate.
const { rewrites = [] } = JSON.parse(
  readFileSync(join(root, "vercel.json"), "utf8"),
);
const sources = new Set(rewrites.map((rule) => rule.source));
const missing = Object.keys(routes).filter(
  (path) => path !== "/" && !sources.has(path),
);
if (missing.length) {
  throw new Error(
    `vercel.json is missing rewrites for: ${missing.join(", ")}`,
  );
}

for (const rule of rewrites) {
  if (rule.destination === "/index.html") continue;
  if (!existsSync(join(dist, rule.destination))) {
    throw new Error(`rewrite target does not exist: ${rule.destination}`);
  }
}

const today = new Date().toISOString().slice(0, 10);
const priority = (path) =>
  path === "/" ? "1.0" : path === "/work" ? "0.9" : path === "/contact" ? "0.7" : "0.8";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(routes)
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path === "/" ? "/" : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority(path)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);

console.log(
  `prerender: wrote ${written} route heads + sitemap.xml (${Object.keys(routes).length} urls)`,
);
console.log(`prerender: vercel.json covers all ${missing.length === 0 ? Object.keys(routes).length - 1 : 0} non-root routes`);
