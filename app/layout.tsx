import type { Metadata } from "next";
import { Anek_Telugu} from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"

const AnekTelugu = Anek_Telugu({subsets :["latin"],
  variable : "--font-caption",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benjaminbaras.vercel.app"),
  title: "Benjamin Baras – Développeur Informatique",
  description:
    "Portfolio de Benjamin Baras, étudiant en informatique et développeur full-stack. Projets, compétences, expériences et CV.",
  keywords: [
    "Benjamin Baras",
    "développeur informatique",
    "portfolio développeur",
    "informatique",
    "full-stack",
    "Next.js",
    "React",
    "Étudiant informatique",
  ],
  authors: [{ name: "Benjamin Baras" }],
  creator: "Benjamin Baras",
  publisher: "Benjamin Baras",

  openGraph: {
    title: "Benjamin Baras – Portfolio Développeur",
    description:
      "Découvrez les projets, compétences et expériences de Benjamin Baras, étudiant en informatique.",
    url: "https://benjaminbaras.vercel.app",
    siteName: "Benjamin Baras",
    images: [
      {
        url: "/og-image.png", // crée cette image de preview dans /public
        width: 1200,
        height: 630,
        alt: "Portfolio de Benjamin Baras",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },



  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>
    <body>{children}</body>
    <Analytics />
  </html>
  );
}
