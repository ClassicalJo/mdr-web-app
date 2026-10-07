import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ToolkitSection } from "./ToolkitSection";
import { ReasonsSection } from "./ReasonsSection";
import { RitualAreasSection } from "./RitualAreasSection";
import { InsideSection } from "./InsideSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { DownloadCtaSection } from "./DownloadCtaSection";
import { FounderStorySection } from "./FounderStorySection";

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/20">
      <Header />
      <main>
        <HeroSection />
        <ToolkitSection />
        <ReasonsSection />
        <RitualAreasSection />
        <InsideSection />
        <TestimonialsSection />
        <DownloadCtaSection />
        <FounderStorySection />
      </main>
      <Footer />
    </div>
  );
}
