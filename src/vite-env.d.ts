/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Meta Pixel dataset ID. Public — Vite inlines it into the client bundle.
   * Never add the Conversions API token here; `VITE_` means "shipped to the
   * browser". That token is a Cloudflare secret read in functions/api/lead.ts.
   */
  readonly VITE_META_PIXEL_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*&as=picture" {
  const value: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default value;
}

declare module "*&url" {
  const src: string;
  export default src;
}
