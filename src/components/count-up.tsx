"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 90 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    if (shouldReduceMotion) {
      if (ref.current && isInView) {
        ref.current.textContent = `${value}${suffix}`;
      }
      return;
    }
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix, shouldReduceMotion, isInView, value]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
