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
        <li>
          <span className="font-bold">Front :</span> React.js // Next.js //
          Tailwind
        </li>
        <li>
          <span className="font-bold">Back :</span> Node.js // Express //
          GraphQL // TypeORM
        </li>
        <li>
          <span className="font-bold">Base de données :</span> SQL // MySQL //
          PostgreSQL // SQLite
        </li>
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
        <li>Pédagogue</li>
        <li>Adaptabilité</li>
        <li>Polyvalence</li>
        <li>Autonomie</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-8">
        <li>
          Titre RNCP niveau 6 - Concepteur Développeur d'Applications -{" "}
          <a href="https://wildcodeschool.fr/" className="gradient-text">
            Wild Code School
          </a>
        </li>
        <li>
          Titre RNCP niveau 5 - Développeur Web et Web Mobile -{" "}
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
        <li>
          Teaching Assistant - Apprentissage -{" "}
          <a href="https://wildcodeschool.fr/" className="gradient-text">
            Wild Code School
          </a>
        </li>
        <li>
          Développeur web - Stage -{" "}
          <a
            href="https://www.linkedin.com/in/erwan-marcq-727077211/"
            className="gradient-text"
          >
            Wandev
          </a>
        </li>
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
          width={400}
          height={400}
        />
      </div>
      <article className="flex flex-col gap-4 w-4/6">
        <h2 className="text-4xl">A propos de moi</h2>
        <p>
          De formation initiale dans la maintenance industrielle puis
          biomédicales, ainsi que de nombreux autres métiers, j'ai souhaité
          faire une reconversion dans le développement web.
        </p>
        <p>
          Dans cette section vous découvrirez mes diverses compétences acquises
          au fil de ma reconversion et de mon parcours professionnel, ainsi que
          mes différentes expériences dans le milieu du développement.
        </p>
        <div className="flex gap-4">
          <button
            className="font-bold"
            onClick={() => handleTabChange("hardskills")}
          >
            Hard Skills
            <p className={tab === "hardskills" ? "active" : "h-0.5"}></p>
          </button>

          <button
            className="font-bold"
            onClick={() => handleTabChange("softskills")}
          >
            Soft Skills
            <p className={tab === "softskills" ? "active" : "h-0.5"}></p>
          </button>

          <button
            className="font-bold"
            onClick={() => handleTabChange("education")}
          >
            Formations
            <p className={tab === "education" ? "active" : "h-0.5"}></p>
          </button>

          <button
            className="font-bold"
            onClick={() => handleTabChange("experiences")}
          >
            Experiences
            <p className={tab === "experiences" ? "active" : "h-0.5"}></p>
          </button>
        </div>
        <div>{DATA.find((t) => t.id === tab)?.content}</div>
      </article>
    </section>
  );
}
