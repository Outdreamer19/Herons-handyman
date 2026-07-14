import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Who We Are
          </p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Trusted Handyman Work With Clear Pricing And Careful Craftsmanship
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Every project is completed with care and precision, whether it&apos;s a simple fix
            or a larger home improvement.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex text-sm font-semibold text-gold transition-colors hover:text-[#f8b63a]"
          >
            Learn more about {site.name} →
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200">
            <Image
              src="/images/section-2.jpg"
              alt="Herons Handy Service tradesperson at work"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
