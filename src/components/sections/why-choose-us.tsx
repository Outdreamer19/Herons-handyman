"use client";

import Image from "next/image";
import { whyRows } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Why Choose Us
          </p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Reliable Plumbing Solutions You Can Trust
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {whyRows.map((row) => {
            const Icon = row.icon;
            return (
              <RevealItem key={row.title}>
                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="relative aspect-[4/3]">
                    <Image src={row.image} alt={row.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-2xl uppercase text-navy">{row.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{row.description}</p>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
