import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalEn from "./content-en";
import LegalFr from "./content-fr";

const META = {
  fr: {
    title: "Mentions légales et confidentialité | Samuel Faber",
    description:
      "Mentions légales, politique de confidentialité et gestion des traceurs du site samuelfaber.dev.",
  },
  en: {
    title: "Legal notice and privacy | Samuel Faber",
    description:
      "Legal notice, privacy policy and cookie information for samuelfaber.dev.",
  },
};

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return locale === "en" ? META.en : META.fr;
}

export default function MentionsLegales({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return (
    <main className="w-full max-w-3xl p-4 flex flex-col gap-10 leading-relaxed">
      {locale === "en" ? <LegalEn /> : <LegalFr />}
    </main>
  );
}
