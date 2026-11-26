"use client";
import Konami from "konami";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import { getPathname } from "@/i18n/navigation";

export default function KonamiCode() {
  const locale = useLocale();
  useEffect(() => {
    // Un seul écouteur au montage, retiré au démontage.
    const easterEgg = new Konami(getPathname({ href: "/game", locale }));
    return () => easterEgg.unload();
  }, [locale]);
  return null;
}
