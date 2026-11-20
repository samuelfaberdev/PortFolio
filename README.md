# samuelfaber.dev

Portfolio de **Samuel Faber**, Concepteur Développeur d'Applications Web et IA, en recherche d'une alternance (niveau 7) ou d'un CDI en Data Science.

🌐 **Site en ligne : [samuelfaber.dev](https://samuelfaber.dev/)**

## Contenu du site

- **Accueil** : présentation, bouton de contact et téléchargement du CV
- **À propos** : parcours, avec des onglets Hard Skills, Soft Skills, Formations et Expériences
- **Mes projets** : grille de cartes avec visuel, description, technologies, lien de démo et lien vers le code
- **Contact** : disponibilité, zone géographique, liens GitHub / LinkedIn et formulaire de contact
- Un easter egg se cache aussi quelque part… 🥚

Le site est responsive (mobile, tablette, ordinateur) et suit le thème clair ou sombre du système.

## Stack technique

| Domaine               | Outils                                                                               |
| --------------------- | ------------------------------------------------------------------------------------ |
| Framework             | [Next.js 14](https://nextjs.org/) (App Router, Server Actions), React 18, TypeScript |
| Style                 | Tailwind CSS, `tailwindcss-animated`                                                 |
| Formulaire de contact | [Resend](https://resend.com/) pour l'envoi d'e-mails, Google reCAPTCHA v3            |
| Notifications         | `react-toastify`                                                                     |
| Déploiement           | Docker (build Next.js `standalone`), Docker Compose                                  |

## Démarrage en local

**Prérequis** : Node.js 18.17 ou plus récent, et npm.

```bash
git clone https://github.com/samuelfaberdev/PortFolio.git
cd PortFolio
npm install
cp .env.sample .env.local   # puis renseigner les variables (voir ci-dessous)
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

> Si la page semble figée après un changement de branche, arrête le serveur, supprime le dossier `.next`, relance `npm run dev`, puis recharge la page avec **Ctrl+Shift+R**.

### Scripts

| Commande        | Rôle                                                        |
| --------------- | ----------------------------------------------------------- |
| `npm run dev`   | Serveur de développement                                    |
| `npm run build` | Build de production (lint et vérification des types inclus) |
| `npm start`     | Lance le build de production                                |
| `npm run lint`  | ESLint (`next/core-web-vitals`, `next/typescript`)          |

## Variables d'environnement

Elles sont listées dans [`.env.sample`](.env.sample).

| Variable                       | Rôle                                                          |
| ------------------------------ | ------------------------------------------------------------- |
| `RESEND_EMAIL`                 | Adresse qui **reçoit** les messages du formulaire de contact  |
| `RESEND_API_KEY`               | Clé API [Resend](https://resend.com/api-keys)                 |
| `NEXT_PUBLIC_CAPTCHA_SITE_KEY` | Clé de site reCAPTCHA v3 (publique, utilisée côté navigateur) |
| `CAPTCHA_SECRET_KEY`           | Clé secrète reCAPTCHA v3 (utilisée côté serveur)              |

Sans ces variables, le site s'affiche normalement, mais l'envoi du formulaire échoue. Pour tester le captcha en local, ajoute `localhost` aux domaines autorisés dans la [console reCAPTCHA](https://www.google.com/recaptcha/admin).

## Formulaire de contact

Le formulaire appelle la Server Action `contactMeAction` ([`app/actions.ts`](app/actions.ts)), qui :

1. valide les champs côté serveur : format de l'e-mail, longueurs maximales, objet sur une seule ligne ;
2. vérifie le jeton reCAPTCHA (score ≥ 0,5 et action `contact`) ;
3. envoie le message **uniquement** à `RESEND_EMAIL`, avec un `replyTo` vers le visiteur, et un contenu HTML échappé.

Le site n'envoie donc jamais d'e-mail vers une adresse saisie dans le formulaire. L'expéditeur `contact@samuelfaber.dev` doit appartenir à un domaine vérifié dans Resend.

## Ajouter ou modifier un projet

Les projets sont définis dans [`app/utils/projects.ts`](app/utils/projects.ts). **L'ordre du tableau est l'ordre d'affichage.**

```ts
{
  title: "Mon projet",
  context: "Projet perso · Wild Code School", // petite ligne au-dessus du titre
  description: "Une ou deux phrases sur le projet.",
  stack: ["React", "Node.js"],
  emoji: "🚀",                                 // affiché s'il n'y a pas d'image
  image: "/images/projets/mon-projet.webp",    // optionnel
  demo: { url: "https://…", label: "Voir le site" }, // optionnel, label par défaut : « Voir le site »
  unavailable: { label: "Pas encore en ligne", hint: "…" }, // optionnel, badge non cliquable si pas de démo
  repo: "https://github.com/…",                // optionnel
}
```

**Visuels** : place les images dans `public/images/projets/`, au format **900 × 352 px** (ratio des bandeaux), de préférence en WebP. Pour un logo, centre-le sur un fond de sa couleur, pour qu'il ne soit pas recadré.

Les onglets de la section « À propos » se modifient dans [`app/utils/data.tsx`](app/utils/data.tsx). Le CV se remplace dans [`public/cv/CV_Samuel_Faber.pdf`](public/cv/CV_Samuel_Faber.pdf), en gardant le même nom de fichier.

## Structure du projet

```text
app/
├── actions.ts            # Server Action du formulaire de contact
├── layout.tsx            # Layout global (en-tête, pied de page, script reCAPTCHA)
├── page.tsx              # Page d'accueil (assemble les sections)
├── game/page.tsx         # Page cachée (easter egg)
├── components/           # Header, Navbar, sections Hero / About / Projects / Contact…
└── utils/
    ├── data.tsx          # Contenu des onglets « À propos »
    ├── projects.ts       # Liste des projets
    └── captcha.ts        # Génération du jeton reCAPTCHA côté client
public/
├── cv/                   # CV téléchargeable
└── images/               # Photo, icônes, visuels des projets
@types/konami/            # Typage de la librairie konami
prod.Dockerfile           # Image de production (Next.js standalone)
compose.prod.yml          # Déploiement Docker Compose
```

## Déploiement (Docker)

Sur le serveur, crée un fichier `.env` à la racine avec les variables d'environnement, puis lance :

```bash
docker compose -f compose.prod.yml up -d --build
```

Le site est alors servi sur le port **8000** de la machine. Il redémarre automatiquement grâce à `restart: always`. Les variables sont injectées au build et à l'exécution : après les avoir modifiées, il faut **reconstruire** l'image (`--build`).

## Contact

- LinkedIn : [Samuel Faber](https://www.linkedin.com/in/samuel-faber-developpeur-web-fullstack-data-scientist-nantes/)
- GitHub : [@samuelfaberdev](https://github.com/samuelfaberdev)
- Formulaire : [samuelfaber.dev/#contact](https://samuelfaber.dev/#contact)
