"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  ensureThemeInit,
  THEME_STORAGE_KEY,
  type ThemePreference,
} from "../utils/theme";

const ORDER: ThemePreference[] = ["system", "light", "dark"];

function Icon({ preference }: { preference: ThemePreference }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (preference === "light") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  }
  if (preference === "dark") {
    return (
      <svg {...common}>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export default function ThemeToggle() {
  const t = useTranslations("Theme");
  const [preference, setPreference] = useState<ThemePreference | null>(null);

  // Lecture du choix enregistré après le montage (évite un écart d'hydratation)
  useEffect(() => {
    ensureThemeInit();
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      // Stockage indisponible : on reste en automatique
    }
    setPreference(stored === "light" || stored === "dark" ? stored : "system");
  }, []);

  function cycle() {
    const current = preference ?? "system";
    const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
    try {
      if (next === "system") localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Stockage indisponible : le choix vaut pour cette page seulement
      document.documentElement.classList.toggle(
        "dark",
        next === "dark" ||
          (next === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
    }
    window.__applyTheme?.();
    setPreference(next);
  }

  const current = preference ?? "system";
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];

  return (
    <button
      type="button"
      onClick={cycle}
      className="p-2 rounded-lg transition hover:opacity-70"
      aria-label={t("ariaLabel", { current: t(current), next: t(next) })}
      title={t("title", { current: t(current) })}
      data-umami-event="changement-theme"
      data-umami-event-theme={next}
    >
      {/* Icône neutre tant que le choix enregistré n'est pas lu */}
      <span className={preference ? "" : "opacity-0"}>
        <Icon preference={current} />
      </span>
    </button>
  );
}
