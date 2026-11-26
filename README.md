# samuelfaber.dev

[![CI](https://github.com/samuelfaberdev/PortFolio/actions/workflows/ci.yml/badge.svg)](https://github.com/samuelfaberdev/PortFolio/actions/workflows/ci.yml)

Portfolio de **Samuel Faber**, Concepteur Développeur d'Applications Web et IA, en recherche d'une alternance (niveau 7) ou d'un CDI en Data Science.

🌐 **Site en ligne : [samuelfaber.dev](https://samuelfaber.dev/)**

## Contenu du site

- **Accueil** : présentation, bouton de contact et téléchargement du CV
- **À propos** : parcours, avec des onglets Hard Skills, Soft Skills, Formations et Expériences
- **Mes projets** : grille de cartes avec visuel, description, technologies, lien de démo et lien vers le code
- **Ils me recommandent** : extraits de recommandations LinkedIn ([`app/utils/recommendations.ts`](app/utils/recommendations.ts)), cités mot pour mot
- **Contact** : disponibilité, zone géographique, liens GitHub / LinkedIn et formulaire de contact
- **Mentions légales et confidentialité** (`/mentions-legales`) : éditeur, hébergeur, données du formulaire, traceurs, refus des statistiques
- Un easter egg se cache aussi quelque part… 🥚

Le site est responsive (mobile, tablette, ordinateur). Un bouton dans l'en-tête permet de choisir le thème : automatique (selon le système), clair ou sombre. Le choix est mémorisé dans le navigateur ([`app/utils/theme.ts`](app/utils/theme.ts)).

## Langues (français / anglais)

Le site existe en **français** (langue principale, à la racine `/`) et en **anglais** (sous `/en`), grâce à [next-intl](https://next-intl.dev/).

- **Choix automatique** ([`middleware.ts`](middleware.ts)) : seule la première langue du navigateur compte. Si elle est française (`fr`, `fr-BE`, `fr-CA`…), le site s'affiche en français ; sinon, en anglais. Sans langue indiquée (robots d'indexation, aperçus de liens), il s'affiche en français.
- **Choix manuel** : le sélecteur FR / EN de l'en-tête garde la section affichée. Le choix est mémorisé 12 mois dans le cookie `NEXT_LOCALE`, posé seulement s'il diffère de la langue du navigateur.
- **Textes de l'interface** : [`messages/fr.json`](messages/fr.json) et [`messages/en.json`](messages/en.json), avec les mêmes clés dans les deux fichiers.
- **Contenu** : chaque texte des projets, des onglets « À propos » et des recommandations s'écrit `{ fr: "…", en: "…" }`. Les mentions légales ont une version par langue dans [`app/[locale]/mentions-legales/`](app/%5Blocale%5D/mentions-legales/), et la version française fait foi.
- **Référencement** : balises `hreflang` (avec `x-default` = français), [`sitemap.xml`](app/sitemap.ts), [`robots.txt`](app/robots.ts) et une image d'aperçu par langue (`og-image.jpg`, `og-image-en.jpg`, sources dans [`design/`](design/)).
- Le CV n'existe qu'en français : le bouton l'indique dans la version anglaise.

## Stack technique

| Domaine               | Outils                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Framework             | [Next.js 14](https://nextjs.org/) (App Router, Server Actions), React 18, TypeScript                                      |
| Langues               | [next-intl](https://next-intl.dev/) (français et anglais)                                                                 |
| Style                 | Tailwind CSS, `tailwindcss-animated`                                                                                      |
| Formulaire de contact | [Resend](https://resend.com/) pour l'envoi d'e-mails, [ALTCHA](https://altcha.org/) contre le spam (sans cookie ni tiers) |
| Notifications         | `react-toastify`                                                                                                          |
| Déploiement           | Docker (build Next.js `standalone`), Docker Compose                                                                       |

## Démarrage en local

**Prérequis** : Node.js 20 ou plus récent (requis par `altcha-lib`), et npm.

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

| Variable                       | Rôle                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_EMAIL`                 | Adresse qui **reçoit** les messages du formulaire de contact                                                                                          |
| `RESEND_API_KEY`               | Clé API [Resend](https://resend.com/api-keys)                                                                                                         |
| `ALTCHA_SECRET`                | Secret de la protection anti-spam ALTCHA, à générer avec `openssl rand -hex 32`. Fourni au démarrage du conteneur seulement, jamais intégré à l'image |
| `DATA_DIR`                     | Facultatif. Dossier du compteur de l'easter egg (par défaut `./data`, `/app/data` dans Docker)                                                        |
| `NEXT_PUBLIC_UMAMI_URL`        | Facultatif. Adresse de l'instance Umami, ex. `https://stats.samuelfaber.dev`                                                                          |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Facultatif. Identifiant du site dans Umami. Sans ces deux variables, aucun suivi                                                                      |

Sans ces variables, le site s'affiche normalement, mais l'envoi du formulaire échoue. En local, n'importe quelle valeur suffit pour `ALTCHA_SECRET`.

## Formulaire de contact

Le formulaire appelle la Server Action `contactMeAction` ([`app/actions.ts`](app/actions.ts)), qui :

1. valide les champs côté serveur : format de l'e-mail, longueurs maximales, objet sur une seule ligne ;
2. vérifie la preuve de travail **ALTCHA** ([`app/utils/altcha.ts`](app/utils/altcha.ts)) : défi signé, valable 10 minutes et utilisable une seule fois ;
3. envoie le message **uniquement** à `RESEND_EMAIL`, avec un `replyTo` vers le visiteur, et un contenu HTML échappé.

Le widget `<altcha-widget>` récupère un défi sur `GET /api/altcha/challenge`, puis le navigateur effectue un petit calcul (PBKDF2) au premier clic dans le formulaire. Aucun cookie, aucun service tiers : la protection est conforme au RGPD sans bandeau de consentement.

Le site n'envoie donc jamais d'e-mail vers une adresse saisie dans le formulaire. L'expéditeur `contact@samuelfaber.dev` doit appartenir à un domaine vérifié dans Resend.

## Compteur de l'easter egg

La page cachée affiche le nombre de personnes qui l'ont trouvée. Au chargement, le navigateur appelle `POST /api/easter-egg` ([`app/api/easter-egg/route.ts`](app/api/easter-egg/route.ts)) :

- une **première visite** incrémente le compteur et pose un cookie `easter_egg_found`, valable un an ;
- une **visite suivante** du même navigateur renvoie le total sans l'incrémenter.

Le total est stocké dans `DATA_DIR/easter-egg-visits.json` ([`app/utils/visitCounter.ts`](app/utils/visitCounter.ts)). Les écritures sont atomiques et passent l'une après l'autre. Si le fichier est corrompu, l'API renvoie une erreur plutôt que de remettre le compteur à zéro. Pour modifier le total à la main, il suffit d'éditer ce fichier.

## Statistiques de visite (Umami)

Les statistiques sont gérées par [Umami](https://umami.is/), auto-hébergé sur le serveur : pas de cookie, pas de données transmises à un tiers, pas de bandeau de consentement. Le script n'est chargé que si `NEXT_PUBLIC_UMAMI_URL` et `NEXT_PUBLIC_UMAMI_WEBSITE_ID` sont définies au **build**. Il ne compte que les visites sur `samuelfaber.dev` (jamais en local) et respecte le réglage « Do Not Track » du navigateur.

### Événements suivis

| Événement                       | Déclencheur                                                          |
| ------------------------------- | -------------------------------------------------------------------- |
| `telechargement-cv`             | Bouton « Télécharger mon CV »                                        |
| `formulaire-contact-envoye`     | Message envoyé avec succès                                           |
| `projet-demo` / `projet-code`   | Boutons « Voir le site » / « Code » d'une carte (propriété `projet`) |
| `tous-les-projets-github`       | Lien « Voir tous mes projets sur GitHub »                            |
| `lien-github` / `lien-linkedin` | Icônes de la section Contact                                         |
| `easter-egg-trouve`             | Première visite d'un navigateur sur la page cachée                   |
| `recommandations-linkedin`      | Lien « Voir toutes mes recommandations sur LinkedIn »                |
| `changement-theme`              | Bouton de thème de l'en-tête (propriété `theme` : thème choisi)      |
| `changement-langue`             | Sélecteur FR / EN (propriété `langue` : langue choisie)              |

Pour un nouveau bouton, ajouter l'attribut `data-umami-event="nom-de-l-evenement"`. Dans du code, utiliser `trackEvent()` ([`app/utils/analytics.ts`](app/utils/analytics.ts)).

Les pages vues en anglais apparaissent avec le préfixe `/en` dans Umami.

Pour savoir d'où viennent les visiteurs, partager des liens avec un paramètre `utm_source`, par exemple `https://samuelfaber.dev/?utm_source=cv`, `?utm_source=linkedin` ou `?utm_source=github`.

### Installation sur le serveur

La configuration se trouve dans [`analytics/`](analytics/) :

1. Créer les secrets : `cp analytics/.env.sample analytics/.env`, puis remplir chaque valeur avec `openssl rand -hex 32`.
2. Lancer Umami : `docker compose -f analytics/compose.yml up -d`. Il écoute sur `127.0.0.1:8600`, donc il n'est pas accessible directement depuis Internet.
3. Ajouter le bloc de [`analytics/Caddyfile.example`](analytics/Caddyfile.example) au Caddyfile, puis recharger Caddy. Le sous-domaine `stats.samuelfaber.dev` doit pointer vers le serveur (enregistrement DNS A ou AAAA).
4. Se connecter sur `https://stats.samuelfaber.dev` (identifiants par défaut `admin` / `umami`, à changer à la première connexion), puis ajouter le site `samuelfaber.dev` et copier son identifiant.
5. Ajouter `NEXT_PUBLIC_UMAMI_URL` et `NEXT_PUBLIC_UMAMI_WEBSITE_ID` au `.env` du portfolio, puis reconstruire : `docker compose -f compose.prod.yml up -d --build`.
6. Programmer la purge des statistiques de plus de **25 mois** (durée maximale recommandée par la CNIL, annoncée dans les mentions légales) avec [`analytics/purge-old-data.sh`](analytics/purge-old-data.sh). Par exemple, avec `crontab -e` : `0 4 1 * * /root/apps/portfolio/analytics/purge-old-data.sh >> /var/log/umami-purge.log 2>&1`.

Les visiteurs peuvent refuser les statistiques depuis la page `/mentions-legales` : le bouton enregistre `umami.disabled` dans leur navigateur, et le script Umami n'envoie alors plus rien.

## Ajouter ou modifier un projet

Les projets sont définis dans [`app/utils/projects.ts`](app/utils/projects.ts). **L'ordre du tableau est l'ordre d'affichage.**

```ts
{
  title: "Mon projet",
  context: { fr: "Projet perso", en: "Personal project" }, // petite ligne au-dessus du titre
  description: { fr: "Une ou deux phrases.", en: "One or two sentences." },
  stack: ["React", "Node.js"],
  emoji: "🚀",                                 // affiché s'il n'y a pas d'image
  image: "/images/projets/mon-projet.webp",    // optionnel
  demo: { url: "https://…" },                 // optionnel, label par défaut : « Voir le site »
  unavailable: { label: { fr: "…", en: "…" } }, // optionnel, badge non cliquable si pas de démo
  repo: "https://github.com/…",                // optionnel
  team: { size: 4, role: { fr: "…", en: "…" } }, // optionnel, absent = projet réalisé seul
}
```

**Visuels** : place les images dans `public/images/projets/`, au format **900 × 352 px** (ratio des bandeaux), de préférence en WebP. Pour un logo, centre-le sur un fond de sa couleur, pour qu'il ne soit pas recadré.

Les onglets de la section « À propos » se modifient dans [`app/utils/data.tsx`](app/utils/data.tsx). Le CV se remplace dans [`public/cv/CV_Samuel_Faber.pdf`](public/cv/CV_Samuel_Faber.pdf), en gardant le même nom de fichier.

## Structure du projet

```text
app/
├── actions.ts            # Server Action du formulaire de contact
├── [locale]/             # Pages, une version par langue (/ et /en)
│   ├── layout.tsx        # Layout global (en-tête, pied de page, thème, Umami, métadonnées)
│   ├── page.tsx          # Page d'accueil (assemble les sections)
│   ├── game/page.tsx     # Page cachée (easter egg)
│   └── mentions-legales/ # Mentions légales et confidentialité (FR et EN)
├── sitemap.ts, robots.ts # Plan du site et consignes aux robots
├── api/                  # Routes : défi ALTCHA, compteur de l'easter egg
├── components/           # Header, Navbar, sections Hero / About / Projects / Contact…
└── utils/
    ├── data.tsx          # Contenu des onglets « À propos »
    ├── projects.ts       # Liste des projets
    ├── recommendations.ts # Recommandations LinkedIn
    ├── altcha.ts         # Création et vérification des défis anti-spam
    ├── analytics.ts      # Envoi d'événements à Umami
    ├── theme.ts          # Thème clair / sombre
    └── visitCounter.ts   # Compteur de l'easter egg
i18n/                     # Langues : routage, navigation, hreflang
messages/                 # Textes de l'interface (fr.json, en.json)
middleware.ts             # Choix de la langue selon le navigateur
public/
├── cv/                   # CV téléchargeable (en français)
└── images/               # Photo, icônes, visuels des projets
@types/                  # Typages (konami, altcha, umami)
analytics/                # Umami : compose, exemple Caddy, script de purge
prod.Dockerfile           # Image de production (Next.js standalone)
compose.prod.yml          # Déploiement Docker Compose
```

## Intégration continue (GitHub Actions)

Chaque pull request et chaque mise à jour de `main` lance [`.github/workflows/ci.yml`](.github/workflows/ci.yml) :

1. **Lint, typage et build** : `npm run lint`, `npm run typecheck`, `npm run build`.
2. **Image Docker de production** : build de `prod.Dockerfile`, démarrage du conteneur, puis vérification des pages en français et en anglais, de la détection de langue, de la page 404, du défi ALTCHA, du plan du site, du CV et de l'optimisation des images.

Les secrets utilisés sont factices : aucun e-mail n'est envoyé. Si une étape échoue, la PR est marquée en rouge, et les journaux du conteneur sont affichés à la fin du job.

## Déploiement (Docker)

Sur le serveur, crée un fichier `.env` à la racine avec les variables d'environnement, puis lance :

```bash
docker compose -f compose.prod.yml up -d --build
```

Le site est alors servi sur le port **8000** de la machine. Il redémarre automatiquement grâce à `restart: always`. Le compteur de l'easter egg est conservé dans le volume Docker `portfolio-data`, qui survit aux redéploiements (mais pas à `docker compose down -v`). Les variables sont injectées au build et à l'exécution : après les avoir modifiées, il faut **reconstruire** l'image (`--build`).

## Contact

- LinkedIn : [Samuel Faber](https://www.linkedin.com/in/samuel-faber-developpeur-web-fullstack-data-scientist-nantes/)
- GitHub : [@samuelfaberdev](https://github.com/samuelfaberdev)
- Formulaire : [samuelfaber.dev/#contact](https://samuelfaber.dev/#contact)
