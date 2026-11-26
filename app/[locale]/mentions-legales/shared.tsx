import { Link } from "@/i18n/navigation";

export const LAST_UPDATE = { fr: "26 novembre 2026", en: "26 November 2026" };
export const CONTACT_EMAIL = "samuel.faber.dev@gmail.com";
export const linkClass = "gradient-text font-bold hover:opacity-80";

export function Section({
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

export { Link };
