import ThemeInit from "./components/ThemeInit";
import "./globals.css";

// Page 404 de secours pour les adresses qui ne passent pas par le middleware
// de langue (ex. fichier inexistant) : bilingue, sans layout de langue.
export default function GlobalNotFound() {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="flex flex-col items-center justify-center gap-4 h-screen p-4 text-center">
        <ThemeInit />
        <h1 className="text-3xl gradient-text">404</h1>
        <p>Cette page n&apos;existe pas.</p>
        <p lang="en">This page doesn&apos;t exist.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" hrefLang="fr" className="gradient-button">
            Retour à l&apos;accueil
          </a>
          <a href="/en" hrefLang="en" lang="en" className="gradient-button">
            Back to home
          </a>
        </div>
      </body>
    </html>
  );
}
