import type { Metadata } from "next";
import { DM_Serif_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Heartland Accessibility — Healthcare Accessibility Consulting",
    template: "%s | Heartland Accessibility",
  },
  description:
    "Heartland Accessibility LLC — Healthcare website accessibility consulting combining clinical occupational therapy expertise with frontend engineering. Based in Oklahoma, serving clinics nationwide.",
  openGraph: {
    title: "Heartland Accessibility — Healthcare Accessibility Consulting",
    description:
      "Healthcare website accessibility consulting combining clinical OT expertise with frontend engineering.",
    type: "website",
    locale: "en_US",
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
      data-scroll-behavior="smooth"
      className={`${dmSerif.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
