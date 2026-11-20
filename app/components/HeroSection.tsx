import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full p-4 flex items-center justify-between gap-8">
      <article className="flex flex-col gap-4 w-3/6">
        <h1 className="text-5xl gradient-text">
          Hello, world ! Moi c&apos;est <strong>Samuel</strong> !
        </h1>
        <h2 className="text-4xl">
          Bienvenue sur mon <strong>Portfolio</strong>.
        </h2>
        <p>
          <strong>Concepteur Développeur d&apos;Applications Web et IA</strong>,
          je me suis reconverti dans le <strong>développement web</strong> avant
          de poursuivre avec le Bootcamp <strong>Data Science &amp; AI</strong>{" "}
          du Wagon.
        </p>
        <p>
          Je recherche un <strong>CDI</strong> ou une{" "}
          <strong>alternance (niveau 7)</strong> en{" "}
          <strong>Data Science</strong> ou en développement{" "}
          <strong>Fullstack</strong>, sur la région nazairienne et nantaise, sur
          site, en hybride ou en télétravail.
        </p>
      </article>
      <div className="flex flex-col items-center justify-center gap-4 w-1/6">
        <a href="#contact" className="gradient-button">
          Me contacter
        </a>
        <a
          href="/cv/CV_Samuel_Faber.pdf"
          download
          target="_blank"
          className="gradient-button"
        >
          Télécharger mon CV
        </a>
      </div>
      <div className="flex items-center justify-center w-auto">
        <Image
          className="rounded-full h-80 w-80"
          src="/images/profil.jpg"
          alt="Ma photo de profil"
          width={320}
          height={320}
        />
      </div>
    </section>
  );
}
