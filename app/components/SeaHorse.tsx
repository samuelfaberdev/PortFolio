export default function SeaHorse() {
  return (
    <div className="w-full px-4 md:px-8">
      <iframe
        title="SeaHorse Game"
        src="https://samuelfaberdev.github.io/Seahorse-Game/"
        // Même ratio que le canvas du jeu (1500 × 500 + bordure de 5 px) :
        // le jeu remplit tout le cadre, sans bandes autour.
        className="block w-full aspect-[1510/510] border-0"
        // La page du jeu n'a pas de thème sombre : sans cette ligne, Chrome
        // peint un fond blanc derrière elle quand le site est en sombre.
        style={{ colorScheme: "light" }}
      ></iframe>
    </div>
  );
}
