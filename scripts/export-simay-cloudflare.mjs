import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const outDir = path.join(root, "cloudflare-simay");
const demoPath = "/demo/simay-sarikaya-hair-makeup/";
const seedFiles = [
  "demo/simay-sarikaya-hair-makeup/index.html",
  "demo/simay-sarikaya-hair-makeup/hizmetler/index.html",
  "demo/simay-sarikaya-hair-makeup/randevu/index.html"
];

function copyFile(relativePath) {
  const source = path.join(distDir, relativePath);
  if (!fs.existsSync(source) || fs.statSync(source).isDirectory()) {
    return false;
  }

  const target = path.join(outDir, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  return true;
}

function collectRefs(contents) {
  const refs = new Set();
  const patterns = [
    /\b(?:src|srcset|href|content)=["'](\/(?:_astro|assets)\/[^"'?#\s]+)(?:[?#][^"'\s]*)?["']/g,
    /url\(["']?(\/(?:_astro|assets)\/[^"')]+)["']?\)/g,
    /url\(&#34;(\/(?:_astro|assets)\/[^&#]+)&#34;\)/g
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(contents))) {
      refs.add(match[1].replace(/&amp;/g, "&").slice(1));
    }
  }

  return refs;
}

if (!fs.existsSync(distDir)) {
  throw new Error("dist/ bulunamadı. Önce `npm run build` ya da `npm run build:simay-cloudflare` çalıştır.");
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const queue = [...seedFiles];
const copied = new Set();

while (queue.length > 0) {
  const relativePath = queue.shift();
  if (!relativePath || copied.has(relativePath)) {
    continue;
  }

  if (!copyFile(relativePath)) {
    continue;
  }

  copied.add(relativePath);
  const fullPath = path.join(outDir, relativePath);
  const ext = path.extname(fullPath).toLowerCase();
  if (![".html", ".css", ".js"].includes(ext)) {
    continue;
  }

  const contents = fs.readFileSync(fullPath, "utf8");
  for (const ref of collectRefs(contents)) {
    if (!copied.has(ref)) {
      queue.push(ref);
    }
  }
}

fs.writeFileSync(
  path.join(outDir, "index.html"),
  `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <meta http-equiv="refresh" content="0; url=${demoPath}" />
    <title>Simay Sarıkaya Demo</title>
  </head>
  <body>
    <a href="${demoPath}">Simay Sarıkaya demo sitesini aç</a>
  </body>
</html>
`
);

fs.writeFileSync(path.join(outDir, "_redirects"), `/ ${demoPath} 302\n`);
fs.writeFileSync(path.join(outDir, "_headers"), `/*\n  X-Robots-Tag: noindex, nofollow\n`);

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
      files.push(path.relative(outDir, fullPath));
    }
  }
}
walk(outDir);

console.log(`Cloudflare yükleme klasörü hazır: ${path.relative(root, outDir)}/`);
console.log(`${files.length} dosya kopyalandı.`);
