"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Contact
          </p>
          <h2 className="head-split mt-4 font-display text-4xl uppercase leading-tight text-navy sm:text-5xl">
            Get In Touch Or Share Feedback
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
            Have a question, need advice, or want to leave feedback about {site.name}?
            Send us a message and we&apos;ll get back to you during {site.hoursShort}.
          </p>
          <div className="mt-8 space-y-3 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-navy">Phone:</span>{" "}
              <a href={site.phoneHref} className="transition-colors hover:text-blue">
                {site.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-navy">Email:</span>{" "}
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-blue">
                {site.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-navy">Hours:</span> {site.hours}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="rounded-3xl border border-sky/40 bg-mint p-8 text-center sm:p-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue/15 text-blue">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-3xl uppercase text-navy">Message Sent</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Thanks for getting in touch. We&apos;ll review your message and reply as soon as we can.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-navy">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm font-medium text-navy">
                Subject
                <select
                  name="subject"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                  defaultValue="General enquiry"
                >
                  <option>General enquiry</option>
                  <option>Feedback</option>
                  <option>Service question</option>
                  <option>Complaint</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="mt-5 block text-sm font-medium text-navy">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                  placeholder="Tell us how we can help, or share your feedback..."
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-[#f8b63a]"
              >
                Send Message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
