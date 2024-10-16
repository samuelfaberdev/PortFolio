import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full p-4 flex items-center justify-between gap-8">
      <article className="flex flex-col gap-4 w-3/6">
        <h1 className="text-5xl gradient-text">
          Hello, world ! Moi c'est <strong>Samuel</strong> !
        </h1>
        <h2 className="text-4xl">Bienvenue sur mon Portfolio.</h2>
        <p>
          Issu d&apos;une reconversion dans le{" "}
          <strong>développement web</strong>, je suis actuellement disponible
          pour renforcer vos équipes.
        </p>
        <p>
          Que ce soit en tant que développeur <strong>Frontend</strong>,{" "}
          <strong>Backend</strong> ou <strong>Fullstack</strong>, je saurai me
          rendre utile pour vos projets !
        </p>
      </article>
      <div className="flex flex-col items-center justify-center gap-4 w-1/6">
        <button className="gradient-button">Me contacter</button>
        <button className="gradient-button">Télécharger mon CV</button>
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
