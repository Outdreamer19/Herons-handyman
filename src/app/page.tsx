import { HomeAnimations } from "@/components/home-animations";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { StatsBand } from "@/components/sections/stats-band";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HomeAnimations />
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <StatsBand />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Team />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
