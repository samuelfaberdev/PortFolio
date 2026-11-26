export type ThemePreference = "system" | "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Script exécuté dans le <head>, avant l'affichage de la page, pour appliquer
 * le bon thème sans flash. Il suit aussi les changements du thème système
 * tant que le visiteur n'a pas fait de choix.
 */
export const themeInitScript = `(function () {
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  function stored() {
    try { return localStorage.getItem("${THEME_STORAGE_KEY}"); } catch (e) { return null; }
  }
  function apply() {
    var pref = stored();
    var dark = pref === "dark" || (pref !== "light" && media.matches);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }
  apply();
  media.addEventListener("change", apply);
  window.__applyTheme = apply;
})();`;

declare global {
  interface Window {
    __applyTheme?: () => void;
  }
}

/**
 * Secours : sur les pages 404, Next.js 14 construit la page dans le navigateur
 * et le script du <head> n'est alors jamais exécuté. On le lance ici s'il
 * manque, pour que le thème et le bouton de thème fonctionnent partout.
 */
export function ensureThemeInit() {
  if (typeof window === "undefined" || window.__applyTheme) return;
  new Function(themeInitScript)();
}
