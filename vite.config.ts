import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  build: {
    // minify: true,
    lib: {
      entry: [
        "./lib/main.ts",
        "./lib/icons.cjs"
      ],
      name: "index",
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['fs', 'path', 'url', 'os', 'node:fs', 'node:path']
    }
  },
  plugins: [dts()],
});
