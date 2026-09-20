import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.shortName} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.shortName,
  authors: [{ name: site.shortName, url: siteUrl }],
  creator: site.shortName,
  publisher: site.shortName,
  category: "food",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: site.shortName,
    title: `${site.shortName} | ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/cakes/chocolate-drip.png",
        width: 1200,
        height: 1200,
        alt: "Chocolate drip cake from Meem Bakers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | ${site.tagline}`,
    description: site.description,
    images: ["/cakes/chocolate-drip.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", type: "image/x-icon", sizes: "32x32" },
      { url: "/icon.png?v=3", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [{ url: "/apple-icon.png?v=3", sizes: "180x180" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${outfit.variable} h-full overflow-x-clip antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-ink font-sans text-[16px] text-cream sm:text-lg">
        <JsonLd />
        <Providers>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
