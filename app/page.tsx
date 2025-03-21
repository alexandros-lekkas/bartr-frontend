import { Hero } from "./hero";
import { Features } from "./features";
import { CallToAction } from "./call-to-action";
import { ContactUs } from "./contact-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction />
      <ContactUs />
    </>
  );
}
