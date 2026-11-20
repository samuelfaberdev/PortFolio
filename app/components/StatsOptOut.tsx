"use client";

import { useEffect, useState } from "react";

// Clé lue par le script Umami avant chaque envoi : si elle existe, rien n'est envoyé
const OPT_OUT_KEY = "umami.disabled";

export default function StatsOptOut() {
  const [optedOut, setOptedOut] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setOptedOut(localStorage.getItem(OPT_OUT_KEY) !== null);
    } catch {
      setOptedOut(null);
    }
  }, []);

  function toggle() {
    try {
      if (optedOut) localStorage.removeItem(OPT_OUT_KEY);
      else localStorage.setItem(OPT_OUT_KEY, "1");
      setOptedOut(!optedOut);
    } catch {
      // Stockage indisponible (navigation très restreinte) : rien à faire
    }
  }

  if (optedOut === null) return null;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border border-neutral-300 dark:border-neutral-700 p-4">
      <p role="status" className="flex-1">
        {optedOut
          ? "🚫 Vos visites ne sont pas comptées dans les statistiques sur ce navigateur."
          : "📊 Vos visites sont comptées de façon anonyme dans les statistiques."}
      </p>
      <button type="button" onClick={toggle} className="gradient-button">
        {optedOut ? "Réactiver les statistiques" : "Refuser les statistiques"}
      </button>
    </div>
  );
}
