import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";

export const Route = createFileRoute("/thanks")({
  head: () => ({
    meta: [
      { title: "Application received · OneNest" },
      // Confirmation URL only — it exists so Meta has a page to key a
      // conversion off, and must never surface in search.
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Your OneNest cohort application has been received.",
      },
    ],
    links: [{ rel: "canonical", href: "https://onenest.uk/thanks" }],
  }),
  component: Thanks,
});

function Thanks() {
  return (
    <div className="min-h-screen bg-forest text-paper font-body flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/15 rounded-full -mr-40 -mt-40 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-terracotta/15 rounded-full -ml-48 -mb-48 blur-3xl" />

      {/* Deliberately no site nav: a confirmation page should not offer ways
          to wander off before the follow-up lands. */}
      <header className="relative max-w-3xl w-full mx-auto px-6 pt-10">
        <Link
          to="/"
          className="font-display font-extrabold text-xl tracking-tighter uppercase text-peach"
        >
          One Nest
        </Link>
      </header>

      <main className="relative flex-1 max-w-3xl w-full mx-auto px-6 py-16 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-widest text-peach mb-4">
          Confirmed · Application received
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance mb-6">
          You're in for Newcastle <span className="text-peach">Cohort 01.</span>
        </h1>
        <p className="text-paper/70 leading-relaxed max-w-lg mb-10">
          We'll review your brand and reply within 7 working days. Pricing is
          set per cohort, so the reply will include numbers that fit the brand
          you described.
        </p>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/15 border border-paper/15 mb-12">
          {[
            { k: "Launch", v: "Q1 2027" },
            { k: "City", v: "Newcastle" },
            { k: "Cohort", v: "4 brands" },
            { k: "Reply in", v: "7 days" },
          ].map((m) => (
            <div key={m.k} className="bg-forest p-5">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
                {m.k}
              </dt>
              <dd className="font-display text-2xl font-extrabold mt-1">
                {m.v}
              </dd>
            </div>
          ))}
        </dl>

        <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50 mb-4">
          While you wait
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:partnership@onenest.uk?subject=Brand%20Deck%20Request"
            className="bg-terracotta text-paper px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-peach hover:text-ink transition-colors inline-flex items-center gap-3"
          >
            <Mail size={14} className="shrink-0" />
            Request the brand deck
          </a>
          <a
            href="https://www.linkedin.com/company/onenest-smarthub/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-paper/30 px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-paper hover:text-ink transition-colors inline-flex items-center gap-3"
          >
            <Linkedin size={14} className="shrink-0" />
            Follow on LinkedIn
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-paper/15">
          <Link
            to="/"
            hash="waitlist"
            className="font-mono text-[10px] uppercase tracking-widest text-peach hover:text-paper transition-colors"
          >
            ← Submit another brand
          </Link>
        </div>
      </main>

      <footer className="relative border-t border-paper/15">
        <div className="max-w-3xl mx-auto px-6 py-6 font-mono text-[10px] uppercase tracking-widest text-paper/40">
          © 2026 One Nest UK Ltd. · Newcastle Upon Tyne
        </div>
      </footer>
    </div>
  );
}
