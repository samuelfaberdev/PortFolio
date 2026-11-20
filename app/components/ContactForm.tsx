"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { trackEvent } from "../utils/analytics";
import { contactMeAction } from "../actions";

export default function ContactForm() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Le widget ALTCHA est un Web Component : on le charge côté navigateur uniquement
  useEffect(() => {
    import("altcha");
    import("altcha/i18n/fr-fr");
  }, []);

  async function submitContactForm(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

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
        <p className="text-green-500">Message envoyé avec succès !</p>
      ) : (
        <form
          name="contactForm"
          className="flex flex-col items-center gap-4 w-full"
          onSubmit={submitContactForm}
        >
          <div className="flex flex-col gap-1 w-full">
            <label className="pl-1" htmlFor="email">
              Email :
            </label>
            <input
              className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
              type="email"
              name="email"
              id="email"
              required
              maxLength={254}
              placeholder="nom@provider.fr"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="pl-1" htmlFor="subject">
              Objet :
            </label>
            <input
              className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
              type="text"
              name="subject"
              id="subject"
              required
              maxLength={150}
              placeholder="Salut Samuel !"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="pl-1" htmlFor="message">
              Votre message :
            </label>
            <textarea
              className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
              name="message"
              id="message"
              required
              maxLength={5000}
              placeholder="Salut Samuel, parlons un peu de ton projet..."
            ></textarea>
          </div>
          <altcha-widget
            challenge="/api/altcha/challenge"
            language="fr-fr"
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
            Protection anti-spam sans cookie ni pistage (ALTCHA). Vos données
            servent uniquement à vous répondre :{" "}
            <Link className="gradient-text" href="/mentions-legales#formulaire">
              en savoir plus
            </Link>
            .
          </p>
          <button
            type="submit"
            className="gradient-button disabled:opacity-60"
            disabled={sending}
          >
            {sending ? "Envoi en cours…" : "Envoyer votre message"}
          </button>
        </form>
      )}
    </div>
  );
}
