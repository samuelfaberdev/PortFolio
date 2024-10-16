import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="animate-fade-up flex flex-col gap-8">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
