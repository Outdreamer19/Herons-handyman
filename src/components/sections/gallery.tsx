import Image from "next/image";
import { galleryItems } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { cn } from "@/lib/utils";

const cellClass = [
  "row-span-2 md:col-start-1 md:row-start-1",
  "md:col-start-2 md:row-start-1",
  "md:col-start-2 md:row-start-2",
  "md:col-start-3 md:row-span-2 md:row-start-1",
  "md:col-start-4 md:row-span-2 md:row-start-1",
] as const;

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Our Gallery</p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Explore Our Recent Handyman Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Discover completed projects that highlight our quality workmanship, attention to detail,
            and commitment to delivering reliable handyman solutions for every home.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid h-[420px] grid-cols-2 grid-rows-3 gap-3 sm:h-[520px] sm:gap-4 md:h-[560px] md:grid-cols-4 md:grid-rows-2"
          stagger={0.1}
        >
          {galleryItems.map((item, index) => (
            <RevealItem key={item.image} duration={1} y={-40} className={cn("min-h-0", cellClass[index])}>
              <div className="relative h-full overflow-hidden rounded-lg border border-slate-200">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
