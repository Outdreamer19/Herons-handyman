import { Reveal } from "@/components/reveal";

export function TrustBar() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            About Us
          </p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            We Provide Trusted Plumbing Solutions That Combine Expert Workmanship,
            Rapid Response Times, Transparent Pricing, And Long-Lasting Results.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-slate-600">
            Every project is completed with care and precision, whether it&apos;s a simple fix
            or a full plumbing installation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
