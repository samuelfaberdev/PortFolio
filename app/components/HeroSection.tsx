import { useTranslations } from "next-intl";
import Image from "next/image";

const strong = (chunks: React.ReactNode) => <strong>{chunks}</strong>;

export default function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <section className="w-full p-4 flex flex-col lg:flex-row items-center justify-between gap-8">
      <article className="flex flex-col gap-4 w-full lg:w-3/6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl gradient-text">
          {t.rich("title", { strong })}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          {t.rich("welcome", { strong })}
        </h2>
        <p>{t.rich("intro", { strong })}</p>
        <p>{t.rich("search", { strong })}</p>
      </article>
      <div className="flex flex-row flex-wrap lg:flex-col items-center justify-center gap-4 w-full lg:w-1/6">
        <a href="#contact" className="gradient-button">
          {t("contact")}
        </a>
        {/* CV disponible en français uniquement pour le moment */}
        <a
          href="/cv/CV_Samuel_Faber.pdf"
          download
          target="_blank"
          hrefLang="fr"
          title={t("cvTitle")}
          className="gradient-button text-center"
          data-umami-event="telechargement-cv"
        >
          {t("cv")}
        </a>
      </div>
      <div className="order-first lg:order-none flex items-center justify-center w-auto">
        <Image
          className="rounded-full h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
          src="/images/profil.jpg"
          alt={t("photoAlt")}
          width={320}
          height={320}
        />
      </div>
    </section>
  );
}
