"use client";

import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "../utils/analytics";
import { contactMeAction } from "../actions";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const locale = useLocale();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Le widget ALTCHA est un Web Component : on le charge côté navigateur uniquement
  useEffect(() => {
    import("altcha");
    if (locale === "fr") import("altcha/i18n/fr-fr");
    else import("altcha/i18n/en");
  }, [locale]);

  async function submitContactForm(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    // Langue des messages de retour du serveur
    formData.set("locale", locale);

    setSending(true);
    const res = await contactMeAction(formData);
    setSending(false);

    if (res.success) {
      toast.success(res.message);
      setEmailSubmitted(true);
      trackEvent("formulaire-contact-envoye");
    } else {
      toast.error(res.message);
      // Une preuve ne sert qu'une fois : on en demande une nouvelle
      form
        .querySelector<HTMLElement & { reset?: () => void }>("altcha-widget")
        ?.reset?.();
    }
  }

  return (
    <div className="flex items-center justify-center w-full lg:w-1/2">
      {emailSubmitted ? (
        <p className="text-green-500">{t("sent")}</p>
      ) : (
        <form
          name="contactForm"
          className="flex flex-col items-center gap-4 w-full"
          onSubmit={submitContactForm}
        >
          <div className="flex flex-col gap-1 w-full">
            <label className="pl-1" htmlFor="email">
              {t("email")}
            </label>
            <input
              className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
              type="email"
              name="email"
              id="email"
              required
              maxLength={254}
              placeholder={t("emailPlaceholder")}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="pl-1" htmlFor="subject">
              {t("subject")}
            </label>
            <input
              className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
              type="text"
              name="subject"
              id="subject"
              required
              maxLength={150}
              placeholder={t("subjectPlaceholder")}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="pl-1" htmlFor="message">
              {t("message")}
            </label>
            <textarea
              className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
              name="message"
              id="message"
              required
              maxLength={5000}
              placeholder={t("messagePlaceholder")}
            ></textarea>
          </div>
          <altcha-widget
            challenge="/api/altcha/challenge"
            language={locale === "fr" ? "fr-fr" : "en"}
            auto="onfocus"
            configuration={JSON.stringify({ hideLogo: true })}
            style={{
              "--altcha-max-width": "100%",
              "--altcha-border-radius": "0.375rem",
              "--altcha-color-base": "var(--background)",
              "--altcha-color-base-content": "var(--foreground)",
              "--altcha-border-color": "rgb(115 115 115)",
            }}
          ></altcha-widget>
          <p className="text-xs text-center">
            {t.rich("notice", {
              link: (chunks) => (
                <Link
                  className="gradient-text"
                  href="/mentions-legales#formulaire"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
          <button
            type="submit"
            className="gradient-button disabled:opacity-60"
            disabled={sending}
          >
            {sending ? t("sending") : t("send")}
          </button>
        </form>
      )}
    </div>
  );
}
