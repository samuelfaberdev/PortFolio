import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToastProvider from "./components/ToastContainer";
import "./globals.css";
import { themeInitScript } from "./utils/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SITE_URL = "https://samuelfaber.dev";
const SITE_TITLE = "Samuel Faber · Développeur Web & Data Science";
const SITE_DESCRIPTION =
  "Portfolio de Samuel Faber, concepteur développeur d'applications web et IA : projets, parcours et contact. En recherche d'une alternance ou d'un CDI en Data Science, région nantaise.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // Aperçu des liens partagés (Facebook, LinkedIn, Messenger, WhatsApp…)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "samuelfaber.dev",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Samuel Faber, concepteur développeur d'applications web et IA, en recherche d'alternance ou de CDI en Data Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-full mx-auto h-screen max-w-[1440px] gap-4 pt-16 md:pt-24`}
      >
        {process.env.NEXT_PUBLIC_UMAMI_URL &&
          process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
            <Script
              strategy="afterInteractive"
              src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              data-domains="samuelfaber.dev"
              data-do-not-track="true"
            />
          )}
        <ToastProvider>
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
