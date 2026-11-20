"use server";

import { Resend } from "resend";
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
  // 1. Validation des champs, côté serveur (le client n'est pas fiable)
  const email = readField(formData, "email");
  // Pas de retour à la ligne dans un objet d'e-mail
  const subject = readField(formData, "subject").replace(/[\r\n]+/g, " ");
  const message = readField(formData, "message");

  if (!email || email.length > LIMITS.email || !EMAIL_REGEX.test(email)) {
    return { success: false, message: "Adresse e-mail invalide." };
  }
  if (!subject || subject.length > LIMITS.subject) {
    return {
      success: false,
      message: `L'objet est requis (${LIMITS.subject} caractères maximum).`,
    };
  }
  if (!message || message.length > LIMITS.message) {
    return {
      success: false,
      message: `Le message est requis (${LIMITS.message} caractères maximum).`,
    };
  }

  // 2. Vérification anti-spam ALTCHA (preuve de travail, sans cookie ni tiers)
  let isHuman = false;
  try {
    isHuman = await verifyAltchaPayload(formData.get("altcha"));
  } catch (error) {
    console.error("ALTCHA :", error);
    return { success: false, message: "Une erreur est survenue." };
  }
  if (!isHuman) {
    return {
      success: false,
      message: "La vérification anti-spam a échoué, réessayez.",
    };
  }

  // 3. Envoi : le message part uniquement vers ma boîte, jamais vers une
  // adresse saisie par le visiteur. Celui-ci est joignable via "Répondre".
  const resendEmail = process.env.RESEND_EMAIL;
  if (!resendEmail) {
    console.error("RESEND_EMAIL n'est pas défini.");
    return { success: false, message: "Une erreur est survenue." };
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
      message: "L'envoi a échoué, réessayez plus tard.",
    };
  }

  return { success: true, message: "Message envoyé avec succès." };
}
