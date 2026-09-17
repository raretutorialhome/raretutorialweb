import type { Metadata } from "next";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppFab } from "@/components/common/WhatsAppFab";
import { SmoothScrollProvider } from "@/animations/smooth-scroll-provider";
import { defaultMetadata, organizationJsonLd } from "@/config/seo";

// Self-hosted via @fontsource (no build-time network call to Google Fonts —
// see globals.css for the --font-lora / --font-work-sans variable mapping).
// Lora weights actually used: 400 (default weight for `font-serif` headings
// that don't set an explicit font-weight utility — verified by checking
// every font-serif usage in the codebase), 600/700 (font-semibold/font-bold
// headings), plus their italic faces (pull-quotes, the "rare" wordmark).
// 500 was previously loaded but never actually applied to any font-serif
// element — dead weight, removed.
import "@fontsource/lora/400.css";
import "@fontsource/lora/600.css";
import "@fontsource/lora/700.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/600-italic.css";
import "@fontsource/lora/700-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <SmoothScrollProvider />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
