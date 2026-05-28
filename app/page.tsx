import Image from "next/image"
import {
  ArrowRight,
  CircleCheckBig,
  Package,
  CreditCard,
  ChartColumn,
  Users,
  Zap,
  Clock,
  Smartphone,
  TrendingUp,
  Bell,
  Check,
  MapPin,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { WaitlistForm } from "@/components/waitlist-form"

const stats = [
  { value: "70-80%", label: "Cost Savings" },
  { value: "26M+", label: "Annual Visitors" },
  { value: "3-6", label: "Brands Per Hub" },
  { value: "Top UK", label: "Shopping Centres" },
]

const steps = [
  {
    icon: CircleCheckBig,
    num: "01",
    title: "Apply Online",
    desc: "Submit your brand for consideration. We review product quality, brand values and fit with other hub brands.",
  },
  {
    icon: Package,
    num: "02",
    title: "We Set Up Your Space",
    desc: "One Nest installs and owns everything. Your branded section is ready within our premium shared hub.",
  },
  {
    icon: CreditCard,
    num: "03",
    title: "Customers Buy Your Products",
    desc: "Staff assist customers or they pay via contactless. Your products are displayed beautifully alongside complementary brands.",
  },
  {
    icon: ChartColumn,
    num: "04",
    title: "Track Sales in Real-Time",
    desc: "Access your dashboard to see live sales data, customer insights and performance analytics from anywhere.",
  },
]

const phase1Features = [
  "Professional staff to assist customers",
  "Premium counter display for your products",
  "3-6 carefully curated brands per hub",
  "Real-time sales data and insights",
]

const phase2Features = [
  "24/7 operation — even when the centre is quiet",
  "Touchscreen product discovery",
  "Contactless Apple Pay & card payments",
  "Zero staff costs for brands",
]

const platformFeatures = [
  { icon: ChartColumn, title: "Real-Time Sales", desc: "Watch your sales happen live. Every transaction, every product, every customer." },
  { icon: TrendingUp, title: "Performance Analytics", desc: "Understand what's selling, peak times, and how you compare to other brands." },
  { icon: Bell, title: "Instant Notifications", desc: "Get alerts for sales milestones, low stock, and important updates." },
  { icon: Users, title: "Customer Insights", desc: "Learn about your customers to make smarter product and marketing decisions." },
]

const brandBenefits = [
  "Save 70-80% vs traditional retail",
  "No long-term leases or commitments",
  "Premium shopping centre locations",
  "Professional staff handle sales",
  "Real-time sales data & insights",
  "Collective marketing support",
  "Online presence through our platform",
  "Focus on products, we handle the rest",
]

const brandTags = ["Beauty", "Fragrance", "Skincare", "Wellness", "Lifestyle", "Tech Accessories", "Sustainable Brands", "Fashion & Accessories"]

const cities = [
  { name: "Newcastle", status: "Launching 2027", active: true },
  { name: "Glasgow", status: "Coming Soon" },
  { name: "Manchester", status: "Coming Soon" },
  { name: "Leeds", status: "Coming Soon" },
  { name: "Birmingham", status: "Coming Soon" },
  { name: "London", status: "Coming Soon" },
  { name: "Edinburgh", status: "Coming Soon" },
]

export default function Page() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-shopping-centre.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/80 to-[#1a2332]/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#d4a853]">
              Launching 2027 — Newcastle
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
              Get Your Brand Into the <span className="text-[#d4a853]">UK&apos;s Biggest Shopping Centres</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Data-intelligent shared retail hubs inside the UK&apos;s biggest shopping centres. Your brand. Your kiosk.
              Shared space, shared costs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#for-brands"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#d4a853] px-6 text-sm font-medium text-[#1a2332] transition-colors hover:bg-[#e4b863]"
              >
                For Brands <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE COMPARE + STATS */}
      <section id="about" className="bg-[#faf8f5] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Average UK Retail Rent</p>
              <p className="text-2xl font-bold text-[#1a2332] line-through decoration-red-500">£3,000+/mo</p>
            </div>
            <div className="text-2xl font-bold text-gray-400">VS</div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">One Nest Shared Hub</p>
              <p className="text-2xl font-bold text-[#d4a853]">From £600/mo</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-[#d4a853]/30 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-[#d4a853]">{s.value}</p>
                <p className="mt-1 text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-[#faf8f5] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">The Problem</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2332] md:text-4xl">
              Retail Shouldn&apos;t Be This Hard
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-relaxed">
              Independent brands are stuck between expensive retail units they can&apos;t afford and market stalls that
              limit their growth.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/market-stall-founder.png"
                  alt="Independent brand founder at market stall"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#1a2332]">The Market Stall Ceiling</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Great for starting out, but limited footfall and no permanent presence keeps brands from scaling.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#2a3444] flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-6xl font-bold text-[#d4a853]">£3,000+</p>
                  <p className="mt-2 text-white/80">per month for retail space</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#1a2332]">The Cost Barrier</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Traditional retail units cost thousands per month — impossible for most independent brands to afford.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#d4a853] to-[#e4b863] flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-6xl font-bold text-[#1a2332]">70%</p>
                  <p className="mt-2 text-[#1a2332]/80">of new retail businesses fail in year one</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#1a2332]">The Risk Factor</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Long leases and upfront costs mean one bad quarter can end a promising brand&apos;s journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">How It Works</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2332] md:text-4xl">
              From Application to Sales in 4 Steps
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.num} className="relative">
                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-12 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-[#d4a853] to-[#d4a853]/20 lg:block" />
                  )}
                  <div className="group relative rounded-2xl bg-[#faf8f5] p-8 transition-all hover:bg-[#1a2332]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a853] text-[#1a2332]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-sm font-bold text-[#d4a853]">{s.num}</p>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#1a2332] group-hover:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4a853] px-8 py-3 font-medium text-[#1a2332] transition-colors hover:bg-[#e4b863]"
            >
              Join the Waitlist <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">The Concept</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2332] md:text-4xl">
                Your Brand. Your Kiosk. Shared Space.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                3-6 brands share one premium hub inside a major shopping centre. Each with their own fully branded
                kiosk. Rent, staffing and costs split between all brands.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Beauty & Skincare", "Fragrance & Candles", "Lifestyle & Wellness", "Sustainable Products", "Tech Accessories"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#d4a853]/30 bg-[#d4a853]/10 px-4 py-2 text-sm text-[#1a2332]"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <a
                href="#platform"
                className="mt-8 inline-flex h-9 items-center justify-center rounded-md bg-[#1a2332] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2a3444]"
              >
                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/collective-hub.png"
                alt="The Collective - Multiple premium brand kiosks sharing a retail hub in a shopping centre"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP / PHASES */}
      <section id="phases" className="bg-[#faf8f5] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">Our Roadmap</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2332] md:text-4xl">Two Phases. One Vision.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We&apos;re building the future of independent retail, starting with staffed hubs and evolving to fully
              automated smart kiosks.
            </p>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/staffed-hub.png"
                  alt="Premium staffed retail hub inside shopping centre"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[#d4a853] p-4 shadow-lg">
                <p className="text-sm font-bold text-[#1a2332]">Launching</p>
                <p className="text-2xl font-bold text-[#1a2332]">2027</p>
                <p className="text-sm text-[#1a2332]/80">Newcastle</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1a2332] px-4 py-2 text-sm text-white">
                <Users className="h-4 w-4" /> Phase 1
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#1a2332] md:text-3xl">Staffed Premium Hubs</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A premium shared retail counter inside a shopping centre with dedicated staff. Think a mini beauty and
                lifestyle hall with 3-6 complementary independent brands side by side.
              </p>
              <ul className="mt-6 space-y-3">
                {phase1Features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4a853]/20 text-[#d4a853]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d4a853] px-4 py-2 text-sm text-[#1a2332]">
                <Zap className="h-4 w-4" /> Phase 2
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#1a2332] md:text-3xl">Automated Smart Hubs</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Fully automated smart kiosks — no staff needed. Touchscreen browsing, contactless payment, and products
                dispensed instantly. Your brand selling 24/7.
              </p>
              <ul className="mt-6 space-y-3">
                {phase2Features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4a853]/20 text-[#d4a853]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" /> Coming after Phase 1 success
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/smart-kiosks.png"
                  alt="Automated smart retail kiosks in shopping centre"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#1a2332] p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-[#d4a853]" />
                  <p className="text-sm font-bold text-white">Fully Automated</p>
                </div>
                <p className="mt-1 text-xs text-gray-400">No staff needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="bg-[#1a2332] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">Data Platform</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-white md:text-4xl">
                Your Business. Your Data. Your Dashboard.
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Every brand gets access to our real-time analytics platform. See exactly how your products perform,
                understand your customers, and make data-driven decisions.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {platformFeatures.map((f) => {
                  const Icon = f.icon
                  return (
                    <div key={f.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d4a853]/20">
                        <Icon className="h-5 w-5 text-[#d4a853]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{f.title}</h3>
                        <p className="mt-1 text-sm text-gray-400">{f.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/dashboard-laptop.png"
                  alt="One Nest analytics dashboard showing sales data"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -left-4 top-8 animate-pulse rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Just now</p>
                    <p className="text-sm font-medium text-[#1a2332]">New sale: £24.99</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-8 rounded-xl bg-[#d4a853] p-4 shadow-lg">
                <p className="text-xs text-[#1a2332]/70">Today&apos;s Revenue</p>
                <p className="text-2xl font-bold text-[#1a2332]">£847.50</p>
                <p className="text-xs text-[#1a2332]/70">+23% vs yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR BRANDS */}
      <section id="for-brands" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/brand-founder-proud.png"
                  alt="Brand founder proudly standing next to their products in One Nest hub"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 rounded-xl bg-white p-6 shadow-xl lg:-right-8">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Before</p>
                    <p className="text-sm font-medium text-gray-400 line-through">Market Stall</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#d4a853]" />
                  <div className="text-center">
                    <p className="text-xs text-[#d4a853]">After</p>
                    <p className="text-sm font-medium text-[#1a2332]">Shopping Centre</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">For Brands</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2332] md:text-4xl">
                Your Premium Retail Presence. Without the Premium Price.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Join One Nest and get your brand into the UK&apos;s biggest shopping centres. You bring your products,
                we handle everything else — from the kiosk to the staff to the data.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {brandBenefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <Check className="h-5 w-5 shrink-0 text-[#d4a853]" />
                    <span className="text-sm text-gray-600">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#d4a853] px-6 text-sm font-medium text-[#1a2332] transition-colors hover:bg-[#e4b863]"
                >
                  Register Brand Interest <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="mailto:raman@onenest.uk"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#1a2332] bg-background px-6 text-sm font-medium text-[#1a2332] transition-colors hover:bg-[#1a2332] hover:text-white"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section id="brands" className="bg-[#1a2332] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">Built For</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white md:text-4xl">Brands We&apos;re Built For</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            One Nest is designed for independent beauty, lifestyle, wellness and tech brands ready to take their first
            step into premium physical retail.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {brandTags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#d4a853]/40 bg-[#d4a853]/10 px-5 py-2.5 text-sm font-medium text-[#d4a853] transition-colors hover:bg-[#d4a853]/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH / CITIES */}
      <section id="growth" className="bg-[#faf8f5] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#d4a853]">Our Vision</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2332] md:text-4xl">
                Starting in Newcastle. Expanding Across the UK.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We&apos;re launching our first hub in Newcastle in 2027, with plans to expand to major UK cities. Join
                early and grow with us.
              </p>
              <div className="mt-8 space-y-4">
                {cities.map((c) => (
                  <div
                    key={c.name}
                    className={`flex items-center justify-between rounded-xl p-4 ${
                      c.active ? "bg-[#d4a853]/20 border border-[#d4a853]" : "bg-white border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className={`h-5 w-5 ${c.active ? "text-[#d4a853]" : "text-gray-400"}`} />
                      <span className={`font-medium ${c.active ? "text-[#1a2332]" : "text-gray-600"}`}>{c.name}</span>
                    </div>
                    <span className={`text-sm ${c.active ? "font-bold text-[#d4a853]" : "text-gray-400"}`}>
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[#1a2332] p-8">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-80 w-64">
                      <div className="absolute left-1/2 top-8 -translate-x-1/2">
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <p className="mt-1 text-xs text-white/50">Edinburgh</p>
                      </div>
                      <div className="absolute left-1/3 top-10">
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <p className="mt-1 text-xs text-white/50">Glasgow</p>
                      </div>
                      <div className="absolute left-1/2 top-24 -translate-x-1/2">
                        <div className="h-4 w-4 rounded-full bg-[#d4a853] animate-pulse" />
                        <div className="absolute -left-1 -top-1 h-6 w-6 rounded-full border-2 border-[#d4a853] animate-ping" />
                        <p className="mt-2 text-sm font-bold text-[#d4a853]">Newcastle</p>
                      </div>
                      <div className="absolute left-1/2 top-36">
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <p className="mt-1 text-xs text-white/50">Leeds</p>
                      </div>
                      <div className="absolute left-1/3 top-40">
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <p className="mt-1 text-xs text-white/50">Manchester</p>
                      </div>
                      <div className="absolute left-1/2 top-52 -translate-x-1/2">
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <p className="mt-1 text-xs text-white/50">Birmingham</p>
                      </div>
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/4">
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <p className="mt-1 text-xs text-white/50">London</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#d4a853]" />
                      <span className="text-xs text-white/70">Launching 2027</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-white/30" />
                      <span className="text-xs text-white/70">Planned Expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="bg-[#faf8f5] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1a2332] md:text-4xl lg:text-5xl text-balance">
            The Future of Retail is Shared, Smart and Automated
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Join the waitlist and be among the first brands in our Newcastle pilot — launching early 2027.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a2332] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#d4a853] text-xs font-bold text-[#1a2332]">
                  ON
                </div>
                <span className="text-lg font-semibold text-white">One Nest</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Shared retail hubs in the UK&apos;s biggest shopping centres. Your brand. Your kiosk.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#platform" className="hover:text-white">Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">For Brands</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><a href="#for-brands" className="hover:text-white">Why One Nest</a></li>
                <li><a href="#waitlist" className="hover:text-white">Join Waitlist</a></li>
                <li><a href="mailto:raman@onenest.uk" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>raman@onenest.uk</li>
                <li>Newcastle, United Kingdom</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
            <p className="text-sm text-gray-500">© 2025 One Nest Ltd. All rights reserved.</p>
            <p className="text-sm italic text-gray-500">The Future of Retail is Shared, Smart and Automated</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
