import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  build: {
    // minify: true,
    lib: {
      entry: [
        "./lib/tailwind-plugin.cjs",
      ],
      name: "index",
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['fs', 'path', 'url', 'os', 'node:fs', 'node:path']
    }
  },
  plugins: [],
});
