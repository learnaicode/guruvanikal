import { defineConfig } from 'vite';

// base './' : every address in the built site is relative, so the same build runs from guruvanikal.com,
// from jsDelivr (see tools/release.sh) or from any folder.
export default defineConfig({ base: './', build: { target: 'es2020', chunkSizeWarningLimit: 1500 } });
