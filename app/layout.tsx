import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const SITE_URL = "https://www.bytecompasshq.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ByteCompass — Smart Software Buying Guides & Reviews",
    template: "%s | ByteCompass",
  },
  description:
    "Plain-language software and SaaS reviews, comparisons, and buying guides that explain what actually matters before you subscribe.",
  openGraph: {
    type: "website",
    siteName: "ByteCompass",
    title: "ByteCompass — Smart Software Buying Guides & Reviews",
    description:
      "Plain-language software and SaaS reviews, comparisons, and buying guides that explain what actually matters before you subscribe.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteCompass — Smart Software Buying Guides & Reviews",
    description:
      "Plain-language software and SaaS reviews, comparisons, and buying guides that explain what actually matters before you subscribe.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
