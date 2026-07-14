"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { quoteServiceOptions, site } from "@/lib/data";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-sky/40 bg-mint p-8 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue/15 text-blue">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-3xl uppercase text-navy sm:text-4xl">
          Quote Request Received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
          Thanks for contacting {site.name}. We&apos;ll review your details and get back to you
          during {site.hoursShort}.
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue"
        >
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Full name
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/20"
            placeholder="Your full name"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Phone
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/20"
            placeholder="07..."
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-navy">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/20"
          placeholder="you@example.com"
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-navy">
        Service needed
        <select
          required
          name="service"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/20"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {quoteServiceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-navy">
        Preferred date
        <input
          name="preferredDate"
          type="date"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/20"
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-navy">
        Job details
        <textarea
          required
          name="details"
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/20"
          placeholder="Describe the job, location, and anything we should know..."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-[#f8b63a] sm:w-auto"
      >
        Request Quote
      </button>
    </form>
  );
}
