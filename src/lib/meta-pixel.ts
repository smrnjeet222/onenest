/**
 * Meta Pixel wiring.
 *
 * `VITE_` prefix is mandatory: Vite only exposes prefixed variables to client
 * code, and an unprefixed one would silently arrive as `undefined` here. That
 * prefix also means the value is inlined into the JS bundle at build time and
 * is readable by anyone — fine for a pixel ID, which ships in the page source
 * anyway, and the exact reason the Conversions API token must NEVER be given a
 * `VITE_` name. That token is read server-side from `context.env` in
 * functions/api/lead.ts and never touches this file.
 */
export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "";

declare global {
  interface Window {
    fbq?: (...args: Array<unknown>) => void;
  }
}

/**
 * Meta's standard base snippet, verbatim apart from the interpolated ID.
 * Fires PageView on load. Injected as a real <script> tag in __root.tsx.
 *
 * Empty when no pixel ID is configured, so a missing env var ships no script at
 * all rather than an `fbq('init', '')` that reports errors to Meta forever.
 */
export const metaPixelBaseCode = !META_PIXEL_ID
  ? ""
  : `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;

/**
 * Fire a Meta standard event. No-ops during SSR/prerender and when the pixel
 * script is blocked, so callers never need to guard.
 *
 * Pass `eventId` when the same event is also sent server-side: Meta collapses
 * the browser and Conversions API copies into one conversion when the event
 * name and id match.
 */
export function trackMeta(
  event: string,
  params?: Record<string, unknown>,
  eventId?: string,
) {
  if (typeof window === "undefined") return;
  window.fbq?.(
    "track",
    event,
    params,
    eventId ? { eventID: eventId } : undefined,
  );
}

function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match?.[1] ? decodeURIComponent(match[1]) : "";
}

export function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto)
    return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Hand the same Lead to the Conversions API relay, which re-sends it from the
 * edge so the conversion survives ad blockers and iOS tracking prevention.
 *
 * Deliberately fire-and-forget: the relay is a measurement nicety, and a failed
 * or absent one (the vite dev server has no /api routes) must never surface to
 * someone who just submitted the form successfully.
 */
export function sendServerLead(input: {
  eventId: string;
  email: string;
  name?: string;
  brand?: string;
  source: string;
}): void {
  if (typeof window === "undefined") return;
  void fetch("/api/lead", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...input,
      eventSourceUrl: window.location.href,
      // Meta's own first-party cookies. Sent unhashed, per their spec.
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
    }),
    keepalive: true,
  }).catch(() => {
    /* measurement only — never block or alarm the visitor */
  });
}
