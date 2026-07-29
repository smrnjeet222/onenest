import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import heroKiosk from "@/assets/hero-kiosk.jpg?w=480;768;1024&format=avif;webp;jpg&as=picture";
import hubInterior from "@/assets/hub-interior.jpg?w=480;768;1200&format=avif;webp;jpg&as=picture";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OneNest · The retail incubator for indie brands" },
      {
        name: "description",
        content:
          "A retail incubator inside major UK shopping centres. Independent brands share a turn-key retail hub to test physical retail, then scale across our network. We hold the leases, so you never deal with a landlord. Launching Newcastle 2027.",
      },
      { name: "keywords", content: "retail incubator, shared retail, shopping centre retail, independent brands, indie brands, market traders, local makers, retail-as-a-service, Newcastle retail, mall landlords, founder story screens, omnichannel retail, indie brand marketplace" },
      { property: "og:title", content: "OneNest · The retail incubator for indie brands" },
      {
        property: "og:description",
        content:
          "Test physical retail in a major UK shopping centre without the mall lease, the fit-out or the hire. Share a turn-key retail hub, prove your sales, then scale. We deal with the landlords so you never do.",
      },
      { property: "og:url", content: "https://onenest.uk/" },
      { property: "og:image", content: "https://onenest.uk/og-banner.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "OneNest · a curated multi-brand retail hub inside a UK shopping centre" },
      { name: "twitter:title", content: "OneNest · The retail incubator for indie brands" },
      { name: "twitter:description", content: "Test physical retail in a major UK shopping centre without the mall lease, the fit-out or the hire. Prove your sales, then scale. We deal with the landlords so you never do." },
      { name: "twitter:image", content: "https://onenest.uk/og-banner.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://onenest.uk/" },
    ],
  }),
  component: Index,
});

const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address")
    .email("Enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  brand: z
    .string()
    .trim()
    .min(1, "Please enter your brand name")
    .max(100, "Brand name must be under 100 characters"),
});

type WaitlistErrors = Partial<Record<keyof z.infer<typeof waitlistSchema>, string>>;

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body selection:bg-terracotta/20">
      <SiteNav />
      <main>
        <Hero />
        <StatsStrip />
        <ProblemSection />
        <HowItWorks />
        <ConceptSection />
        <StayAndScaleSection />
        <DataPlatformSection />
        <StorytellingSection />
        <ForBrandsSection />
        <BuiltForSection />
        <LandlordsSection />
        <LocationsSection />
        <BrandDeckSection />
        <WaitlistSection />
        <SiteFooter />
      </main>
    </div>
  );
}

function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-display font-extrabold text-xl tracking-tighter uppercase text-terracotta">
          One Nest
        </a>
        <div className="hidden md:flex gap-7 text-xs font-semibold uppercase tracking-widest">
          <a href="#concept" className="hover:text-terracotta transition-colors">The Incubator</a>
          <a href="#how" className="hover:text-terracotta transition-colors">How It Works</a>
          <a href="#scale" className="hover:text-terracotta transition-colors">Scaling</a>
          <a href="#brands" className="hover:text-terracotta transition-colors">For Brands</a>
          <a href="#landlords" className="hover:text-terracotta transition-colors">For Landlords</a>
        </div>
        <a
          href="#waitlist"
          className="bg-ink text-paper px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="max-w-7xl mx-auto px-6 pt-12 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
        {/* Headline */}
        <div className="md:col-span-8 bg-paper border border-ink/10 p-10 flex flex-col justify-between animate-reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="px-2 py-0.5 bg-forest text-paper text-[10px] font-mono uppercase tracking-tighter">
                Launching 2027
              </span>
              <span className="text-[10px] font-mono text-ink/40 uppercase">Newcastle · Cohort 01</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter text-balance mb-6">
              THE RETAIL
              <br />
              <span className="text-terracotta">INCUBATOR</span> FOR
              <br />
              INDIE BRANDS.
            </h1>
            <p className="max-w-md text-lg text-ink/70 text-pretty leading-relaxed">
              Sell online, at markets, or straight from your kitchen table? This is your route into a real shopping centre. Share a turn-key retail hub, prove your sales, then scale across the network. We hold the leases, so you never deal with a landlord.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="bg-terracotta text-paper px-8 py-4 font-bold uppercase text-xs tracking-widest ring-1 ring-terracotta hover:bg-transparent hover:text-terracotta transition-all"
            >
              Apply for Next Cohort
            </a>
            <a
              href="#how"
              className="border border-ink/20 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-ink hover:text-paper transition-all"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-4 md:row-span-2 bg-peach/10 border border-ink/5 overflow-hidden group animate-reveal [animation-delay:150ms]">
          <picture>
            {Object.entries(heroKiosk.sources).map(([type, srcset]) => (
              <source key={type} type={`image/${type}`} srcSet={srcset} sizes="(min-width: 768px) 33vw, 100vw" />
            ))}
            <img
              src={heroKiosk.img.src}
              alt="Curated shelves of artisan products inside a One Nest shared retail kiosk"
              width={heroKiosk.img.w}
              height={heroKiosk.img.h}
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-700"
            />
          </picture>
        </div>

        {/* Cost compare */}
        <div className="md:col-span-4 bg-paper border border-ink/10 p-8 flex flex-col justify-between animate-reveal [animation-delay:200ms]">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-6">
            Your Own Mall Unit
          </div>
          <div>
            <div className="font-display text-5xl font-extrabold text-ink/80 line-through decoration-terracotta/60 decoration-[3px]">
              £3,000+
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-2">
              per month · plus fit-out &amp; staff
            </p>
          </div>
        </div>

        <a
          href="#waitlist"
          className="md:col-span-4 bg-terracotta text-paper p-8 flex flex-col justify-between animate-reveal [animation-delay:250ms] group hover:bg-ink transition-colors"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-paper/70 mb-6">
            One Nest · Retail Hub
          </div>
          <div>
            <div className="font-display text-5xl font-extrabold leading-[0.95]">
              A fraction
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/70 mt-2">
              of that · staff and fit-out included
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest mt-5 pt-4 border-t border-paper/25 flex items-center justify-between gap-2">
              <span>Apply for next cohort</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats: Array<{ p?: string; v: string; l: string }> = [
    { v: "70–80%", l: "Lower cost than a unit of your own" },
    { v: "26M+", l: "Annual centre visitors" },
    { p: "Up to", v: "4", l: "Brands per incubator cohort" },
    { v: "Zero", l: "Leases, hires or fit-out bills" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
        {stats.map((s) => (
          <div key={s.l} className="bg-paper p-8">
            <div className="flex items-baseline gap-2">
              {s.p && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  {s.p}
                </span>
              )}
              <span className="font-display text-4xl md:text-5xl font-extrabold text-forest">
                {s.v}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-3 leading-relaxed">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ index, total, name }: { index: string; total: string; name: string }) {
  return (
    <div className="flex items-baseline justify-between mb-8 px-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
        [ {index} / {total} ]  {name}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">
        One Nest · 2027
      </span>
    </div>
  );
}

function ProblemSection() {
  const items = [
    {
      tag: "Ceiling",
      h: "The Growth Ceiling",
      d: "Ads get dearer every year and markets only run at weekends. With nowhere permanent to find you, growth stalls at a stubborn ceiling.",
      stat: "Limited",
      sub: "reach without retail",
    },
    {
      tag: "Cost",
      h: "The Cost Barrier",
      d: "Your own mall unit means rent, a shop fit-out and hiring staff. Tens of thousands before your first sale.",
      stat: "£3,000+",
      sub: "per month for a unit",
    },
    {
      tag: "Risk",
      h: "The Risk Factor",
      d: "Multi-year leases and upfront costs mean one bad quarter can end a promising brand's journey.",
      stat: "70%",
      sub: "of new retail fails year 1",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="01" total="10" name="The Problem" />
      <div className="grid md:grid-cols-12 gap-4 items-end mb-10">
        <h2 className="md:col-span-8 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
          Going physical shouldn't be <span className="text-terracotta">all or nothing.</span>
        </h2>
        <p className="md:col-span-4 text-ink/70 leading-relaxed">
          Independent brands are stuck between selling online and at weekend markets forever, or signing a lease they can't back out of. There's no safe middle step onto a real shop floor.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i.h} className="border border-ink/10 p-8 bg-paper hover:border-terracotta/40 transition-colors flex flex-col gap-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta">
              {i.tag}
            </span>
            <div>
              <div className="font-display text-5xl font-extrabold text-ink mb-1">{i.stat}</div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">{i.sub}</p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">{i.h}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Apply to a Cohort",
      d: "Submit your brand for the next intake. We review product quality, brand values and fit with the other brands in the hub.",
    },
    {
      n: "02",
      t: "We Set Up Your Space",
      d: "One Nest owns the lease, the fit-out and the hub. Your branded section is built out and merchandised for you.",
    },
    {
      n: "03",
      t: "Our Staff Sell for You",
      d: "One trained staff member works the hub for the whole cohort, demoing, selling and answering questions on your behalf.",
    },
    {
      n: "04",
      t: "Build Your Track Record",
      d: "Live sales data, footfall and customer insight land in your dashboard. That's the evidence behind every decision about your next season.",
    },
  ];
  return (
    <section id="how" className="bg-ink text-paper py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8 px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
            [ 02 / 10 ]  How It Works
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/30">
            ~30 days to live
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-3xl mb-16">
          From application to shop floor in <span className="text-peach">four steps.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-paper/10 border border-paper/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-ink p-8 flex flex-col gap-6 hover:bg-forest/30 transition-colors">
              <span className="font-display text-6xl font-extrabold text-terracotta">{s.n}</span>
              <h3 className="font-display text-xl font-bold uppercase">{s.t}</h3>
              <p className="text-sm text-paper/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptSection() {
  const pillars = [
    {
      n: "01",
      t: "Share the hub",
      d: "Up to four complementary brands share one turn-key retail hub and one trained staff member, so nobody carries high-street rent, a hiring bill or a shop fit-out on their own.",
    },
    {
      n: "02",
      t: "Get real footfall & data",
      d: "You sell to thousands of real mall shoppers a week and see exactly what converts: units sold, peak hours, basket size, which products people actually pick up.",
    },
    {
      n: "03",
      t: "Scale on flexible terms",
      d: "As your numbers grow, so does your space: a bigger footprint in the hub, then more centres. We stay the mall's tenant on paper, so you expand on a short licence instead of a decade-long lease.",
    },
  ];
  return (
    <section id="concept" className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="03" total="10" name="The Incubator" />
      <div className="grid md:grid-cols-12 gap-4 items-end mb-10">
        <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
          Not a shop. <span className="text-forest">An incubator.</span>
        </h2>
        <p className="md:col-span-5 text-ink/70 leading-relaxed">
          One Nest is a retail incubator: a launchpad where independent brands test selling in real shopping malls without the risk of taking a unit. Online sellers, market traders and local makers, all in one curated, human-staffed retail hub.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-sage/25 border border-sage/25 mb-4">
        {pillars.map((p) => (
          <div key={p.n} className="bg-sage/10 p-8 md:p-10 flex flex-col gap-6">
            <span className="font-display text-5xl font-extrabold text-forest/70">{p.n}</span>
            <div>
              <h3 className="font-display text-2xl font-extrabold mb-3">{p.t}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{p.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-7 bg-forest text-paper p-8 md:p-10 flex flex-col justify-between gap-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
            What You Don't Pay For
          </span>
          <div>
            <div className="font-display text-3xl md:text-4xl font-extrabold leading-tight text-balance">
              No mall lease. No shop fit-out. No hiring.
            </div>
            <p className="text-sm text-paper/70 mt-4 leading-relaxed max-w-lg">
              Rent · fit-out · staff · POS · insurance · utilities. All owned and run by One Nest, and split across the cohort instead of landing on one brand.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 bg-paper border border-ink/10 p-8 flex flex-col justify-between gap-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
            Cohort Composition
          </span>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Up to</span>
              <span className="font-display text-7xl font-extrabold text-terracotta leading-none">4</span>
            </div>
            <p className="text-sm text-ink/60 mt-3">
              Curated, non-competing brands per hub, kept deliberately tight so every brand gets real shelf presence and the staff know your products properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StayAndScaleSection() {
  const tiers = [
    {
      n: "Tier 01",
      t: "Launch",
      m: "One centre · shared hub",
      d: "Your branded section of a turn-key retail hub inside your first shopping centre, live in weeks alongside a curated cohort.",
    },
    {
      n: "Tier 02",
      t: "Expand",
      m: "More space · prime position",
      d: "Strong numbers earn you a bigger share of the hub, better positioning and first refusal on the next intake.",
    },
    {
      n: "Tier 03",
      t: "Network",
      m: "Multi-centre · one agreement",
      d: "Roll out across our hubs in new cities under a single agreement, without rebuilding your operation in every location.",
    },
  ];
  const weHandle = [
    "The lease and the landlord relationship",
    "The covenant, guarantee and exit risk",
    "Counter build, fit-out and upkeep",
    "Staffing, rotas and product training",
    "POS, insurance, utilities and compliance",
  ];
  const youHandle = [
    "Your products and your stock",
    "Your brand, your story, your pricing",
    "When you're ready for more space",
  ];
  return (
    <section id="scale" className="bg-paper border-y border-ink/10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel index="04" total="10" name="Scaling With Us" />
        <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
          <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
            One hub today. <span className="text-terracotta">A national footprint next.</span>
          </h2>
          <p className="md:col-span-5 text-ink/70 leading-relaxed">
            We don't just hand you a shelf and wish you luck. Every step up is earned on your own trading data and unlocked by us, so growth is a commercial decision instead of a leap of faith.
          </p>
        </div>

        {/* Growth tiers */}
        <ol className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10 mb-4">
          {tiers.map((t, i) => (
            <li
              key={t.n}
              className={`p-8 md:p-10 flex flex-col gap-6 ${
                i === 2 ? "bg-forest text-paper" : "bg-paper hover:bg-sage/10 transition-colors"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    i === 2 ? "text-paper/60" : "text-ink/40"
                  }`}
                >
                  {t.n}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    i === 2 ? "text-peach" : "text-terracotta"
                  }`}
                >
                  {t.m}
                </span>
              </div>
              <h3 className="font-display text-3xl font-extrabold uppercase">{t.t}</h3>
              <p className={`text-sm leading-relaxed ${i === 2 ? "text-paper/75" : "text-ink/65"}`}>
                {t.d}
              </p>
            </li>
          ))}
        </ol>

        {/* Division of risk */}
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-5 border border-ink/10 overflow-hidden min-h-64">
            <picture>
              {Object.entries(hubInterior.sources).map(([type, srcset]) => (
                <source key={type} type={`image/${type}`} srcSet={srcset} sizes="(min-width: 768px) 40vw, 100vw" />
              ))}
              <img
                src={hubInterior.img.src}
                alt="Staffed One Nest multi-brand retail hub inside a UK shopping centre"
                width={hubInterior.img.w}
                height={hubInterior.img.h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          <div className="md:col-span-7 bg-ink text-paper p-8 md:p-10 flex flex-col gap-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
                How The Risk Splits
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tighter leading-[0.95] text-balance mt-6 mb-5">
                We carry the property. <span className="text-peach">You carry the brand.</span>
              </h3>
              <p className="text-sm text-paper/70 leading-relaxed max-w-xl">
                One Nest sits between you and the shopping centre. We hold the lease and negotiate as one established tenant rather than four small ones, so you reach prime space on a short, renewable licence with us instead of a decade of property risk in your name. Every tier above runs on the same terms, so growing your footprint never means starting the paperwork again.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
              <div className="bg-ink p-6 flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-peach">
                  One Nest handles
                </span>
                <ul className="grid gap-2.5 text-sm">
                  {weHandle.map((b) => (
                    <li key={b} className="flex gap-3 text-paper/80">
                      <span className="font-mono text-peach">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink p-6 flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
                  You handle
                </span>
                <ul className="grid gap-2.5 text-sm">
                  {youHandle.map((b) => (
                    <li key={b} className="flex gap-3 text-paper/80">
                      <span className="font-mono text-paper/40">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataPlatformSection() {
  const features = [
    {
      t: "One Live Feed",
      d: "Counter sales and marketplace orders land in the same place, so you see the whole picture, not half of it.",
    },
    {
      t: "Your Own Storefront",
      d: "A listing for every brand in the cohort, live from day one, with cross-discovery between neighbouring brands.",
    },
    {
      t: "Scan To Buy",
      d: "Counter QR codes land straight on your product page, so a browse in the mall can still close as a sale.",
    },
    {
      t: "Performance Analytics",
      d: "What's selling, peak trading hours, and how you compare to the other brands in the hub.",
    },
    {
      t: "Customer Insights",
      d: "Learn who's actually buying, in person and online, so your next product call isn't guesswork.",
    },
    {
      t: "Always On",
      d: "Your storefront stays live between trading seasons and follows you into every centre you open in.",
    },
  ];
  return (
    <section id="platform" className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="05" total="10" name="Platform & Marketplace" />
      <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
        <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
          Sell in the mall. Sell online. <span className="text-terracotta">Run both from one place.</span>
        </h2>
        <p className="md:col-span-5 text-ink/70 leading-relaxed">
          Every brand gets a live dashboard and a storefront on the One Nest marketplace. Most shoppers don't buy on the first pass, so when someone picks your product up and puts it back, they can scan the hub screen and buy that evening from the sofa.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-4 mb-4">
        {/* Mock dashboard */}
        <div className="md:col-span-7 bg-ink text-paper p-6 md:p-8 flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
              one-nest / dashboard
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper/50">
              <span className="size-1.5 bg-sage rounded-full animate-pulse" />
              Live · just now
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="border border-paper/10 p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Today's Revenue</p>
              <p className="font-display text-3xl font-extrabold mt-1.5">£847.50</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-sage mt-1.5">
                ↑ +23% vs yesterday
              </p>
            </div>
            <div className="border border-paper/10 p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Last Sale</p>
              <p className="font-display text-3xl font-extrabold mt-1.5">£24.99</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-peach mt-1.5">
                Just now · scanned in store
              </p>
            </div>
          </div>

          {/* Bar chart. Each pair is [in-store %, online %] of the plot height. */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mb-3">
              7-day sales · in store vs online
            </p>
            <div className="flex items-end gap-1.5 h-24">
              {[
                [30, 12],
                [40, 18],
                [33, 14],
                [48, 23],
                [45, 20],
                [58, 30],
                [50, 26],
              ].map(([inStore, online], i) => (
                <div key={i} className="flex-1 h-full flex flex-col justify-end gap-0.5">
                  <div className="w-full bg-terracotta/80" style={{ height: `${inStore}%` }} />
                  <div className="w-full bg-sage/60" style={{ height: `${online}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 font-mono text-[9px] uppercase tracking-widest text-paper/30">
              {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>

          <div className="border-t border-paper/10 pt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-paper/40">
            <span>Cohort 01 · Newcastle</span>
            <span className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="size-2 bg-terracotta/80" /> In store
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 bg-sage/60" /> Online
              </span>
            </span>
          </div>
        </div>

        {/* Mock marketplace */}
        <div className="md:col-span-5 bg-forest text-paper p-6 md:p-8 flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-paper/60">
              onenest.uk / shop
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper/60">
              <span className="size-1.5 bg-peach rounded-full animate-pulse" />
              4 brands live
            </span>
          </div>

          <ul className="grid divide-y divide-paper/15 border-y border-paper/15">
            {[
              { tone: "bg-terracotta", k: "Brand 01", c: "Skincare" },
              { tone: "bg-peach", k: "Brand 02", c: "Candles" },
              { tone: "bg-sage", k: "Brand 03", c: "Wellness" },
              { tone: "bg-paper/70", k: "Brand 04", c: "Accessories" },
            ].map((t) => (
              <li key={t.k} className="flex items-center gap-4 py-3">
                <span className={`size-9 shrink-0 ${t.tone}`} />
                <span className="flex-1">
                  <span className="block font-display font-bold text-sm">{t.k}</span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-paper/50 mt-0.5">
                    {t.c}
                  </span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-peach">
                  In stock
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-paper/50">
            <span>Discovered in store</span>
            <span className="text-peach">Bought online</span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
        {features.map((f, i) => (
          <div
            key={f.t}
            className="bg-paper p-6 flex gap-5 hover:bg-sage/10 transition-colors"
          >
            <div className="font-display text-xl font-extrabold text-terracotta w-8 shrink-0">
              0{i + 1}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">{f.t}</h3>
              <p className="text-sm text-ink/60 mt-1 leading-relaxed">{f.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StorytellingSection() {
  const forBrands = [
    "A 15-second founder film on loop beside your products",
    "A QR code straight through to your marketplace listing",
    "Your own colours, packaging shots and voice, not a shelf label",
    "Screen time rotates across the cohort through the trading day",
  ];
  const forLandlords = [
    "A living, moving visual asset on the concourse",
    "No static printed signage going stale by month three",
    "Omnichannel sales: buy in the hub, or scan and buy later",
    "Fresh content every cohort, so the space never looks tired",
  ];
  const upNext = [
    { k: "Brand 02", c: "Candles" },
    { k: "Brand 03", c: "Wellness" },
    { k: "Brand 04", c: "Accessories" },
  ];
  return (
    <section id="storytelling" className="bg-sage/10 border-y border-sage/20 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel index="06" total="10" name="Digital Storytelling" />
        <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
          <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
            Product gets attention. <span className="text-terracotta">Story gets the sale.</span>
          </h2>
          <p className="md:col-span-5 text-ink/70 leading-relaxed">
            Screens built into the hub carry short founder films, so shoppers meet the person behind the product. Staffed selling up front, your story running behind it.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {/* Screen mock */}
          <div className="md:col-span-5 bg-ink text-paper p-6 md:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-2 text-paper/50">
                <span className="size-1.5 bg-terracotta rounded-full animate-pulse" />
                On screen now
              </span>
              <span className="text-paper/50">00:15</span>
            </div>

            <div className="border border-paper/10 p-6 flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-peach">
                Founder Story
              </span>
              <p className="font-display text-2xl md:text-3xl font-extrabold leading-[1.05] text-balance">
                &ldquo;I started this in my kitchen in Gateshead.&rdquo;
              </p>
              <p className="text-sm text-paper/60 leading-relaxed">
                Your brand. Your face. Fifteen seconds, on loop, right where a shopper is already standing.
              </p>
              <div className="h-1 bg-paper/10">
                <div className="h-full w-2/3 bg-terracotta" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
                Up next
              </span>
              <ul className="divide-y divide-paper/10 border-y border-paper/10">
                {upNext.map((u) => (
                  <li key={u.k} className="flex items-center justify-between gap-4 py-3">
                    <span className="flex items-baseline gap-3">
                      <span className="font-display font-bold text-sm">{u.k}</span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-paper/40">
                        {u.c}
                      </span>
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-paper/40">
                      00:15
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
                Rotates all day · every brand in the hub
              </p>
            </div>
          </div>

          {/* Two audiences */}
          <div className="md:col-span-7 grid gap-4">
            <div className="bg-paper border border-ink/10 p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta">
                  For Brands
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">
                  Shelf presence + story
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-balance">
                A shelf can't explain why you started. A screen can.
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {forBrands.map((b) => (
                  <li key={b} className="flex gap-3 text-ink/70">
                    <span className="font-mono text-terracotta">+</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-forest text-paper p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-peach">
                  For Landlords
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
                  Concourse asset
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-balance">
                An interactive unit on your concourse, not another static display.
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {forLandlords.map((b) => (
                  <li key={b} className="flex gap-3 text-paper/80">
                    <span className="font-mono text-peach">+</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForBrandsSection() {
  const benefits = [
    "Test physical retail on a short licence",
    "No shop fit-out or hiring costs",
    "70–80% cheaper than a unit of your own",
    "A trained staff member sells for you",
    "Real mall footfall and sales data",
    "We carry the mall lease, not you",
    "Screen story plus a marketplace storefront",
    "Scale into more space and more cities",
  ];
  return (
    <section id="brands" className="bg-terracotta text-paper py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8 px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/60">
            [ 07 / 10 ]  For Brands
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
            Cohort 01 · Applications open
          </span>
        </div>
        <div className="grid md:grid-cols-12 gap-4 mb-12">
          <h2 className="md:col-span-8 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
            Real shop floor. <span className="text-ink">None of the risk.</span>
          </h2>
          <p className="md:col-span-4 text-paper/80 leading-relaxed">
            Join a cohort and get your brand into a major UK shopping centre. You bring the products; we handle the space, the staff, the systems and the data, then split the cost across every brand in the hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15 border border-paper/15 mb-10">
          {benefits.map((b, i) => (
            <div key={b} className="bg-terracotta p-6 flex items-center gap-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50 w-8">
                0{i + 1}
              </span>
              <span className="font-medium">{b}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#waitlist"
            className="bg-paper text-terracotta px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-ink hover:text-paper transition-colors"
          >
            Apply for Next Cohort
          </a>
          <a
            href="mailto:partnership@onenest.uk"
            className="border border-paper/50 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-paper hover:text-terracotta transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}

function BuiltForSection() {
  const cats = [
    "Beauty",
    "Fragrance",
    "Skincare",
    "Wellness",
    "Lifestyle",
    "Tech Accessories",
    "Sustainable Brands",
    "Fashion & Accessories",
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="08" total="10" name="Built For" />
      <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
        <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
          Brands we're <span className="text-terracotta">built for.</span>
        </h2>
        <p className="md:col-span-5 text-ink/70 leading-relaxed">
          Independent beauty, lifestyle, wellness and tech brands taking their first step into permanent retail. Online-first, market-tested or hand-made, with enough traction to sell but not enough to sign a lease.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
        {cats.map((c, i) => (
          <div
            key={c}
            className="bg-paper p-8 flex flex-col gap-6 hover:bg-sage/10 transition-colors group"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">
              0{i + 1}
            </span>
            <span className="font-display text-2xl font-extrabold group-hover:text-forest transition-colors">
              {c}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function LandlordsSection() {
  const points = [
    {
      t: "Fresh, local indie brands",
      d: "We bring in curated, vetted independent brands your shoppers can't find anywhere else. The kind of line-up that makes a centre feel local instead of identikit.",
    },
    {
      t: "A feeder pipeline for tenants",
      d: "We incubate brands until they're proven traders, then grow them into more of your centre, either expanding with us or taking a unit of their own. Either way your next long-term tenant already has a sales record inside your building.",
    },
    {
      t: "One operator, one contract",
      d: "You deal with One Nest, not four separate small brands. We hold the agreement, staff the space and run the hub to your centre's standards.",
    },
  ];
  return (
    <section id="landlords" className="bg-ink text-paper py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8 px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
            [ 09 / 10 ]  For Landlords
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/30">
            Centre &amp; asset managers
          </span>
        </div>
        <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
          <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
            We grow your <span className="text-peach">next long&#8209;term tenants.</span>
          </h2>
          <p className="md:col-span-5 text-paper/70 leading-relaxed">
            One Nest fills space with fresh local brands today and turns the best of them into full-unit tenants tomorrow. Think of us as an incubator floor for your centre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-paper/10 border border-paper/10 mb-10">
          {points.map((p) => (
            <div key={p.t} className="bg-ink p-8 flex flex-col gap-4 hover:bg-forest/30 transition-colors">
              <h3 className="font-display text-2xl font-extrabold">{p.t}</h3>
              <p className="text-sm text-paper/60 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>

        <a
          href="mailto:partnership@onenest.uk?subject=One%20Nest%20Landlord%20Enquiry"
          className="inline-block bg-peach text-ink px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-paper transition-colors"
        >
          Talk to Us About Your Centre →
        </a>
      </div>
    </section>
  );
}

function LocationsSection() {
  const cities = [
    { name: "Newcastle", status: "Launching 2027", live: true },
    { name: "Glasgow", status: "Coming Soon" },
    { name: "Manchester", status: "Coming Soon" },
    { name: "Leeds", status: "Coming Soon" },
    { name: "Birmingham", status: "Coming Soon" },
    { name: "London", status: "Coming Soon" },
    { name: "Edinburgh", status: "Coming Soon" },
  ];
  return (
    <section id="locations" className="bg-sage/10 border-y border-sage/20 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel index="10" total="10" name="Our Vision · Locations" />
        <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
          <h2 className="md:col-span-8 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance text-forest">
            Starting in Newcastle. <span className="text-terracotta">Expanding across the UK.</span>
          </h2>
          <p className="md:col-span-4 text-ink/70 leading-relaxed">
            Our first incubator hub opens in Newcastle in 2027, with plans to expand to major UK cities. Join early and grow with us.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {/* City list */}
          <ol className="md:col-span-7 grid gap-px bg-forest/15 border border-forest/15">
            {cities.map((c, i) => (
              <li
                key={c.name}
                className={`p-6 flex items-center justify-between gap-6 ${
                  c.live ? "bg-forest text-paper" : "bg-paper"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${
                      c.live ? "text-paper/60" : "text-ink/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="font-display text-2xl md:text-3xl font-extrabold">{c.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {c.live && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peach opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-peach" />
                    </span>
                  )}
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${
                      c.live ? "text-peach" : "text-ink/50"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          {/* Stylised UK map */}
          <div className="md:col-span-5 bg-paper border border-forest/15 p-8 flex flex-col self-stretch">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/35 mb-4">
              Planned UK Network
            </div>
            <div className="flex-1 relative min-h-0">
            <svg
              viewBox="0 0 200 290"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Planned UK city network"
            >
              {/* Great Britain outline: coordinates projected from real lat/lon */}
              <path
                d="M72,12 L100,42 L98,60 L82,94 L100,103
                   L120,138 L153,173 L183,194 L194,209
                   L168,238 L183,252 L156,265 L122,263
                   L65,268 L47,276 L7,286
                   L37,256 L63,246 L52,236
                   L27,234 L48,211 L31,197
                   L41,179 L70,179 L74,166
                   L60,142 L66,133 L25,128
                   L34,113 L31,98 L6,118
                   L13,83 L4,64 L25,12 L66,11 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinejoin="round"
                className="text-forest/35"
              />
              {/* City markers: positions from real coordinates */}
              {[
                { x: 70, y: 97,  label: "Edinburgh", anchor: "start" as const },
                { x: 44, y: 99,  label: "Glasgow",   anchor: "end"   as const },
                { x: 110, y: 128, label: "Newcastle", live: true, anchor: "start" as const },
                { x: 111, y: 165, label: "Leeds",     anchor: "start" as const },
                { x: 94, y: 175,  label: "Manchester", anchor: "end"  as const },
                { x: 103, y: 208, label: "Birmingham", anchor: "start" as const },
                { x: 147, y: 240, label: "London",     anchor: "start" as const },
              ].map((c) => (
                <g key={c.label}>
                  {c.live && (
                    <>
                      <circle cx={c.x} cy={c.y} r="4" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-terracotta/60">
                        <animate attributeName="r" values="4;12" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={c.x} cy={c.y} r="4" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-terracotta/60">
                        <animate attributeName="r" values="4;12" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                      </circle>
                    </>
                  )}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.live ? 4 : 2.5}
                    className={c.live ? "fill-terracotta" : "fill-forest/70"}
                  />
                  <text
                    x={c.anchor === "end" ? c.x - 7 : c.x + 7}
                    y={c.y + 3}
                    textAnchor={c.anchor}
                    className={`font-mono text-[6px] uppercase tracking-wide ${
                      c.live ? "fill-terracotta font-bold" : "fill-ink/70"
                    }`}
                  >
                    {c.label}
                  </text>
                </g>
              ))}
            </svg>
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-2 text-terracotta">
                <span className="size-2 bg-terracotta rounded-full" /> Launching 2027
              </span>
              <span className="flex items-center gap-2 text-ink/50">
                <span className="size-2 bg-forest/70 rounded-full" /> Planned
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandDeckSection() {
  const items = [
    { k: "Pages", v: "24" },
    { k: "Format", v: "PDF" },
    { k: "Size", v: "~6 MB" },
    { k: "Updated", v: "Q2 2026" },
  ];
  const contents = [
    "Market opportunity & UK retail landscape",
    "The incubator model, hub design & screen media",
    "Commercial terms, cohort pricing & licence length",
    "Dashboard and marketplace walkthrough",
    "Newcastle Cohort 01 floorplan & footfall projections",
    "The path from one shelf to a multi-centre footprint",
  ];
  return (
    <section id="deck" className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="00" total="10" name="Brand Deck" />
      <div className="grid md:grid-cols-12 gap-4">
        {/* Deck preview card */}
        <div className="md:col-span-5 bg-ink text-paper p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 12px)",
          }} />
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
              one-nest_brand-deck_v3.pdf
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-peach">
              Confidential
            </span>
          </div>
          <div className="relative">
            <div className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6">
              The Brand Deck
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              Everything a brand needs to evaluate the incubator in one document.
            </h3>
          </div>
          <div className="relative grid grid-cols-4 gap-px bg-paper/10 border border-paper/10">
            {items.map((m) => (
              <div key={m.k} className="bg-ink p-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-paper/40">
                  {m.k}
                </p>
                <p className="font-display text-xl font-extrabold mt-2">{m.v}</p>
              </div>
            ))}
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="bg-terracotta text-paper px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-peach hover:text-ink transition-colors"
            >
              Request Deck
            </a>
            <a
              href="mailto:partnership@onenest.uk?subject=Brand%20Deck%20Request"
              className="border border-paper/30 px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-paper hover:text-ink transition-colors"
            >
              Email Founder
            </a>
          </div>
        </div>

        {/* Contents list */}
        <div className="md:col-span-7 bg-paper border border-ink/10 p-8 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl font-extrabold uppercase">What's inside</h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
              Table of Contents
            </span>
          </div>
          <ol className="divide-y divide-ink/10">
            {contents.map((c, i) => (
              <li key={c} className="py-4 flex items-baseline gap-6 hover:text-terracotta transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta w-8">
                  0{i + 1}
                </span>
                <span className="flex-1 text-sm md:text-base">{c}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">
                  PG · {String((i + 1) * 3).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function WaitlistForm() {
  const [values, setValues] = useState({ name: "", email: "", brand: "" });
  const [errors, setErrors] = useState<WaitlistErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = waitlistSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: WaitlistErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof WaitlistErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    const endpoint = "https://formspree.io/f/maqkkedn";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...result.data, source: "onenest-landing" }),
      });
      if (!res.ok) {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = (await res.json()) as { errors?: Array<{ message?: string }> };
          if (data.errors?.[0]?.message) msg = data.errors[0].message;
        } catch {
          /* ignore */
        }
        throw new Error(msg);
      }
      setSuccess(true);
      toast.success("You're on the waitlist. We'll be in touch.");
      setValues({ name: "", email: "", brand: "" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-paper/10 border border-paper/30 p-8 md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-widest text-peach mb-3">
          Confirmed · Application received
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
          You're in for Newcastle Cohort 01.
        </h3>
        <p className="text-paper/70 text-sm leading-relaxed mb-6">
          We'll review your brand and reply within 7 working days. In the meantime, request the brand deck or email the founder directly.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="font-mono text-[10px] uppercase tracking-widest text-peach hover:text-paper transition-colors"
        >
          ← Submit another brand
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="bg-paper/10 border border-paper/20 p-8 md:p-10 grid gap-6">
      {/* Honeypot: real users never fill this */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <Field
        id="name"
        label="Your Name"
        value={values.name}
        onChange={(v) => setValues((s) => ({ ...s, name: v }))}
        error={errors.name}
        autoComplete="name"
        maxLength={100}
      />
      <Field
        id="email"
        type="email"
        label="Email Address"
        value={values.email}
        onChange={(v) => setValues((s) => ({ ...s, email: v }))}
        error={errors.email}
        autoComplete="email"
        maxLength={255}
        required
      />
      <Field
        id="brand"
        label="Brand Name"
        value={values.brand}
        onChange={(v) => setValues((s) => ({ ...s, brand: v }))}
        error={errors.brand}
        autoComplete="organization"
        maxLength={100}
      />
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between pt-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
          We'll never share your details. UK GDPR compliant.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="bg-terracotta text-paper px-8 py-4 text-xs font-bold uppercase tracking-widest ring-1 ring-terracotta hover:bg-peach hover:text-ink transition-colors disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Apply for Next Cohort"}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  maxLength,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-widest text-paper/60">
        {label}
        {required && <span className="text-peach ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required={required}
        aria-required={required || undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`bg-paper/5 border ${
          error ? "border-peach" : "border-paper/20"
        } px-4 py-4 text-sm text-paper placeholder:text-paper/60 focus:outline-none focus:bg-paper/15 focus:border-paper/60 transition-colors`}
      />
      {error && (
        <p id={`${id}-error`} className="font-mono text-[10px] uppercase tracking-widest text-peach">
          {error}
        </p>
      )}
    </div>
  );
}

function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-forest text-paper py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/15 rounded-full -mr-40 -mt-40 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-terracotta/15 rounded-full -ml-48 -mb-48 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8 px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
            Apply Now · Cohort 01
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
            4 curated slots per cohort
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-4 items-start">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance mb-6">
              Test the high street <span className="text-peach">without betting the brand.</span>
            </h2>
            <p className="text-paper/70 leading-relaxed max-w-md mb-10">
              Apply for a place in our first Newcastle cohort, launching early 2027. Pricing is set per cohort, so tell us about your brand and we'll talk numbers that fit it.
            </p>
            <dl className="grid grid-cols-2 gap-px bg-paper/15 border border-paper/15 max-w-md">
              {[
                { k: "Launch", v: "Q1 2027" },
                { k: "City", v: "Newcastle" },
                { k: "Cohort", v: "4 brands" },
                { k: "Term", v: "Flexible" },
              ].map((m) => (
                <div key={m.k} className="bg-forest p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
                    {m.k}
                  </dt>
                  <dd className="font-display text-2xl font-extrabold mt-1">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50 mb-3">
              Register Your Interest
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-6">
              Apply for a place in the next cohort.
            </h3>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-paper border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display font-extrabold text-3xl tracking-tighter uppercase text-terracotta">
            One Nest
          </div>
          <p className="text-sm text-ink/60 mt-4 max-w-sm leading-relaxed">
            A retail incubator for independent brands. Turn-key multi-brand retail hubs in real shopping centres, and room to scale without taking on a mall lease of your own.
          </p>
        </div>
        <div className="md:col-span-2 grid gap-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Navigate</p>
          <a href="#concept" className="hover:text-terracotta transition-colors">The Incubator</a>
          <a href="#how" className="hover:text-terracotta transition-colors">How It Works</a>
          <a href="#scale" className="hover:text-terracotta transition-colors">Scaling</a>
          <a href="#platform" className="hover:text-terracotta transition-colors">Platform &amp; Marketplace</a>
          <a href="#storytelling" className="hover:text-terracotta transition-colors">Storytelling</a>
        </div>
        <div className="md:col-span-2 grid gap-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Company</p>
          <a href="#brands" className="hover:text-terracotta transition-colors">For Brands</a>
          <a href="#landlords" className="hover:text-terracotta transition-colors">For Landlords</a>
          <a href="#locations" className="hover:text-terracotta transition-colors">Locations</a>
          <a href="#deck" className="hover:text-terracotta transition-colors">Brand Deck</a>
        </div>
        <div className="md:col-span-3 grid gap-4 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Contact</p>
          <a href="mailto:partnership@onenest.uk" className="flex items-center gap-3 hover:text-terracotta transition-colors">
            <Mail size={16} className="text-[#C9A84C] shrink-0" />
            partnership@onenest.uk
          </a>
          <span className="flex items-center gap-3 text-ink/70">
            <MapPin size={16} className="text-[#C9A84C] shrink-0" />
            Newcastle Upon Tyne, UK
          </span>
          <a
            href="https://www.linkedin.com/company/onenest-smarthub/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-terracotta transition-colors"
          >
            <Linkedin size={16} className="text-[#C9A84C] shrink-0" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-ink/40">
          <span>© 2026 One Nest UK Ltd. · Newcastle Upon Tyne</span>
          <span>Built for the new high street</span>
        </div>
      </div>
    </footer>
  );
}
