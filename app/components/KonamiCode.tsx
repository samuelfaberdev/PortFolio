"use client";
import Konami from "konami";
import { useEffect } from "react";

export default function KonamiCode() {
  useEffect(() => {
    // Un seul écouteur au montage, retiré au démontage.
    const easterEgg = new Konami("/game");
    return () => easterEgg.unload();
  }, []);
  return null;
}
