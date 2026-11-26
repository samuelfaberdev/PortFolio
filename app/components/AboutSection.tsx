"use client";

import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import Image from "next/image";
import { useState, useTransition } from "react";
import { TAB_IDS, tabContent, type TabId } from "../utils/data";

export default function AboutSection() {
  const t = useTranslations("About");
  const locale = useLocale() as Locale;
  const [tab, setTab] = useState<TabId>("hardskills");

  const [, startTransition] = useTransition();

  const handleTabChange = (id: TabId) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="a-propos"
      className="w-full scroll-mt-20 md:scroll-mt-28 p-4 flex flex-col lg:flex-row justify-between gap-8 lg:gap-32"
    >
      <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-2/6 rounded-lg">
        <Image
          className="rounded-3xl"
          src="/images/bureau.webp"
          alt={t("imageAlt")}
          width={400}
          height={400}
          sizes="(min-width: 1024px) 400px, 384px"
        />
      </div>
      <article className="flex flex-col gap-4 w-full lg:w-4/6">
        <h2 className="text-3xl lg:text-4xl">{t("title")}</h2>
        <p>{t("intro1")}</p>
        <p>{t("intro2")}</p>
        <div role="tablist" className="flex flex-wrap gap-x-4 gap-y-2">
          {TAB_IDS.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className="font-bold"
              onClick={() => handleTabChange(id)}
            >
              {t(`tabs.${id}`)}
              <p className={tab === id ? "active" : "h-0.5"}></p>
            </button>
          ))}
        </div>
        <div role="tabpanel">{tabContent(tab, locale)}</div>
      </article>
    </section>
  );
}
