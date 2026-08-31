import { createFileRoute, Link } from "@tanstack/react-router";

/**
 * Prerendered to `dist/client/404.html` (see `pages` in vite.config.ts) so
 * Cloudflare's `not_found_handling: "404-page"` can serve it with a real 404
 * status. Without this file the edge returns an empty body.
 */
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page not found · OneNest" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: NotFound,
});

function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body flex flex-col">
      <header className="max-w-3xl w-full mx-auto px-6 pt-10">
        <Link
          to="/"
          className="font-display font-extrabold text-xl tracking-tighter uppercase text-terracotta"
        >
          One Nest
        </Link>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-20 md:py-28">
        <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta mb-4">
          Error 404
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance mb-6">
          This page isn't on the shopfloor.
        </h1>
        <p className="text-ink/60 leading-relaxed max-w-md mb-10">
          The link may be out of date, or the page may have moved. Everything
          about the incubator is on the main site.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="bg-ink text-paper px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-terracotta transition-colors"
          >
            Back to home
          </Link>
          <Link
            to="/apply"
            className="border border-ink/20 px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-ink hover:text-paper transition-colors"
          >
            Apply for a cohort
          </Link>
        </div>
      </main>

      <footer className="border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-6 py-6 font-mono text-[10px] uppercase tracking-widest text-ink/40">
          © 2026 One Nest UK Ltd. · Newcastle Upon Tyne
        </div>
      </footer>
    </div>
  );
}
