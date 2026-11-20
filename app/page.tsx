import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import KonamiCode from "./components/KonamiCode";

export default function Home() {
  return (
    <main className="animate-fade-up flex flex-col gap-8">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <KonamiCode />
    </main>
  );
}
