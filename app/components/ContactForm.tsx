"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  async function submitContactForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = {
      email: target.email.value as string,
      subject: target.subject.value as string,
      message: target.message.value as string,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    // const resData = await response.json();

    if (response.status === 200) {
      console.log("Message envoyé.");
      setEmailSubmitted(true);
    }
  }

  return (
    <div className="flex items-center justify-center w-1/2">
      {emailSubmitted ? (
        <p className="text-green-500">Email envoyé avec succès !</p>
      ) : (
        <form
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
