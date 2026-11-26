"use client";

import { useEffect } from "react";
import { ensureThemeInit } from "../utils/theme";

/** Applique le thème sur les pages sans en-tête (404 de secours). */
export default function ThemeInit() {
  useEffect(() => ensureThemeInit(), []);
  return null;
}
