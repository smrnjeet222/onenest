import type { Env } from "./env";

/**
 * Meta Conversions API relay.
 *
 * The browser already fires a `Lead` pixel event; this sends the same event
 * server-side so conversions survive ad blockers and iOS tracking prevention.
 * Meta collapses the pair into one conversion when `event_id` and `event_name`
 * match and both arrive within 48 hours.
 *
 * The access token is a Cloudflare secret and must never reach the client,
 * which is the whole reason this runs on the server at all.
 *
 * Docs:
 * - developers.facebook.com/docs/marketing-api/conversions-api/using-the-api
 * - developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters
 * - developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
 */

// Pinned deliberately. v25.0 (Feb 2026) is supported by Meta until July 2028;
// bump it on purpose after re-reading the changelog, never implicitly.
const GRAPH_API_VERSION = "v25.0";

/** Small enough that no legitimate submission is refused, small enough to be a bad DoS target. */
const MAX_BODY_BYTES = 4096;

interface LeadPayload {
  eventId?: unknown;
  eventSourceUrl?: unknown;
  email?: unknown;
  name?: unknown;
  brand?: unknown;
  source?: unknown;
  fbp?: unknown;
  fbc?: unknown;
}

const str = (v: unknown): string => (typeof v === "string" ? v : "");

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Meta requires trimmed, lowercased UTF-8 before hashing. */
const normalizeEmail = (v: string) => v.trim().toLowerCase();

/** Names additionally must carry no punctuation. */
const normalizeName = (v: string) =>
  v
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ");

/**
 * The form asks for one "Your Name" field, but Meta matches on first and last
 * separately. First token is the given name, whatever remains is the surname.
 */
function splitName(full: string): { first: string; last: string } {
  const parts = normalizeName(full).split(" ").filter(Boolean);
  if (parts.length === 0) return { first: "", last: "" };
  return { first: parts[0]!, last: parts.slice(1).join(" ") };
}

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
      // Conversion telemetry is per-visitor and must never be held by a shared
      // cache or the browser. `_headers` does not cover Worker responses.
      "cache-control": "no-store",
    },
  });

export async function handleLead(
  request: Request,
  env: Env,
): Promise<Response> {
  // Same-origin only. Does not stop a determined forger — anything the browser
  // can send, curl can too — but it removes drive-by cross-site posting.
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: "forbidden" }, 403);
  }

  if (!env.META_PIXEL_ID || !env.META_CAPI_ACCESS_TOKEN) {
    console.error(
      "[capi] missing META_PIXEL_ID or META_CAPI_ACCESS_TOKEN binding",
    );
    return json({ error: "not_configured" }, 500);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES)
    return json({ error: "payload_too_large" }, 413);

  let body: LeadPayload;
  try {
    body = JSON.parse(raw) as LeadPayload;
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const eventId = str(body.eventId);
  const email = str(body.email);
  // Without an event_id the server event cannot be deduplicated and would
  // double-count against the browser event, which is worse than not sending it.
  if (!eventId || !email)
    return json({ error: "missing_event_id_or_email" }, 400);

  const { first, last } = splitName(str(body.name));

  const userData: Record<string, unknown> = {
    em: [await sha256Hex(normalizeEmail(email))],
    // Never hashed, per Meta's customer-information-parameters page.
    client_ip_address: request.headers.get("CF-Connecting-IP") ?? undefined,
    client_user_agent: request.headers.get("User-Agent") ?? undefined,
  };
  if (first) userData.fn = [await sha256Hex(first)];
  if (last) userData.ln = [await sha256Hex(last)];
  if (str(body.fbp)) userData.fbp = str(body.fbp);
  if (str(body.fbc)) userData.fbc = str(body.fbc);

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: str(body.eventSourceUrl) || undefined,
        action_source: "website",
        user_data: userData,
        custom_data: {
          content_name: "waitlist-cohort-01",
          content_category: "brand-application",
          source: str(body.source) || undefined,
          brand: str(body.brand) || undefined,
        },
      },
    ],
    ...(env.META_CAPI_TEST_EVENT_CODE
      ? { test_event_code: env.META_CAPI_TEST_EVENT_CODE }
      : {}),
  };

  const endpoint =
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${env.META_PIXEL_ID}/events` +
    `?access_token=${encodeURIComponent(env.META_CAPI_ACCESS_TOKEN)}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      // Body is Meta's diagnostic, not ours to echo to the page. Read it with
      // `wrangler pages deployment tail`.
      console.error(`[capi] ${res.status}`, await res.text());
      return json({ ok: false }, 502);
    }
    return json({ ok: true }, 200);
  } catch (err) {
    console.error("[capi] request failed", err);
    return json({ ok: false }, 502);
  }
}
