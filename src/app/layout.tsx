import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MythNames — AI Name Generator for Fantasy, D&D, and More",
    template: "%s | MythNames",
  },
  description:
    "Generate unique fantasy, D&D, cultural, and character names with AI. Each name comes with meaning, pronunciation, and lore.",
  metadataBase: new URL("https://mythnames.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MythNames",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MythNames",
    url: "https://mythnames.com",
    description:
      "Generate unique fantasy, D&D, cultural, and character names with AI. Each name comes with meaning, pronunciation, and lore.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mythnames.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <nav className="border-b border-gold/20 bg-charcoal-dark/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-heading text-2xl text-gold hover:text-amber"
            >
              MythNames
            </Link>
            <Link
              href="/"
              className="text-sm text-muted hover:text-cream"
            >
              All Generators
            </Link>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gold/10 bg-charcoal-dark py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} MythNames. All rights reserved.</p>
            <p className="mt-1">Powered by AI</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
