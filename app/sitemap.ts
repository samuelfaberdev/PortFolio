import type { MetadataRoute } from "next";
import { alternatesFor, localizedPath } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://samuelfaber.dev";
// La page /game est un easter egg : volontairement absente du plan du site
const PAGES = [
  { path: "/", priority: 1 },
  { path: "/mentions-legales", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority }) =>
    routing.locales.map((locale) => {
      const { languages } = alternatesFor(path, locale);
      return {
        url: SITE_URL + localizedPath(path, locale),
        priority,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(languages).map(([l, url]) => [l, SITE_URL + url]),
          ),
        },
      };
    }),
  );
}
