"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Bird } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);
  const solid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={cn(
        "nav-load absolute inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-slate-200/80 bg-white/95 backdrop-blur" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300",
          solid ? "py-3" : "py-4",
        )}
      >
        <Link href="/" className={cn("flex items-center gap-2", solid ? "text-navy" : "text-white")}>
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              solid ? "bg-gold/20 text-gold" : "bg-white/10 text-gold",
            )}
          >
            <Bird className="h-4 w-4" />
          </span>
          <span className="font-display text-xl tracking-wide">{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid ? "text-slate-700 hover:text-navy" : "text-white/85 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/quote"
          className={cn(
            "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors md:inline-flex",
            solid
              ? "bg-navy text-white hover:bg-blue"
              : "bg-white text-navy hover:bg-white/90",
          )}
        >
          Get a Quote
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border md:hidden",
            solid
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white"
              >
                Get a Quote
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy"
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
