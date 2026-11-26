"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { trackEvent } from "../utils/analytics";

/**
 * Bascule FR / EN. Le lien passe toujours par le préfixe de langue (/fr, /en) :
 * le middleware mémorise alors le choix (cookie NEXT_LOCALE, seulement s'il
 * diffère de la langue du navigateur) puis redirige vers l'adresse finale.
 * Rechargement complet volontaire : la section affichée (#projets…) est
 * conservée à travers la redirection.
 */
export default function LanguageSwitcher() {
  const t = useTranslations("Language");
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <ul
      aria-label={t("label")}
      className="flex items-center rounded-full border-2 border-neutral-300 dark:border-neutral-700 p-0.5 text-sm font-bold"
    >
      {routing.locales.map((target) => {
        const active = target === locale;
        return (
          <li key={target}>
            {active ? (
              <span
                aria-current="true"
                title={t(target)}
                className="block rounded-full px-1.5 sm:px-2 py-1 bg-gradient-to-br from-pink-500 to-orange-400 text-white"
              >
                {target.toUpperCase()}
              </span>
            ) : (
              <a
                href={`/${target}${pathname === "/" ? "" : pathname}`}
                onClick={(event) => {
                  event.preventDefault();
                  trackEvent("changement-langue", { langue: target });
                  window.location.assign(
                    event.currentTarget.pathname + window.location.hash,
                  );
                }}
                hrefLang={target}
                lang={target}
                title={t("switchTo")}
                aria-label={t("switchTo")}
                className="block rounded-full px-1.5 sm:px-2 py-1 transition hover:opacity-70"
              >
                {target.toUpperCase()}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
