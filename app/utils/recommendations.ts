import type { Locale } from "@/i18n/routing";
import type { Localized } from "./projects";

export type Recommendation = {
  author: string;
  /** Poste actuel de l'auteur */
  title: Localized;
  /** Relation avec moi au moment de la recommandation */
  relation: Localized;
  date: Localized;
  /** Extrait exact de la recommandation LinkedIn ([…] = coupe, jamais de reformulation) */
  quote: string;
  /** Langue d'origine de la citation */
  lang: Locale;
  /** Traductions, affichées sous la citation à la demande quand la page n'est pas dans la langue d'origine */
  translations: Partial<Localized>;
};

export const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/samuel-faber-developpeur-web-fullstack-data-scientist-nantes/details/recommendations/";

export const RECOMMENDATIONS: Recommendation[] = [
  {
    author: "Benjamin Auzanneau",
    title: {
      fr: "Ingénieur et formateur en IA, Data Science, Data Engineering et MLOps",
      en: "AI, Data Science, Data Engineering and MLOps engineer and instructor",
    },
    relation: {
      fr: "Mon professeur au bootcamp Data Science & AI du Wagon",
      en: "My teacher on Le Wagon's Data Science & AI bootcamp",
    },
    date: { fr: "Novembre 2026", en: "November 2026" },
    lang: "en",
    quote:
      "He consistently demonstrated strong technical skills, curiosity, independence, and a great ability to learn and apply new concepts quickly. But what really stood out to me was his ability to bring people together and make a team work at its best. […] Of course, he has the technical skills, but more importantly, he has the human qualities that make everyone around him better.",
    translations: {
      fr: "Il a constamment fait preuve de solides compétences techniques, de curiosité, d'autonomie et d'une grande capacité à apprendre et à appliquer rapidement de nouveaux concepts. Mais ce qui m'a vraiment marqué, c'est sa capacité à rassembler les gens et à faire fonctionner une équipe au mieux. […] Bien sûr, il a les compétences techniques, mais surtout, il a les qualités humaines qui rendent meilleurs tous ceux qui l'entourent.",
    },
  },
  {
    author: "Romain Guillemot",
    title: {
      fr: "Développeur, formateur et manager",
      en: "Developer, instructor and manager",
    },
    relation: {
      fr: "Mon responsable direct à la Wild Code School",
      en: "My direct manager at the Wild Code School",
    },
    date: { fr: "Septembre 2024", en: "September 2024" },
    lang: "fr",
    quote:
      "Samuel a occupé ce rôle avec professionnalisme tout en poursuivant en parallèle sa formation de concepteur développeur avancé, ce qui témoigne de son organisation et de sa capacité à jongler entre plusieurs responsabilités exigeantes. Samuel est un collaborateur fiable, avec un esprit analytique aiguisé et un excellent relationnel.",
    translations: {
      en: "Samuel carried out this role professionally while also pursuing his advanced application designer and developer training, which shows how organised he is and how well he can juggle several demanding responsibilities. Samuel is a reliable colleague, with a sharp analytical mind and excellent people skills.",
    },
  },
  {
    author: "Ayoub Idrissi Ouedrhiri",
    title: {
      fr: "Développeur Full Stack senior",
      en: "Senior Full Stack Developer",
    },
    relation: {
      fr: "Mon supérieur à la Wild Code School",
      en: "My manager at the Wild Code School",
    },
    date: { fr: "Septembre 2024", en: "September 2024" },
    lang: "fr",
    quote:
      "Samuel fait preuve d'une grande maîtrise technique et d'une réelle capacité à simplifier les concepts les plus complexes pour les rendre accessibles aux apprenants. […] Son implication va bien au-delà des attentes habituelles, ce qui en fait un élément moteur dans notre environnement de travail.",
    translations: {
      en: "Samuel shows great technical mastery and a real ability to simplify the most complex concepts to make them accessible to learners. […] His commitment goes well beyond usual expectations, which makes him a driving force in our work environment.",
    },
  },
];
