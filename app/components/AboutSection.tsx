export default function AboutSection() {
  return (
    <section className="w-full p-4 flex items-center justify-between gap-8">
      <div className="w-2/6"></div>
      <article className="flex flex-col gap-4 w-4/6">
        <h2 className="text-4xl">A propos de moi</h2>
        <p>
          De formation initial dans la maintenance industrielle puis
          biomédicales, j'ai souhaité faire une reconversion dans le
          développement web.
        </p>
        <p>
          Dans cette section vous découvrirez mes diverses compétences acquises
          au fil de ma reconversion et de mon parcours professionnel, ainsi que
          mes différentes expériences dans le milieu du développement.
        </p>
      </article>
    </section>
  );
}
