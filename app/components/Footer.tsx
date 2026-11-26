import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="p-8 flex flex-col items-center justify-center gap-1 text-center">
      <p>{t("copyright", { year: new Date().getFullYear() })}</p>
      {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {t("analytics")}
        </p>
      )}
      <Link
        href="/mentions-legales"
        className="text-sm underline underline-offset-4 hover:opacity-70"
      >
        {t("legal")}
      </Link>
    </footer>
  );
}
