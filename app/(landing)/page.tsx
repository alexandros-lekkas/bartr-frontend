import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { BentoGridSection } from "./_components/bento-grid";
import { BarterHub } from "./_components/barter-hub";
import { ProcessFlow } from "./_components/process-flow";
import { Team } from "./_components/team";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BarterHub />
      <div className="pt-20 pb-10">
        <BentoGridSection />
      </div>
      <ProcessFlow />
      <Team />
    </>
  );
}
