"use client";

import Image from "next/image";
import { services } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const serviceImages = ["/images/section-1.jpg", "/images/section-7.jpg", "/images/section-3.jpg"];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Our Services
          </p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Solutions For Every Home Repair Need
          </h2>
          <p className="mt-4 text-base text-slate-600">
            From minor repairs to larger improvements, we provide dependable handyman
            solutions backed by expert workmanship and years of experience.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.2}>
          {services.map(({ icon: Icon, title, description }, index) => (
            <RevealItem key={title}>
              <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={serviceImages[index]}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl uppercase text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
