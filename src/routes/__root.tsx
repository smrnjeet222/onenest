import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import appCss from "@/styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f5f0e6" },
      { name: "format-detection", content: "telephone=no" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { title: "OneNest · The Retail Incubator for Indie Brands" },
      { property: "og:title", content: "OneNest · The Retail Incubator for Indie Brands" },
      { property: "og:description", content: "A retail incubator for independent brands. Online sellers, market traders and local makers share a turn-key retail hub inside major UK shopping centres and scale on a short licence instead of a long lease of their own." },
      { property: "og:url", content: "https://onenest.uk/" },
      { property: "og:site_name", content: "OneNest" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: "https://onenest.uk/og-banner.jpg" },
      { property: "og:image:width", content: "1536" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "OneNest · The Retail Incubator for Indie Brands" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://onenest.uk/og-banner.jpg" },
      { name: "twitter:title", content: "OneNest · The Retail Incubator for Indie Brands" },
      { name: "twitter:description", content: "A retail incubator for independent brands. Online sellers, market traders and local makers share a turn-key retail hub inside major UK shopping centres and scale on a short licence instead of a long lease of their own." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// Emitted as a real tag rather than via head.scripts: TanStack's <Scripts />
// drops inline children, which silently stripped the structured data.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://onenest.uk/#organization",
      name: "OneNest",
      url: "https://onenest.uk",
      logo: "https://onenest.uk/icon-512.png",
      email: "partnership@onenest.uk",
      description:
        "A retail incubator for independent brands inside major UK shopping centres. Online sellers, market traders and local makers share a turn-key, multi-brand retail hub on a short licence while OneNest carries the mall lease.",
      areaServed: "GB",
    },
    {
      "@type": "WebSite",
      "@id": "https://onenest.uk/#website",
      name: "OneNest",
      url: "https://onenest.uk/",
      inLanguage: "en-GB",
      publisher: { "@id": "https://onenest.uk/#organization" },
      description:
        "A retail incubator for independent brands inside major UK shopping centres. Online sellers, market traders and local makers share a turn-key retail hub, get real footfall data, and scale on a short licence instead of a long lease of their own.",
    },
  ],
};

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <Toaster position="top-center" />
      </QueryClientProvider>
    </RootDocument>
  );
}
