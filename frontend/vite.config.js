import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: "public/manifest.json",
    outDir: "dist",
    sourcemap: true,
  },
});
