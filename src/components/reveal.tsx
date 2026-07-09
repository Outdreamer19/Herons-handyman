"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({ children, className, delay = 0, y = 24, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export function RevealGroup({ children, className, stagger = 0.1, once = true }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
