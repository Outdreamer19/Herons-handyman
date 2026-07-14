import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Phone, ShieldCheck, BadgeCheck } from "lucide-react";
import { HomeAnimations } from "@/components/home-animations";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { CtaButton } from "@/components/cta-button";
import { aboutValues, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `Learn about ${site.name} — a trusted local handyman service built on honest work, clear pricing, and reliable craftsmanship.`,
};

export default function AboutPage() {
  return (
    <>
      <HomeAnimations />
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-28 pb-16 text-white sm:pt-32 sm:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0077b6_0%,#03045e_55%,#0b0f1a_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_22%,rgba(144,224,239,0.14),transparent_44%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,94,0.72)_0%,rgba(3,4,94,0.4)_45%,transparent_80%)]" />
          </div>

          <span
            aria-hidden="true"
            className="hero-watermark pointer-events-none absolute left-1/2 top-[18%] z-0 hidden w-full -translate-x-1/2 select-none text-center font-display text-[19vw] uppercase leading-[0.85] tracking-tight lg:block"
          >
            {site.shortName}
          </span>

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              About Us
            </p>
            <h1 className="head-split mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
              Local Handyman Service You Can Rely On
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {site.name} is built on straightforward work, clear communication, and respect
              for your home. We keep things simple, honest, and done properly.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Who We Are
              </p>
              <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
                Practical Help For Everyday Home Jobs
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  We help homeowners with the jobs that keep a house running smoothly —
                  repairs, carpentry, painting, assembly, and light improvements.
                </p>
                <p>
                  Our approach is simple: arrive on time, explain the work clearly, quote
                  upfront, and leave the space tidy when we&apos;re finished.
                </p>
                <p>
                  Available {site.hoursShort}, serving homes across the local area.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:col-span-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue/15 text-blue">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-2xl uppercase text-navy">
                  Clear Quotes, No Surprises
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  You&apos;ll know the cost before work begins. If anything changes, we discuss
                  it with you first.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Clock3 className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl uppercase text-navy">Reliable Hours</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{site.hours}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl uppercase text-navy">Quality Finish</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Careful workmanship and a clean handover on every job.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-80 lg:min-h-full">
                <Image
                  src={site.owner.image}
                  alt={`${site.owner.name}, ${site.owner.title}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Message From The Owner
                </p>
                <h2 className="head-split mt-4 font-display text-3xl uppercase leading-tight text-navy sm:text-4xl">
                  A Personal Commitment To Doing The Job Right
                </h2>
                <blockquote className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  <p>
                    &ldquo;When I started {site.name}, the goal was simple: give local homeowners
                    a handyman they can trust. That means clear communication, fair pricing,
                    and work I&apos;m happy to put my name to.&rdquo;
                  </p>
                  <p>
                    &ldquo;Whether it&apos;s a small repair or a bigger improvement, I treat every
                    home the way I&apos;d want mine treated — carefully, honestly, and with
                    pride in the finish.&rdquo;
                  </p>
                </blockquote>
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="font-display text-2xl uppercase text-navy">{site.owner.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{site.owner.title}</p>
                  <p className="mt-3 text-sm text-slate-500">{site.name}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Our Promise
              </p>
              <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
                What You Can Expect From Us
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {aboutValues.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="font-display text-2xl uppercase text-navy">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-navy px-8 py-14 text-center text-white sm:px-12">
              <h2 className="head-split font-display text-4xl uppercase leading-tight sm:text-5xl">
                Ready To Get Started?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
                Request a clear quote or get in touch — we&apos;re happy to help with your next
                home job.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CtaButton href="/quote">Get a Quote</CtaButton>
                <CtaButton
                  href={site.phoneHref}
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:border-sky hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </span>
                </CtaButton>
              </div>
              <Link
                href="/#contact"
                className="mt-6 inline-block text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Or send a message on our contact form →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
