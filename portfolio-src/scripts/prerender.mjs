// Renders the hero to HTML at build time and puts it inside #root, so the page
// paints before any JavaScript runs. React then hydrates it.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, '..', 'dist');
const ssr = path.join(here, '..', 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(ssr).href);
const html = render();
const file = path.join(dist, 'index.html');
const page = fs.readFileSync(file, 'utf8');
if (!page.includes('<div id="root"></div>')) throw new Error('#root placeholder not found');
let out = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
// Start downloading the app only after the pre-rendered page has painted.
out = out.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, (_, src) =>
  `<script>(function(){var done=0;function go(){if(done)return;done=1;var s=document.createElement("script");s.type="module";s.src="${src}";document.head.appendChild(s)}` +
    `function later(){setTimeout(go,3500)}` +
    `if(document.readyState==="complete")later();else addEventListener("load",later);` +
    `["pointermove","pointerdown","keydown","touchstart","wheel","scroll"].forEach(function(e){addEventListener(e,go,{once:true,passive:true})})})()</script>`);
// The app wakes up on the first sign of a visitor (mouse move, touch, scroll,
// key) or 3.5 s after load. The pre-rendered hero is fully visible before that.
// Preload the two fonts the hero uses so text does not swap late.
const assets = fs.readdirSync(path.join(dist, "assets"));
const preload = ["inter-latin-300-normal", "cormorant-garamond-latin-500-normal"]
  .map((n) => assets.find((f) => f.startsWith(n) && f.endsWith(".woff2")))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join("");
out = out.replace("</title>", "</title>" + preload);
if (out.includes('type="module" crossorigin')) throw new Error("module script not deferred");
fs.writeFileSync(file, out);
fs.rmSync(path.join(here, '..', 'dist-ssr'), { recursive: true, force: true });
console.log(`Pre-rendered ${Math.round(html.length / 1024)} KB of HTML into index.html`);
