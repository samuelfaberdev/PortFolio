import EasterEggCounter from "../components/EasterEggCounter";
import SeaHorse from "../components/SeaHorse";

export default function Game() {
  return (
    <main className="animate-fade flex flex-col gap-4 w-full h-full">
      <EasterEggCounter />
      <SeaHorse />
    </main>
  );
}
