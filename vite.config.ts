import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  base: "/",
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  build: {
    target: ["es2022", "chrome100", "firefox100", "safari16"],
  },
  server: {
    // Quick tunnels get a fresh random hostname on every run, so allow the
    // whole domain instead of pinning one. Leading dot matches any subdomain.
    allowedHosts: [".trycloudflare.com"],
  },
  plugins: [
    // Renders every route to static HTML at build time. Without this the page
    // ships an empty <div id="root"> and crawlers see only the <head>.
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      pages: [
        // Cloudflare's `not_found_handling: "404-page"` looks for `404.html` at
        // the assets root. Without autoSubfolderIndex:false this would land at
        // `404/index.html` like every other route, and never be found.
        {
          path: "/404",
          prerender: { outputPath: "/404", autoSubfolderIndex: false },
        },
      ],
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
    imagetools(),
  ],
});
