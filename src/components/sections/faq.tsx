"use client";

import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              FAQ
            </span>
            <h2 className="head-split mt-5 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
              Answers To Your <span className="text-blue">Handyman</span> Questions
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              Find quick answers to common handyman questions. From routine repairs to home
              improvements, we&apos;re here to provide reliable solutions and peace of mind.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion className="gap-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="rounded-lg border-none bg-white/80 px-6 shadow-none"
                >
                  <AccordionTrigger className="items-center py-6 text-left text-base font-medium text-navy no-underline hover:no-underline sm:text-lg **:data-[slot=accordion-trigger-icon]:hidden">
                    <span className="pr-4">{faq.question}</span>
                    <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center text-gold">
                      <Plus className="h-4 w-4 group-aria-expanded/accordion-trigger:hidden" />
                      <Minus className="hidden h-4 w-4 group-aria-expanded/accordion-trigger:inline" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
