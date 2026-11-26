import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import {
  LINKEDIN_RECOMMENDATIONS_URL,
  RECOMMENDATIONS,
} from "../utils/recommendations";

export default function RecommendationsSection() {
  const t = useTranslations("Recommendations");
  const locale = useLocale() as Locale;
  return (
    <section
      id="recommandations"
      className="w-full scroll-mt-20 md:scroll-mt-28 p-4 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl lg:text-4xl">{t("title")}</h2>
        <p>{t("intro")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {RECOMMENDATIONS.map((rec) => {
          // Traduction proposée quand la citation n'est pas dans la langue de la page
          const translation =
            rec.lang !== locale ? rec.translations[locale] : undefined;
          return (
            <figure
              key={rec.author}
              className="flex flex-col gap-4 rounded-3xl border-2 border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/40"
            >
              <span
                aria-hidden
                className="gradient-text text-6xl leading-none font-serif h-8"
              >
                “
              </span>
              <div className="flex-1 flex flex-col gap-3">
                <blockquote
                  lang={rec.lang}
                  className="italic text-neutral-700 dark:text-neutral-300"
                >
                  {rec.quote}
                </blockquote>
                {translation && (
                  <details className="text-sm text-neutral-600 dark:text-neutral-400">
                    <summary className="cursor-pointer w-fit underline underline-offset-4 hover:opacity-70">
                      {t("showTranslation")}
                    </summary>
                    <p className="mt-2 italic">
                      <span className="not-italic font-bold">
                        {t("translation")}
                      </span>
                      {translation}
                    </p>
                  </details>
                )}
              </div>
              <figcaption className="flex flex-col border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <span className="font-bold">{rec.author}</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {rec.title[locale]}
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {rec.relation[locale]} · {rec.date[locale]}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <a
        href={LINKEDIN_RECOMMENDATIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="self-center gradient-text text-lg font-bold transition hover:opacity-80"
        data-umami-event="recommandations-linkedin"
      >
        {t("allOnLinkedin")}
      </a>
    </section>
  );
}
