import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cloudflare } from "@cloudflare/vite-plugin";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vite.dev/config/
const srcPath = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: resolve(srcPath, "prerender.jsx"),
    }),
    cloudflare(),
  ],
  resolve: {
    alias: {
      "@": resolve(srcPath),
    },
  },
});
