import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getSiteOrigin } from "@/lib/siteUrl";

const GA_ID = "G-562BFW4CQ9";

/** Avoid loading gtag from googletagmanager.com in dev (DNS / ad-block noise). Set NEXT_PUBLIC_GA_FORCE=true to enable locally. */
const loadGoogleAnalytics =
  process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_GA_FORCE === "true";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handwriting = Dancing_Script({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  verification: {
    google: "xQ4B4iGsVRx3Hc6-Jq7wOwKCANBU_9_Z4XG6_uH2X18",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {loadGoogleAnalytics ? (
        <>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
            }}
          />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handwriting.variable} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen" id="main-content" aria-label="Goa escorts and call girls – service information, profiles and booking">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
