import type { Locale } from "@/i18n/routing";
import type { Localized } from "./projects";

// Contenu des onglets de la section « A propos », dans chaque langue.
// Les titres des onglets sont dans messages/*.json (About.tabs).

type Skill = { label?: Localized; items: Localized };
type Education = { title: Localized; school: string; url: string };
type Experience = {
  role: Localized;
  kind: Localized;
  company: string;
  url: string;
  date: Localized;
  description: Localized;
};

const same = (text: string): Localized => ({ fr: text, en: text });

const HARD_SKILLS: Skill[] = [
  { label: same("Front"), items: same("React.js // Next.js // Tailwind") },
  {
    label: same("Back"),
    items: same("Node.js // Express // GraphQL // TypeORM"),
  },
  {
    label: { fr: "Data / IA", en: "Data / AI" },
    items: same(
      "Python // Pandas // NumPy // scikit-learn // Keras // Deep Learning // NLP // Dataiku",
    ),
  },
  {
    label: same("MLOps / Cloud"),
    items: same(
      "FastAPI // Streamlit // MLflow // Hugging Face // Google Cloud",
    ),
  },
  {
    label: same("DevOps"),
    items: same(
      "Linux // Docker // GitHub Actions // Proxmox // OpenTofu // Ansible",
    ),
  },
  {
    label: { fr: "Base de données", en: "Databases" },
    items: same("SQL // MySQL // PostgreSQL // SQLite"),
  },
  { items: { fr: "Veille technologique", en: "Keeping up with tech trends" } },
];

const SOFT_SKILLS: Localized[] = [
  { fr: "Travail en équipe", en: "Teamwork" },
  { fr: "Pédagogue", en: "Good at explaining and teaching" },
  { fr: "Adaptabilité", en: "Adaptability" },
  { fr: "Polyvalence", en: "Versatility" },
  { fr: "Autonomie", en: "Independence" },
];

const EDUCATION: Education[] = [
  {
    title: {
      fr: "Titre RNCP niveau 6 - Concepteur Développeur en Intelligence Artificielle et Analyse Big Data",
      en: "French national certification, level 6 (bachelor's level) - Artificial Intelligence and Big Data Analysis Developer",
    },
    school: "Le Wagon",
    url: "https://www.lewagon.com/fr",
  },
  {
    title: {
      fr: "Titre RNCP niveau 6 - Concepteur Développeur d'Applications",
      en: "French national certification, level 6 (bachelor's level) - Application Designer and Developer",
    },
    school: "Wild Code School",
    url: "https://wildcodeschool.fr/",
  },
  {
    title: {
      fr: "Titre RNCP niveau 5 - Développeur Web et Web Mobile",
      en: "French national certification, level 5 - Web and Mobile Web Developer",
    },
    school: "Wild Code School",
    url: "https://wildcodeschool.fr/",
  },
  {
    title: {
      fr: "Licence Pro Ingénierie et Maintenance Biomédicales",
      en: "Professional bachelor's degree in Biomedical Engineering and Maintenance",
    },
    school: "IUT de Lorient",
    url: "http://www-iutlorient.univ-ubs.fr/",
  },
  {
    title: {
      fr: "DUT Génie Industriel et Maintenance",
      en: "Two-year technical degree (DUT) in Industrial Engineering and Maintenance",
    },
    school: "IUT de Saint-Nazaire",
    url: "https://iut-sn.univ-nantes.fr/",
  },
];

const EXPERIENCES: Experience[] = [
  {
    role: same("Data Scientist / Analyst"),
    kind: { fr: "Stage", en: "Internship" },
    company: "Datatop",
    url: "https://datatop.fr/",
    date: { fr: "juil. 2026", en: "Jul. 2026" },
    description: {
      fr: "Préparation de données et workflows Data Science sous Dataiku, entraînement et évaluation de modèles de Machine Learning.",
      en: "Data preparation and Data Science workflows in Dataiku, training and evaluating Machine Learning models.",
    },
  },
  {
    role: same("DevOps / SysAdmin"),
    kind: { fr: "Stage", en: "Internship" },
    company: "Aukfood",
    url: "https://www.aukfood.fr/",
    date: { fr: "juin 2026", en: "Jun. 2026" },
    description: {
      fr: "Pipeline de déploiement automatisé de machines virtuelles : Debian, Proxmox, OpenTofu et Ansible.",
      en: "Automated virtual machine deployment pipeline: Debian, Proxmox, OpenTofu and Ansible.",
    },
  },
  {
    role: same("Teaching Assistant"),
    kind: { fr: "Alternance", en: "Work-study" },
    company: "Wild Code School",
    url: "https://wildcodeschool.fr/",
    date: { fr: "sept. 2023 - sept. 2024", en: "Sep. 2023 - Sep. 2024" },
    description: {
      fr: "Assistant formateur sur le bootcamp Développeur Web et Web Mobile, en parallèle de mon titre CDA (Next.js, GraphQL, TypeScript, CI/CD).",
      en: "Teaching assistant on the Web and Mobile Web Developer bootcamp, alongside my Application Designer and Developer degree (Next.js, GraphQL, TypeScript, CI/CD).",
    },
  },
  {
    role: { fr: "Développeur web", en: "Web developer" },
    kind: { fr: "Stage", en: "Internship" },
    company: "Wandev",
    url: "https://www.linkedin.com/in/erwan-marcq-727077211/",
    date: { fr: "sept. 2022", en: "Sep. 2022" },
    description: {
      fr: "Découverte de HTML, CSS et JavaScript, et création du jeu SeaHorse Game.",
      en: "First steps with HTML, CSS and JavaScript, and creation of the SeaHorse Game.",
    },
  },
];

const muted = "text-neutral-500 dark:text-neutral-400";
// Espace avant les deux-points en français uniquement
const colon = (locale: Locale) => (locale === "fr" ? " :" : ":");

export const TAB_IDS = [
  "hardskills",
  "softskills",
  "education",
  "experiences",
] as const;
export type TabId = (typeof TAB_IDS)[number];

export function tabContent(id: TabId, locale: Locale) {
  switch (id) {
    case "hardskills":
      return (
        <ul className="list-disc pl-8">
          {HARD_SKILLS.map((skill) => (
            <li key={skill.items.fr}>
              {skill.label && (
                <span className="font-bold">
                  {skill.label[locale]}
                  {colon(locale)}
                </span>
              )}{" "}
              {skill.items[locale]}
            </li>
          ))}
        </ul>
      );
    case "softskills":
      return (
        <ul className="list-disc pl-8">
          {SOFT_SKILLS.map((skill) => (
            <li key={skill.fr}>{skill[locale]}</li>
          ))}
        </ul>
      );
    case "education":
      return (
        <ul className="list-disc pl-8">
          {EDUCATION.map((item) => (
            <li key={item.title.fr}>
              {item.title[locale]} -{" "}
              <a href={item.url} className="gradient-text">
                {item.school}
              </a>
            </li>
          ))}
        </ul>
      );
    case "experiences":
      return (
        <ul className="list-disc pl-8 flex flex-col gap-2">
          {EXPERIENCES.map((item) => (
            <li key={item.company}>
              {item.role[locale]} - {item.kind[locale]} -{" "}
              <a href={item.url} className="gradient-text">
                {item.company}
              </a>{" "}
              <span className={muted}>({item.date[locale]})</span>
              <p className={`text-sm ${muted}`}>{item.description[locale]}</p>
            </li>
          ))}
        </ul>
      );
  }
}
