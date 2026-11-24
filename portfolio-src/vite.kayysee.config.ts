import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// The KayYSee prototype. Its source is in ./kayysee and it builds into the
// repo-root kayysee/ folder, which GitHub Pages serves at /kayysee/.
export default defineConfig({
  root: fileURLToPath(new URL('./kayysee', import.meta.url)),
  base: './',
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: fileURLToPath(new URL('../kayysee', import.meta.url)),
    emptyOutDir: true,
  },
});
