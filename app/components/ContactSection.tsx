import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">Contactez-moi</h2>
        <p>
          Je suis actuellement à la recherche de nouvelles opportunitées !<br />
          N&apos;hésitez pas à me contacter dès à présent via LinkedIn, GitHub
          ou par mail.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/samuelfaberdev">
            <Image
              src="/images/icone-github.svg"
              alt="Profil GitHub"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/samuelfaberdev/">
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
