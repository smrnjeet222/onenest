import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { imagetools } from "vite-imagetools";

function heroPreloadPlugin(): Plugin {
  return {
    name: "hero-preload",
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html;
      const heroAvif = Object.keys(ctx.bundle).find(
        (k) => k.includes("hero-kiosk") && k.endsWith(".avif") && !k.includes("480") && !k.includes("768")
      );
      if (!heroAvif) return html;
      const href = `/${heroAvif}`;
      return html.replace(
        "</head>",
        `<link rel="preload" as="image" href="${href}" type="image/avif" fetchpriority="high" />\n  </head>`
      );
    },
  };
}

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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "react";
          }
          if (id.includes("node_modules/@tanstack/")) {
            return "tanstack";
          }
          if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-")) {
            return "charts";
          }
          if (id.includes("node_modules/@radix-ui/")) {
            return "radix";
          }
        },
      },
    },
  },
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
    imagetools(),
    heroPreloadPlugin(),
  ],
});
