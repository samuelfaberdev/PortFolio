import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="animate-fade-up flex flex-col gap-8">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
