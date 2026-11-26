import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  // Le français est la langue principale : servi sans préfixe (/), l'anglais sous /en
  defaultLocale: "fr",
  localePrefix: "as-needed",
  // Cookie posé uniquement quand le visiteur choisit une autre langue que celle
  // détectée : il retient ce choix 12 mois (préférence, exemptée de consentement).
  localeCookie: { name: "NEXT_LOCALE", maxAge: 60 * 60 * 24 * 365 },
});

export type Locale = (typeof routing.locales)[number];
