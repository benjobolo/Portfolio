import type { Metadata } from "next";
import { Anek_Telugu} from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({subsets :["latin"],
  variable : "--font-caption",
});

export const metadata: Metadata = {
  title: "Benjamin Baras",
  description: "Etudiant en développement informatique ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>
    <body>{children}</body>
  </html>
  );
}
