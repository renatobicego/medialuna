import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import { Providers } from "./providers";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], display: 'swap', adjustFontFallback: false });

export const metadata: Metadata = {
  title: "Medialuna",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
