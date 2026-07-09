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
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">FAQ</p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Answers To Your Plumbing Questions
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-6">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border-b border-slate-200 last:border-none"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy no-underline hover:no-underline sm:text-lg [&_svg]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
