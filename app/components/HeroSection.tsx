import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full p-4 flex flex-col lg:flex-row items-center justify-between gap-8">
      <article className="flex flex-col gap-4 w-full lg:w-3/6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl gradient-text">
          Hello, world ! Moi c&apos;est <strong>Samuel</strong> !
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          Bienvenue sur mon <strong>Portfolio</strong>.
        </h2>
        <p>
          <strong>Concepteur Développeur d&apos;Applications Web et IA</strong>,
          je me suis reconverti dans le <strong>développement web</strong> avant
          de poursuivre avec le Bootcamp <strong>Data Science &amp; AI</strong>{" "}
          du Wagon.
        </p>
        <p>
          Je recherche avant tout une <strong>alternance (niveau 7)</strong> ou
          un <strong>CDI</strong> en <strong>Data Science</strong>, plus
          spécifiquement en <strong>Data Engineering</strong> ou en{" "}
          <strong>MLOps</strong>, sur la région nazairienne et nantaise, sur
          site, en hybride ou en télétravail.
        </p>
      </article>
      <div className="flex flex-row flex-wrap lg:flex-col items-center justify-center gap-4 w-full lg:w-1/6">
        <a href="#contact" className="gradient-button">
          Me contacter
        </a>
        <a
          href="/cv/CV_Samuel_Faber.pdf"
          download
          target="_blank"
          className="gradient-button"
          data-umami-event="telechargement-cv"
        >
          Télécharger mon CV
        </a>
      </div>
      <div className="order-first lg:order-none flex items-center justify-center w-auto">
        <Image
          className="rounded-full h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
          src="/images/profil.jpg"
          alt="Ma photo de profil"
          width={320}
          height={320}
        />
      </div>
    </section>
  );
}
