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

export const metadata: Metadata = {
  title: "PortFolio de Samuel Faber",
  description:
    "Développeur web créatif, je transforme vos idées en solutions digitales élégantes et performantes. Découvrez mes réalisations.",
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
