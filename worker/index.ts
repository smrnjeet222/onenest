import type { Env } from "./env";
import { handleLead } from "./lead";

/**
 * Worker entry.
 *
 * `assets.run_worker_first` is left at its default (false), so every request
 * that matches a prerendered file in dist/client — `/`, `/apply`, `/thanks`,
 * hashed assets — is served by Cloudflare's asset layer and never reaches this
 * code. Only paths with no matching asset get here, which in practice means
 * `/api/*` plus genuine 404s.
 */
export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/lead") {
      // Anything but POST would otherwise fall through to the asset layer and
      // answer a GET with the home page instead of a 405.
      if (request.method !== "POST") {
        return new Response(null, { status: 405, headers: { allow: "POST" } });
      }
      return handleLead(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
