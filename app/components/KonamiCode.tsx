"use client";
import Konami from "konami";
import { useEffect } from "react";

export default function KonamiCode() {
  useEffect(() => {
    const easterEgg = new Konami("/game");
  });
  return <></>;
}
