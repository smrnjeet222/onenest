export interface Env {
  /** Static assets from dist/client, bound by wrangler.jsonc. */
  ASSETS: Fetcher;
  /** Same pixel ID the browser uses. Plain runtime variable, not a secret. */
  META_PIXEL_ID: string;
  /** Runtime *secret*. Events Manager → Settings → Conversions API. */
  META_CAPI_ACCESS_TOKEN: string;
  /** Optional. Set while validating in Events Manager → Test Events, unset in production. */
  META_CAPI_TEST_EVENT_CODE?: string;
}
