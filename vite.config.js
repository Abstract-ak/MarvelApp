import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MarvelApp/",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
  preview: {
    port: 3000,
  },
});
