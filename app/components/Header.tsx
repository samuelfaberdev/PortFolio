import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="z-10 animate-fade-down2 h-16 md:h-24 fixed top-0 px-2 py-4 sm:p-4 flex items-center justify-between w-full border-b-2 border-neutral-800 bg-[var(--background)]">
      <Link href="/" aria-label={`samuelfaber.dev · ${t("home")}`}>
        <span className="flex items-center justify-center gap-1.5 sm:gap-2 text-lg min-[360px]:text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
          <Image
            src="/images/icone.svg"
            alt={t("logoAlt")}
            className="h-9 w-9 md:h-14 md:w-14"
            height={56}
            width={56}
          />
          <p className="gradient-text">samuelfaber.dev</p>
        </span>
      </Link>
      <div className="flex items-center gap-0.5 sm:gap-2 md:gap-4">
        <Navbar />
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
