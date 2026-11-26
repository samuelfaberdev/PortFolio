import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="animate-fade-up flex flex-col items-center justify-center gap-4 p-4 text-center flex-1">
      <h1 className="text-3xl lg:text-4xl gradient-text">404</h1>
      <p>{t("message")}</p>
      <Link href="/" className="gradient-button">
        {t("back")}
      </Link>
    </main>
  );
}
