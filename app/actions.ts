"use server";

import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
import { routing } from "@/i18n/routing";
import { verifyAltchaPayload } from "./utils/altcha";

const LIMITS = { email: 254, subject: 150, message: 5000 };
const EMAIL_REGEX = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/;

type ActionResult = { success: boolean; message: string };

/** Échappe les caractères spéciaux HTML pour empêcher toute injection. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function contactMeAction(
  formData: FormData,
): Promise<ActionResult> {
  // Langue des messages renvoyés au visiteur (français par défaut)
  const requested = readField(formData, "locale");
  const locale = (routing.locales as readonly string[]).includes(requested)
    ? requested
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "Actions" });

  // 1. Validation des champs, côté serveur (le client n'est pas fiable)
  const email = readField(formData, "email");
  // Pas de retour à la ligne dans un objet d'e-mail
  const subject = readField(formData, "subject").replace(/[\r\n]+/g, " ");
  const message = readField(formData, "message");

  if (!email || email.length > LIMITS.email || !EMAIL_REGEX.test(email)) {
    return { success: false, message: t("invalidEmail") };
  }
  if (!subject || subject.length > LIMITS.subject) {
    return {
      success: false,
      message: t("subjectRequired", { max: LIMITS.subject }),
    };
  }
  if (!message || message.length > LIMITS.message) {
    return {
      success: false,
      message: t("messageRequired", { max: LIMITS.message }),
    };
  }

  // 2. Vérification anti-spam ALTCHA (preuve de travail, sans cookie ni tiers)
  let isHuman = false;
  try {
    isHuman = await verifyAltchaPayload(formData.get("altcha"));
  } catch (error) {
    console.error("ALTCHA :", error);
    return { success: false, message: t("error") };
  }
  if (!isHuman) {
    return {
      success: false,
      message: t("spamCheckFailed"),
    };
  }

  // 3. Envoi : le message part uniquement vers ma boîte, jamais vers une
  // adresse saisie par le visiteur. Celui-ci est joignable via "Répondre".
  const resendEmail = process.env.RESEND_EMAIL;
  if (!resendEmail) {
    console.error("RESEND_EMAIL n'est pas défini.");
    return { success: false, message: t("error") };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Contact - Samuel Faber <contact@samuelfaber.dev>",
    to: [resendEmail],
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `De : ${email}\nObjet : ${subject}\n\n${message}`,
    html: `
        <p><strong>De :</strong> ${escapeHtml(email)}</p>
        <p><strong>Objet :</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
  });

  if (error) {
    console.error("Erreur Resend :", error);
    return {
      success: false,
      message: t("sendFailed"),
    };
  }

  return { success: true, message: t("success") };
}
