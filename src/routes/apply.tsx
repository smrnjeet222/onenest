import { createFileRoute, Link } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/waitlist-form";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply · OneNest Newcastle Cohort 01" },
      // Paid-traffic landing page. It deliberately repeats the home page's
      // pitch, so letting it into the index would just split ranking signals
      // with `/` for the same terms.
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content:
          "Apply for a place in OneNest's first Newcastle cohort. Test physical retail in a major UK shopping centre without a lease, a fit-out or a hire.",
      },
    ],
    links: [{ rel: "canonical", href: "https://onenest.uk/apply" }],
  }),
  component: Apply,
});

const proof: Array<{ v: string; l: string }> = [
  { v: "70–80%", l: "Lower cost than a unit of your own" },
  { v: "26M+", l: "Annual centre visitors" },
  { v: "Zero", l: "Leases, hires or fit-out bills" },
];

const included = [
  "The mall lease, held by us — you never negotiate with a landlord",
  "Fit-out, fixtures and the shared shopfloor staff",
  "Footfall and sales data on every product you put out",
  "A short licence you can leave, not a ten-year commitment",
];

function Apply() {
  return (
    <div className="min-h-screen bg-forest text-paper font-body relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/15 rounded-full -mr-40 -mt-40 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-terracotta/15 rounded-full -ml-48 -mb-48 blur-3xl" />

      {/* Logo only. A full nav on a paid landing page just sells the visitor
          somewhere other than the form. */}
      <header className="relative max-w-7xl mx-auto px-6 pt-8 flex items-baseline justify-between">
        <Link
          to="/"
          className="font-display font-extrabold text-xl tracking-tighter uppercase text-peach"
        >
          One Nest
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
          Newcastle · Cohort 01
        </span>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-start">
          <div className="md:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-peach mb-4">
              Applications open · 4 slots
            </p>
            {/* Repeats the ad headline verbatim. If the creative changes, change
                this line with it — a mismatch here is what spikes bounce rate. */}
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance mb-6">
              Test the high street{" "}
              <span className="text-peach">without betting the brand.</span>
            </h1>
            <p className="text-paper/70 leading-relaxed max-w-md mb-10">
              Share a turn-key retail hub inside a major UK shopping centre. No
              mall lease, no fit-out bill, no hire. Prove your sales in physical
              retail, then scale across our network.
            </p>

            <dl className="grid grid-cols-3 gap-px bg-paper/15 border border-paper/15 mb-10">
              {proof.map((s) => (
                <div key={s.l} className="bg-forest p-5">
                  <dt className="font-display text-2xl md:text-3xl font-extrabold">
                    {s.v}
                  </dt>
                  <dd className="font-mono text-[9px] uppercase tracking-widest text-paper/50 mt-2 leading-relaxed">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50 mb-4">
              What the licence covers
            </p>
            <ul className="divide-y divide-paper/15 border-t border-paper/15">
              {included.map((c, i) => (
                <li key={c} className="py-4 flex items-baseline gap-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-peach w-6 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-sm text-paper/80 leading-relaxed">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form sits beside the headline rather than below the page, so ad
              traffic never has to scroll to convert. No ViewContent event here:
              it would fire on essentially every session and measure nothing. */}
          <div className="md:col-span-6 md:sticky md:top-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50 mb-3">
              Register your interest
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-6">
              Two questions. We'll reply in 7 working days.
            </h2>
            <WaitlistForm
              variant="compact"
              source="onenest-apply"
              submitLabel="Apply Now"
            />
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mt-5">
              Launching Q1 2027 · Pricing set per cohort
            </p>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-paper/15 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-paper/40">
          <span>© 2026 One Nest UK Ltd. · Newcastle Upon Tyne</span>
          <Link to="/" className="hover:text-peach transition-colors">
            Read the full story →
          </Link>
        </div>
      </footer>
    </div>
  );
}
