import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 md:scroll-mt-28 p-4 flex flex-col lg:flex-row justify-between gap-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl lg:text-4xl">Contactez-moi</h2>
        <p>
          Je suis actuellement à la recherche de nouvelles opportunités !<br />
          N&apos;hésitez pas à me contacter dès à présent via LinkedIn, GitHub
          ou par mail.
        </p>
        <ul className="flex flex-col gap-1">
          <li>
            💼 <strong>Disponible</strong> pour une alternance (niveau 7) ou un
            CDI en Data Science
          </li>
          <li>📍 Région nazairienne et nantaise</li>
          <li>🏠 Sur site, hybride ou en télétravail</li>
        </ul>
        <div className="flex gap-4">
          <Link
            href="https://github.com/samuelfaberdev"
            data-umami-event="lien-github"
          >
            <Image
              src="/images/icone-github.svg"
              alt="Profil GitHub"
              width={48}
              height={48}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/samuel-faber-developpeur-web-fullstack-data-scientist-nantes/"
            data-umami-event="lien-linkedin"
          >
            <Image
              src="/images/icone-linkedin.svg"
              alt="Profil LinkedIn"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
