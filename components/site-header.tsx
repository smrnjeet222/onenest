"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#platform", label: "Platform" },
  { href: "#for-brands", label: "For Brands" },
  { href: "#growth", label: "Growth" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2332]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a className="flex items-center gap-2" href="/">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#d4a853] text-xs font-bold text-[#1a2332]">
            ON
          </div>
          <span className="text-lg font-semibold text-white">One Nest</span>
        </a>
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <a
            href="#waitlist"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#d4a853] px-4 py-2 text-sm font-medium text-[#1a2332] transition-colors hover:bg-[#e4b863]"
          >
            Join Waitlist
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#1a2332] px-6 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-9 w-full items-center justify-center rounded-md bg-[#d4a853] px-4 py-2 text-sm font-medium text-[#1a2332]"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
