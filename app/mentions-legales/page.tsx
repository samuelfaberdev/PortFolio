import type { Metadata } from "next";
import StatsOptOut from "../components/StatsOptOut";

export const metadata: Metadata = {
  title: "Mentions légales et confidentialité | Samuel Faber",
  description:
    "Mentions légales, politique de confidentialité et gestion des traceurs du site samuelfaber.dev.",
};

const LAST_UPDATE = "20 novembre 2026";
const CONTACT_EMAIL = "samuel.faber.dev@gmail.com";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex flex-col gap-3 scroll-mt-20 md:scroll-mt-28"
    >
      <h2 className="text-2xl lg:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

const linkClass = "gradient-text font-bold hover:opacity-80";

export default function MentionsLegales() {
  return (
    <main className="w-full max-w-3xl p-4 flex flex-col gap-10 leading-relaxed">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl gradient-text">
          Mentions légales et confidentialité
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Dernière mise à jour : {LAST_UPDATE}
        </p>
      </header>

      <Section id="editeur" title="Éditeur du site">
        <p>
          Le site <strong>samuelfaber.dev</strong> est un site personnel, édité
          à titre non professionnel par <strong>Samuel FABER</strong>, également
          directeur de la publication.
        </p>
        <p>
          Contact :{" "}
          <a className={linkClass} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          ou via le{" "}
          <a className={linkClass} href="/#contact">
            formulaire de contact
          </a>
          .
        </p>
      </Section>

      <Section id="hebergeur" title="Hébergement">
        <p>
          Le site et ses statistiques sont hébergés sur un serveur loué auprès
          de <strong>Hostinger International Ltd</strong>, 61 Lordou Vironos
          Street, 6023 Larnaca, Chypre (
          <a
            className={linkClass}
            href="https://www.hostinger.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            hostinger.fr
          </a>
          ).
        </p>
      </Section>

      <Section id="propriete" title="Propriété intellectuelle">
        <p>
          Les textes, la mise en page et le code de ce site sont la propriété de
          Samuel FABER, sauf mention contraire. Les logos et visuels des projets
          présentés appartiennent à leurs titulaires respectifs et ne sont
          utilisés que pour illustrer les réalisations.
        </p>
      </Section>

      <Section
        id="formulaire"
        title="Données personnelles : formulaire de contact"
      >
        <p>
          Lorsque vous utilisez le formulaire de contact, les données suivantes
          sont traitées : <strong>votre adresse e-mail</strong>, l&apos;
          <strong>objet</strong> et le <strong>contenu de votre message</strong>
          .
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-1">
          <li>
            <strong>Responsable du traitement :</strong> Samuel FABER.
          </li>
          <li>
            <strong>Finalité :</strong> uniquement répondre à votre message. Vos
            données ne sont jamais vendues, ni utilisées à des fins commerciales
            ou publicitaires.
          </li>
          <li>
            <strong>Base légale :</strong> l&apos;intérêt légitime à répondre
            aux demandes qui me sont adressées.
          </li>
          <li>
            <strong>Destinataire :</strong> moi seul. Votre message est acheminé
            par le service d&apos;envoi d&apos;e-mails <strong>Resend</strong>{" "}
            (Plus Five Five, Inc., États-Unis), dans le cadre des clauses
            contractuelles types de la Commission européenne, puis reçu dans ma
            messagerie <strong>Gmail</strong> (Google).
          </li>
          <li>
            <strong>Durée de conservation :</strong> le temps de notre échange,
            puis au maximum 3 ans après notre dernier contact.
          </li>
        </ul>
        <p>
          La protection anti-spam du formulaire,{" "}
          <a
            className={linkClass}
            href="https://altcha.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ALTCHA
          </a>
          , fonctionne entièrement sur ce site : votre navigateur effectue un
          petit calcul, sans cookie, sans pistage et sans aucun service tiers.
        </p>
      </Section>

      <Section id="droits" title="Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous pouvez
          accéder à vos données, les faire rectifier ou effacer, vous opposer à
          leur traitement ou en demander la limitation. Pour exercer ces droits,
          écrivez-moi à{" "}
          <a className={linkClass} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          adresser une réclamation à la{" "}
          <a
            className={linkClass}
            href="https://www.cnil.fr/fr/plaintes"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL
          </a>
          .
        </p>
      </Section>

      <Section id="traceurs" title="Cookies, traceurs et statistiques">
        <p>
          Ce site n&apos;utilise <strong>aucun cookie publicitaire</strong> ni
          aucun traceur tiers. Les seuls éléments déposés dans votre navigateur
          sont exemptés de consentement, et vous pouvez les supprimer à tout
          moment depuis les réglages de votre navigateur :
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-300 dark:border-neutral-700">
                <th className="py-2 pr-4">Nom</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2 pr-4">À quoi il sert</th>
                <th className="py-2">Durée</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <td className="py-2 pr-4 font-mono">theme</td>
                <td className="py-2 pr-4">Stockage local</td>
                <td className="py-2 pr-4">
                  Mémoriser le thème choisi (clair ou sombre).
                </td>
                <td className="py-2">Jusqu&apos;à ce que vous en changiez</td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <td className="py-2 pr-4 font-mono">easter_egg_found</td>
                <td className="py-2 pr-4">Cookie</td>
                <td className="py-2 pr-4">
                  Ne compter qu&apos;une fois chaque personne qui découvre la
                  page cachée du site. Il ne contient aucune donnée personnelle.
                </td>
                <td className="py-2">12 mois, non prolongée</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono">umami.disabled</td>
                <td className="py-2 pr-4">Stockage local</td>
                <td className="py-2 pr-4">
                  Retenir votre refus des statistiques (seulement si vous
                  utilisez le bouton ci-dessous).
                </td>
                <td className="py-2">Jusqu&apos;à ce que vous le réactiviez</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl mt-2">Statistiques de visite</h3>
        <p>
          Pour savoir quelles pages et quels projets intéressent les visiteurs,
          ce site utilise{" "}
          <a
            className={linkClass}
            href="https://umami.is"
            target="_blank"
            rel="noopener noreferrer"
          >
            Umami
          </a>
          , un outil de mesure d&apos;audience <strong>sans cookie</strong>,
          hébergé sur mon propre serveur. Les statistiques sont anonymes, ne
          sont partagées avec personne, ne servent pas à vous suivre sur
          d&apos;autres sites et sont conservées{" "}
          <strong>25 mois maximum</strong>. Le réglage « Do Not Track » de votre
          navigateur est respecté.
        </p>
        <StatsOptOut />

        <h3 className="text-xl mt-2">Contenus intégrés</h3>
        <p>
          La page cachée du site intègre un jeu hébergé sur GitHub Pages
          (GitHub, Inc.). En l&apos;affichant, votre navigateur se connecte aux
          serveurs de GitHub, qui reçoivent votre adresse IP. Les liens vers mes
          projets et mes profils (GitHub, LinkedIn) mènent vers des sites tiers,
          qui appliquent leur propre politique de confidentialité.
        </p>
      </Section>
    </main>
  );
}
