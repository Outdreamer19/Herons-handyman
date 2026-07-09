import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Testimonials</p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Delivering Results Homeowners Trust
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-4 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
