import { ReactElement } from "react";

type DATA = {
  title: string;
  id: string;
  content: ReactElement;
};

export const DATA: DATA[] = [
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
          Titre RNCP niveau 6 - Concepteur Développeur d&apos;Applications -{" "}
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
