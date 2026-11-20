// Copies the Vite build into the repo root, which GitHub Pages serves.
// Only the main page and its hashed assets (root assets/ is build output only) are touched; images, docs and
// the prototype sub-sites (kayysee/, dash-and-dine/, fresh-farm-market/) stay as they are.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, '..', 'dist');
const root = path.join(here, '..', '..');
const rootAssets = path.join(root, 'assets');

fs.mkdirSync(rootAssets, { recursive: true });
for (const f of fs.readdirSync(rootAssets)) {
  fs.rmSync(path.join(rootAssets, f));
}
for (const f of fs.readdirSync(path.join(dist, 'assets'))) {
  fs.copyFileSync(path.join(dist, 'assets', f), path.join(rootAssets, f));
}
fs.copyFileSync(path.join(dist, 'index.html'), path.join(root, 'index.html'));
console.log('Published build to', root);
