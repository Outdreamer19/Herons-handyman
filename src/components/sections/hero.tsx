import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="hero relative overflow-hidden bg-[#141419] pt-28 text-white sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(250,163,7,0.22),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,25,0.94)_0%,rgba(20,20,25,0.72)_48%,rgba(20,20,25,0.2)_100%)]" />
      </div>

      <span className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 select-none font-display text-[17vw] uppercase leading-none text-white/[0.08] lg:block">
        PLUMFIX
      </span>

      <div className="relative mx-auto grid min-h-[88svh] w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-8">
        <div className="max-w-xl pb-16 md:pb-24">
          <p className="load inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Reliable Home Plumbing
          </p>
          <h1 className="mt-5 font-display text-5xl uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:text-[5rem]">
            Complete Home
            <br />
            <span className="text-gold">Plumbing</span> Solutions
          </h1>
          <p className="load mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            From minor repairs to urgent emergencies, we deliver dependable plumbing
            services with transparent pricing and lasting workmanship.
          </p>
          <div className="load mt-8 flex flex-wrap gap-3">
            <CtaButton href="#contact" className="border-white bg-white text-navy hover:bg-white/90">
              Book Service
            </CtaButton>
            <CtaButton
              href="#services"
              variant="outline"
              className="border-gold/50 bg-transparent text-white hover:border-gold hover:text-white"
            >
              Learn More
            </CtaButton>
          </div>
        </div>

        <div className="relative h-full min-h-[30rem] overflow-hidden md:min-h-[42rem]">
          <Image
            src="/images/man.avif"
            alt="Plumber working on home plumbing installation"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center md:object-right-bottom"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141419] via-transparent to-transparent md:hidden" />

          <div className="absolute bottom-8 right-0 rounded-2xl bg-white p-6 text-navy shadow-2xl shadow-black/35 md:bottom-12 md:right-2">
            <p className="font-display text-5xl leading-none">450+</p>
            <p className="mt-2 text-base font-medium">Happy Customers</p>
            <div className="mt-3 h-px bg-slate-200" />
            <p className="mt-3 text-sm text-slate-600">24/7 Emergency Service</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 text-gold">
                <ShieldCheck className="h-4 w-4" />
              </span>
              House Owner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
