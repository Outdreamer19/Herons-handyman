import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Phone, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Get a Quote | ${site.name}`,
  description: `Request a free handyman quote from ${site.name}. Clear pricing, reliable workmanship, and service Monday to Friday.`,
};

export default function QuotePage() {
  return (
    <>
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
              Free Quote
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
              Get A Clear Quote From{" "}
              <span className="text-sky">{site.name}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Tell us what you need and we&apos;ll come back with transparent pricing and next steps.
              Available {site.hoursShort}.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue/15 text-blue">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-2xl uppercase text-navy">
                  Transparent Pricing
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  No hidden fees. We review your request and provide a clear quote before any work begins.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Clock3 className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-2xl uppercase text-navy">
                  Reliable Scheduling
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We operate {site.hours}. Once your quote is confirmed, we&apos;ll book a convenient slot.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <Phone className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-2xl uppercase text-navy">Prefer To Call?</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Speak with us directly on{" "}
                  <a href={site.phoneHref} className="font-semibold text-blue hover:underline">
                    {site.phone}
                  </a>
                  .
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex text-sm font-semibold text-navy transition-colors hover:text-blue"
                >
                  Or leave feedback on the contact form →
                </Link>
              </div>
            </div>

            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
