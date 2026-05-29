import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

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
      { name: "theme-color", content: "#f5f0e6" },
      { name: "format-detection", content: "telephone=no" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { title: "OneNest — Shared Retail Hubs" },
      { property: "og:title", content: "OneNest — Shared Retail for Independent Brands" },
      { property: "og:description", content: "Data-intelligent shared retail hubs for independent brands inside the UK's biggest shopping centres." },
      { property: "og:url", content: "https://onenest.uk/" },
      { property: "og:site_name", content: "OneNest" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: "https://onenest.uk/og-banner.jpg" },
      { property: "og:image:width", content: "1536" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "OneNest — Shared Retail for Independent Brands" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://onenest.uk/og-banner.jpg" },
      { name: "twitter:title", content: "OneNest — Shared Retail for Independent Brands" },
      { name: "twitter:description", content: "Data-intelligent shared retail hubs for independent brands inside the UK's biggest shopping centres." },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "OneNest",
          url: "https://onenest.uk",
          logo: "https://onenest.uk/icon-512.png",
          description:
            "Data-intelligent shared retail hubs for independent brands inside the UK's biggest shopping centres.",
          areaServed: "GB",
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <Outlet />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
