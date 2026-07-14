"use client";

import { useEffect } from "react";
import { revealAllAnimatedElements } from "@/lib/gsap-text-reveal";

export function HomeAnimations() {
  useEffect(() => {
    let cleanup = () => {};
    let active = true;

    const init = async () => {
      try {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          revealAllAnimatedElements();
          return;
        }

        await document.fonts.ready;
        if (!active) return;

        const { initHomeAnimations } = await import("@/lib/gsap-text-reveal");
        if (!active) return;

        cleanup = initHomeAnimations();
      } catch (error) {
        console.error("Failed to initialize home animations:", error);
        revealAllAnimatedElements();
      }
    };

    void init();

    return () => {
      active = false;
      cleanup();
    };
  }, []);

  return null;
}
