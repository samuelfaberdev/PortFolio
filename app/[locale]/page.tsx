import { setRequestLocale } from "next-intl/server";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import RecommendationsSection from "../components/RecommendationsSection";
import KonamiCode from "../components/KonamiCode";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <main className="animate-fade-up flex flex-col gap-8">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <RecommendationsSection />
      <ContactSection />
      <KonamiCode />
    </main>
  );
}
