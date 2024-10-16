import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full p-4 flex items-center justify-between gap-8">
      <article className="flex flex-col gap-4 w-3/6">
        <h1 className="text-4xl gradient-text">
          Hello there, je suis <strong>Samuel Faber</strong> !
        </h1>
        <h2 className="text-3xl">Bienvenue sur mon Portfolio.</h2>
        <p>
          Issu d&apos;une reconversion dans le{" "}
          <strong>développement web</strong>, je suis actuellement disponible
          pour renforcer vos équipes.
        </p>
        <p>
          Que ce soit en tant que développeur <strong>Frontend</strong>,{" "}
          <strong>Backend</strong> ou <strong>Fullstack</strong>, je saurais
          être utile pour vos projets !
        </p>
      </article>
      <div className="flex flex-col items-center justify-center gap-4 w-1/6">
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
          Me contacter
        </button>
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
          Télécharger mon CV
        </button>
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
