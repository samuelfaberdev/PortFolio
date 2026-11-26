import StatsOptOut from "../../components/StatsOptOut";
import { CONTACT_EMAIL, LAST_UPDATE, Link, Section, linkClass } from "./shared";

const cell = "py-2 pr-4";
const row = "border-b border-neutral-200 dark:border-neutral-800";

/** English translation, provided for convenience: the French version prevails. */
export default function LegalEn() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl gradient-text">
          Legal notice and privacy
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: {LAST_UPDATE.en}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          This English translation is provided for convenience. In case of any
          difference, the{" "}
          <Link
            className="underline underline-offset-4 hover:opacity-70"
            href="/mentions-legales"
            locale="fr"
            hrefLang="fr"
          >
            French version
          </Link>{" "}
          prevails.
        </p>
      </header>

      <Section id="editeur" title="Site publisher">
        <p>
          <strong>samuelfaber.dev</strong> is a personal website, published on a
          non-professional basis by <strong>Samuel FABER</strong>, who is also
          the publication director.
        </p>
        <p>
          Contact:{" "}
          <a className={linkClass} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          or via the{" "}
          <Link className={linkClass} href="/#contact">
            contact form
          </Link>
          .
        </p>
      </Section>

      <Section id="hebergeur" title="Hosting">
        <p>
          The website and its statistics are hosted on a server rented from{" "}
          <strong>Hostinger International Ltd</strong>, 61 Lordou Vironos
          Street, 6023 Larnaca, Cyprus (
          <a
            className={linkClass}
            href="https://www.hostinger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hostinger.com
          </a>
          ).
        </p>
      </Section>

      <Section id="propriete" title="Intellectual property">
        <p>
          The text, layout and code of this website are the property of Samuel
          FABER, unless stated otherwise. The logos and visuals of the projects
          shown belong to their respective owners and are only used to
          illustrate the work.
        </p>
      </Section>

      <Section id="formulaire" title="Personal data: contact form">
        <p>
          When you use the contact form, the following data is processed:{" "}
          <strong>your email address</strong>, the <strong>subject</strong> and
          the <strong>content of your message</strong>.
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-1">
          <li>
            <strong>Data controller:</strong> Samuel FABER.
          </li>
          <li>
            <strong>Purpose:</strong> only to reply to your message. Your data
            is never sold, nor used for commercial or advertising purposes.
          </li>
          <li>
            <strong>Legal basis:</strong> legitimate interest in replying to the
            requests sent to me.
          </li>
          <li>
            <strong>Recipient:</strong> only me. Your message is delivered by
            the email service <strong>Resend</strong> (Plus Five Five, Inc.,
            United States), under the European Commission&apos;s standard
            contractual clauses, then received in my <strong>Gmail</strong>{" "}
            inbox (Google).
          </li>
          <li>
            <strong>Retention period:</strong> for the duration of our exchange,
            then at most 3 years after our last contact.
          </li>
        </ul>
        <p>
          The form&apos;s spam protection,{" "}
          <a
            className={linkClass}
            href="https://altcha.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ALTCHA
          </a>
          , runs entirely on this website: your browser performs a small
          calculation, with no cookie, no tracking and no third-party service.
        </p>
      </Section>

      <Section id="droits" title="Your rights">
        <p>
          Under the GDPR and the French Data Protection Act, you can access your
          data, have it corrected or erased, object to its processing or ask for
          it to be restricted. To exercise these rights, write to me at{" "}
          <a className={linkClass} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          If you believe your rights have not been respected, you can lodge a
          complaint with the{" "}
          <a
            className={linkClass}
            href="https://www.cnil.fr/en/complaints"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL
          </a>{" "}
          (the French data protection authority).
        </p>
      </Section>

      <Section id="traceurs" title="Cookies, trackers and statistics">
        <p>
          This website uses <strong>no advertising cookies</strong> and no
          third-party trackers. The only items stored in your browser are exempt
          from consent, and you can delete them at any time from your browser
          settings:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-300 dark:border-neutral-700">
                <th className={cell}>Name</th>
                <th className={cell}>Type</th>
                <th className={cell}>What it is for</th>
                <th className="py-2">Duration</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className={row}>
                <td className={`${cell} font-mono`}>theme</td>
                <td className={cell}>Local storage</td>
                <td className={cell}>
                  Remembers the theme you chose (light or dark).
                </td>
                <td className="py-2">Until you change it</td>
              </tr>
              <tr className={row}>
                <td className={`${cell} font-mono`}>NEXT_LOCALE</td>
                <td className={cell}>Cookie</td>
                <td className={cell}>
                  Remembers the language chosen with the FR / EN switch (only if
                  it differs from your browser&apos;s language).
                </td>
                <td className="py-2">12 months</td>
              </tr>
              <tr className={row}>
                <td className={`${cell} font-mono`}>easter_egg_found</td>
                <td className={cell}>Cookie</td>
                <td className={cell}>
                  Counts each person who discovers the site&apos;s hidden page
                  only once. It contains no personal data.
                </td>
                <td className="py-2">12 months, not extended</td>
              </tr>
              <tr>
                <td className={`${cell} font-mono`}>umami.disabled</td>
                <td className={cell}>Local storage</td>
                <td className={cell}>
                  Remembers that you opted out of statistics (only if you use
                  the button below).
                </td>
                <td className="py-2">Until you turn them back on</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl mt-2">Visitor statistics</h3>
        <p>
          To find out which pages and projects visitors are interested in, this
          website uses{" "}
          <a
            className={linkClass}
            href="https://umami.is"
            target="_blank"
            rel="noopener noreferrer"
          >
            Umami
          </a>
          , a <strong>cookie-free</strong> analytics tool hosted on my own
          server. Statistics are anonymous, shared with no one, not used to
          follow you on other websites, and kept for{" "}
          <strong>25 months at most</strong>. Your browser&apos;s &quot;Do Not
          Track&quot; setting is respected.
        </p>
        <StatsOptOut />

        <h3 className="text-xl mt-2">Embedded content</h3>
        <p>
          The site&apos;s hidden page embeds a game hosted on GitHub Pages
          (GitHub, Inc.). When it is displayed, your browser connects to
          GitHub&apos;s servers, which receive your IP address. Links to my
          projects and profiles (GitHub, LinkedIn) lead to third-party websites,
          which apply their own privacy policies.
        </p>
      </Section>
    </>
  );
}
