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
          <span className="font-bold">Data / IA :</span> Python // Pandas //
          NumPy // scikit-learn // Keras // Deep Learning // NLP // Dataiku
        </li>
        <li>
          <span className="font-bold">MLOps / Cloud :</span> FastAPI //
          Streamlit // MLflow // Hugging Face // Google Cloud
        </li>
        <li>
          <span className="font-bold">DevOps :</span> Linux // Docker // GitHub
          Actions // Proxmox // OpenTofu // Ansible
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
          Titre RNCP niveau 6 - Concepteur Développeur en Intelligence
          Artificielle et Analyse Big Data -{" "}
          <a href="https://www.lewagon.com/fr" className="gradient-text">
            Le Wagon
          </a>
        </li>
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
      <ul className="list-disc pl-8 flex flex-col gap-2">
        <li>
          Data Scientist / Analyst - Stage -{" "}
          <a href="https://datatop.fr/" className="gradient-text">
            Datatop
          </a>{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            (juil. 2026)
          </span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Préparation de données et workflows Data Science sous Dataiku,
            entraînement et évaluation de modèles de Machine Learning.
          </p>
        </li>
        <li>
          DevOps / SysAdmin - Stage -{" "}
          <a href="https://www.aukfood.fr/" className="gradient-text">
            Aukfood
          </a>{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            (juin 2026)
          </span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Pipeline de déploiement automatisé de machines virtuelles : Debian,
            Proxmox, OpenTofu et Ansible.
          </p>
        </li>
        <li>
          Teaching Assistant - Alternance -{" "}
          <a href="https://wildcodeschool.fr/" className="gradient-text">
            Wild Code School
          </a>{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            (sept. 2023 - sept. 2024)
          </span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Assistant formateur sur le bootcamp Développeur Web et Web Mobile,
            en parallèle de mon titre CDA (Next.js, GraphQL, TypeScript, CI/CD).
          </p>
        </li>
        <li>
          Développeur web - Stage -{" "}
          <a
            href="https://www.linkedin.com/in/erwan-marcq-727077211/"
            className="gradient-text"
          >
            Wandev
          </a>{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            (sept. 2022)
          </span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Découverte de HTML, CSS et JavaScript, et création du jeu SeaHorse
            Game.
          </p>
        </li>
      </ul>
    ),
  },
];
