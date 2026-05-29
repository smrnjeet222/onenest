import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import heroKiosk from "@/assets/hero-kiosk.jpg?w=480;768;1024&format=avif;webp;jpg&as=picture";
import hubInterior from "@/assets/hub-interior.jpg?w=480;768;1200&format=avif;webp;jpg&as=picture";
import smartKiosk from "@/assets/smart-kiosk.jpg?w=480;768;1280&format=avif;webp;jpg&as=picture";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OneNest — Shared retail hubs in UK shopping centres" },
      {
        name: "description",
        content:
          "Curated, intelligent shared kiosks for independent brands inside major UK shopping centres. High-street presence from £600/month. Launching Newcastle 2027.",
      },
      { name: "keywords", content: "shared retail, pop-up kiosk, UK shopping centres, independent brands, retail-as-a-service, Newcastle retail, brand kiosk" },
      { property: "og:title", content: "OneNest — Shared retail for the indie brave" },
      {
        property: "og:description",
        content:
          "Curated, intelligent kiosks in major UK shopping centres. High-street presence for the cost of a studio space.",
      },
      { property: "og:url", content: "https://onenest.uk/" },
      { property: "og:image", content: "https://onenest.uk/og-banner.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "OneNest — three boutique shared kiosks inside a UK shopping centre" },
      { name: "twitter:title", content: "OneNest — Shared retail for the indie brave" },
      { name: "twitter:description", content: "Curated, intelligent kiosks in major UK shopping centres. High-street presence for the cost of a studio space." },
      { name: "twitter:image", content: "https://onenest.uk/og-banner.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://onenest.uk/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "OneNest",
          url: "https://onenest.uk/",
          inLanguage: "en-GB",
          description:
            "Curated, intelligent shared kiosks for independent brands inside major UK shopping centres.",
        }),
      },
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
        <RoadmapSection />
        <DataPlatformSection />
        <ForBrandsSection />
        <BuiltForSection />
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
          <a href="#concept" className="hover:text-terracotta transition-colors">Concept</a>
          <a href="#how" className="hover:text-terracotta transition-colors">How It Works</a>
          <a href="#platform" className="hover:text-terracotta transition-colors">Platform</a>
          <a href="#brands" className="hover:text-terracotta transition-colors">For Brands</a>
          <a href="#locations" className="hover:text-terracotta transition-colors">Locations</a>
        </div>
        <a
          href="#waitlist"
          className="bg-ink text-paper px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
        >
          Join Waitlist
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
              <span className="text-[10px] font-mono text-ink/40 uppercase">Newcastle · Hub 01</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter text-balance mb-6">
              SHARED RETAIL
              <br />
              <span className="text-terracotta">FOR THE INDIE</span> BRAVE.
            </h1>
            <p className="max-w-md text-lg text-ink/70 text-pretty leading-relaxed">
              Data-intelligent shared retail hubs inside the UK's biggest shopping centres. Your brand. Your kiosk. Shared space, shared costs.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#brands"
              className="bg-terracotta text-paper px-8 py-4 font-bold uppercase text-xs tracking-widest ring-1 ring-terracotta hover:bg-transparent hover:text-terracotta transition-all"
            >
              For Brands
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
            UK Retail · Avg
          </div>
          <div>
            <div className="font-display text-5xl font-extrabold text-ink/80 line-through decoration-terracotta/60 decoration-[3px]">
              £3,000+
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-2">per month</p>
          </div>
        </div>

        <div className="md:col-span-4 bg-terracotta text-paper p-8 flex flex-col justify-between animate-reveal [animation-delay:250ms]">
          <div className="font-mono text-[10px] uppercase tracking-widest text-paper/70 mb-6">
            One Nest · Shared Hub
          </div>
          <div>
            <div className="font-display text-5xl font-extrabold">From £600</div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/70 mt-2">per month, all-in</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { v: "70–80%", l: "Cost savings vs traditional units" },
    { v: "26M+", l: "Annual centre visitors" },
    { v: "3–6", l: "Brands per curated hub" },
    { v: "Top UK", l: "Shopping centre locations" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
        {stats.map((s) => (
          <div key={s.l} className="bg-paper p-8">
            <div className="font-display text-4xl md:text-5xl font-extrabold text-forest">{s.v}</div>
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
      h: "The Market Stall Ceiling",
      d: "Great for starting out, but limited footfall and no permanent presence keeps brands from scaling.",
      stat: "Limited",
      sub: "footfall growth",
    },
    {
      tag: "Cost",
      h: "The Cost Barrier",
      d: "Traditional retail units cost thousands per month — impossible for most independent brands to afford.",
      stat: "£3,000+",
      sub: "per month for retail",
    },
    {
      tag: "Risk",
      h: "The Risk Factor",
      d: "Long leases and upfront costs mean one bad quarter can end a promising brand's journey.",
      stat: "70%",
      sub: "of new retail fails year 1",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="01" total="08" name="The Problem" />
      <div className="grid md:grid-cols-12 gap-4 items-end mb-10">
        <h2 className="md:col-span-8 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
          Retail shouldn't be <span className="text-terracotta">this hard.</span>
        </h2>
        <p className="md:col-span-4 text-ink/70 leading-relaxed">
          Independent brands are stuck between expensive retail units they can't afford and market stalls that limit their growth.
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
      t: "Apply Online",
      d: "Submit your brand for consideration. We review product quality, brand values and fit with other hub brands.",
    },
    {
      n: "02",
      t: "We Set Up Your Space",
      d: "One Nest installs and owns everything. Your branded section is ready within our premium shared hub.",
    },
    {
      n: "03",
      t: "Customers Buy Your Products",
      d: "Staff assist customers or they pay via contactless. Your products are displayed alongside complementary brands.",
    },
    {
      n: "04",
      t: "Track Sales in Real-Time",
      d: "Access your dashboard to see live sales data, customer insights and performance analytics from anywhere.",
    },
  ];
  return (
    <section id="how" className="bg-ink text-paper py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8 px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
            [ 02 / 08 ]  How It Works
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/30">
            ~30 days to live
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl mb-16">
          From application to sales in <span className="text-peach">four steps.</span>
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
  const categories = [
    "Beauty & Skincare",
    "Fragrance & Candles",
    "Lifestyle & Wellness",
    "Sustainable Products",
    "Tech Accessories",
    "Fashion & Accessories",
  ];
  return (
    <section id="concept" className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="03" total="08" name="The Concept" />
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-7 bg-sage/10 border border-sage/20 p-10 md:p-14">
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8">
            Your brand.
            <br />
            Your kiosk.
            <br />
            <span className="text-forest">Shared space.</span>
          </h2>
          <p className="text-ink/70 leading-relaxed max-w-md mb-10">
            3–6 brands share one premium hub inside a major shopping centre. Each with their own fully branded kiosk. Rent, staffing and costs split between all brands.
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 border border-forest/30 text-forest text-[10px] font-mono uppercase tracking-widest"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 grid grid-rows-2 gap-4">
          <div className="bg-paper border border-ink/10 p-8 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Hub Composition</span>
            <div>
              <div className="font-display text-7xl font-extrabold text-terracotta">3–6</div>
              <p className="text-sm text-ink/60 mt-2">Curated complementary brands per hub.</p>
            </div>
          </div>
          <div className="bg-forest text-paper p-8 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">Shared Model</span>
            <div>
              <div className="font-display text-4xl font-extrabold">All-in-one</div>
              <p className="text-sm text-paper/70 mt-2 leading-relaxed">
                Rent · fit-out · staff · POS · insurance · utilities — handled by One Nest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section className="bg-paper border-y border-ink/10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel index="04" total="08" name="Our Roadmap" />
        <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
          <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Two phases. <span className="text-terracotta">One vision.</span>
          </h2>
          <p className="md:col-span-5 text-ink/70 leading-relaxed">
            We're building the future of independent retail — starting with staffed hubs and evolving to fully automated smart kiosks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Phase 1 */}
          <div className="border border-ink/10 bg-paper flex flex-col">
            <div className="aspect-[16/10] overflow-hidden border-b border-ink/10">
              <picture>
                {Object.entries(hubInterior.sources).map(([type, srcset]) => (
                  <source key={type} type={`image/${type}`} srcSet={srcset} sizes="(min-width: 768px) 50vw, 100vw" />
                ))}
                <img
                  src={hubInterior.img.src}
                  alt="Premium staffed retail hub inside shopping centre"
                  width={hubInterior.img.w}
                  height={hubInterior.img.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-terracotta text-paper text-[10px] font-mono uppercase tracking-tighter">
                  Phase 1 · Launching 2027
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Newcastle</span>
              </div>
              <h3 className="font-display text-3xl font-extrabold">Staffed Premium Hubs</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                A premium shared retail counter inside a shopping centre with dedicated staff. Think a mini beauty and lifestyle hall with 3–6 complementary independent brands side by side.
              </p>
              <ul className="grid gap-2 text-sm">
                {[
                  "Professional staff to assist customers",
                  "Premium counter display for your products",
                  "3–6 carefully curated brands per hub",
                  "Real-time sales data and insights",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-terracotta font-mono">+</span>
                    <span className="text-ink/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="border border-ink/10 bg-ink text-paper flex flex-col">
            <div className="aspect-[16/10] overflow-hidden border-b border-paper/10">
              <picture>
                {Object.entries(smartKiosk.sources).map(([type, srcset]) => (
                  <source key={type} type={`image/${type}`} srcSet={srcset} sizes="(min-width: 768px) 50vw, 100vw" />
                ))}
                <img
                  src={smartKiosk.img.src}
                  alt="Automated smart retail kiosks in shopping centre"
                  width={smartKiosk.img.w}
                  height={smartKiosk.img.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-sage text-ink text-[10px] font-mono uppercase tracking-tighter">
                  Phase 2 · After Phase 1
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Fully Automated</span>
              </div>
              <h3 className="font-display text-3xl font-extrabold">Automated Smart Hubs</h3>
              <p className="text-sm text-paper/70 leading-relaxed">
                Fully automated smart kiosks — no staff needed. Touchscreen browsing, contactless payment, and products dispensed instantly. Your brand selling 24/7.
              </p>
              <ul className="grid gap-2 text-sm">
                {[
                  "24/7 operation — even when the centre is quiet",
                  "Touchscreen product discovery",
                  "Contactless Apple Pay & card payments",
                  "Zero staff costs for brands",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-peach font-mono">+</span>
                    <span className="text-paper/80">{b}</span>
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

function DataPlatformSection() {
  const features = [
    {
      t: "Real-Time Sales",
      d: "Watch your sales happen live. Every transaction, every product, every customer.",
    },
    {
      t: "Performance Analytics",
      d: "Understand what's selling, peak times, and how you compare to other brands.",
    },
    {
      t: "Instant Notifications",
      d: "Get alerts for sales milestones, low stock, and important updates.",
    },
    {
      t: "Customer Insights",
      d: "Learn about your customers to make smarter product and marketing decisions.",
    },
  ];
  return (
    <section id="platform" className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="05" total="08" name="Data Platform" />
      <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
        <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
          Your business. Your data. <span className="text-terracotta">Your dashboard.</span>
        </h2>
        <p className="md:col-span-5 text-ink/70 leading-relaxed">
          Every brand gets access to our real-time analytics platform. See exactly how your products perform, understand your customers, and make data-driven decisions.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        {/* Mock dashboard */}
        <div className="md:col-span-7 bg-ink text-paper p-8 md:p-10 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
              one-nest / dashboard
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper/50">
              <span className="size-1.5 bg-sage rounded-full animate-pulse" />
              Live · just now
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-paper/10 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Today's Revenue</p>
              <p className="font-display text-4xl font-extrabold mt-2">£847.50</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-sage mt-2">
                ↑ +23% vs yesterday
              </p>
            </div>
            <div className="border border-paper/10 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Last Sale</p>
              <p className="font-display text-4xl font-extrabold mt-2">£24.99</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-peach mt-2">
                Just now · contactless
              </p>
            </div>
          </div>

          {/* Bar chart */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mb-4">
              7-day footfall vs sales
            </p>
            <div className="flex items-end gap-2 h-32">
              {[42, 58, 47, 71, 65, 88, 76].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                  <div
                    className="w-full bg-terracotta/80"
                    style={{ height: `${h}%` }}
                  />
                  <div
                    className="w-full bg-sage/60"
                    style={{ height: `${h * 0.45}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 font-mono text-[9px] uppercase tracking-widest text-paper/30">
              {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>

          <div className="border-t border-paper/10 pt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-paper/40">
            <span>Hub 01 · Newcastle</span>
            <span>Conv. rate · 18.4%</span>
          </div>
        </div>

        <div className="md:col-span-5 grid gap-4">
          {features.map((f, i) => (
            <div
              key={f.t}
              className="bg-paper border border-ink/10 p-6 flex gap-5 hover:border-terracotta/40 transition-colors"
            >
              <div className="font-display text-xl font-extrabold text-terracotta w-10 shrink-0">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">{f.t}</h3>
                <p className="text-sm text-ink/60 mt-1 leading-relaxed">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForBrandsSection() {
  const benefits = [
    "Save 70–80% vs traditional retail",
    "No long-term leases or commitments",
    "Premium shopping centre locations",
    "Professional staff handle sales",
    "Real-time sales data & insights",
    "Collective marketing support",
    "Online presence through our platform",
    "Focus on products — we handle the rest",
  ];
  return (
    <section id="brands" className="bg-terracotta text-paper py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8 px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/60">
            [ 06 / 08 ]  For Brands
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
            From £600 / month
          </span>
        </div>
        <div className="grid md:grid-cols-12 gap-4 mb-12">
          <h2 className="md:col-span-8 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Your premium retail presence. Without the <span className="text-ink">premium price.</span>
          </h2>
          <p className="md:col-span-4 text-paper/80 leading-relaxed">
            Join One Nest and get your brand into the UK's biggest shopping centres. You bring your products, we handle everything else — from the kiosk to the staff to the data.
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
            Register Brand Interest
          </a>
          <a
            href="mailto:raman@onenest.uk"
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
      <SectionLabel index="07" total="08" name="Built For" />
      <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
        <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
          Brands we're <span className="text-terracotta">built for.</span>
        </h2>
        <p className="md:col-span-5 text-ink/70 leading-relaxed">
          One Nest is designed for independent beauty, lifestyle, wellness and tech brands ready to take their first step into premium physical retail.
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
        <SectionLabel index="08" total="08" name="Our Vision · Locations" />
        <div className="grid md:grid-cols-12 gap-4 items-end mb-12">
          <h2 className="md:col-span-8 font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-forest">
            Starting in Newcastle. <span className="text-terracotta">Expanding across the UK.</span>
          </h2>
          <p className="md:col-span-4 text-ink/70 leading-relaxed">
            We're launching our first hub in Newcastle in 2027, with plans to expand to major UK cities. Join early and grow with us.
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
          <div className="md:col-span-5 bg-paper border border-ink/[0.04] p-8 flex flex-col self-stretch">
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
              {/* Great Britain outline — coordinates projected from real lat/lon */}
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
              {/* City markers — positions from real coordinates */}
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
    "Hub design, kiosk dimensions & materials",
    "Commercial terms, pricing tiers & licence length",
    "Data platform walkthrough & sample dashboards",
    "Newcastle Hub 01 floorplan & footfall projections",
    "Roadmap to automated smart hubs (Phase 2)",
  ];
  return (
    <section id="deck" className="max-w-7xl mx-auto px-6 py-24">
      <SectionLabel index="—" total="—" name="Brand Deck" />
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
              Everything a brand needs to evaluate One Nest in one document.
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
              href="mailto:raman@onenest.uk?subject=Brand%20Deck%20Request"
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
          You're on the Newcastle waitlist.
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
      {/* Honeypot — real users never fill this */}
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
          {submitting ? "Submitting…" : "Join the Waitlist"}
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
            Apply Now · Hub 01
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
            6 curated slots remaining
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-4 items-start">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              The future of retail is <span className="text-peach">shared, smart and automated.</span>
            </h2>
            <p className="text-paper/70 leading-relaxed max-w-md mb-10">
              Join the waitlist and be among the first brands in our Newcastle pilot — launching early 2027.
            </p>
            <dl className="grid grid-cols-2 gap-px bg-paper/15 border border-paper/15 max-w-md">
              {[
                { k: "Launch", v: "Q1 2027" },
                { k: "City", v: "Newcastle" },
                { k: "Slots", v: "6 brands" },
                { k: "From", v: "£600 / mo" },
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
              Join our waitlist to be notified when we launch.
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
            Data-intelligent shared retail hubs for independent brands. Built for the new high street.
          </p>
        </div>
        <div className="md:col-span-2 grid gap-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Navigate</p>
          <a href="#concept" className="hover:text-terracotta transition-colors">Concept</a>
          <a href="#how" className="hover:text-terracotta transition-colors">How It Works</a>
          <a href="#platform" className="hover:text-terracotta transition-colors">Platform</a>
          <a href="#brands" className="hover:text-terracotta transition-colors">For Brands</a>
        </div>
        <div className="md:col-span-2 grid gap-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Company</p>
          <a href="#locations" className="hover:text-terracotta transition-colors">Locations</a>
          <a href="#deck" className="hover:text-terracotta transition-colors">Brand Deck</a>
          <a href="#waitlist" className="hover:text-terracotta transition-colors">Waitlist</a>
        </div>
        <div className="md:col-span-3 grid gap-4 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Contact</p>
          <a href="mailto:raman@onenest.uk" className="flex items-center gap-3 hover:text-terracotta transition-colors">
            <Mail size={16} className="text-[#C9A84C] shrink-0" />
            raman@onenest.uk
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
