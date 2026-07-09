import Image from "next/image";
import { team } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function Team() {
  return (
    <section id="team" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Our Team</p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Meet The Experts Behind PlumFix
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3" stagger={0.08}>
          {team.map((member) => (
            <RevealItem key={`${member.name}-${member.role}`}>
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={member.image} alt={member.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl uppercase text-navy">{member.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
