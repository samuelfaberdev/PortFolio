"use client";

import Image from "next/image";
import { ReactElement, useState, useTransition } from "react";

interface DATA {
  title: string;
  id: string;
  content: ReactElement;
}
const DATA: DATA[] = [
  {
    title: "Hard Skills",
    id: "hardskills",
    content: (
      <ul className="list-disc pl-8">
        <li>Front : React.js // Next.js // Tailwind</li>
        <li>Back : Node.js // Express // GraphQL // TypeORM</li>
        <li>Base de données : SQL // MySQL // PostgreSQL // SQLite</li>
        <li>Veille technologique</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "softskills",
    content: (
      <ul className="list-disc pl-8">
        <li>Travail en équipe</li>
        <li>Résolution de problèmes</li>
        <li>Gestion des priorités</li>
        <li>Prise de décision rapide</li>
        <li>Capacité d&apos;adaptation</li>
        <li>Polyvalence, réactivité, autonomie</li>
        <li>Aime être challengée</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-8">
        <li>
          Titre RNCP - Concepteur Développeur d'Applications -{" "}
          <a href="https://wildcodeschool.fr/" className="gradient-text">
            Wild Code School
          </a>
        </li>
        <li>
          Titre RNCP - Développeur Web et Web Mobile -{" "}
          <a href="https://wildcodeschool.fr/" className="gradient-text">
            Wild Code School
          </a>
        </li>
        <li>
          Licence Pro Ingénierie et Maintenance Biomédicales -{" "}
          <a
            href="http://www-iutlorient.univ-ubs.fr/"
            className="gradient-text"
          >
            IUT de Lorient
          </a>
        </li>
        <li>
          DUT Génie Industriel et Maintenance -{" "}
          <a href="https://iut-sn.univ-nantes.fr/" className="gradient-text">
            IUT de Saint-Nazaire
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-8">
        <li>Teaching Assistant à la Wild Code School</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("hardskills");

  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="w-full p-4 flex justify-between gap-32">
      <div className="w-2/6 rounded-lg">
        <Image
          className="rounded-3xl"
          src={"/images/bureau.jpg"}
          alt="Un bureau d'ordinateur"
          width={480}
          height={480}
        />
      </div>
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
        <div className="flex gap-4">
          <button onClick={() => handleTabChange("hardskills")}>
            {" "}
            Hard Skills <p className={tab === "hardskills" ? "active" : ""}></p>
          </button>

          <button onClick={() => handleTabChange("softskills")}>
            {" "}
            Soft Skills <p className={tab === "softskills" ? "active" : ""}></p>
          </button>

          <button onClick={() => handleTabChange("education")}>
            {" "}
            Education <p className={tab === "education" ? "active" : ""}></p>
          </button>

          {/* Bouton pour l'onglet "Experiences & Certifications" */}
          <button onClick={() => handleTabChange("experiences")}>
            {" "}
            Experiences & Certifications{" "}
            <p className={tab === "experiences" ? "active" : ""}></p>
          </button>
        </div>
        <div>{DATA.find((t) => t.id === tab)?.content}</div>
      </article>
    </section>
  );
}
