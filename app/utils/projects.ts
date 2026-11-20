export type Project = {
  title: string;
  /** Contexte affiché au-dessus du titre (formation, perso, hackathon…) */
  context: string;
  description: string;
  stack: string[];
  /** Emoji affiché quand aucune image n'est fournie */
  emoji: string;
  /** Chemin dans /public, bandeau 900×352 px, ex. "/images/projets/shorturl.webp" */
  image?: string;
  demo?: { url: string; label?: string };
  /** Texte du badge non cliquable affiché quand il n'y a pas de démo */
  unavailable?: { label: string; hint?: string };
  repo?: string;
};

// L'ordre de ce tableau est l'ordre d'affichage sur le site.
export const PROJECTS: Project[] = [
  {
    title: "Master Shelf",
    context: "Projet Data Science · Le Wagon",
    description:
      "À partir d'une photo et d'une liste d'ingrédients, l'application détecte ce que l'on a sous la main (YOLO) et recommande des recettes réalisables sans faire les courses, grâce à un système de recommandation par plus proches voisins.",
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "YOLO",
      "scikit-learn",
      "BigQuery",
      "Docker",
    ],
    emoji: "🥕",
    repo: "https://github.com/samuelfaberdev/Master-Shelf",
  },
  {
    title: "ShortURL",
    context: "Projet solo CDA · Wild Code School",
    description:
      "Réducteur d'URL avec tableau de bord intégré (suivi statistique et gestion des liens), en ligne sur smfb.me. Front Next.js, API GraphQL typée avec TypeORM, authentification JWT et déploiement conteneurisé.",
    stack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "TypeORM",
      "PostgreSQL",
      "Docker",
    ],
    emoji: "🔗",
    image: "/images/projets/shorturl.webp",
    demo: { url: "https://smfb.me/" },
    repo: "https://github.com/samuelfaberdev/ShortURL",
  },
  {
    title: "Inovin",
    context: "Projet 3 · Wild Code School",
    description:
      "Application tablette et PC réalisée pour un client : un atelier de dégustation où les participants découvrent les secrets du vin et composent leur propre assemblage. Réalisée en équipe.",
    stack: ["React", "Tailwind", "Node.js", "Express", "MySQL", "JWT"],
    emoji: "🍷",
    image: "/images/projets/inovin.webp",
    demo: { url: "https://inovin.samuelfaber.dev/" },
    repo: "https://github.com/samuelfaberdev/WCS-Projet3-Inovin",
  },
  {
    title: "JWBook",
    context: "Projet solo · Checkpoint 4 · Wild Code School",
    description:
      "« Jurassic World : La Colo du Crétacé », un livre-jeu dont vous êtes le héros : comptes utilisateurs, navigation par chapitres et sauvegarde de la progression.",
    stack: ["React", "MUI", "Tailwind", "Express", "MySQL", "Docker"],
    emoji: "🦖",
    demo: { url: "https://jwbook.samuelfaber.dev/" },
    repo: "https://github.com/samuelfaberdev/CheckPoint4-JWBook",
  },
  {
    title: "Green Mobile",
    context: "Hackathon Emmaüs Connect · Wild Code School",
    description:
      "Estimation du score et du prix de revente conseillé d'un smartphone de seconde main, à partir de ses caractéristiques techniques et de son état. Développé de zéro en environ 60 h pour le client Emmaüs Connect, en équipe de cinq (Team Zagreb).",
    stack: ["React", "Tailwind", "Express", "MySQL", "Docker"],
    emoji: "📱",
    image: "/images/projets/green-mobile.webp",
    demo: { url: "https://zagreb.samuelfaber.dev/" },
    repo: "https://github.com/samuelfaberdev/WCS-Hackathon2-Team-Zagreb",
  },
  {
    title: "Choîxteau",
    context: "Hackathon · Wild Code School",
    description:
      "Développé en moins de 36 h sur le thème des vacances, avec pour contrainte la consommation d'une API publique : un voyage princier à l'aveugle, où l'application vous fait découvrir un château et le situe sur une carte.",
    stack: ["React", "Vite", "Tailwind", "OpenTripMap", "Google Maps API"],
    emoji: "🏰",
    image: "/images/projets/choixteau.webp",
    demo: { url: "https://choixteau-cq.netlify.app/" },
    repo: "https://github.com/samuelfaberdev/WCS-Hackathon1-Choixteau",
  },
  {
    title: "AlloAnime",
    context: "Projet 2 · Wild Code School",
    description:
      "Plateforme de streaming d'animés dans l'esprit d'ADN ou Crunchyroll : recherche, catégories, synopsis et bandes-annonces, alimentée par l'API Jikan. Réalisée en 5 semaines.",
    stack: ["React", "SCSS", "API Jikan", "Agile Scrum"],
    emoji: "🎌",
    image: "/images/projets/alloanime.webp",
    demo: { url: "https://wcs-projet2-allo-anime.vercel.app/" },
    repo: "https://github.com/samuelfaberdev/WCS-Projet2-AlloAnime",
  },
  {
    title: "RavenFeed",
    context: "Projet 1 · Wild Code School",
    description:
      "Mini réseau social à la manière de Twitter, en one page et mobile first : publication, réponses, likes et partages, thème sombre et couleur personnalisable. Réalisé en 2 semaines.",
    stack: ["HTML", "CSS", "JavaScript"],
    emoji: "🐦‍⬛",
    image: "/images/projets/ravenfeed.webp",
    demo: { url: "https://samuelfaberdev.github.io/WCS-Projet1-RavenFeed/" },
    repo: "https://github.com/samuelfaberdev/WCS-Projet1-RavenFeed",
  },
  {
    title: "Jolly Roger Clock",
    context: "Projet perso · Fitbit",
    description:
      "Cadran de montre aux couleurs pirates pour Fitbit Versa 3 et Sense, publié sur la galerie officielle Fitbit.",
    stack: ["Fitbit SDK", "JavaScript", "SVG"],
    emoji: "🏴‍☠️",
    image: "/images/projets/jolly-roger-clock.webp",
    demo: {
      url: "https://gallery.fitbit.com/details/1026b2bc-b743-4617-aa94-31aa36aaa055",
      label: "Installer",
    },
    repo: "https://github.com/samuelfaberdev/Jolly-Roger-Clock-Fitbit-OS5",
  },
  {
    title: "Cadeau Morgane",
    context: "Jeu · Projet perso",
    description:
      "Un jeu-cadeau sur mesure : il faut aller jusqu'au bout de la partie pour découvrir la surprise qui se cache à la fin.",
    stack: ["HTML", "CSS", "JavaScript"],
    emoji: "🎁",
    demo: {
      url: "https://samuelfaberdev.github.io/Cadeau-Morgane/",
      label: "Jouer",
    },
  },
  {
    title: "SeaHorse Game",
    context: "Jeu · Projet perso",
    description:
      "Shoot'em up steampunk en side-scrolling dessiné en Canvas : flèches pour se déplacer, espace pour tirer. Réalisé en suivant un tutoriel pendant mon stage.",
    stack: ["JavaScript", "Canvas"],
    emoji: "🌊",
    image: "/images/projets/seahorse.webp",
    // Jouable uniquement via le Konami Code (page /game), en easter egg
    unavailable: {
      label: "🥚 Easter egg caché sur ce site",
      hint: "Indice : un célèbre code de triche de jeu vidéo…",
    },
    repo: "https://github.com/samuelfaberdev/Seahorse-Game",
  },
];
