import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

// The site's static files (images, docs, prototype sub-sites) live in the repo
// root, one level up. In dev, serve them from there; in production they are
// already next to the built index.html.
const siteRoot = fileURLToPath(new URL('..', import.meta.url));
const staticPrefixes = ['/images/', '/docs/', '/cv/', '/kayysee/', '/dash-and-dine/', '/fresh-farm-market/', '/favicon.svg', '/og-image.png'];

function serveSiteRoot(): Plugin {
  return {
    name: 'serve-site-root',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0]);
        if (!staticPrefixes.some((p) => url.startsWith(p))) return next();
        let file = path.join(siteRoot, url);
        if (!file.startsWith(siteRoot)) return next();
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
        if (!fs.existsSync(file)) return next();
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), serveSiteRoot()],
  publicDir: false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 700,
  },
});
