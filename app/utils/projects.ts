import type { Locale } from "@/i18n/routing";

/** Texte disponible dans chaque langue du site */
export type Localized = Record<Locale, string>;

export type Project = {
  title: string;
  /** Contexte affiché au-dessus du titre (formation, perso, hackathon…) */
  context: Localized;
  description: Localized;
  stack: string[];
  /** Emoji affiché quand aucune image n'est fournie */
  emoji: string;
  /** Chemin dans /public, bandeau 900×352 px, ex. "/images/projets/shorturl.webp" */
  image?: string;
  demo?: { url: string; label?: Localized };
  /** Texte du badge non cliquable affiché quand il n'y a pas de démo */
  unavailable?: { label: Localized; hint?: Localized };
  repo?: string;
  /** Projet d'équipe : taille (si connue) et rôle. Absent = projet réalisé seul. */
  team?: { size?: number; role: Localized };
};

// L'ordre de ce tableau est l'ordre d'affichage sur le site.
export const PROJECTS: Project[] = [
  {
    title: "Master Shelf",
    context: {
      fr: "Projet Data Science · Le Wagon",
      en: "Data Science project · Le Wagon",
    },
    description: {
      fr: "À partir d'une photo et d'une liste d'ingrédients, l'application détecte ce que l'on a sous la main (YOLO) et recommande des recettes réalisables sans faire les courses, grâce à un système de recommandation par plus proches voisins.",
      en: "From a photo and a list of ingredients, the app detects what you have on hand (YOLO) and recommends recipes you can make without going shopping, using a nearest-neighbours recommender system.",
    },
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
    image: "/images/projets/master-shelf.webp",
    demo: { url: "https://mastershelf.samuelfaber.dev/" },
    repo: "https://github.com/samuelfaberdev/Master-Shelf",
    team: {
      size: 4,
      role: {
        fr: "entraînement du modèle YOLO, API FastAPI, MLOps, référent débogage de l'équipe",
        en: "YOLO model training, FastAPI API, MLOps, the team's go-to debugger",
      },
    },
  },
  {
    title: "ShortURL",
    context: {
      fr: "Projet solo CDA · Wild Code School",
      en: "Solo project, application developer degree · Wild Code School",
    },
    description: {
      fr: "Réducteur d'URL avec tableau de bord intégré (suivi statistique et gestion des liens), en ligne sur smfb.me. Front Next.js, API GraphQL typée avec TypeORM, authentification JWT et déploiement conteneurisé.",
      en: "URL shortener with a built-in dashboard (link statistics and management), live at smfb.me. Next.js front end, typed GraphQL API with TypeORM, JWT authentication and containerised deployment.",
    },
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
    context: {
      fr: "Projet 3 · Wild Code School",
      en: "Project 3 · Wild Code School",
    },
    description: {
      fr: "Application tablette et PC réalisée pour un client : un atelier de dégustation où les participants découvrent les secrets du vin et composent leur propre assemblage.",
      en: "Tablet and desktop app built for a client: a tasting workshop where participants discover the secrets of wine and create their own blend.",
    },
    stack: ["React", "Tailwind", "Node.js", "Express", "MySQL", "JWT"],
    emoji: "🍷",
    image: "/images/projets/inovin.webp",
    demo: { url: "https://inovin.samuelfaber.dev/" },
    repo: "https://github.com/samuelfaberdev/WCS-Projet3-Inovin",
    team: {
      size: 6,
      role: {
        fr: "lead du projet, référent débogage de l'équipe, formulaire de dégustation",
        en: "project lead, the team's go-to debugger, tasting form",
      },
    },
  },
  {
    title: "JWBook",
    context: {
      fr: "Projet solo · Checkpoint 4 · Wild Code School",
      en: "Solo project · Checkpoint 4 · Wild Code School",
    },
    description: {
      fr: "« Jurassic World : La Colo du Crétacé », un livre-jeu dont vous êtes le héros : comptes utilisateurs, navigation par chapitres et sauvegarde de la progression.",
      en: "“Jurassic World: Camp Cretaceous”, a choose-your-own-adventure gamebook: user accounts, chapter navigation and saved progress.",
    },
    stack: ["React", "MUI", "Tailwind", "Express", "MySQL", "Docker"],
    emoji: "🦖",
    demo: { url: "https://jwbook.samuelfaber.dev/" },
    repo: "https://github.com/samuelfaberdev/CheckPoint4-JWBook",
  },
  {
    title: "Green Mobile",
    context: {
      fr: "Hackathon Emmaüs Connect · Wild Code School",
      en: "Emmaüs Connect hackathon · Wild Code School",
    },
    description: {
      fr: "Estimation du score et du prix de revente conseillé d'un smartphone de seconde main, à partir de ses caractéristiques techniques et de son état. Développé de zéro en environ 60 h pour le client Emmaüs Connect (Team Zagreb).",
      en: "Estimates the score and recommended resale price of a second-hand smartphone from its specs and condition. Built from scratch in about 60 hours for the client Emmaüs Connect (Team Zagreb).",
    },
    stack: ["React", "Tailwind", "Express", "MySQL", "Docker"],
    emoji: "📱",
    image: "/images/projets/green-mobile.webp",
    demo: { url: "https://zagreb.samuelfaber.dev/" },
    repo: "https://github.com/samuelfaberdev/WCS-Hackathon2-Team-Zagreb",
    team: {
      size: 5,
      role: {
        fr: "lead du projet, algorithme de calcul du score et du prix, référent débogage de l'équipe",
        en: "project lead, score and price algorithm, the team's go-to debugger",
      },
    },
  },
  {
    title: "Choîxteau",
    context: {
      fr: "Hackathon · Wild Code School",
      en: "Hackathon · Wild Code School",
    },
    description: {
      fr: "Développé en moins de 36 h sur le thème des vacances, avec pour contrainte la consommation d'une API publique : un voyage princier à l'aveugle, où l'application vous fait découvrir un château et le situe sur une carte.",
      en: "Built in under 36 hours on a holiday theme, with the constraint of using a public API: a blind royal getaway, where the app introduces you to a castle and shows it on a map.",
    },
    stack: ["React", "Vite", "Tailwind", "OpenTripMap", "Google Maps API"],
    emoji: "🏰",
    image: "/images/projets/choixteau.webp",
    demo: { url: "https://choixteau-cq.netlify.app/" },
    repo: "https://github.com/samuelfaberdev/WCS-Hackathon1-Choixteau",
    team: {
      size: 5,
      role: {
        fr: "lead du projet, intégration des API (dont Google Maps), référent débogage de l'équipe",
        en: "project lead, API integration (including Google Maps), the team's go-to debugger",
      },
    },
  },
  {
    title: "AlloAnime",
    context: {
      fr: "Projet 2 · Wild Code School",
      en: "Project 2 · Wild Code School",
    },
    description: {
      fr: "Plateforme de streaming d'animés dans l'esprit d'ADN ou Crunchyroll : recherche, catégories, synopsis et bandes-annonces, alimentée par l'API Jikan. Réalisée en 5 semaines.",
      en: "Anime streaming platform in the spirit of ADN or Crunchyroll: search, categories, synopses and trailers, powered by the Jikan API. Built in 5 weeks.",
    },
    stack: ["React", "SCSS", "API Jikan", "Agile Scrum"],
    emoji: "🎌",
    image: "/images/projets/alloanime.webp",
    demo: { url: "https://wcs-projet2-allo-anime.vercel.app/" },
    repo: "https://github.com/samuelfaberdev/WCS-Projet2-AlloAnime",
    team: {
      size: 4,
      role: {
        fr: "lead du projet, intégration de l'API, référent débogage de l'équipe, carrousel, une bonne partie du CSS",
        en: "project lead, API integration, the team's go-to debugger, carousel, much of the CSS",
      },
    },
  },
  {
    title: "RavenFeed",
    context: {
      fr: "Projet 1 · Wild Code School",
      en: "Project 1 · Wild Code School",
    },
    description: {
      fr: "Mini réseau social à la manière de Twitter, en one page et mobile first : publication, réponses, likes et partages, thème sombre et couleur personnalisable. Réalisé en 2 semaines.",
      en: "Twitter-style mini social network, single-page and mobile-first: posts, replies, likes and shares, dark theme and customisable accent colour. Built in 2 weeks.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    emoji: "🐦‍⬛",
    image: "/images/projets/ravenfeed.webp",
    demo: { url: "https://samuelfaberdev.github.io/WCS-Projet1-RavenFeed/" },
    repo: "https://github.com/samuelfaberdev/WCS-Projet1-RavenFeed",
    team: {
      size: 3,
      role: {
        fr: "intégration du fil de messages principal, référent débogage de l'équipe",
        en: "main message feed, the team's go-to debugger",
      },
    },
  },
  {
    title: "Jolly Roger Clock",
    context: {
      fr: "Projet perso · Fitbit",
      en: "Personal project · Fitbit",
    },
    description: {
      fr: "Cadran de montre aux couleurs pirates pour Fitbit Versa 3 et Sense, publié sur la galerie officielle Fitbit.",
      en: "Pirate-themed watch face for Fitbit Versa 3 and Sense, published in the official Fitbit gallery.",
    },
    stack: ["Fitbit SDK", "JavaScript", "SVG"],
    emoji: "🏴‍☠️",
    image: "/images/projets/jolly-roger-clock.webp",
    demo: {
      url: "https://gallery.fitbit.com/details/1026b2bc-b743-4617-aa94-31aa36aaa055",
      label: {
        fr: "Installer",
        en: "Install",
      },
    },
    repo: "https://github.com/samuelfaberdev/Jolly-Roger-Clock-Fitbit-OS5",
  },
  {
    title: "Cadeau Morgane",
    context: {
      fr: "Jeu · Projet perso",
      en: "Game · Personal project",
    },
    description: {
      fr: "Un jeu-cadeau sur mesure : il faut aller jusqu'au bout de la partie pour découvrir la surprise qui se cache à la fin.",
      en: "A custom-made gift game: you have to play all the way through to discover the surprise waiting at the end.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    emoji: "🎁",
    demo: {
      url: "https://samuelfaberdev.github.io/Cadeau-Morgane/",
      label: {
        fr: "Jouer",
        en: "Play",
      },
    },
  },
  {
    title: "SeaHorse Game",
    context: {
      fr: "Jeu · Projet perso",
      en: "Game · Personal project",
    },
    description: {
      fr: "Shoot'em up steampunk en side-scrolling dessiné en Canvas : flèches pour se déplacer, espace pour tirer. Réalisé en suivant un tutoriel pendant mon stage.",
      en: "Side-scrolling steampunk shoot 'em up drawn with Canvas: arrow keys to move, space to shoot. Built by following a tutorial during my internship.",
    },
    stack: ["JavaScript", "Canvas"],
    emoji: "🌊",
    image: "/images/projets/seahorse.webp",
    // Jouable uniquement via le Konami Code (page /game), en easter egg
    unavailable: {
      label: {
        fr: "🥚 Easter egg caché sur ce site",
        en: "🥚 Easter egg hidden on this site",
      },
      hint: {
        fr: "Indice : un célèbre code de triche de jeu vidéo…",
        en: "Hint: a famous video game cheat code…",
      },
    },
    repo: "https://github.com/samuelfaberdev/Seahorse-Game",
  },
];
