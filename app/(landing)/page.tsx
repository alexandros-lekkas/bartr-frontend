import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { BentoGridSection } from "./_components/bento-grid";
import { BarterHub } from "./_components/barter-hub";
import { Team } from "./_components/team";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BarterHub />
      <div className="pt-6">
        <BentoGridSection />
      </div>
      <Team />
    </>
  );
}
