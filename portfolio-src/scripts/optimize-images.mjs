// Makes AVIF + WebP copies of the site's photos and artwork at a few widths,
// in /images/opt/, and writes src/data/images.json (original size + widths made)
// so <Picture> can build srcset and reserve the right aspect ratio.
// Run with: npm run images  (only converts files that are new or changed).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '../..');
const IMAGES = path.join(ROOT, 'images');
const OUT = path.join(IMAGES, 'opt');
const MANIFEST = path.resolve(import.meta.dirname, '../src/data/images.json');
const WIDTHS = [480, 960, 1600];
// Folders and loose files to convert (the cube textures stay as they are for three.js).
const SOURCES = ['', 'Banners', 'Brochure', 'Email Marketing', 'Posters', 'Presentation deck', 'desk', 'screens', 'thumbs', 'pdf/blockchain-land-registry'];

const manifest = {};
let made = 0;
for (const dir of SOURCES) {
  const abs = path.join(IMAGES, dir);
  for (const name of fs.readdirSync(abs)) {
    if (!/\.(jpe?g|png)$/i.test(name)) continue;
    const file = path.join(abs, name);
    const rel = path.posix.join(dir.split(path.sep).join('/'), name); // e.g. "Posters/x.png"
    const meta = await sharp(file).metadata();
    const widths = WIDTHS.filter((w) => w < meta.width);
    widths.push(Math.min(meta.width, 2000));
    const base = rel.replace(/\.(jpe?g|png)$/i, '');
    for (const w of widths) {
      for (const fmt of ['avif', 'webp']) {
        const out = path.join(OUT, `${base}-${w}.${fmt}`);
        if (fs.existsSync(out) && fs.statSync(out).mtimeMs > fs.statSync(file).mtimeMs) continue;
        fs.mkdirSync(path.dirname(out), { recursive: true });
        const img = sharp(file).resize({ width: w, withoutEnlargement: true });
        await (fmt === 'avif' ? img.avif({ quality: 52, effort: 4 }) : img.webp({ quality: 76 })).toFile(out);
        made++;
      }
    }
    manifest[`/images/${rel}`] = { w: meta.width, h: meta.height, widths };
  }
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 0) + '\n');
console.log(`images: ${Object.keys(manifest).length} sources, ${made} files written`);
