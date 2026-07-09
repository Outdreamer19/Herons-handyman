import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-navy px-8 py-14 text-center sm:px-12">
          <Reveal>
            <h2 className="head-split font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
              Need Fast & Reliable Expert Plumbing Services?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
              Whether it&apos;s a minor repair or a major plumbing emergency, PlumFix is ready
              to deliver professional solutions with expert workmanship and dependable service.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CtaButton href="#">Book Service</CtaButton>
              <CtaButton href="tel:+16475559218" variant="outline" className="border-white/30 bg-transparent text-white hover:border-gold hover:text-white">
                Call Now
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
