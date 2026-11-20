export type Recommendation = {
  author: string;
  /** Poste actuel de l'auteur */
  title: string;
  /** Relation avec moi au moment de la recommandation */
  relation: string;
  date: string;
  /** Extrait exact de la recommandation LinkedIn ([…] = coupe, jamais de reformulation) */
  quote: string;
};

export const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/samuel-faber-developpeur-web-fullstack-data-scientist-nantes/details/recommendations/";

export const RECOMMENDATIONS: Recommendation[] = [
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
  {
    author: "Sébastien Birolleau",
    title: "Développeur associé chez Yaal Coop",
    relation: "Camarade de promotion à la Wild Code School",
    date: "Septembre 2024",
    quote:
      "[…] Samuel est un grand pédagogue et […] il est toujours ravi d'aider et de partager ses connaissances. Bref, Samuel est quelqu'un sur qui on peut s'appuyer et même se reposer.",
  },
];
