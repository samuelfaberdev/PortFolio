import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

/**
 * Langue du navigateur : seule la PREMIÈRE langue compte.
 * - français (fr, fr-BE, fr-CA…) → français ;
 * - toute autre langue → anglais ;
 * - aucune langue indiquée (robots d'indexation, aperçus de liens) → français.
 */
export function preferredLocale(acceptLanguage: string | null): "fr" | "en" {
  const first = acceptLanguage
    ?.split(",")[0]
    ?.split(";")[0]
    ?.trim()
    .toLowerCase();
  if (!first || first === "*") return "fr";
  return first === "fr" || first.startsWith("fr-") ? "fr" : "en";
}

export default function middleware(request: NextRequest) {
  // On ne transmet à next-intl que la langue retenue par notre règle : sa
  // détection (et son cookie) s'appuient alors sur ce choix. Un choix manuel
  // mémorisé dans le cookie reste prioritaire.
  const headers = new Headers(request.headers);
  headers.set(
    "accept-language",
    preferredLocale(request.headers.get("accept-language")),
  );
  return handleI18nRouting(new NextRequest(request, { headers }));
}

export const config = {
  // Toutes les pages, sauf l'API, les fichiers internes de Next.js et les
  // fichiers statiques (images, CV, favicon…)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
