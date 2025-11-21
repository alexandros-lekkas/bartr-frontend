import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { BentoGridSection } from "./_components/bento-grid";
import { BarterHub } from "./_components/barter-hub";
import { Team } from "./_components/team";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
      <div className="container px-4 pt-24 pb-16 mx-auto">
        <BentoGridSection />
      </div>
      <BarterHub />
      <Team />
    </>
  );
}
