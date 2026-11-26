export type Recommendation = {
  author: string;
  /** Poste actuel de l'auteur */
  title: string;
  /** Relation avec moi au moment de la recommandation */
  relation: string;
  date: string;
  /** Extrait exact de la recommandation LinkedIn ([…] = coupe, jamais de reformulation) */
  quote: string;
  /** Langue de la citation, si elle n'est pas en français (ex. "en") */
  lang?: string;
  /** Traduction française, affichée sous la citation à la demande */
  translation?: string;
};

export const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/samuel-faber-developpeur-web-fullstack-data-scientist-nantes/details/recommendations/";

export const RECOMMENDATIONS: Recommendation[] = [
  {
    author: "Benjamin Auzanneau",
    title:
      "Ingénieur et formateur en IA, Data Science, Data Engineering et MLOps",
    relation: "Mon professeur au bootcamp Data Science & AI du Wagon",
    date: "Novembre 2026",
    lang: "en",
    quote:
      "He consistently demonstrated strong technical skills, curiosity, independence, and a great ability to learn and apply new concepts quickly. But what really stood out to me was his ability to bring people together and make a team work at its best. […] Of course, he has the technical skills, but more importantly, he has the human qualities that make everyone around him better.",
    translation:
      "Il a constamment fait preuve de solides compétences techniques, de curiosité, d'autonomie et d'une grande capacité à apprendre et à appliquer rapidement de nouveaux concepts. Mais ce qui m'a vraiment marqué, c'est sa capacité à rassembler les gens et à faire fonctionner une équipe au mieux. […] Bien sûr, il a les compétences techniques, mais surtout, il a les qualités humaines qui rendent meilleurs tous ceux qui l'entourent.",
  },
  {
    author: "Romain Guillemot",
    title: "Développeur, formateur et manager",
    relation: "Mon responsable direct à la Wild Code School",
    date: "Septembre 2024",
    quote:
      "Samuel a occupé ce rôle avec professionnalisme tout en poursuivant en parallèle sa formation de concepteur développeur avancé, ce qui témoigne de son organisation et de sa capacité à jongler entre plusieurs responsabilités exigeantes. Samuel est un collaborateur fiable, avec un esprit analytique aiguisé et un excellent relationnel.",
  },
  {
    author: "Ayoub Idrissi Ouedrhiri",
    title: "Développeur Full Stack senior",
    relation: "Mon supérieur à la Wild Code School",
    date: "Septembre 2024",
    quote:
      "Samuel fait preuve d'une grande maîtrise technique et d'une réelle capacité à simplifier les concepts les plus complexes pour les rendre accessibles aux apprenants. […] Son implication va bien au-delà des attentes habituelles, ce qui en fait un élément moteur dans notre environnement de travail.",
  },
];
