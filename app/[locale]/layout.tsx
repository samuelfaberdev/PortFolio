import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import Script from "next/script";
import { notFound } from "next/navigation";
import { alternatesFor } from "@/i18n/metadata";
import { routing, type Locale } from "@/i18n/routing";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToastProvider from "../components/ToastContainer";
import "../globals.css";
import { themeInitScript } from "../utils/theme";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SITE_URL = "https://samuelfaber.dev";

type Props = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

// Les deux versions (/ et /en) sont générées à la compilation
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");
  const alternates = alternatesFor("/", locale as Locale);
  // Image d'aperçu dans la langue de la page
  const image = locale === "en" ? "/og-image-en.jpg" : "/og-image.jpg";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates,
    // Aperçu des liens partagés (Facebook, LinkedIn, Messenger, WhatsApp…)
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      url: alternates.canonical,
      siteName: "samuelfaber.dev",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
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
        <NextIntlClientProvider>
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
