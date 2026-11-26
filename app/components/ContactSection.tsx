import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const t = useTranslations("Contact");
  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 md:scroll-mt-28 p-4 flex flex-col lg:flex-row justify-between gap-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl lg:text-4xl">{t("title")}</h2>
        <p>
          {t("intro1")}
          <br />
          {t("intro2")}
        </p>
        <ul className="flex flex-col gap-1">
          <li>
            {t.rich("available", { strong: (c) => <strong>{c}</strong> })}
          </li>
          <li>{t("location")}</li>
          <li>{t("remote")}</li>
        </ul>
        <div className="flex gap-4">
          <a
            href="https://github.com/samuelfaberdev"
            data-umami-event="lien-github"
          >
            <Image
              src="/images/icone-github.svg"
              alt={t("github")}
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-faber-developpeur-web-fullstack-data-scientist-nantes/"
            data-umami-event="lien-linkedin"
          >
            <Image
              src="/images/icone-linkedin.svg"
              alt={t("linkedin")}
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
