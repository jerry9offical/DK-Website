import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ChatWidget } from "@/components/chat/chat-widget";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://www.dorcaskoki.com";
const TITLE = "Dorcas Koki | The Voice of Sports, Stories & Stadium Energy";
const DESCRIPTION =
  "I'm Dorcas Koki — a sports presenter, journalist, event host, and voiceover artist based in Port Harcourt, Nigeria. Book me for event hosting, athlete interviews, sports content, and brand partnerships.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Dorcas Koki",
  },
  description: DESCRIPTION,
  keywords: [
    "Dorcas Koki",
    "sports presenter Nigeria",
    "sports journalist Port Harcourt",
    "event host Nigeria",
    "voiceover artist Nigeria",
    "sports media personality",
  ],
  authors: [{ name: "Dorcas Koki" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dorcas Koki",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06090F",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dorcas Koki",
  jobTitle: [
    "Sports Presenter",
    "Journalist",
    "Event Host",
    "Voiceover Artist",
  ],
  description: DESCRIPTION,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
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
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
        <ChatWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
