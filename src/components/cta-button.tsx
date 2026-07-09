"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}

export function CtaButton({ href, children, variant = "solid", className }: CtaButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300",
          variant === "solid" &&
            "border-gold bg-gold text-navy hover:bg-[#f8b63a] hover:border-[#f8b63a]",
          variant === "outline" &&
            "border-slate-300 bg-white text-navy hover:border-gold hover:text-navy",
          className,
        )}
      >
        {children}
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5",
            variant === "solid" ? "bg-white/85 text-navy" : "bg-slate-100 text-slate-600",
          )}
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
