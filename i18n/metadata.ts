import { routing, type Locale } from "./routing";

/** Adresse d'une page dans une langue : "/" + "mentions-legales" → "/en/mentions-legales" */
export function localizedPath(path: string, locale: Locale) {
  const clean = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

/**
 * Adresse canonique et versions linguistiques (balises hreflang) d'une page,
 * pour que Google présente la bonne langue à chacun. x-default = français.
 */
export function alternatesFor(
  path: string,
  locale: Locale,
): { canonical: string; languages: Record<string, string> } {
  return {
    canonical: localizedPath(path, locale),
    languages: {
      ...Object.fromEntries(
        routing.locales.map((l) => [l, localizedPath(path, l)]),
      ),
      "x-default": localizedPath(path, routing.defaultLocale),
    },
  };
}
