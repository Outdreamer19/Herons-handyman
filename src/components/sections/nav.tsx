"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "nav-load fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-slate-200/80 bg-white/95 backdrop-blur" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-4",
        )}
      >
        <Link href="#" className={cn("flex items-center gap-2", scrolled ? "text-navy" : "text-white")}>
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              scrolled ? "bg-gold/20 text-gold" : "bg-white/10 text-gold",
            )}
          >
            <Droplets className="h-4 w-4" />
          </span>
          <span className="font-display text-xl tracking-wide">PLUMFIX</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-slate-700 hover:text-navy" : "text-white/85 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={cn(
            "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors md:inline-flex",
            scrolled
              ? "bg-navy text-white hover:bg-blue"
              : "bg-white text-navy hover:bg-white/90",
          )}
        >
          Get Started
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border md:hidden",
            scrolled
              ? "border-slate-300 text-slate-700"
              : "border-white/30 text-white",
          )}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+16475559218"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
