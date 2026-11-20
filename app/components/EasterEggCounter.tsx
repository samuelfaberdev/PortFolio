"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "../utils/analytics";

type CounterData = { count: number; alreadyCounted: boolean };

const formatNumber = (n: number) => n.toLocaleString("fr-FR");
const ordinal = (n: number) => (n === 1 ? "1ʳᵉ" : `${formatNumber(n)}ᵉ`);

export default function EasterEggCounter() {
  const [data, setData] = useState<CounterData | null>(null);
  const requested = useRef(false);

  useEffect(() => {
    // Évite un double appel en développement (React Strict Mode).
    if (requested.current) return;
    requested.current = true;

    fetch("/api/easter-egg", { method: "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json: CounterData | null) => {
        if (json && typeof json.count === "number") {
          setData(json);
          if (!json.alreadyCounted) trackEvent("easter-egg-trouve");
        }
      })
      .catch(() => {
        // Compteur indisponible : on n'affiche simplement rien.
      });
  }, []);

  if (!data) return null;

  return (
    <p
      role="status"
      className="animate-fade self-center mx-4 mt-6 rounded-full border-2 border-neutral-300 dark:border-neutral-700 px-5 py-2 text-center"
    >
      🥚{" "}
      {data.alreadyCounted ? (
        <>
          <span className="gradient-text font-bold">
            {formatNumber(data.count)}
          </span>{" "}
          {data.count > 1
            ? "personnes ont trouvé cet easter egg"
            : "personne a trouvé cet easter egg"}{" "}
          (et tu en fais partie !)
        </>
      ) : (
        <>
          Bravo, tu es la{" "}
          <span className="gradient-text font-bold">{ordinal(data.count)}</span>{" "}
          personne à trouver cet easter egg !
        </>
      )}
    </p>
  );
}
