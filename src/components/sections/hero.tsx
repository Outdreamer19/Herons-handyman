import Image from "next/image";
import { Clock3 } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { site } from "@/lib/data";

function JobsCard({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-display text-2xl leading-none md:text-5xl">100+</p>
      <p className="mt-1 text-[11px] font-medium md:mt-2 md:text-base">Jobs Completed</p>
      <div className="mt-1.5 h-px bg-slate-200 md:mt-3" />
      <p className="mt-1.5 text-[10px] text-slate-600 md:mt-3 md:text-sm">{site.hoursShort}</p>
      <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-semibold md:mt-4 md:gap-2 md:text-sm">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold md:h-7 md:w-7">
          <Clock3 className="h-3 w-3 md:h-4 md:w-4" />
        </span>
        Local Homeowners
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero relative overflow-hidden pt-28 text-white sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0077b6_0%,#0077b6_18%,#03045e_52%,#020617_78%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_18%,rgba(144,224,239,0.12),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,94,0.72)_0%,rgba(3,4,94,0.4)_45%,transparent_80%)]" />
      </div>

      <span
        aria-hidden="true"
        className="hero-watermark pointer-events-none absolute left-1/2 top-[14%] z-0 hidden w-full -translate-x-1/2 select-none text-center font-display text-[24vw] uppercase leading-[0.85] tracking-[0.14em] lg:block"
      >
        {site.shortName}
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-0 md:grid md:min-h-[85svh] md:grid-cols-[0.95fr_1.15fr] md:items-stretch md:gap-4">
        <div className="relative z-20 max-w-xl md:self-center md:pb-8">
          <p className="load inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {site.tagline}
          </p>
          <p className="load mt-4 text-sm font-medium text-white/80">{site.name}</p>
          <h1 className="mt-5 font-display text-5xl uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:text-[5rem]">
            Complete Home
            <br />
            <span className="text-blue">Handyman</span> Solutions
          </h1>
          <p className="load mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            From minor repairs to home improvements, we deliver dependable handyman
            services with transparent pricing and lasting workmanship.
          </p>
          <div className="load mt-6 flex flex-wrap gap-3 md:mt-8">
            <CtaButton href="/quote">Get a Quote</CtaButton>
            <CtaButton
              href="#services"
              variant="outline"
              className="border-blue/50 bg-transparent text-white hover:border-gold hover:text-white"
            >
              Learn More
            </CtaButton>
          </div>
        </div>

        {/* Mobile: stage overlaps CTAs so man head lines up with Get a Quote; card ~10px from bottom */}
        <div className="relative left-5 top-8 mt-64 md:hidden">
          <JobsCard className="load absolute bottom-2.5 left-0 z-20 w-36 rounded-lg bg-white p-3 text-navy shadow-xl shadow-black/25" />
          <div className="absolute right-0 bottom-0 z-10 h-[29rem] w-[76%]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[32%] right-[30%] z-0 h-24 w-24 rounded-full bg-gold/20 blur-xl"
            />
            <Image
              src="/images/hero-man.png"
              alt="Herons Handy Service handyman ready for work"
              width={1024}
              height={1536}
              priority
              sizes="75vw"
              className="absolute right-0 bottom-0 z-10 h-full w-auto max-w-none translate-x-[18%] object-contain object-bottom"
            />
          </div>
        </div>

        <div className="relative z-10 hidden h-full min-h-[85svh] w-full md:block">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[2%] left-1/2 z-[1] h-[75%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(250,163,7,0.55)_0%,rgba(250,163,7,0.22)_42%,transparent_72%)]"
          />
          <Image
            src="/images/hero-man.png"
            alt="Herons Handy Service handyman ready for work"
            width={1024}
            height={1536}
            priority
            sizes="640px"
            className="absolute bottom-0 left-1/2 z-10 h-[min(92svh,54rem)] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          />
          <JobsCard className="absolute bottom-8 right-2 z-20 rounded-lg bg-white p-6 text-navy shadow-2xl shadow-black/35" />
        </div>
      </div>
    </section>
  );
}
