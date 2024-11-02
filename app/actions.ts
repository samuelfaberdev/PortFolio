"use server";

import { Resend } from "resend";

export async function contactMeAction(
  token: string | null,
  formData: FormData
) {
  if (!token) {
    return {
      success: false,
      message: "Token not found.",
    };
  }

  // Verify token
  const captchaData = await verifyCaptchaToken(token);

  if (!captchaData) {
    return {
      success: false,
      message: "Captcha failed.",
    };
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: "Captcha failed.",
      errors: !captchaData.success ? captchaData.error_codes : null,
    };
  }

  // Send email
  const resend = new Resend(process.env.RESEND_API_KEY);
  const resendEmail = process.env.RESEND_EMAIL;

  const email = formData.get("email")?.toString();
  const subject = formData.get("subject")?.toString();
  const message = formData.get("message")?.toString();

  await resend.emails.send({
    from: "Contact - Samuel Faber <contact@samuelfaber.dev>",
    to: [email!],
    bcc: resendEmail,
    subject: subject!,
    html: `
        <p>Merci pour votre prise de contact, je vous réponds au plus vite !</p>
        <h1>Votre message :</h1>
        <h2>${subject}</h2>
        <p>${message}</p>
      `,
  });

  return {
    success: true,
    message: "Message sent successfully.",
  };
}

export async function verifyCaptchaToken(token: string) {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("No secret key found.");
  }
  const verifyUrl = new URL("https://www.google.com/recaptcha/api/siteverify");
  verifyUrl.searchParams.append("secret", secretKey);
  verifyUrl.searchParams.append("response", token);

  const res = await fetch(verifyUrl, { method: "POST" });
  const captchaData: CaptchaData = await res.json();

  if (!res.ok) return null;

  return captchaData;
}

type CaptchaData =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      error_codes: string[];
    };
