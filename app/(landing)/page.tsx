import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { BentoGridSection } from "./_components/bento-grid";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
      <div className="container mx-auto px-4">
        <BentoGridSection />
      </div>
    </>
  );
}
