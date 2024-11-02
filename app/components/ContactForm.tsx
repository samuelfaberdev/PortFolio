"use client";

import { FormEvent, useState } from "react";
import { contactMeAction } from "../actions";
import { generateToken } from "../utils/captcha";

export default function ContactForm() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  async function submitContactForm(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const token = await generateToken();

    const res = await contactMeAction(token, formData);

    if (res.success) {
      setEmailSubmitted(true);
    }
  }

  return (
    <div className="flex items-center justify-center w-1/2">
      {emailSubmitted ? (
        <p className="text-green-500">Email envoyé avec succès !</p>
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
              placeholder="Salut Samuel !"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="pl-1" htmlFor="">
              Votre message :
            </label>
            <textarea
              className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
              name="message"
              id="message"
              required
              placeholder="Salut Samuel, parlons un peu de ton projet..."
            ></textarea>
          </div>
          <button type="submit" className="gradient-button">
            Envoyer votre message
          </button>
        </form>
      )}
    </div>
  );
}
