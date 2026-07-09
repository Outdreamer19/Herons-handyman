import Image from "next/image";
import { galleryItems } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Our Gallery</p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Explore Our Recent Plumbing Projects
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5" stagger={0.05}>
          {galleryItems.map((item) => (
            <RevealItem key={item.image}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
