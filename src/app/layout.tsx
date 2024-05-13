import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import { Providers } from "./providers";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Medialuna Medias",
  description: "Medias deportivas y urbanas",
  keywords: [
    "Next.js",
    "Medialuna",
    "medias",
    "medialuna medias",
    "nike",
    "under armour",
    "3/4",
    "tenis",
    "soquetes",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Medialuna Medias",
    url: "https://medialunamedias.vercel.app",
    siteName: "Medialuna Medias",
    locale: "es_ES",
    type: "website",
    description: "Medias deportivas y urbanas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medialuna",
    description: "Medias deportivas y urbanas",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://medialunamedias.vercel.app/",
    url: "https://medialunamedias.vercel.app/",
    name: "Medialuna Medias",
    description:
      "Venta minorista de medias deportivas y urbanas",
  };
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${bricolage.className} overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
