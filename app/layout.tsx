import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToastProvider from "./components/ToastContainer";
import "./globals.css";

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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-full mx-auto h-screen max-w-[1440px] gap-4 pt-24`}
      >
        <Script
          strategy="beforeInteractive"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
        />
        <ToastProvider>
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
