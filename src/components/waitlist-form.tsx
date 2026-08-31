import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { newEventId, sendServerLead, trackMeta } from "@/lib/meta-pixel";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqkkedn";

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

/**
 * Cold ad traffic abandons on every extra field, so the paid landing page asks
 * for the two answers we actually need to triage an application. The name is
 * still collected on the main site, where visitors arrive warmer.
 */
const compactSchema = waitlistSchema.omit({ name: true });

type WaitlistErrors = Partial<
  Record<keyof z.infer<typeof waitlistSchema>, string>
>;

export type WaitlistVariant = "full" | "compact";

export function WaitlistForm({
  variant = "full",
  source,
  submitLabel = "Apply for Next Cohort",
}: {
  variant?: WaitlistVariant;
  /** Identifies which surface produced the lead, in Formspree and in the pixel breakdown. */
  source: string;
  submitLabel?: string;
}) {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", brand: "" });
  const [errors, setErrors] = useState<WaitlistErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const showName = variant === "full";
  const schema = showName ? waitlistSchema : compactSchema;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
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
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...result.data, source }),
      });
      if (!res.ok) {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = (await res.json()) as {
            errors?: Array<{ message?: string }>;
          };
          if (data.errors?.[0]?.message) msg = data.errors[0].message;
        } catch {
          /* ignore */
        }
        throw new Error(msg);
      }
      // Only a confirmed 2xx from Formspree counts as a Lead. Firing on the
      // button click instead would also count validation failures and network
      // errors, which would train the ad delivery on non-conversions.
      // One Lead event across both surfaces so delivery optimises on a single
      // signal; `source` is the breakdown that tells them apart in reporting.
      // Shared by both copies of this event so Meta counts them as one.
      const eventId = newEventId();
      trackMeta(
        "Lead",
        {
          content_name: "waitlist-cohort-01",
          content_category: "brand-application",
          source,
        },
        eventId,
      );
      sendServerLead({
        eventId,
        email: result.data.email,
        // The compact variant has no name field; its schema strips the key.
        name: showName ? values.name.trim() : undefined,
        brand: result.data.brand,
        source,
      });
      toast.success("You're on the waitlist. We'll be in touch.");
      setValues({ name: "", email: "", brand: "" });
      // Client-side nav, so the pixel request started above is not cancelled.
      navigate({ to: "/thanks" });
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Network error. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="bg-paper/10 border border-paper/20 p-8 md:p-10 grid gap-6"
    >
      {/* Honeypot: real users never fill this */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      {showName && (
        <Field
          id="name"
          label="Your Name"
          value={values.name}
          onChange={(v) => setValues((s) => ({ ...s, name: v }))}
          error={errors.name}
          autoComplete="name"
          maxLength={100}
        />
      )}
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
      {/* Restore `md:justify-between` here when the privacy line below comes back. */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-end pt-2">
        {/* <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
          We'll never share your details.
        </p> */}
        <button
          type="submit"
          disabled={submitting}
          className="bg-terracotta text-paper px-8 py-4 text-xs font-bold uppercase tracking-widest ring-1 ring-terracotta hover:bg-peach hover:text-ink transition-colors disabled:opacity-60"
        >
          {submitting ? "Submitting…" : submitLabel}
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
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-widest text-paper/60"
      >
        {label}
        {required && (
          <span className="text-peach ml-1" aria-hidden="true">
            *
          </span>
        )}
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
        <p
          id={`${id}-error`}
          className="font-mono text-[10px] uppercase tracking-widest text-peach"
        >
          {error}
        </p>
      )}
    </div>
  );
}
