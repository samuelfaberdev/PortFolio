import "./globals.css";

// Page 404 de secours pour les adresses qui ne passent pas par le middleware
// de langue (ex. fichier inexistant) : bilingue, sans layout de langue.
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="flex flex-col items-center justify-center gap-4 h-screen p-4 text-center">
        <h1 className="text-3xl gradient-text">404</h1>
        <p>Cette page n&apos;existe pas.</p>
        <p lang="en">This page doesn&apos;t exist.</p>
        <a href="/" className="gradient-button">
          samuelfaber.dev
        </a>
      </body>
    </html>
  );
}
