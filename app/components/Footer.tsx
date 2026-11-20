export default function Footer() {
  return (
    <footer className="p-8 flex flex-col items-center justify-center gap-1 text-center">
      <p>
        &copy; {new Date().getFullYear()} - Développé avec 💖 par Samuel Faber
      </p>
      {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Statistiques de visite anonymes, sans cookie, hébergées sur mon
          serveur (Umami).
        </p>
      )}
    </footer>
  );
}
