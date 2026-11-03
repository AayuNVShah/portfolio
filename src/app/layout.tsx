import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/shared/Providers";
import { SkipLink } from "@/components/navigation/SkipLink";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { ChapterRail } from "@/components/navigation/ChapterRail";
import { profile } from "@/data/profile";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.creativeDirection}`,
    template: `%s — ${profile.name}`,
  },
  description: `${profile.tagline} Software engineer working on backend systems, integrations, and distributed ideas.`,
  openGraph: {
    title: `${profile.name} — ${profile.creativeDirection}`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: profile.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-charcoal font-sans text-ivory">
        <SkipLink />
        <Providers>
          <SiteHeader />
          <ChapterRail />
          {children}
        </Providers>
      </body>
    </html>
  );
}
