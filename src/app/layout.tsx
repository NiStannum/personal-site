import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nitin-bansal.com"),
  title: "Nitin Bansal",
  description:
    "Product manager at JEFIT, a fitness app used by over ten million lifters. Before that, Quora.",
  openGraph: {
    title: "Nitin Bansal",
    description:
      "Product manager at JEFIT, a fitness app used by over ten million lifters. Before that, Quora.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Bansal",
    description:
      "Product manager at JEFIT, a fitness app used by over ten million lifters. Before that, Quora.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
