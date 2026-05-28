"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/xvzydekr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-10 max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a853]/20">
          <CheckCircle2 className="h-7 w-7 text-[#d4a853]" />
        </div>
        <h3 className="mt-4 font-serif text-2xl font-semibold text-[#1a2332]">You&apos;re on the list!</h3>
        <p className="mt-2 text-sm text-gray-600">
          Thanks for registering your interest. We&apos;ll be in touch with updates about the Newcastle launch.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[#d4a853] hover:underline"
        >
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h3 className="text-xl font-semibold text-[#1a2332]">Register Your Interest</h3>
      <p className="mt-2 text-sm text-gray-500">Join our waitlist to be notified when we launch.</p>
      <div className="mt-6 space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1a2332]">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jane Smith"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#1a2332] placeholder-gray-400 focus:border-[#d4a853] focus:outline-none focus:ring-1 focus:ring-[#d4a853]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1a2332]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jane@yourbrand.com"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#1a2332] placeholder-gray-400 focus:border-[#d4a853] focus:outline-none focus:ring-1 focus:ring-[#d4a853]"
          />
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-[#1a2332]">
            Brand Name
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            required
            placeholder="Your Brand Co."
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#1a2332] placeholder-gray-400 focus:border-[#d4a853] focus:outline-none focus:ring-1 focus:ring-[#d4a853]"
          />
        </div>
      </div>

      {/* Honeypot for spam */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#d4a853] px-6 text-sm font-medium text-[#1a2332] transition-all hover:bg-[#e4b863] disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Join the Waitlist"}
        {status !== "submitting" && <ArrowRight className="ml-1 h-4 w-4" />}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
      )}

      <p className="mt-4 text-xs text-gray-500">We&apos;ll only contact you about One Nest updates. No spam.</p>
    </form>
  )
}
